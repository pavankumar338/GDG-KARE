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
      className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-all duration-200"
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
  return (
    <div 
      className="relative w-full max-w-sm mx-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div 
        className="relative p-6 rounded-3xl shadow-xl transition-transform duration-300 bg-white dark:bg-gray-800 h-[350px] flex flex-col border-2 border-black"
      >
        {/* Card content */}
        <div className="relative text-center flex flex-col flex-1">
          {/* Round Image with Light Black Background */}
          <div className="relative mb-4">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg" style={{ backgroundColor: '#2a2a2a' }}>
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{ backgroundColor: '#2a2a2a' }}
                >
                  {getInitials(member.name)}
                </div>
              )}
            </div>
          </div>

          {/* Name */}
          <div className="mb-2 flex-1 flex items-center justify-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center leading-tight">
              {member.name}
            </h3>
          </div>

          {/* Role */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-[#4285F4] text-white text-sm font-medium rounded-full">
              {member.role}
            </span>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-3 mt-auto">
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin === '#' ? '#' : member.socials.linkedin}
                target={member.socials.linkedin === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center hover:bg-[#005885] transition-colors duration-200"
                onClick={member.socials.linkedin === '#' ? (e) => e.preventDefault() : undefined}
              >
                <Linkedin size={16} className="text-white" />
              </a>
            )}
            {member.socials?.github && (
              <a
                href={member.socials.github === '#' ? '#' : member.socials.github}
                target={member.socials.github === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#24292e] transition-colors duration-200"
                onClick={member.socials.github === '#' ? (e) => e.preventDefault() : undefined}
              >
                <Github size={16} className="text-white" />
              </a>
            )}
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
        <div className="flex flex-wrap justify-center gap-8">
          {organizers.map((member, index) => (
            <div key={index} className="w-full max-w-[320px] sm:w-[320px]">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Team Members */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {otherMembers.map((member, index) => (
            <div key={index} className="w-full max-w-[320px]">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Coordinators Section */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold mb-12 text-center text-[#4285F4]">Our Coordinators</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {coordinators.map((member, index) => (
            <div key={index} className="w-full max-w-[320px] sm:w-[320px]">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default TeamSection;