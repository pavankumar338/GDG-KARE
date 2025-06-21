import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { RetroGrid } from "./RetroGrid";
import { RainbowButton } from "./RainbowButton";
import MovingText from "./MovingText";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

const Hero = () => {
  return (
    <div className="relative">
      <HeroSection>
        <RetroGrid className="opacity-30 dark:opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-blue dark:text-light-blue mb-6"
          >
            Welcome to GDG on Campus KARE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-800 dark:text-gray-200 mb-8"
          >
            Empowering developers and tech enthusiasts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RainbowButton
              onClick={() => {
                window.open(
                  "https://gdg.community.dev/gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india/",
                  "_blank"
                );
              }}
              className="text-lg font-medium"
            >
              Join Our Community
            </RainbowButton>
          </motion.div>
        </div>
      </HeroSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <MovingText />
      </motion.div>
    </div>
  );
};

export default Hero;
