import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { FaWhatsapp } from "react-icons/fa6";
import { clinic } from "@/lib/clinic";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-extrabold tracking-[0.01em] transition duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function ContactActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid grid-cols-2 gap-2" : "flex flex-col gap-3 sm:flex-row"}>
      <a
        href={clinic.phoneHref}
        className={`${base} bg-[#E51B23] text-white shadow-lg shadow-red-950/20 ring-1 ring-white/20 hover:-translate-y-0.5 hover:bg-[#C9151C] hover:shadow-xl hover:shadow-red-950/25 focus-visible:outline-[#FFD447]`}
      >
        <PhoneCall className="size-5" weight="duotone" aria-hidden="true" />
        <span>{compact ? "Call" : `Call ${clinic.phoneDisplay}`}</span>
      </a>
      <a
        href={clinic.whatsappHref}
        className={`${base} bg-[#25D366] text-[#052E18] shadow-lg shadow-green-950/20 ring-1 ring-white/30 hover:-translate-y-0.5 hover:bg-[#1FC45D] hover:shadow-xl hover:shadow-green-950/25 focus-visible:outline-[#FFD447]`}
      >
        <FaWhatsapp className="size-5" aria-hidden="true" />
        <span>{compact ? "WhatsApp" : "WhatsApp Now"}</span>
      </a>
    </div>
  );
}
