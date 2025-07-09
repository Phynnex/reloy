'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function OnboardingBranding() {
  const router = useRouter();
  const [logoUrl, setLogoUrl] = useState('');
  const canContinue = logoUrl.trim().length > 0;

  return (
    <OnboardingLayout>
      <h1 className="mb-6 text-2xl font-semibold text-heading">Branding</h1>
      <form
        className="max-w-md space-y-4"
        onSubmit={e => {
          e.preventDefault();
          if (canContinue) router.push('/onboarding-subscription');
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="logo-url">Logo URL</Label>
          <Input
            id="logo-url"
            value={logoUrl}
            onChange={e => setLogoUrl(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={!canContinue}>Continue</Button>
      </form>
    </OnboardingLayout>
  );
}
