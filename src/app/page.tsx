import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Dumbbell,
  Footprints,
  HeartPulse,
  MapPinned,
  MoveRight,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { ContactActions } from "@/components/contact-actions";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { StickyActions } from "@/components/sticky-actions";
import {
  clinic,
  faqs,
  recoverySteps,
  serviceCards,
  tamilTreatmentTags,
  treatmentTags,
  trustStats,
} from "@/lib/clinic";

const careHighlights = [
  {
    icon: ShieldCheck,
    title: "Qualified Physio",
    tamil: "தகுதி பெற்ற சிகிச்சை",
    text: "Care led by a B.P.T, MIAP physiotherapist.",
  },
  {
    icon: HeartPulse,
    title: "Pain Relief Care",
    tamil: "வலி நிவாரணம்",
    text: "Focused support for daily pain and movement limits.",
  },
  {
    icon: Footprints,
    title: "Rehab Support",
    tamil: "மீட்பு சிகிச்சை",
    text: "Guided recovery for weakness, balance, and mobility.",
  },
  {
    icon: MapPinned,
    title: "Easy Local Visit",
    tamil: "திண்டுக்கல் கிளினிக்",
    text: "Landmark-based location in East Govindapuram.",
  },
];

const clinicFeatures = [
  { icon: Stethoscope, label: "Assessment-first care" },
  { icon: Dumbbell, label: "Exercise therapy" },
  { icon: Activity, label: "Manual therapy support" },
  { icon: Sparkles, label: "Posture correction" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home" className="overflow-hidden">
        <HeroSection />
        <TrustStrip />
        <CareHighlights />
        <TreatmentsSection />
        <DoctorSection />
        <RecoverySection />
        <TimingLocationSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[76svh] overflow-hidden bg-[#071E63]">
      <Image
        src="/images/hero-physiotherapy.png"
        alt="Physiotherapist assisting a patient with shoulder mobility therapy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#071E63]/70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,30,99,0.98)_0%,rgba(7,30,99,0.86)_44%,rgba(7,30,99,0.22)_100%)]" />
      <div className="relative mx-auto flex min-h-[76svh] w-full max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-lg bg-[#FFD447] px-3 py-2 text-xs font-black text-[#071E63] shadow-lg shadow-black/10 sm:text-sm">
            <BadgeCheck className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{clinic.doctor}, {clinic.qualification}</span>
          </div>
          <p className="text-lg font-black text-[#FFD447] sm:text-2xl">{clinic.tamilName}</p>
          <h1 className="mt-2 max-w-[11ch] text-[2.35rem] font-black leading-none text-white sm:max-w-[12ch] sm:text-6xl lg:text-7xl">
            {clinic.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-7 text-white/90 sm:text-2xl sm:leading-9">
            Advanced physiotherapy care for pain relief, movement recovery, and local families in Dindigul.
          </p>
          <div className="mt-7 max-w-xl">
            <ContactActions />
          </div>
          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 text-sm font-bold text-white/90 sm:grid-cols-3">
            {clinic.timings.map((time) => (
              <div key={time.label} className="flex min-h-14 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 backdrop-blur">
                <Clock3 className="size-4 shrink-0 text-[#FFD447]" aria-hidden="true" />
                <span>
                  <span className="block text-white">{time.label}</span>
                  <span className="text-white/80">{time.value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-[#071E63] text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px bg-white/20 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustStats.map((stat) => (
          <div key={stat.label} className="min-h-28 bg-[#071E63] px-2 py-5 text-center">
            <p className="text-3xl font-black text-[#FFD447]">{stat.value}</p>
            <p className="mt-1 text-sm font-extrabold">{stat.label}</p>
            <p className="mt-1 text-xs font-bold text-white/70">{stat.tamil}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CareHighlights() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual trust"
          title="A clinic page local people can trust at a glance"
          tamil="ஒரே பார்வையில் நம்பிக்கை தரும் தகவல்கள்"
          text="Big contact actions, real treatment visuals, Tamil support, timing, and location are kept clear for mobile users."
          align="center"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {careHighlights.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-lg bg-[#FFD447] text-[#071E63]">
                <item.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-black text-[#071E63]">{item.title}</h3>
              <p className="mt-1 text-sm font-extrabold text-[#E51B23]">{item.tamil}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-[#FFF7D6] py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Treatments"
          title="Pain relief and recovery care"
          tamil="வலி நிவாரணம் மற்றும் மீட்பு சிகிச்சை"
          text="Visual service cards keep the important treatments easy to understand without reading long paragraphs."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-lg bg-white shadow-xl shadow-[#071E63]/10">
              <div className="relative aspect-square">
                <Image
                  src={card.image}
                  alt={`${card.title} physiotherapy care`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-[#071E63]">{card.title}</h3>
                <p className="mt-1 text-sm font-extrabold text-[#E51B23]">{card.tamil}</p>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0F9F9A]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-lg bg-[#071E63] p-6 text-white">
            <h3 className="text-2xl font-black">Common problems treated</h3>
            <p className="mt-2 text-sm font-bold text-white/75">
              The original clinic flyer lists these common pain and rehab needs.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tamilTreatmentTags.map((tag) => (
                <span key={tag} className="rounded-lg bg-white/10 px-3 py-2 text-sm font-extrabold text-[#FFD447]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {treatmentTags.map((tag) => (
              <span key={tag} className="rounded-lg border border-[#071E63]/10 bg-white px-3 py-2 text-sm font-bold text-[#071E63] shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorSection() {
  return (
    <section id="doctor" className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-[#071E63] sm:min-h-[480px]">
          <Image
            src="/images/therapy-elderly-mobility.png"
            alt="Physiotherapy support for elderly mobility"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[#071E63]/90 p-5 text-white">
            <p className="text-sm font-extrabold text-[#FFD447]">Personalized physiotherapy care</p>
            <p className="mt-1 text-lg font-black">For pain, balance, weakness, and movement recovery</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Doctor"
            title={`Care by ${clinic.doctor}`}
            tamil={clinic.tamilDoctor}
            text={`${clinic.qualification} qualified physiotherapy care with a practical, patient-friendly approach for local families.`}
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {clinicFeatures.map((feature) => (
              <div key={feature.label} className="flex min-h-20 items-center gap-3 rounded-lg border border-slate-200 bg-[#FFFDF6] p-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#E51B23] text-white">
                  <feature.icon className="size-5" aria-hidden="true" />
                </div>
                <p className="text-base font-black text-[#071E63]">{feature.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-lg bg-[#FFD447] p-5 text-[#071E63]">
            <p className="text-sm font-black uppercase">Call before visit</p>
            <p className="mt-2 text-2xl font-black">{clinic.phoneDisplay}</p>
            <p className="mt-2 text-sm font-bold">
              Morning and evening consultation slots are shown clearly for mobile users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecoverySection() {
  return (
    <section className="bg-[#071E63] py-14 text-white sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recovery path"
          title="A simple journey from pain to movement"
          tamil="வலியிலிருந்து இயக்கம் வரை"
          text="The page explains the care process with quick visuals and short labels so people understand what happens before they call."
          tone="dark"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {recoverySteps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-white/20 bg-white/[0.08] p-6">
              <div className="flex size-12 items-center justify-center rounded-lg bg-[#FFD447] text-xl font-black text-[#071E63]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-black text-white">{step.title}</h3>
              <p className="mt-1 text-base font-extrabold text-[#FFD447]">{step.tamil}</p>
              <p className="mt-4 leading-7 text-white/80">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimingLocationSection() {
  return (
    <section id="timing" className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Visit"
              title="Timing, call button, and landmark are always easy to find"
              tamil="நேரம், அழைப்பு, முகவரி தெளிவாக"
            />
            <div className="mt-7 grid gap-3">
              {clinic.timings.map((time) => (
                <div key={time.label} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-[#FFFDF6] p-4">
                  <CalendarClock className="size-6 shrink-0 text-[#E51B23]" aria-hidden="true" />
                  <div>
                    <p className="font-black text-[#071E63]">
                      {time.label} <span className="text-[#071E63]/50">/ {time.tamil}</span>
                    </p>
                    <p className="font-bold text-slate-700">{time.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="location" className="rounded-lg bg-[#071E63] p-6 text-white sm:p-8">
            <div className="flex size-14 items-center justify-center rounded-lg bg-[#FFD447] text-[#071E63]">
              <Navigation className="size-7" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-3xl font-black">East Govindapuram, Dindigul</h2>
            <p className="mt-3 text-lg font-bold leading-8 text-white/90">{clinic.address}</p>
            <p className="mt-4 rounded-lg bg-white/10 p-4 text-base font-extrabold leading-7 text-[#FFD447]">
              {clinic.tamilAddress}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.mapsHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#FFD447] px-4 text-sm font-black text-[#071E63]"
              >
                <MapPinned className="size-4" aria-hidden="true" />
                Open Directions
              </a>
              <a
                href={clinic.phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/25 px-4 text-sm font-black text-white"
              >
                <PhoneCall className="size-4" aria-hidden="true" />
                Call Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#FFF7D6] py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Fast answers before calling"
          tamil="அழைக்கும் முன் தெரிந்துகொள்ள"
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg bg-white p-5 shadow-sm">
              <div className="flex gap-3">
                <ClipboardCheck className="mt-1 size-5 shrink-0 text-[#0F9F9A]" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-black text-[#071E63]">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071E63] pb-28 pt-10 text-white md:pb-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-2xl font-black">{clinic.name}</p>
          <p className="mt-1 font-bold text-[#FFD447]">{clinic.tamilName}</p>
          <p className="mt-2 text-sm font-semibold text-white/70">{clinic.doctor}, {clinic.qualification}</p>
        </div>
        <a href={clinic.mapsHref} className="inline-flex items-center gap-2 text-sm font-black text-[#FFD447]">
          View clinic location
          <MoveRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
