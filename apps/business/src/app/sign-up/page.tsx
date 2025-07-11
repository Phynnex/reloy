'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/AuthLayout';
import { useRouter } from 'next/navigation';
import { RiBriefcase4Line } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineLock } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

export default function BusinessSignUp() {
  const router = useRouter();

  // State for each field
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validation logic
  const isFormValid =
    businessName.trim() &&
    businessEmail.trim() &&
    phoneNumber.trim() &&
    password &&
    confirmPassword &&
    password === confirmPassword;

const handleSignUp = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  
  // GraphQL Mutation for the Sign-Up
  const query = `
    mutation signUp($businessName: String!, $businessEmail: String!, $phoneNumber: String!, $password: String!) {
      signUp(input: { businessName: $businessName, businessEmail: $businessEmail, phoneNumber: $phoneNumber, password: $password }) {
        token
        user {
          id
          businessName
        }
      }
    }
  `;

  const variables = {
    businessName,
    businessEmail,
    phoneNumber,
    password
  };

  try {
    const response = await fetch("/api/graphql", {  // Change /api/graphql with your endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const responseData = await response.json();
    
    if (response.ok) {
      // If the request is successful
      const { token, user } = responseData.data.signUp;
      // Proceed with the logic after successful sign-up, like redirecting
      router.push('/verify-email');
    } else {
      setError(responseData.errors?.[0]?.message || "Something went wrong");
    }

  } catch (err) {
    setError("Failed to connect to server");
  } finally {
    setLoading(false);
  }
};



  return (
    <AuthLayout>
      <div className="w-full">
        <div className="mt-8 md:mt-10 lg:mt-12 mb-8">
          <h1 className="text-xl  lg:text-[29px] font-semibold text-heading">Create your Account</h1>
          <p className="text-xs lg:text-sm text-body">Please fill in your details to create an account</p>
        </div>

       


        <form
          className="w-full max-w-xl space-y-4"
          onSubmit={handleSignUp}
        >
          
          <div className="space-y-2">
            <Label htmlFor="business-name">Business Name</Label>
            <div className="relative flex justify-between">
              <Input
                id="business-name"
                placeholder="e.g Power House"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
              />
              <RiBriefcase4Line  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="business-email">Business Email</Label>
            <div className="relative flex justify-between">
              <Input
                id="business-email"
                type="email"
                placeholder="e.g johndoe@email.com"
                value={businessEmail}
                onChange={e => setBusinessEmail(e.target.value)}
              />
              <HiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <div className="relative flex justify-between">
              <Input
                id="phone-number"
                type="tel"
                placeholder="e.g 0123456789"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <FiPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative flex justify-between">
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <MdOutlineLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative flex justify-between">
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <MdOutlineLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5" />
            </div>
          </div>
          <Button disabled={!isFormValid || loading}>
    {loading ? "Submitting..." : "Continue"}
  </Button>

  {error && <p className="text-red-500 mt-2">{error}</p>}
          <Button variant="outline" className="flex w-full items-center justify-center gap-2" type="button">
            <FcGoogle /> Sign in with Google
          </Button>
          <div className="w-fit mx-auto flex justify-center items-center text-body md:text-sm pt-4 text-xs border rounded-sm py-2 px-4 mt-2">
            Already have an account?
            <Link href="/sign-in" className="text-primary hover:underline ml-2 font-semibold">Sign In</Link>
          </div>
          <p className="text-center text-body md:text-sm pt-4 text-xs">
            By Signing up, you agree to the
            <Link href="/policy" className="hover:underline ml-2 font-semibold">Terms of Use </Link>
            and Privacy Policy of
            <Link href="/policy" className="hover:underline ml-2 font-semibold">SharePro</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

