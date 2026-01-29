import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { logo_text, links, actions } = content;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center rounded-full px-6 py-2 ${scrolled ? '' : 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg'}`}>
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img src={logo} alt="CruseTech Logo" className="w-8 h-8 object-contain" />
                        <span className={`text-xl font-bold tracking-wide ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                            {logo_text}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blurple' : 'text-white/90 hover:text-white'}`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex space-x-4 ml-4">
                            {actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${scrolled ? 'bg-blurple text-white hover:bg-blurple-dark' : 'bg-white/20 hover:bg-white/30 text-white'}`}
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
                            className={`focus:outline-none ${scrolled ? 'text-slate-900' : 'text-white hover:text-white/80'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 md:hidden shadow-2xl border border-slate-100">
                    <div className="space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block text-base font-medium text-slate-700 hover:text-blurple"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-slate-100 mt-2">
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
