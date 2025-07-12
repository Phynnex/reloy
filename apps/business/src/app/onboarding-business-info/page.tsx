'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import { Card } from "@/components/ui/card";
import { CustomSelect } from "@/components/ui/custom-select";

const categories = [
  { value: "retail", label: "Retail" },
  { value: "education", label: "Education" },
  { value: "services", label: "Services" },
  { value: "tech", label: "Tech" },
];

export default function OnboardingBusinessInfo() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [website, setWebsite] = useState('');

  // Button only enabled when ALL required fields are filled
  const canContinue =
    businessName.trim().length > 0 &&
    category.trim().length > 0 &&
    businessType.trim().length > 0;

  return (
    <OnboardingLayout>
      <Card>
        <h2 className="text-2xl font-semibold mb-1 text-heading">Let’s set up your business profile</h2>
        <p className="text-gray-600 mb-7 text-sm">
          We’ll use this info to personalize your dashboard and help you launch campaigns faster.
        </p>
        <form
          className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            if (canContinue) router.push('/onboarding-contact-location');
          }}
        >
          {/* Section Title */}
          <div className="mb-2">
            <span className="font-semibold text-primary text-[16px]">Business Info</span>
          </div>
          {/* Business Name */}
          <div>
            <Label htmlFor="business-name" className="block mb-2 text-sm">Business name</Label>
            <Input
              id="business-name"
              placeholder="Power House"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              className="w-full"
            />
          </div>
          {/* Business Category */}
          <div>
            <Label htmlFor="category" className="block mb-2 text-sm">Business category</Label>
            {/* <Select
              options={categories}
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="Select a category"
            /> */}

            <CustomSelect
  options={categories} 
 
  value={category}
  onChange={setCategory}
  placeholder="Select a category"
  allowCustomInput
/>

          </div>
          {/* Business Type */}
          <div>
            <Label htmlFor="business-type" className="block mb-2 text-sm">Business type</Label>
            <Input
              id="business-type"
              placeholder="e.g. Sole Proprietor, Ltd, Online, Physical"
              value={businessType}
              onChange={e => setBusinessType(e.target.value)}
              className="w-full"
            />
          </div>
          {/* Website/Instagram */}
          <div>
            <Label htmlFor="website" className="block mb-2 text-sm">
              Website or Instagram handle (optional)
            </Label>
            <Input
              id="website"
              placeholder="input a link"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              className="w-full"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-between pt-28">
            <button
              type="button"
              className="border border-gray5 text-heading   inline-flex w-[150px] h-[59px] items-center justify-center rounded-md text-sm font-medium cursor-pointer"
              onClick={() => router.push('/dashboard')}
            >
              Save for later
            </button>
            <button
              type="submit"
              className="bg-primary text-white hover:bg-primary/90 inline-flex w-[150px] h-[59px] items-center justify-center rounded-md text-sm font-medium cursor-pointer disabled:opacity-30"
              disabled={!canContinue}
            >
              Continue
            </button>
          </div>
        </form>
      </Card>
    </OnboardingLayout>
  );
}
