import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Instrument_Sans,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { FAQS } from "@/lib/faq";
import { developerSiteUrl } from "@/lib/legal";
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

// `swap`, not `optional`. `optional` gives the file a ~100ms block period and
// no swap period at all, so on a cold visit Cormorant loses the race and the
// browser locks in the fallback for the whole page load -- generic serif is
// Times, which has neither a 300 nor a 600, so the hero drops to regular and
// the nav wordmark synthesises to actual bold. It only looked right on the
// second visit, off disk cache. Preloaded because this is the nav and hero
// face: the fetch has to start in <head> or the swap flashes above the fold.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// Same swap fix, but left unpreloaded: the JP face is decorative (the 木森
// marks) and its CJK slices are far too heavy to spend head bandwidth on.
const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
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
      // Same @id premierex.my publishes for itself, so search engines read
      // this as one developer that owns KIMORI rather than treating this
      // domain as Premierex's homepage. Full details live on premierex.my.
      {
        "@type": "Organization",
        "@id": `${developerSiteUrl}/#organization`,
        name: "Premierex Sdn. Bhd.",
        alternateName: ["Premierex", "Premierex Development"],
        url: developerSiteUrl,
        sameAs: [developerSiteUrl],
        owns: { "@id": `${siteConfig.url}/#residence` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.homeUrl,
        name: "KIMORI Residences",
        alternateName: ["KIMORI", "Kimori", "Kimori Serdang"],
        description: siteConfig.description,
        inLanguage: "en-MY",
        publisher: { "@id": `${developerSiteUrl}/#organization` },
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
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
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
