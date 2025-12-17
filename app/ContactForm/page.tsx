'use client'
import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        acceptTerms: false
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const services = [
        'Branding',
        'Social Media',
        'Performance Marketing',
        'Web Development',
        'Customer Support Services'
    ];

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    const handleChange = (name: string, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const selectService = (service: string) => {
        setFormData(prev => ({ ...prev, service }));
        setDropdownOpen(false);
    };

    return (
        <>
            <div className="  min-h-screen   bg-black   text-white   py-[40px] px-[16px]  sm:py-[50px] sm:px-[24px]  md:py-[60px] md:px-[60px]  lg:py-[60px] lg:px-[120px]">


                <div className="max-w-7xl mx-auto">
                    {/* Main Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                        {/* Left Side - Heading */}
                        <div className="w-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-px bg-primary"></div>
                                <span className="text-xs md:text-sm text-gray-400 tracking-wider">Contact Us</span>
                            </div>
                            <h1 className="font-['Plus Jakarta Sans'] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ color: '#E8E8EA', fontWeight: 700, lineHeight: '100%', textTransform: 'capitalize' }}>
                                Our friendly team would love to hear from you
                            </h1>
                        </div>

                        {/* Right Side - Form Container */}
                        <div className="w-full">
                            <div className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-['Plus Jakarta Sans'] font-normal text-sm md:text-base text-gray-400 mb-2" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%' }}>
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.firstName}
                                            onChange={(e) => handleChange('firstName', e.target.value)}
                                            className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors font-['Plus Jakarta Sans'] text-sm md:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-['Plus Jakarta Sans'] font-normal text-sm md:text-base text-gray-400 mb-2" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%' }}>
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.lastName}
                                            onChange={(e) => handleChange('lastName', e.target.value)}
                                            className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors font-['Plus Jakarta Sans'] text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-['Plus Jakarta Sans'] font-normal text-sm md:text-base text-gray-400 mb-2" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%' }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors font-['Plus Jakarta Sans'] text-sm md:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-['Plus Jakarta Sans'] font-normal text-sm md:text-base text-gray-400 mb-2" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%' }}>
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleChange('phone', e.target.value)}
                                            className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors font-['Plus Jakarta Sans'] text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                {/* Service Select */}
                                <div>
                                    <label className="block font-['Plus Jakarta Sans'] font-normal text-sm md:text-base text-gray-400 mb-2" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%' }}>
                                        Service Select
                                    </label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-left text-gray-400 focus:outline-none focus:border-primary transition-colors flex justify-between items-center font-['Plus Jakarta Sans'] text-sm md:text-base"
                                        >
                                            <span>{formData.service || 'Select Service'}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {dropdownOpen && (
                                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-y-auto">
                                                {services.map((service, index) => (
                                                    <button
                                                        key={index}
                                                        type="button"
                                                        onClick={() => selectService(service)}
                                                        className="w-full px-4 py-3 text-left text-black hover:bg-gray-100 transition-colors flex justify-between items-center font-['Plus Jakarta Sans'] text-sm md:text-base"
                                                    >
                                                        <span>{service}</span>
                                                        {formData.service === service && (
                                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block font-['Plus Jakarta Sans'] font-normal text-sm md:text-base text-gray-400 mb-2" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '150%' }}>
                                        Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => handleChange('message', e.target.value)}
                                        rows={4}
                                        placeholder="Type your message..."
                                        className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none font-['Plus Jakarta Sans'] text-sm md:text-base"
                                    ></textarea>
                                </div>

                                {/* Terms Checkbox */}
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={formData.acceptTerms}
                                        onChange={(e) => handleChange('acceptTerms', e.target.checked)}
                                        className="w-4 h-4 bg-transparent border border-gray-700 rounded accent-primary cursor-pointer"
                                    />
                                    <label htmlFor="terms" className="text-xs md:text-sm text-gray-400 font-['Plus Jakarta Sans'] cursor-pointer">
                                        I accept the Terms
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded transition-colors font-['Plus Jakarta Sans'] text-sm md:text-base"
                                    style={{ border: '1px solid var(--primary-color)' }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}