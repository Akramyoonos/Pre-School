import React from 'react';
import Hero from '../components/Hero';
import UpdatesPreview from '../components/UpdatesPreview';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />

            <section className="py-20 px-4 text-center bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose KiddoSchool?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-5xl mb-4">🎨</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Creative Arts</h3>
                            <p className="text-gray-600">Unleashing potential through music, painting, and drama.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">STEM Education</h3>
                            <p className="text-gray-600">Building the future with robotics, coding, and science.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-5xl mb-4">🌱</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Eco Awareness</h3>
                            <p className="text-gray-600">Teaching sustainability and love for our planet.</p>
                        </div>
                    </div>
                </div>
            </section>

            <UpdatesPreview />
        </div>
    );
};

export default Home;
