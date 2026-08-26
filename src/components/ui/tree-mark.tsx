type Props = {
  size?: number;
  className?: string;
};

/**
 * The KIMORI brand mark. It is a single-colour silhouette, so it is drawn as a
 * CSS mask tinted with --mark rather than an <img>, which keeps the brand tan
 * in the palette instead of baked into the PNG. The mark holds that colour on
 * every background; only the wordmark beside it changes with the nav. Mask and
 * colour both live in globals.css (`.tree-mark`).
 */
export function TreeMark({ size = 22, className }: Props) {
  return (
    <span
      className={className ? `tree-mark ${className}` : "tree-mark"}
      aria-hidden="true"
      style={{ width: size, height: size }}
    />
  );
}
