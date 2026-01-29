import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logo_text, links, actions } = content;

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {logo_text}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 hover:text-accent font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex space-x-4 ml-4">
                            {actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${action.type === 'primary'
                                            ? 'bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg'
                                            : 'text-primary hover:bg-gray-50'
                                        }`}
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
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 pb-2 border-t border-gray-100 mt-2 flex flex-col space-y-2 px-3">
                            {actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className={`block text-center px-4 py-2 rounded-lg font-medium ${action.type === 'primary'
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-50 text-primary'
                                        }`}
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
