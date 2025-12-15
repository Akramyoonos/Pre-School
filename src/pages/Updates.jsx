import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { updatesData } from '../data/updates';

const Updates = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredActivities = activeTab === 'all'
        ? updatesData
        : updatesData.filter(item => item.type === activeTab);

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Monthly <span className="text-pink-600">Updates</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Catch up on the latest happenings, events, and memories from our school.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    {['all', 'video', 'post'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full font-bold capitalize transition-all ${activeTab === tab
                                    ? 'bg-pink-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {tab === 'all' ? 'All Updates' : tab + 's'}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredActivities.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="relative h-48 overflow-hidden group">
                                <img
                                    src={item.type === 'video' ? item.thumbnail : item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg">
                                            <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                                    {item.date}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${item.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {item.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                                <button className="text-pink-600 font-bold hover:text-pink-700 flex items-center gap-1 text-sm">
                                    Read More <span className="text-lg">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Updates;
