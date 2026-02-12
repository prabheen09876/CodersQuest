import diamondTexture from '../assets/texture-diamond.png';
import goldTexture from '../assets/texture-gold.png';
import ironTexture from '../assets/texture-iron.png';
import stoneTexture from '../assets/texture-stone.png';
import logoPlaceholder from '../assets/logo-placeholder.png';
import bgSponsors from '../assets/bg-sponsors.png';

const SponsorBlock = ({ tier, name, size = 'md' }: { tier: string, name: string, size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <div className="flex flex-col items-center group relative">
      <div
        className={`${sizeClasses[size]} relative flex items-center justify-center image-pixelated border-4 border-black/20 bg-black/40 shadow-lg transition-transform hover:scale-105`}
      >
        <img src={logoPlaceholder} alt={name} className="w-3/4 h-3/4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#100C1C] border-2 border-[#3C3D42] text-white text-xs font-minecraft py-1 px-2 pointer-events-none whitespace-nowrap z-20">
          <div className="text-[#AA00AA] mb-0.5">{tier} Sponsor</div>
          <div className="text-[#AAAAAA] italic">{name}</div>
        </div>
      </div>
    </div>
  );
};


import AddSponsorBlock from './AddSponsorBlock';

const SponsorsSection = () => {
  const sponsors = {
    platinum: ['Cloud Ideas', 'Pixel Corp'],
    gold: ['Golden Foods', 'Au Tech', 'Shiny Inc'],
    silver: ['Ag Systems', 'Iron Works', 'Metal Co', 'Steel Ltd'],
    bronze: ['Stone Age', 'Rock Solid', 'Boulder Inc', 'Pebble Sys', 'Gravel Tech']
  };

  return (
    <section
      className="relative overflow-hidden py-10 sm:py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgSponsors})` }}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-4xl font-minecraft text-center text-white mb-10 sm:mb-16 drop-shadow-lg">
          <span className="text-[#FFFF55]">OUR</span> <span className="text-white">SPONSORS</span>
        </h2>

        {/* Grid Layout: 4 Tiers */}
        <div className="flex flex-wrap justify-center gap-8">

          {/* Platinum */}
          <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center rounded-lg border-4 border-white/20 p-4 sm:p-6 min-h-[200px] sm:min-h-[300px] relative overflow-visible">
            <div className="absolute inset-0 z-0 opacity-80 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${diamondTexture})`, backgroundSize: '64px' }} />
            <div className="absolute inset-0 bg-black/30 z-0 rounded-lg" />

            <div className="relative z-10 flex flex-col items-center w-full">
              <h3 className="text-[#55FFFF] font-minecraft mb-6 text-xl shadow-black drop-shadow-md text-center bg-black/50 px-4 py-1 rounded">PLATINUM TIER</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {sponsors.platinum.map((name, i) => (
                  <SponsorBlock key={i} tier="Platinum" name={name} size="md" />
                ))}
                <AddSponsorBlock size="md" />
              </div>
            </div>
          </div>

          {/* Gold */}
          <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center rounded-lg border-4 border-white/20 p-4 sm:p-6 min-h-[200px] sm:min-h-[300px] relative overflow-visible">
            <div className="absolute inset-0 z-0 opacity-80 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${goldTexture})`, backgroundSize: '64px' }} />
            <div className="absolute inset-0 bg-black/30 z-0 rounded-lg" />

            <div className="relative z-10 flex flex-col items-center w-full">
              <h3 className="text-[#FFAA00] font-minecraft mb-6 text-xl shadow-black drop-shadow-md text-center bg-black/50 px-4 py-1 rounded">GOLD TIER</h3>
              <div className="flex flex-wrap justify-center gap-5">
                {sponsors.gold.map((name, i) => (
                  <SponsorBlock key={i} tier="Gold" name={name} size="md" />
                ))}
                <AddSponsorBlock size="md" />
              </div>
            </div>
          </div>

          {/* Silver */}
          <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center rounded-lg border-4 border-white/20 p-4 sm:p-6 min-h-[200px] sm:min-h-[300px] relative overflow-visible">
            <div className="absolute inset-0 z-0 opacity-80 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${ironTexture})`, backgroundSize: '64px' }} />
            <div className="absolute inset-0 bg-black/30 z-0 rounded-lg" />

            <div className="relative z-10 flex flex-col items-center w-full">
              <h3 className="text-[#AAAAAA] font-minecraft mb-6 text-xl shadow-black drop-shadow-md text-center bg-black/50 px-4 py-1 rounded">SILVER TIER</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.silver.map((name, i) => (
                  <SponsorBlock key={i} tier="Silver" name={name} size="md" />
                ))}
                <AddSponsorBlock size="md" />
              </div>
            </div>
          </div>

          {/* Bronze */}
          <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center rounded-lg border-4 border-white/20 p-4 sm:p-6 min-h-[200px] sm:min-h-[300px] relative overflow-visible">
            <div className="absolute inset-0 z-0 opacity-80 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${stoneTexture})`, backgroundSize: '64px' }} />
            <div className="absolute inset-0 bg-black/30 z-0 rounded-lg" />

            <div className="relative z-10 flex flex-col items-center w-full">
              <h3 className="text-[#AA5500] font-minecraft mb-6 text-xl shadow-black drop-shadow-md text-center bg-black/50 px-4 py-1 rounded">BRONZE TIER</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.bronze.map((name, i) => (
                  <SponsorBlock key={i} tier="Bronze" name={name} size="sm" />
                ))}
                <AddSponsorBlock size="sm" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
