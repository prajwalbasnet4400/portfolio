import { site, stats } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering for the long run."
            description={site.bio}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.v} delay={i * 80}>
              <div className="glass rounded-2xl p-6">
                <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  <span className="gradient-text">{stat.k}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
