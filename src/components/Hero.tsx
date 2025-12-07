import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MinecraftButton from './MinecraftButton';
import heroBg from '../assets/hero-bg-final.png';

interface HeroProps {
    onRegisterClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
    const navigate = useNavigate();

    const handleRegister = () => {
        if (onRegisterClick) {
            onRegisterClick();
        } else {
            navigate('/register');
        }
    };
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-between pt-20 pb-40 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Overlay to ensure text readability if needed, though the image is bright */}
            {/* <div className="absolute inset-0 bg-black/10"></div> */}

            {/* Main Content Area - Pushing content to match the image layout */}

            {/* Top Title Area */}
            <div className="relative z-10 text-center mt-10">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-minecraft text-4xl md:text-6xl lg:text-7xl drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-4 items-center justify-center"
                >
                    <span
                        className="text-transparent bg-clip-text drop-shadow-[4px_4px_0_#3e2723]"
                        style={{
                            backgroundColor: '#8b5a2b',
                            backgroundImage: `url(/assets/texture-wood.png)`,
                            backgroundSize: 'contain'
                        }}
                    >
                        CODERS
                    </span>
                    <span
                        className="text-transparent bg-clip-text drop-shadow-[4px_4px_0_#424242]"
                        style={{
                            backgroundColor: '#7d7d7d',
                            backgroundImage: `url(/assets/texture-stone.png)`,
                            backgroundSize: 'contain'
                        }}
                    >
                        QUEST
                    </span>
                    <span
                        className="text-transparent bg-clip-text drop-shadow-[4px_4px_0_#b8860b]"
                        style={{
                            backgroundColor: '#ffd700',
                            backgroundImage: `url(/assets/texture-gold.png)`,
                            backgroundSize: 'contain'
                        }}
                    >
                        2.0
                    </span>
                </motion.h1>
            </div>

            {/* Center Button Area */}
            <div className="relative z-10 flex flex-col items-center gap-4 mt-20">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <MinecraftButton
                        variant="wood"
                        className="text-xl px-10 py-4 border-4"
                        onClick={handleRegister}
                    >
                        REGISTER NOW
                    </MinecraftButton>
                </motion.div>
            </div>

            {/* Bottom Buttons Area */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mb-10">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <MinecraftButton
                        variant="wood"
                        fullWidth
                        className="text-lg py-4 border-4"
                        onClick={() => navigate('/themes')}
                    >
                        THEMES
                    </MinecraftButton>
                    <MinecraftButton variant="wood" fullWidth className="text-lg py-4 border-4">
                        COMMUNITY HACKATHON
                    </MinecraftButton>
                    <MinecraftButton variant="wood" fullWidth className="text-lg py-4 border-4">
                        BUILD TOGETHER
                    </MinecraftButton>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
