'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/AuthLayout';
import { cn } from '@/lib/utils';

export default function SignIn() {
  const [tab, setTab] = useState<'email' | 'phone'>('email');

  return (
    <AuthLayout>
      <Link href="/" className="text-2xl font-bold text-primary">ReLoy Business</Link>
      <div className="flex max-w-md w-full border-b border-stroke-grey text-sm font-medium">
        <button
          className={cn('flex-1 py-2', tab === 'email' ? 'border-b-2 border-primary text-primary' : 'text-gray500')}
          onClick={() => setTab('email')}
        >
          Email
        </button>
        <button
          className={cn('flex-1 py-2', tab === 'phone' ? 'border-b-2 border-primary text-primary' : 'text-gray500')}
          onClick={() => setTab('phone')}
        >
          Phone
        </button>
      </div>
      <form className="w-full max-w-md space-y-4">
        {tab === 'email' ? (
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="555-555-5555" />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full">Sign In</Button>
      </form>
      <div className="flex w-full max-w-md justify-between text-sm">
        <Link href="/forgot-password" className="text-primary hover:underline">Forgot Password?</Link>
        <Link href="/sign-up" className="text-primary hover:underline">Create Account</Link>
      </div>
    </AuthLayout>
  );
}
