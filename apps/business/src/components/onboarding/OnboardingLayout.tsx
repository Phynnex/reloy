// "use client";
// import type { ReactNode } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import Logo from '@reloy/ui/assets/logo.svg';
// import Image from "next/image";

// const steps = [
//   { label: "Business Info", path: "/onboarding-business-info" },
//   { label: "Contact & Location Info", path: "/onboarding-contact-location" },
//   { label: "Branding", path: "/onboarding-branding" },
//   { label: "Subscription Plan", path: "/onboarding-subscription" },
// ];

// const SIDEBAR_WIDTH = 271;

// export default function OnboardingLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   const currentIndex = steps.findIndex((s) => s.path === pathname);

//   return (
//     <div>
//       {/* Fixed Sidebar */}
//       <aside
//         className="hidden md:flex flex-col bg-primary px-8 py-6"
//         style={{
//           width: SIDEBAR_WIDTH,
//           minHeight: "100vh",
//           position: "fixed",
//           left: 0,
//           top: 0,
//           zIndex: 20,
//         }}
//       >
//         <div className="mb-14 pl-2">
//           <Image src={Logo} alt="logo" width={110} height={21} />
//         </div>
//         <div className="relative mt-2">
//           <div
//             className="absolute left-2 top-[12px] w-1"
//             style={{
//               height: `${38 * (currentIndex + 1)}px`,
//               background:
//                 "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.12) 100%)",
//               borderRadius: "6px",
//             }}
//           />
//           <ul className="flex flex-col gap- relative z-10">
//             {steps.map((step, idx) => {
//               const isActive = idx === currentIndex;
//               const isCompleted = idx < currentIndex;
//               return (
//                 <li key={step.path} className="flex items-center relative h-[52px] ml-2">
//                   <div
//                     className={cn(
//                       "w-1 h-[18px] rounded-xl bg-white transition-all mr-2",
//                       isActive || isCompleted
//                         ? "opacity-100"
//                         : "opacity-20"
//                     )}
//                   />
//                   <Link
//                     href={step.path}
//                     className={cn(
//                       "transition-all text-base",
//                       isActive
//                         ? "text-white font-medium"
//                         : isCompleted
//                         ? "text-white"
//                         : "text-white/40"
//                     )}
//                     tabIndex={isActive || isCompleted ? 0 : -1}
//                   >
//                     {step.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </aside>

//       {/* Main Content (scrollable) */}
//       <main
//         className="flex-1 flex justify-center items-start py-10 md:py-16 bg-[#F7F9FB] overflow-y-auto hide-scrollbar"
//         style={{
//           marginLeft: SIDEBAR_WIDTH,
//           minHeight: "100vh",
//           maxHeight: "100vh",
//         }}
//       >
//         <div className="w-full max-w-4xl">{children}</div>
//       </main>
//     </div>
//   );
// }



"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from '@reloy/ui/assets/logo.svg';
import Image from "next/image";

const steps = [
  { label: "Business Info", path: "/onboarding-business-info" },
  { label: "Contact & Location Info", path: "/onboarding-contact-location" },
  { label: "Branding", path: "/onboarding-branding" },
  { label: "Subscription Plan", path: "/onboarding-subscription" },
];

const SIDEBAR_WIDTH = 271;

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentIndex = steps.findIndex((s) => s.path === pathname);

  return (
    <div>
      {/* Fixed Sidebar */}
      <aside
        className="hidden md:flex flex-col bg-primary px-8 py-6"
        style={{
          width: SIDEBAR_WIDTH,
          minHeight: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 20,
        }}
      >
        <div className="mb-14 pl-2">
          <Image src={Logo} alt="logo" width={110} height={21} />
        </div>
        <div className="relative mt-2">
          <div
            className="absolute left-2 top-[12px] w-1"
            style={{
              height: `${38 * (currentIndex + 1)}px`,
              background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.12) 100%)",
              borderRadius: "6px",
            }}
          />
          <ul className="flex flex-col gap- relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx === currentIndex;
              const isCompleted = idx < currentIndex;
              const isFuture = idx > currentIndex;
              return (
                <li key={step.path} className="flex items-center relative h-[52px] ml-2">
                  <div
                    className={cn(
                      "w-1 h-[18px] rounded-xl bg-white transition-all mr-2",
                      isActive || isCompleted
                        ? "opacity-100"
                        : "opacity-20"
                    )}
                  />
                  {isFuture ? (
                    <span
                      className={cn(
                        "transition-all text-base cursor-not-allowed select-none",
                        "text-white/40"
                      )}
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      {step.label}
                    </span>
                  ) : (
                    <Link
                      href={step.path}
                      className={cn(
                        "transition-all text-base",
                        isActive
                          ? "text-white font-medium"
                          : isCompleted
                          ? "text-white"
                          : "text-white/40"
                      )}
                      tabIndex={0}
                    >
                      {step.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Content (scrollable) */}
      <main
        className="flex-1 flex justify-center items-start py-10 md:py-16 bg-[#F7F9FB] overflow-y-auto hide-scrollbar"
        style={{
          marginLeft: SIDEBAR_WIDTH,
          minHeight: "100vh",
          maxHeight: "100vh",
        }}
      >
        <div className="w-full max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
