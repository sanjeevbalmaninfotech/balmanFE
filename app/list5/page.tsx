export default function TiltedCardsSection() {
    const services = [
      {
        title: "Digital Marketing",
        description:
          "We excel in building scalable, secure, and feature-rich apps that drive business success.",
        icon: "📱",
      },
      {
        title: "Branding Services",
        description:
          "We excel in building scalable, secure, and feature-rich apps that drive business success.",
        icon: "📱",
      },
      {
        title: "Web Designing",
        description:
          "We excel in building scalable, secure, and feature-rich apps that drive business success.",
        icon: "📱",
      },
      {
        title: "App Development",
        description:
          "We excel in building scalable, secure, and feature-rich apps that drive business success.",
        icon: "📱",
      },
      {
        title: "Web Development",
        description:
          "We excel in building scalable, secure, and feature-rich apps that drive business success.",
        icon: "📱",
      },
    ];
const getCardStyles = (index: number) => {

    const heights = [
      { left: 300, right: 290 }, // 1st: left base pe
      { left: 290, right: 280 }, // 2nd: upar
      { left: 280, right: 280 }, // 3rd: sabse upar
      { left: 280, right: 290 }, // 4th: neeche aana start
      { left: 290, right: 300 }, // 5th: right base pe
    ];
  
    // Calculate how much to lift each card from base
    const baseLift = [20, 10, 0, 10, 20]; // Center cards upar uthaye
  
    return {
      ...heights[index],
      baseLift: baseLift[index]
    };
  };
  
  // In your component
return (
<>

<section className="relative w-full bg-black py-20 px-4">
  <div className="max-w-7xl mx-auto">
    
    {/* Base Line */}
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-700 z-0"></div>
      
      {/* Cards Container - ALL CARDS ALIGNED TO BOTTOM */}
      <div className="flex items-end justify-center gap-4 md:gap-6 relative z-10">
        {services.map((service, index) => {
          const cardStyles = getCardStyles(index);
          
          // CORRECT FORMULA FOR CLIP PATH
          const maxHeight = Math.max(cardStyles.left, cardStyles.right);
          const heightDiff = cardStyles.right - cardStyles.left;
          const slantPercentage = (heightDiff / maxHeight) * 100;
          
          // Calculate visible height (the taller side)
          const visibleHeight = maxHeight;
          
          // How much to lift from base (for center cards)
          const liftAmount = Math.abs(index - 2) * 20; // Center cards upar
          
          return (
            <div
              key={index}
              className="relative w-full max-w-[200px]"
              style={{
                marginBottom: `${liftAmount}px`
              }}
            >
              {/* Main Card with proper clipping */}
              <div
                className="bg-black border border-white/20 rounded-xl p-5 transition-all duration-300
                hover:border-orange-500 hover:shadow-[0_10px_30px_rgba(255,89,0,0.3)]"
                style={{
                  height: `${visibleHeight}px`,
                  clipPath: `
                    polygon(
                      0 ${heightDiff > 0 ? `${-heightDiff}px` : '0px'},
                      100% ${heightDiff < 0 ? `${heightDiff}px` : '0px'},
                      100% 100%,
                      0 100%
                    )
                  `,
                  // Position inside container
                  position: 'relative',
                  top: heightDiff < 0 ? `${Math.abs(heightDiff)}px` : '0px'
                }}
              >
                {/* Card Content - adjust position based on slant */}
                <div 
                  className="h-full flex flex-col"
                  style={{
                    transform: `translateY(${heightDiff > 0 ? heightDiff/2 : Math.abs(heightDiff)/2}px)`
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <span className="text-orange-500 font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-white text-lg font-bold mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom indicator dots */}
              <div className="absolute -bottom-1 left-0 right-0 flex justify-between px-2">
                {index === 0 && (
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
                {index === 4 && (
                  <div className="w-3 h-3 bg-green-500 rounded-full ml-auto"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
  </div>
</section>

</>)

 }