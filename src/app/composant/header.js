// components/Header.js

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">JE TE LE DIS</h1>
        <nav className="flex space-x-6">
          <Link
            href="https://www.google.com/"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            A propos de nous
          </Link>
          <Link
            href="https://www.google.com/"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="https://www.google.com/"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Catalogue
          </Link>
        </nav>
      </div>
    </header>
  );
}
