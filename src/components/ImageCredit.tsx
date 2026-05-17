import { getImageCredit } from "@/lib/image-credits";

type Props = {
  src: string;
  className?: string;
};

// Renders a small attribution line for licensed images (Wikimedia Commons CC BY,
// CC BY-SA, CC0, or Public Domain). Returns null when no credit entry exists.
export default function ImageCredit({ src, className }: Props) {
  const credit = getImageCredit(src);
  if (!credit) return null;
  const base = "text-[11px] leading-snug text-slate-500/90 mt-2";
  return (
    <p className={className ? `${base} ${className}` : base}>
      Photo:{" "}
      <a
        href={credit.sourceUrl}
        rel="noopener noreferrer nofollow"
        target="_blank"
        className="underline hover:text-slate-700"
      >
        {credit.artist}
      </a>
      , {credit.license}, via Wikimedia Commons.
    </p>
  );
}
