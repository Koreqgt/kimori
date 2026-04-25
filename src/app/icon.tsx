import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c2a20",
          borderRadius: "50%",
        }}
      >
        <svg
          viewBox="0 0 48 48"
          width={26}
          height={26}
          fill="none"
          stroke="#be8e54"
          strokeWidth="1.8"
        >
          <circle cx="24" cy="24" r="22" strokeOpacity="0.5" />
          <path d="M24 10 L24 38" strokeLinecap="round" />
          <path
            d="M24 14 L18 20 L24 18 L30 20 Z M24 20 L16 28 L24 25 L32 28 Z M24 28 L14 36 L24 33 L34 36 Z"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
