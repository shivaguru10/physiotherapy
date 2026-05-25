import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-2" aria-label="Jeya Physio Clinic home">
      <Image
        src="/logo/jeya-physio-logo.svg"
        alt="Jeya Physio Clinic"
        width={compact ? 188 : 244}
        height={compact ? 65 : 84}
        priority
        className="h-auto w-[154px] sm:w-[210px] lg:w-[244px]"
      />
    </a>
  );
}
