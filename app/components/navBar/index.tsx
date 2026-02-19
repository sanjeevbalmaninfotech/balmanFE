"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [mobileActiveLocation, setMobileActiveLocation] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  const serviceItems = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Organic Growth", href: "/services/organic-growth" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Branding", href: "/services/branding" },
    { name: "Customer Support", href: "/services/customer-support" },
    { name: "Software Development", href: "/services/custom-software-development" },
  ];
  const subServiceItems = [
    // { name: "Web Development", href: "/services/web-development" },
    { name: "Software Development", href: "/service/software-development-company-chandigarh" },
    // { name: "Digital Marketing", href: "/services/digital-marketing" },
    // { name: "Customer Services", href: "/services/customer-support" },
  ];

  const locationItems = [
    // { name: "Mohali", services: subServiceItems },
    { name: "Chandigarh", services: subServiceItems },
    // { name: "Panchkula", services:  },
    // { name: "Zirakpur", services:  },
    // { name: "Ludhiana", services:  },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="relative w-full">
        <div className="w-full rounded-lg">
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

          <div className="bg-[#010101] border-b border-[#8a8a8a]">
            <div className="flex items-center justify-between h-[76px] gap-6 section-padding-x">
              {/* Logo  "C:\repos\balmanFE\public\logo.svg" */}
              <div className="flex-shrink-0">
                <Link href="/" className="block relative w-[76px] h-[76px]">
                  <Image
                    src="/logo.svg"
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

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`px-2 py-3 rounded transition-colors duration-200 flex items-center gap-1 ${pathname.startsWith("/services")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                      }`}
                    style={{
                      fontSize: "16px",
                      fontWeight: pathname.startsWith("/services")
                        ? "600"
                        : "400",
                    }}
                  >
                    Our Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu - Fixed hover issue */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-[#1a1a1a] rounded-lg shadow-lg min-w-[220px] py-2">
                        {serviceItems.map((service) => {
                          const isActive = pathname === service.href;
                          return (
                            <Link
                              key={service.name}
                              href={service.href}
                              className={`block px-4 py-2 transition-colors duration-200 ${isActive
                                ? "text-primary bg-gray-900"
                                : "text-white hover:text-primary hover:bg-gray-900"
                                }`}
                              style={{
                                fontSize: "15px",
                                fontWeight: isActive ? "600" : "400",
                              }}
                            >
                              {service.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>


                {/* Locations Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsLocationsOpen(true)}
                  onMouseLeave={() => {
                    setIsLocationsOpen(false);
                    setActiveLocation(null);
                  }}
                >
                  <button
                    className={`px-2 py-3 rounded transition-colors duration-200 flex items-center gap-1 ${pathname.startsWith("/locations")
                      ? "text-primary"
                      : "text-white hover:text-primary"
                      }`}
                    style={{
                      fontSize: "16px",
                      fontWeight: pathname.startsWith("/locations")
                        ? "600"
                        : "400",
                    }}
                  >
                    Locations
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isLocationsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>


                  {isLocationsOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-[#1a1a1a] rounded-lg shadow-lg min-w-[220px] py-2 relative">
                        {locationItems.map((location) => {
                          const isHovered = activeLocation === location.name;
                          return (
                            <div
                              key={location.name}
                              className="relative"
                              onMouseEnter={() => setActiveLocation(location.name)}
                              onMouseLeave={() => setActiveLocation(null)}
                            >
                              <div
                                className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-colors duration-200 ${isHovered
                                  ? "text-primary bg-gray-900"
                                  : "text-white hover:text-primary hover:bg-gray-900"
                                  }`}
                                style={{
                                  fontSize: "15px",
                                  fontWeight: isHovered ? "600" : "400",
                                }}
                              >
                                {location.name}
                                <ChevronDown
                                  size={14}
                                  className={`-rotate-90 transition-transform duration-200 ${isHovered ? "rotate-0" : ""}`}
                                />
                              </div>

                              {/* Sub-menu for Services */}
                              {isHovered && (
                                <div className="absolute top-0 left-full pl-2">
                                  <div className="bg-[#1a1a1a] rounded-lg shadow-lg min-w-[220px] py-2">
                                    {location.services.map((service) => {
                                      const isActive = pathname === service.href;
                                      return (
                                        <Link
                                          key={service.name}
                                          href={service.href}
                                          className={`block px-4 py-2 transition-colors duration-200 ${isActive
                                            ? "text-primary bg-gray-900"
                                            : "text-white hover:text-primary hover:bg-gray-900"
                                            }`}
                                          style={{
                                            fontSize: "15px",
                                            fontWeight: isActive ? "600" : "400",
                                          }}
                                        >
                                          {service.name}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Get a Quote Button */}
              <div className="hidden lg:block flex-shrink-0">
                <Link
                  href="/ContactUs"
                  className="inline-block px-4 py-2 bg-black text-white text-lg font-semibold rounded-lg border-2 border-white transition-colors font-['Plus Jakarta']"
                >
                  Let's Connect
                </Link>
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

                  {/* Mobile Services Section */}
                  <div>
                    <button
                      onClick={() => {
                        setIsServicesOpen(!isServicesOpen);
                        setIsLocationsOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded transition-colors duration-200 flex items-center justify-between ${pathname.startsWith("/services")
                        ? "text-primary bg-gray-900"
                        : "text-white hover:text-primary hover:bg-gray-900"
                        }`}
                      style={{
                        fontSize: "16px",
                        fontWeight: pathname.startsWith("/services")
                          ? "600"
                          : "400",
                      }}
                    >
                      Our Services
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Mobile Services Submenu */}
                    {isServicesOpen && (
                      <div className="pl-4 mt-1 flex flex-col gap-1">
                        {serviceItems.map((service) => {
                          const isActive = pathname === service.href;
                          return (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`px-4 py-2 rounded transition-colors duration-200 ${isActive
                                ? "text-primary bg-gray-900"
                                : "text-white hover:text-primary hover:bg-gray-900"
                                }`}
                              style={{
                                fontSize: "15px",
                                fontWeight: isActive ? "600" : "400",
                              }}
                            >
                              {service.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Mobile Locations Section */}
                  <div>
                    <button
                      onClick={() => {
                        setIsLocationsOpen(!isLocationsOpen);
                        setIsServicesOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded transition-colors duration-200 flex items-center justify-between ${pathname.startsWith("/locations")
                        ? "text-primary bg-gray-900"
                        : "text-white hover:text-primary hover:bg-gray-900"
                        }`}
                      style={{
                        fontSize: "16px",
                        fontWeight: pathname.startsWith("/locations")
                          ? "600"
                          : "400",
                      }}
                    >
                      Locations
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isLocationsOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>


                    {isLocationsOpen && (
                      <div className="pl-4 mt-1 flex flex-col gap-1">
                        {locationItems.map((location) => {
                          const isExpanded = mobileActiveLocation === location.name;
                          return (
                            <div key={location.name} className="flex flex-col">
                              <button
                                onClick={() => setMobileActiveLocation(isExpanded ? null : location.name)}
                                className={`w-full px-4 py-2 rounded transition-colors duration-200 flex items-center justify-between ${isExpanded
                                  ? "text-primary bg-gray-900"
                                  : "text-white hover:text-primary hover:bg-gray-900"
                                  }`}
                                style={{
                                  fontSize: "15px",
                                  fontWeight: isExpanded ? "600" : "400",
                                }}
                              >
                                {location.name}
                                <ChevronDown
                                  size={14}
                                  className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                                />
                              </button>

                              {/* Mobile Sub-services */}
                              {isExpanded && (
                                <div className="pl-4 mt-1 flex flex-col gap-1">
                                  {location.services.map((service) => {
                                    const isActive = pathname === service.href;
                                    return (
                                      <Link
                                        key={service.name}
                                        href={service.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`px-4 py-2 rounded transition-colors duration-200 ${isActive
                                          ? "text-primary bg-gray-900"
                                          : "text-white hover:text-primary hover:bg-gray-900"
                                          }`}
                                        style={{
                                          fontSize: "14px",
                                          fontWeight: isActive ? "600" : "400",
                                        }}
                                      >
                                        {service.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            )}
          </div>
        </div>
      </div>
    </nav>
  );
}