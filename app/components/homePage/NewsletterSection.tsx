import React, { useState } from 'react';
import SectionHeading from "../Common/SectionHeading";

export default function NewsletterSection() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (firstName && email) {
      console.log('Newsletter subscription:', { firstName, email });
      // Handle newsletter subscription logic here
      alert('Thank you for subscribing!');
      setFirstName('');
      setEmail('');
    }
  };

  return (
    <section className="relative w-full bg-[#010101] py-8 lg:py-16">
      <div className=" mx-auto  w-full">
        <div className="relative w-full min-h-[260px] sm:min-h-[280px] md:min-h-[340px] rounded-[20px] border border-white/10 overflow-hidden flex items-center justify-center">

          {/* Top Right Glow */}
          <div className="absolute -top-20 -right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary rounded-full blur-[120px] sm:blur-[180px] opacity-80 pointer-events-none"></div>

          {/* Bottom Left Glow */}
          <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary rounded-full blur-[120px] sm:blur-[180px] opacity-80 pointer-events-none"></div>

          {/* Content Container (centered and responsive) */}
          <div className="relative z-10 text-center section-padding-x w-full max-w-7xl">


            <div className="flex flex-col items-center justify-center mb-4 lg:mb-8">
              <SectionHeading>
                Subscribe to our Newsletter
              </SectionHeading>
              <div className="heading-underline"></div>
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto">


              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full sm:w-[300px] md:w-[320px] px-4 py-3 rounded-lg  bg-white text-black  placeholder-gray-500
      focus:outline-none focus:ring-2 focus:ring-primary
      transition-all "/>

              {/* Email */}
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-[300px]
      md:w-[320px] px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500
      focus:outline-none
      focus:ring-2 focus:ring-primary
      transition-all" />

              {/* Button */}

              <button className="btn-primary touch-manipulation inline-block text-center">
                Subscribe
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}