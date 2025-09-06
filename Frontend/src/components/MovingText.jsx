import React from 'react';

const GDGLogo = ({ direction = 'left', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="30 30 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`mx-2 sm:mx-4 ${direction === 'left' ? 'rotate-180' : ''}`}
    style={{}}
  >
    {direction === 'left' ? (
      <>
        {/* First fragment - Red (top) and Blue (bottom, with gap) */}
        <path
          d="M132.9 39.8C107.7 54 82.5 68.2 57.3 82.4c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8c7.1 11.1 21.1 15.2 32.8 8.6c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8C158.6 37.3 144.7 33.2 132.9 39.8z"
          fill="#EA4335"
        />
        <path
          d="M156.2 137.2c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6c-6 11.3-3.1 26.3 8.6 32.8c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6C170.8 158.7 167.8 143.8 156.2 137.2z"
          fill="#4285F4"
          transform="translate(0,8)"
        />
        {/* Second fragment - Blue and Red */}
        <path
          d="M132.9 39.8C107.7 54 82.5 68.2 57.3 82.4c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8c7.1 11.1 21.1 15.2 32.8 8.6c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8C158.6 37.3 144.7 33.2 132.9 39.8z"
          fill="#4285F4"
          transform="translate(150, 0) scale(-1, 1)"
          style={{ filter: 'drop-shadow(0 0 4px #4285F440)' }}
        />
        <path
          d="M156.2 137.2c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6c-6 11.3-3.1 26.3 8.6 32.8c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6C170.8 158.7 167.8 143.8 156.2 137.2z"
          fill="#EA4335"
          transform="translate(150, 0) scale(-1, 1)"
          style={{ filter: 'drop-shadow(0 0 4px #EA433540)' }}
        />
      </>
    ) : (
      <>
        {/* First fragment - Blue and Red */}
        <path
          d="M132.9 39.8C107.7 54 82.5 68.2 57.3 82.4c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8c7.1 11.1 21.1 15.2 32.8 8.6c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8C158.6 37.3 144.7 33.2 132.9 39.8z"
          fill="#4285F4"
          style={{ filter: 'drop-shadow(0 0 4px #4285F440)' }}
        />
        <path
          d="M156.2 137.2c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6c-6 11.3-3.1 26.3 8.6 32.8c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6C170.8 158.7 167.8 143.8 156.2 137.2z"
          fill="#EA4335"
          style={{ filter: 'drop-shadow(0 0 4px #EA433540)' }}
        />
        {/* Second fragment - Green and Yellow */}
        <path
          d="M132.9 39.8C107.7 54 82.5 68.2 57.3 82.4c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8c7.1 11.1 21.1 15.2 32.8 8.6c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8C158.6 37.3 144.7 33.2 132.9 39.8z"
          fill="#34A853"
          transform="translate(150, 0) scale(-1, 1)"
          style={{ filter: 'drop-shadow(0 0 4px #34A85340)' }}
        />
        <path
          d="M156.2 137.2c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6c-6 11.3-3.1 26.3 8.6 32.8c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6C170.8 158.7 167.8 143.8 156.2 137.2z"
          fill="#FBBC04"
          transform="translate(150, 0) scale(-1, 1)"
          style={{ filter: 'drop-shadow(0 0 4px #FBBC0440)' }}
        />
      </>
    )}
  </svg>
);

const MovingText = () => {
  const texts = [
    { text: "GDG", color: "#4285F4" }, // Google Blue
    { text: "KARE", color: "#EA4335" }, // Google Red
    { text: "GDG", color: "#34A853" }, // Google Green
    { text: "KARE", color: "#4285F4" }, // Google Blue
    { text: "GDG", color: "#FBBC04" }, // Google Yellow
    { text: "KARE", color: "#34A853" }, // Google Green
    { text: "GDG", color: "#4285F4" }, // Google Blue
    { text: "KARE", color: "#EA4335" },
    { text: "GDG", color: "#4285F4" }, // Google Blue
    { text: "KARE", color: "#EA4335" }, // Google Red
    { text: "GDG", color: "#34A853" }, // Google Green
    { text: "KARE", color: "#4285F4" }, // Google Blue
    { text: "GDG", color: "#FBBC04" }, // Google Yellow
    { text: "KARE", color: "#34A853" }, // Google Green
    { text: "GDG", color: "#4285F4" }, // Google Blue
    { text: "KARE", color: "#EA4335" },  // Google Red
    { text: "SPACER", color: "transparent" }, // Spacer element
  ];

  return (
    <div className="w-full h-16 sm:h-20 relative bg-gradient-to-r from-[#4285F4]/5 via-[#FBBC04]/5 to-[#EA4335]/5 dark:from-[#4285F4]/10 dark:via-[#FBBC04]/10 dark:to-[#EA4335]/10 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="whitespace-nowrap animate-moveRight flex items-center gap-6 sm:gap-10" style={{ willChange: 'transform' }}>
          {[...texts, ...texts].map((item, index) => (
            <React.Fragment key={index}>
              {item.text !== "SPACER" ? (
                <span className="flex items-center gap-1 sm:gap-2">
                  <span
                    className="text-xl sm:text-3xl font-bold tracking-wider transition-all duration-300 hover:scale-110"
                    style={{ 
                      color: item.color,
                      textShadow: `0 0 8px ${item.color}40, 0 0 16px ${item.color}20`
                    }}
                  >
                    {item.text}
                  </span>
                  {item.text === "KARE" && (
                    <GDGLogo direction={index % 2 === 0 ? 'right' : 'left'} size={24} />
                  )}
                </span>
              ) : (
                <div className="w-8 sm:w-16" /> // Spacer div
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingText; 