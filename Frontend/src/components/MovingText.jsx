import React from 'react';

const GDGLogo = ({ direction = 'left' }) => (
  <svg
    width="40"
    height="40"
    viewBox="30 30 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`mx-4 ${direction === 'left' ? 'rotate-180' : ''} transition-transform duration-300 hover:scale-110`}
    style={{
      filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))'
    }}
  >
    {direction === 'left' ? (
      <>
        {/* First fragment - Green and Yellow */}
        <path
          d="M132.9 39.8C107.7 54 82.5 68.2 57.3 82.4c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8c7.1 11.1 21.1 15.2 32.8 8.6c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8C158.6 37.3 144.7 33.2 132.9 39.8z"
          fill="#34A853"
          style={{ filter: 'drop-shadow(0 0 4px #34A85340)' }}
        />
        <path
          d="M156.2 137.2c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6c-6 11.3-3.1 26.3 8.6 32.8c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6C170.8 158.7 167.8 143.8 156.2 137.2z"
          fill="#FBBC04"
          style={{ filter: 'drop-shadow(0 0 4px #FBBC0440)' }}
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
    <div className="relative h-20 w-full overflow-hidden bg-gradient-to-r from-[#4285F4]/5 via-[#FBBC04]/5 to-[#EA4335]/5 dark:from-[#4285F4]/10 dark:via-[#FBBC04]/10 dark:to-[#EA4335]/10 backdrop-blur-sm">
      <div className="absolute whitespace-nowrap animate-moveRight flex items-center gap-12">
        {[...texts, ...texts].map((item, index) => (
          <React.Fragment key={index}>
            {item.text !== "SPACER" ? (
              <>
                <span
                  className="text-4xl font-bold tracking-wider transition-all duration-300 hover:scale-110"
                  style={{ 
                    color: item.color,
                    textShadow: `0 0 15px ${item.color}40, 0 0 30px ${item.color}20`
                  }}
                >
                  {item.text}
                </span>
                {item.text === "KARE" && (
                  <GDGLogo direction={index % 2 === 0 ? 'right' : 'left'} />
                )}
              </>
            ) : (
              <div className="w-32" /> // Spacer div
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MovingText; 