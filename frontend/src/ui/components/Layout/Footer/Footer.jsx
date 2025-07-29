import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import {Link} from "react-router";

const Footer = () => {
    return (
        <footer className="bg-blue-900">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div>
                            {/* Logo */}
                            <div className="flex items-center">
                                <Link to="/" className="text-white font-bold text-xl hover:opacity-75">
                                    Finki XP
                                </Link>
                            </div>
                        </div>

                        <p className="mt-4 max-w-xs text-gray-200">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                            molestias.
                        </p>

                        <ul className="mt-8 flex gap-6 text-white">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <FaFacebook className={"text-2xl"}/>
                                </a>

                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <FaInstagram className={"text-2xl"}/>
                                </a>

                            </li>

                            <li>
                                <a
                                    href="https://github.com/AmirOsman03"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <FaGithub className={"text-2xl"}/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 text-white">
                        <div>
                            <p className="text-xl text-white">Services</p>

                            <ul className="mt-6 space-y-4 text-sm text-white">
                                <li>
                                    <a href="#" className="text-gray-200 transition hover:opacity-75">
                                        1on1 Coaching
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Company Review
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        HR Consulting
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white transition hover:opacity-75">
                                        SEO Optimisation
                                    </a>
                                </li>
                            </ul>

                        </div>

                        {/* Company */}
                        <div>
                            <p className="text-lg text-white">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Accounts Review
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Helpful Links */}
                        <div>
                            <p className="text-lg text-white">Helpful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <p className="text-lg text-white">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Accessibility
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Returns Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Refund Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="text-gray-200 transition hover:opacity-75">
                                        Hiring-3 Statistics
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; 2022. Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;