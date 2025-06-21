import React from 'react';
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
      background: '#4285F4', // Blue
      border1: '#EA4335',    // Red
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#4285F4'   // Blue
    }
  },
  {
    name: "Thanuja Thulasi",
    role: "Co-organizer",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/thanuja_thulasi.jpeg",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#EA4335', // Red
      border1: '#FBBC04',    // Yellow
      border2: '#34A853',    // Green
      roleLabel: '#34A853',  // Green
      nameLabel: '#EA4335'   // Red
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
      background: '#FBBC04', // Yellow
      border1: '#34A853',    // Green
      border2: '#4285F4',    // Blue
      roleLabel: '#4285F4',  // Blue
      nameLabel: '#FBBC04'   // Yellow
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
      background: '#34A853', // Green
      border1: '#4285F4',   // Blue
      border2: '#EA4335',    // Red
      roleLabel: '#EA4335',  // Red
      nameLabel: '#34A853'   // Green
    }
  },
  {
    name: "Arunkumar S",
    role: "Web Developer",
    image: "public/arunkumar_s_NpHXYnv.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#4285F4', // Blue
      border1: '#34A853',    // Green
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#EA4335'   // Red
    }
  },
  {
    name: "Suresh Kumar G",
    role: "Web Developer",
    image: "public/suresh_kumar_g_7C1LCFI.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#EA4335', // Red
      border1: '#4285F4',    // Blue
      border2: '#34A853',    // Green
      roleLabel: '#34A853',  // Green
      nameLabel: '#FBBC04'   // Yellow
    }
  },
  {
    name: "Manoj Hariharan R",
    role: "Android Development Lead",
    image: "public/manoj_hariharan_r_xUNY62k.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#FBBC04', // Yellow
      border1: '#EA4335',    // Red
      border2: '#4285F4',    // Blue
      roleLabel: '#4285F4',  // Blue
      nameLabel: '#34A853'   // Green
    }
  },
  {
    name: "DHATSHINAMOORTHY R",
    role: "Android Developer",
    image: "public/dhatshinamoorthy_r.webp",
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
    image: "public/sravanthi_u_T4DNmp9.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#4285F4', // Blue
      border1: '#EA4335',    // Red
      border2: '#FBBC04',    // Yellow
      roleLabel: '#FBBC04',  // Yellow
      nameLabel: '#34A853'   // Green
    }
  },
  {
    name: "NAVEEN S",
    role: "Machine Learning Lead",
    image: "public/naveen_s.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#EA4335', // Red
      border1: '#34A853',    // Green
      border2: '#4285F4',    // Blue
      roleLabel: '#4285F4',  // Blue
      nameLabel: '#FBBC04'   // Yellow
    }
  },
  {
    name: "Hitesh Kumar Kothapalli",
    role: "DevOps Lead",
    image: "public/hitesh_kumar_kothapalli.webp",
    socials: {
      linkedin: "#",
      github: "#"
    },
    colors: {
      background: '#FBBC04', // Yellow
      border1: '#4285F4',    // Blue
      border2: '#34A853',    // Green
      roleLabel: '#34A853',  // Green
      nameLabel: '#EA4335'   // Red
    }
  },
  {
    name: "Barnes Samuel",
    role: "Media Team",
    image: "public/barnes_samuel.webp",
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
    name: "Bharathi Ankamreddy",
    role: "Social Media Lead",
    image: "public/bharathi_ankamreddy.webp",
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
    image: "public/divya_sri_digamarthi.webp",
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
    image: "public/gubba_v_sesha_sai_krishna_vineeth.webp",
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
    image: "public/poojith_reddy_menthem_4pB2x3v.webp",
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
    image: "public/balaji_.n_bzhKrFH.webp",
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
  const gdgColors = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC04',
    green: '#34A853',
    darkGrey: '#202124' // Google Dark Grey for social icons background
  };

  // Safely access colors, providing an empty object as fallback if member.colors is null or undefined
  const memberColors = member.colors || {};

  // Provide default colors for each property if they are missing
  // Using slightly adjusted opacities based on visual analysis of the image
  const backgroundColor = memberColors.background || gdgColors.blue + '15'; // Slightly more opaque
  const border1Color = memberColors.border1 || gdgColors.red + '25'; // Slightly more opaque
  const border2Color = memberColors.border2 || gdgColors.green + '25'; // Slightly more opaque
  const roleLabelColor = memberColors.roleLabel || gdgColors.yellow + 'F2'; // ~95% opacity
  const nameLabelColor = memberColors.nameLabel || gdgColors.blue + 'E6'; // ~90% opacity
  const socialIconBg = gdgColors.darkGrey;

  const placeholderColor = nameLabelColor; // Use nameLabelColor for placeholder background

  return (
    <div className="relative w-full max-w-sm mx-auto transform transition-all duration-300 hover:-translate-y-2">
      <div 
        className="relative p-6 rounded-3xl shadow-xl" // Increased shadow for main card
        style={{ backgroundColor: backgroundColor }}
      >
        {/* Stacked background layers */}
        <div 
          className="absolute inset-0 -rotate-6 rounded-3xl shadow-lg" // Maintained shadow for layers
          style={{ backgroundColor: border1Color, zIndex: -2 }}
        />
        <div 
          className="absolute inset-0 rotate-3 rounded-3xl shadow-lg" // Maintained shadow for layers
          style={{ backgroundColor: border2Color, zIndex: -1 }}
        />
        
        {/* Card content */}
        <div className="relative z-10">
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
                  backgroundColor: placeholderColor
                }}
              >
                {getInitials(member.name)}
              </div>
            )}
            {/* Role Label */}
            <div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-md text-sm font-semibold text-gray-800 whitespace-nowrap"
              style={{ backgroundColor: roleLabelColor }}
            >
              {member.role}
            </div>
          </div>

          {/* Name Label */}
          <div className="mt-8 text-center relative z-10">
             <div
               className="inline-block px-4 py-2 rounded-full shadow-md text-lg font-bold whitespace-nowrap"
               style={{ backgroundColor: nameLabelColor }}
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
        <div className="flex justify-center gap-16">
          {organizers.map((member, index) => (
            <div key={index} className="flex-none w-80">
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
        <div className="flex justify-center gap-16">
          {coordinators.map((member, index) => (
            <div key={index} className="flex-none w-80">
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