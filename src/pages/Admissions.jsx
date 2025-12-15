import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Join Our <span className="text-green-600">Community</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">We are excited to welcome new families to KiddoSchool.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Steps */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Admission Process</h2>
                        {[
                            { step: "01", title: "Inquiry", desc: "Fill out the inquiry form or contact our admissions office." },
                            { step: "02", title: "School Tour", desc: "Visit our campus to see our facilities and meet our teachers." },
                            { step: "03", title: "Application", desc: "Submit the completed application form with required documents." },
                            { step: "04", title: "Assessment", desc: "A friendly interaction/assessment with the child." },
                            { step: "05", title: "Enrollment", desc: "Receive offer letter and complete admission formalities." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 items-start p-4 rounded-xl hover:bg-white hover:shadow-md transition-all"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xl">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* FAQ or Info */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Documents Required</h2>
                        <ul className="space-y-4">
                            {[
                                "Birth Certificate of the child",
                                "Passport size photographs (Child & Parents)",
                                "Immunization Record",
                                "Previous School Report Card (if applicable)",
                                "Address Proof",
                                "ID Proof of Parents"
                            ].map((doc, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500">✓</span>
                                    {doc}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 p-6 bg-blue-50 rounded-2xl">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Need Help?</h3>
                            <p className="text-blue-700 mb-4">Our admissions team is here to assist you.</p>
                            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Contact Admissions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
