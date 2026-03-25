"use client";

import { useSelector, useDispatch } from "react-redux";
import { sellLemonade, buyLemons, resetProfit } from "../store/profitSlice";

export default function Calculator() {
  const profit = useSelector((state) => state.profit.value);
  const transactions = useSelector((state) => state.profit.transactions);
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col items-center px-6 py-10">
      <h1 className="text-5xl font-black mb-8">Calculator</h1>

      {/* Profit Card */}
      <div className="bg-white border-2 border-black rounded-2xl px-12 py-8 text-center w-full max-w-sm shadow-[4px_4px_0px_black] mb-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Nuværende Profit</p>
        <p className={`text-7xl font-black mb-4 ${profit >= 0 ? "text-black" : "text-red-600"}`}>
          {profit >= 0 ? "+" : ""}${profit}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 w-full max-w-sm mb-4 flex-wrap">
        <button
          onClick={() => dispatch(sellLemonade())}
          className="flex-1 min-w-[140px] flex flex-col items-center py-5 bg-yellow-400 border-2 border-black rounded-2xl font-bold shadow-[4px_4px_0px_black] hover:bg-yellow-300 transition-all"
        >
          <span className="text-2xl">🥤</span>
          <span className="text-sm">Sælg Lemonade</span>
          <span className="text-lg font-black">+$5</span>
        </button>

        <button
          onClick={() => dispatch(buyLemons())}
          className="flex-1 min-w-[140px] flex flex-col items-center py-5 bg-green-700 text-white border-2 border-black rounded-2xl font-bold shadow-[4px_4px_0px_black] hover:bg-green-600 transition-all"
        >
          <span className="text-2xl">🍋</span>
          <span className="text-sm">Køb Citroner</span>
          <span className="text-lg font-black">-$2</span>
        </button>
      </div>

      <button
        onClick={() => dispatch(resetProfit())}
        className="w-full max-w-sm py-3 border-2 border-black rounded-2xl font-bold text-sm hover:bg-gray-100 transition-all shadow-[4px_4px_0px_black] mb-6"
      >
        🔄 Reset Profit
      </button>

      {/* Transactions */}
      {transactions.length > 0 && (
        <div className="w-full max-w-sm bg-white border-2 border-gray-200 rounded-2xl p-5">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Seneste transaktioner</p>
          {transactions.map((t) => (
            <div key={t.id} className="flex justify-between py-2 border-b border-gray-100 text-sm">
              <span>{t.type === "sell" ? "🥤" : "🍋"} {t.text}</span>
              <span className={t.amount > 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                {t.amount > 0 ? "+" : ""}${t.amount}
              </span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}