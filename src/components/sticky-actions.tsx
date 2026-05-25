import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { FaWhatsapp } from "react-icons/fa6";
import { clinic } from "@/lib/clinic";

export function StickyActions() {
  return (
    <div
      className="sticky-contact-actions fixed inset-x-3 bottom-3 z-50 grid grid-cols-[0.9fr_1.1fr] gap-2 rounded-full border border-white/60 bg-white/95 p-2 shadow-2xl shadow-[#071E63]/20 backdrop-blur-md sm:inset-x-auto sm:bottom-5 sm:right-5 sm:flex sm:flex-col sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none"
      aria-label="Quick contact actions"
    >
      <a
        href={clinic.phoneHref}
        className="sticky-contact-call group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-visible rounded-full bg-[#E51B23] px-3 text-sm font-black text-white shadow-lg shadow-red-950/20 ring-1 ring-white/50 transition hover:-translate-y-0.5 hover:bg-[#C9151C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD447] sm:size-14 sm:p-0 sm:shadow-xl sm:shadow-red-950/25 sm:ring-4 sm:ring-white/90"
        aria-label={`Call ${clinic.phoneDisplay}`}
      >
        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition group-hover:scale-105 group-hover:opacity-100 sm:group-hover:scale-125" />
        <PhoneCall className="relative size-5 sm:size-6" weight="duotone" aria-hidden="true" />
        <span className="sticky-contact-label relative sm:sr-only">Call</span>
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#071E63] px-3 py-2 text-xs font-black text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
          Call
        </span>
      </a>
      <a
        href={clinic.whatsappHref}
        className="sticky-contact-whatsapp whatsapp-pulse group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-visible rounded-full bg-[#25D366] px-3 text-sm font-black text-[#052E18] shadow-lg shadow-green-950/20 ring-1 ring-white/50 transition hover:-translate-y-0.5 hover:bg-[#1FC45D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD447] sm:size-16 sm:p-0 sm:shadow-xl sm:shadow-green-950/25 sm:ring-4 sm:ring-white/90"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-white/25 opacity-0 transition group-hover:scale-105 group-hover:opacity-100 sm:group-hover:scale-125" />
        <FaWhatsapp className="relative size-6 sm:size-8" aria-hidden="true" />
        <span className="sticky-contact-label relative sm:sr-only">WhatsApp</span>
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#071E63] px-3 py-2 text-xs font-black text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
