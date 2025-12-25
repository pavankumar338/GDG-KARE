import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Events from './Events';
import styled from "@emotion/styled";

// Define GDG Colors as variables
const GDG_BLUE = '#4285F4';
const GDG_RED = '#EA4335';
const GDG_YELLOW = '#FBBC04';
const GDG_GREEN = '#34A853';

// Carousel images
const carouselImages = [
  "/1726079884431.jpeg",
  "/1727937812403.jpeg",
  "/WhatsApp Image 2025-04-17 at 13.53.27_b71f55a8.jpg"
];

// Styled components
const EventsSection = styled.section`
  background: #FFFFFF;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  color: #000000;
  width: 100vw;
  
  body.dark & {
    background: #202124;
    color: #FFFFFF;
  }
  
  @media (prefers-color-scheme: light) {
    background: #FFFFFF;
    color: #000000;
  }
`;

const EventsContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

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
    <div className="w-full min-h-[60vh] md:min-h-[70vh] relative overflow-hidden" style={{ touchAction: 'pan-y' }}>
      {/* Subtle gradient overlay for text readability while preserving image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-10 pointer-events-none"></div>
      
      {/* Hero Text Overlay with Framer Motion */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          GDG Kare Events
        </motion.h1>
        <motion.p 
          className="text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl px-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Join us for exciting tech events, workshops, and community gatherings
        </motion.p>
      </motion.div>
      
      {/* Images container with Framer Motion */}
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          index === activeIndex && (
            <motion.div 
              key={index}
              className="absolute inset-0 h-full w-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={image} 
                alt={`Event ${index + 1}`} 
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30 bg-black px-2 py-1.5 md:px-3 md:py-2">
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

// Events content section
const EventsContent = () => {
  return (
    <motion.div
      className="py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Events />
    </motion.div>
  );
};

const EventsPage = () => {
  return (
    <EventsSection>
      <ImageCarousel images={carouselImages} />
      <EventsContainer>
        <EventsContent />
      </EventsContainer>
    </EventsSection>
  );
};

export default EventsPage;