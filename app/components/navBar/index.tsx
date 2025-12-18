'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '/aboutus' },
        { name: 'Our Services', href: '/services' },
        { name: 'Our Portfolio', href: '/portfolio' },
        { name: 'Contact Us', href: '/contactUs' }
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-50">
            <div className="relative w-full">
                {/* Main content with orange border */}
                <div
                    className="w-full rounded-lg"
                    style={{
                        border: '3px solid var(--primary-color)',
                        position: 'relative'
                    }}
                >
                    {/* Blue overlay for top 50% of top border only */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-3px',
                            left: '0',
                            width: '50%',
                            height: '3px',
                            background: '#2A9DC2',
                            borderTopLeftRadius: '8px'
                        }}
                    />

                    <div className="bg-black rounded-lg">
                        <div className="flex items-center justify-between h-[76px] gap-6 px-4 sm:px-8 lg:px-[100px]">
                            {/* Logo - Left */}
                            <div className="flex-shrink-0">
                                <Link href="/" className="flex-shrink-0 cursor-pointer">
                                    <Image
                                        src="/logo.png"
                                        alt="Logo"
                                        width={160}   // control size via width/height
                                        height={64}
                                        className="h-16 w-auto"
                                        priority      // loads logo immediately (good for headers)
                                    />
                                </Link>

                            </div>

                            {/* Desktop Navigation - Center */}
                            <div className="hidden lg:flex items-center justify-center flex-1 gap-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setActiveItem(item.name)}
                                        className={`px-2 py-3 rounded transition-colors duration-200 ${activeItem === item.name
                                            ? 'text-primary'
                                            : 'text-white hover:text-primary'
                                            }`}
                                        style={{
                                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                                            fontSize: '16px',
                                            fontWeight: '400'
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* Get a Quote Button - Right (Desktop) */}
                            <div className="hidden lg:block flex-shrink-0">
                                <button
                                    className="px-7 py-3 rounded-lg border border-[#E8E8EA] text-white hover:bg-white hover:text-black transition-all duration-300"
                                    style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '17px',
                                        fontWeight: '400'
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
                                <div className="flex flex-col gap-1 pt-4 px-4 sm:px-8">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => {
                                                setActiveItem(item.name);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`px-4 py-3 rounded transition-colors duration-200 ${activeItem === item.name
                                                ? 'text-primary bg-gray-900'
                                                : 'text-white hover:text-primary hover:bg-gray-900'
                                                }`}
                                            style={{
                                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                                fontSize: '16px',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                    <button
                                        className="mt-4 px-7 py-3 rounded-lg border border-[#E8E8EA] text-white hover:bg-white hover:text-black transition-all duration-300 text-center"
                                        style={{
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: '17px',
                                            fontWeight: '400'
                                        }}
                                    >
                                        Get a Quote
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}