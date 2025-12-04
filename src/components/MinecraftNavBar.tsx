import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
    IconBrandDiscord,
    IconCalendarEvent,
    IconClipboardList,
    IconHome,
    IconTools,
    IconUserPlus,
} from "@tabler/icons-react";

export function MinecraftNavBar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] stroke-[2.5]" />
            ),
            href: "/",
        },
        {
            title: "Register",
            icon: (
                <IconUserPlus className="h-full w-full text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] stroke-[2.5]" />
            ),
            href: "#",
        },
        {
            title: "Schedule",
            icon: (
                <IconCalendarEvent className="h-full w-full text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] stroke-[2.5]" />
            ),
            href: "/schedule",
        },
        {
            title: "Rules",
            icon: (
                <IconClipboardList className="h-full w-full text-orange-300 drop-shadow-[0_0_8px_rgba(253,186,116,0.8)] stroke-[2.5]" />
            ),
            href: "/rules",
        },
        {
            title: "Discord",
            icon: (
                <IconBrandDiscord className="h-full w-full text-[#5865F2] drop-shadow-[0_0_8px_rgba(88,101,242,0.8)] stroke-[2.5]" />
            ),
            href: "#",
        },
        {
            title: "Tools",
            icon: (
                <IconTools className="h-full w-full text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] stroke-[2.5]" />
            ),
            href: "#",
        },
    ];

    return (
        <div className="fixed bottom-10 left-0 right-0 z-50 flex items-center justify-center w-full pointer-events-none">
            <div className="pointer-events-auto">
                <FloatingDock
                    items={links}
                />
            </div>
        </div>
    );
}
