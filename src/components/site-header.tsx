import { Clock3, MapPin } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { Logo } from "./logo";

const navItems = [
  { label: "Treatments", href: "#treatments" },
  { label: "Doctor", href: "#doctor" },
  { label: "Timing", href: "#timing" },
  { label: "Location", href: "#location" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#071E63]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-3 px-3 sm:h-20 sm:px-6 lg:px-8">
        <Logo compact />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[#071E63]/80 transition hover:text-[#E51B23]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <div className="flex items-center gap-2 rounded-lg bg-[#FFF3BE] px-4 py-3 text-sm font-extrabold text-[#071E63]">
            <Clock3 className="size-4" aria-hidden="true" />
            10:30 AM - 1 PM / 5 - 8 PM
          </div>
          <a
            href={clinic.mapsHref}
            className="flex items-center gap-2 rounded-lg bg-[#F7FAFF] px-4 py-3 text-sm font-extrabold text-[#071E63] shadow-sm ring-1 ring-[#071E63]/10 transition hover:bg-[#FFF3BE] hover:text-[#E51B23]"
          >
            <MapPin className="size-4 shrink-0 text-[#071E63]" aria-hidden="true" />
            Dindigul, Tamilnadu
          </a>
        </div>
        <a
          href={clinic.mapsHref}
          className="inline-flex items-center gap-2 rounded-lg bg-[#F7FAFF] px-3 py-2 text-[11px] font-black leading-tight text-[#071E63] ring-1 ring-[#071E63]/10 sm:text-xs xl:hidden"
        >
          <MapPin className="size-4 shrink-0 text-[#071E63]" aria-hidden="true" />
          <span>Dindigul, Tamilnadu</span>
        </a>
      </div>
    </header>
  );
}
