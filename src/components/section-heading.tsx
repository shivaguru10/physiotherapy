export function SectionHeading({
  eyebrow,
  title,
  tamil,
  text,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  tamil?: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={isDark ? "mb-3 text-xs font-extrabold uppercase text-[#FFD447]" : "mb-3 text-xs font-extrabold uppercase text-[#E51B23]"}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={isDark ? "text-balance text-3xl font-black leading-tight text-white sm:text-4xl" : "text-balance text-3xl font-black leading-tight text-[#071E63] sm:text-4xl"}>
        {title}
      </h2>
      {tamil ? (
        <p className={isDark ? "mt-2 text-xl font-extrabold text-[#FFD447]" : "mt-2 text-xl font-extrabold text-[#071E63]/80"}>
          {tamil}
        </p>
      ) : null}
      {text ? (
        <p className={isDark ? "mt-4 text-base leading-7 text-white/80 sm:text-lg" : "mt-4 text-base leading-7 text-slate-700 sm:text-lg"}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
