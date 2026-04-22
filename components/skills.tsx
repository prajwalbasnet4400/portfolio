import { skills } from "@/lib/site";
import { skillIconMap } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Toolbox"
            title="Things I reach for."
            description="A short list of what I use on most days — and what I'm happy to pick up next."
          />
        </Reveal>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = skillIconMap[s.icon];
            return (
              <Reveal key={s.name} delay={i * 50}>
                <li className="group relative h-full list-none overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 transition-colors hover:border-[var(--color-border-strong)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: "linear-gradient(120deg,#a78bfa,#22d3ee)" }}
                  />
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent-2)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-base font-medium">{s.name}</div>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">{s.blurb}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
