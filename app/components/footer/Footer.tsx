import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  
const linkColumns = [
  {
    heading: 'Balman Infotech',
    links: [
      { label: 'About Us', path: '/aboutus' },
      { label: 'Contact Us', path: '/ContactUs' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Digital Marketing', path: '/services/digital-marketing' },
      { label: 'Organic Growth', path: '/services/organic-growth' },
      { label: 'Branding', path: '/services/branding' },
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'Customer Support', path: '/services/customer-support' },
    ],
  },
  {
    heading: 'Legal Information',
    links: [
      { label: 'Terms & Conditions', path: '/TermsAndConditions' },
      { label: 'Privacy Policy', path: '/PrivacyPolicy' },
    ],
  },
];


  const quickLinks = [
    // { label: 'Contact Us', href: '/contact' },
    { label: 'Support', href: '/careers' },
    { label: 'Chat', href: '/blogs' },
    // { label: 'Privacy Policy', href: '/PrivacyPolicy' },
    // { label: 'Terms and Conditions', href: '/TermsAndConditions' }
  ];

  const contactLinks = [
    '',
    ''
  ];

  return (
    <footer className="bg-[#010101] text-white pt-8 pb-8">
      <div className=" relative w-full mx-auto section-padding-x">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Company Info - Left Side */}
          <div className="lg:col-span-3">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-42 h-24 rounded-lg flex">
                  <div className="text-center">

                    <Link href="/" className="flex-shrink-0 cursor-pointer">
                      <Image
                        src="/logoFooter.png" // "C:\repos\balmanFE\public\logo.PNG" "C:\repos\balmanFE\public\logoFooter.png"
                        alt="Logo"
                        width={100}   // control size via width/height
                        height={100}
                        // className="h-16 w-auto"
                        priority      // loads logo immediately (good for headers)
                      />
                    </Link>



                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Address:</h3>
              <p className="text-gray-400 text-sm">
                4th Floor Verma Tech Park, Plot No 88, Sector 73, S.A.S Nagar Mohali 140301
              </p>
            </div>

            {/* Contact */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Contact:</h3>
              <a href="tel:+919814097251" className="text-gray-400 hover:text-white text-sm block mb-1">
                +9198140 97251
              </a>
              <a href="mailto:contact@balmaninfotech.net" className="text-gray-400 hover:text-white text-sm block">
                contact@balmaninfotech.net
              </a>
            </div>


          </div>

          {/* Link Columns - Middle */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {linkColumns.map((column, idx) => (
  <div key={idx}>
    {/* Heading */}
    <h3 className="font-sans font-normal text-[14px] lg:text-[18px] leading-[21px] text-white mb-3">
      {column.heading}
    </h3>

    {/* Links */}
    <ul className="space-y-3">
      {column.links.map((link, linkIdx) => (
        <li key={linkIdx}>
          <a
            href={link.path}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
))}

            </div>
          </div>


          {/* Quick Links and Contact - Right Side */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-8">

              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                  <ul className="space-y-3">
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                </ul>
              </div>

              {/* Contact */}
              <div>
                {/* <h3 className="font-semibold mb-4">Contact</h3> */}
                <ul className="space-y-3">
                  {contactLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Social Icons for Contact Column */}
                <div className="flex gap-3 mt-4">
                  <a href="#" className="text-white hover:text-primary transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-primary transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-primary transition-colors">
                    <Youtube size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-primary transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Relume. All rights reserved.
          </p>
          <div className="flex gap-6">
           
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}