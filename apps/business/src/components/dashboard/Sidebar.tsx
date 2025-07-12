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
        'fixed md:static inset-y-0 left-0 z-40 bg-white dark:bg-black border-r border-gray5 transition-all duration-300',
        open ? 'w-64' : 'w-0 md:w-0',
      )}
    >
      <div className={cn('h-full flex flex-col', open ? 'opacity-100' : 'opacity-0 pointer-events-none')}
           style={{ transition: 'opacity 0.3s' }}>
        <div className="p-6">
          <Image src={Logo} alt="logo" width={110} height={21} />
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 px-4">
            {links.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray500 hover:bg-gray6',
                      active && 'bg-gray6 text-body font-medium',
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
