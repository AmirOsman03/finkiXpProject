import React from 'react';
import CountUp from "react-countup";
import {FaCheckCircle, FaPlay} from "react-icons/fa";
import {MdEmojiEvents, MdOutlineMilitaryTech, MdOutlineTask} from "react-icons/md";
import {FaPeopleGroup, FaCrown, FaStar, FaMedal, FaTrophy} from "react-icons/fa6";

const BADGES = [
    {
        icon: <FaCrown className="text-4xl text-yellow-500" />, 
        name: 'Champion',
        description: 'Топ 1 на табелата за една недела.'
    },
    {
        icon: <FaStar className="text-4xl text-purple-500" />, 
        name: 'Rising Star',
        description: 'Решете 10 задачи во еден ден.'
    },
    {
        icon: <FaMedal className="text-4xl text-blue-500" />, 
        name: 'Task Master',
        description: 'Заврши 100 задачи.'
    },
    {
        icon: <FaTrophy className="text-4xl text-green-500" />, 
        name: 'Streak Winner',
        description: 'Решавајте задачи 7 дена по ред.'
    },
    {
        icon: <MdEmojiEvents className="text-4xl text-orange-500" />, 
        name: 'Event Winner',
        description: 'Победете на специјален настан или натпревар.'
    },
];

const TESTIMONIALS = [
    {
        name: 'Ивана Петровска',
        quote: 'finkiXP ми помогна да се подготвам за испитот многу полесно и забавно! Беџовите се супер мотивација.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Александар Јованов',
        quote: 'Лидербордот ме натера да решавам повеќе задачи секој ден. Одлична платформа!',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Марија Стојановска',
        quote: 'Ми се допаѓа што можам да видам напредок и да се натпреварувам со другите.',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
];

const HomePage = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center px-4 mt-5">

            {/* Hero Section */}
            <section className="w-full flex flex-col items-center justify-center py-16 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
                    {/* Abstract SVG background */}
                    <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="400" cy="200" rx="400" ry="200" fill="url(#paint0_radial)"/>
                        <defs>
                            <radialGradient id="paint0_radial" cx="0" cy="0" r="1"
                                            gradientTransform="translate(400 200) scale(400 200)"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#a5b4fc"/>
                                <stop offset="1" stopColor="#f0abfc" stopOpacity="0.5"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-blue-800 mb-4 text-center drop-shadow-lg tracking-tight">
                    Добредојде на <span className="text-purple-500">finkiXP</span>! <span
                    className="inline-block animate-bounce">🎓</span>
                </h1>
                <p className="relative z-10 text-xl md:text-2xl text-gray-700 max-w-2xl text-center mb-8 font-medium">
                    Платформа каде што студентите можат да решаваат минати испитни задачи, да собираат XP, да добиваат
                    беџови и да се качуваат на лидербордот!
                </p>
                <div className="relative z-10 flex gap-6 mt-4">
                    <a
                        href="/tasks"
                        className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-blue-800 hover:to-purple-600 transition-all duration-200 text-lg font-semibold"
                    >
                        <FaPlay/>
                        Почни со задачи
                    </a>
                    <a
                        href="/leaderboard"
                        className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-purple-300 text-purple-700 rounded-full shadow-lg hover:bg-purple-50 hover:border-purple-500 transition-all duration-200 text-lg font-semibold"
                    >
                        <MdEmojiEvents/>
                        Погледни лидерборд
                    </a>
                </div>
            </section>

            {/* How it works Section */}
            <section className="my-16 w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Како функционира?</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div
                        className="flex-1 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center transition-transform hover:scale-105">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            <FaCheckCircle className="text-5xl text-blue-700"/>
                        </div>
                        <p className="font-bold text-blue-700 text-xl mb-2">+10 XP</p>
                        <p className="text-gray-600">за секоја точна задача</p>
                    </div>
                    <div
                        className="flex-1 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center transition-transform hover:scale-105">
                        <div className="bg-purple-100 p-4 rounded-full mb-4">
                            <MdOutlineMilitaryTech className="text-5xl text-purple-700" />
                        </div>
                        <p className="font-bold text-purple-700 text-xl mb-2">Бeџови</p>
                        <p className="text-gray-600">кога достигнуваш milestone</p>
                    </div>
                    <div
                        className="flex-1 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center transition-transform hover:scale-105">
                        <div className="bg-yellow-100 p-4 rounded-full mb-4">
                            <MdEmojiEvents className="text-5xl text-yellow-700" />
                        </div>
                        <p className="font-bold text-yellow-700 text-xl mb-2">Лидерборд</p>
                        <p className="text-gray-600">се натпреваруваш со други</p>
                    </div>
                </div>
            </section>

            {/* Featured Badges Section */}
            <section className="w-full max-w-5xl mx-auto my-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Препорачани Бeџови</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {BADGES.map((badge, idx) => (
                        <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                            <div className="mb-3">{badge.icon}</div>
                            <div className="font-bold text-lg text-gray-800 mb-1">{badge.name}</div>
                            <div className="text-gray-500 text-sm text-center">{badge.description}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-10 text-center my-20">
                <div
                    className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <FaPeopleGroup className="text-5xl text-blue-700"/>
                    </div>
                    <h2 className="text-4xl font-extrabold text-blue-700">
                        <CountUp end={124} duration={4}/>+
                    </h2>
                    <p className="text-gray-700 mt-2 text-lg font-medium">Активни корисници</p>
                </div>
                <div
                    className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
                    <div className="bg-green-100 p-4 rounded-full mb-4">
                        <MdOutlineTask className="text-5xl text-green-700"/>
                    </div>
                    <h2 className="text-4xl font-extrabold text-green-700">
                        <CountUp end={312} duration={4}/>+
                    </h2>
                    <p className="text-gray-700 mt-2 text-lg font-medium">Решени задачи</p>
                </div>
                <div
                    className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
                    <div className="bg-purple-100 p-4 rounded-full mb-4">
                        <MdOutlineMilitaryTech className="text-5xl text-purple-700"/>
                    </div>
                    <h2 className="text-4xl font-extrabold text-purple-700">
                        <CountUp end={47} duration={4}/>+
                    </h2>
                    <p className="text-gray-700 mt-2 text-lg font-medium">Доделени беџови</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full max-w-5xl mx-auto my-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Искуства од студенти</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, idx) => (
                        <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
                            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-200 shadow" />
                            <p className="italic text-gray-700 text-center mb-4">“{t.quote}”</p>
                            <div className="font-bold text-blue-800">{t.name}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;