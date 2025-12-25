import { motion } from "framer-motion";
import { useState } from "react";

const events = [
    {
    title: "Agent-Speak",
    date: "August 15, 2025",
    description: "Join us for a 3-day immersive workshop designed to introduce and upskill participants in the evolving fields of Generative and Agentic AI. This event is ideal for developers, students, and AI enthusiasts who are curious about how modern AI models are built, fine-tuned, and deployed into real-world applications. Each day is structured to progressively deepen your understanding, starting from foundational concepts, moving into powerful AI frameworks, and concluding with building intelligent, task-performing agents.",
    image: " Copy of GDG24 Signage Poster - Red (1).jpg",
    category: "Workshop",
    attendees: "150+",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india-presents-agent-speak/"
  },
     {
    title: "Basics of Github",
    date: "August 5-7, 2025",
    description: "Unlock the essentials of version control with our 'Introduction to Git and GitHub' workshop. This three-day event is a must-attend for any aspiring developer or technology enthusiast looking to gain a competitive edge. Join us from 5th to 7th August, from 5 PM to 6 PM in 8301 lab, Kalasalingam University, to learn from two of your own, as they guide you through setting up Git and GitHub, executing basic operations, understanding branches and workflows, and mastering the basics of the most important skill wherever you go in the tech industry. ",
    image: " Copy of GDG24 Signage Poster - Green (1).jpg",
    category: "Workshop",
    attendees: "150+",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india-presents-introduction-to-git-and-github-master-the-basics/"
  },
  {
    title: "Inventia",
    date: "September 9, 2024",
    description: "Ready to bring your ideas to life and demonstrate your innovative and technical abilities? Join us for Inventia, the mini-solution challenge hosted by GDG-OnCampus KARE (GDSC). This event presents an excellent opportunity for you to showcase your innovative skills and contribute towards solving one or more of the United Nations' 17 Sustainable Development Goals (SDGs) using Google technologies, with a focus on Generative AI.",
    image: "/Copy of GDG24 Signage Poster - Blue.jpg",
    category: "Innovation",
    attendees: "150+",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india-presents-inventia-2k24/"
  },
  {
    title: "Study Jams Session - 1",
    date: "November 5, 2024", 
    description: "Join us in progressing through the GenAI Study Jams!Let's meet-up and walk through the courses together. Got questions about Study Jams? This is the place to ask.We have competitions and rewards! Let's find out which one of you is the fastest!",
    image: "/Copy of GDG24 Signage Poster - Yellow (1).jpg",
    category: "Workshop",
    attendees: "100+",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india-presents-study-jams-session-1/"
  },

  {
    title: "Prompt Engineering",
    date: "March 13, 2025",
    description: "A dynamic AI challenge brought to you by Google Developer Groups (GDG) on Campus, KARE. Master the art of prompt engineering in this exciting two-round competition where participants will recreate AI-generated images and guide AI to create web pages following a specified design..",
    image: "Copy of GDG24 Signage Poster - Green (2).jpg",
    category: "Competition",
    attendees: "200+",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india-presents-prompt-engineering/"},
  {
    title: "G2 HACKFEST",
    date: "March 29, 2025",
    description: "G2HackFest is a 24-hour hackathon that brings together the brightest minds of Kalasalingam University to solve real-world problems. Participants will have the opportunity to learn from industry experts, network with like-minded individuals, and compete for grand prizes. With a prize pool of over Rs. 15,000. Join now to learn, grow, and win big.",
    image: "Copy of GDG24 Signage Poster - Blue (2).jpg",
    category: "Hackathon",
    attendees: "300+",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india-presents-g2hackfest/"
  },
    {
    title: "Google Solution Challenge",
    date: "February 22, 2025",
    description: "Next-Gen Legacy Modernization: GenAI, Kubernetes, and Google Cloud in Action explores how cutting-edge AI, containerization, and cloud-native solutions can transform legacy systems. This session will dive into leveraging GenAI for code refactoring, Kubernetes (GKE) for scalable modernization, and Google Cloud for seamless migration and optimization",
    image: "/Copy of GDG24 Signage Poster - Red.jpg",
    category: "Workshop",
    attendees: "150+",
    link: "https://gdg.community.dev/events/details/google-gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india-presents-next-gen-legacy-modernization-genai-kubernetes-and-google-cloud-in-action/"
  }


];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragging, setDragging] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  // Mouse drag handlers for desktop carousel
  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
    setDragging(true);
  };

  const handleMouseUp = (e) => {
    if (!dragging || dragStartX === null) return;
    const dragDistance = e.clientX - dragStartX;
    if (dragDistance > 50) {
      prevSlide();
    } else if (dragDistance < -50) {
      nextSlide();
    }
    setDragging(false);
    setDragStartX(null);
  };

  const handleMouseLeave = () => {
    setDragging(false);
    setDragStartX(null);
  };

  return (
  <div className="min-h-screen bg-white dark:bg-[#202124]">
      {/* Events Carousel Section */}
  <div className="py-16">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#4285F4] py-8">Past Events</h2>
          
          {/* Mobile/Tablet: Horizontal scroll (non-locking) */}
          <div className="lg:hidden relative">
            <div
              className="flex overflow-x-auto gap-4 md:gap-8 px-2 md:px-4 horizontal-scroll"
              style={{ 
                scrollSnapType: "x proximity",
                WebkitOverflowScrolling: "touch",
                overscrollBehaviorX: "auto",
                overscrollBehaviorY: "auto",
                touchAction: "pan-y"
              }}
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="min-w-[85vw] md:min-w-[80vw] snap-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-6 items-start">
                    <div className="w-full">
                      <div className="aspect-[4/5] relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full space-y-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                        <span className="bg-[#4285F4] text-white px-4 py-2 rounded-full font-medium text-sm">
                          {event.category}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">{event.description}</p>
                      <div className="flex items-center gap-6">
                        <span className="text-lg text-gray-900 dark:text-gray-200 font-medium">{event.date}</span>
                        <span className="text-lg text-gray-900 dark:text-gray-300">
                          <i className="fas fa-users mr-2"></i>
                          {event.attendees} Attended
                        </span>
                      </div>
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-4 px-6 py-2 bg-[#4285F4] hover:bg-[#3367D6] text-white rounded-full transition-all duration-300 flex items-center gap-2 text-lg font-medium w-fit"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Single event carousel with navigation and mouse drag */}
          <div className="hidden lg:block relative">
            <div
              className="overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: dragging ? 'grabbing' : 'grab' }}
            >
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {events.map((event, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <div className="flex gap-12 items-start max-w-6xl mx-auto">
                      <div className="w-1/2">
                        <div className="aspect-[3/4] relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 space-y-8">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-5xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                          <span className="bg-[#4285F4] text-white px-6 py-3 rounded-full font-medium text-lg w-fit">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">{event.description}</p>
                        <div className="flex items-center gap-8">
                          <span className="text-xl text-gray-900 dark:text-gray-200 font-medium">{event.date}</span>
                          <span className="text-xl text-gray-900 dark:text-gray-300">
                            <i className="fas fa-users mr-2"></i>
                            {event.attendees} Attended
                          </span>
                        </div>
                        <a 
                          href={event.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mt-6 px-8 py-3 bg-[#4285F4] hover:bg-[#3367D6] text-white rounded-full transition-all duration-300 flex items-center gap-3 text-lg font-medium w-fit"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#4285F4] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;