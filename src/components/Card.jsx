import React from "react";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useFavorites } from "./FavoritesContext";
import { useCart } from "./CartContext";
import toast from "react-hot-toast";

const Card = ({ img, name, price, category, id }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(500); // State for quantity (weight in grams)

  const handleToggleFavorite = () => {
    const isFav = isFavorite(id);
    toggleFavorite({ id, img, name, price, category }); // Pass the entire item
    if (isFav) {
      toast.error(`${name} removed from favorites`, {
        icon: "💔",
      });
    } else {
      toast.success(`${name} added to favorites!`, {
        icon: "❤️",
      });
    }
  };

  // add to card hadeler
  const handleAddToCart = () => {
    const product = {
      id,
      img,
      name,
      price,
      category,
      quantity: 1,
      weight: quantity, // Store the selected weight
    };
    addToCart(product);
    // Show success message
    toast.success(`${name} (${quantity}g) added to cart!`, {
      icon: "🛒",
    });
  };

  // Handle quantity increase
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 100); // Increase by 100g
  };
  // Handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 100) {
      // Minimum 100g
      setQuantity((prev) => prev - 100); // Decrease by 100g
    }
  };

  return (
    <div
      className="w-80 bg-white shadow-xl rounded-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 10px 30px -12px rgba(0, 0, 0, 0.5)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 5px -2px rgba(0, 0, 0, 0.04)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div
        className="h-74 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center object-cover rounded-xl"
        style={{ backgroundImage: `url('${img}')` }}
      >
        {/* <img className="w-[full] object-cover h-48" src={img} alt={name} /> */}
        <div className="flex justify-end">
          <button className=" hover:text-blue-500">
            {isFavorite(id) ? (
              <IoMdHeart
                className=" text-3xl top-1 right-2 text-red-500 cursor-pointer"
                onClick={handleToggleFavorite}
              />
            ) : (
              <IoIosHeartEmpty
                className=" text-3xl top-1 right-2 text-gray-500 cursor-pointer"
                onClick={handleToggleFavorite}
              />
            )}
          </button>
        </div>
        <div>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-700 border rounded text-green-700 font-medium select-none">
            available
          </span>
        </div>
      </div>

      <div class="p-4 flex flex-col items-center">
        <p className="text-gray-400 font-light text-xs text-center">
          {category}
        </p>
        <h1 className="text-gray-800 text-center mt-1">{name}</h1>
        <p className="text-center text-gray-800 mt-1">{price}$</p>

        {/* Quantity Selector */}
        <div className="inline-flex items-center mt-2">
          <button
            onClick={decreaseQuantity}
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {quantity}g
          </div>
          <button
            onClick={increaseQuantity}
            class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        >
          Add to order
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
