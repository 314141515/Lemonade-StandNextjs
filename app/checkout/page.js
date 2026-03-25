"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="flex flex-col items-center px-6 py-10">
        <h1 className="text-5xl font-black mb-4">✅ Checkout</h1>
        <p className="text-gray-500 mb-4">Din kurv er tom.</p>
        <Link href="/shop" className="bg-yellow-400 border-2 border-black rounded-2xl px-6 py-3 font-bold shadow-[4px_4px_0px_black] hover:bg-yellow-300 transition-all">
          Gå til Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center px-6 py-10">
      <h1 className="text-5xl font-black mb-8">✅ Checkout</h1>
      <div className="w-full max-w-2xl bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_black]">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Ordreoversigt</p>
        {items.map((item) => (
          <div key={item.idDrink} className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
            <span className="font-bold">{item.strDrink}</span>
            <span className="text-gray-500">x{item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-4 font-black text-lg">
          <span>Total antal</span>
          <span>{total} stk</span>
        </div>
      </div>
      <Link href="/" className="mt-6 bg-green-700 text-white border-2 border-black rounded-2xl px-6 py-3 font-bold shadow-[4px_4px_0px_black] hover:bg-green-600 transition-all">
        Tilbage til forsiden
      </Link>
    </main>
  );
}