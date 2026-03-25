import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 py-16">
      <span className="text-8xl mb-6">🍋</span>
      <h1 className="text-5xl font-black text-center mb-3">Lemonade Stand</h1>
      <p className="text-gray-500 text-sm uppercase tracking-widest mb-12">
        Din lille limonade-forretning
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link href="/shop" className="bg-yellow-400 border-2 border-black rounded-2xl px-6 py-5 font-bold text-center shadow-[4px_4px_0px_black] hover:bg-yellow-300 transition-all">
          Shop
        </Link>
        <Link href="/cart" className="bg-green-700 text-white border-2 border-black rounded-2xl px-6 py-5 font-bold text-center shadow-[4px_4px_0px_black] hover:bg-green-600 transition-all">
          Kurv
        </Link>
        <Link href="/calculator" className="bg-white border-2 border-black rounded-2xl px-6 py-5 font-bold text-center shadow-[4px_4px_0px_black] hover:bg-gray-50 transition-all">
          Calculator
        </Link>
      </div>
    </main>
  );
}