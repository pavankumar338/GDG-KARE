import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";

const TextReveal = ({ text }) => {
  return (
    <motion.span>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-pre"
          style={{
            transition: `
              transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.04}s, 
              opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.04}s
            `,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

TextReveal.propTypes = {
  text: PropTypes.string.isRequired,
};

const ResponsiveText = ({ isScrolled }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TextReveal
      text={isMobile ? "GDG KARE" : "GDG OnCampus KARE"}
      isScrolled={isScrolled}
    />
  );
};

ResponsiveText.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

const GDGLogoLeft = () => (
  <svg
    width="35"
    height="35"
    viewBox="30 30 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M132.9 39.8C107.7 54 82.5 68.2 57.3 82.4c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8c7.1 11.1 21.1 15.2 32.8 8.6c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8C158.6 37.3 144.7 33.2 132.9 39.8z"
      fill="#EA4335"
    />
    <path
      d="M156.2 137.2c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6c-6 11.3-3.1 26.3 8.6 32.8c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6C170.8 158.7 167.8 143.8 156.2 137.2z"
      fill="#4285F4"
      transform="translate(0,8)"
    />
  </svg>
);

const GDGLogoRight = () => (
  <svg
    width="35"
    height="35"
    viewBox="200 30 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M240.9 178.4c25.2-14.2 50.4-28.4 75.7-42.6c3.6-2 7.2-4.1 10.8-6.1c10.9-6.2 15.6-22.1 8.6-32.8c-7.1-11.1-21.1-15.2-32.8-8.6c-25.2 14.2-50.4 28.4-75.7 42.6c-3.6 2-7.2 4.1-10.8 6.1c-10.9 6.2-15.6 22.1-8.6 32.8C215.2 180.9 229.2 185 240.9 178.4z"
      fill="#FBBC04"
    />
    <path
      d="M217.1 81.5c25.2 14.2 50.4 28.4 75.7 42.6c3.6 2 7.2 4.1 10.8 6.1c10.9 6.2 26.7 3 32.8-8.6c6-11.3 3.1-26.3-8.6-32.8c-25.2-14.2-50.4-28.4-75.7-42.6c-3.6-2-7.2-4.1-10.8-6.1c-10.9-6.2-26.7-3-32.8 8.6C202.5 60 205.5 74.9 217.1 81.5z"
      fill="#0F9D58"
    />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, setIsDark } = useTheme();

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/", color: "#4285F4" },
    { name: "About", path: "/about", color: "#34A853" },
    { name: "Events", path: "/events", color: "#EA4335" },
    { name: "Team", path: "/team", color: "#FBBC04" },
    { name: "Contact", path: "/contact", color: "#34A853" },
  ];

  return (
    <nav 
      className={`w-full z-[1000] transition-all duration-300 shadow-md bg-white dark:bg-black dark:shadow-lg py-3 sm:py-4 px-4 sm:px-8 ${
        isScrolled ? 'fixed top-0 left-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12 sm:h-14">
        {/* Logo Section */}
        <Link 
          to="/" 
          className="no-underline text-inherit flex items-center transition-all duration-300 min-w-0 flex-1"
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Left Logo */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex-shrink-0"
            >
              <GDGLogoLeft />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className={`flex items-center gap-1 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] min-w-0 ${
                isScrolled 
                  ? 'max-w-0 opacity-0 invisible pointer-events-none overflow-hidden' 
                  : 'max-w-xs sm:max-w-md opacity-100 visible pointer-events-auto'
              }`}
            >
              <span className="text-[#4285F4] dark:text-[#8AB4F8] text-xl sm:text-2xl font-normal leading-none flex-shrink-0">
                [
              </span>
              <div className="text-lg sm:text-xl font-medium text-black dark:text-white whitespace-nowrap overflow-hidden">
                <ResponsiveText isScrolled={isScrolled} />
              </div>
              <span className="text-[#4285F4] dark:text-[#8AB4F8] text-xl sm:text-2xl font-normal leading-none flex-shrink-0">
                ]
              </span>
            </motion.div>

            {/* Right Logo */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2,
              }}
              className="flex-shrink-0"
            >
              <GDGLogoRight />
            </motion.div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative font-medium px-3 py-2 transition-all duration-300 group hover:scale-105"
                style={{ color: item.color }}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4285F4] via-[#FBBC04] to-[#EA4335] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>
          
          <Link
            to="/join"
            className="bg-gradient-to-r from-[#4285F4] to-[#EA4335] text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
            onClick={() => setMobileOpen(false)}
          >
            Join Us
          </Link>
          
          <motion.button
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2 flex-shrink-0">
          <motion.button
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>
          
          <button
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
                mobileOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : 'mb-1.5'
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
                mobileOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-[999] flex items-center justify-center md:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileOpen ? 1 : 0 }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Menu Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center gap-6 w-full max-w-sm mx-auto px-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: mobileOpen ? 1 : 0, 
            y: mobileOpen ? 0 : 20 
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <span className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transform rotate-45"/>
            <span className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transform -rotate-45 -mt-0.5"/>
          </button>
          
          {/* Navigation Links */}
          {navLinks.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: mobileOpen ? 1 : 0, 
                y: mobileOpen ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: 0.15 + index * 0.08 }}
            >
              <Link
                to={item.path}
                className="text-2xl font-bold py-3 relative group flex items-center justify-center w-full transition-all duration-200 hover:scale-105"
                style={{ color: item.color }}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-12 h-0.5 bg-current transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
          
          {/* Join Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: mobileOpen ? 1 : 0, 
              y: mobileOpen ? 0 : 20 
            }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-4"
          >
            <Link
              to="/join"
              className="bg-gradient-to-r from-[#4285F4] to-[#EA4335] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => setMobileOpen(false)}
            >
              Join Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;