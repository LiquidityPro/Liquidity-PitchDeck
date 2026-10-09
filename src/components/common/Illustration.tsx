import illustrationsMap from "@/data/illustrations.json";

export type IllustrationKey = keyof typeof illustrationsMap;

export function getIllustrationSvg(key: string): string | null {
  return (illustrationsMap as Record<string, string>)[key] || null;
}

export function Illustration({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const svg = getIllustrationSvg(name);
  if (!svg) return null;

  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
