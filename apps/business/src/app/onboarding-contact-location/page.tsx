'use client';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import { Card } from "@/components/ui/card";
import { CustomSelect } from "@/components/ui/custom-select";

// Example country list, you can extend this as needed
const countries = [
  { value: "my", label: "Malaysia" },
  { value: "sg", label: "Singapore" },
  { value: "id", label: "Indonesia" },
  { value: "th", label: "Thailand" },
  { value: "ph", label: "Philippines" },
  { value: "ng", label: "Nigeria" },
  { value: "gh", label: "Ghana" },

];

export default function OnboardingContactLocation() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  // Only enable continue if all fields are filled
  const canContinue =
    email.trim().length > 0 &&
    phone.trim().length > 0 &&
    address.trim().length > 0 &&
    country.trim().length > 0;

  return (
    <OnboardingLayout>
      <Card>
        <h2 className="text-2xl font-semibold mb-1 text-heading">Let’s set up your business profile</h2>
        <p className="text-gray-600 mb-7 text-sm">
          We’ll use this info to personalize your dashboard and help you launch campaigns faster.
        </p>
        {/* Section Title */}
        <div className="mb-2">
          <span className="font-semibold text-primary text-[16px]">Contact & Location Info</span>
        </div>
        <form
          className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            if (canContinue) router.push('/onboarding-branding');
          }}
        >
          {/* Email */}
          <div>
            <Label htmlFor="business-email" className="block mb-2 text-sm">Business email</Label>
            <Input
              id="business-email"
              placeholder="powerhouse@email.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          {/* Phone */}
          <div>
            <Label htmlFor="business-phone" className="block mb-2 text-sm">Phone number</Label>
            <Input
              id="business-phone"
              placeholder="e.g. 01938193839"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full"
            />
          </div>
          {/* Address */}
          <div>
            <Label htmlFor="business-address" className="block mb-2 text-sm">Business address</Label>
            <Input
              id="business-address"
              placeholder="e.g. Sole Proprietor, Ltd, Online, Physical"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full"
            />
          </div>
          {/* Country */}
          <div>
            <Label htmlFor="country" className="block mb-2 text-sm">Country</Label>
            

                  <CustomSelect
              options={countries}
              value={country}
              onChange={setCountry}
              placeholder="Select a country"
       
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-between pt-28">
            <button
              type="button"
              className="border border-gray5 text-heading inline-flex w-[150px] h-[59px] items-center justify-center rounded-md text-sm font-medium cursor-pointer"
              onClick={() => router.push('/dashboard')}
            >
              Save for later
            </button>
            <div className="flex items-center gap-28">
              <button
                type="button"
                className="text-primary font-medium"
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90 inline-flex w-[110px] h-[44px] items-center justify-center rounded-md text-sm font-medium cursor-pointer disabled:opacity-30"
                disabled={!canContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </Card>
    </OnboardingLayout>
  );
}
