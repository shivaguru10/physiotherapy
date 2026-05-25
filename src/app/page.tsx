import Image from "next/image";
import {
  Bone,
  Brain,
  Certificate,
  FaceMask,
  FirstAid,
  HandHeart,
  Heartbeat,
  PersonSimpleWalk,
  UserFocus,
  Wheelchair,
} from "@phosphor-icons/react/dist/ssr";
import {
  Activity,
  ArrowUp,
  Award,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Dumbbell,
  HeartPulse,
  MapPin,
  MapPinned,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { StickyActions } from "@/components/sticky-actions";
import {
  clinic,
  faqs,
  recoverySteps,
  trustStats,
} from "@/lib/clinic";

const careHighlights = [
  {
    icon: Award,
    title: "Qualified Physiotherapist",
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
    icon: Activity,
    title: "Rehab Support",
    tamil: "மீட்பு சிகிச்சை",
    text: "Guided recovery for weakness, balance, and mobility.",
  },
  {
    icon: MapPin,
    title: "Easy Local Visit",
    tamil: "திண்டுக்கல் கிளினிக்",
    text: "Landmark-based location in East Govindapuram.",
  },
];

const clinicFeatures = [
  { icon: ClipboardCheck, label: "Assessment-first care" },
  { icon: Stethoscope, label: "Manual therapy support" },
  { icon: Dumbbell, label: "Exercise therapy" },
  { icon: ShieldCheck, label: "Posture correction" },
];

const premiumConditions = [
  {
    icon: FirstAid,
    title: "Neck pain",
    text: "Focused care for stiffness, posture strain, and daily movement discomfort.",
  },
  {
    icon: Bone,
    title: "Back pain",
    text: "Support for lower back pain, spine stress, and mobility limitations.",
  },
  {
    icon: PersonSimpleWalk,
    title: "Knee pain",
    text: "Strength, walking confidence, and joint comfort for everyday activity.",
  },
  {
    icon: Brain,
    title: "Paralysis rehab",
    text: "Guided neuro rehabilitation for weakness, control, and functional recovery.",
  },
  {
    icon: FaceMask,
    title: "Facial palsy",
    text: "Gentle therapy support for facial muscle weakness and nerve recovery.",
  },
  {
    icon: Wheelchair,
    title: "Elderly mobility",
    text: "Balance, safer movement, and confidence support for senior patients.",
  },
];

const treatmentShowcases = [
  {
    image: "/images/therapy-elderly-mobility.png",
    title: "Elderly mobility and balance care",
    tamil: "முதியோர் இயக்கம் மற்றும் சமநிலை பராமரிப்பு",
    text: "Guided support for walking confidence, balance, weakness, and safer daily movement.",
    points: ["Balance training", "Weakness recovery", "Safe movement practice"],
  },
  {
    image: "/images/therapy-back-pain.png",
    title: "Back, neck and posture therapy",
    tamil: "முதுகு, கழுத்து மற்றும் உடல் நிலை சிகிச்சை",
    text: "Focused assessment and treatment for pain caused by posture, stiffness, and spine stress.",
    points: ["Neck pain", "Back pain", "Posture correction"],
  },
  {
    image: "/images/therapy-neuro-rehab.png",
    title: "Neuro and family rehabilitation",
    tamil: "நரம்பு மற்றும் குடும்ப மீட்பு சிகிச்சை",
    text: "Patient-friendly rehabilitation for paralysis, hand or leg weakness, and long-term recovery needs.",
    points: ["Paralysis rehab", "Hand and leg weakness", "Functional recovery"],
  },
];

const treatmentCounters = [
  { value: "18+", label: "Pain and rehab concerns covered" },
  { value: "2", label: "Daily consultation sessions" },
  { value: "1:1", label: "Assessment-first care plan" },
  { value: "B.P.T", label: "Qualified physiotherapy care" },
];

const flyerConditionGroups = [
  [
    "கழுத்து வலி",
    "இடுப்பு வலி",
    "முதுகு வலி",
    "மூட்டு வலி",
    "தோள்பட்டை வலி",
    "குதிகால் வலி",
    "தசைப்பிடிப்பு",
    "சுளுக்கு",
  ],
  [
    "நரம்பு அழுத்தம்",
    "ஜவ்வு விலகுதல்",
    "முழங்கால் வலி",
    "மூட்டு தேய்மானம்",
    "பக்கவாதம்",
    "முகவாதம்",
    "கை, கால் செயலிழப்பு",
    "தண்டுவட பாதிப்பு",
    "பிறவிக்குறைபாடு",
  ],
];

const doctorTrust = [
  { icon: Certificate, label: "Qualification", value: clinic.qualification },
  { icon: HandHeart, label: "Care style", value: "Patient-first physiotherapy care" },
  { icon: Heartbeat, label: "Focus", value: "Pain relief and movement recovery" },
  { icon: UserFocus, label: "Experience", value: "Clinical experience details can be added" },
];

const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "Conditions", href: "#conditions" },
  { label: "Doctor", href: "#doctor" },
  { label: "Timing", href: "#timing" },
  { label: "Location", href: "#location" },
  { label: "Questions", href: "#questions" },
];

const footerServices = [
  "Pain relief care",
  "Neuro rehabilitation",
  "Elderly mobility",
  "Posture correction",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home" className="overflow-hidden">
        <HeroSection />
        <TrustStrip />
        <ConditionsTreatedSection />
        <TreatmentsSection />
        
        <CareHighlights />
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
    <section className="relative min-h-[72svh] overflow-hidden bg-[#071E63]">
      <Image
        src="/images/hero-physiotherapy.png"
        alt="Physiotherapist assisting a patient with shoulder mobility therapy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[#071E63]/45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,30,99,0.98)_0%,rgba(7,30,99,0.88)_42%,rgba(7,30,99,0.42)_74%,rgba(7,30,99,0.18)_100%)]" />
      <div className="relative mx-auto flex min-h-[72svh] w-full max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-lg bg-[#FFD447] px-3 py-2 text-xs font-black text-[#071E63] shadow-lg shadow-black/10 sm:text-sm">
            <BadgeCheck className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{clinic.doctor}, {clinic.qualification}</span>
          </div>
          <p className="text-lg font-black text-[#FFD447] sm:text-2xl">{clinic.tamilName}</p>
          <h1 className="mt-2 max-w-[11ch] text-[2.35rem] font-black leading-none text-white sm:max-w-[12ch] sm:text-5xl lg:text-6xl">
            {clinic.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg font-bold leading-7 text-white/90 sm:text-2xl sm:leading-9">
            Advanced physiotherapy care for pain relief, movement recovery, and local families in Dindigul.
          </p>
          <div className="mt-7 grid max-w-3xl grid-cols-3 gap-2 text-xs font-bold text-white/90 sm:gap-3 sm:text-sm">
            {clinic.timings.map((time) => (
              <div key={time.label} className="flex min-h-16 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-2 py-2 backdrop-blur sm:min-h-20 sm:px-3">
                <Clock3 className="size-4 shrink-0 text-[#FFD447]" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-white">{time.label}</span>
                  <span className="block break-words text-white/80">{time.value}</span>
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
      <div className="grid w-full grid-cols-4 gap-px bg-white/20 lg:mx-auto lg:max-w-7xl">
        {trustStats.map((stat) => (
          <div key={stat.label} className="min-h-16 bg-[#071E63] px-1 py-3 text-center sm:min-h-28 sm:px-2 sm:py-5">
            <p className="text-lg font-black leading-none text-[#FFD447] min-[390px]:text-xl sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-[9px] font-extrabold leading-tight min-[390px]:text-[10px] sm:text-sm">{stat.label}</p>
            <p className="mt-1 hidden text-xs font-bold text-white/70 sm:block">{stat.tamil}</p>
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
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {careHighlights.map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
              <div className="flex size-10 items-center justify-center rounded-lg border border-[#071E63]/10 bg-[#F7FAFF] text-[#071E63] sm:size-12">
                <item.icon className="size-4 stroke-[1.8] sm:size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-sm font-black leading-tight text-[#071E63] sm:mt-4 sm:text-lg">{item.title}</h3>
              <p className="mt-1 text-xs font-extrabold leading-tight text-[#E51B23] sm:text-sm">{item.tamil}</p>
              <p className="mt-2 text-xs leading-5 text-slate-700 sm:mt-3 sm:text-sm sm:leading-6">{item.text}</p>
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
          title="Pain relief, mobility and rehabilitation care"
          tamil="வலி நிவாரணம், இயக்கம் மற்றும் மீட்பு சிகிச்சை"
          text="A clearer treatment section with real therapy visuals, quick counters, and the clinic flyer conditions arranged for easy mobile scanning."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {treatmentShowcases.map((care, index) => (
            <article
              key={care.title}
              className={
                index === 0
                  ? "overflow-hidden rounded-lg bg-white shadow-2xl shadow-[#071E63]/15 lg:col-span-2"
                  : "overflow-hidden rounded-lg bg-white shadow-xl shadow-[#071E63]/10"
              }
            >
              <div className={index === 0 ? "relative min-h-[360px] sm:min-h-[460px]" : "relative min-h-[280px] sm:min-h-[340px]"}>
                <Image
                  src={care.image}
                  alt={`${care.title} at Jeya Physiotherapy Clinic`}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,30,99,0)_34%,rgba(7,30,99,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#FFD447]">
                    {index === 0 ? "Featured care" : "Treatment focus"}
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">{care.title}</h3>
                  <p className="mt-1 text-base font-extrabold text-[#FFD447]">{care.tamil}</p>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-white/85">{care.text}</p>
                </div>
              </div>
              <div className="p-5">
                <ul className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {care.points.map((point) => (
                    <li key={point} className="flex min-h-11 items-center gap-2 rounded-lg bg-[#F7FAFF] px-3 py-2 text-sm font-black text-[#071E63]">
                      <CheckCircle2 className="size-4 shrink-0 text-[#0F9F9A]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-px overflow-hidden rounded-lg bg-[#071E63]/15 sm:grid-cols-4">
          {treatmentCounters.map((counter) => (
            <div key={counter.label} className="bg-white px-4 py-5 text-center">
              <p className="text-3xl font-black leading-none text-[#E51B23]">{counter.value}</p>
              <p className="mt-2 text-sm font-black leading-5 text-[#071E63]">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConditionsTreatedSection() {
  return (
    <section id="conditions" className="bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#FFF7D6] p-5 shadow-xl shadow-[#071E63]/10 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#E51B23]">Conditions treated</p>
              <h3 className="mt-2 text-2xl font-black text-[#071E63] sm:text-3xl">
                Flyer-listed problems, cleaned up for easy reading
              </h3>
            </div>
            <p className="max-w-xl text-sm font-semibold leading-6 text-slate-700 sm:text-right">
              The original Tamil flyer items are grouped clearly so patients can quickly find their pain, nerve, joint, or mobility concern.
            </p>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {premiumConditions.map((condition) => (
                <article
                  key={condition.title}
                  className="group rounded-lg border border-[#071E63]/10 bg-[#FFFDF6] p-4 transition hover:-translate-y-1 hover:border-[#0F9F9A]/35 hover:bg-white hover:shadow-xl hover:shadow-[#071E63]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF8F7] text-[#0F7F7B] ring-1 ring-[#0F9F9A]/15 transition group-hover:bg-[#071E63] group-hover:text-[#FFD447]">
                      <condition.icon className="size-6" weight="duotone" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#071E63]">{condition.title}</h4>
                      <p className="mt-1 text-xs font-semibold leading-5 text-slate-700">{condition.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid gap-3 rounded-lg bg-[#071E63] p-4 text-white sm:grid-cols-2">
              {flyerConditionGroups.map((group, groupIndex) => (
                <ul key={groupIndex} className="space-y-2">
                  {group.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base font-extrabold leading-6 text-white">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#FFD447]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorSection() {
  return (
    <section id="doctor" className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="relative min-h-[380px] overflow-hidden rounded-lg bg-[#071E63] shadow-2xl shadow-[#071E63]/15 sm:min-h-[520px]">
          <Image
            src="/images/therapy-elderly-mobility.png"
            alt="Physiotherapist supporting elderly mobility and recovery"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,30,99,0.04)_0%,rgba(7,30,99,0.15)_38%,rgba(7,30,99,0.92)_100%)]" />
          <div className="absolute left-4 top-4 rounded-lg bg-white/92 px-4 py-3 text-[#071E63] shadow-lg shadow-black/10 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#E51B23]">Doctor trust</p>
            <p className="mt-1 text-lg font-black">{clinic.qualification}</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
            <p className="text-sm font-extrabold text-[#FFD447]">Patient-first physiotherapy care</p>
            <p className="mt-2 text-2xl font-black leading-tight">
              Practical treatment for pain, balance, weakness, and movement recovery
            </p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Doctor"
            title={`Care by ${clinic.doctor}`}
            tamil={clinic.tamilDoctor}
            text={`${clinic.qualification} qualified physiotherapy care with a calm, practical, patient-first approach for local families.`}
          />
          <div className="mt-7 rounded-lg border border-[#071E63]/10 bg-[#FFFDF6] p-5 shadow-xl shadow-[#071E63]/5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#E51B23]">Profile</p>
                <h3 className="mt-2 text-2xl font-black text-[#071E63]">{clinic.doctor}</h3>
                <p className="mt-1 text-base font-extrabold text-slate-700">{clinic.qualification}</p>
              </div>
              <div className="rounded-lg bg-[#071E63] px-4 py-3 text-white">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#FFD447]">Experience</p>
                <p className="mt-1 text-sm font-bold">10 +</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {doctorTrust.map((item) => (
                <div key={item.label} className="flex min-h-20 items-center gap-3 rounded-lg border border-[#071E63]/10 bg-white p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF3BE] text-[#071E63] ring-1 ring-[#071E63]/10">
                    <item.icon className="size-5" weight="duotone" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.08em] text-[#E51B23]">{item.label}</p>
                    <p className="mt-1 text-sm font-black leading-5 text-[#071E63]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {clinicFeatures.map((feature) => (
              <div key={feature.label} className="flex min-h-16 items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#071E63]/10 bg-[#F7FAFF] text-[#071E63]">
                  <feature.icon className="size-5 stroke-[1.8]" aria-hidden="true" />
                </div>
                <p className="text-sm font-black text-[#071E63]">{feature.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-[#FFD447] p-5 text-[#071E63]">
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
          <div id="location" className="overflow-hidden rounded-lg bg-[#071E63] text-white shadow-2xl shadow-[#071E63]/20">
            <div className="relative h-[360px] bg-[#071E63] sm:h-[430px]">
              <iframe
                src={clinic.mapsEmbedHref}
                title="Street view near Jeya Physiotherapy Clinic, East Govindapuram, Dindigul"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(7,30,99,0.7)_0%,rgba(7,30,99,0)_100%)]" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-4 py-3 text-sm font-black text-[#071E63] shadow-xl shadow-black/15 backdrop-blur">
                <Navigation className="size-5 text-[#E51B23]" aria-hidden="true" />
                Street View
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-[#FFD447]">Clinic location</p>
                  <h2 className="mt-2 text-3xl font-black">East Govindapuram, Dindigul</h2>
                  <p className="mt-3 text-base font-bold leading-7 text-white/90 sm:text-lg sm:leading-8">{clinic.address}</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4 text-sm font-extrabold leading-7 text-[#FFD447] lg:max-w-sm">
                  {clinic.tamilAddress}
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={clinic.mapsHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#FFD447] px-4 text-sm font-black text-[#071E63] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <MapPinned className="size-5" aria-hidden="true" />
                  Open Directions
                </a>
                <a
                  href={clinic.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#071E63]"
                >
                  <PhoneCall className="size-5" aria-hidden="true" />
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="questions" className="bg-[#FFF7D6] py-14 sm:py-20">
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
    <footer className="relative bg-[#071E63] pb-32 pt-10 text-white sm:pb-10">
      <div className="pointer-events-none sticky bottom-44 z-20 mx-auto h-0 w-full max-w-7xl px-4 sm:bottom-36 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="pointer-events-auto ml-auto flex size-12 items-center justify-center rounded-full bg-[#FFD447] text-[#071E63] shadow-xl shadow-yellow-950/20 ring-4 ring-white/90 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD447] sm:size-14"
          aria-label="Back to top"
        >
          <ArrowUp className="size-6" strokeWidth={3} aria-hidden="true" />
        </a>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 pr-20 sm:px-6 lg:px-8">
        <div className="grid gap-7 border-b border-white/15 pb-7 sm:grid-cols-[1.25fr_0.75fr] lg:grid-cols-[1.25fr_0.75fr_0.8fr_1.05fr]">
          <div>
            <p className="text-2xl font-black leading-tight">{clinic.name}</p>
            <p className="mt-1 font-bold text-[#FFD447]">{clinic.tamilName}</p>
            <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-white/72">
              Patient-first physiotherapy care for pain relief, mobility, neuro rehabilitation, and local families in Dindigul.
            </p>
            <p className="mt-3 text-sm font-black text-white">{clinic.doctor}</p>
            <p className="mt-1 text-sm font-bold text-white/70">{clinic.qualification}</p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#FFD447]">Quick links</p>
            <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm" aria-label="Footer quick links">
              {footerQuickLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-bold text-white/75 transition hover:text-[#FFD447]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#FFD447]">Care</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-1">
              {footerServices.map((service) => (
                <li key={service} className="flex items-center gap-2 font-bold text-white/75">
                  <CheckCircle2 className="size-4 shrink-0 text-[#0F9F9A]" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#FFD447]">Visit</p>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/75">{clinic.address}</p>
            <div className="mt-4 grid gap-2 min-[420px]:grid-cols-2">
              <a
                href={clinic.mapsHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#FFD447] px-3 text-sm font-black text-[#071E63] transition hover:bg-white"
              >
                <MapPinned className="size-4" aria-hidden="true" />
                Direction
              </a>
              <a
                href={clinic.phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 text-sm font-black text-white transition hover:bg-white hover:text-[#071E63]"
              >
                <PhoneCall className="size-4" aria-hidden="true" />
                Call
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-3 py-4 text-xs font-bold text-white/60 sm:grid-cols-2 sm:items-center">
          <p>© 2026 {clinic.name}</p>
          <a
            href="https://www.blitzsolutions.online/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-full flex-wrap items-center gap-2 justify-self-start rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70 transition hover:border-[#FFD447]/40 hover:bg-white/10 hover:text-white sm:flex-nowrap sm:justify-self-end"
          >
            <span>Designed & developed by</span>
            <span className="inline-flex min-h-8 items-center rounded-full bg-white px-3 shadow-sm">
              <Image
                src="/logo/blitz-logo-clean.png"
                alt="Blitz Solutions"
                width={82}
                height={24}
                className="h-5 w-auto"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
