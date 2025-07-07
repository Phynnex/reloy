import type { ReactNode } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Logo, AuthIllustration } from '@reloy/ui/assets';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden md:flex-row">
      <div className="relative flex w-full flex-col gap-8 p-8 md:w-1/2">
        <Link href="/" className="mb-8 flex items-center gap-2 ml-4">
          <Logo className="h-10 w-10" />
          <span className="text-2xl font-bold text-heading">ReLoy Business</span>
        </Link>
        {children}
       
      </div>



      <div className="relative hidden w-full flex-col items-center justify-center bg-[#ECF3FF] p-8 md:flex md:w-1/2">
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p
            className="mb-4 text-4xl font-medium"
            style={{
              background: 'linear-gradient(270deg, #605BFF 0%, #233E97 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Turn your customers into loyal promoters.
          </p>
          <p>
            Reward your customers every time they share <br /> and refer others to your business.
          </p>
          <Image
            src={AuthIllustration}
            alt="Authentication illustration"
            width={398}
            height={310}

            className="mt-8 h-64 w-64"
          />
        </div>
      </div>
    </div>
  );
}