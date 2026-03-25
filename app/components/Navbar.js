"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="w-full bg-yellow-400 border-b-2 border-black px-6 py-4 flex gap-6 items-center font-bold">
      <span>🍋</span>
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/shop" className="hover:underline">Shop</Link>
      <Link href="/cart" className="hover:underline">
        Kurv {cartCount > 0 && <span className="bg-black text-white rounded-full px-2 py-0.5 text-xs ml-1">{cartCount}</span>}
      </Link>
      <Link href="/calculator" className="hover:underline">Calculator</Link>
    </nav>
  );
}