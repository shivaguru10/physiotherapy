"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle, Activity, CheckCircle2 } from "lucide-react";

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
    "நரம்பு & ஜவ்வு விலகுதல்",
    "மூட்டு & முழங்கால் வலி",
    "பக்கவாதம் & முகவாதம்",
    "தசை & தண்டுவட பாதிப்பு",
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#071E63]/60 backdrop-blur-sm transition-all duration-500 p-4 sm:p-6 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full max-w-[800px] overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(7,30,99,0.3)] transition-all duration-500 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-500 backdrop-blur-sm transition-all hover:bg-gray-100 hover:text-gray-900 shadow-sm sm:right-4 sm:top-4"
          aria-label="Close promotion"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          {/* Left Side / Top Banner: Premium Image */}
          <div className="relative h-40 w-full shrink-0 bg-gray-50 lg:h-auto lg:w-[45%]">
            <Image
              src="/images/promo-poster.png"
              alt="Premium Physiotherapy Care"
              fill
              className="object-cover object-top lg:object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent" />
          </div>

          {/* Right Side: Elegant Content */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:w-[55%]">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#0F9F9A]/10 px-3 py-1.5 text-xs font-bold text-[#0F9F9A] self-start border border-[#0F9F9A]/20">
              <Activity className="h-4 w-4" />
              <span>சிறந்த பிசியோதெரபி சிகிச்சை</span>
            </div>
            
            <h2 className="mb-2 text-2xl font-bold leading-tight text-[#071E63] sm:text-3xl lg:text-4xl">
              வலிகளுக்கு <span className="text-[#0F9F9A]">நிரந்தர தீர்வு!</span>
            </h2>
            
            <p className="mb-6 text-sm font-medium text-gray-600 sm:mb-8 sm:text-base leading-relaxed">
              அதிநவீன கருவிகள் மற்றும் 19+ வருட அனுபவம் வாய்ந்த மருத்துவரால் சிறந்த சிகிச்சை அளிக்கப்படுகிறது.
            </p>

            {/* Elegant List */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {treatments.map((treatment, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0F9F9A] mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800 sm:text-base leading-tight pt-0.5">
                    {treatment}
                  </span>
                </div>
              ))}
            </div>

            {/* Premium CTA */}
            <a
              href="https://wa.me/919486733238?text=Hello%20Doctor%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20book%20an%20appointment.%20Please%20help%20me%20with%20the%20available%20consultation%20slots."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#071E63] px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#071E63]/25 transition-all hover:bg-[#0a2b8e] hover:shadow-xl hover:shadow-[#071E63]/40 active:scale-[0.98] sm:text-base"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              முன்பதிவு செய்ய / Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
