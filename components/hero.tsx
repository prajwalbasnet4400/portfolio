import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowUpRight, GitHub, Linkedin, Mail } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden className="bg-aurora" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />

      <div className="container-x">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-full opacity-70 blur-xl"
              style={{ background: "linear-gradient(120deg,#a78bfa,#22d3ee,#f472b6)" }}
            />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] sm:h-32 sm:w-32">
              <Image
                src="/images/avatar.jpg"
                alt={`Portrait of ${site.fullName}`}
                fill
                priority
                sizes="128px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1 text-xs text-[var(--color-muted)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new work · Based in {site.location}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
              <span className="gradient-text">{site.name}</span>
              <br className="hidden sm:block" />
              <span className="text-[var(--color-muted)]">
                {site.role}.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] text-pretty sm:text-xl">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/50 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-[var(--color-surface)]"
              >
                View work
              </a>
              <div className="ml-1 flex items-center gap-1 text-[var(--color-muted)]">
                <SocialLink href={site.socials.github} label="GitHub">
                  <GitHub className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={site.socials.linkedin} label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={site.socials.email} label="Email">
                  <Mail className="h-4 w-4" />
                </SocialLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] hover:text-white"
    >
      {children}
    </a>
  );
}
