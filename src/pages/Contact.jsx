import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                            Get in <span className="text-blue-600">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We'd love to hear from you! Whether you have questions about our curriculum, admissions, or just want to say hello, feel free to reach out.
                        </p>

                        <div className="space-y-4 mt-8">
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">📍</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Visit Us</h3>
                                    <p className="text-gray-600">123 Learning Lane, Education City</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">📞</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl">✉️</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">admissions@kiddoschool.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
