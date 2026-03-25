"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <main className="flex flex-col items-center px-6 py-10">
        <h1 className="text-5xl font-black mb-4">🧺 Kurv</h1>
        <p className="text-gray-500">Din kurv er tom.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center px-6 py-10">
      <h1 className="text-5xl font-black mb-8">🧺 Kurv</h1>
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {items.map((item) => (
          <div key={item.idDrink} className="bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_black] flex gap-4 items-center">
            <img src={item.strDrinkThumb} alt={item.strDrink} className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex flex-col gap-2 flex-1">
              <p className="font-bold text-sm">{item.strDrink}</p>
              <div className="flex items-center gap-2">
                <button onClick={() => dispatch(updateQuantity({ idDrink: item.idDrink, quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1 }))} className="bg-gray-100 border-2 border-black rounded-lg w-7 h-7 font-bold text-sm">-</button>
                <span className="font-bold">{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ idDrink: item.idDrink, quantity: item.quantity + 1 }))} className="bg-gray-100 border-2 border-black rounded-lg w-7 h-7 font-bold text-sm">+</button>
              </div>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.idDrink))} className="bg-red-600 text-white border-2 border-black rounded-xl px-3 py-1 text-xs font-bold">
              Fjern
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}