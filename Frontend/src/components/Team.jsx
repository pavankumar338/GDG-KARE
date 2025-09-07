import React, { useState } from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

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
      border1: '#4285f4'       // Core Blue for card
    }
  },
  {
    name: "Pavan Kumar",
    role: "Co-organizer",
    image: "Copy of GDG-Professionals-Social-PhotoFrame-Blue.jpg",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#ea4335'       // Core Red for card
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
      border1: '#f9ab00'       // Core Yellow for card
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
      border1: '#34a853',       // Core Green for background
      roleLabel: '#ffffff',     // White for text
      nameLabel: '#ffffff'      // White for text
    }
  },
  {
    name: "Arunkumar S",
    role: "Web Developer",
    image: "arunkumar_s_NpHXYnv.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#4285f4'       // Core Blue for card
    }
  },
  {
    name: "Suresh Kumar G",
    role: "Web Developer",
    image: "suresh_kumar_g_7C1LCFI.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#ea4335'       // Core Red for card
    }
  },
  {
    name: "Manoj Hariharan R",
    role: "Android Development Lead",
    image: "manoj_hariharan_r_xUNY62k.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#4285f4'       // Core Blue for card
    }
  },
  {
    name: "DHATSHINAMOORTHY R",
    role: "Android Developer",
    image: "dhatshinamoorthy_r.webp",
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
    image: "sravanthi_u_T4DNmp9.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#4285f4'       // Core Blue for card
    }
  },
  {
    name: "NAVEEN S",
    role: "Machine Learning Lead",
    image: "naveen_s.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#ea4335'       // Core Red for card
    }
  },
  {
    name: "Hitesh Kumar Kothapalli",
    role: "DevOps Lead",
    image: "hitesh_kumar_kothapalli.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#f9ab00'       // Core Yellow for card
    }
  },
  {
    name: "Barnes Samuel",
    role: "Media Team",
    image: "barnes_samuel.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      border1: '#34a853'       // Core Green for card
    }
  },
  {
    name: "Bharathi Ankamreddy",
    role: "Social Media Lead",
    image: "bharathi_ankamreddy.webp",
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
    image: "divya_sri_digamarthi.webp",
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
    image: "gubba_v_sesha_sai_krishna_vineeth.webp",
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
    image: "poojith_reddy_menthem_4pB2x3v.webp",
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
    image: "balaji_.n_bzhKrFH.webp",
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
  const [isHovered, setIsHovered] = useState(false);
  
  const gdgColors = {
    // Core Colors
    blue: '#4285f4',
    green: '#34a853',
    yellow: '#f9ab00',
    red: '#ea4335',
    
    // Halftones
    blueHalf: '#57caff',
    greenHalf: '#5cdb6d',
    yellowHalf: '#ffd427',
    redHalf: '#ff7daf',
    
    // Pastels
    bluePastel: '#c3ecf6',
    greenPastel: '#ccf6c5',
    yellowPastel: '#ffe7a5',
    redPastel: '#f8d8d8',
    
    // Grayscale
    offWhite: '#f0f0f0',
    black: '#1e1e1e',

    // Selected/Hover state background
    selectedBg: '#1e1e1e' // Using black02 for selected state
  };

  // Safely access colors, providing an empty object as fallback if member.colors is null or undefined
  const memberColors = member.colors || {};

  // Use single color for background and white for text
  const backgroundColor = memberColors.border1 || gdgColors.blue;
  const textColor = '#ffffff';
  const socialIconBg = backgroundColor;

  return (
    <div 
      className="relative w-full max-w-sm mx-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div 
        className="relative p-8 rounded-3xl shadow-xl transition-transform duration-300" 
        style={{ 
          backgroundColor: backgroundColor,
          color: '#fff'
        }}
      >
        {/* Card content */}
        <div className="relative">
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
                  backgroundColor: backgroundColor
                }}
              >
                {getInitials(member.name)}
              </div>
            )}
            {/* Role Label */}
            <div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap bg-white text-black"
            >
              {member.role}
            </div>
          </div>

          {/* Name Label */}
          <div className="mt-8 text-center relative z-10">
             <div
               className="inline-block px-4 py-2 text-lg font-bold whitespace-nowrap text-white"
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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-[#4285F4]">Meet Our Team</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Meet our passionate team of organizers dedicated to building and nurturing the Google Developer Group in Kare.
        </p>
      </div>
      
      {/* Organizers Section */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Organizers</h3>
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:flex-wrap md:justify-center md:gap-16">
          {organizers.map((member, index) => (
            <div key={index} className="w-full max-w-[320px] md:w-auto">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Team Members */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Team</h3>
        <div className="relative h-[400px] w-full overflow-hidden">
          <div className="absolute whitespace-nowrap animate-moveRight flex items-center gap-16">
            {[...otherMembers, ...otherMembers, ...otherMembers].map((member, index) => (
              <div key={index} className="flex-none w-80 transition-all duration-300 hover:scale-110">
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coordinators Section */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Coordinators</h3>
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:flex-wrap md:justify-center md:gap-16">
          {coordinators.map((member, index) => (
            <div key={index} className="w-full max-w-[320px] md:w-auto">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
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