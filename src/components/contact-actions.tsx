import { MessageCircle, PhoneCall } from "lucide-react";
import { clinic } from "@/lib/clinic";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-extrabold transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function ContactActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid grid-cols-2 gap-2" : "flex flex-col gap-3 sm:flex-row"}>
      <a
        href={clinic.phoneHref}
        className={`${base} bg-[#E51B23] text-white shadow-lg shadow-red-950/20 focus-visible:outline-[#FFD447]`}
      >
        <PhoneCall className="size-4" aria-hidden="true" />
        <span>{compact ? "Call" : `Call ${clinic.phoneDisplay}`}</span>
      </a>
      <a
        href={clinic.whatsappHref}
        className={`${base} bg-[#0A8F4D] text-white shadow-lg shadow-green-950/20 focus-visible:outline-[#FFD447]`}
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
