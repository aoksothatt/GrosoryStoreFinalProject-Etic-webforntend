import React from "react";
import { FaCheckCircle, FaLeaf, FaTruck, FaStar } from "react-icons/fa";

const About = () => {
    return (
        <div className="w-full  bg-white mt-10" id='about-section'>

            {/* ========== HERO SECTION ========== */}
            <section className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 rounded-2xl bg-gradient-to-b from-green-400 to-blue-300 py-20 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold  text-white   drop-shadow-lg">
                    About Us
                </h1>
                <p className="mt-4 text-white max-w-[650px] mx-auto text-lg sm:text-xl">
                    Learn more about our mission, story, and dedication to delivering fresh groceries every day.
                </p>
            </section>

          
            {/* ========== WHY CHOOSE US SECTION ========== */}
            <section className="container sm:w-[95%] lg:w-[90%] mx-auto px-4 mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
                    Why Choose Us?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Box 1 */}
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaLeaf className="text-green-600 text-3xl mb-4" />
                        <h3 className="font-bold text-lg">Fresh & Organic</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            We provide organic and farm-fresh groceries daily.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaTruck className="text-blue-600 text-3xl mb-4" />
                        <h3 className="font-bold text-lg">Fast Delivery</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Quick and reliable delivery right to your doorstep.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaCheckCircle className="text-green-500 text-3xl mb-4" />
                        <h3 className="font-bold text-lg">Quality Guaranteed</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            We carefully inspect every product before delivery.
                        </p>
                    </div>

                    {/* Box 4 */}
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <FaStar className="text-yellow-500 text-3xl mb-4" />
                        <h3 className="font-bold text-lg">Rated 5 Stars</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Trusted by thousands of customers every day.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== IMAGE GALLERY SECTION ========== */}
            <section className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
                        Our Store in Action
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-shot-fresh-fruits-vegetables-market-colorful-background_181624-28420.jpg"
                            className="w-full h-64 sm:h-72 rounded-xl shadow object-cover"
                            alt="gallery"
                        />

                        <img
                            src="https://img.freepik.com/free-photo/smiling-woman-carrying-organic-vegetables-supermarket_329181-19920.jpg"
                            className="w-full h-64 sm:h-72 rounded-xl shadow object-cover"
                            alt="gallery"
                        />

                        <img
                            src="https://img.freepik.com/free-photo/cropped-shot-person-working-grocery-store_181624-46887.jpg"
                            className="w-full h-64 sm:h-72 rounded-xl shadow object-cover"
                            alt="gallery"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
