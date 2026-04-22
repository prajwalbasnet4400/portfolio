import { experiences } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built things."
            description="Four years of production engineering across backend services, data pipelines, and cloud operations."
          />
        </Reveal>

        <ol className="relative space-y-6 border-l border-[var(--color-border)] pl-6 sm:space-y-8 sm:pl-10">
          {experiences.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 100}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[30px] top-2 h-3 w-3 rounded-full ring-4 ring-[var(--color-bg)] sm:-left-[46px]"
                  style={{ background: "linear-gradient(120deg,#a78bfa,#22d3ee,#f472b6)" }}
                />
                <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 transition-colors hover:border-[var(--color-border-strong)] sm:p-7">
                  <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight">
                        {job.role}{" "}
                        <span className="text-[var(--color-muted)]">· {job.company}</span>
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                        {job.location}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] tabular-nums">
                      {job.period}
                    </p>
                  </header>

                  <p className="mt-4 leading-relaxed text-[var(--color-muted)] text-pretty">
                    {job.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]/90">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-2)]"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
