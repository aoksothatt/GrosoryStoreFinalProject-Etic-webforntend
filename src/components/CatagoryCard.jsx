import vegetableImg from "../img/3330190.png";
import snackImg from "../img/3346287.png";
import  mlik from "../img/4401338.png";
import meatImg from "../img/5495508.png";
import  fruitsImg from "../img/5793082.png";

export default function CategoryCard({ filterType }) {
  const categories = [
    {
      category: "Vegetable",
      subtitle: "Local market",
      img: vegetableImg,
      bgColor: "bg-green-100",
    },
    {
      category: "Snack & Bread",
      subtitle: "Local market",
      img: snackImg,
      bgColor: "bg-yellow-100",
    },
    {
      category: "Fruit",
      subtitle: "Local market",
      img: fruitsImg,
      bgColor: "bg-red-100",
    },
    {
      category: "Meat",
      subtitle: "Local market",
      img: meatImg,
      bgColor: "bg-pink-100",
    },
    {
      category: "Ingredient",
      subtitle: "Local market",
      img: "https://www.pngall.com/wp-content/uploads/8/Ingredient-Transparent.png",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <main className="w-full sm:w-[95%] xl:w-[90%] mx-auto px-4 py-8">
      {/* Mobile: 1 item per line (vertical stack) */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:hidden gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => filterType(category.category)}
            className={`${category.bgColor} text-left p-4 flex justify-between items-center gap-4 rounded-lg cursor-pointer transition-transform hover:scale-105`}
          >
            <div className="flex-1">
              <h5 className="mb-1 font-bold text-base sm:text-lg md:text-xl">
                <span
                  href="#"
                  className="no-underline text-gray-900 hover:text-gray-700"
                >
                  {category.category}
                </span>
              </h5>
              <small className="text-gray-500 text-sm md:text-base">
                {category.subtitle}
              </small>
            </div>
            <img
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
              src={category.img}
              alt={category.category}
            />
          </div>
        ))}
        <div
          className="bg-gray-100 rounded-lg cursor-pointer p-6 md:p-8 flex items-center justify-center transition-transform hover:scale-105"
          onClick={() => filterType("all")}
        >
          <h6 className="font-semibold text-gray-700 text-lg md:text-xl">
            SEE ALL
          </h6>
        </div>
      </div>

      {/* Desktop/Large screens: All items in one line */}
      <div className="hidden xl:block">
        <div className="flex gap-6 justify-center">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => filterType(category.category)}
              className={`${category.bgColor} text-left p-3 flex  justify-between items-center gap-2 rounded-lg cursor-pointer w-55 h-35 transition-transform hover:scale-105`}
            >
              <div className="flex-1 min-w-0">
                <h5 className="mb-1 font-bold text-base leading-tight">
                  <span
                    href="#"
                    className="no-underline text-gray-900 hover:text-gray-700 text-xl"
                  >
                    {category.category}
                  </span>
                </h5>
                <small className="text-gray-500 text-xs">
                  {category.subtitle}
                </small>
              </div>
              <img
                className="w-14 h-14 object-contain flex-shrink-0"
                src={category.img}
                alt={category.category}
              />
            </div>
          ))}
          <div
            className="bg-gray-100 rounded-lg cursor-pointer w-55 h-35 flex items-center justify-center transition-transform hover:scale-105"
            onClick={() => filterType("all")}
          >
            <h6 className="font-semibold text-gray-700 text-base">SEE ALL</h6>
          </div>
        </div>
      </div>
    </main>
  );
}
