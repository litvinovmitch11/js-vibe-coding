// src/shared/ui/Header.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/features/auth/AuthContext';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/shared/config/firebase';

export const Header = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          JS Vibe Coding
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/mashups" className="hover:text-gray-300">
            Mashups
          </Link>
          {isLoading ? (
            <span>Loading...</span>
          ) : user ? (
            <>
              <span className="text-sm">Hi, {user.email}</span>
              <button onClick={handleSignOut} className="hover:text-gray-300">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="hover:text-gray-300">
                Sign In
              </Link>
              <Link href="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
