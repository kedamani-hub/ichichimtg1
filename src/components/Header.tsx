/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Bike, Menu, X, ExternalLink } from "lucide-react";

interface HeaderProps {
  googleFormLink: string;
}

export default function Header({ googleFormLink }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "イチイチとは", href: "#about" },
    { label: "楽しみ方", href: "#highlights" },
    { label: "御所まち散策", href: "#gosemachi" },
    { label: "グッズ", href: "#merchandise" },
    { label: "参加費", href: "#pricing" },
    { label: "注意事項", href: "#rules" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-md py-3 text-white border-b-4 border-brand-gold"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="bg-brand-red rounded-full p-2 text-white shadow-md flex items-center justify-center">
              <Bike className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider text-brand-gold font-display leading-none">
                125cc / 150cc MEETING
              </span>
              <span className="text-xs font-light text-gray-300 leading-none mt-1">
                in ごせまち
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-brand-gold transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              id="cta-nav-button"
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-brand-red hover:bg-brand-red/90 text-white font-medium text-xs rounded-full shadow-lg transition-all border border-brand-gold/30 hover:scale-[1.03] space-x-1"
            >
              <span>事前エントリー</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-brand-navy/50 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-brand-navy border-t border-brand-navy/50 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fade-in"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-200 hover:text-brand-gold hover:bg-brand-navy/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              id="mobile-cta-button"
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 bg-brand-red hover:bg-brand-red/90 text-white font-medium rounded-full shadow-md transition-colors border border-brand-gold/20"
            >
              <span>事前エントリーはこちら</span>
              <ExternalLink className="h-4 w-4 ml-1.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
