import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  authors: [{ name: "Premierex Development" }],
  creator: "Premierex Development",
  publisher: "Premierex Development",
  category: "real estate",
  alternates: {
    canonical: siteConfig.homeUrl,
    languages: {
      "en-MY": siteConfig.homeUrl,
      "x-default": siteConfig.homeUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.homeUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.brandLine}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1e2620" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Residence",
        "@id": `${siteConfig.url}/#residence`,
        name: "KIMORI Residences",
        alternateName: "木森",
        description: siteConfig.description,
        url: siteConfig.homeUrl,
        image: [
          `${siteConfig.url}/assets/aerial.jpg`,
          `${siteConfig.url}/assets/iconic.jpg`,
          `${siteConfig.url}/assets/pool.jpg`,
          `${siteConfig.url}/assets/rooftop.jpg`,
        ],
        numberOfRooms: "3-5",
        numberOfAccommodationUnits: 418,
        accommodationCategory: "Condominium",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postal,
          addressCountry: "MY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 3.0138,
          longitude: 101.7069,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#developer`,
        name: "Premierex Development Sdn Bhd",
        url: siteConfig.homeUrl,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postal,
          addressCountry: "MY",
        },
        areaServed: "Malaysia",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.homeUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-MY",
        publisher: { "@id": `${siteConfig.url}/#developer` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.homeUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en-MY",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#residence` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".hero-sub", ".sec-lede", ".feature-desc"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is KIMORI Residences?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI Residences (木森) is a 418-unit freehold condominium perched on the highest peak of Bukit Serdang, Seri Kembangan, Selangor, developed by Premierex Development Sdn Bhd. Designed around Japanese principles of balance, light, and lasting craft, it rises 28 storeys with 34 curated facilities including a 25-metre north-facing infinity pool framing the KLCC skyline.",
            },
          },
          {
            "@type": "Question",
            name: "Where is KIMORI located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI is located at Jalan BS 1/2, Bukit Serdang, 43300 Seri Kembangan, Selangor, Malaysia — on the highest peak of Bukit Serdang. It is 3 km from the UPM MRT Station, within 10 km of 5 hospitals, and close to 8 or more shopping malls.",
            },
          },
          {
            "@type": "Question",
            name: "Is KIMORI a freehold development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. KIMORI Residences is fully freehold, meaning owners hold the land title in perpetuity with no expiry — a rare tenure status in the Serdang and Seri Kembangan area.",
            },
          },
          {
            "@type": "Question",
            name: "How many units does KIMORI have?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI Phase 1 comprises 418 residential units across 28 levels. Two unit types are offered: Type A at 1,095 sq ft (4+1 bedrooms, 2 bathrooms, 2 carparks) and Type B at 857 sq ft (3 bedrooms, 2 bathrooms, 2 carparks).",
            },
          },
          {
            "@type": "Question",
            name: "What unit types are available at KIMORI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI offers two unit types. Type A is 1,095 sq ft with 4+1 bedrooms, 2 bathrooms, and 2 carparks, featuring unblocked KLCC and facilities views. Type B is 857 sq ft with 3 bedrooms, 2 bathrooms, and 2 carparks, designed with north–south ventilation and a dual outlook.",
            },
          },
          {
            "@type": "Question",
            name: "What facilities does KIMORI offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI features 34 curated facilities including a 25-metre north-facing infinity pool, a rooftop garden with pines, lawn, and a par fitness course, a sunken jacuzzi garden screened by timber lattice, and a grand drop-off roundabout centred on a preserved mature canopy tree.",
            },
          },
          {
            "@type": "Question",
            name: "Who is the developer of KIMORI Residences?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI is developed by Premierex Development Sdn Bhd, a Malaysian developer with 30+ years of combined industry experience. Their previously completed project is Kondominium Timur Perdana — a 350-unit high-rise delivered in 2022.",
            },
          },
          {
            "@type": "Question",
            name: "Is KIMORI near an MRT station?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. KIMORI is approximately 3 km from the UPM MRT Station on the Putrajaya Line, providing direct rail access to KL Sentral, KLCC, and Putrajaya.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en-MY"
      className={`${inter.variable} ${cormorant.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500&display=swap"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
