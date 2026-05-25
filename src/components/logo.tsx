import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-2" aria-label="Jeya Physiotherapy Clinic home">
      <Image
        src="/logo/jeya-physio-logo.png"
        alt="Jeya Physiotherapy Clinic"
        width={compact ? 220 : 276}
        height={compact ? 60 : 75}
        priority
        className="h-auto w-[158px] sm:w-[220px] lg:w-[276px]"
      />
    </a>
  );
}
