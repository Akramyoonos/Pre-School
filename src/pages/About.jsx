import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">About <span className="text-blue-600">KiddoSchool</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Nurturing young minds to become the leaders of tomorrow.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="School Building"
                            className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            At KiddoSchool, we believe that every child is unique and capable of extraordinary things. Our mission is to provide a safe, stimulating, and inclusive environment where children can explore, discover, and grow.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We focus on holistic development, combining academic excellence with emotional intelligence, physical well-being, and creative expression.
                        </p>
                    </motion.div>
                </div>

                <div className="bg-white rounded-3xl p-10 shadow-xl mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Curiosity", icon: "🔍", desc: "Encouraging questions and exploration." },
                            { title: "Kindness", icon: "❤️", desc: "Fostering empathy and respect for others." },
                            { title: "Resilience", icon: "💪", desc: "Teaching the courage to try again." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
