"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={42}
            height={42}
            priority
            className="rounded-full shadow-md object-cover"
          />

          <div>
            <h2 className="text-lg sm:text-xl font-black tracking-tight text-gray-900">
              Tiles Gallery
            </h2>
            <p className="text-xs text-gray-500 hidden sm:block">
              Premium Tiles Collection
            </p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <li>
            <Link href="/" className="hover:text-black transition duration-200">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-tiles"
              className="hover:text-black transition duration-200"
            >
              All Tiles
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="hover:text-black transition duration-200"
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-200 shadow-lg"
          >
            Login
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="px-4 py-5 bg-white space-y-5">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/all-tiles" onClick={() => setOpen(false)}>
                All Tiles
              </Link>
            </li>

            <li>
              <Link href="/profile" onClick={() => setOpen(false)}>
                My Profile
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="w-full text-center px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
