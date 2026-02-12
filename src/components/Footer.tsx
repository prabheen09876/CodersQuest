import { Link } from 'react-router-dom';
import stoneTexture from '../assets/texture-obsidian.png';

const Footer = () => {
    const quickLinks = [
        { label: 'Home', to: '/' },
        { label: 'Register', to: '/register' },
        { label: 'Schedule', to: '/schedule' },
        { label: 'Rules', to: '/rules' },
        { label: 'Themes', to: '/themes' },
        { label: 'Sponsors', to: '/sponsor-tiers' },
    ];

    return (
        <footer
            className="relative border-t-4 border-[#4a4a4a] py-8 sm:py-12 px-4 overflow-hidden"
            style={{
                backgroundColor: '#1a1a1a',
                backgroundImage: `url(${stoneTexture})`,
                backgroundSize: '128px',
                backgroundBlendMode: 'overlay',
            }}
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="font-minecraft text-xl sm:text-2xl text-minecraft-diamond mb-3 drop-shadow-[2px_2px_0_#000]">
                            CODERS QUEST 2.0
                        </h3>
                        <p className="font-pixel text-sm sm:text-base text-gray-400 leading-relaxed">
                            A Minecraft-themed 24-hour hackathon
                            <br />
                            by <span className="text-minecraft-redstone font-bold">Logic Sync</span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="font-minecraft text-sm sm:text-base text-gray-300 mb-4 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="font-pixel text-sm text-gray-400 hover:text-minecraft-diamond transition-colors duration-200 hover:drop-shadow-[0_0_4px_rgba(0,255,255,0.5)]"
                                >
                                    {'> '}{link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact / Social */}
                    <div className="text-center md:text-right">
                        <h4 className="font-minecraft text-sm sm:text-base text-gray-300 mb-4 uppercase tracking-wider">
                            Connect
                        </h4>
                        <div className="flex justify-center md:justify-end gap-4 mb-4">
                            {/* Discord */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-[#5865F2]/20 border-2 border-[#5865F2]/40 flex items-center justify-center hover:bg-[#5865F2]/40 transition-all duration-200 hover:shadow-[0_0_10px_rgba(88,101,242,0.5)]"
                                title="Discord"
                            >
                                <span className="text-[#5865F2] text-lg">⬢</span>
                            </a>
                            {/* Instagram */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-pink-500/20 border-2 border-pink-500/40 flex items-center justify-center hover:bg-pink-500/40 transition-all duration-200 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                                title="Instagram"
                            >
                                <span className="text-pink-400 text-lg">◈</span>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center hover:bg-blue-500/40 transition-all duration-200 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                title="LinkedIn"
                            >
                                <span className="text-blue-400 text-lg">◆</span>
                            </a>
                        </div>
                        <p className="font-pixel text-xs text-gray-500">
                            Trinity Institute of Innovations
                            <br />
                            in Professional Studies
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t-2 border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="font-pixel text-xs text-gray-500">
                        © 2026 Logic Sync | Trinity Institute. All rights reserved.
                    </p>
                    <p className="font-pixel text-xs text-gray-600">
                        Built with ❤ and ⛏ by the Logic Sync dev team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
