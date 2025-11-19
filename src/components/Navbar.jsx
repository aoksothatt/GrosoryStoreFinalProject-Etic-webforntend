import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { Search, Menu, X } from "lucide-react";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";
import TextRevealButton from "../Animation/TextRevealButton";
import { useFavorites } from "./FavoritesContext";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { useCart } from "./CartContext";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null);

  const { favorites } = useFavorites();
  const { getTotalItems } = useCart();
  const totalCartItems = getTotalItems();

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const goTo = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full lg:w-[90%] mx-auto mt-2 lg:mt-5 sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex justify-between items-center h-[8vh] px-6 border-b border-gray-200">
        
        {/* Logo */}
        <div onClick={() => goTo("home-section")} className="cursor-pointer flex items-center gap-2">
          <FcShop className="text-4xl" />
          <h1 className="text-2xl font-bold">
            <TextRevealButton text="Khmer Fresh" />
          </h1>
        </div>

        {/* Links */}
        <ul className="flex gap-8 text-lg font-bold">
          <button onClick={() => goTo("home-section")} className="hover:text-green-500">Home</button>
          <button onClick={() => goTo("shop-section")} className="hover:text-green-500">Shop</button>
          <button onClick={() => goTo("about-section")} className="hover:text-green-500">About</button>
          <button onClick={() => goTo("contact-section")} className="hover:text-green-500">Contact</button>
        </ul>

        {/* Search */}
        <div className="relative w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:ring-2 focus:ring-green-300 outline-none"
          />
        </div>

        {/* Icons & Login */}
        <div className="flex items-center gap-6">

          {/* Favorites */}
          <div className="relative cursor-pointer bg-yellow-500 p-3 rounded-full text-white hover:bg-yellow-600"
            onClick={() => navigate("/favorites")}
          >
            <FaHeart className="text-xl" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </div>

          {/* Cart */}
          <div
            className="relative cursor-pointer bg-yellow-500 p-3 rounded-full text-white hover:bg-yellow-600"
            onClick={() => navigate("/cart")}
          >
            <TiShoppingCart className="text-xl" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </div>

          {/* Sign In */}
          <button
            onClick={() => setAuthModal("login")}
            className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 font-bold"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET NAVBAR */}
      <div className="lg:hidden">
        
        {/* Top bar */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FcShop className="text-4xl" />
            <h1 className="text-xl font-bold"><TextRevealButton text="Khmer Fresh" /></h1>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <div 
              onClick={() => navigate("/cart")}
              className="relative bg-yellow-500 p-2 rounded-full text-white cursor-pointer hover:bg-yellow-600"
            >
              <TiShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </div>

            {/* Menu */}
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`${isMenuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-300 bg-white`}>
          
          {/* Search */}
          <div className="px-4 py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-2 rounded-full border-2 border-gray-200"
              />
            </div>

            {/* Nav Buttons */}
            <ul className="space-y-3 text-lg font-bold">
              <button onClick={() => goTo("home-section")} className="block py-2 px-2 hover:bg-green-100 rounded-lg">Home</button>
              <button onClick={() => goTo("shop-section")} className="block py-2 px-2 hover:bg-green-100 rounded-lg">Shop</button>
              <button onClick={() => goTo("about-section")} className="block py-2 px-2 hover:bg-green-100 rounded-lg">About</button>
              <button onClick={() => goTo("contact-section")} className="block py-2 px-2 hover:bg-green-100 rounded-lg">Contact</button>

              {/* Favorites */}
              <button
                onClick={() => navigate("/favorites")}
                className="flex justify-between items-center py-2 px-2 hover:bg-green-100 rounded-lg"
              >
                Favorites
                {favorites.length > 0 && (
                  <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                    {favorites.length}
                  </span>
                )}
              </button>
            </ul>

            {/* Sign In */}
            <button
              onClick={() => setAuthModal("login")}
              className="w-full mt-4 py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-500"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* AUTH MODALS */}
      {authModal === "login" && (
        <Login onClose={() => setAuthModal(null)} onSwitchToSignup={() => setAuthModal("signup")} />
      )}

      {authModal === "signup" && (
        <SignUp onClose={() => setAuthModal(null)} onSwitchToLogin={() => setAuthModal("login")} />
      )}
    </nav>
  );
};

export default Navbar;
