import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-minecraft-dirt relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-minecraft-stone p-1 rounded-none shadow-pixel-lg"
                >
                    <div className="bg-gray-800 border-4 border-gray-600 p-8 md:p-12 text-center">
                        <h2 className="font-minecraft text-3xl md:text-4xl text-minecraft-diamond mb-8 drop-shadow-[2px_2px_0_#000]">
                            WHO WE ARE
                        </h2>

                        <p className="font-pixel text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                            <span className="text-minecraft-redstone font-bold">Logic Sync</span> is the premier tech club of
                            <br />
                            <span className="text-white font-bold">Trinity Institute of Innovations in Professional Studies</span>.
                        </p>

                        <p className="font-pixel text-lg md:text-xl text-gray-400">
                            We are a community of builders, dreamers, and crafters dedicated to pushing the boundaries of technology.
                            Join us for an epic 24-hour journey of code, creativity, and collaboration.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
