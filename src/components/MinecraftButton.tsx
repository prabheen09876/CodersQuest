import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface MinecraftButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'wood';
    fullWidth?: boolean;
}

const MinecraftButton: React.FC<MinecraftButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "font-minecraft text-sm uppercase tracking-wider relative px-6 py-3 border-2 transition-all duration-75 active:translate-y-1";

    const variants = {
        primary: "bg-minecraft-obsidian text-white border-minecraft-diamond shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:bg-gray-900",
        secondary: "bg-minecraft-stone text-white border-gray-400 shadow-pixel hover:bg-gray-500",
        danger: "bg-red-900 text-white border-minecraft-redstone shadow-[0_0_10px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]",
        wood: "text-white border-black shadow-pixel hover:brightness-110",
    };

    // Use the seamless wood texture for the button background
    // Add a fallback color #8b5a2b (brown) in case image fails
    const bgStyle = variant === 'wood' ? {
        backgroundColor: '#8b5a2b',
        backgroundImage: `url(/assets/texture-wood.png)`,
        backgroundSize: '64px', // Repeat the pattern
        backgroundRepeat: 'repeat',
        borderTop: '4px solid #a06e3b', // Lighter top
        borderLeft: '4px solid #a06e3b', // Lighter left
        borderBottom: '4px solid #5e3a17', // Darker bottom
        borderRight: '4px solid #5e3a17', // Darker right
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.5)',
    } : {};

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            style={bgStyle}
            {...props}
        >
            {/* Inner border effect for depth - only for non-wood variants */}
            {variant !== 'wood' && (
                <div className="absolute inset-0 border-2 border-white/10 pointer-events-none"></div>
            )}
            {children}
        </motion.button>
    );
};

export default MinecraftButton;
