import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MinecraftButton from './MinecraftButton';
import heroBg from '../assets/hero-bg-final.png';

const Hero = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        window.open('https://unstop.com/p/coders-quest-20-logic-sync-1606440', '_blank');
    };
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-between pt-16 pb-24 sm:pt-20 sm:pb-40 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Animated Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none z-[1]"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-yellow-300/60 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `heroFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            boxShadow: '0 0 6px rgba(255,255,100,0.8)',
                        }}
                    />
                ))}
            </div>

            {/* Vignette effect */}
            <div className="absolute inset-0 z-[2] pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)'
            }}></div>

            {/* Top Title Area */}
            <div className="relative z-10 text-center mt-6 sm:mt-10">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Subtitle above title */}
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-pixel text-sm sm:text-lg text-yellow-300/80 tracking-[0.3em] uppercase mb-3 sm:mb-4 drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]"
                    >
                        ⚔️ The Ultimate Hackathon ⚔️
                    </motion.p>

                    <h1
                        className="font-minecraft text-3xl sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-2 sm:gap-4 items-center justify-center"
                    >
                        <motion.span
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                            className="text-transparent bg-clip-text drop-shadow-[4px_4px_0_#3e2723] animate-pulse-slow"
                            style={{
                                backgroundColor: '#8b5a2b',
                                backgroundImage: `url(/assets/texture-wood.png)`,
                                backgroundSize: 'contain',
                                WebkitTextStroke: '1px rgba(0,0,0,0.3)',
                            }}
                        >
                            CODERS
                        </motion.span>
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                            className="text-transparent bg-clip-text drop-shadow-[4px_4px_0_#424242]"
                            style={{
                                backgroundColor: '#7d7d7d',
                                backgroundImage: `url(/assets/texture-stone.png)`,
                                backgroundSize: 'contain',
                                WebkitTextStroke: '1px rgba(0,0,0,0.3)',
                            }}
                        >
                            QUEST
                        </motion.span>
                        <motion.span
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                            className="text-transparent bg-clip-text drop-shadow-[4px_4px_0_#b8860b]"
                            style={{
                                backgroundColor: '#ffd700',
                                backgroundImage: `url(/assets/texture-gold.png)`,
                                backgroundSize: 'contain',
                                filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.5))',
                            }}
                        >
                            2.0
                        </motion.span>
                    </h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="font-pixel text-xs sm:text-base md:text-lg text-white/70 mt-3 sm:mt-5 tracking-wide"
                    >
                        24 Hours • Code • Create • Conquer
                    </motion.p>
                </motion.div>
            </div>

            {/* Center Button Area */}
            <div className="relative z-10 flex flex-col items-center gap-4 mt-8 sm:mt-16">
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
                    className="relative"
                >
                    {/* Glowing ring behind button */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-red-500/30 rounded-lg blur-lg animate-pulse"></div>
                    <MinecraftButton
                        variant="wood"
                        className="relative text-base px-8 py-3 border-2 sm:text-xl sm:px-12 sm:py-4 sm:border-4 tracking-wider"
                        onClick={handleRegister}
                    >
                        ⚡ REGISTER NOW ⚡
                    </MinecraftButton>
                </motion.div>

                {/* Countdown / info chips */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2"
                >
                    {['Free Entry', '24 Hours', 'Epic Prizes'].map((chip, i) => (
                        <span
                            key={i}
                            className="font-pixel text-xs sm:text-sm px-3 py-1 bg-black/50 border border-white/20 text-white/80 backdrop-blur-sm"
                        >
                            {chip}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Buttons Area */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mb-6 sm:mb-10">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6"
                >
                    <MinecraftButton
                        variant="wood"
                        fullWidth
                        className="text-sm py-3 border-2 sm:text-lg sm:py-4 sm:border-4"
                        onClick={() => navigate('/themes')}
                    >
                        🎨 THEMES
                    </MinecraftButton>
                    <MinecraftButton variant="wood" fullWidth className="text-sm py-3 border-2 sm:text-lg sm:py-4 sm:border-4">
                        🤝 COMMUNITY HACKATHON
                    </MinecraftButton>
                    <MinecraftButton variant="wood" fullWidth className="text-sm py-3 border-2 sm:text-lg sm:py-4 sm:border-4">
                        🏗️ BUILD TOGETHER
                    </MinecraftButton>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
            >
                <span className="font-pixel text-[10px] sm:text-xs text-white/40 tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-4 h-6 border-2 border-white/30 rounded-full flex justify-center pt-1"
                >
                    <div className="w-1 h-1.5 bg-white/50 rounded-full"></div>
                </motion.div>
            </motion.div>

            {/* CSS Animations */}
            <style>{`
                @keyframes heroFloat {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
                }
                .animate-pulse-slow {
                    animation: pulseSlow 3s ease-in-out infinite;
                }
                @keyframes pulseSlow {
                    0%, 100% { filter: brightness(1); }
                    50% { filter: brightness(1.15); }
                }
            `}</style>
        </div>
    );
};

export default Hero;
