import React from 'react';
import { motion } from 'framer-motion';

const MinecraftHUD: React.FC = () => {
    // Pixel-perfect Heart Icon (Matches new reference)
    const HeartIcon = () => (
        <svg width="24" height="24" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] image-pixelated">
            {/* Outline (Black) */}
            <path d="M2 0H4V1H2V0Z" fill="black" />
            <path d="M5 0H7V1H5V0Z" fill="black" />
            <path d="M1 1H2V2H1V1Z" fill="black" />
            <path d="M4 1H5V2H4V1Z" fill="black" />
            <path d="M7 1H8V2H7V1Z" fill="black" />
            <path d="M0 2H1V5H0V2Z" fill="black" />
            <path d="M8 2H9V5H8V2Z" fill="black" />
            <path d="M1 5H2V6H1V5Z" fill="black" />
            <path d="M7 5H8V6H7V5Z" fill="black" />
            <path d="M2 6H3V7H2V6Z" fill="black" />
            <path d="M6 6H7V7H6V6Z" fill="black" />
            <path d="M3 7H4V8H3V7Z" fill="black" />
            <path d="M5 7H6V8H5V7Z" fill="black" />
            <path d="M4 8H5V9H4V8Z" fill="black" />

            {/* Inner Red */}
            <path d="M2 1H4V2H2V1Z" fill="#FF0000" />
            <path d="M5 1H7V2H5V1Z" fill="#FF0000" />
            <path d="M1 2H2V5H1V2Z" fill="#FF0000" />
            <path d="M2 2H3V3H2V2Z" fill="#FF0000" />
            <path d="M3 2H4V3H3V2Z" fill="#FF0000" />
            <path d="M4 2H5V3H4V2Z" fill="#FF0000" />
            <path d="M5 2H6V3H5V2Z" fill="#FF0000" />
            <path d="M6 2H7V3H6V2Z" fill="#FF0000" />
            <path d="M7 2H8V5H7V2Z" fill="#FF0000" />
            <path d="M2 3H7V5H2V3Z" fill="#FF0000" />
            <path d="M2 5H7V6H2V5Z" fill="#FF0000" />
            <path d="M3 6H6V7H3V6Z" fill="#FF0000" />
            <path d="M4 7H5V8H4V7Z" fill="#FF0000" />

            {/* Glint (White) - Top Left */}
            <path d="M2 1H3V2H2V1Z" fill="#FFFFFF" />

            {/* Shadow (Dark Red) - Right/Bottom Edge */}
            <path d="M4 1H5V2H4V1Z" fill="#8B0000" />
            <path d="M5 1H6V2H5V1Z" fill="#8B0000" />
            <path d="M1 2H2V5H1V2Z" fill="#8B0000" />
            <path d="M7 2H8V5H7V2Z" fill="#600000" />
            <path d="M2 5H3V6H2V5Z" fill="#8B0000" />
            <path d="M6 5H7V6H6V5Z" fill="#600000" />
            <path d="M3 6H4V7H3V6Z" fill="#8B0000" />
            <path d="M5 6H6V7H5V6Z" fill="#600000" />
            <path d="M4 7H5V8H4V7Z" fill="#600000" />
        </svg>
    );

    // Pixel-perfect Hunger Icon (Diagonal Drumstick) - Matches New Reference
    const HungerIcon = () => (
        <svg width="24" height="24" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] image-pixelated">
            {/* Outline (Black) */}
            <path d="M2 2H5V1H2V2Z" fill="black" /> {/* Top */}
            <path d="M5 1H7V2H5V1Z" fill="black" />
            <path d="M7 2H8V4H7V2Z" fill="black" /> {/* Right Top */}
            <path d="M8 4H9V6H8V4Z" fill="black" />
            <path d="M9 6H8V7H9V6Z" fill="black" />
            <path d="M8 7H9V9H8V7Z" fill="black" /> {/* Bottom Right Bone Tip */}
            <path d="M8 9H6V8H8V9Z" fill="black" />
            <path d="M6 8H5V7H6V8Z" fill="black" />
            <path d="M5 7H4V6H5V7Z" fill="black" />
            <path d="M4 6H2V5H4V6Z" fill="black" />
            <path d="M2 5H1V3H2V5Z" fill="black" /> {/* Left Bottom */}
            <path d="M1 3H2V2H1V3Z" fill="black" />

            {/* Bone (Cream/Yellowish) - Bottom Right */}
            <path d="M7 6H8V8H7V6Z" fill="#F0E68C" />
            <path d="M6 7H7V8H6V7Z" fill="#F0E68C" />

            {/* Meat (Reddish Brown) - Main Body */}
            <path d="M2 2H5V3H2V2Z" fill="#D2691E" />
            <path d="M5 2H7V4H5V2Z" fill="#D2691E" />
            <path d="M7 4H8V6H7V4Z" fill="#D2691E" />
            <path d="M2 3H7V5H2V3Z" fill="#A0522D" />
            <path d="M2 5H5V6H2V5Z" fill="#A0522D" />
            <path d="M5 5H6V7H5V5Z" fill="#A0522D" />

            {/* Highlight (White/Pink) - Top Left */}
            <path d="M2 2H3V3H2V2Z" fill="#FFFFFF" />
            <path d="M3 2H4V3H3V2Z" fill="#FFC0CB" />

            {/* Shading (Darker Brown) - Bottom/Right of Meat */}
            <path d="M6 4H7V6H6V4Z" fill="#8B4513" />
            <path d="M5 5H6V6H5V5Z" fill="#8B4513" />
            <path d="M4 6H5V7H4V6Z" fill="#8B4513" />

            {/* Bone Outline/Shadow details */}
            <path d="M6 6H7V7H6V6Z" fill="black" fillOpacity="0.2" />
        </svg>
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-start pointer-events-none">
            {/* Health Bar (Top Left) */}
            <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={`heart-${i}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-6 h-6"
                    >
                        <HeartIcon />
                    </motion.div>
                ))}
            </div>

            {/* Hunger Bar (Top Right) */}
            <div className="flex gap-1 flex-row-reverse">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={`hunger-${i}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-6 h-6"
                    >
                        <HungerIcon />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MinecraftHUD;
