import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { Search, Menu, X } from "lucide-react";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";
import TextRevealButton from "../Animation/TextRevealButton";
import { useFavorites } from "./FavoritesContext";
import { useNavigate, useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";
import UserProfile from "./UserSignin";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { favorites } = useFavorites();
  const { user, logout, openLogin } = useAuth();
  const { getTotalItems } = useCart();
  const totalCartItems = getTotalItems();

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const goToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToShop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("shop-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document
        .getElementById("shop-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("about-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document
        .getElementById("about-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document
        .getElementById("contact-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <nav className="w-full lg:w-[90%] mx-auto mt-2 lg:mt-5 sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex justify-between items-center h-[8vh] px-6 border-b border-gray-200">
        {/* Logo */}
        <div
          onClick={goToHome}
          className="cursor-pointer flex items-center gap-2"
        >
          <FcShop className="text-4xl" />
          <h1 className="text-2xl font-bold">
            <TextRevealButton text="Khmer Fresh" />
          </h1>
        </div>

        {/* Page Links */}
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
          <li
            onClick={goToAbout}
            className="hover:border-b-2 hover:border-green-500 hover:text-green-500 duration-200 cursor-pointer font-bold"
          >
            About
          </li>
          <button
            onClick={goToContact}
            className="hover:border-b-2 hover:border-green-500 hover:text-green-500 duration-200 cursor-pointer font-bold"
          >
            Contact
          </button>
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

        {/* Icons and Auth */}
        <div className="flex gap-8 text-xl items-center">
          {/* Favorites */}
          <div
            onClick={goToFavorites}
            className="bg-yellow-500 rounded-full p-3 hover:bg-yellow-600 cursor-pointer text-white relative"
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
            onClick={() => navigate("/cart")}
            className="bg-yellow-500 rounded-full p-3 hover:bg-yellow-600 cursor-pointer text-white relative"
          >
            <TiShoppingCart className="text-xl" />
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {totalCartItems}
              </span>
            )}
          </div>

          {/* Sign In / User Profile */}
          {user ? (
            <UserProfile user={user} onLogout={logout} />
          ) : (
            <button
              onClick={openLogin}
              className="p-2 px-4 rounded-lg bg-red-400 hover:bg-red-500 text-white font-bold cursor-pointer"
            >
              Sign In
            </button>
          )}

          {/* Signup Modal */}
          {showSignup && (
            <SignUp
              onClose={() => setShowSignup(false)}
              onSwitchToLogin={() => {
                setShowSignup(false);
                openLogin();
              }}
            />
          )}
        </div>
      </div>

      {/* MOBILE / TABLET NAVBAR */}
      <div className="lg:hidden">
        {/* Top bar */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FcShop className="text-4xl" />
            <h1 className="text-xl font-bold">
              <TextRevealButton text="Khmer Fresh" />
            </h1>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div
              onClick={() => navigate("/cart")}
              className="bg-yellow-500 rounded-full p-2 hover:bg-yellow-600 cursor-pointer text-white relative"
            >
              <TiShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
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
        <div
          className={`${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-300 bg-white`}
        >
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
              <button
                onClick={goToHome}
                className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg"
              >
                Home
              </button>
              <br />
              <button
                onClick={goToShop}
                className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg"
              >
                Shop
              </button>
              <li
                onClick={goToAbout}
                className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg"
              >
                About
              </li>
              <button
                onClick={goToContact}
                className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg"
              >
                Contact
              </button>
              <li
                onClick={goToFavorites}
                className="py-2 px-4 hover:bg-green-50 hover:text-green-500 cursor-pointer duration-200 font-bold rounded-lg flex justify-between items-center"
              >
                Favorites
                {favorites.length > 0 && (
                  <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                    {favorites.length}
                  </span>
                )}
              </li>
            </ul>

            {/* Sign In Button / User Profile */}
            {user ? (
              <div className="pt-2">
                <UserProfile user={user} onLogout={logout} />
              </div>
            ) : (
              <button
                onClick={openLogin}
                className="w-full py-2 px-4 rounded-lg bg-red-400 hover:bg-red-500 text-white font-bold"
              >
                Sign In
              </button>
            )}

            {/* Signup Modal */}
            {showSignup && (
              <SignUp
                onClose={() => setShowSignup(false)}
                onSwitchToLogin={() => {
                  setShowSignup(false);
                  openLogin();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
