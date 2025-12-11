import React from 'react';

interface ThemeIconProps {
  id: string;
  color: string;
  className?: string;
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ id, color, className = '' }) => {
  // Common SVG settings for pixel art look
  const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    shapeRendering: "crispEdges", // Important for pixel look
    className: `w-full h-full drop-shadow-[0_0_8px_${color}] ${className}`,
    fill: color,
  };

  switch (id) {
    case 'blockchain':
      return (
        <svg {...svgProps}>
          {/* Pixelated Chain Links */}
          <path d="M7 4h4v2H7z M5 6h2v2H5z M3 8h2v8H3z M5 16h2v2H5z M7 18h4v-2H7z            M13 18h4v2h-4z M17 16h2v-2h-2z M19 8h-2v8h2z M17 6h-2v2h2z M13 4h-4v2h4z            M9 10h2v4H9z M13 10h2v4h-2z" />
        </svg>
      );
    case 'ai-ml':
      return (
        <svg {...svgProps}>
          {/* Pixelated Brain / Network */}
          <path d="M9 2h6v2H9z M6 4h3v2H6z M15 4h3v2h-3z M4 6h2v4H4z M18 6h2v4h-2z            M4 12h2v4H4z M18 12h2v4h-2z M6 16h3v2H6z M15 16h3v2h-3z M9 18h6v2H9z            M11 6h2v2h-2z M11 10h2v4h-2z M7 8h2v2H7z M15 8h2v2h-2z M7 14h2v2H7z M15 14h2v2h-2z" />
          <rect x="11" y="9" width="2" height="6" opacity="0.5" />
        </svg>
      );
    case 'cybersecurity':
      return (
        <svg {...svgProps}>
          {/* Pixelated Padlock/Shield */}
          <path d="M8 3h8v2H8z M6 5h2v4H6z M16 5h2v4h-2z            M6 10h12v11H6z            M11 13h2v4h-2z" />
          {/* Keyhole detail inverse */}
          <path d="M11 13h2v4h-2z" fill="rgba(0,0,0,0.5)" /> 
        </svg>
      );
    case 'open-innovation':
      return (
        <svg {...svgProps}>
          {/* Pixelated Chest/Box */}
          <path d="M4 8h16v12H4z M4 6h16v2H4z M2 8h2v12H2z M20 8h2v12h-2z" />
          {/* Top Lid detail */}
          <rect x="10" y="5" width="4" height="4" />
          {/* Question mark floating ?? */}
          <path d="M16 2h3v2h-3z M19 4h2v3h-2z M19 9h-2V7h2z M17 11h2v2h-2z" opacity="0.8" />
          <path d="M5 4h2v2H5z M3 2h2v2H3z" opacity="0.6" />
        </svg>
      );
    case 'web-app':
      return (
        <svg {...svgProps}>
          {/* Browser Window / Phone */}
          <path d="M4 4h16v14H4z M2 6h2v10H2z M20 6h2v10h-2z" opacity="0.5"/>
          <path d="M5 5h14v2H5z" /> {/* Header */}
          <rect x="7" y="5" width="2" height="2" fill="white" />
          <rect x="15" y="5" width="2" height="2" fill="white" />
          <path d="M8 10h8v8H8z" /> {/* App Screen */}
          <path d="M10 12h4v2h-4z M10 15h4v1h-4z" fill="white" />
        </svg>
      );
    case 'ar-vr':
      return (
        <svg {...svgProps}>
          {/* VR Headset */}
          <path d="M4 8h16v8H4z" />
          <path d="M6 10h4v4H6z M14 10h4v4h-4z" fill="black" opacity="0.5" />
          <path d="M2 10h2v4H2z M20 10h2v4h-2z" /> {/* Straps */}
          <rect x="11" y="7" width="2" height="2" />
        </svg>
      );
    case 'game-dev':
      return (
        <svg {...svgProps}>
          {/* Arcade Joystick / Controller */}
          <path d="M4 10h16v8H4z" /> {/* Body */}
          <rect x="6" y="12" width="2" height="2" fill="white" /> {/* D-pad */}
          <rect x="6" y="14" width="2" height="2" fill="white" />
          <rect x="8" y="13" width="2" height="2" fill="white" />
          <rect x="4" y="13" width="2" height="2" fill="white" />
          
          <rect x="14" y="13" width="2" height="2" fill="white" /> {/* Buttons */}
          <rect x="17" y="12" width="2" height="2" fill="white" />
          
          <path d="M7 6h2v4H7z" /> {/* Stick */}
          <rect x="6" y="4" width="4" height="2" /> {/* Knob */}
        </svg>
      );
    case 'data-science':
      return (
        <svg {...svgProps}>
          {/* Bar Chart / Magnifying Glass */}
          <path d="M4 18h16v2H4z" /> {/* Base */}
          <path d="M6 10h2v8H6z M10 6h2v12h-2z M14 12h2v6h-2z M18 8h2v10h-2z" /> {/* Bars */}
          <path d="M4 4h2v2H4z M18 4h2v2h-2z" opacity="0.3" /> {/* Sparkles */}
        </svg>
      );
    case 'iot-robotics':
      return (
        <svg {...svgProps}>
           {/* Robot Head */}
           <path d="M6 6h12v10H6z" />
           <rect x="4" y="8" width="2" height="6" /> {/* Ears */}
           <rect x="18" y="8" width="2" height="6" />
           <rect x="11" y="3" width="2" height="3" /> {/* Antenna */}
           <rect x="10" y="2" width="4" height="1" />
           
           <rect x="8" y="9" width="3" height="3" fill="black" /> {/* Eyes */}
           <rect x="13" y="9" width="3" height="3" fill="black" />
           <rect x="9" y="14" width="6" height="1" fill="black" /> {/* Mouth */}
        </svg>
      );
    default:
      return (
        <svg {...svgProps}>
          <rect x="4" y="4" width="16" height="16" fillOpacity="0.3" />
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">?</text>
        </svg>
      );
  }
};

export default ThemeIcon;
