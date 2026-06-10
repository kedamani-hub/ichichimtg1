/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, MapPin, Clock, Bike, ExternalLink, Sparkles } from "lucide-react";
import { EventConfig } from "../types";

interface HeroProps {
  config: EventConfig;
}

export default function Hero({ config }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-navy"
    >
      {/* Background Image with elegant split-level mask overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/gosemachi_hero_banner_1781089809895.png"
          alt="Ichi-Ichi Meeting Hero Banner"
          className="w-full h-full object-cover object-center opacity-40 md:opacity-50 filter brightness-[0.7]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-navy/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero text headlines and CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Stamp badges for 125 & 150 */}
            <div className="inline-flex items-center gap-3">
              <span className="slant-stamp-red shadow-lg flex items-center gap-1.5 text-xs sm:text-sm">
                <Bike className="h-4 w-4" /> 125cc ONLY
              </span>
              <span className="slant-stamp-navy shadow-lg flex items-center gap-1.5 text-xs sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-brand-red animate-pulse" /> 150cc ONLY
              </span>
              <span className="text-xs text-slate-300 font-bold bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20">
                限定交流
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-brand-gold font-black tracking-widest text-base sm:text-lg uppercase italic font-display">
                {config.catchphrase}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-italic-black text-white font-display leading-[1.1] drop-shadow-md text-balance uppercase italic">
                {config.eventName}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl font-light leading-relaxed leading-[1.8]">
              楽しい雰囲気でありながら、メーカーや排気量の垣根を越えて愛車を眺め、語り合い、楽しむ地域密着型のバイクファンイベントです。御所まちの風情ある伝統的な街並みとともに贅沢な時間をお楽しみください。
            </p>

            {/* Quick spec highlight widget */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-slate-500/10 max-w-lg">
              <div className="flex items-center gap-1.5 px-2">
                <span className="text-brand-red font-bold">125cc</span>
                <span>イチニゴ！</span>
              </div>
              <div className="w-[1px] bg-slate-700 self-stretch" />
              <div className="flex items-center gap-1.5 px-2">
                <span className="text-brand-gold font-bold">150cc</span>
                <span>イチハン！</span>
              </div>
              <div className="w-[1px] bg-slate-700 self-stretch" />
              <div className="flex items-center gap-1.5 px-2">
                <span className="text-slate-100 font-bold">約100台</span>
                <span>予定</span>
              </div>
            </div>

            {/* Primary Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                id="hero-cta-primary"
                href={config.googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-[#b22626] text-white font-italic-black text-lg italic rounded-none shadow-2xl transition-all border-b-4 border-brand-gold hover:scale-[1.02] group"
              >
                <span>事前エントリーはこちら</span>
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                id="hero-cta-secondary"
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-base rounded-none backdrop-blur-sm transition-colors border-2 border-white/20"
              >
                料金プランを見る
              </a>
            </div>
          </div>

          {/* Quick Schedule card dashboard overlay */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border-l-4 border-brand-navy border-t-4 border-brand-red shadow-2xl p-6 sm:p-8 text-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-brand-gold/15 text-brand-navy font-black text-xs uppercase tracking-widest border-l border-b border-brand-gold/20 italic">
                INFO
              </div>

              <h3 className="text-lg font-bold text-brand-navy border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                開催概要
              </h3>

              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-brand-red/10 text-brand-red rounded-lg">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold leading-tight">開催日程</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {config.date}
                    </p>
                    <p className="text-xs text-brand-red font-bold mt-1 bg-brand-red/5 inline-block px-2 py-0.5 rounded">
                      雨天時は予備日に延期
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-brand-navy/5 text-brand-navy rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold leading-tight">開催時間</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {config.time} <span className="text-xs text-slate-500 font-normal">(受付開始 {config.acceptanceTime})</span>
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-brand-gold/20 text-brand-gold-dark rounded-lg">
                    <MapPin className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold leading-tight">会場</p>
                    <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {config.venue}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-tight">
                      {config.address}
                    </p>
                    <a
                      href={config.gmapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline font-bold inline-flex items-center gap-1 mt-1.5"
                    >
                      Googleマップで見る
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Participants constraint */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-lg">
                    <Bike className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold leading-tight">参加対象</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      125cc・150ccのバイクオーナー
                    </p>
                    <p className="text-xs text-slate-500">
                      ※同伴者・見学の方の参加も歓迎です！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
