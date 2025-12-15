import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* School Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">K</div>
                            <span className="text-2xl font-bold text-white tracking-tight">Kiddo<span className="text-blue-500">School</span></span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Nurturing young minds to become the leaders of tomorrow through creativity, innovation, and holistic development.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {/* Social Placeholders */}
                            <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <span>f</span>
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <span>t</span>
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <span>i</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
                            <li><Link to="/updates" className="hover:text-white transition-colors">Monthly Updates</Link></li>
                            <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">📍</span>
                                <span>123 Learning Lane,<br />Education City, ED 45678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">📞</span>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">✉️</span>
                                <span>admissions@kiddoschool.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} KiddoSchool. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
