import React from 'react';
import {Link} from "react-router";
import {FaGraduationCap} from "react-icons/fa";

const pages = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Subjects',
        path: '/subject',
    },
    {
        name: 'Tasks',
        path: '/tasks',
    },
]

const Navbar = () => {
    return (
        <nav className="mx-3 my-3 rounded-full shadow-lg bg-white/80 backdrop-blur-md border border-gray-100 flex items-center px-6 py-3 min-h-[64px]">
            {/* Logo */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full p-3 px-6 shadow-lg transition-all duration-300 transform">
                <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-white text-xl"/>
                </div>
                <Link to="/" className="text-white font-bold text-lg tracking-wide">
                    Finki XP
                </Link>
            </div>

            {/* Navigation Links - Centered and Equally Spaced */}
            <div className="flex-1 flex justify-center">
                <div className="flex gap-8">
                    {pages.map((page) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            className="text-gray-700 hover:text-blue-700 font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:scale-105"
                        >
                            {page.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-48 sm:w-64">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
                />
            </div>
        </nav>
    );
};

export default Navbar;