import { motion } from "framer-motion";
import { useState } from "react";

const events = [
  {
    title: "Inventia",
    date: "November 7, 2024",
    description: "Join us for an exciting innovation showcase and tech exhibition. This event brought together developers, innovators, and tech enthusiasts to explore cutting-edge technologies and showcase their creative projects.",
    image: "/Copy of GDG24 Signage Poster - Blue.jpg",
    category: "Innovation",
    attendees: "150+"
    
  },
  {
    title: "Study Jams Session - 2",
    date: "November 6, 2024", 
    description: "Workshop / Study Group session focusing on hands-on learning and collaboration. Participants engaged in interactive coding sessions and collaborative problem-solving exercises.",
    image: "/Picture1.jpg",
    category: "Workshop",
    attendees: "80+"
  },
  {
    title: "Study Jams Session - 1", 
    date: "November 5, 2024",
    description: "Workshop / Study Group kickoff session for interactive learning. The first in our series of collaborative learning sessions designed for developers of all skill levels.",
    image: "/Picture2.jpg",
    category: "Study Group",
    attendees: "100+"
  },
  {
    title: "Build with AI",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence. Explore the latest AI tools and frameworks, and learn how to integrate AI capabilities into your projects.",
    image: "/Picture3.jpg",
    category: "AI Workshop",
    attendees: "200+"
  },
  {
    title: "G2 HACKFEST",
    date: "November 4, 2024",
    description: "Info session on building applications with Artificial Intelligence. Explore the latest AI tools and frameworks, and learn how to integrate AI capabilities into your projects.",
    image: "/Picture4.jpg",
    category: "Hackathon",
    attendees: "200+"
  }
];

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      {/* Events Carousel Section */}
      <div className="bg-white dark:bg-[#1A1A1A] py-16">
        <div className="w-full max-w-[1440px] mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-black dark:text-gray-100 py-8">Past Events</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    className="min-w-full px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col lg:flex-row gap-8 items-start max-w-[1440px] mx-auto">
                      <div className="w-full lg:w-1/2">
                        <div className="aspect-[4/5] relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 px-6 space-y-8">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                          <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{event.title}</h3>
                          <span className="bg-[#1E88E5] text-white px-4 py-2 rounded-full font-medium text-lg">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{event.description}</p>
                        <div className="flex items-center gap-6">
                          <span className="text-xl text-gray-900 dark:text-gray-100 font-medium">{event.date}</span>
                          <span className="text-xl text-gray-900 dark:text-gray-100">
                            <i className="fas fa-users mr-2"></i>
                            {event.attendees} Attended
                          </span>
                        </div>
                        {/* Read More Button */}
                        <a 
                          href="https://gdg.community.dev/gdg-on-campus-kalasalingam-academy-of-research-education-krishnankoil-india/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mt-4 px-6 py-2 bg-[#1E88E5] hover:bg-[#1976D2] text-white rounded-full transition-all duration-300 flex items-center gap-2 text-lg font-medium w-fit"
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
            
            {/* Carousel Controls */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              onClick={prevSlide}
            >
              <svg className="w-8 h-8 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              onClick={nextSlide}
            >
              <svg className="w-8 h-8 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[#1E88E5] w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
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
