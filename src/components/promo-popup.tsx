"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Activity, MessageCircle } from "lucide-react";

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasSeenPromo = sessionStorage.getItem("promoShown");

    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsRendered(true);
        // Small delay to allow CSS transition to work after rendering
        setTimeout(() => setIsVisible(true), 50);
        sessionStorage.setItem("promoShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsRendered(false), 300); // Wait for fade out animation
  };

  if (!isRendered) return null;

  const treatments = [
    "Back Pain Treatment",
    "Neck Pain Treatment",
    "Sports Injury Rehab",
    "Knee Pain Management",
    "Post-Surgery Recovery",
    "Joint Pain Therapy",
    "Neuro Rehabilitation",
    "Orthopedic Physio",
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 p-4 sm:p-6 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-500 hover:bg-white hover:text-gray-900 shadow-sm transition-colors"
          aria-label="Close promotion"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[85vh] overflow-y-auto lg:overflow-visible">
          {/* Left Side: Image */}
          <div className="relative h-64 w-full shrink-0 lg:h-auto lg:w-[45%]">
            <Image
              src="/images/promo-poster.png"
              alt="Premium Physiotherapy Care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-black/10 lg:to-transparent" />
            
            {/* Mobile Overlay Text */}
            <div className="absolute bottom-4 left-4 right-4 lg:hidden">
              <h2 className="text-xl font-bold text-white shadow-sm">Expert Physiotherapy Care</h2>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-[55%]">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
              <Activity className="h-3.5 w-3.5" />
              <span>Premium Care</span>
            </div>
            
            <h2 className="mb-3 hidden text-2xl font-black leading-tight text-[#071E63] lg:block sm:text-3xl">
              Expert Physiotherapy & Rehabilitation Care
            </h2>
            
            <p className="mb-6 text-sm font-medium text-gray-600 sm:text-base">
              Helping Patients Recover Faster, Move Better, and Live Pain-Free.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {treatments.map((treatment) => (
                <div key={treatment} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F9F9A]/10 text-[#0F9F9A]">
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{treatment}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919486733238?text=Hello%20Doctor%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20book%20an%20appointment.%20Please%20help%20me%20with%20the%20available%20consultation%20slots."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F9F9A] px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#0F9F9A]/20 transition-all hover:bg-[#0c8581] hover:shadow-xl hover:shadow-[#0F9F9A]/30 active:scale-[0.98] sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
