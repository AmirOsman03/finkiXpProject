import React from 'react';
import {Link, useNavigate} from "react-router";
import {FaGraduationCap} from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth.js";

const pages = [
    {
        name: 'Home',
        path: '/',
        public: true  // Always visible
    },
    {
        name: 'Subjects',
        path: '/subject',
        public: false  // Only visible when logged in
    },
    {
        name: 'Tasks',
        path: '/tasks',
        public: false
    },
    {
        name: 'Leaderboard',
        path: '/leaderboard',
        public: false
    },
    {
        name: 'About Us',
        path: "/aboutUs",
        public: true
    },
    {
        name: 'Me',
        path: "/me",
        public: false
    },
];

const Navbar = () => {
    const {isLoggedIn, logout} = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/');
    };

    // Filter pages based on authentication status
    const filteredPages = pages.filter(page =>
        page.public || (isLoggedIn && !page.public)
    );

    return (
        <nav
            className="mx-3 mt-3 rounded-full shadow-lg bg-white/80 backdrop-blur-md border border-gray-100 flex items-center px-6 py-3 min-h-[64px]">
            {/* Logo */}
            <div
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full p-3 px-6 shadow-lg transition-all duration-300 transform">
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
                    {filteredPages.map((page) => (
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

            {/* Auth Button */}
            <div className="ml-4">
                {isLoggedIn ? (
                    <button
                        onClick={handleLogoutClick}
                        className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleLoginClick}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;