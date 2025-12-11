import React from 'react';

const AddSponsorBlock = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <div className="flex flex-col items-center group relative z-10 box-border">
      <div 
        className={`${sizeClasses[size]} relative flex items-center justify-center border-4 border-dashed border-white/30 bg-black/40 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:bg-black/60`}
      >
        <span className="text-white/50 text-4xl font-minecraft pb-1 group-hover:text-yellow-400 transition-colors">+</span>
        
        {/* Tooltip Overhead */}
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-black/95 border-2 border-yellow-400 p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-max max-w-[200px] md:max-w-xs z-50 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
            <div className="text-yellow-400 font-minecraft text-sm mb-2 text-center leading-tight">wanna add your logo here?</div>
             <div className="flex flex-col space-y-1 text-center">
                 <div className="text-[#55FFFF] font-mono text-xs whitespace-nowrap">Dev Goel - +91 9773878728</div>
                 <div className="text-[#55FFFF] font-mono text-xs whitespace-nowrap">Akash Tiwari - +91 70179 16484</div>
             </div>
             {/* Arrow Tip */}
             <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-yellow-400"></div>
        </div>
      </div>
    </div>
  );
};

export default AddSponsorBlock;
