import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Tamil } from "next/font/google";
import type { ReactNode } from "react";
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

export const metadata: Metadata = {
  title: "Jeya Physiotherapy Clinic | Physiotherapy in Dindigul",
  description:
    "Jeya Physiotherapy Clinic in East Govindapuram, Dindigul. Care by Dr. X.Dr.x.sasikala jeyaceline, B.P.T, MIAP. WhatsApp 94454 39296.",
  keywords: [
    "Jeya Physiotherapy Clinic",
    "physiotherapy Dindigul",
    "back pain treatment Dindigul",
    "knee pain physiotherapy",
    "DrDr.x.sasikala jeyaceline",
  ],
  openGraph: {
    title: "Jeya Physiotherapy Clinic",
    description: "Premium local physiotherapy care in East Govindapuram, Dindigul.",
    images: ["/images/hero-physiotherapy.png"],
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
