// Favorites.js
import React from "react";
import { useFavorites } from "./FavoritesContext";
import Card from "./Card";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  const handleRemove = (item) => {
    toggleFavorite(item); // This will remove it since it's already a favorite
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-4 text-gray-600 hover:text-green-500 font-semibold"
      >
        <IoArrowBack /> Back to Home
      </button>
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center">
          No favorites yet. Start adding items!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="relative">
              <Card
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                category={item.category}
              />
              {/* Remove button overlay */}
              <button
                onClick={() => handleRemove(item)}
                className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg z-10"
              >
                <MdDelete size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
