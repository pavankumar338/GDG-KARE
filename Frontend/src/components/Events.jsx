import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { RetroGrid } from "./RetroGrid";

// Define GDG Colors
const GDG_BLUE = '#4285F4';
const GDG_RED = '#EA4335';
const GDG_YELLOW = '#FBBC04';
const GDG_GREEN = '#34A853';

const EventsSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background 0.3s ease;

  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const AnimatedGridContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(66, 133, 244, 0.1), rgba(52, 168, 83, 0.1));
  z-index: 1;
`;

const GridBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image: linear-gradient(${GDG_BLUE}20 1px, transparent 1px),
    linear-gradient(90deg, ${GDG_BLUE}20 1px, transparent 1px);
  background-size: 50px 50px;
`;

const events = [
  {
    title: "Inventia",
    date: "November 7, 2024",
    description: "Join us for an exciting innovation showcase and tech exhibition. This event brought together developers, innovators, and tech enthusiasts to explore cutting-edge technologies and showcase their creative projects.",
    image: "/images/events/inventia.jpg",
    link: "#",
    category: "Innovation",
    attendees: "150+"
  },
  {
    title: "Study Jams Session - 2",
    date: "November 6, 2024", 
    description: "Workshop / Study Group session focusing on hands-on learning and collaboration. Participants engaged in interactive coding sessions and collaborative problem-solving exercises.",
    image: "/images/events/study-jams-2.jpg",
    link: "#",
    category: "Workshop",
    attendees: "80+"
  },
  {
    title: "Study Jams Session - 1", 
    date: "November 5, 2024",
    description: "Workshop / Study Group kickoff session for interactive learning. The first in our series of collaborative learning sessions designed for developers of all skill levels.",
    image: "/images/events/study-jams-1.jpg",
    link: "#",
    category: "Study Group",
    attendees: "100+"
  },
  {
    title: "Build with AI",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence. Explore the latest AI tools and frameworks, and learn how to integrate AI capabilities into your projects.",
    image: "/images/events/build-with-ai.jpg", 
    link: "#",
    category: "AI Workshop",
    attendees: "200+"
  },
  {
    title: "G2 HACKFEST",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence. Explore the latest AI tools and frameworks, and learn how to integrate AI capabilities into your projects.",
    image: "/images/events/hackfest.jpg", 
    link: "#",
    category: "Hackathon",
    attendees: "200+"
  }
];

const FloatingShape = ({ color, size, delay, position }) => (
  <motion.div
    className="absolute rounded-full opacity-10"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      ...position
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: delay
    }}
  />
);

const GDGLogo = () => (
  <motion.div 
    className="flex items-center space-x-3"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex space-x-1">
      {[GDG_BLUE, GDG_RED, GDG_YELLOW, GDG_GREEN].map((color, index) => (
        <motion.div
          key={index}
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3
          }}
        />
      ))}
    </div>
    <motion.span 
      className="text-white font-bold text-xl tracking-wider"
      animate={{ 
        textShadow: [
          `0 0 10px ${GDG_BLUE}`,
          `0 0 20px ${GDG_RED}`,
          `0 0 10px ${GDG_YELLOW}`,
          `0 0 20px ${GDG_GREEN}`,
          `0 0 10px ${GDG_BLUE}`
        ]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      GDG
    </motion.span>
  </motion.div>
);

const ComputerSVG = () => (
  <motion.svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute opacity-10"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <path d="M40 40h120v80H40z" fill="#4285F4" />
    <path d="M20 120h160v20H20z" fill="#EA4335" />
    <path d="M60 140h80v10H60z" fill="#FBBC04" />
    <circle cx="100" cy="100" r="30" fill="#34A853" />
  </motion.svg>
);

const ExpectSVG = () => (
  <motion.svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute opacity-10"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    <path d="M50 50c0-20 100-20 100 0s-100 20-100 0z" fill="#4285F4" />
    <path d="M30 70c0-20 140-20 140 0s-140 20-140 0z" fill="#EA4335" />
    <path d="M40 90c0-20 120-20 120 0s-120 20-120 0z" fill="#FBBC04" />
    <path d="M60 110c0-20 80-20 80 0s-80 20-80 0z" fill="#34A853" />
  </motion.svg>
);

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    setIsAutoplay(false);
  };

  const currentEvent = events[currentIndex];

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.4 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  return (
    <EventsSection>
      {/* Animated Retro Grid Background */}
      <AnimatedGridContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <RetroGrid
            width={20}
            height={20}
            x={-1}
            y={-1}
            cx={1}
            cy={1}
            cr={1}
            className="text-blue-500"
          />
        </motion.div>
      </AnimatedGridContainer>

      {/* Animated Grid Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, ${GDG_BLUE}10 1px, transparent 1px),
            linear-gradient(0deg, ${GDG_BLUE}10 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}
        animate={{
          backgroundPosition: ['0 0', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating Background Shapes - Hide on mobile */}
      <div className="hidden md:block">
        <FloatingShape color={GDG_BLUE} size="100px" delay={0} position={{ top: '10%', left: '5%' }} />
        <FloatingShape color={GDG_RED} size="80px" delay={1} position={{ top: '20%', right: '10%' }} />
        <FloatingShape color={GDG_YELLOW} size="120px" delay={2} position={{ bottom: '15%', left: '8%' }} />
        <FloatingShape color={GDG_GREEN} size="90px" delay={3} position={{ bottom: '25%', right: '15%' }} />
      </div>
      
      {/* Cartoon SVG Background Elements */}
      <div className="hidden md:block">
        <motion.div
          className="absolute top-[15%] right-[10%]"
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 0.1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ComputerSVG />
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[8%]"
          initial={{ opacity: 0, rotate: 15 }}
          animate={{ opacity: 0.1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ExpectSVG />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {/* Animated Title */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 relative"
            style={{
              background: `linear-gradient(45deg, ${GDG_BLUE}, ${GDG_RED}, ${GDG_YELLOW}, ${GDG_GREEN})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Past Events
          </motion.h2>
          <motion.div
            className="w-24 sm:w-32 h-1 mx-auto rounded-full"
            style={{ background: `linear-gradient(90deg, ${GDG_BLUE}, ${GDG_RED}, ${GDG_YELLOW}, ${GDG_GREEN})` }}
            animate={{ scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Main Event Card */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-700 relative">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl"
              style={{
                background: `linear-gradient(45deg, ${GDG_BLUE}, ${GDG_RED}, ${GDG_YELLOW}, ${GDG_GREEN})`,
                padding: '3px'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl" />
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="relative h-[400px] sm:h-[500px] w-full"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={currentEvent.image}
                      alt={currentEvent.title}
                      className="w-full h-full object-cover object-center rounded-lg"
                      style={{
                        filter: 'brightness(0.9) contrast(1.1)',
                        transform: 'scale(1.02)',
                        transition: 'all 0.3s ease-in-out'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-lg" />
                    
                    {/* GDG Logo Overlay */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <GDGLogo />
                    </div>

                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 px-4 py-2 rounded-full text-sm font-bold text-white backdrop-blur-sm"
                      style={{ backgroundColor: `${GDG_BLUE}CC` }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {currentEvent.category}
                    </motion.div>

                    {/* Event Stats */}
                    <motion.div
                      className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center space-x-2 bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: GDG_GREEN }} />
                        <span className="text-sm font-medium">{currentEvent.attendees} Attendees</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content Section */}
              <motion.div 
                className="p-6 sm:p-8 md:p-12 flex flex-col justify-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="space-y-4 sm:space-y-6">
                  <div>
                    <motion.h3 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
                      style={{ color: GDG_BLUE }}
                      animate={{ 
                        textShadow: [`0 0 20px ${GDG_BLUE}40`, `0 0 30px ${GDG_BLUE}60`, `0 0 20px ${GDG_BLUE}40`]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {currentEvent.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="flex items-center space-x-3 mb-4 sm:mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full" style={{ backgroundColor: GDG_RED }} />
                      <span className="text-base sm:text-lg text-gray-300 font-medium">{currentEvent.date}</span>
                    </motion.div>
                  </div>

                  <motion.p 
                    className="text-base sm:text-lg text-gray-200 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentEvent.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <motion.div 
            className="flex items-center justify-center space-x-6 sm:space-x-8 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={prevSlide}
              className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-all duration-300 group"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: GDG_BLUE + "20"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <div className="flex space-x-2 sm:space-x-3">
              {events.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoplay(false);
                  }}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'w-8 sm:w-12' 
                      : 'w-2 sm:w-3 opacity-50 hover:opacity-75'
                  }`}
                  style={{ 
                    backgroundColor: index === currentIndex ? GDG_BLUE : '#666'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={index === currentIndex ? {
                    boxShadow: [`0 0 20px ${GDG_BLUE}80`, `0 0 30px ${GDG_BLUE}40`, `0 0 20px ${GDG_BLUE}80`]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextSlide}
              className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-all duration-300 group"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: GDG_RED + "20"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Event Counter with Progress */}
          <motion.div 
            className="flex items-center justify-center mt-6 sm:mt-8 space-x-4 sm:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
           
            
            {/* Progress Bar */}
           
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Branding */}
      
    </EventsSection>
  );
};

export default Events;