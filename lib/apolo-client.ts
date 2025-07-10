import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    Observable,
} from "@apollo/client";

import crypto from "crypto-browserify";

import { Buffer } from "buffer";

import { setContext } from "@apollo/client/link/context";

import { onError } from "@apollo/client/link/error";

import { enqueueSnackbar } from "notistack";

import { store } from "@/store/store";

import { logout } from "@/store/features/user/userSlice";

// Utility Functions

export const removeToken = (): void =>
    localStorage.removeItem("proxi-accessToken");

export const getAuthToken = (): string | null =>
    localStorage.getItem("proxi-accessToken");

export const setToken = (token: string): void => {
    localStorage.setItem("proxi-accessToken", token);
};

const getBranchAPI = (): string | null => localStorage.getItem("branchAPI");

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
    throw new Error(
        "NEXT_PUBLIC_API_BASE_URL is not set in environment variables."
    );
}

const AES_SECRET_KEY = Buffer.from(
    process.env.NEXT_PUBLIC_AES_SECRET_KEY as string,

    "hex"
);

const AES_IV = Buffer.from(process.env.NEXT_PUBLIC_AES_IV as string, "hex");

const encryptJSON = (data: unknown): string => {
    try {
        const cipher = crypto.createCipheriv("aes-256-cbc", AES_SECRET_KEY, AES_IV);

        const jsonData = JSON.stringify(data);

        let encrypted = cipher.update(jsonData, "utf8", "base64");

        encrypted += cipher.final("base64");

        return encrypted;
    } catch (error) {
        console.error("Encryption error:", error);

        throw new Error("Failed to encrypt data.");
    }
};

const decryptResponse = (encryptedData: string): Record<string, unknown> => {
    try {
        const decipher = crypto.createDecipheriv(
            "aes-256-cbc",

            AES_SECRET_KEY,

            AES_IV
        );

        let decrypted = decipher.update(encryptedData, "base64", "utf8");

        decrypted += decipher.final("utf8");

        return JSON.parse(decrypted);
    } catch (error) {
        console.error("Decryption error:", error);

        throw new Error("Failed to decrypt response data.");
    }
};

// Encryption Link

const encryptionLink = new ApolloLink((operation, forward) => {
    const { variables, query, operationName } = operation;

    const encryptedVariables = encryptJSON(variables);

    const requestBody = {
        query: query.loc?.source.body,

        variables: encryptedVariables,

        operationName,
    };

    operation.setContext(
        ({ headers = {} }: { headers: Record<string, string> }) => ({
            headers: {
                ...headers,

                "Content-Type": "application/json",
            },

            body: JSON.stringify(requestBody),
        })
    );

    return forward(operation).map((response) => {
        if (response?.data) {
            try {
                const decryptedData = decryptResponse(
                    response?.data as unknown as string
                );

                console.log("Decrypted Response:", decryptedData);

                return { ...response, data: decryptedData };
            } catch (error) {
                console.error("Decryption error:", error);
            }
        }

        return response;
    });
});

// Log Link

const logLink = new ApolloLink((operation, forward) => {
    console.log("Outgoing GraphQL Request:", {
        query: operation.query.loc?.source.body,

        variables: operation.variables,
    });

    return forward(operation);
});

// Custom HTTP Link

const customHttpLink = new ApolloLink((operation, forward) => {
    const branchAPI = getBranchAPI();

    const apiURL = branchAPI ? `${branchAPI}graphql` : API_BASE_URL;

    const context = operation.getContext();

    const { headers, body } = context;

    return new Observable((observer) => {
        fetch(apiURL, {
            method: "POST",

            headers,

            body,
        })
            .then((response) => response.json())

            .then((result) => {
                observer.next(result);

                observer.complete();
            })

            .catch((error) => observer.error(error));
    });
});

// Auth Link

const authLink = setContext(
    (_, { headers }: { headers?: Record<string, string> }) => {
        const token = getAuthToken();

        return {
            headers: {
                ...headers,

                Authorization: token ? `JWT ${token}` : "",

                "Content-Type": "application/json",
            },
        };
    }
);

// Refresh Token Handling

interface RefreshTokenResponse {
    data?: {
        refreshToken?: {
            token: string;

            refreshToken: string;
        };
    };
}

const handleTokenRefresh = async (
    operation: any,

    forward: any
): Promise<Observable<any>> => {
    const refreshToken = localStorage.getItem("proxi-refreshToken");

    if (!refreshToken) {
        throw new Error("Authentication required");
    }

    const branchAPI = getBranchAPI();

    const apiURL = branchAPI ? `${branchAPI}graphql` : API_BASE_URL;

    try {
        const encryptedVariables = encryptJSON({ refreshToken });

        const response = await fetch(apiURL, {
            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                query: `

mutation refreshUserToken($refreshToken: String!) {

refreshUserToken(refreshToken: $refreshToken) {

token

refreshToken

 }
 }
`,

                variables: encryptedVariables,

                operationName: "refreshUserToken",
            }),
        });

        const result = await response.json();

        const res: RefreshTokenResponse = decryptResponse(result?.data as string);

        const newAccessToken = res.data?.refreshToken?.token;

        const newRefreshToken = res.data?.refreshToken?.refreshToken;

        if (newRefreshToken && newAccessToken) {
            localStorage.setItem("proxi-accessToken", newAccessToken);

            localStorage.setItem("proxi-refreshToken", newRefreshToken);
        }

        if (newAccessToken) {
            setToken(newAccessToken);

            operation.setContext({
                headers: {
                    ...operation.getContext().headers,

                    authorization: `JWT ${newAccessToken}`,
                },
            });

            return forward(operation);
        } else {
            throw new Error("Failed to refresh token");
        }
    } catch (error) {
        console.error("Token refresh failed:", error);

        throw error;
    }
};

// Error Link

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach((err) => {
            console.error(
                `[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`
            );
        });
    }

    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});

export const createApolloClient = (onSessionExpire?: () => void) => {
    const handleLogout = () => {
        store.dispatch(logout());

        if (onSessionExpire) {
            onSessionExpire();
        }
    };

    const refreshLink = new ApolloLink((operation, forward) => {
        return new Observable((observer) => {
            forward(operation).subscribe({
                next: (result) => {
                    const hasExpiredError = result?.data?.errors?.some(
                        (error: any) => error.message === "Signature has expired"
                    );

                    if (hasExpiredError) {
                        enqueueSnackbar("Your Session has expired.", {
                            variant: "error",

                            preventDuplicate: true,
                        });

                        setTimeout(() => {
                            handleLogout();
                        }, 2000);
                    } else {
                        observer.next(result);

                        observer.complete();
                    }
                },

                error: (error) => {
                    console.log("Error in Apollo Link:", error);

                    if (error.message.includes("Signature has expired")) {
                        handleTokenRefresh(operation, forward)
                            .then((refreshedObservable) =>
                                refreshedObservable.subscribe(observer)
                            )

                            .catch((refreshError) => observer.error(refreshError));
                    } else {
                        observer.error(error);
                    }
                },
            });
        });
    });

    const link = ApolloLink.from([
        logLink,

        authLink,

        refreshLink,

        encryptionLink,

        errorLink,

        customHttpLink,
    ]);

    return new ApolloClient({
        link,

        cache: new InMemoryCache({ addTypename: false }),
    });
};
