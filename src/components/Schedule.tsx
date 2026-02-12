import React from 'react';
import { motion } from 'framer-motion';

const Schedule: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#2a0505] relative overflow-hidden font-minecraft text-white py-12 px-3 sm:py-20 sm:px-4">
            {/* Lava Background Effect */}
            <div className="absolute inset-0 z-0 bg-[url('/assets/texture-netherrack.png')] opacity-20 bg-repeat"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#ff4500]/10 to-[#ff4500]/30 pointer-events-none"></div>

            {/* Floating Embers & Lava Bubbles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={`ember-${i}`}
                        className="absolute bg-[#ffaa00] rounded-sm"
                        style={{
                            bottom: '-10px',
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            animation: `rise ${Math.random() * 10 + 5}s infinite linear`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`bubble-${i}`}
                        className="absolute bg-[#ff4500] rounded-full opacity-60"
                        style={{
                            bottom: '0',
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 20 + 10}px`,
                            height: `${Math.random() * 20 + 10}px`,
                            animation: `bubble ${Math.random() * 4 + 2}s infinite ease-in-out`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl sm:text-5xl md:text-7xl text-center mb-10 sm:mb-16 drop-shadow-[4px_4px_0_#3e0000]"
                >
                    <span className="text-[#ff4500]">EVENT</span> <span className="text-[#ffaa00]">SCHEDULE</span>
                </motion.h1>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#5c0000] -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {[
                            { time: "10:00 AM", title: "Server Opening", desc: "The gates open! Join the lobby and meet your team.", color: "text-green-400" },
                            { time: "11:00 AM", title: "Build Battle Begins", desc: "Theme announced. 3 hours of intense building.", color: "text-yellow-400" },
                            { time: "02:00 PM", title: "Lunch Break", desc: "Refuel your hunger bar. Server remains open.", color: "text-blue-400" },
                            { time: "03:00 PM", title: "PvP Tournament", desc: "Optional combat arena event for extra points.", color: "text-red-500" },
                            { time: "05:00 PM", title: "Judging Phase", desc: "Admins review builds. Community voting opens.", color: "text-purple-400" },
                            { time: "06:00 PM", title: "Awards Ceremony", desc: "Winners announced and prizes distributed.", color: "text-gold-400" }
                        ].map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
                            >
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                                    {index % 2 !== 0 && (
                                        <div className="hidden md:block p-4 rounded-lg transition-all duration-300 group-hover:bg-[#ff4500]/10 group-hover:shadow-[0_0_15px_rgba(255,69,0,0.3)] border border-transparent group-hover:border-[#ff4500]/30">
                                            <h3 className={`text-lg sm:text-2xl font-bold ${event.color}`}>{event.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-300 mt-2">{event.desc}</p>
                                        </div>
                                    )}
                                    {index % 2 === 0 && (
                                        <div className="md:hidden p-3 sm:p-4 rounded-lg transition-all duration-300 group-hover:bg-[#ff4500]/10 group-hover:shadow-[0_0_15px_rgba(255,69,0,0.3)] border border-transparent group-hover:border-[#ff4500]/30">
                                            <h3 className={`text-lg sm:text-2xl font-bold ${event.color}`}>{event.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-300 mt-2">{event.desc}</p>
                                        </div>
                                    )}
                                    <div className={`md:hidden text-base sm:text-xl font-bold text-[#ffaa00] mb-2`}>{event.time}</div>
                                </div>

                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#3e0000] border-4 border-[#ff4500] -translate-x-1/2 z-10 rotate-45 shadow-[0_0_10px_#ff4500] group-hover:shadow-[0_0_20px_#ffaa00] group-hover:bg-[#ff4500] transition-all duration-300 animate-pulse"></div>

                                <div className="w-full md:w-1/2 pl-12">
                                    {index % 2 === 0 && (
                                        <div className="hidden md:block p-4 rounded-lg transition-all duration-300 group-hover:bg-[#ff4500]/10 group-hover:shadow-[0_0_15px_rgba(255,69,0,0.3)] border border-transparent group-hover:border-[#ff4500]/30">
                                            <h3 className={`text-lg sm:text-2xl font-bold ${event.color}`}>{event.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-300 mt-2">{event.desc}</p>
                                        </div>
                                    )}
                                    {index % 2 !== 0 && (
                                        <div className="md:hidden p-3 sm:p-4 rounded-lg transition-all duration-300 group-hover:bg-[#ff4500]/10 group-hover:shadow-[0_0_15px_rgba(255,69,0,0.3)] border border-transparent group-hover:border-[#ff4500]/30">
                                            <h3 className={`text-lg sm:text-2xl font-bold ${event.color}`}>{event.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-300 mt-2">{event.desc}</p>
                                        </div>
                                    )}
                                    <div className={`hidden md:block text-xl font-bold text-[#ffaa00] ${index % 2 === 0 ? '' : 'text-right pr-12'}`}>
                                        {index % 2 === 0 ? event.time : ''}
                                    </div>
                                    <div className={`hidden md:block text-xl font-bold text-[#ffaa00] ${index % 2 !== 0 ? '' : 'text-right pl-12'}`}>
                                        {index % 2 !== 0 ? event.time : ''}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes rise {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
                @keyframes bubble {
                    0% { transform: translateY(0) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
                    100% { transform: translateY(-40px) scale(0); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Schedule;
