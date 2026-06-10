/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, ExternalLink, Map, BookOpen } from "lucide-react";

export default function Gosemachi() {
  return (
    <section id="gosemachi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos area on Left */}
          <div className="lg:col-span-6 relative group">
            {/* Elegant physical borders instead of round soft layouts */}
            <div className="absolute inset-x-0 -bottom-3 -right-3 h-[101%] w-[101%] bg-gradient-to-tr from-brand-gold/60 via-brand-red/30 to-transparent -z-10" />
            
            <div className="relative overflow-hidden shadow-xl bg-slate-900 border-4 border-brand-navy">
              <img
                src="/src/assets/images/gosemachi_townscape_1781089824084.png"
                alt="御所まち（ごせまち）の和風な町並み"
                className="w-full aspect-[16/10] object-cover hover:scale-[1.03] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-white backdrop-blur-md px-3.5 py-1.5 text-xs font-bold border border-brand-gold/30">
                江戸の情調を残す伝統的建造物群
              </div>
            </div>

            {/* Accent Floating Spot Info */}
            <div className="absolute -top-4 -right-4 bg-brand-gold text-brand-navy font-bold text-xs p-3.5 shadow-lg border-2 border-brand-navy max-w-[180px] hidden sm:block font-sans">
              <p className="flex items-center gap-1.5 font-extrabold text-brand-navy">
                <Compass className="h-4 w-4 text-brand-red animate-pulse" /> 御所まち散策
              </p>
              <p className="text-[10px] text-brand-navy/80 font-normal mt-1 leading-normal">
                会場のすぐ目の前！百数十軒の伝統的な町家。
              </p>
            </div>
          </div>

          {/* Texts area on Right */}
          <div className="lg:col-span-6 space-y-6">
            <span className="slant-stamp-red">
              HISTORIC AREA
            </span>
            <br className="sm:hidden" />
            <h2 className="text-3xl sm:text-4xl font-italic-black text-brand-navy font-display leading-tight italic uppercase block">
              江戸の息吹が息づく町、
              <br />
              <span className="text-brand-red font-semibold">御所まち（ごせまち）</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                奈良県御所市にある「御所まち」は、江戸時代初期に形成された歴史ある町並みです。
                なんと、<strong>約250年以上前の古地図の区割り</strong>がそのまま現在も受け継がれています。
              </p>
              <p>
                百数十軒にのぼる登録有形文化財などの伝統的な町家や、情緒ある水路が立ち並ぶ、風情豊かな美しいエリアとして知られています。
              </p>
              <p className="text-slate-500 text-xs sm:text-sm font-light">
                ミーティングの前後やブレイク中に、愛車を駐めたままゆっくり散策してみるのがオススメです。昔ながらの豆腐屋さん、和菓子屋さんや古民家カフェなど、心落ち着くスポットがたくさん見つかります！
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-2.5 rounded-none text-slate-750 text-xs font-bold shadow-sm">
                <Map className="h-4 w-4 text-brand-red" />
                <span>古地図の区割りがそのまま</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-2.5 rounded-none text-slate-750 text-xs font-bold shadow-sm">
                <BookOpen className="h-4 w-4 text-brand-gold" />
                <span>百数十軒の伝統的町家</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
