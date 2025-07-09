'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function OnboardingSubscription() {
  const router = useRouter();
  const [plan, setPlan] = useState('');
  const canContinue = plan.trim().length > 0;

  return (
    <OnboardingLayout>
      <h1 className="mb-6 text-2xl font-semibold text-heading">Subscription</h1>
      <form
        className="max-w-md space-y-4"
        onSubmit={e => {
          e.preventDefault();
          if (canContinue) router.push('/dashboard');
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="plan">Subscription Plan</Label>
          <Input
            id="plan"
            value={plan}
            onChange={e => setPlan(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={!canContinue}>Finish</Button>
      </form>
    </OnboardingLayout>
  );
}
