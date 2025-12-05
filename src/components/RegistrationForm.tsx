import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import netherBricksTexture from '../assets/nether-bricks-texture.png';
import netherBgRegular from '../assets/nether-bg.png';

// If high-res image causes 500 errors, use netherBgRegular directly instead
// High-res images can sometimes be too large for Vite to process during dev
// Uncomment the line below and comment out the high-res import to use regular image:
// const netherBg = netherBgRegular;

// Try importing high-res - if this causes errors, use the regular image instead
import netherBgHighRes from '../assets/nether-bg-high-res.png';
const netherBg = netherBgHighRes;

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    teamName: string;
    teamSize: string;
    github: string;
    linkedin: string;
    portfolio: string;
    experience: string;
    skills: string;
    dietaryRestrictions: string;
    tshirtSize: string;
    emergencyContact: string;
    emergencyPhone: string;
    motivation: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        teamName: '',
        teamSize: '',
        github: '',
        linkedin: '',
        portfolio: '',
        experience: '',
        skills: '',
        dietaryRestrictions: '',
        tshirtSize: '',
        emergencyContact: '',
        emergencyPhone: '',
        motivation: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    // Use the selected background image
    // If you're getting 500 errors, change netherBg to netherBgRegular above
    const [bgImage, setBgImage] = useState(netherBg);

    useEffect(() => {
        // Test if the image loads, fallback to regular if it doesn't
        const img = new Image();
        img.onerror = () => {
            setBgImage(netherBgRegular);
        };
        img.onload = () => {
            // Image loaded successfully
        };
        img.src = netherBg;
    }, []);

    return (
        <div 
            className="min-h-screen bg-gray-950 relative overflow-hidden nether-background-enhanced" 
            style={{ 
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                imageRendering: 'crisp-edges',
            }}
        >
            {/* Falling ash particles */}
            <div className="absolute inset-0 ash-container pointer-events-none"></div>
            {/* Rising ember particles */}
            <div className="absolute inset-0 ember-container pointer-events-none"></div>
            
            <div className="container mx-auto px-4 py-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Nether Portal Container */}
                    <div className="nether-portal-container bg-black/80 backdrop-blur-sm p-8 md:p-12 border-8 border-purple-600 nether-border-glow">
                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-minecraft text-3xl md:text-5xl text-center mb-2 text-lava-orange drop-shadow-[0_0_10px_rgba(255,69,0,0.8)]"
                        >
                            CODERS QUEST 2.0 
                            REGISTRATION
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="font-pixel text-lg text-center mb-8 text-lava-orange/80"
                        >
                            Enter Your Details to Cross the Portal
                        </motion.p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information Section */}
                            <div className="space-y-4">
                                <h2 className="font-minecraft text-xl text-lava-orange mb-4 border-b-2 border-lava-orange/30 pb-2">
                                    PERSONAL INFORMATION
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            T-Shirt Size *
                                        </label>
                                        <select
                                            name="tshirtSize"
                                            value={formData.tshirtSize}
                                            onChange={handleChange}
                                            required
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        >
                                            <option value="">Select Size</option>
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Team Information Section */}
                            <div className="space-y-4">
                                <h2 className="font-minecraft text-xl text-lava-orange mb-4 border-b-2 border-lava-orange/30 pb-2">
                                    TEAM INFORMATION
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Team Name
                                        </label>
                                        <input
                                            type="text"
                                            name="teamName"
                                            value={formData.teamName}
                                            onChange={handleChange}
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Team Size
                                        </label>
                                        <select
                                            name="teamSize"
                                            value={formData.teamSize}
                                            onChange={handleChange}
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        >
                                            <option value="">Select Size</option>
                                            <option value="1">Solo (1)</option>
                                            <option value="2">2 Members</option>
                                            <option value="3">3 Members</option>
                                            <option value="4">4 Members</option>
                                            <option value="5+">5+ Members</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Information Section */}
                            <div className="space-y-4">
                                <h2 className="font-minecraft text-xl text-lava-orange mb-4 border-b-2 border-lava-orange/30 pb-2">
                                    PROFESSIONAL INFORMATION
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            GitHub Username
                                        </label>
                                        <input
                                            type="text"
                                            name="github"
                                            value={formData.github}
                                            onChange={handleChange}
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            LinkedIn Profile
                                        </label>
                                        <input
                                            type="url"
                                            name="linkedin"
                                            value={formData.linkedin}
                                            onChange={handleChange}
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Portfolio/Website
                                        </label>
                                        <input
                                            type="url"
                                            name="portfolio"
                                            value={formData.portfolio}
                                            onChange={handleChange}
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Years of Experience
                                        </label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        >
                                            <option value="">Select Experience</option>
                                            <option value="0-1">0-1 years</option>
                                            <option value="2-3">2-3 years</option>
                                            <option value="4-5">4-5 years</option>
                                            <option value="6+">6+ years</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Primary Skills
                                        </label>
                                        <input
                                            type="text"
                                            name="skills"
                                            value={formData.skills}
                                            onChange={handleChange}
                                            placeholder="e.g., React, Python, ML"
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors placeholder-lava-orange/40"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information Section */}
                            <div className="space-y-4">
                                <h2 className="font-minecraft text-xl text-lava-orange mb-4 border-b-2 border-lava-orange/30 pb-2">
                                    ADDITIONAL INFORMATION
                                </h2>
                                
                                <div>
                                    <label className="block font-pixel text-sm text-lava-orange mb-2">
                                        Dietary Restrictions
                                    </label>
                                    <input
                                        type="text"
                                        name="dietaryRestrictions"
                                        value={formData.dietaryRestrictions}
                                        onChange={handleChange}
                                        placeholder="e.g., Vegetarian, Gluten-free, None"
                                        className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors placeholder-lava-orange/40"
                                    />
                                </div>

                                <div>
                                    <label className="block font-pixel text-sm text-lava-orange mb-2">
                                        Why do you want to participate? *
                                    </label>
                                    <textarea
                                        name="motivation"
                                        value={formData.motivation}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors resize-none"
                                    />
                                </div>
                            </div>

                            {/* Emergency Contact Section */}
                            <div className="space-y-4">
                                <h2 className="font-minecraft text-xl text-lava-orange mb-4 border-b-2 border-lava-orange/30 pb-2">
                                    EMERGENCY CONTACT
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Contact Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="emergencyContact"
                                            value={formData.emergencyContact}
                                            onChange={handleChange}
                                            required
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-pixel text-sm text-lava-orange mb-2">
                                            Contact Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="emergencyPhone"
                                            value={formData.emergencyPhone}
                                            onChange={handleChange}
                                            required
                                            className="nether-input w-full px-4 py-3 bg-gray-900 border-4 border-gray-700 text-lava-orange font-pixel text-base focus:border-lava-orange focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="magma-button w-full py-4 px-8 font-minecraft text-xl md:text-2xl text-white uppercase tracking-wider relative overflow-hidden"
                                style={{
                                    backgroundImage: `url(${netherBricksTexture}), linear-gradient(135deg, rgba(139, 0, 0, 0.7) 0%, rgba(220, 20, 60, 0.7) 50%, rgba(139, 0, 0, 0.7) 100%)`,
                                    backgroundSize: '128px, 200% 200%',
                                    backgroundRepeat: 'repeat, no-repeat',
                                }}
                            >
                                <span className="relative z-10">ENTER THE PORTAL</span>
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RegistrationForm;

