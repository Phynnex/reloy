"use client";
import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const steps = [
  { label: 'Business Info', path: '/onboarding-business-info' },
  { label: 'Contact & Location', path: '/onboarding-contact-location' },
  { label: 'Branding', path: '/onboarding-branding' },
  { label: 'Subscription', path: '/onboarding-subscription' },
];

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentIndex = steps.findIndex(s => s.path === pathname);

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r bg-gray6 p-6 md:block">
        <ul className="space-y-6">
          {steps.map((step, index) => {
            const isActive = step.path === pathname;
            const isCompleted = index < currentIndex;
            return (
              <li key={step.path} className="flex items-center gap-2">
                <span
                  className={cn(
                    'flex h-6 w-6 items-center justify-center rounded-full border',
                    isActive || isCompleted ? 'border-primary text-primary' : 'border-gray5 text-gray500'
                  )}
                >
                  {isCompleted ? '✓' : index + 1}
                </span>
                <Link
                  href={step.path}
                  className={cn(
                    'text-sm',
                    isActive ? 'font-semibold text-primary' : 'text-gray500'
                  )}
                >
                  {step.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
