type Props = {
  from: string;
  to: string;
  height?: number;
  flip?: boolean;
};

export function WaveDivider({ from, to, height = 120, flip = false }: Props) {
  return (
    <div
      style={{ background: to, lineHeight: 0, display: "block", overflow: "hidden" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height,
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      >
        {/* Wave shape: from color fills from top down to the wavy edge */}
        <path
          d="M0,75 C240,25 480,110 720,65 C960,20 1200,95 1440,55 L1440,0 L0,0 Z"
          style={{ fill: from }}
        />
      </svg>
    </div>
  );
}
