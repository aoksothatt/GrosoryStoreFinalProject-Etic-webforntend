import React from "react";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const Card = ({ img, name, price, category }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="w-[250px] h-[500px] border-1 border-black rounded-lg p-2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      <div className="relative w-full ">
        <img className=" w-full h-[200px]" src={img} alt={name} />
        {isFavorite ? (
          <IoMdHeart
            className="absolute text-3xl top-1 right-2 text-red-500 cursor-pointer"
            onClick={toggleFavorite}
          />
        ) : (
          <IoIosHeartEmpty
            className="absolute text-3xl top-1 right-2 text-black cursor-pointer"
            onClick={toggleFavorite}
          />
        )}
      </div>
      <h4 className="font-bold text-[25px]">{name}</h4>
      <p className="text-gray-400">500g</p>
      <p className="text-gray-400">{category}</p>
      <h3 className="text-[45px]">
        {price}.<sup>99$</sup>
      </h3>
      <button className="bg-green-700 border-0 rounded-lg py-3 w-[125px] text-white font-bold hover:bg-green-500 ">
        Order Now
      </button>
    </div>
  );
};

export default Card;
