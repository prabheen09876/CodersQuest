/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                minecraft: {
                    grass: '#5b8731',
                    dirt: '#795548',
                    sky: '#87CEEB',
                    cloud: '#FFFFFF',
                    obsidian: '#1e1e1e',
                    redstone: '#ff0000',
                    diamond: '#00ffff',
                    stone: '#7d7d7d',
                    wood: '#8b5a2b',
                    leaf: '#4a6b2f',
                    gold: '#ffd700',
                },
                'lava-orange': '#FF4500',
                'nether-purple': '#A020F0',
            },
            fontFamily: {
                minecraft: ['"Press Start 2P"', 'cursive'],
                pixel: ['"VT323"', 'monospace'],
            },
            boxShadow: {
                'pixel': '4px 4px 0px 0px rgba(0,0,0,0.5)',
                'pixel-lg': '8px 8px 0px 0px rgba(0,0,0,0.5)',
                'pixel-inset': 'inset 4px 4px 0px 0px rgba(0,0,0,0.2)',
                'nether-glow': '0 0 15px #A020F0',
                'lava-glow': '0 0 20px rgba(255, 69, 0, 0.8)',
            },
        },
    },
    plugins: [],
}
