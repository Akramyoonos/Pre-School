import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { updatesData } from '../data/updates';

const UpdatesPreview = () => {
    // Get the latest 3 updates
    const latestUpdates = updatesData.slice(0, 3);

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest <span className="text-pink-600">Happenings</span></h2>
                        <p className="text-xl text-gray-600">See what's been going on at KiddoSchool.</p>
                    </div>
                    <Link to="/updates" className="hidden md:inline-flex items-center gap-2 text-pink-600 font-bold hover:text-pink-700 transition-colors">
                        View All Updates <span>→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestUpdates.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.type === 'video' ? item.thumbnail : item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg">
                                            <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
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
                                <span className={`text-xs font-bold px-2 py-1 rounded uppercase mb-3 inline-block ${item.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                                    }`}>
                                    {item.type}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">{item.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/updates" className="inline-flex items-center gap-2 text-pink-600 font-bold hover:text-pink-700 transition-colors">
                        View All Updates <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default UpdatesPreview;
