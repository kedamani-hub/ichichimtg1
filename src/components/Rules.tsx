/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlertTriangle, ShieldCheck, CheckCircle2, CloudRain } from "lucide-react";

export default function Rules() {
  const safetyRules = [
    {
      title: "会場スタッフの指示に従うこと",
      desc: "混雑緩和や危険防止のため、会場内およびその周辺では必ず運営スタッフ、誘導看板等の指示に従ってください。",
    },
    {
      title: "空ぶかし・騒音行為の絶対禁止",
      desc: "会場の近隣はのどかな住宅地および静粛な歴史地区です。迷惑となる不要不急の空ぶかし、マフラー等による大音響ノイズは厳禁です。",
    },
    {
      title: "危険運転・迷惑走行の禁止",
      desc: "来退場時を含め急な発進、ウィリー、急ブレーキ等他者を危険にさらす行為、また過度な爆音走行は絶対にしないでください。",
    },
    {
      title: "ゴミの自己持ち帰り徹底にご協力",
      desc: "会場内にはゴミ箱の用意はございません。お買い求めの飲食物等で発生したゴミは、環境保全のため各自にて必ずお持ち帰りください。",
    },
    {
      title: "貴重品の各自責任管理",
      desc: "駐車場、待機列、会場内における盗難、置引き、事故および機材破損等について主催者は一切の責任を負いかねます。",
    },
  ];

  return (
    <section id="rules" className="py-20 bg-brand-cream/80 border-t border-slate-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rainy Day Alert Block: High Prominence */}
        <div className="bg-brand-navy rounded-3xl p-6 sm:p-10 border-2 border-brand-red text-white shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-bl-full -z-0" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="p-4 bg-brand-red text-white rounded-2xl w-16 h-16 flex items-center justify-center shrink-0 shadow-lg border border-brand-gold/35">
              <CloudRain className="h-8 w-8 animate-bounce" />
            </div>
            <div className="space-y-2">
              <span className="text-xs tracking-widest font-black text-brand-gold bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-block">
                RAINY DAY HANDLING
              </span>
              <h3 className="text-2xl font-black font-display text-brand-gold">
                雨天時の開催延期について
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-light">
                イベント当日が荒天・大雨予報である場合は、参加者の方々の安全なツーリング走行、及び展示車両の保全のため、開催を延期とさせていただきます。
              </p>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl mt-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div>
                  <p className="text-xs text-brand-gold font-bold">【予備開催日】</p>
                  <p className="text-base font-bold text-slate-100">
                    2026年10月10日（土）
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-300 bg-brand-red/20 px-2 py-1 rounded border border-brand-red/30">
                  前日正午までに公式SNS等で発表
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Guidelines Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-200 inline-block font-display">
            ATTENTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display relative pb-4 inline-block">
            注意事項・ルール
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-500 rounded-full" />
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            皆様が安全に最高に楽しめる1日にするため、マナーとルールを遵守いただきますようお願い致します。
          </p>
        </div>

        {/* Rules Cards List */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 shadow-md space-y-6">
          {safetyRules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0"
            >
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl mt-0.5 shrink-0 border border-amber-200/50">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-base font-bold text-slate-800">
                  {rule.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
