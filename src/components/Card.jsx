import React from "react";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useFavorites } from "./FavoritesContext";

const Card = ({ img, name, price, category, id }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleFavorite = () => {
    toggleFavorite({ id, img, name, price, category }); // Pass the entire item
  };

  return (
    // <div
    //   className="w-[250px] h-[500px] border-1 border-black rounded-lg p-2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    //   style={{
    //     boxShadow: isHovered
    //       ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
    //       : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    //     transform: isHovered ? "translateY(-5px)" : "translateY(0)",
    //   }}
    // >
    //   <div className="relative w-full ">
    //     <img className=" w-full h-[200px]" src={img} alt={name} />
    //     {isFavorite ? (
    //       <IoMdHeart
    //         className="absolute text-3xl top-1 right-2 text-red-500 cursor-pointer"
    //         onClick={toggleFavorite}
    //       />
    //     ) : (
    //       <IoIosHeartEmpty
    //         className="absolute text-3xl top-1 right-2 text-black cursor-pointer"
    //         onClick={toggleFavorite}
    //       />
    //     )}
    //   </div>
    //   <h4 className="font-bold text-[25px]">{name}</h4>
    //   <p className="text-gray-400">500g</p>
    //   <p className="text-gray-400">{category}</p>
    //   <h3 className="text-[45px]">
    //     {price}.<sup>99$</sup>
    //   </h3>
    //   <button className="bg-green-700 border-0 rounded-lg py-3 w-[125px] text-white font-bold hover:bg-green-500 ">
    //     Order Now
    //   </button>
    // </div>

    //new card design

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
        <div className="inline-flex items-center mt-2">
          <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
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
            500g
          </div>
          <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
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

        <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
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
