"use client";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "../store/cartSlice";

export default function Shop() {
  const dispatch = useDispatch();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks.slice(0, 4)));
  }, []);

  return (
    <main className="flex flex-col items-center px-6 py-10">
      <h1 className="text-5xl font-black mb-8">🛒 Shop</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_black] flex gap-3 items-center">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-bold text-sm">{drink.strDrink}</p>
              <button
                onClick={() => dispatch(addToCart(drink))}
                className="bg-yellow-400 border-2 border-black rounded-lg py-1 text-xs font-bold hover:bg-yellow-300 transition-all"
              >
                Tilføj til kurv 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}