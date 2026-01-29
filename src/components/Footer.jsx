import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const iconMap = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github
};

const Footer = ({ content }) => {
    const { contact, social_links } = content;

    return (
        <footer className="bg-slate-50 pt-20 pb-10">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="mb-8 md:mb-0">
                        <span className="text-xl font-bold text-slate-900 mb-4 block">CruseTech</span>
                        <div className="flex space-x-6">
                            {social_links.map((link) => {
                                const Icon = iconMap[link.icon] || Github;
                                return (
                                    <a key={link.label} href={link.href} className="text-slate-400 hover:text-slate-900 transition-colors">
                                        <Icon size={20} />
                                        <span className="sr-only">{link.label}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="text-right">
                        <a href={`mailto:${contact.email}`} className="text-slate-500 hover:text-blurple transition-colors font-medium">
                            {contact.email}
                        </a>
                        <p className="text-slate-400 text-sm mt-2">{contact.phone}</p>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Cruse Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
