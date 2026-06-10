/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Camera, Users, Utensils, UtensilsCrossed, Calendar, Smile, Heart } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      id: "photospot",
      title: "愛車と撮れる大型フォトスポット",
      sub: "LIMITED PHOTO SPOT",
      description: "イベント限定で制作される特製オリジナル撮影用巨大パネルを設置。御所まちの歴史とバイクカルチャーを融合したグラフィティアートの背景で、愛車ベストアングルの一枚を撮影し、旅の思い出にしてください！",
      details: ["オリジナル限定ロゴ背景", "スタッフがカメラ撮影をお手伝い", "SNS拡散用の映えスポット"],
      icon: <Camera className="h-6 w-6" />,
      colorClass: "from-brand-red to-rose-600 bg-brand-red/10 border-brand-red/20 text-brand-red",
    },
    {
      id: "networking",
      title: "125cc・150ccオーナー交流",
      sub: "OWNERS EXCHANGE",
      description: "メーカー、車種などの垣根を一切飛び越えて並行交流。同封のニックネーム＆愛車解説パスを掲示して、自慢のカスタムから、こだわりのツーリング情報、整備のアイデアまで気軽にワイワイ語り合いましょう！",
      details: ["ネーム＆愛車情報パス配布", "車種別プチオーナーズミーティング", "みんなの愛車拝見アワード"],
      icon: <Users className="h-6 w-6" />,
      colorClass: "from-brand-navy to-slate-800 bg-brand-navy/5 border-brand-navy/20 text-brand-navy",
    },
    {
      id: "foodtrucks",
      title: "極上キッチンカー出店",
      sub: "GOURMET FOOD TRUCKS",
      description: "ライディングで空いたお腹を満たす、特製極上グルメキッチンカー！地元でも話題の人気メニューのほか、冷たいドリンク等を用意。さくら茶屋周辺の風情漂う景色の中、のんびりとランチタイムをどうぞ。",
      details: ["肉巻きおにぎり：香ばしい特製ダレが絡む絶品スタミナ飯", "角煮カレー：口の中でホロホロにほどける肉厚トッピングカレー", "美味しいコーヒーや各種ソフトドリンクも販売！"],
      icon: <UtensilsCrossed className="h-6 w-6" />,
      colorClass: "from-brand-gold to-yellow-600 bg-brand-gold/10 border-brand-gold/20 text-brand-navy",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-brand-cream/80 border-t border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="slant-stamp-navy">
            HIGHLIGHTS
          </span>
          <br className="sm:hidden" />
          <h2 className="text-3xl sm:text-4xl font-italic-black text-brand-navy font-display relative pb-4 inline-block italic uppercase">
            イベントの楽しみ方
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-gold" />
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            1日を最大限に満喫していただくための特別コンテンツが盛り沢山！
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const topBorders = [
              "border-t-4 border-brand-red",
              "border-t-4 border-brand-navy",
              "border-t-4 border-brand-gold"
            ];
            const borderStyle = topBorders[idx % 3];

            return (
              <div
                key={item.id}
                className={`bg-white rounded-none p-6 sm:p-8 flex flex-col justify-between border-x border-b border-slate-200/60 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${borderStyle}`}
              >
                <div className="space-y-4">
                  {/* Icon square */}
                  <div className={`w-12 h-12 rounded-none flex items-center justify-center mb-6 shadow-sm ${item.colorClass}`}>
                    {item.icon}
                  </div>

                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest font-black text-brand-gold uppercase block">
                    {item.sub}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bullet details */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex-grow">
                <ul className="space-y-2.5">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative accent lines */}
              <div className="absolute left-0 bottom-0 right-0 h-1.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-brand-navy via-brand-red to-brand-gold" />
            </div>
          )})}
        </div>

      </div>
    </section>
  );
}
