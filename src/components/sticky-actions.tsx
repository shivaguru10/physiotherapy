import { ContactActions } from "./contact-actions";

export function StickyActions() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 rounded-lg border border-white/40 bg-white/90 p-2 shadow-2xl shadow-[#071E63]/20 backdrop-blur md:left-auto md:right-5 md:w-[390px]">
      <ContactActions compact />
    </div>
  );
}
