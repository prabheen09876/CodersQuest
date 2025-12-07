import React, { useState } from 'react';
import bgSponsors from '../assets/bg-sponsors.png';

interface SponsorTierData {
  id: string;
  name: string;
  icon: 'goldEgg' | 'diamondPick' | 'chest' | 'ironPick' | 'goldIngot' | 'diamondSword' | 'oakPlanks';
  shortDescription: string;
  details: string[];
  baseColor: string;
}

const tiers: SponsorTierData[] = [
  { id: 'title', name: 'TITLE SPONSOR', icon: 'goldEgg', shortDescription: 'Forges new worlds. Top-tier branding.', details: ['Exclusive Keynote slot.', 'Dedicated naming rights.', 'Largest logo presence.'], baseColor: 'border-yellow-400' },
  { id: 'co-title', name: 'CO-TITLE SPONSOR', icon: 'diamondPick', shortDescription: 'Menolint materials.', details: ['Prominent logo placement.', 'Host a major workshop.', 'Branded swag opportunities.'], baseColor: 'border-cyan-400' },
  { id: 'platinum', name: 'PLATINUM SPONSOR', icon: 'ironPick', shortDescription: 'Refines projects placement, materials, shoutouts.', details: ['Project mentorship.', 'Direct access to candidate profiles.', 'Multiple social media shoutouts.'], baseColor: 'border-indigo-400' },
  { id: 'gold', name: 'GOLD SPONSOR', icon: 'goldIngot', shortDescription: 'Promthop hosting. Workshop hosting.', details: ['Host a technical workshop.', 'Medium logo placement.', 'Participation in judging.'], baseColor: 'border-orange-400' },
  { id: 'silver', name: 'SILVER SPONSOR', icon: 'diamondSword', shortDescription: 'Defends innovation. Social media boosts', details: ['Targeted social media promotion.', 'Small logo placement.', 'Mentorship opportunities.'], baseColor: 'border-gray-400' },
  { id: 'bronze', name: 'BRONZE SPONSOR', icon: 'oakPlanks', shortDescription: 'Apprentice builders. Community board', details: ['Recognition on Community Board.', 'Logo inclusion on sponsors page.', 'Provide minor challenge prizes.'], baseColor: 'border-red-400' },
];

const getIconComponent = (icon: SponsorTierData['icon']) => {
  const iconStyles: Record<string, string> = {
    goldEgg: 'bg-yellow-300',
    diamondPick: 'bg-cyan-400',
    chest: 'bg-orange-700',
    ironPick: 'bg-gray-300',
    goldIngot: 'bg-yellow-500',
    diamondSword: 'bg-cyan-600',
    oakPlanks: 'bg-amber-700',
  };

  return (
    <div 
      className={`w-12 h-12 flex-shrink-0 ${iconStyles[icon]} border-2 border-black mr-4`}
      style={{ imageRendering: 'pixelated' }}
      title={icon}
    >
      <div className="w-full h-full opacity-50 bg-black/20 flex items-center justify-center text-[10px] text-white font-mono">
        {icon.substring(0, 2).toUpperCase()}
      </div>
    </div>
  );
};

const ListTierItem: React.FC<{ tier: SponsorTierData; isSpecial?: boolean }> = ({ tier, isSpecial }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        relative bg-gray-800 p-4 border-2 flex flex-col transition-all duration-300 cursor-pointer
        shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]
        hover:translate-x-[4px] hover:border-cyan-500 hover:bg-gray-750
        ${tier.baseColor}
        ${isSpecial ? 'mb-2' : 'mb-4'}
      `}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center text-left">
        {getIconComponent(tier.icon)}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-white font-mono tracking-wider">
            {tier.name}
          </h3>
          <p className="text-gray-400 text-xs font-pixel">
            {tier.shortDescription}
          </p>
        </div>
        {/* Hover indicator arrow or similar could go here */}
      </div>

       {/* Expandable Details */}
       <div 
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-gray-600 pt-2 mt-3 ml-16">
          <ul className="text-left text-xs text-gray-300 space-y-1 list-disc pl-4 font-mono">
            {tier.details.map((detail, idx) => (
              <li key={idx} className="leading-tight">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SponsorTiers: React.FC = () => {
  const specialTiers = tiers.slice(0, 2);
  const regularTiers = tiers.slice(2);

  return (
    <section 
      className="relative w-full py-16 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgSponsors})` }}
    >
      <div className="w-full max-w-7xl mx-auto pointer-events-auto">
        <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase mb-2"
            style={{ textShadow: '2px 2px 0px #000' }}>
          SPONSOR TIERS
        </h2>
        </div>

        <div className="flex flex-col space-y-4">
        {/* Special Partners Container */}
        <div className="border-4 border-cyan-500 bg-gray-900/80 p-1 rounded-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <div className="bg-gray-800/50 p-2 mb-2 text-center border-b-2 border-cyan-500/30">
             <h3 className="text-xl font-bold text-cyan-400 tracking-widest uppercase" 
                 style={{ textShadow: '0 0 5px rgba(6,182,212,0.5)' }}>
               SPECIAL PARTNERS
             </h3>
          </div>
          <div className="space-y-2 p-2">
            {specialTiers.map((tier) => (
              <ListTierItem key={tier.id} tier={tier} isSpecial={true} />
            ))}
          </div>
        </div>

        {/* Regular Tiers */}
        <div className="space-y-2 pt-4">
          {regularTiers.map((tier) => (
            <ListTierItem key={tier.id} tier={tier} isSpecial={false} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default SponsorTiers;
