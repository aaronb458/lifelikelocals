"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours-and-prices", label: "Tours And Prices" },
  { href: "/#what-is-we-do", label: "What Is We Do!" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2'
          : 'bg-gradient-to-r from-[#F97068] to-[#FF8A7A] py-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-[60px]' : 'h-[65px]'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/LLL_Logo_1.png"
              alt="Life Like Locals"
              width={50}
              height={50}
              className={`transition-all duration-500 ${
                scrolled ? 'h-[45px]' : 'h-[50px]'
              } w-auto group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 font-semibold text-sm relative group ${
                  scrolled
                    ? 'text-[#5D4E37] hover:text-[#F97068]'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-[#F97068]' : 'bg-white'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-[#F97068]' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 transition-colors font-semibold text-sm ${
                scrolled
                  ? 'text-[#5D4E37] hover:text-[#F97068]'
                  : 'text-white hover:text-white/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
