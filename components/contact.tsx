"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { ArrowUpRight, Mail } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "sending" | "sent" | "error";

type FieldName = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name is too short.";
  else if (name.length > 100) errors.name = "Name is too long.";

  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";

  if (!message) errors.message = "Please write a message.";
  else if (message.length < 10) errors.message = "Message is too short (10+ characters).";
  else if (message.length > 5000) errors.message = "Message is too long.";

  return errors;
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function readValues(form: HTMLFormElement): Record<FieldName, string> {
    const fd = new FormData(form);
    return {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
  }

  function onFieldBlur(e: React.FocusEvent<HTMLFormElement>) {
    if (!submitted) return;
    const form = e.currentTarget;
    setErrors(validate(readValues(form)));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitted(true);

    const values = readValues(form);
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const firstKey = Object.keys(v)[0] as FieldName;
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    data.append("from_name", "Portfolio contact form");
    setStatus("sending");
    setSubmitError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.success) {
        throw new Error(json?.message ?? "Failed to send");
      }
      setStatus("sent");
      setSubmitted(false);
      setErrors({});
      form.reset();
    } catch (err) {
      setStatus("error");
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something."
            description="Tell me about your project, ask a question, or just say hi — I reply within a day."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <Reveal>
            <div className="glass flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
              <div>
                <p className="text-sm text-[var(--color-muted)]">Direct email</p>
                <a
                  href={site.socials.email}
                  className="mt-2 inline-flex items-center gap-2 font-display text-xl font-medium tracking-tight hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  {site.email}
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-[var(--color-muted)]">
                <Line label="Location" value={site.location} />
                <Line label="Timezone" value="UTC+05:45" />
                <Line label="Status" value="Open to freelance & full-time" />
              </div>
              <div className="mt-8 flex gap-2">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-2 text-sm hover:bg-[var(--color-surface)]"
                >
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-2 text-sm hover:bg-[var(--color-surface)]"
                >
                  LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              onBlur={onFieldBlur}
              className="grid gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" name="name" label="Name" required error={errors.name} maxLength={100} />
                <Field id="email" name="email" label="Email" type="email" required error={errors.email} maxLength={254} />
              </div>
              <Field id="subject" name="subject" label="Subject" maxLength={150} />
              <Field
                id="message"
                name="message"
                label="Message"
                textarea
                required
                error={errors.message}
                maxLength={5000}
              />
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="text-sm" role="status" aria-live="polite">
                  {status === "sent" && (
                    <span className="text-emerald-400">Thanks — I&apos;ll be in touch shortly.</span>
                  )}
                  {status === "error" && (
                    <span className="text-rose-400">
                      {submitError ?? "Something went wrong."} You can also email me directly.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-dashed border-[var(--color-border)] pb-2">
      <span className="text-[var(--color-subtle)]">{label}</span>
      <span className="text-[var(--color-text)]">{value}</span>
    </div>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  error?: string;
  maxLength?: number;
};

function Field({ id, name, label, type = "text", textarea, required, error, maxLength }: FieldProps) {
  const errorId = `${id}-error`;
  const base =
    "peer w-full rounded-xl border bg-[var(--color-surface)]/60 px-4 pt-6 pb-2 text-[15px] text-white placeholder-transparent outline-none transition-colors";
  const borderCls = error
    ? "border-rose-500/70 focus:border-rose-400"
    : "border-[var(--color-border)] focus:border-[var(--color-accent)]";
  const cls = `${base} ${borderCls}`;

  const commonProps = {
    id,
    name,
    placeholder: label,
    required,
    maxLength,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cls,
  } as const;

  return (
    <div className="relative">
      {textarea ? (
        <textarea {...commonProps} rows={5} />
      ) : (
        <input {...commonProps} type={type} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-wider text-[var(--color-subtle)] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[var(--color-muted)] peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-[var(--color-accent-2)]"
      >
        {label}
        {required && <span className="ml-0.5 text-[var(--color-accent-3)]">*</span>}
      </label>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
