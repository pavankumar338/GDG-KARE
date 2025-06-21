import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RetroGrid } from "./RetroGrid";
import { DotPattern } from "./DotPattern";
import { useTheme } from "../context/ThemeContext";
import styled from "@emotion/styled";

// Define GDG Colors as variables
const GDG_BLUE = '#4285F4';
const GDG_RED = '#EA4335';
const GDG_YELLOW = '#FBBC04';
const GDG_GREEN = '#34A853';

// Styled components
const EventsSection = styled.section`
  padding: 8rem 2rem;
  background: #ffffff;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const BackgroundImage = styled(motion.img)`
  position: absolute;
  opacity: 0.3;
  transition: opacity 0.3s ease;
  z-index: 0;
  filter: brightness(1.2);

  &.top-right {
    top: 0;
    right: 0;
    width: 66.666667%;
    transform: translate(25%, -25%);
  }

  &.bottom-left {
    bottom: 0;
    left: 0;
    width: 66.666667%;
    transform: translate(-25%, 25%);
  }

  body.dark & {
    opacity: 0.4;
    filter: brightness(1.4) contrast(1.1);
  }
`;

const HeroSection = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100vh;
  background: var(--bg-primary);
  transition: background 0.3s ease;

  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

// Carousel images
const carouselImages = [
  "public/1740739242385.jpeg",
  "public/Screenshot 2025-05-21 155237.png",
  "public/Screenshot 2025-05-21 155316.png",
  "public/Picture4.jpg",
  "public/Picture3.jpg",
  "public/Picture2.jpg",
  "public/Picture1.jpg"
];

const events = [
  {
    title: "Inventia",
    date: "November 7, 2024",
    description:
      "Join us for an exciting innovation showcase and tech exhibition",
    image: "/1725957945271.jpeg",
    link: "#"
  },
  {
    title: "Study Jams Session - 2",
    date: "November 6, 2024",
    description:
      "Workshop / Study Group session focusing on hands-on learning and collaboration",
    image: "/images/study-jams.jpg",
    link: "#"
  },
  {
    title: "Study Jams Session - 1",
    date: "November 5, 2024",
    description:
      "Workshop / Study Group kickoff session for interactive learning",
    image: "/images/study-jams.jpg",
    link: "#"
  },
  {
    title: "Build with AI",
    date: "November 4, 2024",
    description:
      "Info session on building applications with Artificial Intelligence",
    image: "public/hq720.jpg",
    link: "#"
  },
  {
    title: "GenAI Workshop",
    date: "September 20, 2024",
    description: "Hands-on workshop on Generative AI and its applications",
    image: "/images/genai-workshop.jpg",
    link: "#"
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <HeroSection>
      {/* Overlay with Google Dev colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-black/5 to-green-900/30 z-10" />
      
      {/* Carousel container */}
      <div className="relative h-full w-full">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img 
              src={image} 
              alt={`GDG Event ${index + 1}`} 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Controls overlay */}
      <div className="absolute inset-0 flex flex-col justify-between z-20 p-8">
        {/* Logo and navigation */}
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-white font-bold text-2xl flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
          
          </motion.div>
          
          
        </div>
        
        {/* Hero content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Empowering Tech Enthusiasts
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join our vibrant community of developers, designers, and innovators building the future with Google technologies
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            
          </motion.div>
        </div>
        
        {/* Navigation arrows and indicators */}
        <div className="flex justify-between items-center">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </HeroSection>
  );
};

const Events1 = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const { isDark } = useTheme();

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
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
    <>
      <HeroCarousel />
      
      <EventsSection>
        {/* Background Images with increased visibility */}
        <BackgroundImage
          src="/src/assets/team-idea.svg"
          alt="Team Idea Background"
          className="top-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0.4 : 0.25 }}
          transition={{ duration: 0.5 }}
        />
        <BackgroundImage
          src="/src/assets/team.svg"
          alt="Team Background"
          className="bottom-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0.4 : 0.25 }}
          transition={{ duration: 0.5 }}
        />

        {/* Dot Pattern - Only in Dark Mode */}
        {isDark && (
          <div className="absolute inset-0 opacity-5">
            <DotPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              cx={1}
              cy={1}
              cr={1}
              className="text-blue-500"
            />
          </div>
        )}

        <div className="max-w-screen-xl mx-auto relative z-10">
          <motion.h2
            className={`text-center text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Past Events
          </motion.h2>
          <motion.p
            className={`text-center text-xl mb-16 max-w-xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join us for exciting workshops, study sessions, and tech talks. Stay
            updated with our latest events.
          </motion.p>

          {/* Updated Event Display Container */}
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
                      key={currentEventIndex}
                      className="relative h-[400px] sm:h-[500px] w-full"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <img
                        src={events[currentEventIndex].image}
                        alt={events[currentEventIndex].title}
                        className="w-full h-full object-cover object-center rounded-lg"
                        style={{
                          filter: 'brightness(0.9) contrast(1.1)',
                          transform: 'scale(1.02)',
                          transition: 'all 0.3s ease-in-out'
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-lg" />
                      
                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 px-4 py-2 rounded-full text-sm font-bold text-white backdrop-blur-sm"
                        style={{ backgroundColor: `${GDG_BLUE}CC` }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {events[currentEventIndex].category || 'Event'}
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
                        {events[currentEventIndex].title}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center space-x-3 mb-4 sm:mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full" style={{ backgroundColor: GDG_RED }} />
                        <span className="text-base sm:text-lg text-gray-300 font-medium">{events[currentEventIndex].date}</span>
                      </motion.div>
                    </div>

                    <motion.p 
                      className="text-base sm:text-lg text-gray-200 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {events[currentEventIndex].description}
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
                onClick={prevEvent}
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
                    onClick={() => setCurrentEventIndex(index)}
                    className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                      index === currentEventIndex 
                        ? 'w-8 sm:w-12' 
                        : 'w-2 sm:w-3 opacity-50 hover:opacity-75'
                    }`}
                    style={{ 
                      backgroundColor: index === currentEventIndex ? GDG_BLUE : '#666'
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={index === currentEventIndex ? {
                      boxShadow: [`0 0 20px ${GDG_BLUE}80`, `0 0 30px ${GDG_BLUE}40`, `0 0 20px ${GDG_BLUE}80`]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={nextEvent}
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
      </EventsSection>
    </>
  );
};

export default Events1;