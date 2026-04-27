import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c2a20",
        }}
      >
        <svg
          viewBox="0 0 180 180"
          width={132}
          height={132}
          fill="none"
          stroke="#be8e54"
          strokeWidth="6"
        >
          <circle cx="90" cy="90" r="78" strokeOpacity="0.5" />
          <path d="M90 40 L90 140" strokeLinecap="round" />
          <path
            d="M90 52 L68 75 L90 68 L112 75 Z M90 78 L60 106 L90 95 L120 106 Z M90 110 L52 138 L90 126 L128 138 Z"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
