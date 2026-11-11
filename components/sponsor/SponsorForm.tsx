"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const FORM_NAME = "sponsor";

const inputClass =
  "mt-2 block w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary";

const labelClass = "block text-sm font-semibold text-white";

export function SponsorForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const body = new URLSearchParams(
        new FormData(form) as unknown as Record<string, string>,
      ).toString();
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Sponsor form submission failed:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-white/20 bg-white/5 p-8 text-white"
      >
        <h3 className="font-display text-2xl font-semibold">Tak for jeres henvendelse!</h3>
        <p className="mt-3 text-lg leading-relaxed text-white/80">
          Vi har modtaget jeres besked og vender tilbage hurtigst muligt for en uforpligtende snak.
        </p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-white/15 bg-white/5 p-6 sm:grid-cols-2 sm:p-8"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Udfyld ikke dette felt: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="sponsor-virksomhed" className={labelClass}>
          Virksomhed
        </label>
        <input
          id="sponsor-virksomhed"
          name="virksomhed"
          type="text"
          required
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="sponsor-navn" className={labelClass}>
          Kontaktperson
        </label>
        <input
          id="sponsor-navn"
          name="navn"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="sponsor-email" className={labelClass}>
          E-mail
        </label>
        <input
          id="sponsor-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="sponsor-telefon" className={labelClass}>
          Telefon <span className="font-normal text-white/60">(valgfrit)</span>
        </label>
        <input
          id="sponsor-telefon"
          name="telefon"
          type="tel"
          autoComplete="tel"
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="sponsor-besked" className={labelClass}>
          Fortæl lidt om jeres virksomhed
        </label>
        <textarea
          id="sponsor-besked"
          name="besked"
          rows={5}
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-14 w-full items-center justify-center rounded-md bg-secondary px-8 text-base font-semibold text-forest-deep transition-colors hover:bg-[hsl(38_91%_62%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? "Sender…" : "Send henvendelse"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-base text-secondary">
            Beskeden kunne ikke sendes. Prøv igen, eller skriv direkte til os.
          </p>
        )}
      </div>
    </form>
  );
}
