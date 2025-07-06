import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";

export default function BusinessSignUp() {
  return (
    <AuthLayout>
      <Link href="/" className="text-2xl font-bold text-primary">ReLoy Business</Link>
      <form className="w-full max-w-md space-y-4">
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
        <Button variant="outline" className="flex w-full items-center justify-center gap-2">
          <FaGoogle /> Sign in with Google
        </Button>
      </form>
      <p className="text-sm">Already have an account? <Link href="/sign-in" className="text-primary hover:underline">Sign In</Link></p>
    </AuthLayout>
  );
}
