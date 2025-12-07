import React from 'react';
import {
    IconHome,
    IconUserPlus,
    IconCalendarEvent,
    IconClipboardList,
    IconBrandDiscord,
    IconTools
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const MinecraftNavBar = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-6 w-6 text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]" />
            ),
            href: "/",
        },
        {
            title: "Register",
            icon: (
                <IconUserPlus className="h-6 w-6 text-yellow-400 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]" />
            ),
            href: "/register",
        },
        {
            title: "Schedule",
            icon: (
                <IconCalendarEvent className="h-6 w-6 text-red-500 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]" />
            ),
            href: "/schedule",
        },
        {
            title: "Rules",
            icon: (
                <IconClipboardList className="h-6 w-6 text-orange-300 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]" />
            ),
            href: "/rules",
        },
        {
            title: "Discord",
            icon: (
                <IconBrandDiscord className="h-6 w-6 text-[#5865F2] drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]" />
            ),
            href: "#",
        },
        {
            title: "Tools",
            icon: (
                <IconTools className="h-6 w-6 text-gray-400 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]" />
            ),
            href: "#",
        },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-end bg-[#1a1a1a] border-2 border-[#3a3a3a] p-1 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                {links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        className="group relative w-12 h-12 flex items-center justify-center bg-[#8b8b8b] border-2 border-[#373737] border-t-[#c6c6c6] border-l-[#c6c6c6] hover:bg-[#a0a0a0] transition-colors"
                        title={link.title}
                    >
                        {/* Selected/Hover Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white pointer-events-none"></div>

                        <div className="transform group-hover:scale-110 transition-transform duration-200">
                            {link.icon}
                        </div>

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-minecraft border border-white/20 whitespace-nowrap pointer-events-none">
                            {link.title}
                        </span>
                    </a>
                ))}
                {/* Empty Slots to complete the hotbar look (optional, usually 9 slots) */}
                {[...Array(3)].map((_, i) => (
                    <div key={`empty-${i}`} className="w-12 h-12 bg-[#8b8b8b] border-2 border-[#373737] border-t-[#c6c6c6] border-l-[#c6c6c6]"></div>
                ))}
            </div>
        </div>
    );
};
