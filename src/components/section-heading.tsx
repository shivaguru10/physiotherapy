export function SectionHeading({
  eyebrow,
  title,
  tamil,
  text,
  align = "left",
  tone = "light",
  titleClassName,
  tamilClassName,
}: {
  eyebrow?: string;
  title: string;
  tamil?: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  titleClassName?: string;
  tamilClassName?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={isDark ? "mb-3 text-xs font-extrabold uppercase text-[#FFD447]" : "mb-3 text-xs font-extrabold uppercase text-[#E51B23]"}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={titleClassName || (isDark ? "text-2xl font-black leading-tight text-white sm:text-4xl sm:text-balance" : "text-2xl font-black leading-tight text-[#071E63] sm:text-4xl sm:text-balance")}>
        {title}
      </h2>
      {tamil ? (
        <p className={tamilClassName || (isDark ? "mt-2 text-lg font-extrabold text-[#FFD447] sm:text-xl" : "mt-2 text-lg font-extrabold text-[#071E63]/80 sm:text-xl")}>
          {tamil}
        </p>
      ) : null}
      {text ? (
        <p className={isDark ? "mt-4 text-sm leading-relaxed text-white/80 sm:text-lg sm:leading-7" : "mt-4 text-sm leading-relaxed text-slate-700 sm:text-lg sm:leading-7"}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
