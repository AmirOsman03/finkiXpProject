import React from 'react';
import {Link} from "react-router";

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
        <nav
            className=" mx-3 my-3 rounded-full shadow-lg bg-white/80 backdrop-blur-md border border-gray-100 flex items-center justify-between px-6 py-3 min-h-[64px]">
            {/* Logo */}
            <div className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 rounded-full p-2 px-5">
                <Link to="/" className="text-white font-bold">
                    Finki XP
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4">
                {pages.map((page) => (
                    <Link
                        key={page.path}
                        to={page.path}
                        className="text-gray-700 hover:text-blue-700 font-medium px-3 py-2 rounded-lg transition-colors duration-150"
                    >
                        {page.name}
                    </Link>
                ))}
            </div>

            {/* Search Bar */}
            <form className="relative w-48 sm:w-64">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
                />
            </form>
        </nav>
    );
};

export default Navbar;