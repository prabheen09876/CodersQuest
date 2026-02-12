import {
    IconHome,
    IconUserPlus,
    IconCalendarEvent,
    IconClipboardList,
    IconBrandDiscord,
    IconTools
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

export const MinecraftNavBar = () => {
    const location = useLocation();

    const links = [
        {
            title: "Home",
            icon: (isActive: boolean) => (
                <IconHome className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${isActive ? 'text-yellow-300' : 'text-white'}`} />
            ),
            href: "/",
        },
        {
            title: "Register",
            icon: (isActive: boolean) => (
                <IconUserPlus className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${isActive ? 'text-yellow-300' : 'text-yellow-400'}`} />
            ),
            href: "/register",
        },
        {
            title: "Schedule",
            icon: (isActive: boolean) => (
                <IconCalendarEvent className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${isActive ? 'text-yellow-300' : 'text-red-500'}`} />
            ),
            href: "/schedule",
        },
        {
            title: "Rules",
            icon: (isActive: boolean) => (
                <IconClipboardList className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${isActive ? 'text-yellow-300' : 'text-orange-300'}`} />
            ),
            href: "/rules",
        },
        {
            title: "Themes",
            icon: (isActive: boolean) => (
                <IconTools className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${isActive ? 'text-yellow-300' : 'text-gray-400'}`} />
            ),
            href: "/themes",
        },
        {
            title: "Sponsors",
            icon: (isActive: boolean) => (
                <IconBrandDiscord className={`h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${isActive ? 'text-yellow-300' : 'text-[#5865F2]'}`} />
            ),
            href: "/sponsor-tiers",
        },
    ];

    return (
        <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-end bg-[#1a1a1a] border-2 border-[#3a3a3a] p-0.5 sm:p-1 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                {links.map((link, idx) => {
                    const isActive = location.pathname === link.href;
                    return (
                        <Link
                            key={idx}
                            to={link.href}
                            className={`group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 transition-all duration-200
                                ${isActive
                                    ? 'bg-[#a0a0a0] border-white shadow-[inset_0_0_8px_rgba(255,255,255,0.3)]'
                                    : 'bg-[#8b8b8b] border-[#373737] border-t-[#c6c6c6] border-l-[#c6c6c6] hover:bg-[#a0a0a0]'
                                }`}
                            title={link.title}
                        >
                            {/* Selected/Hover Border Effect */}
                            <div className={`absolute inset-0 border-2 pointer-events-none transition-colors
                                ${isActive ? 'border-white/60' : 'border-transparent group-hover:border-white/40'}`}
                            ></div>

                            <div className={`transform transition-transform duration-200
                                ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                {link.icon(isActive)}
                            </div>

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-minecraft border border-white/20 whitespace-nowrap pointer-events-none">
                                {link.title}
                            </span>

                            {/* Active indicator dot */}
                            {isActive && (
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_4px_rgba(255,255,0,0.8)]"></div>
                            )}
                        </Link>
                    );
                })}
                {/* Empty Slots to complete the hotbar look - hidden on mobile to save space */}
                {[...Array(3)].map((_, i) => (
                    <div key={`empty-${i}`} className="hidden sm:block w-12 h-12 bg-[#8b8b8b] border-2 border-[#373737] border-t-[#c6c6c6] border-l-[#c6c6c6]"></div>
                ))}
            </div>
        </div>
    );
};
