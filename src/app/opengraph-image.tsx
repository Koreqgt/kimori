import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — A Serene Ascent Above Serdang`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "linear-gradient(135deg, #1c2a20 0%, #2c3e2a 55%, #3d4f37 100%)",
          color: "#faf8f3",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 88,
            fontSize: 180,
            color: "#be8e54",
            opacity: 0.12,
            lineHeight: 1,
          }}
        >
          木森
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#be8e54",
          }}
        >
          <div style={{ width: 54, height: 1, background: "#be8e54" }} />
          <span>Premierex Development · Bukit Serdang</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 180,
              letterSpacing: 6,
              lineHeight: 0.95,
              fontWeight: 400,
              color: "#faf8f3",
            }}
          >
            KIMORI
          </div>
          <div
            style={{
              fontSize: 36,
              fontStyle: "italic",
              opacity: 0.9,
              color: "#faf8f3",
              maxWidth: 900,
              lineHeight: 1.2,
            }}
          >
            A quiet ascent above the city — freehold residences shaped by
            Japanese principles of balance, light, and lasting craft.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(250, 248, 243, 0.72)",
          }}
        >
          <div>kimori.my</div>
          <div>418 Units · 34 Facilities · Freehold</div>
        </div>
      </div>
    ),
    size
  );
}
