import type { ReactNode } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@reloy/ui/assets/logo.svg';
import AuthLeftBg from '@reloy/ui/assets/auth-left-bg.svg';
import AuthRightBg from '@reloy/ui/assets/auth-right-bg.svg';
import AuthIllustration from '@reloy/ui/assets/auth/auth-illustration.svg';
import TopRightLeftSection from '@reloy/ui/assets/auth/top-right-left-section.png';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden md:flex-row">
      <div className="relative flex w-full flex-col items-center gap-8 p-8 md:w-1/2">
        <Link href="/" className="mb-8 flex items-center gap-2">
          {/* <Image src={Logo} alt="" width={40} height={40} className="h-10 w-10" /> */}
     <Image
  src="../../../../packages/ui/assets/logo.svg"
  alt=""
  width={40}
  height={40}
  className="h-10 w-10"
/>
          {/* <span className="text-2xl font-bold text-heading">ReLoy Business</span> */}
        </Link>
        <Image
  src={TopRightLeftSection}
  alt=""
  fill
 width={10}
  className="pointer-events-none absolute right-0 inset-0 -z-10 object-cover "
/>
        {children}
      </div>
      <div className="relative hidden w-full flex-col items-center justify-center bg-light-blue p-8 md:flex md:w-1/2">
        <Image src="../../../../packages/ui/assets/auth/bottom-left-left-section.svg" alt="" fill className="absolute inset-0 object-cover" />
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