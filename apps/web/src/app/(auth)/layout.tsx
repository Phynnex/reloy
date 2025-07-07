import '../globals.css';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Logo from '@reloy/ui/assets/logo.svg';
import AuthLeftBg from '@reloy/ui/assets/auth-left-bg.svg';
import AuthRightBg from '@reloy/ui/assets/auth-right-bg.svg';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="relative hidden flex-1 items-center justify-center bg-light-blue lg:flex">
        <Image src={AuthLeftBg} alt="" fill className="absolute inset-0 object-cover" />
        <div className="relative z-10 p-10 text-center">
          <p
            className="text-lg font-medium text-heading"
            style={{
              background: 'linear-gradient(270deg, #605BFF 0%, #233E97 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Turn your customers into loyal promoters.
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-1 flex-col items-center justify-center p-8 sm:mx-auto sm:w-[400px]">
        <div className="mb-8 flex items-center gap-2">
          <Image src={Logo} alt="" width={40} height={40} className="h-10 w-10" />
          <span className="text-2xl font-bold text-heading">ReLoy</span>
        </div>
        {children}
        <Image
          src={AuthRightBg}
          alt=""
          fill
          className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-20"
        />
      </div>
    </div>
  );
}
