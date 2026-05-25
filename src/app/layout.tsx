import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeya Physio Clinic | Physiotherapy in Dindigul",
  description:
    "Jeya Physio Clinic in East Govindapuram, Dindigul. Care by Dr. X. Sagila Jeyasilin, B.P.T, MIAP. Call 94867 33238.",
  keywords: [
    "Jeya Physio Clinic",
    "physiotherapy Dindigul",
    "back pain treatment Dindigul",
    "knee pain physiotherapy",
    "Dr Sagila Jeyasilin",
  ],
  openGraph: {
    title: "Jeya Physio Clinic",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
