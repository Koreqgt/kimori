import Link from "next/link";
import { TreeMark } from "@/components/ui/tree-mark";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// Shared chrome for the disclaimer and privacy pages: the nav bar in its
// scrolled state on top, the CTA footer's dark band underneath.
export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="legal-top">
        <Link href="/" className="legal-logo" aria-label={`${siteConfig.name} home`}>
          <TreeMark />
          <span className="legal-wordmark">KIMORI</span>
        </Link>
        <Link href="/" className="nav-cta">
          Back to home
        </Link>
      </header>

      <main>{children}</main>

      <footer className="legal-foot">
        <div className="container-k">
          <div className="legal-foot-grid">
            <div>
              <div className="foot-heading">Sales Gallery</div>
              <address className="legal-foot-address">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postal} {siteConfig.address.locality},{" "}
                {siteConfig.address.region}, {siteConfig.address.country}
                <br />
                <a href={`tel:+${siteConfig.whatsapp}`}>{siteConfig.phone}</a>
              </address>
            </div>
            <Button asChild variant="outline-light">
              <Link href="/#cta">Arrange a Private Viewing</Link>
            </Button>
          </div>
          <div className="foot-bottom">
            <div>
              © {new Date().getFullYear()} KIMORI Residences. All rights
              reserved.
            </div>
            <div className="legal-foot-links">
              <Link href="/disclaimer">Particulars &amp; Disclaimer</Link>
              <Link href="/privacy">Privacy Notice</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
