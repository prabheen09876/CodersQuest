import { motion } from 'framer-motion';
import { Clock, Coins, Trophy, Zap } from 'lucide-react';

const features = [
    {
        icon: <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400" />,
        title: "24 Hours",
        desc: "Non-stop coding marathon"
    },
    {
        icon: <Coins className="w-8 h-8 sm:w-12 sm:h-12 text-minecraft-diamond" />,
        title: "Free Entry",
        desc: "No cost to participate"
    },
    {
        icon: <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-orange-400" />,
        title: "Epic Prizes",
        desc: "Win big rewards"
    },
    {
        icon: <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-minecraft-redstone" />,
        title: "Networking",
        desc: "Connect with peers"
    }
];

const EventDetails = () => {
    return (
        <section className="py-12 sm:py-20 relative overflow-hidden border-t-8 border-minecraft-obsidian"
            style={{
                backgroundColor: '#1a1a2e',
                backgroundImage: `url(/assets/texture-obsidian.png)`,
                backgroundSize: '128px',
                backgroundRepeat: 'repeat',
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, rgba(0,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(138,43,226,0.06) 0%, transparent 60%)',
                    animation: 'eventPulse 8s ease-in-out infinite alternate',
                }}
            ></div>

            {/* Floating emerald-like particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={`ev-p-${i}`}
                        className="absolute"
                        style={{
                            width: `${3 + Math.random() * 4}px`,
                            height: `${3 + Math.random() * 4}px`,
                            left: `${Math.random() * 100}%`,
                            bottom: '-10px',
                            backgroundColor: i % 2 === 0 ? 'rgba(0,255,255,0.5)' : 'rgba(138,43,226,0.5)',
                            boxShadow: `0 0 8px ${i % 2 === 0 ? 'rgba(0,255,255,0.7)' : 'rgba(138,43,226,0.7)'}`,
                            animation: `eventRise ${6 + Math.random() * 8}s linear infinite`,
                            animationDelay: `${Math.random() * 6}s`,
                        }}
                    />
                ))}
            </div>

            {/* Top & bottom gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-minecraft text-2xl sm:text-3xl md:text-4xl text-center text-white mb-10 sm:mb-16 drop-shadow-[4px_4px_0_#000]"
                >
                    EVENT DETAILS
                </motion.h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            className="bg-gray-600/80 p-1 shadow-pixel transition-all duration-300 group"
                        >
                            <div className="bg-gray-400/90 h-full p-4 sm:p-6 flex flex-col items-center text-center border-4 border-gray-300 shadow-pixel-inset backdrop-blur-sm relative overflow-hidden">
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

                                <div className="mb-3 sm:mb-4 p-2 sm:p-4 bg-gray-800/50 rounded-none border-2 border-gray-600 relative z-10 group-hover:border-cyan-500/30 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="font-minecraft text-base sm:text-xl text-gray-900 mb-1 sm:mb-2 relative z-10">{feature.title}</h3>
                                <p className="font-pixel text-base sm:text-xl text-gray-800 relative z-10">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes eventPulse {
                    0% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
                @keyframes eventRise {
                    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100vh) rotate(180deg); opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default EventDetails;
