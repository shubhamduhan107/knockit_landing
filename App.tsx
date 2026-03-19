import React, { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES, HIGHLIGHTS, ANDROID_LINK, IOS_LINK, ORDER_URL_FULL as ORDER_URL } from './src/data';

const ITEMS_PER_PAGE = 5;

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(CATEGORIES.length / ITEMS_PER_PAGE);

  const scrollToPage = (page: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / CATEGORIES.length;
      scrollRef.current.scrollTo({
        left: page * ITEMS_PER_PAGE * cardWidth,
        behavior: 'smooth',
      });
      setCurrentPage(page);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / CATEGORIES.length;
      const page = Math.round(scrollRef.current.scrollLeft / (ITEMS_PER_PAGE * cardWidth));
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header — Green bg matching knockit.in */}
      <header className="sticky top-0 z-50 bg-[#02a355]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-white text-xl font-bold tracking-tight">knockit</span>
          </a>
          <div className="flex items-center gap-3">
            <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-9"
              />
            </a>
            <a href={IOS_LINK} target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-9"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-3">
            Delivered at your doorstep
          </h1>
          <p className="text-base md:text-lg text-[#555] leading-relaxed mb-6 max-w-xl mx-auto">
            Enjoy delicious snacks, meals, and drinks delivered, prepared in a hygienic environment nearby.
          </p>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#02a355] text-white font-semibold text-sm hover:bg-[#018c48] transition-colors"
            style={{ borderRadius: '50px' }}
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Food Items Carousel */}
      <section id="menu" className="bg-[#02a355] px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="max-w-7xl mx-auto relative">
          {/* Scroll arrows */}
          <button
            onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
            className="absolute left-[-16px] top-[calc(50%-24px)] z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#333]" />
          </button>
          <button
            onClick={() => scrollToPage(Math.min(totalPages - 1, currentPage + 1))}
            className="absolute right-[-16px] top-[calc(50%-24px)] z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#333]" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
          >
            {CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 bg-white overflow-hidden flex flex-col"
                style={{ width: '200px', borderRadius: '10px', scrollSnapAlign: 'start' }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-[#02a355] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Knockit
                  </span>
                </div>
                <div className="p-3 flex flex-col gap-2 flex-1">
                  <span className="text-sm font-semibold text-black leading-tight">{cat.name}</span>
                  <div className="mt-auto flex items-center justify-end">
                    <span className="text-xs text-white bg-[#02a355] px-4 py-1.5 font-semibold hover:bg-[#018c48] transition-colors" style={{ borderRadius: '4px' }}>
                      View
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentPage ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Full Menu */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 bg-[#02a355] text-white font-bold text-base hover:bg-[#018c48] transition-colors"
            style={{ borderRadius: '8px' }}
          >
            Explore Full Menu
          </a>
        </div>
      </section>

      {/* Download App Section */}
      <section className="bg-[#f8f8f8] py-10 border-t border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6 uppercase tracking-wide">
            Download the App
          </h2>
          <div className="flex items-center justify-center gap-4">
            <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a href={IOS_LINK} target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {HIGHLIGHTS.map((highlight, index) => {
        const isInverted = index % 2 !== 0;
        return (
          <section
            key={highlight.title}
            className={`py-14 lg:py-20 ${isInverted ? 'bg-[#f8f8f8]' : 'bg-white'}`}
          >
            <div
              className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${
                isInverted ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10 lg:gap-16`}
            >
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-5 pb-3" style={{ borderBottom: '2px solid #d1d1d1' }}>
                  {highlight.title}
                </h3>
                <ul className="space-y-3">
                  {highlight.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#02a355] shrink-0" />
                      <span className="text-[#555] text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full max-w-md mx-auto object-cover aspect-[4/3]"
                  style={{ borderRadius: '5px', boxShadow: '0px 3px 6px #00000029' }}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* Footer — Green bg matching knockit.in */}
      <footer className="bg-[#02a355] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-sm mb-4">Useful Links</h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Address</h4>
              <p className="text-xs text-white/80 flex items-start gap-1.5">
                <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                196/11 Ramesh market, East of Kailash New Delhi 110065
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Contact & Connect</h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 shrink-0" />
                  <a href="mailto:care@knockit.in" className="hover:text-white transition-colors">care@knockit.in</a>
                </li>
                <li className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 shrink-0" />
                  <a href="tel:9050707772" className="hover:text-white transition-colors">9050707772</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-white/80 text-lg font-bold tracking-tight">knockit</span>
            <p className="text-[11px] text-white/60 text-center">
              &copy; {new Date().getFullYear()} Knockit. All rights reserved. Powered by Uengage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}