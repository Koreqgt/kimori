import { Reveal } from "@/components/ui/reveal";
import { FAQS } from "@/lib/faq";

/* Native <details>, so every answer is in the server HTML and readable by
   crawlers whether or not it is open -- the FAQPage JSON-LD in the layout
   marks up this exact copy, and must stay backed by visible content. */
export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="container-k">
        <div className="faq-grid">
          <Reveal>
            <div>
              <div className="sec-eyebrow">Questions</div>
              <h2 id="faq-title" className="sec-title">
                About the
                <br />
                <em>Serdang project.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="faq-list">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary className="faq-q">
                    <h3>{q}</h3>
                    <span className="faq-chev" aria-hidden="true" />
                  </summary>
                  <p className="faq-a">{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
