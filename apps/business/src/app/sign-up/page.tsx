import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function BusinessSignUp() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex w-full flex-col md:w-1/2 p-8 gap-8">
        <Link href="/" className="text-2xl font-bold text-primary">ReLoy Business</Link>
        <form className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="business-name">Business Name</Label>
            <Input id="business-name" placeholder="Acme Inc." />
            <p className="text-xs text-danger">Please enter your business name.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="business-email">Business Email</Label>
            <Input id="business-email" type="email" placeholder="name@example.com" />
            <p className="text-xs text-danger">Please provide a valid email.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" type="tel" placeholder="555-555-5555" />
            <p className="text-xs text-danger">Phone number is required.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
            <p className="text-xs text-danger">Please choose a password.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" />
            <p className="text-xs text-danger">Passwords must match.</p>
          </div>
          <Button className="w-full">Create Account</Button>
          <Button variant="outline" className="w-full flex gap-2 items-center justify-center">
            <FaGoogle /> Sign in with Google
          </Button>
        </form>
        <p className="text-sm">Already have an account? <Link href="/sign-in" className="text-primary hover:underline">Sign In</Link></p>
      </div>
      <div className="flex w-full items-center justify-center bg-light-blue md:w-1/2 p-8">
        <div className="h-64 w-64 rounded-md bg-gray5" />
      </div>
    </div>
  );
}
