import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { developerAddress, developerName } from "@/lib/legal";

const pageUrl = `${siteConfig.url}/privacy`;
const description =
  "Privacy notice for the KIMORI Residences website under the Personal Data Protection Act 2010, in English and Bahasa Malaysia.";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: pageUrl,
    siteName: siteConfig.name,
    title: `Privacy Notice · ${siteConfig.name}`,
    description,
  },
  robots: { index: false, follow: true },
};

type Clause = {
  heading: string;
  paras?: string[];
  list?: string[];
  after?: string;
};

type Notice = {
  lang: "en" | "ms";
  num: string;
  title: string;
  titleEm: string;
  effective: string;
  intro: string;
  clauses: Clause[];
  contactHeading: string;
  contactIntro: string;
};

// PDPA 2010 s.7 requires the notice in both national language and English.
// Keep the two versions clause-for-clause: the English one prevails if they
// ever disagree, but they should not be allowed to.
const notices: Notice[] = [
  {
    lang: "en",
    num: "01",
    title: "Privacy",
    titleEm: "notice.",
    effective: "Effective 30 September 2026",
    intro: `This Privacy Notice explains how ${developerName} ("Premierex", "we", "us") collects and processes your personal data through the KIMORI Residences website, in accordance with the Personal Data Protection Act 2010 ("PDPA").`,
    clauses: [
      {
        heading: "Personal data we collect",
        paras: [
          "When you submit the enquiry form, we collect your name, email address, phone number, preferred unit type and any message you choose to include. We also collect anonymous, aggregated website usage statistics that do not identify you.",
        ],
      },
      {
        heading: "Source",
        paras: ["Your personal data is collected directly from you."],
      },
      {
        heading: "Purposes",
        paras: ["We process your personal data:"],
        list: [
          "to respond to your enquiry and arrange viewings at the Sales Gallery;",
          "to send you information about KIMORI Residences, including launches, pricing and promotions;",
          "to process a booking or purchase, should you choose to proceed; and",
          "for internal record keeping, and to comply with legal and regulatory requirements.",
        ],
      },
      {
        heading: "Obligatory and voluntary data",
        paras: [
          "Your name, email address, phone number and preferred unit type are obligatory; your message is optional. If the obligatory data is not provided, we may be unable to respond to your enquiry.",
        ],
      },
      {
        heading: "Disclosure",
        paras: ["We may disclose your personal data to:"],
        list: [
          "authorised marketing agencies, agents and sales representatives appointed for this project;",
          "service providers who host this website and deliver our email; and",
          "regulators and authorities, where required by law.",
        ],
        after: "We do not sell your personal data.",
      },
      {
        heading: "Transfer outside Malaysia",
        paras: [
          "Some of our service providers process data on servers located outside Malaysia. Where this happens, we take reasonable steps to ensure your personal data is protected to a standard comparable to the PDPA.",
        ],
      },
      {
        heading: "Retention and security",
        paras: [
          "We keep your personal data only for as long as it is needed for the purposes above, or as required by law, and take practical steps to protect it from loss, misuse, modification, unauthorised access and disclosure.",
        ],
      },
      {
        heading: "Your rights",
        paras: [
          "You may request access to and correction of your personal data, withdraw your consent, and ask us to stop sending you marketing material at any time. Requests should be made in writing using the contact details below. A prescribed fee may be charged for data access requests, as permitted under the PDPA.",
        ],
      },
      {
        heading: "Consent",
        paras: [
          "By ticking the consent box and submitting the enquiry form, you consent to the processing of your personal data as described in this notice.",
        ],
      },
      {
        heading: "Language and changes",
        paras: [
          "This notice is issued in English and Bahasa Malaysia. If there is any inconsistency between the two, the English version prevails. We may update this notice from time to time, and the latest version will always be available on this page.",
        ],
      },
    ],
    contactHeading: "Contact us",
    contactIntro:
      "For enquiries, access or correction requests, or to withdraw your consent, please contact:",
  },
  {
    lang: "ms",
    num: "02",
    title: "Notis",
    titleEm: "privasi.",
    effective: "Berkuat kuasa 30 September 2026",
    intro: `Notis Privasi ini menerangkan cara ${developerName} ("Premierex", "kami") mengumpul dan memproses data peribadi anda melalui laman web KIMORI Residences, selaras dengan Akta Perlindungan Data Peribadi 2010 ("APDP").`,
    clauses: [
      {
        heading: "Data peribadi yang kami kumpul",
        paras: [
          "Apabila anda menghantar borang pertanyaan, kami mengumpul nama, alamat e-mel, nombor telefon, jenis unit pilihan dan sebarang mesej yang anda sertakan. Kami juga mengumpul statistik penggunaan laman web secara agregat dan tanpa nama yang tidak mengenal pasti anda.",
        ],
      },
      {
        heading: "Sumber",
        paras: ["Data peribadi anda diperoleh secara terus daripada anda."],
      },
      {
        heading: "Tujuan",
        paras: ["Kami memproses data peribadi anda:"],
        list: [
          "untuk menjawab pertanyaan anda dan mengatur lawatan ke Galeri Jualan;",
          "untuk menghantar maklumat mengenai KIMORI Residences kepada anda, termasuk pelancaran, harga dan promosi;",
          "untuk memproses tempahan atau pembelian, sekiranya anda memilih untuk meneruskannya; dan",
          "untuk simpanan rekod dalaman, dan bagi mematuhi keperluan undang-undang dan peraturan.",
        ],
      },
      {
        heading: "Data wajib dan sukarela",
        paras: [
          "Nama, alamat e-mel, nombor telefon dan jenis unit pilihan anda adalah wajib; mesej anda adalah pilihan. Jika data wajib tidak diberikan, kami mungkin tidak dapat menjawab pertanyaan anda.",
        ],
      },
      {
        heading: "Pendedahan",
        paras: ["Kami mungkin mendedahkan data peribadi anda kepada:"],
        list: [
          "agensi pemasaran, ejen dan wakil jualan yang diberi kuasa dan dilantik bagi projek ini;",
          "penyedia perkhidmatan yang menjadi hos laman web ini dan menghantar e-mel kami; dan",
          "badan kawal selia dan pihak berkuasa, sekiranya dikehendaki oleh undang-undang.",
        ],
        after: "Kami tidak menjual data peribadi anda.",
      },
      {
        heading: "Pemindahan ke luar Malaysia",
        paras: [
          "Sesetengah penyedia perkhidmatan kami memproses data di pelayan yang terletak di luar Malaysia. Dalam keadaan sedemikian, kami mengambil langkah yang munasabah untuk memastikan data peribadi anda dilindungi pada tahap yang setara dengan APDP.",
        ],
      },
      {
        heading: "Tempoh simpanan dan keselamatan",
        paras: [
          "Kami menyimpan data peribadi anda hanya selama yang diperlukan bagi tujuan di atas, atau sebagaimana yang dikehendaki oleh undang-undang, dan mengambil langkah praktikal untuk melindunginya daripada kehilangan, penyalahgunaan, pengubahsuaian, akses tanpa kebenaran dan pendedahan.",
        ],
      },
      {
        heading: "Hak anda",
        paras: [
          "Anda boleh meminta akses kepada dan pembetulan data peribadi anda, menarik balik persetujuan anda, dan meminta kami berhenti menghantar bahan pemasaran kepada anda pada bila-bila masa. Permintaan hendaklah dibuat secara bertulis melalui butiran hubungan di bawah. Fi yang ditetapkan mungkin dikenakan bagi permintaan akses data, sebagaimana yang dibenarkan di bawah APDP.",
        ],
      },
      {
        heading: "Persetujuan",
        paras: [
          "Dengan menanda kotak persetujuan dan menghantar borang pertanyaan, anda bersetuju dengan pemprosesan data peribadi anda sebagaimana yang diterangkan dalam notis ini.",
        ],
      },
      {
        heading: "Bahasa dan perubahan",
        paras: [
          "Notis ini dikeluarkan dalam bahasa Inggeris dan Bahasa Malaysia. Sekiranya terdapat sebarang percanggahan antara kedua-duanya, versi bahasa Inggeris akan diguna pakai. Kami mungkin mengemas kini notis ini dari semasa ke semasa, dan versi terkini akan sentiasa tersedia di halaman ini.",
        ],
      },
    ],
    contactHeading: "Hubungi kami",
    contactIntro:
      "Untuk pertanyaan, permintaan akses atau pembetulan, atau untuk menarik balik persetujuan anda, sila hubungi:",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="container-k">
          <div className="sec-eyebrow">Legal Information</div>
          <div className="about-kanji jp" aria-hidden="true">
            木森
          </div>
          <h1 className="sec-title">
            Privacy
            <br />
            <em>notice.</em>
          </h1>
          <p className="sec-lede legal-lede">
            How we collect and use the personal data you share with us, under
            the Personal Data Protection Act 2010. Notis ini juga disediakan
            dalam Bahasa Malaysia di bawah.
          </p>
        </div>
      </section>

      {notices.map((n) => (
        <section
          key={n.lang}
          className="legal-section"
          lang={n.lang}
          aria-labelledby={`privacy-${n.lang}`}
        >
          <div className="container-k">
            <div className="legal-grid">
              <div className="legal-aside">
                <div className="legal-num">{n.num}</div>
                <h2 id={`privacy-${n.lang}`} className="legal-h2">
                  {n.title} <em>{n.titleEm}</em>
                </h2>
                <div className="legal-effective">{n.effective}</div>
              </div>
              <div className="about-body legal-prose">
                <p>{n.intro}</p>
                {n.clauses.map((c) => (
                  <div key={c.heading} className="legal-clause">
                    <h3>{c.heading}</h3>
                    {c.paras?.map((p) => <p key={p}>{p}</p>)}
                    {c.list && (
                      <ul>
                        {c.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )}
                    {c.after && <p>{c.after}</p>}
                  </div>
                ))}
                <div className="legal-clause">
                  <h3>{n.contactHeading}</h3>
                  <p>{n.contactIntro}</p>
                  <address className="legal-address">
                    {developerName}
                    <br />
                    {developerAddress}
                    <br />
                    <a href={`tel:+${siteConfig.whatsapp}`}>{siteConfig.phone}</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
