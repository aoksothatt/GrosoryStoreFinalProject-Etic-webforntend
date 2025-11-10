import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { Search } from "lucide-react";
import { TiShoppingCart } from "react-icons/ti";
import { Menu, X } from "lucide-react";
import TextRevealButton from "../Animation/TextRevealButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full lg:w-[90%] mx-auto mt-2 lg:mt-5 sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-around h-[7vh] items-center border-b-2 border-gray-200">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 p-4">
            <span className="text-5xl">
              <FcShop className="cursor-pointer" />
            </span>
            <TextRevealButton text="Khmer Fresh" />
          </h1>
        </div>

        {/* Page Links */}
        <div>
          <ul className="flex gap-6 p-4">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="hover:border-b-2 hover:border-green-500 hover:text-green-500 cursor-pointer duration-200 font-bold"
            >
              Home
            </button>
            <button
              onClick={() => {
                document.getElementById("shop-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hover:border-b-2 hover:border-green-500 hover:text-green-500 cursor-pointer duration-200 font-bold"
            >
              Shop
            </button>
            <li className="hover:border-b-2 hover:border-green-500 hover:text-green-500 duration-200 cursor-pointer font-bold">
              About
            </li>
            <li className="hover:border-b-2 hover:border-green-500 hover:text-green-500 duration-200 cursor-pointer font-bold">
              Contact
            </li>
          </ul>
        </div>

        {/* Search */}
        <div className="flex items-center justify-center p-4">
          <div className="w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-10 py-2 text-sm rounded-full border-2 border-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 shadow-lg hover:bg-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Login */}
        <div className="flex gap-8 text-xl items-center">
          <div className="bg-yellow-500 rounded-full p-3 hover:bg-yellow-600 cursor-pointer text-white">
            <TiShoppingCart />
          </div>
          <button className="p-2 px-4 rounded-lg bg-red-400 hover:bg-red-500 text-white font-bold">
            SignIn
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navbar */}
      <div className="lg:hidden">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-3 border-b-2 border-gray-200">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FcShop className="text-4xl" />
            <h1 className="text-xl font-bold">
              <TextRevealButton text="Khmer Fresh" />
            </h1>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart */}
            <div className="bg-yellow-500 rounded-full p-2 hover:bg-yellow-600 cursor-pointer text-white">
              <TiShoppingCart size={20} />
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out bg-white border-b-2 border-gray-200`}
        >
          <div className="px-4 py-4 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              />
            </div>

            {/* Navigation Links */}
            <ul className="space-y-3">
              <li className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg">
                Home
              </li>
              <li className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg">
                Shop
              </li>
              <li className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg">
                About
              </li>
              <li className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg">
                Contact
              </li>
            </ul>

            {/* Sign In Button */}
            <button className="w-full py-2 px-4 rounded-lg bg-red-400 hover:bg-red-500 text-white font-bold">
              SignIn
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
