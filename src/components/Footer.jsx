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
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="mb-6 md:mb-0">
                        <span className="text-xl font-bold text-slate-900 block">CruseTech</span>
                    </div>

                    <div className="text-right">
                        <a href={`mailto:${contact.email}`} className="text-slate-500 hover:text-blurple transition-colors font-medium">
                            {contact.email}
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 text-sm text-slate-400 text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Cruse Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
