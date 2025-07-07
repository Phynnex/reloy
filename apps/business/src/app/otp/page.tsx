'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AuthLayout from '@/components/AuthLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState('');

  return (
    <AuthLayout>
      <form
        className="w-full max-w-md space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          router.push('/');
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="otp">OTP</Label>
          <Input
            id="otp"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <Button className="w-full">Continue</Button>
      </form>
    </AuthLayout>
  );
}
