import React from 'react';
import Scene from './Scene';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Scene />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center">

                {/* Text Content */}
                <div className="w-full max-w-4xl pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight mb-8 drop-shadow-sm">
                            Where Learning <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Comes Alive
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
                            Experience a world of creativity, innovation, and fun.
                            Join the next generation of thinkers and dreamers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto">
                            <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                                Explore Campus
                            </Link>
                            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
                                Watch Video
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
