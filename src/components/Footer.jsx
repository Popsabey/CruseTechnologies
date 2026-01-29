import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const iconMap = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github
};

const Footer = ({ content }) => {
    const { contact, legal_links, social_links } = content;

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <span className="text-2xl font-bold text-slate-900 mb-4 block">Cruse Technologies</span>
                        <p className="text-gray-500 mb-6 max-w-sm">
                            Building the future of work with intelligent software and applications.
                        </p>
                        <div className="flex space-x-4">
                            {social_links.map((link) => {
                                const Icon = iconMap[link.icon] || Github;
                                return (
                                    <a key={link.label} href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                                        <Icon size={20} />
                                        <span className="sr-only">{link.label}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>{contact.email}</li>
                            <li>{contact.phone}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            {legal_links.map(link => (
                                <li key={link.label}><a href={link.href} className="hover:text-primary transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Cruse Technologies. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Additional logic usually goes here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
