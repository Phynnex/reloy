'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@reloy/ui/assets/logo.svg';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Megaphone,
  PieChart,
  Wallet,
  Users,
  Bell,
  Settings,
  CreditCard,
  User,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const links = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Campaigns', href: '/dashboard/campaigns', icon: Megaphone },
  { label: 'Analytics', href: '/dashboard/analytics', icon: PieChart },
  { label: 'Wallets & Payouts', href: '/dashboard/wallets', icon: Wallet },
  { label: 'Customers & Referrers', href: '/dashboard/customers', icon: Users },
  { label: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
  { label: 'Billings & Subscriptions', href: '/dashboard/billings', icon: CreditCard },
  { label: 'Account', href: '/dashboard/account', icon: User },
  { label: 'Help & Support', href: '/dashboard/support', icon: HelpCircle },
  { label: 'Logout', href: '/logout', icon: LogOut },
];


export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();
  return (
     <aside
      className={cn(
        "hidden md:flex flex-col fixed top-32 left-6 z-20", 
        "bg-white border border-gray-200 rounded-2xl shadow-sm h-[72vh] w-56 transition-all px-2 py-1",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex-1 overflow-y-auto pt-4 pb-4 hide-scrollbar">
        <ul className="space-y-2">
          {links.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#83859C] hover:bg-[#F1F3F9]",
                    active && "bg-[#233E97] text-white font-semibold"
                  )}
                >
                  <Icon className={cn("w-5 h-5", active && "text-white")} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
