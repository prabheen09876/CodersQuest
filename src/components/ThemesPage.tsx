import React, { useEffect, useState } from 'react';
import themesBg from '../assets/themes-bg.png';

// --- Types ---
interface ThemeData {
  id: string;
  title: string;
  description: string;
  color: string;
  glowClass: string;
  iconPlaceholderColor: string;
}

// --- Data ---
const themes: ThemeData[] = [
  {
    id: 'blockchain',
    title: 'BLOCKCHAIN',
    description: 'Decentralize the future.',
    color: '#A020F0', // Purple
    glowClass: 'shadow-[0_0_20px_#A020F0]',
    iconPlaceholderColor: 'bg-purple-500',
  },
  {
    id: 'ai-ml',
    title: 'AI / ML / IOT',
    description: 'Intelligent creations.',
    color: '#00FFFF', // Cyan
    glowClass: 'shadow-[0_0_20px_#00FFFF]',
    iconPlaceholderColor: 'bg-cyan-400',
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    description: 'Fortify the digital world.',
    color: '#FF0000', // Red
    glowClass: 'shadow-[0_0_20px_#FF0000]',
    iconPlaceholderColor: 'bg-red-600',
  },
  {
    id: 'open-innovation',
    title: 'OPEN INNOVATION',
    description: 'Build anything imaginable.',
    color: '#FFD700', // Gold
    glowClass: 'shadow-[0_0_20px_#FFD700]',
    iconPlaceholderColor: 'bg-yellow-400',
  },
];

// --- Component ---
const ThemesPage: React.FC = () => {
  // Bubble generation for background animation
  const [bubbles, setBubbles] = useState<{ id: number; left: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const bubbleCount = 20;
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position %
      duration: 5 + Math.random() * 10, // Random duration 5-15s
      size: 10 + Math.random() * 20, // Random size 10-30px
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat font-minecraft text-white flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${themesBg})` }}
    >
      
      {/* --- Styles for Animations --- */}
      <style>{`
        @keyframes bubble-rise {
          0% { bottom: -10%; opacity: 0; transform: translateX(0); }
          50% { opacity: 0.6; }
          100% { bottom: 110%; opacity: 0; transform: translateX(20px); }
        }
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .bubble {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation-name: bubble-rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .theme-card-float {
          animation: gentle-float 4s ease-in-out infinite;
        }
        .pixel-text-shadow {
          text-shadow: 4px 4px 0 #000;
        }
      `}</style>

      {/* --- Background Elements --- */}
      {/* Overlay to darken bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      
      {/* Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.id * 0.5}s`,
          }}
        />
      ))}

      {/* Creature Silhouettes (CSS approximations) */}
      <div className="absolute top-20 left-10 w-32 h-12 bg-black/20 rounded-full blur-sm rotate-12 opacity-50 pointer-events-none" />
      <div className="absolute top-40 right-20 w-48 h-16 bg-black/20 rounded-full blur-sm -rotate-6 opacity-50 pointer-events-none" />


      {/* --- Main Content --- */}
      <div className="z-10 flex flex-col items-center w-full max-w-7xl">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-12 pixel-text-shadow tracking-widest text-center border-b-4 border-black/20 pb-4">
          HACKATHON THEMES
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4">
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              className={`
                theme-card-float
                relative flex flex-col items-center p-6
                bg-black/40 border-4 ${theme.glowClass}
                backdrop-blur-sm
                transition-transform duration-300 hover:scale-105
              `}
              style={{
                borderColor: theme.color,
                animationDelay: `${index * 0.5}s` // Stagger animations
              }}
            >
              {/* Card Header Top Block */}
              <div 
                className="absolute -top-4 w-12 h-8 border-4 border-b-0 bg-black"
                style={{ borderColor: theme.color, boxShadow: `0 -4px 10px ${theme.color}40` }}
              ></div>

              {/* Icon Placeholder */}
              <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                 {/* This represents the "pixel art" area */}
                 <div className={`w-24 h-24 ${theme.iconPlaceholderColor} opacity-80 animate-pulse`} style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}></div>
                 {/* Simple inner detail to make it look less generic */}
                 <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-4xl font-bold text-black/50 font-sans">?</span>
                 </div>
              </div>

              {/* Text Content */}
              <h2 
                className="text-xl md:text-2xl font-bold mb-2 text-center break-words hyphens-auto w-full"
                style={{ color: theme.color, textShadow: '2px 2px 0 #000' }}
              >
                {theme.title}
              </h2>
              
              <p className="text-sm md:text-base text-gray-200 text-center font-pixel tracking-wider">
                {theme.description}
              </p>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-white/50"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-white/50"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/50"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/50"></div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
};

export default ThemesPage;
