"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const FORM_NAME = "sponsor";
const RECIPIENT = "martin@slotsengensmusik.dk";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${RECIPIENT}`;
const SUCCESS_MESSAGE = "Vi har modtaget jeres henvendelse og vender tilbage hurtigst muligt.";

const fieldClass =
  "mt-2 block w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary";
const labelClass = "block text-sm font-semibold text-white";

export function SponsorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Spam-bots udfylder typisk det skjulte felt – lad som om alt gik godt.
    if (data.website) {
      setStatus("success");
      setMessage(SUCCESS_MESSAGE);
      return;
    }

    setStatus("sending");
    setMessage("");

    const subject = `Ny sponsorhenvendelse: ${data.company}`;

    try {
      let delivered = false;

      // 1) Send e-mail til Martin via FormSubmit.
      try {
        const res = await fetch(FORMSUBMIT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            Virksomhed: data.company,
            Kontaktperson: data.name,
            Email: data.email,
            Telefon: data.phone || "Ikke oplyst",
            Besked: data.message || "(ingen besked)",
            _subject: subject,
            _replyto: data.email,
            _template: "table",
            _captcha: "false",
            _honey: "",
          }),
        });
        const json = await res.json().catch(() => ({}));
        delivered = res.ok && String(json.success) === "true";
        if (!delivered) console.warn("FormSubmit did not accept the enquiry:", json.message);
      } catch (err) {
        console.warn("FormSubmit request failed:", err);
      }

      // 2) Backup: gem altid henvendelsen i Netlify Forms, så den ikke går tabt.
      const body = new URLSearchParams({ "form-name": FORM_NAME, subject, ...data });
      const backup = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      }).catch(() => null);

      if (!delivered && !backup?.ok) {
        throw new Error(`Vi kunne ikke sende jeres henvendelse lige nu. Skriv venligst direkte til ${RECIPIENT}.`);
      }

      setStatus("success");
      setMessage(SUCCESS_MESSAGE);
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Der opstod en fejl. Prøv venligst igen.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-white/20 bg-white/10 p-8 sm:p-10"
      >
        <p className="font-display text-3xl font-semibold leading-tight">Tak for jeres henvendelse!</p>
        <p className="mt-4 text-lg leading-relaxed text-white/80">{message}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded text-sm font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Send en ny besked
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      name={FORM_NAME}
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/20 bg-white/5 p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="sponsor-company" className={labelClass}>
            Virksomhed
          </label>
          <input
            id="sponsor-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="sponsor-name" className={labelClass}>
            Dit navn
          </label>
          <input
            id="sponsor-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="sponsor-phone" className={labelClass}>
            Telefon <span className="font-normal text-white/60">(valgfrit)</span>
          </label>
          <input
            id="sponsor-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sponsor-email" className={labelClass}>
            E-mail
          </label>
          <input
            id="sponsor-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sponsor-message" className={labelClass}>
            Fortæl lidt om jeres virksomhed <span className="font-normal text-white/60">(valgfrit)</span>
          </label>
          <textarea id="sponsor-message" name="message" rows={5} className={fieldClass} />
        </div>

        {/* Honeypot mod spam – skjult for brugere */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="sponsor-website">Lad dette felt være tomt</label>
          <input id="sponsor-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-md bg-red-950/60 px-4 py-3 text-base text-white">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className={cn(
          "mt-8 inline-flex h-14 w-full items-center justify-center rounded-md bg-secondary px-8 text-base font-semibold text-forest-deep transition-colors hover:bg-[hsl(38_91%_62%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
        )}
      >
        {sending ? "Sender …" : "Send henvendelse"}
      </button>
      <p className="mt-3 text-sm text-white/65">Henvendelsen er uforpligtende.</p>
    </form>
  );
}
