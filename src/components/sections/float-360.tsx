import { siteConfig } from "@/lib/site";

export function Float360() {
  return (
    <a
      href={siteConfig.tour360}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-360"
      aria-label="Open Kimori 360 virtual tour"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </svg>
      <span>Virtual 360° Tour</span>
    </a>
  );
}
