"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const FORM_NAME = "sponsor";

const inputClass =
  "mt-2 block w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary";

export function SponsorForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(
        Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)]),
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
        className="rounded-lg border border-white/20 bg-white/10 p-8 text-white"
      >
        <p className="font-display text-2xl font-semibold">Tak for jeres henvendelse!</p>
        <p className="mt-3 text-lg text-white/80">
          Vi vender tilbage hurtigst muligt, så vi kan tage en uforpligtende snak om mulighederne.
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
      className="grid gap-5 rounded-lg border border-white/15 bg-forest-deep/40 p-6 sm:grid-cols-2 sm:p-8"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Udfyld ikke dette felt: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className="block text-sm font-semibold text-white sm:col-span-2">
        Virksomhed
        <input name="company" type="text" required autoComplete="organization" className={inputClass} />
      </label>
      <label className="block text-sm font-semibold text-white">
        Kontaktperson
        <input name="name" type="text" required autoComplete="name" className={inputClass} />
      </label>
      <label className="block text-sm font-semibold text-white">
        Telefon <span className="font-normal text-white/60">(valgfrit)</span>
        <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
      </label>
      <label className="block text-sm font-semibold text-white sm:col-span-2">
        E-mail
        <input name="email" type="email" required autoComplete="email" className={inputClass} />
      </label>
      <label className="block text-sm font-semibold text-white sm:col-span-2">
        Fortæl lidt om jeres virksomhed
        <textarea name="message" rows={5} className={inputClass} />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-14 w-full items-center justify-center rounded-md bg-secondary px-8 text-base font-semibold text-forest-deep transition-colors hover:bg-[hsl(38_91%_62%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sender…" : "Send henvendelse"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-secondary">
            Der opstod en fejl. Prøv igen, eller skriv til{" "}
            <a href="mailto:info@slotsengensmusik.dk" className="underline">
              info@slotsengensmusik.dk
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
