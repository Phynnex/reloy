'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function OnboardingBusinessInfo() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState('');
  const canContinue = businessName.trim().length > 0;

  return (
    <OnboardingLayout>
      <h1 className="mb-6 text-2xl font-semibold text-heading">Business Info</h1>
      <form
        className="max-w-md space-y-4"
        onSubmit={e => {
          e.preventDefault();
          if (canContinue) router.push('/onboarding-contact-location');
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="business-name">Business Name</Label>
          <Input
            id="business-name"
            value={businessName}
            onChange={e => setBusinessName(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={!canContinue}>Continue</Button>
      </form>
    </OnboardingLayout>
  );
}
