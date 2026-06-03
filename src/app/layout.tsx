import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Tamil } from "next/font/google";
import type { ReactNode } from "react";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  display: "swap",
});

const siteUrl = "https://jeyaphysiotherapyclinicdgl.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jeya Physiotherapy Clinic | Best Physiotherapy in Dindigul",
    template: "%s | Jeya Physiotherapy Clinic Dindigul",
  },
  description:
    "Jeya Physiotherapy Clinic in East Govindapuram, Dindigul. Expert physiotherapy for back pain, knee pain, neck pain, paralysis rehab & elderly mobility. Dr. X. Sasikala Jeyaceline, B.P.T, MIAP — 19+ years experience. Call 94867 33238.",
  keywords: [
    "physiotherapy Dindigul",
    "best physiotherapy clinic Dindigul",
    "physiotherapist Dindigul",
    "back pain treatment Dindigul",
    "knee pain physiotherapy Dindigul",
    "neck pain treatment Dindigul",
    "paralysis rehabilitation Dindigul",
    "neuro physiotherapy Dindigul",
    "elderly care physiotherapy Dindigul",
    "IFT therapy Dindigul",
    "traction therapy Dindigul",
    "Jeya Physiotherapy Clinic",
    "ஜெயா பிசியோ கிளினிக்",
    "பிசியோதெரபி திண்டுக்கல்",
    "Dr. X. Sasikala Jeyaceline",
    "B.P.T MIAP physiotherapist",
    "East Govindapuram clinic",
    "physiotherapy near me Dindigul",
  ],
  authors: [{ name: "Dr. X. Sasikala Jeyaceline", url: siteUrl }],
  creator: "Jeya Physiotherapy Clinic",
  publisher: "Jeya Physiotherapy Clinic",
  category: "Health & Medical",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
      "ta-IN": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "ta_IN",
    url: siteUrl,
    siteName: "Jeya Physiotherapy Clinic",
    title: "Jeya Physiotherapy Clinic | Best Physiotherapy in Dindigul",
    description:
      "Expert physiotherapy care in East Govindapuram, Dindigul. Back pain, knee pain, paralysis rehab & elderly mobility. Dr. X. Sasikala Jeyaceline, B.P.T, MIAP — 19+ years experience.",
    images: [
      {
        url: "/images/clinic-photo-1.png",
        width: 1200,
        height: 630,
        alt: "Jeya Physiotherapy Clinic — East Govindapuram, Dindigul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeya Physiotherapy Clinic | Best Physiotherapy in Dindigul",
    description:
      "Expert physiotherapy for back pain, knee pain & paralysis rehab in Dindigul. Dr. X. Sasikala Jeyaceline, B.P.T, MIAP.",
    images: ["/images/clinic-photo-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here once the site is live
    // google: "your-google-site-verification-token",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071E63",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${notoSansTamil.variable}`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo meta for local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Dindigul, Tamil Nadu, India" />
        <meta name="geo.position" content="10.3710;77.9734" />
        <meta name="ICBM" content="10.3710, 77.9734" />
        {/* Language */}
        <meta httpEquiv="content-language" content="en, ta" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
