import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
    const programs = [
        {
            title: "Kindergarten",
            age: "3-5 Years",
            description: "A playful introduction to learning through games, storytelling, and social interaction.",
            color: "bg-orange-100",
            textColor: "text-orange-600",
            icon: "🧸"
        },
        {
            title: "Primary Years",
            age: "6-10 Years",
            description: "Building strong foundations in literacy, numeracy, and critical thinking.",
            color: "bg-blue-100",
            textColor: "text-blue-600",
            icon: "📚"
        },
        {
            title: "Middle School",
            age: "11-13 Years",
            description: "Preparing students for higher education with specialized subjects and project-based learning.",
            color: "bg-purple-100",
            textColor: "text-purple-600",
            icon: "🔬"
        },
        {
            title: "Arts & Sports",
            age: "All Ages",
            description: "Extracurricular activities including music, dance, swimming, and team sports.",
            color: "bg-green-100",
            textColor: "text-green-600",
            icon: "🎨"
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our <span className="text-purple-600">Programs</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Designed to inspire a lifelong love for learning at every stage.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl ${program.color} hover:shadow-xl transition-shadow`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="text-5xl">{program.icon}</div>
                                <span className={`px-4 py-1 rounded-full bg-white font-bold text-sm ${program.textColor}`}>
                                    {program.age}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                            <p className="text-gray-700 text-lg">{program.description}</p>
                            <button className={`mt-6 px-6 py-2 rounded-lg bg-white font-semibold ${program.textColor} hover:bg-opacity-90 transition-colors`}>
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;
