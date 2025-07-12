"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FiCheck } from "react-icons/fi";
import Image from 'next/image';
import userCheck from '@reloy/ui/assets/userCheck.svg';
import { useRouter } from 'next/navigation';


interface Plan {
  name: string;
  price: string;
  per: string;
  features: string[];
  planType: string;
  type: string;
  recommended?: boolean;
}

const plans: Record<"monthly" | "yearly", Plan[]> = {
  monthly: [
    {
      name: "Growth",
      price: "₦7,500",
      per: "/ month",
      features: ["10 Campaigns", "Basic Analytics", "Limited Reward Budget"],
      planType: "growth",
      type: "paid",
    },
    {
      name: "Pro",
      price: "₦18,000",
      per: "/ month",
      features: [
        "Unlimited Campaigns",
        "Full Analytics",
        "₦50K Reward Cap",
        "₦200k Reward Budget",
      ],
      planType: "pro",
      type: "paid",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      per: "",
      features: [
        "Unlimited Campaigns",
        "Full Analytics",
        "Dedicated Support",
        "Custom Integrations",
        "Flexible Budgeting",
      ],
      planType: "enterprise",
      type: "custom",
    },
  ],
  yearly: [
    {
      name: "Growth",
      price: "₦75,000",
      per: "/ year",
      features: ["10 Campaigns", "Basic Analytics", "Limited Reward Budget"],
      planType: "growth",
      type: "paid",
    },
    {
      name: "Pro",
      price: "₦180,000",
      per: "/ year",
      features: [
        "Unlimited Campaigns",
        "Full Analytics",
        "₦600K Reward Cap",
        "₦2M Reward Budget",
      ],
      planType: "pro",
      type: "paid",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      per: "",
      features: [
        "Unlimited Campaigns",
        "Full Analytics",
        "Dedicated Support",
        "Custom Integrations",
        "Flexible Budgeting",
      ],
      planType: "enterprise",
      type: "custom",
    },
  ],
};

export default function SubscriptionPlanPage() {
  const router = useRouter();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const activePlans: Plan[] = plans[billing];
  const [selectedPlan, setSelectedPlan] = useState<string | null>("pro");

  return (
    <OnboardingLayout>
      <Card>
        <h2 className="text-2xl font-semibold mb-1 text-heading">
          Subscription Plan
        </h2>
        <p className="text-gray-600 mb-7 text-sm">
          Select a plan that fits your business needs to start creating
          campaigns and rewarding your customers.
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
            onClick={() => setBilling("monthly")}
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
            onClick={() => setBilling("yearly")}
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
        "border rounded-xl flex flex-col items-start min-h-[350px] relative bg-white transition-all duration-200 overflow-hidden",
        selectedPlan === plan.planType
          ? "border-primary bg-[#F4F7FF]"
          : "border-gray-200 bg-white"
      )}
    >
      {/* Gradient top border only for Pro */}
      {plan.name === "Pro" && (
        <div
          style={{
            height: 4,
            width: "100%",
            background: "linear-gradient(90deg, #233E97 0%, #605BFF 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            borderTopLeftRadius: "0.75rem",   // rounded-xl = 12px = 0.75rem
            borderTopRightRadius: "0.75rem",
          }}
        />
      )}

      {/* Card content */}
      <div className="w-full pt-7 pb-5 px-6 flex flex-col flex-1 relative z-10">
        <div className="flex items-center justify-between gap-2 mb-1 w-full">
          <span
            className="text-sm font-semibold"
            style={{
              background: "linear-gradient(90.04deg, #233E97 0.03%, #A16AD4 19.11%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {plan.name}
          </span>
          {plan.recommended && (
            <span className="ml-2 bg-[#F1ECFF] text-[#6E42E5] text-xs font-semibold px-3 py-[2px] rounded-full flex items-center">
              Recommended
            </span>
          )}
        </div>
        <div className="mt-2">
          <span className="text-[#000000] font-semibold text-[26px] align-middle">
            {plan.price}
          </span>
          <span className="text-[#000000] text-base align-middle ml-1">
            {plan.per}
          </span>
        </div>
        <ul className="mb-6 mt-2 flex-1 text-[15px] text-gray-800">
          <hr className="mt-2 mb-4" />
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 mb-2">
              <span className="text-[#000000] text-base font-bold leading-none">
                <FiCheck />
              </span>
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
          <button
            type="button"
            onClick={() => setSelectedPlan(plan.planType)}
            className={cn(
              "w-full h-12 rounded-md flex items-center gap-12 mt-auto border transition-all pl-4 font-medium text-base",
              selectedPlan === plan.planType
                ? "bg-[#ECF3FF] border-[#DDE3ED] text-primary hover:bg-[#E9F0FF]"
                : "bg-[#ECF3FF] border-[#DDE3ED] text-primary hover:bg-[#E9F0FF]"
            )}
          >
            <input
              type="radio"
              name="plan"
              checked={selectedPlan === plan.planType}
              onChange={() => setSelectedPlan(plan.planType)}
              className="accent-primary bg-[#ECF3FF]"
              style={{ width: 18, height: 18 }}
            />
            <span className="font-medium">Select Plan</span>
          </button>
        )}
      </div>
    </div>
  ))}
</div>
        {/* Buttons */}
        <div className="flex justify-between items-center pt-8">
          <button
            type="button"
            className="border border-gray5 text-heading inline-flex w-[150px] h-[44px] items-center justify-center rounded-md text-sm font-medium"
            onClick={() => alert("Save for later")}
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

              <DialogContent className="max-w-md w-full flex flex-col items-center justify-center gap-6 py-12">
                {/* Success Icon */}

                <div className="flex justify-center">

                <div className="  flex items-center justify-center">
               <Image src={userCheck} alt="userchecker" width={110} height={21} />
                </div>
                </div>
                <div className="text-center">
                  <div className="text-heading text-[20px] font-bold mb-2">
                    You're all set!
                  </div>
                  <div className="text-body text-base mb-2">
                    Your profile is ready. Start rewarding your customers and
                    growing your business.
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                  className="w-4/5 "
                  onClick={() => router.push('/dashboard')}
                >
                  Go to Dashboard
                </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </OnboardingLayout>
  );
}