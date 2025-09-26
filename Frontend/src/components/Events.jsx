import { motion } from "framer-motion";
import { useState } from "react";

const events = [
    {
    title: "Agent-Speak",
    date: "August 15, 2025",
    description: "Join us for an exciting innovation showcase and tech exhibition. This event brought together developers, innovators, and tech enthusiasts to explore cutting-edge technologies and showcase their creative projects.",
    image: " Copy of GDG24 Signage Poster - Red (1).jpg",
    category: "Workshop",
    attendees: "150+"
  },
     {
    title: "Basics of Github",
    date: "August 15, 2025",
    description: "Join us for an exciting innovation showcase and tech exhibition. This event brought together developers, innovators, and tech enthusiasts to explore cutting-edge technologies and showcase their creative projects.",
    image: " Copy of GDG24 Signage Poster - Green (1).jpg",
    category: "Workshop",
    attendees: "150+"
  },
  {
    title: "Inventia",
    date: "November 7, 2024",
    description: "Join us for an exciting innovation showcase and tech exhibition. This event brought together developers, innovators, and tech enthusiasts to explore cutting-edge technologies and showcase their creative projects.",
    image: "/Copy of GDG24 Signage Poster - Blue.jpg",
    category: "Innovation",
    attendees: "150+"
  },
  {
    title: "Study Jams Session - 1",
    date: "November 6, 2024", 
    description: "Workshop / Study Group session focusing on hands-on learning and collaboration. Participants engaged in interactive coding sessions and collaborative problem-solving exercises.",
    image: "/Copy of GDG24 Signage Poster - Yellow (1).jpg",
    category: "Workshop",
    attendees: "80+"
  },

  {
    title: "Prompt Engineering",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence. Explore the latest AI tools and frameworks, and learn how to integrate AI capabilities into your projects.",
    image: "Copy of GDG24 Signage Poster - Green (2).jpg",
    category: "AI Workshop",
    attendees: "200+"
  },
  {
    title: "G2 HACKFEST",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence. Explore the latest AI tools and frameworks, and learn how to integrate AI capabilities into your projects.",
    image: "Copy of GDG24 Signage Poster - Blue (2).jpg",
    category: "Hackathon",
    attendees: "200+"
  },
    {
    title: "Google Solution Challenge",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence. Explore the latest AI tools and frameworks, and learn how to integrate AI capabilities into your projects.",
    image: "/Copy of GDG24 Signage Poster - Red.jpg",
    category: "Workshop",
    attendees: "200+"
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
          
          {/* Mobile/Tablet: Horizontal scroll */}
          <div className="lg:hidden relative">
            <div
              className="flex overflow-x-auto scrollbar-hide gap-8 px-4 horizontal-scroll"
              style={{ 
                scrollSnapType: "x mandatory", 
                WebkitOverflowScrolling: "touch",
                overscrollBehaviorX: "contain"
              }}
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="min-w-[90vw] md:min-w-[80vw] snap-center"
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
                        <span className="text-lg text-gray-900 dark:text-red-400 font-medium">{event.date}</span>
                        <span className="text-lg text-gray-900 dark:text-green-400">
                          <i className="fas fa-users mr-2"></i>
                          {event.attendees} Attended
                        </span>
                      </div>
                      <a 
                        href="https://gdg.community.dev/gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india/" 
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
                          <span className="text-xl text-gray-900 dark:text-red-400 font-medium">{event.date}</span>
                          <span className="text-xl text-gray-900 dark:text-green-400">
                            <i className="fas fa-users mr-2"></i>
                            {event.attendees} Attended
                          </span>
                        </div>
                        <a 
                          href="https://gdg.community.dev/gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india/" 
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