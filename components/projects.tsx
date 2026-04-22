import Image from "next/image";
import { projects } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="A few things I've built."
            description="Shipped products and ongoing experiments — grouped by what I learned along the way."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface)]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elev)] via-transparent to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {p.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-2.5 py-0.5 text-[11px] text-[var(--color-muted)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
