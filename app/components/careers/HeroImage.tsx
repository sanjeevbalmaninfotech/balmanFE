export default function HeroImage() {
    return (
        <>

            <div className="relative w-full h-screen overflow-hidden font-['Axiforma']">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="/HeroImages/careerHero.jpeg"
                        alt="Medical imaging professional reviewing scans"
                        className="w-full h-full object-cover"
                    />

                </div>

                {/* Content Container - Centered Horizontally & Vertically */}
                <div className="relative h-full flex items-center justify-center px-4 md:px-12">

                    <div className="bg-white rounded-[24px] px-8 py-6 shadow-lg max-w-4xl mx-auto flex flex-col items-center justify-center">

                        {/* Main Heading */}
                        <h1 className=" font-plus-jakarta text-black text-center font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[110%] sm:leading-[105%] lg:leading-[100%] tracking-[-0.01em]">
                            There are no current vacancies at this time.
                        </h1>

                        {/* Sub Heading */}
                        <p className=" font-plus-jakarta text-black text-center font-normal capitalize mt-2
    text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[140%] sm:leading-[130%] lg:leading-[120%] tracking-[-0.01em] ">
                            Please check back for updates on future openings.
                        </p>


                    </div>

                </div>
            </div>

        </>
    );
}