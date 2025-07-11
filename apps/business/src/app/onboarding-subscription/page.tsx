'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Plan {
  name: string;
  price: string;
  per: string;
  features: string[];
  planType: string;
  type: string;
}

const plans: Record<'monthly' | 'yearly', Plan[]> = {
  monthly: [
    {
      name: 'Growth',
      price: '₦7,500',
      per: '/ month',
      features: [
        '10 Campaigns',
        'Basic Analytics',
        'Limited Reward Budget',
      ],
      planType: 'growth',
      type: 'paid',
    },
    {
      name: 'Pro',
      price: '₦18,000',
      per: '/ month',
      features: [
        'Unlimited Campaigns',
        'Full Analytics',
        '₦50K Reward Cap',
        '₦200k Reward Budget',
      ],
      planType: 'pro',
      type: 'paid',
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      per: '',
      features: [
        'Unlimited Campaigns',
        'Full Analytics',
        'Dedicated Support',
        'Custom Integrations',
        'Flexible Budgeting',
      ],
      planType: 'enterprise',
      type: 'custom',
    },
  ],
  yearly: [
    {
      name: 'Growth',
      price: '₦75,000',
      per: '/ year',
      features: [
        '10 Campaigns',
        'Basic Analytics',
        'Limited Reward Budget',
      ],
      planType: 'growth',
      type: 'paid',
    },
    {
      name: 'Pro',
      price: '₦180,000',
      per: '/ year',
      features: [
        'Unlimited Campaigns',
        'Full Analytics',
        '₦600K Reward Cap',
        '₦2M Reward Budget',
      ],
      planType: 'pro',
      type: 'paid',
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      per: '',
      features: [
        'Unlimited Campaigns',
        'Full Analytics',
        'Dedicated Support',
        'Custom Integrations',
        'Flexible Budgeting',
      ],
      planType: 'enterprise',
      type: 'custom',
    },
  ],
};

export default function SubscriptionPlanPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const activePlans: Plan[] = plans[billing];

  return (
    <OnboardingLayout>
      <Card>
        <h2 className="text-2xl font-semibold mb-1 text-heading">Subscription Plan</h2>
        <p className="text-gray-600 mb-7 text-sm">
          Select a plan that fits your business needs to start creating campaigns and rewarding your customers.
        </p>

        {/* Billing Tabs */}
        <div className="flex gap-2 mb-7">
          <button
            type="button"
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              billing === "monthly"
                ? "bg-[#E9F0FF] text-primary"
                : "text-gray-600"
            )}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            type="button"
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              billing === "yearly"
                ? "bg-[#E9F0FF] text-primary"
                : "text-gray-600"
            )}
            onClick={() => setBilling('yearly')}
          >
            Yearly
          </button>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "border rounded-xl py-7 px-6 flex flex-col items-start min-h-[350px]",
                selectedPlan === plan.planType
                  ? "border-primary bg-[#F4F7FF]"
                  : "border-gray-200 bg-white"
              )}
            >
              <span className={cn(
                "text-sm mb-1",
                plan.name === 'Growth' && "text-[#7A83E2]",
                plan.name === 'Pro' && "text-[#6E93FB]",
                plan.name === 'Enterprise' && "text-[#B9B4F5]"
              )}>
                {plan.name}
              </span>
              <span className={cn(
                "font-bold text-xl mb-1",
                plan.type === "custom" && "text-[17px] font-semibold"
              )}>
                {plan.price}
                <span className="font-normal text-base ml-1">{plan.per}</span>
              </span>
              <ul className="mb-6 mt-2 flex-1 text-[15px] text-gray-800">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xl font-bold leading-none">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {/* Action Button */}
              {plan.type === "custom" ? (
                <button
                  type="button"
                  className={cn(
                    "w-full h-12 rounded-md bg-[#E9F0FF] text-primary font-medium mt-auto",
                    "hover:bg-[#d7e3fc] transition"
                  )}
                  onClick={() => setSelectedPlan(plan.planType)}
                >
                  Contact Us
                </button>
              ) : (
                <label className="w-full cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    className="accent-primary mr-2"
                    checked={selectedPlan === plan.planType}
                    onChange={() => setSelectedPlan(plan.planType)}
                  />
                  <span
                    className={cn(
                      "inline-block w-full h-12 rounded-md bg-[#E9F0FF] text-primary font-medium text-center leading-[48px] cursor-pointer",
                      selectedPlan === plan.planType && "ring-2 ring-primary"
                    )}
                  >
                    Select Plan
                  </span>
                </label>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-8">
          <button
            type="button"
            className="border border-gray5 text-heading inline-flex w-[150px] h-[44px] items-center justify-center rounded-md text-sm font-medium"
            onClick={() => alert('Save for later')}
          >
            Save for later
          </button>
          <div className="flex items-center gap-10">
            <button
              type="button"
              className="text-primary font-medium"
              onClick={() => history.back()}
            >
              Back
            </button>

            {/* ShadCN Dialog for final step */}
            <Dialog open={showModal} onOpenChange={setShowModal}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  disabled={!selectedPlan}
                  className={cn(
                    "bg-primary text-white hover:bg-primary/90 inline-flex w-[110px] h-[44px] items-center justify-center rounded-md text-sm font-medium",
                    !selectedPlan && "opacity-30 cursor-not-allowed"
                  )}
                  onClick={() => {
                    if (selectedPlan) setShowModal(true);
                  }}
                >
                  Continue
                </button>
              </DialogTrigger>
              
              <DialogContent className="max-w-md w-full flex flex-col items-center gap-6 py-12">
                {/* Success Icon */}
                <div className="bg-[#E7F7ED] rounded-full flex items-center justify-center w-16 h-16 mb-4">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#E7F7ED"/>
                    <path d="M9.5 13.5L11 15L14.5 11.5" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold mb-2">You're all set!</div>
                  <div className="text-gray-700 text-base mb-4">Your profile is ready. Start rewarding your customers and growing your business.</div>
                </div>
                <Button className="w-full" onClick={() => window.location.href = '/dashboard'}>
                  Go to Dashboard
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </OnboardingLayout>
  );
}
