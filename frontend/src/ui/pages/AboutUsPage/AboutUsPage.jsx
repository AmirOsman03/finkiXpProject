import React from 'react';
import {FaGraduationCap, FaUsers, FaRocket, FaHeart} from 'react-icons/fa';


const AboutUsPage = () => {
    const teamMembers = [
        {
            name: "Isen Osman",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/166142342?v=4",
            description: "passionate about modern web technologies, clean design, and creating seamless user experiences through code and creativity.",
            github: "https://github.com/Isen-Osman"
        },
        {
            name: "Amir Osman",
            role: "Software Engineer",
            avatar: "https://avatars.githubusercontent.com/u/151637627?v=4",
            description: "Passionate about full-stack development, clean code, and building meaningful software.",
            github: "https://github.com/AmirOsman03"
        },
    ];

    const features = [
        {
            icon: <FaGraduationCap className="text-3xl text-blue-600"/>,
            title: "Educational Excellence",
            description: "We believe in the power of education to transform lives and create opportunities."
        },
        {
            icon: <FaUsers className="text-3xl text-purple-600"/>,
            title: "Community Driven",
            description: "Building a supportive community where students can learn, grow, and succeed together."
        },
        {
            icon: <FaRocket className="text-3xl text-green-600"/>,
            title: "Innovation First",
            description: "Constantly innovating to provide the best learning experience and tools for our users."
        },
        {
            icon: <FaHeart className="text-3xl text-red-600"/>,
            title: "Student Focused",
            description: "Every feature and decision is made with our students' success in mind."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        About <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Finki XP</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're passionate about revolutionizing the way students learn and interact with educational
                        content.
                        Our platform combines cutting-edge technology with proven educational methodologies to create an
                        engaging and effective learning experience.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            To empower students with innovative tools and resources that make learning more accessible,
                            engaging, and effective. We believe every student deserves the opportunity to excel in their
                            educational journey.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index}
                                 className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The passionate individuals behind Finki XP who are dedicated to creating the best
                            learning experience for our students.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <a 
                                key={index}
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
                            >
                                <div className="mb-6">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-4 text-lg">{member.role}</p>
                                <p className="text-gray-600 text-base leading-relaxed">{member.description}</p>
                                <div className="mt-4 text-blue-600 text-sm font-medium">
                                    View GitHub Profile →
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Have questions or suggestions? We'd love to hear from you!
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="opacity-90">contact@finkixp.com</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Location</h3>
                                <p className="opacity-90">Skopje, Macedonia</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Support</h3>
                                <p className="opacity-90">Available 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;