import React from 'react';

const MovingText = () => {
  const textPairs = [
    { gdg: { text: "GDG", color: "#4285F4" }, kare: { text: "KARE", color: "#EA4335" }, dotColor: "#EA4335" },
    { gdg: { text: "GDG", color: "#34A853" }, kare: { text: "KARE", color: "#4285F4" }, dotColor: "#4285F4" },
    { gdg: { text: "GDG", color: "#FBBC04" }, kare: { text: "KARE", color: "#34A853" }, dotColor: "#34A853" },
    { gdg: { text: "GDG", color: "#4285F4" }, kare: { text: "KARE", color: "#EA4335" }, dotColor: "#EA4335" },
    { gdg: { text: "GDG", color: "#4285F4" }, kare: { text: "KARE", color: "#EA4335" }, dotColor: "#EA4335" },
    { gdg: { text: "GDG", color: "#34A853" }, kare: { text: "KARE", color: "#4285F4" }, dotColor: "#4285F4" },
    { gdg: { text: "GDG", color: "#FBBC04" }, kare: { text: "KARE", color: "#34A853" }, dotColor: "#34A853" },
    { gdg: { text: "GDG", color: "#4285F4" }, kare: { text: "KARE", color: "#EA4335" }, dotColor: "#EA4335" },
  ];

  return (
    <div className="w-full h-16 sm:h-20 relative bg-gradient-to-r from-[#4285F4]/5 via-[#FBBC04]/5 to-[#EA4335]/5 dark:from-[#4285F4]/10 dark:via-[#FBBC04]/10 dark:to-[#EA4335]/10 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="whitespace-nowrap animate-moveRight flex items-center" style={{ willChange: 'transform' }}>
          {[...textPairs, ...textPairs].map((pair, pairIndex) => (
            <React.Fragment key={pairIndex}>
              {/* GDG KARE pair with small gap */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <span
                  className="text-xl sm:text-3xl font-bold tracking-wider transition-all duration-300 hover:scale-110 inline-block"
                  style={{ 
                    color: pair.gdg.color,
                    textShadow: `0 0 8px ${pair.gdg.color}40, 0 0 16px ${pair.gdg.color}20`
                  }}
                >
                  {pair.gdg.text}
                </span>
                <span
                  className="text-xl sm:text-3xl font-bold tracking-wider transition-all duration-300 hover:scale-110 inline-block"
                  style={{ 
                    color: pair.kare.color,
                    textShadow: `0 0 8px ${pair.kare.color}40, 0 0 16px ${pair.kare.color}20`
                  }}
                >
                  {pair.kare.text}
                </span>
              </div>
              
              {/* Centered dot with larger gaps on both sides */}
              <div className="flex items-center justify-center px-8 sm:px-12">
                <span
                  className="text-sm sm:text-lg font-bold flex items-center justify-center"
                  style={{ 
                    color: pair.dotColor,
                    textShadow: `0 0 8px ${pair.dotColor}40, 0 0 16px ${pair.dotColor}20`,
                    height: '1.2em'
                  }}
                >
                  •
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingText; 