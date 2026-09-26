'use client';

// import { createContext, useContext, useState } from "react";
import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // TAMBAHKAN FUNGSI INI:
  const toggleFavorite = (user) => {
    setFavorites((prev) => {
      const isExist = prev.some((fav) => fav.id === user.id);
      if (isExist) {
        return prev.filter((fav) => fav.id !== user.id);
      } else {
        return [...prev, user];
      }
    });
  };

  const addFavorite = (user) => {
    setFavorites((prev) => [...prev, user]);
  };

  const removeFavorite = (userId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== userId));
  };

  const isFavorite = (userId) => {
    return favorites.some((fav) => fav.id === userId);
  };

 return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Gunakan FavoriteProvider di layout.js");
  }
  return context;
}