import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logo_text, links, actions } = content;

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent py-4">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 shadow-lg">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold text-white tracking-wide">
                            {logo_text}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex space-x-4 ml-4">
                            {actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
                                >
                                    {action.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-white/80 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 md:hidden shadow-2xl border border-white/10">
                    <div className="space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block text-base font-medium text-white hover:text-blurple-light"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-white/10 mt-2">
                            {actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className="block text-center w-full bg-blurple hover:bg-blurple-light text-white font-bold py-3 rounded-full transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {action.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
