import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/AuthLayout';

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <form className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <Button className="w-full">Send Reset Link</Button>
      </form>
      <p className="text-sm"><Link href="/sign-in" className="text-primary hover:underline">Back to Sign In</Link></p>
    </AuthLayout>
  );
}
