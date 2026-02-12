import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface MinecraftButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'wood' | 'stone';
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

    const variants: Record<string, string> = {
        primary: "bg-minecraft-obsidian text-white border-minecraft-diamond shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:bg-gray-900",
        secondary: "bg-minecraft-stone text-white border-gray-400 shadow-pixel hover:bg-gray-500",
        danger: "bg-red-900 text-white border-minecraft-redstone shadow-[0_0_10px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]",
        wood: "text-white border-black shadow-pixel hover:brightness-110",
        stone: "text-white border-black shadow-pixel hover:brightness-110",
    };

    // Use texture for wood/stone buttons
    const texturedStyle = (variant === 'wood' || variant === 'stone') ? {
        backgroundColor: variant === 'wood' ? '#8b5a2b' : '#7d7d7d',
        backgroundImage: `url(/assets/texture-${variant === 'wood' ? 'wood' : 'stone'}.png)`,
        backgroundSize: '64px',
        backgroundRepeat: 'repeat',
        borderTop: `4px solid ${variant === 'wood' ? '#a06e3b' : '#a0a0a0'}`,
        borderLeft: `4px solid ${variant === 'wood' ? '#a06e3b' : '#a0a0a0'}`,
        borderBottom: `4px solid ${variant === 'wood' ? '#5e3a17' : '#555555'}`,
        borderRight: `4px solid ${variant === 'wood' ? '#5e3a17' : '#555555'}`,
        boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.5)',
    } : {};

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            style={texturedStyle}
            {...props}
        >
            {/* Inner border effect for depth - only for non-textured variants */}
            {variant !== 'wood' && variant !== 'stone' && (
                <div className="absolute inset-0 border-2 border-white/10 pointer-events-none"></div>
            )}
            {children}
        </motion.button>
    );
};

export default MinecraftButton;
