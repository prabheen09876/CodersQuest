import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Coins, Trophy, Zap } from 'lucide-react';

const features = [
    {
        icon: <Clock className="w-12 h-12 text-yellow-400" />,
        title: "24 Hours",
        desc: "Non-stop coding marathon"
    },
    {
        icon: <Coins className="w-12 h-12 text-minecraft-diamond" />,
        title: "Free Entry",
        desc: "No cost to participate"
    },
    {
        icon: <Trophy className="w-12 h-12 text-orange-400" />,
        title: "Epic Prizes",
        desc: "Win big rewards"
    },
    {
        icon: <Zap className="w-12 h-12 text-minecraft-redstone" />,
        title: "Networking",
        desc: "Connect with peers"
    }
];

const EventDetails: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900 border-t-8 border-minecraft-obsidian">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-minecraft text-3xl md:text-4xl text-center text-white mb-16 drop-shadow-[4px_4px_0_#000]"
                >
                    EVENT DETAILS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-600 p-1 shadow-pixel hover:translate-y-[-4px] transition-transform"
                        >
                            <div className="bg-gray-400 h-full p-6 flex flex-col items-center text-center border-4 border-gray-300 shadow-pixel-inset">
                                <div className="mb-4 p-4 bg-gray-800/50 rounded-none border-2 border-gray-600">
                                    {feature.icon}
                                </div>
                                <h3 className="font-minecraft text-xl text-gray-900 mb-2">{feature.title}</h3>
                                <p className="font-pixel text-xl text-gray-800">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
