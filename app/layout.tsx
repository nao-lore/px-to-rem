import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "PX to REM Converter - Convert Pixels to REM | px-to-rem",
  description:
    "Free online PX to REM converter. Instantly convert pixels to rem and rem to px with a customizable base font size. Includes bulk converter and quick reference table.",
  keywords: [
    "px to rem",
    "rem to px",
    "pixel to rem converter",
    "css unit converter",
    "rem calculator",
    "px rem conversion",
  ],
  authors: [{ name: "px-to-rem" }],
  openGraph: {
    title: "PX to REM Converter - Convert Pixels to REM",
    description:
      "Free online tool to convert PX to REM and REM to PX instantly. Customizable base font size, bulk converter, and quick reference table.",
    url: "https://px-to-rem.vercel.app",
    siteName: "px-to-rem",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PX to REM Converter - Convert Pixels to REM",
    description:
      "Free online tool to convert PX to REM and REM to PX instantly. Customizable base font size, bulk converter, and quick reference table.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://px-to-rem.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PX to REM Converter",
              description:
                "Free online PX to REM converter. Instantly convert pixels to rem and rem to px with customizable base font size.",
              url: "https://px-to-rem.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Two-way PX to REM conversion",
                "Customizable base font size",
                "Quick reference table",
                "Bulk converter for multiple values",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
