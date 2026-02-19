"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const MobileCallButton = () => {
    return (
        <a
            href="tel:+919814097251"
            className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#FF5900] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#e65000] transition-all duration-300 z-[9999] animate-bounce"
            aria-label="Call Us"
        >
            <FaPhoneAlt size={24} />
        </a>
    );
};

export default MobileCallButton;
