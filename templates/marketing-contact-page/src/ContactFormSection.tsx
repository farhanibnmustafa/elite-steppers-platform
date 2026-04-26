"use client";

import Link from "next/link";
import { useId, useRef, useState, type ReactElement } from "react";
import { landingInnerMax } from "./landingLayout";
import {
  nominationCardClass,
  nominationFieldClass,
  nominationTextareaClass,
} from "./nominationFormStyles";

/** Update these to your real channels. */
const CONTACT = {
  email: "hello@elitelevelsteppers.com",
  phoneDisplay: "+1 (800) 555-0199",
  /** E.164-style for <a href="tel:…"> */
  phoneTel: "+18005550199",
} as const;

const SOCIAL: {
  label: string;
  href: string;
  Icon: () => ReactElement;
}[] =
  [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      Icon: () => (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      Icon: () => (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.646.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.421.42.691.81.9 1.372.165.42.359 1.055.42 2.228.045 1.26.061 1.645.061 4.86s-.016 3.6-.06 4.86c-.06 1.17-.256 1.808-.42 2.228-.21.57-.48.98-.9 1.4-.42.42-.84.68-1.4.9-.42.16-1.05.35-2.22.4-1.28.05-1.64.07-4.86.07s-3.59-.01-4.86-.06c-1.18-.04-1.8-.25-2.22-.4-.58-.2-1-.47-1.4-.9s-.6-.8-.8-1.4c-.19-.4-.4-1.04-.4-2.2-.04-1.28-.06-1.64-.06-4.86 0-3.22.02-3.6.07-4.86.04-1.19.25-1.8.4-2.2.2-.6.5-1.04.8-1.4.4-.4.8-.6 1.4-.8.4-.2 1.01-.4 2.2-.4 1.25-.01 1.64-.01 4.86-.01zm0 3.78c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.76-6.2-6.2-6.2-6.2 2.76-6.2 6.2-2.8 6.2-2.8 6.2zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.2a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      Icon: () => (
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      Icon: () => (
        <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "X (Twitter)",
      href: "https://twitter.com/",
      Icon: () => (
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

const placeholderSm =
  "placeholder:text-[0.6rem] sm:placeholder:text-[0.65rem] md:placeholder:text-xs";
/** 16px+ on small viewports keeps iOS Safari from zooming the viewport on field focus. */
const formFieldTextClass = `${nominationFieldClass} !text-base sm:!text-sm ${placeholderSm}`;
const formTextareaTextClass = `${nominationTextareaClass} !text-base sm:!text-sm min-h-[7.5rem] sm:min-h-28 ${placeholderSm}`;

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-left text-[0.65rem] font-medium text-white/95 sm:mb-2 sm:text-xs"
    >
      {children}
    </label>
  );
}

function IconTile({
  children,
  title: titleText,
  body,
}: {
  children: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 gap-3.5 min-[400px]:gap-4">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/12 text-gold shadow-[0_0_0_1px_rgba(212,175,55,0.12)]"
        aria-hidden
      >
        {children}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-gold/95 sm:text-[0.65rem]">
          {titleText}
        </p>
        <div className="mt-0.5 min-w-0 break-words text-xs leading-relaxed text-white/70 sm:text-[0.8125rem]">
          {body}
        </div>
      </div>
    </div>
  );
}

const quickLinks: { href: string; label: string }[] = [
  { href: "/nominations", label: "Nominations" },
  { href: "/hall-of-fame", label: "Hall of Fame" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
];

const linkPillClass =
  "inline-flex min-h-10 items-center justify-center rounded-md border border-gold/80 bg-black px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-white transition hover:border-gold hover:bg-gold hover:text-background sm:text-[0.74rem]";

/**
 * Two-column “get in touch” block: copy + contact grid + social, and a message form on brand surfaces.
 */
export function ContactFormSection() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="w-full min-w-0 border-t border-gold/15 bg-background pt-12 pb-0 sm:pt-14 md:pt-16"
      aria-labelledby="contact-form-section-heading"
    >
      <div className={landingInnerMax}>
        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12 xl:gap-16">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold sm:text-[0.68rem]">
              Get in touch
            </p>
            <h2
              id="contact-form-section-heading"
              className="mt-1.5 text-balance text-xl font-bold leading-tight text-white sm:mt-2 sm:text-2xl md:text-[1.5rem] md:leading-tight"
            >
              One message. The whole community.
            </h2>
            <p className="mt-2.5 max-w-xl text-pretty text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-[0.9375rem]">
              Ask about Hall of Fame nominations, events, membership, media, or partnerships. We
              route your note to the right people so you get a clear answer—whether you are a
              stepper, a chapter, or a supporter of Elite Level Steppers.
            </p>

            <div className="mt-8 flex min-w-0 flex-col gap-6 sm:gap-7">
              <IconTile
                title="Email"
                body={
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-medium text-gold/95 underline decoration-gold/40 underline-offset-2 transition hover:text-gold hover:decoration-gold"
                  >
                    {CONTACT.email}
                  </a>
                }
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </IconTile>

              <IconTile
                title="Let's talk"
                body={
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="font-medium text-gold/95 underline decoration-gold/40 underline-offset-2 transition hover:text-gold hover:decoration-gold"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                }
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h2a2 2 0 0 1 2 1.72c.12.9.3 1.78.6 2.64a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.42-1.16a2 2 0 0 1 2.12-.45c.86.3 1.75.5 2.64.6A2 2 0 0 1 22 16.92z" />
                </svg>
              </IconTile>
            </div>

            <p className="mt-8 text-xs font-medium text-white sm:mt-9 sm:text-[0.8125rem]">
              Follow the movement
            </p>
            <ul className="mt-3 flex list-none flex-wrap items-center gap-2.5 p-0 sm:gap-3">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/[0.06] text-white transition hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gold/15 pt-7">
              <p className="text-xs font-medium text-white/90 sm:text-[0.8125rem]">On-site next steps</p>
              <ul className="mt-3 flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-2 p-0 sm:justify-start sm:gap-x-4">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkPillClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`${nominationCardClass} flex min-w-0 flex-col gap-5 sm:gap-6 lg:max-w-none`}
          >
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">Send us a message</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65 sm:text-sm">
                Questions, feedback, or community story ideas—we read every submission.
              </p>
            </div>

            {submitted ? (
              <div
                className="rounded-[10px] border border-gold/35 bg-gold/10 px-4 py-3 text-xs text-white/90 sm:text-sm"
                role="status"
                aria-live="polite"
              >
                <p className="m-0">
                  Thank you. Your message has been captured in the browser. Wire this form to your
                  backend or email service to deliver it for real.
                </p>
                <button
                  type="button"
                  className="mt-3 w-full min-h-10 rounded-md border border-gold/40 bg-black/30 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-gold transition hover:border-gold/60 hover:bg-gold/10 sm:min-h-11 sm:text-[0.72rem]"
                  onClick={() => {
                    setSubmitted(false);
                    queueMicrotask(() => formRef.current?.reset());
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : null}

            <form
              ref={formRef}
              className={submitted ? "hidden" : "flex flex-col gap-4 sm:gap-5"}
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                <div>
                  <FieldLabel htmlFor={`${id}-name`}>Name</FieldLabel>
                  <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={formFieldTextClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <FieldLabel htmlFor={`${id}-company`}>Organization (optional)</FieldLabel>
                  <input
                    id={`${id}-company`}
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className={formFieldTextClass}
                    placeholder="Team, school, or chapter"
                  />
                </div>
              </div>
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                <div>
                  <FieldLabel htmlFor={`${id}-phone`}>Phone</FieldLabel>
                  <input
                    id={`${id}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={formFieldTextClass}
                    placeholder="Best number to reach you"
                  />
                </div>
                <div>
                  <FieldLabel htmlFor={`${id}-email`}>Email</FieldLabel>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={formFieldTextClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <FieldLabel htmlFor={`${id}-subject`}>Subject</FieldLabel>
                <input
                  id={`${id}-subject`}
                  name="subject"
                  type="text"
                  required
                  className={formFieldTextClass}
                  placeholder="e.g. Media request, partnership, nomination question"
                />
              </div>
              <div>
                <FieldLabel htmlFor={`${id}-message`}>Message</FieldLabel>
                <textarea
                  id={`${id}-message`}
                  name="message"
                  required
                  rows={5}
                  className={formTextareaTextClass}
                  placeholder="Tell us what you need—we will follow up from the address above."
                />
              </div>
              <button
                type="submit"
                className="group mt-1 flex w-full min-h-11 items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-gold-muted to-gold px-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-background shadow-[0_4px_20px_rgba(212,175,55,0.25)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:min-h-12 sm:text-[0.72rem]"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                </svg>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
