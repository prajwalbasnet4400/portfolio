type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-subtle)]">
        <span className="gradient-text">{eyebrow}</span>
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)] text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
