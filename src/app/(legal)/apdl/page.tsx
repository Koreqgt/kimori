import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  advertisementDisclaimer,
  developerSiteUrl,
  particulars,
  teduhUrl,
} from "@/lib/legal";

const pageUrl = `${siteConfig.url}/apdl`;
const description =
  "Advertising permit, developer's licence and project particulars (APDL) for KIMORI Residences by Premierex Sdn Bhd, with the website disclaimer.";

export const metadata: Metadata = {
  title: "APDL & Disclaimer",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: pageUrl,
    siteName: siteConfig.name,
    title: `APDL & Disclaimer · ${siteConfig.name}`,
    description,
  },
  robots: { index: false, follow: true },
};

export default function ApdlPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="container-k">
          <div className="sec-eyebrow">Legal Information</div>
          <div className="about-kanji jp" aria-hidden="true">
            木森
          </div>
          <h1 className="sec-title">
            Advertising Permit &amp;
            <br />
            <em>Developer License.</em>
          </h1>
          <p className="sec-lede legal-lede">
            The advertising permit, developer&apos;s license and other
            statutory particulars of the KIMORI Residences development, and
            the terms on which this website is provided.
          </p>
        </div>
      </section>

      <section className="legal-section" aria-labelledby="particulars-title">
        <div className="container-k">
          <div className="legal-grid">
            <div className="legal-aside">
              <div className="legal-num">01</div>
              <h2 id="particulars-title" className="legal-h2">
                Project <em>particulars.</em>
              </h2>
            </div>
            <div>
              <dl className="legal-particulars">
                {particulars.map((p) => (
                  <div key={p.label} className={p.wide ? "wide" : undefined}>
                    <dt>{p.label}</dt>
                    <dd>
                      {p.value}
                      {p.detail && <span>{p.detail}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="legal-note">
                <div className="legal-note-label">Disclaimer</div>
                <p>{advertisementDisclaimer}</p>
                <p className="legal-teduh">
                  Maklumat pemajuan boleh disemak di portal{" "}
                  <a
                    href={teduhUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    teduh.kpkt.gov.my
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-section" aria-labelledby="website-title">
        <div className="container-k">
          <div className="legal-grid">
            <div className="legal-aside">
              <div className="legal-num">02</div>
              <h2 id="website-title" className="legal-h2">
                Website <em>disclaimer.</em>
              </h2>
            </div>
            <div className="about-body legal-prose">
              <p>
                This website is the official project website for KIMORI
                Residences and is owned and operated by Premierex Sdn Bhd. For
                more information about Premierex Sdn Bhd, please visit{" "}
                <a
                  href={developerSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  premierex.my
                </a>
                .
              </p>
              <p>
                This website is provided solely for general information
                purposes in relation to the KIMORI Residences development.
              </p>
              <p>
                Premierex Sdn Bhd may appoint authorised marketing agencies,
                agents, or sales representatives to assist with marketing,
                advertising, and responding to inquiries relating to this
                project. For the avoidance of doubt, such parties are not
                authorised to make any representations or warranties on behalf
                of the developer unless expressly confirmed in writing by
                Premierex Sdn Bhd. Official project information may be
                disseminated through this website and Premierex&apos;s
                official channels, and users are encouraged to verify any
                information relating to the project directly with the
                developer.
              </p>
              <p>
                All images, renderings, illustrations, plans, specifications,
                and other materials presented on this website are for
                illustrative and general reference purposes only. Actual
                designs, specifications, layouts, finishes, features, and
                dimensions may vary and are subject to changes and approval(s)
                by the relevant authorities, consultants, and/or the
                developer. Nothing contained on this website shall constitute
                or be deemed to constitute any offer, representation,
                warranty, or contractual commitment (whether express or
                implied), nor shall it form part of any agreement. Any sale
                and purchase of the property shall be subject strictly to the
                terms and conditions of the Sale and Purchase Agreement to be
                executed between the purchaser and the developer.
              </p>
              <p>
                While reasonable care has been taken in preparing the
                information on this website, the developer makes no
                representation or warranty as to the accuracy, completeness,
                or currency of the information provided, and shall not be
                liable for any reliance placed on such information.
              </p>
              <p>
                For official inquiries, appointments, or further information
                regarding KIMORI Residences, please contact us using the
                details below.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
