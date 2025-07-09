'use client';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import { Card } from "@/components/ui/card";
import { FiCamera } from 'react-icons/fi';

export default function OnboardingBranding() {
  const router = useRouter();
  const [logo, setLogo] = useState<File | null>(null);
  const [primaryColor, setPrimaryColor] = useState('');
  const [accentColor, setAccentColor] = useState('');
  const [tagline, setTagline] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file input click
  const handleLogoClick = () => {
    fileInputRef.current?.click();
  };

  // Handle logo file selection
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  return (
    <OnboardingLayout>
      <Card>
        <h2 className="text-2xl font-semibold mb-1 text-heading">Let’s set up your business profile</h2>
        <p className="text-gray-600 mb-7 text-sm">
          We’ll use this info to personalize your dashboard and help you launch campaigns faster.
        </p>
        {/* Section Title */}
        <div className="mb-7 flex items-center gap-2">
          <span className="font-semibold text-primary text-[16px]">Branding</span>
          <span className="text-gray-400 text-[16px]">(Optional)</span>
        </div>
        <form
          className="space-y-7"
          onSubmit={e => {
            e.preventDefault();
            router.push('/onboarding-subscription');
          }}
        >
          {/* Logo upload section */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">

           
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-[82px] h-[82px] rounded-full  border flex flex-col justify-center items-center cursor-pointer"
                onClick={handleLogoClick}
              >
                {logo ? (
                  <img
                    src={URL.createObjectURL(logo)}
                    alt="Logo preview"
                    className="w-[80px] h-[80px] rounded-full object-cover"
                  />
                ) : (
                  <FiCamera className="text-gray-400 w-7 h-7" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleLogoChange}
                  className="hidden"
                />
              </div>
            </div>
              <span onClick={handleLogoClick} className="text-base text-heading font-medium cursor-pointer">Upload logo</span>
            </div>
            <button
              type="button"
              className="bg-[#F4F7FF] text-primary font-medium px-7 h-9 rounded-md"
              onClick={handleLogoClick}
            >
              Add image
            </button>
          </div>
          {/* Brand Colors */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="primary-color" className="block mb-2 text-sm">Brand Colors</Label>
              <Input
                id="primary-color"
                placeholder="Primary color  e.g. #0047AB"
                value={primaryColor}
                onChange={e => setPrimaryColor(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex-1 flex items-end">
              <Input
                id="accent-color"
                placeholder="Accent color  e.g. #0047AB"
                value={accentColor}
                onChange={e => setAccentColor(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          {/* Brand Tagline */}
          <div>
            <Label htmlFor="tagline" className="block mb-2 text-sm">Brand Tagline</Label>
            <Input
              id="tagline"
              placeholder='e.g. “Fresh groceries delivered in under 30 minutes.”'
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              className="w-full"
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
            <div className="flex items-center gap-10">
              <button
                type="button"
                className="text-primary font-medium"
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90 inline-flex w-[110px] h-[44px] items-center justify-center rounded-md text-sm font-medium cursor-pointer"
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
