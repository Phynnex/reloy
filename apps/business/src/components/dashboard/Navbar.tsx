'use client';
import Image from 'next/image';
import Logo from '@reloy/ui/assets/logo.svg';
import { Menu, Bell, Sun, Moon, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  onToggleSidebar: () => void;
  darkMode: boolean;
  toggleDark: () => void;
}

export default function Navbar({ onToggleSidebar, darkMode, toggleDark }: NavbarProps) {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 border-b border-gray5 bg-white dark:bg-black">
      <div className="flex items-center gap-3">
        <button className="md:hidden" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden md:block">
          <Image src={Logo} alt="logo" width={110} height={21} />
        </div>
      </div>
      <div className="flex-1 max-w-xs">
        <div className="relative">
          <Input placeholder="Search..." className="pl-9" />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleDark} aria-label="Toggle theme" className="p-2">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button aria-label="Notifications" className="p-2">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <User className="w-6 h-6" />
          <span className="text-sm hidden sm:block">John Doe</span>
        </div>
      </div>
    </header>
  );
}
