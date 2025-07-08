'use client';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/AuthLayout";
import { RiBriefcase4Line } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import Link from 'next/link';

export default function BusinessSignUp() {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className="w-full overflow-y-scroll hide-scrollbar">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 ml-4 ">Create a Business Account</h1>
        <p className="text-sm text-gray-600 ml-4">Please fill in your details to create an account</p>
      </div>
      <form
        className="ml-4 w-full max-w-md space-y-4 "
        onSubmit={(e) => {
          e.preventDefault();
          router.push('/verify-email');
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="business-name">Business Name</Label>
          <div className="relative flex justify-between">
            <Input id="business-name" placeholder="e.g Power House" />
            <RiBriefcase4Line className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-email">Business Email</Label>
           <div className="relative flex justify-between">
          <Input id="business-email" type="email" placeholder="e.g johndoe@email.com" />
          <HiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5" />
          </div>
          {/* <p className="text-xs text-danger">Please provide a valid email.</p> */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone-number">Phone Number</Label>
          <div className="relative flex justify-between">
          <Input id="phone-number" type="tel" placeholder="e.g 0123456789" />
          <FiPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5"/>
          </div>
          {/* <p className="text-xs text-danger">Phone number is required.</p> */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative flex justify-between">
          <Input id="password" type="password" placeholder="Create a password" />
          <MdOutlineLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5"/>
          </div>
          {/* <p className="text-xs text-danger">Please choose a password.</p> */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
         
          <div className="relative flex justify-between">
          <Input id="confirm-password" type="password"  placeholder="Confirm password" />
          <MdOutlineLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray5"/>
          </div>
          {/* <p className="text-xs text-danger">Passwords must match.</p> */}
        </div>
        <Button className="w-full">Continue</Button>
        <Button variant="outline" className="flex w-full items-center justify-center gap-2">
          <FcGoogle /> Sign in with Google
        </Button>
      </form>
      <p className="text-sm">Already have an account? <Link href="/sign-in" className="text-primary hover:underline">Sign In</Link></p>
      </div>
    </AuthLayout>
  );
}
