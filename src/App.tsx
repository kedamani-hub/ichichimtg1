/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Bike, Instagram, Facebook, ArrowUp, MessageSquare, ExternalLink } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Gosemachi from "./components/Gosemachi";
import Merchandise from "./components/Merchandise";
import Pricing from "./components/Pricing";
import Rules from "./components/Rules";
import ConfigPanel from "./components/ConfigPanel";
import { EventConfig } from "./types";

const INITIAL_CONFIG: EventConfig = {
  eventName: "イチイチミーティング in ごせまち",
  catchphrase: "イチニゴ！イチハン！同好者あつまれ！",
  date: "2026年9月19日（土）",
  time: "10:00〜15:00",
  acceptanceTime: "9:30",
  venue: "さくら茶屋駐車場",
  address: "奈良県御所市鴨口町1603-19",
  gmapLink: "https://maps.google.com/?q=さくら茶屋駐車場+奈良県御所市鴨口町1603-19",
  estimatedBikes: 100,
  googleFormLink: "https://docs.google.com/forms/",
  rainDate: "2026年10月10日（土）",
  organizer: "イチイチミーティング実行委員会",
};

export default function App() {
  const [config, setConfig] = useState<EventConfig>(() => {
    const saved = localStorage.getItem("ichichi_event_config");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_CONFIG;
      }
    }
    return INITIAL_CONFIG;
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUpdateConfig = (newConfig: EventConfig) => {
    setConfig(newConfig);
    localStorage.setItem("ichichi_event_config", JSON.stringify(newConfig));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col justify-between selection:bg-brand-red selection:text-white bg-brand-cream/40">
      
      {/* Navigation Header */}
      <Header googleFormLink={config.googleFormLink} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero config={config} />

        {/* Concept / About Section */}
        <About />

        {/* Highlights Section */}
        <Highlights />

        {/* Gosemachi Town Walk Section */}
        <Gosemachi />

        {/* Limited Merchandise Section */}
        <Merchandise />

        {/* Ticket Plans/Pricing Section */}
        <Pricing googleFormLink={config.googleFormLink} />

        {/* Rules & Rain postponent arrangements */}
        <Rules />

      </main>

      {/* High-End Japanese styled Footer */}
      <footer id="site-footer" className="bg-brand-navy text-slate-400 pt-16 pb-8 border-t-4 border-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-start">
            {/* Logo/Info Left */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-red rounded-full p-2 text-white shadow-lg">
                  <Bike className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold tracking-wider text-brand-gold font-display leading-none">
                    ICHI-ICHI MEETING
                  </span>
                  <span className="text-xs font-light text-slate-400 mt-1">
                    125cc & 150cc Owners Gathering
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                「イチニゴ（125cc）」と「イチハン（150cc）」の排気量を愛するすべてのツーリングライダーたちのためのイベント。大和の古い蔵元や歴史的家屋が並ぶ御所まちは、愛車との旅に極上の演出を添えてくれます。
              </p>
            </div>

            {/* Quick links Center */}
            <div className="md:col-span-3 space-y-4 text-left">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">
                インフォメーション
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#about" className="hover:text-brand-gold transition-colors">イチイチミーティングとは</a>
                </li>
                <li>
                  <a href="#highlights" className="hover:text-brand-gold transition-colors">イベントの楽しみ方</a>
                </li>
                <li>
                  <a href="#gosemachi" className="hover:text-brand-gold transition-colors">御所まちについて</a>
                </li>
                <li>
                  <a href="#rules" className="hover:text-brand-gold transition-colors">開催判断・注意事項</a>
                </li>
              </ul>
            </div>

            {/* Organizer Socials Right */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">
                主催・コミュニティ
              </h4>
              <p className="text-xs text-slate-300 font-bold">
                主催：{config.organizer}
              </p>
              
              {/* Social Channels Connects */}
              <div className="flex space-x-3 pt-2">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 hover:bg-brand-red text-slate-300 hover:text-white rounded-lg transition-all border border-white/5 hover:border-brand-red/30 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg transition-all border border-white/5 font-black text-xs font-display flex items-center justify-center min-w-[38px] h-[38px]"
                  aria-label="X (formerly Twitter)"
                >
                  X
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg transition-all border border-white/5 hover:border-blue-700/30 shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
              </div>
              <p className="text-[10px] text-slate-500">※SNSのアカウントはデモ・プレビュー用です。</p>
            </div>
          </div>

          {/* Credits bottom */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-500 font-light">
              &copy; {new Date().getFullYear()} {config.organizer}. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300 transition-colors">プライバシーポリシー</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-slate-300 transition-colors">お問い合わせ</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Interactive Settings Config Panel */}
      <ConfigPanel config={config} onUpdate={handleUpdateConfig} />

      {/* Slide in Scroll-to-Top Tool */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 bg-brand-red hover:bg-brand-red/90 text-white rounded-full shadow-xl hover:scale-105 transition-all border border-brand-gold/30 animate-fade-in-up"
          title="ページ上部へ"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
