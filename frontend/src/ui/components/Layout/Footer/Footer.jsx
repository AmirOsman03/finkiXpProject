import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaGraduationCap} from "react-icons/fa";
import {Link} from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-purple-900">
            <div className="mx-auto max-w-6xl px-6 py-12">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo and Description */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-full">
                            <FaGraduationCap className="text-white text-xl"/>
                        </div>
                        <div>
                            <Link to="/" className="text-white font-bold text-xl hover:opacity-80 transition-opacity">
                                Finki XP
                            </Link>
                            <p className="text-gray-300 text-sm mt-1">
                                LevelUp – Учиш. Играј. Напредувај.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-8 text-gray-300">
                        <Link to="/" className="hover:text-white transition-colors">
                            Почетна
                        </Link>
                        <Link to="/subjects" className="hover:text-white transition-colors">
                            Предмети
                        </Link>
                        <Link to="/tasks" className="hover:text-white transition-colors">
                            Задачи
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            title="Facebook"
                        >
                            <FaFacebook className="text-xl"/>
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            title="Instagram"
                        >
                            <FaInstagram className="text-xl"/>
                        </a>
                        <a
                            href="https://github.com/AmirOsman03"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            title="GitHub"
                        >
                            <FaGithub className="text-xl"/>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-8"></div>

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm">
                    <p>&copy; 2024 Finki XP. Сите права се задржани.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;