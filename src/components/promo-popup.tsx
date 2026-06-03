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
    { text: "நரம்பு அழுத்தம் & ஜவ்வு விலகுதல்", color: "text-[#FFE600]" },
    { text: "கழுத்து, முதுகு & இடுப்பு வலி", color: "text-white" },
    { text: "முழங்கால் வலி & மூட்டு தேய்மானம்", color: "text-[#FFE600]" },
    { text: "பக்கவாதம் & முகவாதம்", color: "text-white" },
    { text: "தசை பிடிப்பு & சுளுக்கு", color: "text-[#FFE600]" },
    { text: "தண்டுவட பாதிப்பு", color: "text-white" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300 p-4 sm:p-6 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#341870] shadow-2xl ring-4 ring-[#FFE600]/30 transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-white hover:text-black shadow-sm transition-colors"
          aria-label="Close promotion"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[85vh] overflow-y-auto lg:overflow-visible">
          {/* Left Side: Flyer Image */}
          <div className="relative h-72 w-full shrink-0 lg:h-auto lg:w-[45%] bg-[#220d4f]">
            <Image
              src="/images/clinic-flyer-1.jpeg"
              alt="Jeya Physiotherapy Clinic Treatments"
              fill
              className="object-contain lg:object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-[55%]">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFE600]/20 border border-[#FFE600]/50 px-3 py-1 text-xs font-bold text-[#FFE600] self-start">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span>சிறந்த பிசியோதெரபி சிகிச்சை</span>
            </div>
            
            <h2 className="mb-2 text-2xl font-black leading-tight text-[#FFE600] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-3xl lg:text-4xl">
              வலிகளுக்கு நிரந்தர தீர்வு!
            </h2>
            
            <p className="mb-6 text-sm font-bold text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] sm:text-base lg:text-lg">
              19+ வருட அனுபவம் வாய்ந்த மருத்துவரால் அதிநவீன கருவிகளைக் கொண்டு சிகிச்சை அளிக்கப்படுகிறது.
            </p>

            <div className="mb-8 flex flex-col gap-3">
              {treatments.map((treatment, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-black/20 p-2.5 rounded-lg border border-white/5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-inner">
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <span className={`text-base sm:text-lg font-black tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] ${treatment.color}`}>
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
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFE600] px-6 py-4 text-center text-base font-black text-[#341870] shadow-lg shadow-[#FFE600]/20 transition-all hover:bg-white hover:text-[#341870] hover:shadow-xl hover:shadow-white/30 active:scale-[0.98] sm:text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              முன்பதிவு செய்ய / Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
