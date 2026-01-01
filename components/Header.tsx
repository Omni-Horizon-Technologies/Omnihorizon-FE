"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#about", label: "About Us" },
    { href: "#about", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  // Split nav links in half - some before logo, some after
  const leftLinks = navLinks.slice(0, Math.ceil(navLinks.length / 2));
  const rightLinks = navLinks.slice(Math.ceil(navLinks.length / 2));

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          {/* Desktop Navigation - Rectangular container */}
          <div className="hidden md:flex items-center bg-gradient-to-r from-white via-slate-50/50 to-white border-2 border-slate-200/80 rounded-2xl px-12 py-4 shadow-lg shadow-slate-200/50 w-full max-w-5xl backdrop-blur-sm">
            {/* Left Nav Links */}
            <div className="flex items-center space-x-12 flex-1 justify-end">
              {leftLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all whitespace-nowrap group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Logo - Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mx-12 px-10 border-l-2 border-r-2 border-slate-200/60 relative"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <Link href="/" className="block">
                <Image
                  src="/Omnihorizon tech.png"
                  alt="Omnihorizon Logo"
                  width={280}
                  height={80}
                  className="h-14 w-auto object-contain hover:opacity-80 transition-opacity"
                  priority
                />
              </Link>
            </motion.div>

            {/* Right Nav Links */}
            <div className="flex items-center space-x-12 flex-1 justify-start">
              {rightLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (leftLinks.length + index) * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all whitespace-nowrap group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile - Logo and Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="block">
              <Image
                src="/Omnihorizon tech.png"
                alt="Omnihorizon Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

