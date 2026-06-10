/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag, Flame, Sparkles } from "lucide-react";
import { MerchItem } from "../types";

export default function Merchandise() {
  const merchItems: MerchItem[] = [
    {
      id: "sticker",
      title: "オリジナルステッカー",
      price: 500,
      description: "ヘルメットや愛車のカウル、スマホ等に最適！防水・耐U V加工を施した、ごせまち伝統の風情溢れる記念エンブレムステッカーです。",
      imageUrl: "/src/assets/images/sticker_merch_1781089836870.png",
    },
    {
      id: "tshirt",
      title: "オリジナルTシャツ",
      price: 3000,
      description: "ヘビーウェイト（厚手）でタフに使える特別コラボTシャツ。日本のヴィンテージウイングを彷彿とさせる和魂バイクグラフィック。",
      limitedCount: 50,
      imageUrl: "/src/assets/images/tshirt_merch_1781089848285.png",
    },
  ];

  return (
    <section id="merchandise" className="py-20 bg-brand-cream/80 border-t border-b border-slate-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="slant-stamp-navy">
            OFFICIAL MERCHANDISE
          </span>
          <br className="sm:hidden" />
          <h2 className="text-3xl sm:text-4xl font-italic-black text-brand-navy font-display relative pb-4 inline-block italic uppercase">
            オリジナル記念グッズ
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-red" />
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            イチイチミーティングを記念した限定コレクションを会場内本部受取で販売いたします。
          </p>
        </div>

        {/* Merch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {merchItems.map((item, idx) => {
            const topBorders = ["border-t-4 border-brand-red", "border-t-4 border-brand-navy"];
            const borderStyle = topBorders[idx % 2];

            return (
              <div
                key={item.id}
                className={`bg-white rounded-none border-x border-b border-slate-200/65 shadow-md group overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${borderStyle}`}
              >
                {/* Image wrap */}
                <div className="relative aspect-square w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Limited Item Alert */}
                  {item.limitedCount ? (
                    <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-extrabold px-3 py-1.5 rounded-none shadow-md flex items-center gap-1 border border-brand-gold/30 animate-pulse">
                      <Flame className="h-3.5 w-3.5 text-brand-gold" />
                      <span>限定 {item.limitedCount} 枚</span>
                    </div>
                  ) : (
                    <div className="absolute top-4 left-4 bg-brand-navy text-brand-gold text-xs font-bold px-3 py-1.5 rounded-none shadow-md flex items-center gap-1 border border-brand-gold/20">
                      <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                      <span>記念コレクション</span>
                    </div>
                  )}
                </div>

                {/* Contents block */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg font-black text-brand-red font-display">
                        ¥{item.price.toLocaleString()} <span className="text-xs text-slate-450 font-normal shadow-none">(税込)</span>
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Additional Info / Alert */}
                  <div className="pt-4 border-t border-slate-105">
                    {item.limitedCount ? (
                      <div className="text-xs text-brand-red font-bold bg-brand-red/5 p-2.5 rounded-none border border-brand-red/10 text-center">
                        ⚠ 先着順販売。売切れ次第、終了となります。お早めにお求めください。
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-none text-center">
                        会場本部でのみ、数に余裕を持って販売予定。
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
