import React from 'react';

const ContactForm = () => {
    return (
        <div id="contact" className="w-full max-w-md mx-auto bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Join Our Family</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Jane Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                        <option>Kindergarten</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        rows="3"
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Tell us about your child..."
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
