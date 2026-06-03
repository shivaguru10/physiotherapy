"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle, Star } from "lucide-react";

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem("promoShown");

    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsRendered(true);
        setTimeout(() => setIsVisible(true), 50);
        sessionStorage.setItem("promoShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsRendered(false), 300);
  };

  if (!isRendered) return null;

  const treatments = [
    { text: "நரம்பு & ஜவ்வு விலகுதல்", color: "text-[#FFE600]" },
    { text: "மூட்டு & முழங்கால் வலி", color: "text-white" },
    { text: "பக்கவாதம் & முகவாதம்", color: "text-[#FFE600]" },
    { text: "தசை & தண்டுவட பாதிப்பு", color: "text-white" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300 p-4 sm:p-6 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#341870] shadow-2xl ring-2 ring-[#FFE600]/30 transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white hover:bg-white hover:text-black shadow-sm transition-colors sm:right-3 sm:top-3 sm:h-8 sm:w-8"
          aria-label="Close promotion"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[85vh] overflow-y-auto lg:overflow-visible">
          {/* Left Side: Premium Image (Hidden on Mobile) */}
          <div className="relative hidden w-[40%] shrink-0 bg-[#220d4f] lg:block">
            <Image
              src="/images/promo-poster.png"
              alt="Premium Physiotherapy Care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0vw, 40vw"
            />
          </div>

          {/* Right Side: Ultra-Compact Content */}
          <div className="flex flex-col justify-center p-5 sm:p-8 lg:w-[60%]">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#FFE600]/20 border border-[#FFE600]/50 px-2.5 py-0.5 text-[10px] font-bold text-[#FFE600] self-start sm:px-3 sm:py-1 sm:text-xs">
              <Star className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
              <span>சிறந்த சிகிச்சை</span>
            </div>
            
            <h2 className="mb-1 text-xl font-black leading-tight text-[#FFE600] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-3xl">
              வலிகளுக்கு நிரந்தர தீர்வு!
            </h2>
            
            <p className="mb-4 text-xs font-bold text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] sm:mb-6 sm:text-sm">
              அதிநவீன கருவிகளுடன் சிறந்த பிசியோதெரபி சிகிச்சை.
            </p>

            {/* Compact Grid */}
            <div className="mb-5 grid grid-cols-2 gap-2 sm:mb-8 sm:gap-3">
              {treatments.map((treatment, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-black/20 p-2 rounded-md border border-white/5 sm:gap-3 sm:p-2.5 sm:rounded-lg">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-inner sm:h-5 sm:w-5">
                    <div className="h-1.5 w-1.5 rounded-full bg-current sm:h-2 sm:w-2" />
                  </div>
                  <span className={`text-[11px] font-black tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] sm:text-sm sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] ${treatment.color} leading-tight`}>
                    {treatment.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919486733238?text=Hello%20Doctor%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20book%20an%20appointment.%20Please%20help%20me%20with%20the%20available%20consultation%20slots."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFE600] px-4 py-3 text-center text-sm font-black text-[#341870] shadow-lg shadow-[#FFE600]/20 transition-all hover:bg-white hover:text-[#341870] hover:shadow-xl hover:shadow-white/30 active:scale-[0.98] sm:rounded-xl sm:px-6 sm:py-4 sm:text-base"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              முன்பதிவு செய்ய / Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
