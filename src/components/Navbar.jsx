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
<<<<<<< HEAD
  const [authModal, setAuthModal] = useState(null);

  const { favorites } = useFavorites();
  const { getTotalItems } = useCart();
  const totalCartItems = getTotalItems();

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
=======
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const location = useLocation();
  const [showSignup, setShowSignup] = useState(false); // Keep signup separate
  const { user, logout, openLogin } = useAuth(); // Use auth context

  const { getTotalItems } = useCart();
  const totalCartItems = getTotalItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  const goToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac

  const goTo = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
<<<<<<< HEAD
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
=======
      document.getElementById("shop-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById("about-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById("contact-section")?.scrollIntoView({
        behavior: "smooth",
      });
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
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

<<<<<<< HEAD
        {/* Links */}
        <ul className="flex gap-8 text-lg font-bold">
          <button onClick={() => goTo("home-section")} className="hover:text-green-500">Home</button>
          <button onClick={() => goTo("shop-section")} className="hover:text-green-500">Shop</button>
          <button onClick={() => goTo("about-section")} className="hover:text-green-500">About</button>
          <button onClick={() => goTo("contact-section")} className="hover:text-green-500">Contact</button>
        </ul>
=======
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
        </div>
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac

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

<<<<<<< HEAD
        {/* Icons & Login */}
        <div className="flex items-center gap-6">

          {/* Favorites */}
          <div className="relative cursor-pointer bg-yellow-500 p-3 rounded-full text-white hover:bg-yellow-600"
            onClick={() => navigate("/favorites")}
=======
        {/* Icons and Auth */}
        <div className="flex gap-8 text-xl items-center">
          {/* Favorites */}
          <div
            onClick={goToFavorites}
            className="bg-yellow-500 rounded-full p-3 hover:bg-yellow-600 cursor-pointer text-white relative"
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
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
<<<<<<< HEAD
            className="relative cursor-pointer bg-yellow-500 p-3 rounded-full text-white hover:bg-yellow-600"
            onClick={() => navigate("/cart")}
=======
            onClick={() => navigate("/cart")}
            className="bg-yellow-500 rounded-full p-3 hover:bg-yellow-600 cursor-pointer text-white relative"
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
          >
            <TiShoppingCart className="text-xl" />
            {totalCartItems > 0 && (
<<<<<<< HEAD
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
=======
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
                {totalCartItems}
              </span>
            )}
          </div>

<<<<<<< HEAD
          {/* Sign In */}
          <button
            onClick={() => setAuthModal("login")}
            className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 font-bold"
          >
            Sign In
          </button>
=======
          {/* Sign In / User Profile - REPLACED */}
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
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
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
<<<<<<< HEAD
              className="relative bg-yellow-500 p-2 rounded-full text-white cursor-pointer hover:bg-yellow-600"
            >
              <TiShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
=======
              className="bg-yellow-500 rounded-full p-2 hover:bg-yellow-600 cursor-pointer text-white relative"
            >
              <TiShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
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
<<<<<<< HEAD
                onClick={() => navigate("/favorites")}
                className="flex justify-between items-center py-2 px-2 hover:bg-green-100 rounded-lg"
=======
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
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
              >
                Favorites
                {favorites.length > 0 && (
                  <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                    {favorites.length}
                  </span>
                )}
              </button>
            </ul>

<<<<<<< HEAD
            {/* Sign In */}
            <button
              onClick={() => setAuthModal("login")}
              className="w-full mt-4 py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-500"
            >
              Sign In
            </button>
=======
            {/* Sign In Button / User Profile - REPLACED */}
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
>>>>>>> 108b4828a22d5343cb53d686ad6be646830c70ac
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
