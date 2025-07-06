import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden md:flex-row">
      <div className="flex w-full flex-col gap-8 p-8 md:w-1/2">{children}</div>
      <div className="hidden w-full items-center justify-center bg-light-blue p-8 md:flex md:w-1/2">
        <div className="h-64 w-64 rounded-md bg-gray5" />
      </div>
    </div>
  );
}
