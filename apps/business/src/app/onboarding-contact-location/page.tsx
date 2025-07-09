'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function OnboardingContactLocation() {
  const router = useRouter();
  const [contactEmail, setContactEmail] = useState('');
  const canContinue = contactEmail.trim().length > 0;

  return (
    <OnboardingLayout>
      <h1 className="mb-6 text-2xl font-semibold text-heading">Contact &amp; Location</h1>
      <form
        className="max-w-md space-y-4"
        onSubmit={e => {
          e.preventDefault();
          if (canContinue) router.push('/onboarding-branding');
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="contact-email">Contact Email</Label>
          <Input
            id="contact-email"
            type="email"
            value={contactEmail}
            onChange={e => setContactEmail(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={!canContinue}>Continue</Button>
      </form>
    </OnboardingLayout>
  );
}
