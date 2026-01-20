import React from 'react';
import Image from 'next/image';

interface SimpleHeroImageProps {
    url: string; // Sirf image URL as a param
}

const SimpleHeroImage: React.FC<SimpleHeroImageProps> = ({ url }) => {
    return (
        <section className="relative w-full min-h-screen mt-10 md:min-h-[320px] lg:min-h-[440px] bg-black overflow-hidden">

            <div className="absolute inset-0">
                <Image
                    src={url}
                    alt="Section Background"
                    fill
                    priority
                    className="object-cover object-center brightness-[1.3]"
                    sizes="100vw"
                />
            </div>
        </section>
    );
};

export default SimpleHeroImage;