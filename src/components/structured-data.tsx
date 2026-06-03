import { clinic, faqs } from "@/lib/clinic";

export function StructuredData() {
  const siteUrl = clinic.siteUrl;

  // 1. LocalBusiness / MedicalBusiness Schema
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${siteUrl}/#clinic`,
    name: clinic.name,
    alternateName: clinic.tamilName,
    description:
      "Jeya Physiotherapy Clinic in East Govindapuram, Dindigul offers expert physiotherapy for back pain, knee pain, paralysis rehabilitation, elderly mobility, and more. Led by Dr. X. Sasikala Jeyaceline, B.P.T, MIAP with 19+ years of experience.",
    url: siteUrl,
    telephone: clinic.phone,
    priceRange: clinic.priceRange,
    image: [`${siteUrl}/images/clinic-photo-1.png`, `${siteUrl}/hero-doctor-v3.png`],
    logo: `${siteUrl}/logo/blitz-logo-clean.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.streetAddress,
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      postalCode: clinic.postalCode,
      addressCountry: clinic.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "20:00",
      },
    ],
    hasMap: clinic.mapsHref,
    medicalSpecialty: "PhysicalTherapy",
    availableService: [
      { "@type": "MedicalTherapy", name: "IFT Therapy" },
      { "@type": "MedicalTherapy", name: "Traction Therapy" },
      { "@type": "MedicalTherapy", name: "Wax Therapy" },
      { "@type": "MedicalTherapy", name: "Manual Therapy" },
      { "@type": "MedicalTherapy", name: "Exercise Therapy" },
      { "@type": "MedicalTherapy", name: "Posture Correction" },
      { "@type": "MedicalTherapy", name: "Neuro Rehabilitation" },
      { "@type": "MedicalTherapy", name: "Elderly Mobility Care" },
    ],
    currenciesAccepted: "INR",
    paymentAccepted: "Cash",
    areaServed: [
      { "@type": "City", name: "Dindigul" },
      { "@type": "State", name: "Tamil Nadu" },
    ],
    sameAs: [clinic.mapsHref],
  };

  // 2. Physician / Person Schema for the Doctor
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#doctor`,
    name: clinic.doctor,
    jobTitle: "Physiotherapist",
    description:
      "Dr. X. Sasikala Jeyaceline is a qualified physiotherapist with B.P.T degree and MIAP membership, offering 19+ years of expert physiotherapy care in Dindigul, Tamil Nadu.",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Bachelor of Physiotherapy (B.P.T)" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "membership", name: "Member of Indian Association of Physiotherapists (MIAP)" },
    ],
    worksFor: { "@id": `${siteUrl}/#clinic` },
    medicalSpecialty: "PhysicalTherapy",
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      addressCountry: clinic.country,
    },
  };

  // 3. FAQPage Schema
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 4. WebSite Schema with SearchAction
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: clinic.name,
    url: siteUrl,
    description:
      "Expert physiotherapy clinic in Dindigul, Tamil Nadu. Back pain, knee pain, paralysis rehab, and elderly mobility care by an experienced physiotherapist.",
    inLanguage: ["en", "ta"],
    publisher: { "@id": `${siteUrl}/#clinic` },
  };

  // 5. BreadcrumbList Schema
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
