import { Clock3, PhoneCall } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { ContactActions } from "./contact-actions";
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
          <div className="flex items-center gap-2 rounded-lg bg-[#FFF3BE] px-3 py-2 text-xs font-extrabold text-[#071E63]">
            <Clock3 className="size-4" aria-hidden="true" />
            10:30 AM - 1 PM / 5 - 8 PM
          </div>
          <ContactActions compact />
        </div>
        <a
          href={clinic.phoneHref}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#E51B23] text-white shadow-md shadow-red-950/20 xl:hidden"
          aria-label={`Call ${clinic.phoneDisplay}`}
        >
          <PhoneCall className="size-5" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
