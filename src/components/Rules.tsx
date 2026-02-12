import React from 'react';
import { motion } from 'framer-motion';
import MinecraftButton from './MinecraftButton';

const Rules: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a0a2a] relative overflow-hidden font-minecraft text-white py-12 px-3 sm:py-20 sm:px-4">
            {/* Starry Background */}
            <div className="absolute inset-0 z-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-70"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            animation: `twinkle ${Math.random() * 5 + 2}s infinite`
                        }}
                    />
                ))}
                {/* Pixelated Moon */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-gray-200 opacity-90 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    <div className="absolute top-4 left-4 w-4 h-4 bg-gray-400 opacity-50"></div>
                    <div className="absolute top-10 left-12 w-6 h-6 bg-gray-400 opacity-50"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-gray-400 opacity-50"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl sm:text-5xl md:text-7xl text-center mb-8 sm:mb-12 drop-shadow-[4px_4px_0_#000]"
                >
                    <span className="text-[#5e72eb]">SERVER</span> <span className="text-[#ffffff]">RULES</span>
                </motion.h1>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-black/60 border-4 border-white/20 p-4 sm:p-8 md:p-12 backdrop-blur-sm"
                >
                    <ul className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl">
                        {[
                            "1. No Griefing or Stealing: Respect other players' builds and items.",
                            "2. Be Respectful: No harassment, hate speech, or toxic behavior.",
                            "3. No Cheating/Hacking: X-ray, fly hacks, and other unfair advantages are banned.",
                            "4. PvP Consent: Player vs Player combat is only allowed if both parties agree.",
                            "5. Keep Chat Clean: Avoid excessive spam and inappropriate language.",
                            "6. Report Issues: If you find a bug or a rule breaker, report it to the admins immediately."
                        ].map((rule, index) => (
                            <motion.li
                                key={index}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <span className="text-[#5e72eb] font-bold text-2xl">#{index + 1}</span>
                                <span className="leading-relaxed">{rule.substring(3)}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-12 text-center">
                        <MinecraftButton variant="stone" className="text-lg px-8 py-3">
                            ACCEPT & JOIN
                        </MinecraftButton>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(0.8); }
                }
            `}</style>
        </div>
    );
};

export default Rules;
