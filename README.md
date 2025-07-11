# ReLoy Monorepo

This repository contains a monorepo setup for **ReLoy**, a referral and loyalty platform built with Next.js and TypeScript.

## Structure


- `apps/web` – public website
- `apps/business` – business dashboard
- `apps/admin` – admin portal
- `apps/referrer` – referrer dashboard
- `packages/ui` – shared UI components (placeholder)
- `packages/design-tokens` – shared design tokens used by all apps

## Getting Started

First ensure that `pnpm` is installed globally:

```bash
npm install -g pnpm
```

Then install dependencies and run the development server:

```bash
pnpm install

pnpm --filter web dev     # or business, admin, referrer

```
Copy `.env.example` to `.env` and update the values for your environment:

```bash
cp .env.example .env
# edit .env and set the variables
```


The default `NEXT_PUBLIC_API_URL` points to the shared API endpoint at
`https://7bc4d325f649.ngrok-free.app/graphql`.

Each app requires `NEXT_PUBLIC_API_URL` to be defined in its environment. Set
this variable when running or deploying the app so the frontend can communicate
with the GraphQL API server.

This project uses Tailwind CSS and the new Next.js `app` router.

## Managing Dependencies

This repo uses a **pnpm workspace**. Running `pnpm add <pkg>` at the repository
root fails with `ERR_PNPM_ADDING_TO_ROOT` because dependencies must be installed
inside a workspace.

Install a package from within the desired app or package directory:

```bash
cd apps/business
pnpm add <pkg>
```

You can also add a dependency from the root by targeting a workspace with the
`--filter` option:

```bash
pnpm add --filter ./apps/business <pkg>
```

Use the `-w`/`--workspace-root` flag only when the dependency truly belongs in
the root package.

## Design Tokens

Shared design tokens live in `packages/design-tokens`. Tailwind configurations
for each app import these tokens and expose them as utilities.

To add a new token:

1. Edit `packages/design-tokens/index.js` and add your value.
2. Restart the dev server so Tailwind picks up the change.

Use the token name in your components, e.g. `className="text-primary"` or
`className="bg-accent-1"`.


## License

This project is licensed under the MIT License.
