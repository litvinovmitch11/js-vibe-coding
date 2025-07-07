// src/shared/ui/Header.tsx

import Link from 'next/link';

export const Header = () => {
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
        </div>
      </nav>
    </header>
  );
};
