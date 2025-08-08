import React from 'react';
import {Link, useNavigate} from "react-router";
import {FaGraduationCap, FaUserCircle} from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth.js";
import useUserDetails from "../../../../hooks/useUserDetails.js";

const pages = [
    {
        name: 'Home',
        path: '/',
        public: true
    },
    {
        name: 'Subjects',
        path: '/subject',
        public: false
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
];

const Navbar = () => {
    const {isLoggedIn, logout} = useAuth();
    const user = useUserDetails();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/');
    };

    const filteredPages = pages.filter(page =>
        page.public || (isLoggedIn && !page.public)
    );

    return (
        <nav className="mx-3 mt-3 rounded-full shadow-lg bg-white/80 backdrop-blur-md border border-gray-100 flex items-center px-6 py-3 min-h-[64px]">
            {/* Logo */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full p-3 px-6 shadow-lg transition-all duration-300 transform">
                <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-white text-xl"/>
                </div>
                <Link to="/" className="text-white font-bold text-lg tracking-wide">
                    Finki XP
                </Link>
            </div>

            {/* Navigation Links */}
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

            {/* User Info & Auth Button */}
            <div className="flex items-center gap-4">
                {isLoggedIn && user && (
                    <div
                        onClick={() => navigate('/me')}
                        className="flex items-center gap-3 bg-blue-50 rounded-full px-4 py-2 border border-blue-100 shadow-sm hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
                        <FaUserCircle className="text-blue-600 text-xl" />
                        <div className="flex flex-col items-start">
                            <span className="text-blue-800 font-medium text-sm leading-tight">{user.username}</span>
                            <span className="text-blue-600 font-bold text-xs">Level {user.level || 1}</span>
                        </div>
                    </div>
                )}

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