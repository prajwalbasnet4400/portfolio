import { site } from "@/lib/site";
import { GitHub, Linkedin, Mail } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="container-x flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "linear-gradient(120deg,#a78bfa,#22d3ee,#f472b6)" }}
          />
          © {year} {site.fullName}. Crafted with Next.js.
        </div>
        <div className="flex items-center gap-1 text-[var(--color-muted)]">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--color-surface)] hover:text-white"
          >
            <GitHub className="h-4 w-4" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--color-surface)] hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={site.socials.email}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--color-surface)] hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
