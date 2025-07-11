import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import { Button } from '@/components/ui/button';

export default function VerifyEmail() {
  return (
    <AuthLayout>
      <Link href="/" className="text-2xl font-bold text-primary">ReLoy Business</Link>
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-heading">Verify Your Email</h2>
        <p className="text-sm text-gray500">We've sent a verification link to your email. Please check your inbox and click the link to continue.</p>
        <Button className="w-full">Resend Verification Email</Button>
        <p className="text-sm">Already verified? <Link href="/sign-in" className="text-primary hover:underline">Sign In</Link></p>
      </div>
    </AuthLayout>
  );
}
