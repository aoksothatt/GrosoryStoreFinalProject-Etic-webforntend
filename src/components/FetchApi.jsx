import React, { useEffect, useState } from "react";
import Card from "./Card";
import CategoryCard from "./CatagoryCard";

const FetchApi = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(10);
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

  // ADD THIS NEW useEffect for search functionality
  useEffect(() => {
    if (!data.length) return; // Wait until data is loaded

    let result = data;

    // First apply category filter
    if (filterType !== "all") {
      result = result.filter((item) => item.category === filterType);
    }

    // Then apply search filter
    if (searchTerm && searchTerm.trim() !== "") {
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(result);
    setItemsToShow(10); // Reset items to show when search/filter changes
  }, [searchTerm, filterType, data]); // Run when searchTerm, filterType, or data changes

  // put loading
  if (loading) {
    return (
      <div className="card text-center text-4xl p-10">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card text-center text-4xl p-10">
        <p>Error: {error}</p>
      </div>
    );
  }

  //filter section
  const handleFilter = (category) => {
    // IMPORTANT: Reset itemsToShow BEFORE filtering
    setItemsToShow(10);
    setFilterType(category); // Update the state!
  };
  // Load more items
  const loadMore = () => {
    setItemsToShow((prev) => prev + 10);
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
            ? "All The Products"
            : ` ${
                filterType.charAt(0).toUpperCase() + filterType.slice(1)
              } Items`}
        </h1>

        {/* ADD THIS: Show search results count */}
        {searchTerm && (
          <p className="text-center text-gray-600 mb-4">
            Found {filteredData?.length || 0} results for "{searchTerm}"
          </p>
        )}
      </div>

      <div className="card flex flex-wrap justify-center mx-auto w-[90%] gap-5 mt-2">
        {filteredData && filteredData.length > 0 ? (
          filteredData.slice(0, itemsToShow).map((p) => {
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
          })
        ) : (
          // ADD THIS: Show message when no results found
          <div className="text-center w-full py-10">
            <p className="text-2xl text-gray-500">
              No products found {searchTerm && `for "${searchTerm}"`}
            </p>
          </div>
        )}
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
