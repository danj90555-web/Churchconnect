'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import {
  FiHome,
  FiMessageSquare,
  FiUsers,
  FiVideo,
  FiCalendar,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { useState } from 'react';
import { signOut } from '@/utils/supabase';

export default function Sidebar() {
  const router = useRouter();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  const links = [
    { icon: FiHome, label: 'Dashboard', href: '/dashboard' },
    { icon: FiMessageSquare, label: 'Messages', href: '/messages' },
    { icon: FiUsers, label: 'Communautés', href: '/communities' },
    { icon: FiVideo, label: 'Lives', href: '/lives' },
    { icon: FiCalendar, label: 'Événements', href: '/events' },
    { icon: FiSettings, label: 'Paramètres', href: '/settings' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative w-64 h-screen bg-primary-900 text-white transition-transform duration-200 z-40`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-primary-800">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl">🙏</span>
            <span className="text-xl font-bold">ChurchConnect</span>
          </Link>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-primary-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-full" />
            <div>
              <p className="font-semibold text-sm">{user?.user_metadata?.first_name}</p>
              <p className="text-primary-300 text-xs">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-100 hover:bg-primary-800 transition"
              onClick={() => setIsOpen(false)}
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white transition font-semibold"
          >
            <FiLogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
