/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Settings, X, RefreshCw, Check, Link, Calendar, Bike, ChevronRight } from "lucide-react";
import { EventConfig } from "../types";

interface ConfigPanelProps {
  config: EventConfig;
  onUpdate: (newConfig: EventConfig) => void;
}

export default function ConfigPanel({ config, onUpdate }: ConfigPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formLink, setFormLink] = useState(config.googleFormLink);
  const [eventDate, setEventDate] = useState(config.date);
  const [rainDate, setRainDate] = useState(config.rainDate);
  const [estimated, setEstimated] = useState(config.estimatedBikes.toString());
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onUpdate({
      ...config,
      googleFormLink: formLink,
      date: eventDate,
      rainDate: rainDate,
      estimatedBikes: parseInt(estimated) || 100,
    });
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      setIsOpen(false);
    }, 1500);
  };

  const resetToDefault = () => {
    setFormLink("https://docs.google.com/forms/");
    setEventDate("2026年9月19日（土）");
    setRainDate("2026年10月10日（土）");
    setEstimated("100");
  };

  return (
    <>
      {/* Floating Settings Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 p-3.5 bg-brand-navy hover:bg-brand-navy/95 text-white rounded-full shadow-2xl hover:scale-[1.05] transition-all border border-brand-gold/40 group cursor-pointer"
          title="プレビュー設定パネル"
          id="toggle-preview-config"
        >
          <Settings className="h-5 w-5 text-brand-gold animate-spin-slow group-hover:rotate-45 transition-transform" />
          <span className="text-xs font-semibold tracking-wider pr-1 hidden sm:inline">サイト設定変更</span>
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          id="config-overlay"
          className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-50 flex justify-end animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Drawer Body */}
          <div
            id="config-drawer"
            className="w-full max-w-md bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-brand-gold/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-brand-navy rounded-lg text-brand-gold shadow">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-brand-navy font-display">
                      管理者用・設定パネル
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      LP表示内容をリアルタイムで編集・テストできます。
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form customizer controls */}
              <form onSubmit={handleSave} className="space-y-5">
                {/* Google Form Link */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Link className="h-3.5 w-3.5 text-brand-red" />
                    <span>事前登録用・GoogleフォームURL</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formLink}
                    onChange={(e) => setFormLink(e.target.value)}
                    placeholder="https://docs.google.com/forms/d/..."
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-red bg-slate-50 text-slate-800"
                  />
                  <p className="text-[10px] text-slate-400 leading-normal">
                    ※実際のGoogleフォーム、またはお好みのHP・連絡先アドレスを貼り付けるだけで、サイト内の各「エントリー」ボタンの紐付けが自動更新されます。
                  </p>
                </div>

                {/* Event Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-brand-navy" />
                    <span>イベント開催日</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-navy bg-slate-50 text-slate-800"
                  />
                </div>

                {/* Postponement Rainy day Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-brand-gold-dark" />
                    <span>雨天予備日</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={rainDate}
                    onChange={(e) => setRainDate(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-gold bg-slate-50 text-slate-800"
                  />
                </div>

                {/* Targets Estimated bikes count */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Bike className="h-3.5 w-3.5 text-emerald-600" />
                    <span>参加目標台数（台）</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={estimated}
                    onChange={(e) => setEstimated(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-slate-50 text-slate-800"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSaved}
                  className="w-full mt-6 py-3 bg-brand-navy hover:bg-brand-navy/95 text-white rounded-xl text-xs font-black shadow-lg hover:shadow-brand-navy/20 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {isSaved ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>設定を保存しました！</span>
                    </>
                  ) : (
                    <>
                      <span>設定を適用する</span>
                      <ChevronRight className="h-4 w-4 text-brand-gold" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Reset to defaults helper */}
            <div className="border-t border-slate-100 pt-4 mt-8 flex justify-between items-center text-xs">
              <span className="text-slate-400">現在テストモード動作中</span>
              <button
                type="button"
                onClick={resetToDefault}
                className="text-brand-red hover:underline inline-flex items-center gap-1 font-bold"
              >
                <RefreshCw className="h-3 w-3" />
                <span>初期値に戻す</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
