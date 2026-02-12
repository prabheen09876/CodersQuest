import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { value: '24H', label: 'Hackathon', icon: '⏰' },
        { value: '500+', label: 'Participants', icon: '👥' },
        { value: '50K', label: 'Prize Pool', icon: '💎' },
        { value: '10+', label: 'Themes', icon: '🎯' },
    ];

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden"
            style={{
                backgroundColor: '#3b3b3b',
                backgroundImage: `url(/assets/texture-stone.png)`,
                backgroundSize: '128px',
                backgroundRepeat: 'repeat',
            }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Animated diagonal light rays */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%] opacity-[0.03]"
                    style={{
                        background: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,255,255,0.15) 40px, rgba(0,255,255,0.15) 42px)',
                        animation: 'aboutRaysSweep 20s linear infinite',
                    }}
                ></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`about-p-${i}`}
                        className="absolute rounded-sm"
                        style={{
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: 'rgba(0,255,255,0.4)',
                            boxShadow: '0 0 6px rgba(0,255,255,0.6)',
                            animation: `aboutFloat ${5 + Math.random() * 8}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Top & bottom gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

            {/* Decorative side lines */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-minecraft-diamond/30 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-minecraft-diamond/30 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="bg-black/40 border-2 border-gray-600 p-4 sm:p-6 text-center backdrop-blur-sm group hover:border-minecraft-diamond/50 transition-all duration-300"
                        >
                            <span className="text-2xl sm:text-3xl block mb-2 group-hover:scale-110 transition-transform">{stat.icon}</span>
                            <span className="font-minecraft text-xl sm:text-2xl md:text-3xl text-minecraft-diamond block drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                                {stat.value}
                            </span>
                            <span className="font-pixel text-xs sm:text-sm text-gray-400 mt-1 block">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main About Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-minecraft-stone p-1 rounded-none shadow-pixel-lg"
                >
                    <div className="bg-gray-800 border-4 border-gray-600 p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Subtle corner decorations */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-minecraft-diamond/30"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-minecraft-diamond/30"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-minecraft-diamond/30"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-minecraft-diamond/30"></div>

                        <h2 className="font-minecraft text-2xl sm:text-3xl md:text-4xl text-minecraft-diamond mb-6 sm:mb-8 drop-shadow-[2px_2px_0_#000]">
                            WHO WE ARE
                        </h2>

                        <p className="font-pixel text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                            <span className="text-minecraft-redstone font-bold">Logic Sync</span> is the premier tech club of
                            <br />
                            <span className="text-white font-bold">Trinity Institute of Innovations in Professional Studies</span>.
                        </p>

                        <p className="font-pixel text-base sm:text-lg md:text-xl text-gray-400">
                            We are a community of builders, dreamers, and crafters dedicated to pushing the boundaries of technology.
                            Join us for an epic 24-hour journey of code, creativity, and collaboration.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes aboutFloat {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
                    50% { transform: translateY(-20px) scale(1.3); opacity: 0.8; }
                }
                @keyframes aboutRaysSweep {
                    0% { transform: translateX(-20%); }
                    100% { transform: translateX(20%); }
                }
            `}</style>
        </section>
    );
};

export default About;
