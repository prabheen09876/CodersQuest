import React from 'react';
import { useNavigate } from 'react-router-dom';
import MinecraftButton from './MinecraftButton';
import obsidianTexture from '../assets/texture-obsidian.png';
import beaconTexture from '../assets/texture-beacon.png';
import netheriteTexture from '../assets/texture-netherite.png';
import logoPlaceholder from '../assets/logo-placeholder.png';
import logoTitleSponsor from '../assets/logo-title-sponsor.svg';

const LegendarySponsors = () => {
  const navigate = useNavigate();
  const sponsors = {
    title: 'Acme Corp',
    coTitle: ['ThinkBig', 'Data Corp', 'Pixel Foods', 'StartUp Hub']
  };

  return (
    <section className="relative w-full py-16 border-y-4 border-[#585858] overflow-hidden">
      {/* Background - Obsidian (Larger Texture) */}
      <div className="absolute inset-0 z-0" 
           style={{ backgroundImage: `url(${obsidianTexture})`, backgroundSize: '128px' }} />
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="inline-block bg-[#AA0000] border-2 border-[#550000] px-10 py-3 mb-12 transform -rotate-1 shadow-2xl">
          <h3 className="text-[#FFAA00] font-minecraft text-3xl tracking-widest uppercase drop-shadow-md">
            Legendary Sponsors
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full">
          {/* Title Sponsor - Beacon */}
          <div className="flex flex-col items-center group relative">
            <div className="relative w-64 h-64 flex items-center justify-center mb-4">
              {/* Beacon Beam Effect */}
              <div className="absolute bottom-0 w-40 h-[800px] bg-white/20 blur-2xl animate-pulse" 
                   style={{ transform: 'translateY(-50%)' }} />
              
              <div className="relative w-56 h-56 image-pixelated z-10 animate-float flex items-center justify-center"
                   style={{ backgroundImage: `url(${beaconTexture})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <img src={logoTitleSponsor} alt={sponsors.title} className="w-1/2 h-1/2 object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
            <div className="text-[#55FFFF] font-minecraft text-xl mt-2 tracking-wide">TITLE SPONSOR</div>
            
            {/* Tooltip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#100C1C] border-2 border-[#3C3D42] text-white text-sm font-minecraft py-1 px-3 pointer-events-none whitespace-nowrap z-20">
              <div className="text-[#55FFFF] mb-0.5">Title Sponsor</div>
              <div className="text-[#AAAAAA] italic">{sponsors.title}</div>
            </div>
          </div>

          {/* Co-Title Sponsors - Netherite */}
          <div className="flex flex-col items-center">
            <h4 className="text-[#AAAAAA] font-minecraft mb-8 text-xl">CO-TITLE SPONSORS</h4>
            <div className="grid grid-cols-2 gap-8">
              {sponsors.coTitle.map((name, i) => (
                <div key={i} className="group relative">
                  <div className="w-32 h-32 image-pixelated border-4 border-[#3C3D42] shadow-xl transition-transform hover:scale-105 flex items-center justify-center"
                       style={{ backgroundImage: `url(${netheriteTexture})`, backgroundSize: 'contain' }}>
                    <img src={logoPlaceholder} alt={name} className="w-2/3 h-2/3 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#100C1C] border-2 border-[#3C3D42] text-white text-xs font-minecraft py-1 px-2 pointer-events-none whitespace-nowrap z-20">
                    <div className="text-[#AAAAAA] mb-0.5">Co-Title Sponsor</div>
                    <div className="text-[#AAAAAA] italic">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 flex justify-center">
            <MinecraftButton 
                variant="diamond" 
                className="text-lg px-8 py-3 border-4 animate-pulse hover:animate-none"
                onClick={() => navigate('/sponsor-tiers')}
            >
                WANNA SPONSOR US?
            </MinecraftButton>
        </div>
      </div>
    </section>
  );
};

export default LegendarySponsors;
