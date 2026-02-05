"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Next.js Link import
import Image from "next/image";
import { usePathname } from "next/navigation"; // URL check karne ke liye

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Ye batayega ki abhi kaunsa page open hai

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Our Services", href: "/services/web-development" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="relative w-full">
        <div
          className="w-full rounded-lg"
        // style={{
        //     border: '3px solid var(--primary-color)',
        //     position: 'relative'
        // }}
        >
          {/* Blue overlay effect */}
          <div
            style={{
              position: "absolute",
              top: "-3px",
              left: "0",
              width: "50%",
              height: "3px",
              background: "#2A9DC2",
              borderTopLeftRadius: "8px",
            }}
          />

          <div className="bg-[#010101]  border-b border-[#ff5900]">
            <div className="flex items-center justify-between h-[76px] gap-6 section-padding-x">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="block relative w-[64px] h-[64px]">
                  <Image
                    src="/logo.PNG"
                    alt="Logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                    priority
                    quality={100}
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-center flex-1 gap-2">
                {navItems.map((item) => {
                  // Pathname se check ho raha hai active link
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-2 py-3 rounded transition-colors duration-200 ${isActive
                        ? "text-primary"
                        : "text-white hover:text-primary"
                        }`}
                      style={{
                        fontSize: "16px",
                        fontWeight: isActive ? "600" : "400",
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Get a Quote Button */}
              <div className="hidden lg:block flex-shrink-0">
                <button
                  className="px-7 py-3 rounded-lg border border-[#E8E8EA] text-white hover:bg-white hover:text-black transition-all duration-300"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                  }}
                >
                  Get a Quote
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden pb-4 border-t border-gray-800">
                <div className="flex flex-col gap-1 pt-4 section-padding-x">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-3 rounded transition-colors duration-200 ${isActive
                          ? "text-primary bg-gray-900"
                          : "text-white hover:text-primary hover:bg-gray-900"
                          }`}
                        style={{
                          fontSize: "16px",
                          fontWeight: isActive ? "600" : "400",
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
