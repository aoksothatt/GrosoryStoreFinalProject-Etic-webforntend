import React, { useEffect, useState } from "react";
import Card from "./Card";
import CategoryCard from "./CatagoryCard";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(12);
  const [filterType, setFilterType] = useState("all");
  // fetching API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://aoksothatt.github.io/Grosory/grosory.json"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        //random the data
        const shuffled = result.sort(() => Math.random() - 0.5);
        setData(shuffled);
        setFilteredData(shuffled);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // put loading
  if (loading) {
    return (
      <div className="card">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <p>Error: {error}</p>
      </div>
    );
  }

  //filter section
  const handleFilter = (category) => {
    // IMPORTANT: Reset itemsToShow BEFORE filtering
    setItemsToShow(12);
    setFilterType(category); // Update the state!

    if (category === "all") {
      setFilteredData(data);
    } else {
      const result = data.filter((item) => item.category === category);
      setFilteredData(result);
    }
  };
  // Load more items
  const loadMore = () => {
    setItemsToShow((prev) => prev + 8);
  };

  // Check if there are more items to show
  const hasMoreItems = () => {
    return filteredData && itemsToShow < filteredData.length;
  };

  return (
    <>
      <CategoryCard filterType={handleFilter} />

      <div id="shop-section">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center py-8">
          {filterType === "all"
            ? "Our Popular Items"
            : ` ${
                filterType.charAt(0).toUpperCase() + filterType.slice(1)
              } Items`}
        </h1>
      </div>

      <div className="card flex flex-wrap justify-center mx-auto w-[90%] gap-5 mt-2">
        {filteredData.slice(0, itemsToShow).map((p) => {
          return (
            <Card
              key={p.id}
              id={p.id}
              img={p.img}
              name={p.name}
              price={p.price}
              category={p.category}
            />
          );
        })}
      </div>
      {/* Show More Button */}

      {hasMoreItems() && (
        <div className="flex justify-center mt-8 mb-8">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
          >
            See More
          </button>
        </div>
      )}
    </>
  );
};

export default FetchApi;
