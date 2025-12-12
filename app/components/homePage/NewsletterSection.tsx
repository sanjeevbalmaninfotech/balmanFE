import React, { useState } from 'react';

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
    <section className="relative w-full bg-black py-16">
    {/* Full-width border container */}
    <div className="relative w-full min-h-[260px] sm:min-h-[280px] md:min-h-[340px] rounded-[20px] border border-white/10 overflow-hidden flex items-center justify-center">
      
     {/* Top Right Glow */}
<div className="absolute -top-20 -right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#FF5900] rounded-full blur-[120px] sm:blur-[180px] opacity-80 pointer-events-none"></div>

{/* Bottom Left Glow */}
<div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#FF5900] rounded-full blur-[120px] sm:blur-[180px] opacity-80 pointer-events-none"></div>

      {/* Content Container (centered and responsive) */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Subscribe to our newsletter
        </h2>
  
        {/* Input Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-3 bg-[#FF5900] hover:bg-[#e64f00] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  </section>
  
  );
}