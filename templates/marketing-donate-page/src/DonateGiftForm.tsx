"use client";

import { useState } from "react";
import { donatePageConfig } from "./donateConfig";

const panel =
  "min-w-0 w-full rounded-xl border border-white/[0.05] bg-[#171723] px-4 py-6 font-sans sm:px-10 sm:py-9 md:px-12 md:py-10";

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-[#1b1f2a] px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-gold/40 focus:ring-1 focus:ring-gold/25 sm:text-[0.9375rem]";

const formLabelTracking = "tracking-[0.06em]";

const amounts = donatePageConfig.giftForm.amountPresets;

function isMiddlePreset(n: number) {
  return n === 100 || n === 250;
}

function FieldLabel({
  htmlFor,
  children,
  required: isRequired,
}: {
  htmlFor: string;
  children: string;
  required?: boolean;
}) {
  return (
    <div className="mb-2 flex items-baseline justify-between gap-3">
      <label
        htmlFor={htmlFor}
        className={`text-xs font-semibold uppercase ${formLabelTracking} text-white/55`}
      >
        {children}
      </label>
      {isRequired ? (
        <span className="shrink-0 text-xs font-normal normal-case tracking-normal text-white/45 italic">
          (required)
        </span>
      ) : null}
    </div>
  );
}

export function DonateGiftForm({ className = "" }: { className?: string }) {
  const cfg = donatePageConfig.giftForm;
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [preset, setPreset] = useState<number | "other">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const displayAmount =
    preset === "other"
      ? customAmount.trim()
        ? `$${customAmount.trim()}`
        : "—"
      : `$${preset}`;

  return (
    <article
      id="donation-form"
      className={`${panel} scroll-mt-28 ${className}`.trim()}
      aria-labelledby="donate-gift-heading"
    >
      <h2
        id="donate-gift-heading"
        className="text-pretty text-[clamp(1.35rem,4.2vw,1.9375rem)] font-bold tracking-tight text-white"
      >
        {cfg.heading}
      </h2>
      <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
        {cfg.subtext}
      </p>

      <div className="mt-6 space-y-6">
        <div className="flex flex-col gap-2.5 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-stretch min-[480px]:gap-2.5">
          <span
            className="inline-flex min-h-[3rem] shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#14151c] px-3 text-sm font-medium text-white sm:px-3.5"
            id="donation-type-label"
          >
            {cfg.donationTypeLabel}
          </span>
          <div
            className="flex min-h-[3rem] min-w-0 flex-1 rounded-lg border border-white/10 bg-[#0e0e13] p-0.5"
            role="group"
            aria-labelledby="donation-type-label"
            aria-label="One-time or monthly donation"
          >
            <button
              type="button"
              onClick={() => setFrequency("once")}
              className={
                frequency === "once"
                  ? "flex min-h-0 flex-1 items-center justify-center whitespace-nowrap rounded-md bg-gold px-2 text-sm font-bold text-background shadow-gold-sm transition sm:px-2.5 sm:text-[0.875rem]"
                  : "flex min-h-0 flex-1 items-center justify-center whitespace-nowrap rounded-md border border-transparent px-2 text-sm font-medium text-white/80 transition hover:text-white sm:px-2.5 sm:text-[0.875rem]"
              }
            >
              One-Time
            </button>
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={
                frequency === "monthly"
                  ? "flex min-h-0 flex-1 items-center justify-center whitespace-nowrap rounded-md bg-gold px-2 text-sm font-bold text-background shadow-gold-sm transition sm:px-2.5 sm:text-[0.875rem]"
                  : "flex min-h-0 flex-1 items-center justify-center whitespace-nowrap rounded-md border border-white/10 px-2 text-sm font-medium text-white/80 transition hover:text-white sm:px-2.5 sm:text-[0.875rem]"
              }
            >
              Monthly
            </button>
          </div>
        </div>

        <div>
          <span
            className={`text-xs font-semibold uppercase ${formLabelTracking} text-white/55`}
          >
            {cfg.amountLabel}
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {amounts.map((n, i) => {
              const isFirst = i === 0;
              const isLast = i === amounts.length - 1;
              const endRadius = isFirst || isLast ? "rounded-md" : "rounded-xl";
              const isMiddle = isMiddlePreset(n);
              const selected = preset === n;

              const baseIdle =
                isMiddle && !selected
                  ? "border-0 bg-[#1c1c2a] hover:bg-[#232838]"
                  : !selected
                    ? `border border-white/12 bg-[#1b1f2a] hover:border-white/18 hover:bg-[#232838]`
                    : "";

              const selectedCls = selected
                ? "border border-gold bg-gold text-background shadow-gold-sm"
                : `${baseIdle} text-white`;

              const weight = selected ? "font-bold" : "font-medium";

              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setPreset(n);
                    setCustomAmount("");
                  }}
                  className={`min-h-[2.625rem] min-w-[4.25rem] px-4 text-sm transition sm:min-w-[4.5rem] ${endRadius} ${selectedCls} ${weight}`}
                >
                  ${n}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            <FieldLabel htmlFor="donate-custom-amount" required={false}>
              {cfg.otherAmountLabel}
            </FieldLabel>
            <input
              id="donate-custom-amount"
              type="number"
              min={1}
              step={1}
              inputMode="decimal"
              placeholder={cfg.otherAmountPlaceholder}
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setPreset("other");
              }}
              className={fieldClass}
            />
          </div>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (preset === "other" && !customAmount.trim()) return;
            setSubmitted(true);
          }}
        >
          <div>
            <FieldLabel htmlFor="donate-full-name" required>
              {cfg.fullNameLabel}
            </FieldLabel>
            <input
              id="donate-full-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={fieldClass}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="donate-email" required>
                {cfg.emailLabel}
              </FieldLabel>
              <input
                id="donate-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                className={fieldClass}
              />
            </div>
            <div>
              <FieldLabel htmlFor="donate-phone" required>
                {cfg.phoneLabel}
              </FieldLabel>
              <input
                id="donate-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                className={fieldClass}
              />
            </div>
          </div>

          <div
            className="rounded-xl border border-white/10 bg-[#14151c] px-4 py-3.5 text-[0.8125rem] italic leading-relaxed text-white/65"
            role="note"
          >
            {cfg.paymentNote}
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex min-h-[3rem] w-full touch-manipulation items-center justify-center rounded-xl bg-gold px-7 text-center text-sm font-bold text-background shadow-gold-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:text-[0.9375rem]"
          >
            {cfg.submitLabel}
          </button>

          <p className="text-center text-[0.6875rem] leading-relaxed text-white/45">
            {cfg.legalNote}
          </p>
        </form>

        {submitted ? (
          <p className="text-sm text-gold/95" role="status">
            {cfg.thankYouPrefix}{" "}
            {frequency === "monthly" ? cfg.monthlyWord : ""}
            {displayAmount === "—" ? cfg.customAmountWord : displayAmount}.
          </p>
        ) : null}
      </div>
    </article>
  );
}
