import { createContext, useState, useEffect, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const isFav = prev.some((fav) => fav.id === item.id);
      if (isFav) {
        // Remove from favorites
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        // Add to favorites
        return [...prev, item];
      }
    });
  };

  const isFavorite = (itemId) => {
    console.log("Checking:", itemId, "in", favorites); // Debug
    return favorites.some((fav) => fav.id === itemId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
