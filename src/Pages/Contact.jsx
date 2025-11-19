import React from "react";
import { FcShop } from "react-icons/fc";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="w-full max-w-[1200px] mx-auto px-4"
      
    >
      {/* ===== TOP CONTACT BOX ===== */}
      <div className="
        w-full 
        bg-gradient-to-r from-blue-300 to-green-300 
        mt-6 rounded-2xl 
        flex flex-col items-center text-center 
        py-10
      ">
        <h4 className="font-black bg-gradient-to-r from-yellow-800 to-black bg-clip-text text-transparent text-3xl sm:text-4xl mb-4">
          CONTACT US
        </h4>

        <p className="text-emerald-700 font-bold text-base sm:text-lg md:text-xl max-w-[700px] mb-6">
          Contact us to easily order any food or juice and get some special promotions.
          We’ll get back to you quickly.
        </p>

        {/* Email Input + Subscribe Btn */}
       <div className="w-full flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-0 max-w-[500px]">
  <input
    type="email"
    placeholder="Freshfood3455@gmail.com"
    className="
      w-full 
      placeholder-gray-400 
      h-[48px] px-4 
      rounded-lg sm:rounded-l-lg sm:rounded-r-none
      bg-white border border-gray-300
      focus:outline-none focus:ring-2 focus:ring-green-500
    "
  />

  <button
    className="
      w-full sm:w-auto 
      h-[48px]
      bg-gradient-to-r from-green-600 to-blue-400
      text-white font-semibold px-6 
      rounded-lg sm:rounded-r-lg sm:rounded-l-none
      hover:opacity-90
    "
  >
    Subscribe
  </button>
</div>

      </div>

      {/* ===== BOTTOM FOOTER SECTION ===== */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
        
        {/* Logo + Socials */}
        <div>
          <div className="flex items-center gap-2">
            <FcShop className="text-4xl" />
            <h5 className="bg-gradient-to-r from-green-600 to-blue-400 bg-clip-text text-transparent font-bold text-xl">
              KHMER FRESH
            </h5>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 items-center mt-6">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-blue-600 text-[22px]" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="text-pink-500 text-[22px]" />
            </a>
            <a href="https://x.com/" target="_blank">
              <FaTwitter className="text-blue-400 text-[22px]" />
            </a>
            <a href="https://telegram.org/" target="_blank">
              <FaTelegram className="text-cyan-500 text-[22px]" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg">Our Services</h3>
          <ul className="mt-3 text-sm text-gray-700">
            <li className="pt-2">Pricing</li>
            <li className="pt-2">Tracking</li>
            <li className="pt-2">Report a Bug</li>
            <li className="pt-2">Terms of Service</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg">Our Company</h3>
          <ul className="mt-3 text-sm text-gray-700">
            <li className="pt-2">Reporting</li>
            <li className="pt-2">Get in Touch</li>
            <li className="pt-2">Management</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold text-lg">Address</h3>
          <ul className="mt-3 text-sm text-gray-700">
            <li className="pt-2">371 Steung Mean Chey</li>
            <li className="pt-2">897-234-3445</li>
            <li className="pt-2">Freshfood3455@gmail.com</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;
