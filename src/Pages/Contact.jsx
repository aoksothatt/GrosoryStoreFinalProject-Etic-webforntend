import React from "react";
import { FcShop } from "react-icons/fc";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="w-full max-w-[1200px] mx-auto px-4"
      
    >
    

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
            <li className="pt-2">Phnom Penh,YKPB(271),St 160</li>
            <li className="pt-2">897-234-3445</li>
            <li className="pt-2">Freshfood3455@gmail.com</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;
