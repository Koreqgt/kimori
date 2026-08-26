import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Instrument_Sans,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

// Loaded variable (no `weight`) so the whole 400-700 range costs one file.
// Instrument Sans bottoms out at 400, which is the point: the old Inter Light
// went hairline at the 12px the facility legend and micro-labels run at.
// `wdth` is pulled in as an extra axis -- the five-column facilities grid needs
// to squeeze "CLOSENESS COMMUNITY" into a fifth of the container, and narrowing
// the chip is what buys back the two points of size it was giving up.
const sans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "optional",
  preload: false,
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "optional",
  preload: false,
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
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
        alt: `${siteConfig.name}: ${siteConfig.brandLine}`,
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
        alternateName: ["森", "木森", "Kimori Serdang", "Kimori Bukit Serdang"],
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
        containedInPlace: { "@id": `${siteConfig.url}/#bukit-serdang` },
      },
      {
        "@type": "Place",
        "@id": `${siteConfig.url}/#bukit-serdang`,
        name: "Bukit Serdang",
        alternateName: ["Serdang", "Seri Kembangan"],
        description:
          "Bukit Serdang is an elevated mature township within Seri Kembangan, Selangor, minutes from UPM, MRT Putrajaya Line, and the southern Klang Valley corridor.",
        containedInPlace: {
          "@type": "Place",
          name: "Seri Kembangan, Selangor, Malaysia",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 3.0138,
          longitude: 101.7069,
        },
      },
      {
        "@type": "RealEstateListing",
        "@id": `${siteConfig.url}/#listing`,
        name: "KIMORI Residences: New Freehold Project in Bukit Serdang",
        url: siteConfig.homeUrl,
        description:
          "New freehold condominium project in Bukit Serdang, Seri Kembangan. 418 units across 28 storeys, two layouts (Type A 1,095 sq ft, Type B 857 sq ft), 34 facilities, and unblocked KLCC views.",
        image: [
          `${siteConfig.url}/assets/aerial.jpg`,
          `${siteConfig.url}/assets/iconic.jpg`,
        ],
        datePosted: "2026-04-25",
        about: { "@id": `${siteConfig.url}/#residence` },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#developer`,
        name: "Premierex Development Sdn Bhd",
        alternateName: "Premierex",
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
        areaServed: [
          { "@type": "AdministrativeArea", name: "Selangor" },
          { "@type": "AdministrativeArea", name: "Klang Valley" },
          { "@type": "Place", name: "Bukit Serdang" },
          { "@type": "Place", name: "Seri Kembangan" },
          { "@type": "Place", name: "Serdang" },
          { "@type": "Country", name: "Malaysia" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Malaysia",
            item: `${siteConfig.url}/#malaysia`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Selangor",
            item: `${siteConfig.url}/#selangor`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Seri Kembangan",
            item: `${siteConfig.url}/#seri-kembangan`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Bukit Serdang",
            item: `${siteConfig.url}/#bukit-serdang`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "KIMORI Residences",
            item: siteConfig.homeUrl,
          },
        ],
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
            name: "Is KIMORI a new project in Serdang?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. KIMORI is a new freehold condominium project in Serdang, specifically on the highest peak of Bukit Serdang within the Seri Kembangan township in Selangor. It is the latest residential project by Premierex Development Sdn Bhd and one of the few new freehold launches in the Serdang area.",
            },
          },
          {
            "@type": "Question",
            name: "What is the latest new launch in Bukit Serdang?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI Residences is the latest new launch in Bukit Serdang. It is a 28-storey, 418-unit freehold condominium project on Jalan BS 1/2, sited on the highest peak of the hill, with two layouts (Type A 1,095 sq ft and Type B 857 sq ft) and 34 facilities.",
            },
          },
          {
            "@type": "Question",
            name: "Are there any new freehold condominium projects in Seri Kembangan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, KIMORI Residences is a new freehold condominium project in Seri Kembangan, located on Bukit Serdang at Jalan BS 1/2, 43300 Seri Kembangan. Freehold tenure is rare in this corridor, making it a notable new launch for the Serdang and Seri Kembangan area.",
            },
          },
          {
            "@type": "Question",
            name: "Where is KIMORI located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KIMORI is located at Jalan BS 1/2, Bukit Serdang, 43300 Seri Kembangan, Selangor, Malaysia, on the highest peak of Bukit Serdang. It is 3 km from the UPM MRT Station, within 10 km of 5 hospitals, and close to 8 or more shopping malls.",
            },
          },
          {
            "@type": "Question",
            name: "Is KIMORI a freehold development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. KIMORI Residences is fully freehold, meaning owners hold the land title in perpetuity with no expiry. This is a rare tenure status in the Serdang and Seri Kembangan area.",
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
              text: "KIMORI is developed by Premierex Development Sdn Bhd, a Malaysian developer with 30+ years of combined industry experience. Their previously completed project is Kondominium Timur Perdana, a 350-unit high-rise delivered in 2022.",
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
      className={`${sans.variable} ${cormorant.variable} ${notoSerifJp.variable}`}
      data-scroll-behavior="smooth"
    >
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
