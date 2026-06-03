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
  testimonials,
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
    title: "Elderly mobility",
    tamil: "முதியோர் இயக்கம்",
    text: "Support for walking confidence, balance & weakness.",
    points: ["Balance training", "Weakness recovery", "Safe movement practice"],
  },
  {
    image: "/images/therapy-back-pain.png",
    title: "Back & neck therapy",
    tamil: "முதுகு, கழுத்து சிகிச்சை",
    text: "Treatment for pain caused by posture & stiffness.",
    points: ["Neck pain", "Back pain", "Posture correction"],
  },
  {
    image: "/images/therapy-neuro-rehab.png",
    title: "Neuro rehabilitation",
    tamil: "நரம்பு மீட்பு சிகிச்சை",
    text: "Rehabilitation for paralysis & hand/leg weakness.",
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
    ,
  ],
];

const doctorTrust = [
  { icon: Certificate, label: "Qualification", value: clinic.qualification },
  { icon: HandHeart, label: "Care style", value: "Patient-first physiotherapy care" },
  { icon: Heartbeat, label: "Focus", value: "Pain relief and movement recovery" },
  { icon: UserFocus, label: "Experience", value: "19+ years of clinical experience" },
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
      {/* Hidden NAP microdata for local SEO — crawlable, not visible */}
      <div
        itemScope
        itemType="https://schema.org/LocalBusiness"
        className="sr-only"
        aria-hidden="true"
      >
        <span itemProp="name">Jeya Physiotherapy Clinic</span>
        <span itemProp="telephone">+91-94867-33238</span>
        <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">89, East Govindapuram</span>,
          <span itemProp="addressLocality">Dindigul</span>,
          <span itemProp="addressRegion">Tamil Nadu</span>
          <span itemProp="postalCode">624001</span>,
          <span itemProp="addressCountry">India</span>
        </address>
        <span itemProp="openingHours" content="Mo-Sa 10:30-13:00">Monday to Saturday: 10:30 AM to 1:00 PM</span>
        <span itemProp="openingHours" content="Mo-Sa 17:00-20:00">Monday to Saturday: 5:00 PM to 8:00 PM</span>
        <link itemProp="url" href="https://jeyaphysiotherapyclinicdgl.com" />
        <meta itemProp="priceRange" content="affordable" />
      </div>
      <main id="home" className="overflow-hidden">
        <HeroSection />
        <TrustStrip />
        <AboutClinicSection />
        <DoctorSection />
        <ClinicPhotosSection />
        <ConditionsTreatedSection />
        <TreatmentsSection />
        
        <CareHighlights />
        
        <RecoverySection />
        <TimingLocationSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#071E63]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-700/40 via-[#071E63] to-[#071E63]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:min-h-[72svh]">
          
          <div className="pt-12 pb-8 text-white lg:py-20 lg:pr-8">
            <div className="flex justify-between relative">
              {/* Text Content - Constrained width on mobile to allow image on right */}
              <div className="relative z-20 w-[62%] sm:w-[70%] lg:w-full">
                <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-lg bg-[#FFD447] px-2.5 py-1.5 text-[10px] sm:text-xs font-black text-[#071E63] shadow-lg shadow-black/10">
                  <BadgeCheck className="size-3.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{clinic.doctor}, {clinic.qualification}</span>
                </div>
                <p className="text-base font-black text-[#FFD447] sm:text-2xl">{clinic.tamilName}</p>
                <h1 className="mt-1 text-[2rem] font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                  {clinic.name}
                </h1>
                <p className="mt-4 text-sm font-bold leading-6 text-white/90 sm:text-lg lg:text-2xl lg:leading-9">
                  Expert physiotherapy care in Dindigul for back pain, knee pain, paralysis rehab &amp; elderly mobility.
                </p>
              </div>

              {/* Mobile Image - Positioned beside the text */}
              <div className="absolute right-[-1rem] top-0 bottom-[-2rem] w-[50%] z-10 lg:hidden pointer-events-none opacity-95">
                <Image
                  src="/hero-doctor-v3.png"
                  alt="Dr. X. Sasikala Jeyaceline, physiotherapist at Jeya Physiotherapy Clinic, Dindigul"
                  fill
                  priority
                  sizes="(max-width: 1024px) 50vw, 100vw"
                  className="object-contain object-right-top drop-shadow-2xl"
                />
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#071E63] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071E63] to-transparent" />
              </div>
            </div>

            {/* Timing Cards */}
            <div className="mt-8 grid max-w-3xl grid-cols-3 gap-2 text-[11px] font-bold text-white/90 sm:gap-4 sm:text-sm relative z-20">
              {clinic.timings.map((time) => (
                <div key={time.label} className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-1.5 sm:gap-3 rounded-lg border border-white/20 bg-white/10 px-2 py-2.5 sm:px-4 sm:py-3 backdrop-blur text-center sm:text-left">
                  <Clock3 className="size-4 sm:size-5 shrink-0 text-[#FFD447]" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-white leading-tight">{time.label}</span>
                    <span className="block break-words text-white/80 text-[9px] sm:text-xs leading-tight mt-0.5 sm:mt-0">{time.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex relative justify-end h-full min-h-[500px]">
            <div className="relative h-full w-full max-w-none self-end">
              <Image
                src="/hero-doctor-v3.png"
                alt="Physiotherapy treatment for back pain"
                fill
                priority
                sizes="50vw"
                className="object-contain object-right-bottom drop-shadow-2xl"
              />
            </div>
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
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual trust"
          title="A clinic page , people can trust at a glance"
          tamil="ஒரே பார்வையில் நம்பிக்கை தரும் தகவல்கள்"
         
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
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-[#FFF7D6] py-10 sm:py-14">
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
              <div className="py-4 sm:p-5">
                <ul className="flex overflow-x-auto gap-2 sm:grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 px-4 sm:px-0 pb-1 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:content-[''] after:w-4 after:shrink-0 sm:after:hidden">
                  {care.points.map((point) => (
                    <li key={point} className="flex shrink-0 min-h-9 sm:min-h-11 items-center gap-1.5 sm:gap-2 rounded-lg bg-[#F7FAFF] px-3 py-2 text-xs sm:text-sm font-black text-[#071E63]">
                      <CheckCircle2 className="size-3.5 sm:size-4 shrink-0 text-[#0F9F9A]" aria-hidden="true" />
                      <span className="whitespace-nowrap sm:whitespace-normal">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-[#071E63]/15 sm:grid-cols-4">
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

function ClinicPhotosSection() {
  const photos = [
    "/images/clinic-photo-1.png",
    "/images/clinic-photo-2.png",
    "/images/clinic-photo-3.png",
    "/images/clinic-photo-4.png",
    "/images/clinic-photo-5.png",
    "/images/clinic-photo-6.png",
  ];

  return (
    <section id="clinic-photos" className="bg-white py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Facilities"
          title="Inside our clinic"
          tamil="எங்கள் கிளினிக்"
          align="center"
        />
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-marquee-photos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track-photos {
            animation: scroll-marquee-photos 40s linear infinite;
          }
          .marquee-track-photos:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="relative mt-10 w-full overflow-hidden flex items-center py-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-white to-transparent"></div>
          
          <div className="flex w-max marquee-track-photos">
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {photos.map((src, idx) => (
                <div 
                  key={`p1-${idx}`} 
                  className="w-[280px] sm:w-[400px] aspect-[4/3] relative shrink-0 rounded-lg overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                  <Image src={src} alt="Jeya Physiotherapy Clinic Facility" fill sizes="(max-width: 640px) 280px, 400px" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
              {photos.map((src, idx) => (
                <div 
                  key={`p2-${idx}`} 
                  className="w-[280px] sm:w-[400px] aspect-[4/3] relative shrink-0 rounded-lg overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
                >
                  <Image src={src} alt="Jeya Physiotherapy Clinic Facility" fill sizes="(max-width: 640px) 280px, 400px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConditionsTreatedSection() {
  return (
    <section id="conditions" className="bg-white py-10 sm:py-14">
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
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {premiumConditions.map((condition) => (
                <article
                  key={condition.title}
                  className="group rounded-lg border border-[#071E63]/10 bg-[#FFFDF6] p-3 sm:p-4 transition hover:-translate-y-1 hover:border-[#0F9F9A]/35 hover:bg-white hover:shadow-xl hover:shadow-[#071E63]/10"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4">
                    <div className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF8F7] text-[#0F7F7B] ring-1 ring-[#0F9F9A]/15 transition group-hover:bg-[#071E63] group-hover:text-[#FFD447]">
                      <condition.icon className="size-5 sm:size-6" weight="duotone" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-[13px] sm:text-base font-black leading-tight text-[#071E63]">{condition.title}</h4>
                      <p className="mt-1 text-[11px] sm:text-xs font-semibold leading-relaxed sm:leading-5 text-slate-700">{condition.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-lg bg-[#071E63] p-4 sm:p-5 text-white sm:gap-4">
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
          
          <div className="mt-8 border-t border-[#071E63]/10 pt-8">
            <div className="text-center sm:text-left">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#E51B23]">Original Referrals</p>
              <h4 className="mt-2 text-xl font-black text-[#071E63]">Clinic Flyers</h4>
            </div>
            <div className="mt-5 grid gap-0 sm:gap-5 sm:grid-cols-2 lg:gap-8 bg-white sm:bg-transparent rounded-lg sm:rounded-none overflow-hidden sm:overflow-visible shadow-lg sm:shadow-none border-4 border-white sm:border-0">
              <div className="relative w-full sm:rounded-lg sm:border-4 sm:border-white sm:shadow-lg overflow-hidden border-b-2 sm:border-b-0 border-slate-100 flex">
                <Image src="/images/clinic-flyer-1.jpeg" alt="Jeya Physiotherapy Clinic Flyer 1" width={1000} height={1500} className="w-full h-auto object-cover" />
              </div>
              <div className="relative w-full sm:rounded-lg sm:border-4 sm:border-white sm:shadow-lg overflow-hidden flex">
                <Image src="/images/clinic-flyer-2.jpeg" alt="Jeya Physiotherapy Clinic Flyer 2" width={1000} height={1500} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorSection() {
  return (
    <section id="doctor" className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="relative min-h-[380px] overflow-hidden rounded-lg bg-[#071E63] shadow-2xl shadow-[#071E63]/15 sm:min-h-[520px]">
          <Image
            src="/doctor_v2.png"
            alt={`Portrait of ${clinic.doctor} at her desk`}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,30,99,0.04)_0%,rgba(7,30,99,0.15)_38%,rgba(7,30,99,0.92)_100%)]" />

          <div className="absolute left-4 top-4 rounded-lg bg-white/92 px-4 py-3 text-[#071E63] shadow-lg shadow-black/10 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#E51B23]">Doctor trust</p>
            <p className="mt-1 text-lg font-black">{clinic.qualification}</p>
          </div>
          
          <div className="absolute right-4 top-4 flex items-center gap-2.5 rounded-full bg-white/92 pl-1.5 pr-4 py-1.5 shadow-lg shadow-black/10 backdrop-blur">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFD447] text-[#071E63] font-black text-xs">
              19+
            </div>
            <p className="text-[10px] font-black leading-[1.1] tracking-widest text-[#071E63] uppercase">
              Years<br />Experience
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7 z-20">
            <p className="text-sm font-extrabold text-[#FFD447]">Patient-first physiotherapy care</p>
           
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
                <p className="mt-1 text-sm font-bold">19 + years</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
              {doctorTrust.map((item) => (
                <div key={item.label} className="flex min-h-[5.5rem] sm:min-h-20 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 rounded-lg border border-[#071E63]/10 bg-white p-3 sm:p-4">
                  <div className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF3BE] text-[#071E63] ring-1 ring-[#071E63]/10">
                    <item.icon className="size-4 sm:size-5" weight="duotone" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-xs font-black uppercase tracking-[0.08em] text-[#E51B23]">{item.label}</p>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-black leading-snug sm:leading-5 text-[#071E63]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
            {clinicFeatures.map((feature) => (
              <div key={feature.label} className="flex min-h-[4rem] sm:min-h-16 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 rounded-lg border border-slate-200 bg-white p-3 sm:p-4">
                <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-lg border border-[#071E63]/10 bg-[#F7FAFF] text-[#071E63]">
                  <feature.icon className="size-4 sm:size-5 stroke-[1.8]" aria-hidden="true" />
                </div>
                <p className="text-[11px] sm:text-sm font-black leading-snug text-[#071E63]">{feature.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-[#FFD447] p-5 text-[#071E63]">
            <p className="text-sm font-black uppercase">Call before visit</p>
            <p className="mt-2 text-2xl font-black">{clinic.phoneDisplay}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

function RecoverySection() {
  return (
    <section className="bg-[#071E63] py-10 text-white sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recovery path"
          title="A simple journey from pain to movement"
          tamil="வலியிலிருந்து இயக்கம் வரை"
        
          tone="dark"
        />
        <div className="mt-6 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
          {recoverySteps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-white/20 bg-white/[0.08] p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-lg bg-[#FFD447] text-lg sm:text-xl font-black text-[#071E63]">
                  {index + 1}
                </div>
                <div className="pt-0.5 sm:pt-1">
                  <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">{step.title}</h3>
                  <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-extrabold text-[#FFD447]">{step.tamil}</p>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-snug sm:leading-7 text-white/80">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimingLocationSection() {
  return (
    <section id="timing" className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Visit"
              title="Timing, call button, and landmark are always easy to find"
              tamil="நேரம், அழைப்பு, முகவரி தெளிவாக"
            />
            <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
              {clinic.timings.map((time) => (
                <div key={time.label} className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-1.5 sm:gap-4 rounded-lg border border-slate-200 bg-[#FFFDF6] p-2 sm:p-4 text-center sm:text-left">
                  <CalendarClock className="size-5 sm:size-6 shrink-0 text-[#E51B23]" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] sm:text-base font-black text-[#071E63] leading-tight">
                      <span className="block sm:inline">{time.label}</span>
                      <span className="hidden sm:inline text-[#071E63]/50 sm:ml-1">/</span>
                      <span className="block sm:inline text-[#071E63]/60 sm:ml-1 text-[9px] sm:text-base">{time.tamil}</span>
                    </p>
                    <p className="mt-1 sm:mt-0 text-[9px] sm:text-sm font-bold text-slate-700 leading-tight">{time.value}</p>
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

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#071E63] py-10 sm:py-14 text-white overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What our patients say"
          tamil=""
          align="center"
          tone="dark"
        />
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: scroll-marquee 40s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="relative mt-10 w-full overflow-hidden flex items-center">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-[#071E63] to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-[#071E63] to-transparent"></div>
          
          <div className="flex w-max marquee-track">
            {/* First Set */}
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={`t1-${idx}`} 
                  className="w-[300px] sm:w-[400px] flex flex-col justify-between shrink-0 rounded-lg bg-white/10 p-6 border border-white/20 backdrop-blur"
                >
                  <div>
                    <div className="flex text-[#FFD447] mb-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/90 text-sm sm:text-base italic leading-relaxed line-clamp-6">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-6 border-t border-white/20 pt-4">
                    <p className="font-bold text-white truncate">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.time}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicated Set for Seamless Loop */}
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={`t2-${idx}`} 
                  className="w-[300px] sm:w-[400px] flex flex-col justify-between shrink-0 rounded-lg bg-white/10 p-6 border border-white/20 backdrop-blur"
                >
                  <div>
                    <div className="flex text-[#FFD447] mb-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/90 text-sm sm:text-base italic leading-relaxed line-clamp-6">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-6 border-t border-white/20 pt-4">
                    <p className="font-bold text-white truncate">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="questions" className="bg-[#FFF7D6] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Fast answers before calling"
          tamil="அழைக்கும் முன் தெரிந்துகொள்ள"
          align="center"
        />
        <div className="mt-8 sm:mt-12 mx-auto max-w-3xl flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg bg-white shadow-sm border border-[#071E63]/5 [&_summary::-webkit-details-marker]:hidden open:shadow-md transition-shadow">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 outline-none list-none">
                <div className="flex gap-3 items-center">
                  <ClipboardCheck className="size-5 shrink-0 text-[#0F9F9A]" aria-hidden="true" />
                  <h3 className="text-base sm:text-lg font-black text-[#071E63] select-none">{faq.question}</h3>
                </div>
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FFF7D6] text-[#071E63] transition-transform duration-300 group-open:-rotate-180">
                  <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="20">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </div>
              </summary>
              <div className="px-5 pb-5 pl-13 sm:pl-[3.25rem] -mt-1 overflow-hidden">
                <p className="leading-relaxed text-sm sm:text-base font-semibold text-slate-700 border-t border-slate-100 pt-3">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#071E63] pb-32 pt-10 text-white sm:pb-10">
      <div className="absolute -top-6 right-4 z-20 sm:right-6 lg:right-8">
        <a
          href="#home"
          className="flex size-10 items-center justify-center rounded-full bg-[#FFD447] text-[#071E63] shadow-xl shadow-yellow-950/20 ring-4 ring-white/90 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD447] sm:size-12"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5 sm:size-6" strokeWidth={3} aria-hidden="true" />
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
            className="inline-flex max-w-full flex-wrap items-center gap-2 justify-self-start rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/70 transition hover:border-[#FFD447]/40 hover:bg-white/10 hover:text-white sm:flex-nowrap sm:justify-self-end lg:mr-36 xl:mr-44"
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

function AboutClinicSection() {
  return (
    <section id="about" className="bg-[#F7FAFF] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="About Us"
          title="எங்களை பற்றி"
          tamil=""
          align="center"
        />
        <div className="mt-5 bg-white p-5 sm:p-7 rounded-xl shadow-lg shadow-[#071E63]/5 border border-slate-100">
          <p className="text-sm sm:text-base lg:text-lg font-bold leading-relaxed sm:leading-8 text-[#071E63]">
            திண்டுக்கல் நகரில் மையப் பகுதியில் கிழக்கு கோவிந்தாபுரத்தில் எங்களது கிளினிக் 19 வருடங்கள் அனுபவம் வாய்ந்த மருத்துவரால் 15 வருடங்கள் செயல்பட்டுக் கொண்டு வருகிறது. அரசு மருத்துவமனை மற்றும் தனியார் மருத்துவமனைகளில் பரிந்துரைக்கப்படும் பிசியோதெரபி சம்பந்தமான அனைத்து வித சிகிச்சைகளும் நவீன கருவிகளைக் கொண்டு மனோதத்துவ ரீதியான முறையிலும் சிறப்பான சிகிச்சை நியாயமான கட்டணத்தில் வழங்கப்பட்டு வருகிறது.
          </p>
        </div>
      </div>
    </section>
  );
}
