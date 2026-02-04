'use client';
import React, { useState, useEffect } from 'react';
import ConsentPopup from './ConsentPopup';

export default function PrivacyModal() {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedConsent = localStorage.getItem('user_cookie_consent');
            return !savedConsent;
        }
        return false;
    });
    const [showCustomize, setShowCustomize] = useState(false);

    const saveAndClose = (data: Record<string, boolean>) => {
        localStorage.setItem('user_cookie_consent', JSON.stringify(data));
        setIsVisible(false);
    };

    const handleCustomize = () => {
        setShowCustomize(true);
    };

    const handleAccept = () => {
        // Sab categories ko true karke save karo
        const allTrue = {
            necessary: true,
            functional: true,
            analytics: true,
            performance: true,
            uncategorised: true
        };
        saveAndClose(allTrue);
    };

    const handleReject = () => {
        // Sirf necessary ko true baki false
        const onlyNecessary = {
            necessary: true,
            functional: false,
            analytics: false,
            performance: false,
            uncategorised: false
        };
        saveAndClose(onlyNecessary);
    };

    if (showCustomize) {
        return <ConsentPopup />;
    }

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-6 md:right-auto md:bottom-6 md:w-auto">
            <div className="bg-white rounded-3xl shadow-2xl max-w-[520px] w-full p-4 md:p-6 mx-auto">
                <h1 className="text-center mb-6 text-[18px] md:text-[22px] font-semibold text-black">
                    We value your privacy
                </h1>
                <p className="mb-8 text-[14px] md:text-[15px] text-black leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking {"Accept All"}, you consent to our use of cookies.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <button onClick={handleCustomize} className="btn-primary touch-manipulation inline-block text-center">
                        Customize
                    </button>
                    <button onClick={handleAccept} className="btn-primary touch-manipulation inline-block text-center">
                        Accept All
                    </button>
                    <button onClick={handleReject} className="btn-primary touch-manipulation inline-block text-center">
                        Reject All
                    </button>
                </div>
            </div>
        </div>
    );
}