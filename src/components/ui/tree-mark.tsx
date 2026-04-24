type Props = {
  color?: string;
  size?: number;
  className?: string;
};

export function TreeMark({ color = "currentColor", size = 22, className }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" strokeOpacity=".5" />
      <path d="M24 10 L24 38" strokeLinecap="round" />
      <path
        d="M24 14 L18 20 L24 18 L30 20 Z M24 20 L16 28 L24 25 L32 28 Z M24 28 L14 36 L24 33 L34 36 Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
