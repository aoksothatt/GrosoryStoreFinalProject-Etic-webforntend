import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { Search } from "lucide-react";
import { TiShoppingCart } from "react-icons/ti";
import { Menu, X } from "lucide-react";
import TextRevealButton from "../Animation/TextRevealButton";
import { FaHeart } from "react-icons/fa6";
import { useFavorites } from "./FavoritesContext";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites } = useFavorites(); // Get favorites from context
  const navigate = useNavigate(); // For navigation
  const location = useLocation();
  const [authModal, setAuthModal] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const goToFavorites = () => {
    navigate("/favorites"); // Navigate to favorites page
  };

  const goToHome = () => {
    navigate("/"); // Add this function
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when navigating
  };

  const goToShop = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate first
      navigate("/");
      setTimeout(() => {
        document.getElementById("shop-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      // If already on home page, just scroll
      document.getElementById("shop-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToContact = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate first
      navigate("/");
      setTimeout(() => {
        document.getElementById("contect-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      // If already on home page, just scroll
      document.getElementById("contect-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full lg:w-[90%] mx-auto mt-2 lg:mt-5 sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-around h-[7vh] items-center border-b-2 border-gray-200">
        {/* Logo */}
        <div onClick={goToHome}>
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
              onClick={goToHome}
              className="hover:border-b-2 hover:border-green-500 hover:text-green-500 cursor-pointer duration-200 font-bold"
            >
              Home
            </button>
            <button
              onClick={goToShop}
              className="hover:border-b-2 hover:border-green-500 hover:text-green-500 cursor-pointer duration-200 font-bold"
            >
              Shop
            </button>
            <li className="hover:border-b-2 hover:border-green-500 hover:text-green-500 duration-200 cursor-pointer font-bold">
              About
            </li>
            <button
              onClick={goToContact}
              className="hover:border-b-2 hover:border-green-500 hover:text-green-500 duration-200 cursor-pointer font-bold"
            >
              Contact
            </button>
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
          <div
            onClick={goToFavorites}
            className="bg-yellow-500 rounded-full p-3 hover:bg-yellow-600 cursor-pointer text-white relative"
          >
            <FaHeart />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {favorites.length}
              </span>
            )}
          </div>
          <div className="bg-yellow-500 rounded-full p-3 hover:bg-yellow-600 cursor-pointer text-white">
            <TiShoppingCart />
          </div>
          <button
            onClick={() => setAuthModal("login")}
            className="p-2 px-4 rounded-lg bg-red-400 hover:bg-red-500 text-white font-bold cursor-pointer"
          >
            SignIn
          </button>
          {/* Render modals based on authModal state */}
          {authModal === "login" && (
            <Login
              onClose={() => setAuthModal(null)}
              onSwitchToSignup={() => setAuthModal("signup")}
            />
          )}

          {authModal === "signup" && (
            <SignUp
              onClose={() => setAuthModal(null)}
              onSwitchToLogin={() => setAuthModal("login")}
            />
          )}
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

              <li
                onClick={goToFavorites}
                className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg flex justify-between items-center"
              >
                Favorites
                {favorites.length > 0 && (
                  <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {favorites.length}
                  </span>
                )}
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
