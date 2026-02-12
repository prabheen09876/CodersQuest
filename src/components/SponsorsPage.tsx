import React from 'react';
import obsidianTexture from '../assets/texture-obsidian.png';
import tiersBg from '../assets/tiers-bg.png';

// --- Types ---
// --- Types ---
interface SponsorData {
  id: string;
  name: string;
  tierDisplay: string;
  price: string;
  glowColor: string;
  borderColor: string;
  details: string[];
}

// --- Data ---
const sponsors: SponsorData[] = [
  // Tier 1: Title Sponsor
  {
    id: 'title',
    name: 'TITLE SPONSOR',
    tierDisplay: 'TITLE SPONSOR',
    price: '99,000 INR',
    glowColor: 'magenta',
    borderColor: 'border-fuchsia-500',
    details: ['Exclusive Keynote slot.', 'Dedicated naming rights.', 'Largest logo presence.']
  },
  // Tier 2: Co-Title
  {
    id: 'co-title',
    name: 'CO-TITLE SPONSOR',
    tierDisplay: 'CO-TITLE SPONSOR',
    price: '65,000 INR',
    glowColor: 'purple',
    borderColor: 'border-purple-600',
    details: ['Prominent logo placement.', 'Host a major workshop.', 'Branded swag opportunities.']
  },
  // Tier 3: Grid (Row 1)
  {
    id: 'plat-1',
    name: 'PLATINUM',
    tierDisplay: 'PLATINUM',
    price: '45,000 INR',
    glowColor: 'white',
    borderColor: 'border-gray-300',
    details: ['Project mentorship.', 'Direct access to candidate profiles.', 'Multiple social media shoutouts.']
  },
  {
    id: 'gold-1',
    name: 'GOLD',
    tierDisplay: 'GOLD',
    price: '25,000 INR',
    glowColor: 'gold',
    borderColor: 'border-yellow-500',
    details: ['Host a technical workshop.', 'Medium logo placement.', 'Participation in judging.']
  },
  // Tier 3: Grid (Row 2)
  {
    id: 'silver',
    name: 'SILVER',
    tierDisplay: 'SILVER',
    price: '10,000 INR',
    glowColor: 'silver',
    borderColor: 'border-slate-400',
    details: ['Targeted social media promotion.', 'Small logo placement.', 'Mentorship opportunities.']
  },
  {
    id: 'bronze',
    name: 'BRONZE',
    tierDisplay: 'BRONZE',
    price: '5,000 INR',
    glowColor: 'bronze',
    borderColor: 'border-orange-600',
    details: ['Recognition on Community Board.', 'Logo inclusion on sponsors page.', 'Provide minor challenge prizes.']
  },
];

// --- Sub-Components ---

const NeonCard: React.FC<{
  data: SponsorData;
  className?: string;
  size?: 'lg' | 'md' | 'sm';
}> = ({ data, className = '', size = 'sm' }) => {
  const sizeClasses = {
    lg: 'w-80 h-40 md:w-96 md:h-56 text-2xl',
    md: 'w-64 h-32 text-xl',
    sm: 'w-full h-32 md:h-40 text-sm md:text-base',
  };

  const glowStyles: Record<string, string> = {
    magenta: 'shadow-[0_0_20px_#ff00ff,inset_0_0_10px_#ff00ff]',
    purple: 'shadow-[0_0_15px_#9333ea,inset_0_0_5px_#9333ea]',
    white: 'shadow-[0_0_10px_#ffffff,inset_0_0_2px_#ffffff]',
    gold: 'shadow-[0_0_10px_#ffd700,inset_0_0_2px_#ffd700]',
    silver: 'shadow-[0_0_10px_#c0c0c0,inset_0_0_2px_#c0c0c0]',
    bronze: 'shadow-[0_0_10px_#cd7f32,inset_0_0_2px_#cd7f32]',
  };

  return (
    <div
      className={`
        group perspective-[1000px] cursor-pointer
        ${sizeClasses[size]}
        ${className}
        transition-transform hover:scale-105 duration-300
      `}
    >
      <div className="relative w-full h-full text-center transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* --- FRONT FACE --- */}
        <div className={`
            absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center 
            bg-black/90 border-4 backdrop-blur-sm
            ${data.borderColor} ${glowStyles[data.glowColor]}
        `}>
          <div className="font-bold font-minecraft mb-2 tracking-widest uppercase">{data.tierDisplay}</div>
          <div className="font-pixel text-yellow-300 tracking-wide text-lg">{data.price}</div>

          {/* Corner Accents */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-white opacity-50"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-white opacity-50"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-white opacity-50"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white opacity-50"></div>
        </div>

        {/* --- BACK FACE --- */}
        <div className={`
            absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4
            bg-gray-900 border-4
            ${data.borderColor} ${glowStyles[data.glowColor]}
        `}>
          <ul className="text-left text-xs md:text-sm text-gray-200 space-y-2 list-disc pl-4 font-mono w-full">
            {/* Random details if empty, or just the provided ones */}
            {data.details.length > 0 ? data.details.map((detail, idx) => (
              <li key={idx} className="leading-tight">{detail}</li>
            )) : (
              <>
                <li>Benefit 1: Brand visibility</li>
                <li>Benefit 2: Networking access</li>
                <li>Benefit 3: Logo placement</li>
              </>
            )}
          </ul>
        </div>

      </div>

      {/* --- Contact Overlay --- */}

    </div>
  );
};

const SponsorsPage: React.FC = () => {
  const titleSponsor = sponsors[0];
  const coTitleSponsor = sponsors[1];
  const gridSponsors = sponsors.slice(2);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-auto font-minecraft text-white perspective-1000"
      style={{ backgroundImage: `url(${tiersBg})` }}
    >

      {/* --- Animation Styles --- */}
      <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes crystal-spin {
            0% { transform: rotateY(0deg) rotateX(45deg); }
            100% { transform: rotateY(360deg) rotateX(45deg); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-crystal { animation: crystal-spin 10s linear infinite; }
          .perspective-1000 { perspective: 1000px; }
        `}</style>

      {/* --- Background Environment --- */}
      <div className="fixed inset-0 bg-black/40 -z-20"></div> {/* Dark overlay for readability if needed */}

      {/* --- Main Content --- */}
      <div className="relative z-10 flex flex-col items-center pt-10 pb-20 w-full max-w-6xl mx-auto px-3 sm:px-4">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-10 sm:mb-16 tracking-widest text-center"
          style={{ textShadow: '4px 4px 0 #000' }}>
          SPONSOR TIERS
        </h1>

        {/* --- Level 1: END CRYSTAL + TITLE SPONSOR --- */}
        <div className="relative mb-12 sm:mb-24 flex flex-col items-center animate-float">
          {/* Crystal Effect */}
          <div className="relative w-20 h-20 mb-12">
            <div className="absolute inset-0 bg-fuchsia-500/50 blur-xl animate-pulse"></div>
            {/* Inner Crystal Cube */}
            <div className="w-16 h-16 bg-fuchsia-300 border-4 border-white transform rotate-45 shadow-[0_0_30px_#ff00ff] animate-crystal mx-auto">
              <div className="w-full h-full bg-fuchsia-600 opacity-50"></div>
            </div>
            {/* Beam */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-[500px] -mt-[500px] bg-gradient-to-t from-fuchsia-500/80 to-transparent"></div>
          </div>

          <NeonCard data={titleSponsor} size="lg" />
        </div>

        {/* --- Level 2: PEDESTAL + CO-TITLE SPONSOR --- */}
        <div className="relative mb-12 sm:mb-24 flex flex-col items-center w-full">
          <NeonCard data={coTitleSponsor} size="md" className="z-20 mb-[-2rem]" />

          {/* Bedrock/Obsidian Pedestal */}
          <div className="w-48 h-16 bg-[#1a1a1a] border-4 border-black relative z-10"
            style={{ backgroundImage: `url(${obsidianTexture})`, backgroundSize: '32px' }}>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        {/* --- Level 3: GRID (Platinum, Gold, Silver, Bronze) --- */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
          {gridSponsors.map((tier) => (
            <NeonCard key={tier.id} data={tier} size="sm" className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]" />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SponsorsPage;
