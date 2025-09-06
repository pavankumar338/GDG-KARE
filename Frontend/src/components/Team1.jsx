import React, { useEffect, useState, useRef } from 'react';
import { Twitter, Linkedin, Github, Instagram, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
  {
    name: "Keerthi Kumar M",
    role: "Organizer",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/keerthi_kumar_m_ZPXzogM.png",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#4285F4', // Blue
      border1: '#EA4335',    // Red
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#4285F4'   // Blue
    }
  },
  {
    name: "Thanuja Thulasi",
    role: "Co-organizer",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/thanuja_thulasi.jpeg",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#EA4335', // Red
      border1: '#FBBC04',    // Yellow
      border2: '#34A853',    // Green
      roleLabel: '#34A853',  // Green
      nameLabel: '#EA4335'   // Red
    }
  },
  {
    name: "Nikhil Enjirapu",
    role: "UI/UX Lead",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/nikhil_enjirapu_HDs9lw2.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#FBBC04', // Yellow
      border1: '#34A853',    // Green
      border2: '#4285F4',    // Blue
      roleLabel: '#4285F4',  // Blue
      nameLabel: '#FBBC04'   // Yellow
    }
  },
  {
    name: "G. Lakshmi Narasimha Yadav",
    role: "Graphic Designer",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/g._lakshmi_narasimha_yadav_NWoGNc1.png",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#34A853', // Green
      border1: '#4285F4',   // Blue
      border2: '#EA4335',    // Red
      roleLabel: '#EA4335',  // Red
      nameLabel: '#34A853'   // Green
    }
  },
  {
    name: "Arunkumar S",
    role: "Web Developer",
    image: "public/arunkumar_s_NpHXYnv.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#4285F4', // Blue
      border1: '#34A853',    // Green
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#EA4335'   // Red
    }
  },
  {
    name: "Suresh Kumar G",
    role: "Web Developer",
    image: "public/suresh_kumar_g_7C1LCFI.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#EA4335', // Red
      border1: '#4285F4',    // Blue
      border2: '#34A853',    // Green
      roleLabel: '#34A853',  // Green
      nameLabel: '#FBBC04'   // Yellow
    }
  },
  {
    name: "Manoj Hariharan R",
    role: "Android Development Lead",
    image: "public/manoj_hariharan_r_xUNY62k.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#FBBC04', // Yellow
      border1: '#EA4335',    // Red
      border2: '#4285F4',    // Blue
      roleLabel: '#4285F4',  // Blue
      nameLabel: '#34A853'   // Green
    }
  },
  {
    name: "DHATSHINAMOORTHY R",
    role: "Android Developer",
    image: "public/dhatshinamoorthy_r.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#34A853', // Green
      border1: '#FBBC04',   // Yellow
      border2: '#EA4335',    // Red
      roleLabel: '#EA4335',  // Red
      nameLabel: '#4285F4'   // Blue
    }
  },
  {
    name: "SRAVANTHI U",
    role: "Content Writer",
    image: "public/sravanthi_u_T4DNmp9.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#4285F4', // Blue
      border1: '#EA4335',    // Red
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#34A853'   // Green
    }
  },
  {
    name: "NAVEEN S",
    role: "Machine Learning Lead",
    image: "public/naveen_s.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#EA4335', // Red
      border1: '#34A853',    // Green
      border2: '#4285F4',    // Blue
      roleLabel: '#4285F4',  // Blue
      nameLabel: '#FBBC04'   // Yellow
    }
  },
  {
    name: "Hitesh Kumar Kothapalli",
    role: "DevOps Lead",
    image: "public/hitesh_kumar_kothapalli.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#FBBC04', // Yellow
      border1: '#4285F4',    // Blue
      border2: '#34A853',    // Green
      roleLabel: '#34A853',  // Green
      nameLabel: '#EA4335'   // Red
    }
  },
  {
    name: "Barnes Samuel",
    role: "Media Team",
    image: "public/barnes_samuel.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#34A853', // Green
      border1: '#FBBC04',   // Yellow
      border2: '#EA4335',    // Red
      roleLabel: '#EA4335',  // Red
      nameLabel: '#4285F4'   // Blue
    }
  },
  {
    name: "Bharathi Ankamreddy",
    role: "Social Media Lead",
    image: "public/bharathi_ankamreddy.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#4285F4', // Blue
      border1: '#EA4335',    // Red
      border2: '#34A853',    // Green
      roleLabel: '#34A853',  // Green
      nameLabel: '#FBBC04'   // Yellow
    }
  },
  {
    name: "Divya Sri Digamarthi",
    role: "Cloud Computing Lead",
    image: "public/divya_sri_digamarthi.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#EA4335', // Red
      border1: '#4285F4',    // Blue
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#34A853'   // Green
    }
  },
  {
    name: "Krishna Vineeth Gubba",
    role: "Coordinator",
    image: "public/gubba_v_sesha_sai_krishna_vineeth.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#FBBC04', // Yellow
      border1: '#34A853',    // Green
      border2: '#EA4335',    // Red
      roleLabel: '#EA4335',  // Red
      nameLabel: '#4285F4'   // Blue
    }
  },
  {
    name: "Poojith reddy Menthem",
    role: "Coordinator",
    image: "public/poojith_reddy_menthem_4pB2x3v.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#34A853', // Green
      border1: '#4285F4',   // Blue
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#EA4335'   // Red
    }
  },
  {
    name: "BALAJI N",
    role: "Coordinator",
    image: "public/balaji_.n_bzhKrFH.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#4285F4', // Blue
      border1: '#FBBC04',    // Yellow
      border2: '#EA4335',    // Red
      roleLabel: '#EA4335',  // Red
      nameLabel: '#34A853'   // Green
    }
  }
];

// Carousel images
const carouselImages = [
  "/1726079884431.jpeg",
  "/1727937812403.jpeg",
  "/WhatsApp Image 2025-04-17 at 13.53.27_b71f55a8.jpg"
];

const SocialIcon = ({ socialLink }) => {
  const iconSize = 20;
  
  const getIcon = () => {
    switch (socialLink.platform) {
      case 'twitter':
        return <Twitter size={iconSize} />;
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'github':
        return <Github size={iconSize} />;
      case 'instagram':
        return <Instagram size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <a
      href={socialLink.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:scale-110 transition-transform duration-200"
      aria-label={`${socialLink.platform} profile`}
    >
      {getIcon()}
    </a>
  );
};

// Helper function to get initials
const getInitials = (name) => {
  if (!name) return '';
  const nameParts = name.split(' ').filter(part => part.length > 0);
  if (nameParts.length === 0) return '';
  
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  
  return nameParts[0].charAt(0).toUpperCase() + nameParts[nameParts.length - 1].charAt(0).toUpperCase();
};

const TeamMemberCard = ({ member }) => {
  const gdgColors = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853',
    darkGrey: '#202124' // Google Dark Grey for social icons background
  };

  // Add margin bottom on mobile
  const cardClasses = "mb-8 md:mb-0";

  // Safely access colors, providing an empty object as fallback if member.colors is null or undefined
  const memberColors = member.colors || {};

  // Provide default colors for each property if they are missing
  // Using slightly adjusted opacities based on visual analysis of the image
  const backgroundColor = memberColors.background || gdgColors.blue + '15'; // Slightly more opaque
  const border1Color = memberColors.border1 || gdgColors.red + '25'; // Slightly more opaque
  const border2Color = memberColors.border2 || gdgColors.green + '25'; // Slightly more opaque
  const roleLabelColor = memberColors.roleLabel || gdgColors.yellow + 'F2'; // ~95% opacity
  const nameLabelColor = memberColors.nameLabel || gdgColors.blue + 'E6'; // ~90% opacity
  const socialIconBg = gdgColors.darkGrey;

  const placeholderColor = nameLabelColor; // Use nameLabelColor for placeholder background

  return (
    <div className={`relative w-full max-w-sm mx-auto transform transition-all duration-300 hover:-translate-y-2 ${cardClasses}`}>
      <div 
        className="relative p-6 rounded-3xl shadow-xl" // Increased shadow for main card
        style={{ backgroundColor: backgroundColor }}
      >
        {/* Stacked background layers */}
        <div 
          className="absolute inset-0 -rotate-6 rounded-3xl shadow-lg" // Maintained shadow for layers
          style={{ backgroundColor: border1Color, zIndex: -2 }}
        />
        <div 
          className="absolute inset-0 rotate-3 rounded-3xl shadow-lg" // Maintained shadow for layers
          style={{ backgroundColor: border2Color, zIndex: -1 }}
        />
        
        {/* Card content */}
        <div className="relative z-10">
          {/* Image or Placeholder */}
          <div className="relative">
            {member.image ? (
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
            ) : (
              <div 
                className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center text-white font-bold text-4xl"
                style={{
                  width: '100%',
                  height: '16rem', // h-64 is 16rem
                  backgroundColor: placeholderColor
                }}
              >
                {getInitials(member.name)}
              </div>
            )}
            {/* Role Label */}
            <div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-md text-sm font-semibold text-gray-800 whitespace-nowrap"
              style={{ backgroundColor: roleLabelColor }}
            >
              {member.role}
            </div>
          </div>

          {/* Name Label */}
          <div className="mt-8 text-center relative z-10">
             <div
               className="inline-block px-4 py-2 rounded-full shadow-md text-lg font-bold whitespace-nowrap"
               style={{ backgroundColor: nameLabelColor }}
             >
               {member.name}
             </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mt-4">
            {Object.entries(member.socials || {}).map(([platform, url]) => url && url !== '#' && (
              <div key={platform} className="rounded-lg p-2 shadow-md" // Rounded corners and shadow for social icons
                   style={{ backgroundColor: socialIconBg }}>
                <SocialIcon socialLink={{ platform, url }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Professional Image Carousel component with Framer Motion
const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  
  const transitionDuration = 500;
  const slideDuration = 3500;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      nextSlide();
    }, slideDuration);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, slideDuration);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-screen relative overflow-hidden bg-black">
      {/* Hero Text Overlay with Framer Motion */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white text-center px-4 bg-black/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          GDG Kare
        </motion.h1>
        <motion.p 
          className="text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl text-shadow-lg px-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building a community of developers passionate about Google technologies
        </motion.p>
      </motion.div>
      
      {/* Images container with Framer Motion */}
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          index === activeIndex && (
            <motion.div 
              key={index}
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={image} 
                alt={`Team Event ${index + 1}`} 
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Minimal Navigation arrows with Framer Motion */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 md:px-6 z-30 pointer-events-none">
        <motion.button
          onClick={() => {
            goToSlide((activeIndex - 1 + images.length) % images.length);
            resetTimer();
          }}
          className="bg-black/30 backdrop-blur-sm text-white/90 p-2 rounded-full transition-all shadow-lg pointer-events-auto hover:bg-black/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={() => {
            goToSlide((activeIndex + 1) % images.length);
            resetTimer();
          }}
          className="bg-black/30 backdrop-blur-sm text-white/90 p-2 rounded-full transition-all shadow-lg pointer-events-auto hover:bg-black/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>      {/* Navigation arrows with Framer Motion */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-4 md:px-8 z-30">
        <motion.button
          onClick={() => {
            goToSlide((activeIndex - 1 + images.length) % images.length);
            resetTimer();
          }}
          className="bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={() => {
            goToSlide((activeIndex + 1) % images.length);
            resetTimer();
          }}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
      
      {/* Minimal Navigation dots with Framer Motion */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1.5 md:px-3 md:py-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              goToSlide(index);
              resetTimer();
            }}
            className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced Team Carousel with improved animations
const TeamCarousel = ({ members }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsToShow = 3; // Number of cards to show at once
  const timerRef = useRef(null);
  
  // Function to move to the next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % members.length);
    
    // Allow for next transition after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400); // Faster transition
  };
  
  // Function to move to the previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((current) => (current - 1 + members.length) % members.length);
    
    // Allow for next transition after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400); // Faster transition
  };
  
  // Reset the timer when manually changing slides
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 2500); // Faster rotation (2.5 seconds)
  };
  
  // Auto advance slides
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 2500); // Faster rotation (2.5 seconds)
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  // Get the visible cards based on active index
  const getVisibleCards = () => {
    const visibleCards = [];
    
    for (let i = 0; i < cardsToShow; i++) {
      const index = (activeIndex + i) % members.length;
      visibleCards.push(members[index]);
    }
    
    return visibleCards;
  };
  
  return (
    <div className="relative w-full px-12">
      {/* Previous button */}
      <button 
        onClick={() => {
          prevSlide();
          resetTimer();
        }} 
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 transition-all hover:bg-gray-100"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Cards container */}
      <div className="overflow-hidden">
        <div className="flex justify-center gap-16 transition-all duration-400 ease-in-out">
          {getVisibleCards().map((member, index) => (
            <div 
              key={`${member.name}-${index}`} 
              className="w-80 flex-none"
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Next button */}
      <button 
        onClick={() => {
          nextSlide();
          resetTimer();
        }} 
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 transition-all hover:bg-gray-100"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-8">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setActiveIndex(index);
                resetTimer();
                setTimeout(() => setIsTransitioning(false), 400);
              }
            }}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TeamSection = () => {
  // Separate team members into different groups
  const organizers = team.filter(member => 
    member.role === "Organizer" || member.role === "Co-organizer"
  );
  const coordinators = team.filter(member => member.role === "Coordinator");
  const otherMembers = team.filter(member => 
    member.role !== "Coordinator" && 
    member.role !== "Organizer" && 
    member.role !== "Co-organizer"
  );

  return (
    <section className="relative -mt-16">
      <ImageCarousel images={carouselImages} />

      <div className="py-16 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#4285F4]">Meet Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet our passionate team of organizers dedicated to building and nurturing the Google Developer Group in Kare.
          </p>
        </motion.div>
        
        {/* Organizers Section with Framer Motion */}
        <motion.div 
          className="mb-24 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Organizers</h3>
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex md:flex-row md:flex-wrap md:justify-center md:gap-12">
            {organizers.map((member, index) => (
              <motion.div 
                key={index} 
                className="w-full max-w-[320px] md:w-auto md:flex-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Team Members with Framer Motion */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Team</h3>
          <div className="relative h-[400px] w-full overflow-hidden">
            <div className="absolute whitespace-nowrap animate-moveRight flex items-center gap-16">
              {[...otherMembers, ...otherMembers, ...otherMembers].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="flex-none w-80 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coordinators Section with Framer Motion */}
        <motion.div 
          className="mt-24 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Coordinators</h3>
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex md:flex-row md:flex-wrap md:justify-center md:gap-12">
            {coordinators.map((member, index) => (
              <motion.div 
                key={index} 
                className="w-full max-w-[320px] md:w-auto md:flex-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes moveRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-moveRight {
          animation: moveRight 30s linear infinite;
        }
        .animate-moveRight:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;