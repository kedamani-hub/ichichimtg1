/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bike, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative vertical texts representing Japanese historic context */}
      <div className="absolute right-4 top-10 opacity-5 select-none pointer-events-none hidden lg:block">
        <span className="text-8xl font-black text-brand-navy writing-mode-vertical">
          御所
        </span>
      </div>
      <div className="absolute left-4 bottom-10 opacity-5 select-none pointer-events-none hidden lg:block">
        <span className="text-8xl font-black text-brand-red writing-mode-vertical">
          壱弐五 壱五零
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold-dark font-extrabold text-xs tracking-widest uppercase rounded-full border border-brand-gold/20 inline-block font-display">
            CONCEPT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display relative pb-4 inline-block">
            イチイチミーティングとは
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-red rounded-full" />
          </h2>
        </div>

        <div className="bg-white p-6 sm:p-10 border-l-4 border-brand-navy border-r-4 border-brand-red shadow-lg max-w-4xl mx-auto rounded-none">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-center space-y-6">
            <p className="text-lg sm:text-xl font-bold text-brand-navy">
              「イチニゴ（125cc）」と「イチハン（150cc）」。
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-[2]">
              その2つの排気量を愛するライダーたちが集まることから
              <br className="hidden sm:inline" />
              <strong className="text-brand-red text-base sm:text-lg font-bold bg-brand-red/5 px-2.5 py-1 rounded-none mx-1">
                「イチイチミーティング」
              </strong>
              と名付けました。
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-[2] text-balance">
              原付二種として大人気の125cc（1・2・5）と、
              高速道路も走れる万能サイズ150cc（1・5・0）。
              メーカーや車種の垣根を越えて、同じ目線を持つライダー同士が
              ゆっくりお茶を飲みつつ交流し、愛車を眺め、こだわりを語り合い、楽しむイベントです。
            </p>
          </div>

          {/* Graphical Split Representing the two classes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-10 border-t border-slate-350/40">
            {/* 125cc card */}
            <div className="relative overflow-hidden bg-white p-6 rounded-none border-l-4 border-brand-red border border-y-slate-200 border-r-slate-200 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div className="w-14 h-14 bg-brand-red/10 rounded-none flex items-center justify-center text-brand-red mb-4 font-bold">
                <span className="font-extrabold text-lg">125</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg">原二の王道！125cc（イチニゴ）</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                経済的でありながら、ツーリングや通勤、カスタムにも広く愛される魅力のクラス。個性豊かな車種が勢揃いします！
              </p>
            </div>

            {/* 150cc card */}
            <div className="relative overflow-hidden bg-white p-6 rounded-none border-l-4 border-brand-gold border border-y-slate-200 border-r-slate-200 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div className="w-14 h-14 bg-brand-gold/20 rounded-none flex items-center justify-center text-brand-navy mb-4 font-bold">
                <span className="font-extrabold text-lg text-brand-gold-dark">150</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg">万能機動！150cc（イチハン）</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                高速道路走行が可能で行動範囲が無制限！スクーターからアドベンチャーまで、こだわりが詰まった実力派クラスです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
