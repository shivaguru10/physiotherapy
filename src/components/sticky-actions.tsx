import { MessageCircle, PhoneCall } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function StickyActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:right-5" aria-label="Quick contact actions">
      <a
        href={clinic.phoneHref}
        className="contact-float group relative flex size-14 items-center justify-center rounded-full bg-[#E51B23] text-white shadow-xl shadow-red-950/25 ring-4 ring-white/90 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD447]"
        aria-label={`Call ${clinic.phoneDisplay}`}
      >
        <span className="absolute inset-0 rounded-full bg-[#E51B23]/25 opacity-0 transition group-hover:scale-125 group-hover:opacity-100" />
        <PhoneCall className="relative size-6 stroke-[2.1]" aria-hidden="true" />
      </a>
      <a
        href={clinic.whatsappHref}
        className="contact-float contact-float-delay group relative flex size-14 items-center justify-center rounded-full bg-[#0A8F4D] text-white shadow-xl shadow-green-950/25 ring-4 ring-white/90 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD447]"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#0A8F4D]/25 opacity-0 transition group-hover:scale-125 group-hover:opacity-100" />
        <MessageCircle className="relative size-6 stroke-[2.1]" aria-hidden="true" />
      </a>
    </div>
  );
}
