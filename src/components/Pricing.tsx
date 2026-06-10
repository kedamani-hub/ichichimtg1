/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Ticket, ArrowRight, ExternalLink } from "lucide-react";
import { TicketPlan } from "../types";

interface PricingProps {
  googleFormLink: string;
}

export default function Pricing({ googleFormLink }: PricingProps) {
  const plans: TicketPlan[] = [
    {
      id: "regular",
      name: "500円プラン",
      price: 500,
      benefits: [
        "イベント会場入場料",
        "ウェルカムワンドリンク（冷温各種）",
        "各種展示エリア・交流サークル参加"
      ],
      isRecommended: false,
    },
    {
      id: "recommended",
      name: "1,000円プラン",
      price: 1000,
      benefits: [
        "イベント会場入場料",
        "ウェルカムワンドリンク（冷温各種）",
        "各種展示エリア・交流サークル参加",
        "限定『交通安全祈願』オリジナルステッカー"
      ],
      isRecommended: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-brand-cream/40 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="slant-stamp-navy">
            TICKET PLANS
          </span>
          <br className="sm:hidden" />
          <h2 className="text-3xl sm:text-4xl font-italic-black text-brand-navy font-display relative pb-4 inline-block italic uppercase">
            参加費・プラン一覧
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-navy" />
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            ご希望のプランをお選びください。お支払いは当日会場受付にてお伺いいたします。
          </p>
        </div>

        {/* Pricing comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-none p-6 sm:p-8 flex flex-col justify-between border-x border-b relative ${
                plan.isRecommended
                  ? "border-brand-red bg-brand-navy text-white shadow-xl scale-100 md:scale-[1.03] z-10 border-t-8 border-brand-gold"
                  : "border-slate-200 bg-white text-slate-800 border-t-4 border-brand-red"
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-black px-4 py-1.5 skew-x-[-12deg] shadow-md border-b-2 border-brand-gold">
                  ★ 一押し & おすすめプラン
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="border-b border-dashed pb-5 mb-6 border-slate-300/45">
                  <h3 className={`text-xl font-black font-display uppercase italic ${plan.isRecommended ? "text-brand-gold" : "text-brand-navy"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mt-4">
                    <span className="text-4xl font-black font-display font-mono">¥{plan.price.toLocaleString()}</span>
                    <span className="text-xs ml-1 opacity-70">(税込)</span>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-4">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.isRecommended ? "text-brand-gold" : "text-brand-red"}`} />
                      <span className={plan.isRecommended ? "text-slate-200 font-light" : "text-slate-600"}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-slate-300/20">
                <p className={`text-center text-xs pb-4 font-bold ${plan.isRecommended ? "text-brand-gold" : "text-slate-400"}`}>
                  当日会場受付での支払い
                </p>
                <a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-none font-italic-black italic text-base transition-all flex items-center justify-center gap-1.5 ${
                    plan.isRecommended
                      ? "bg-brand-red text-white hover:bg-[#b22626] shadow-md hover:scale-[1.02] border-b-4 border-brand-gold"
                      : "bg-brand-gold text-brand-navy hover:bg-brand-gold/90 hover:scale-[1.01]"
                  }`}
                >
                  <span>このプランでエントリー</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to Participate Guideline Box */}
        <div className="mt-16 bg-white border-l-4 border-brand-navy border-t-4 border-brand-red p-6 sm:p-8 rounded-none max-w-3xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between shadow-lg">
          <div className="space-y-2 text-left w-full md:w-2/3">
            <h4 className="text-lg font-black text-brand-navy font-display flex items-center gap-2 italic">
              <Ticket className="h-5 w-5 text-brand-red" />
              参加方法について
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              当日は混雑緩和のため、<strong>Googleフォームによる事前エントリー</strong>を推奨しております。当日のお持ち込みや飛込による参加ももちろん歓迎ですが、数に制限のある記念ノベルティの確保や、受付をスムーズにするため、ぜひ事前の登録をお願いいたします！
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right shrink-0">
            <a
                  id="cta-pricing-entry"
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-4 bg-brand-red hover:bg-[#b22626] text-white font-italic-black text-base italic rounded-none shadow-lg border-b-4 border-brand-gold hover:scale-[1.03] transition-transform space-x-1 group"
                >
                  <span>事前登録フォームへ</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
          </div>
        </div>

      </div>
    </section>
  );
}
