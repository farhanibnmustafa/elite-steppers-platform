"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import {
  landingContentMax,
  landingGutterX,
} from "@/components/marketing/landingLayout";

/** Top row: text-only, uppercase, wider spacing. */
const primaryLinks: { href: string; label: string }[] = [
  { href: "/search", label: "SEARCH" },
  { href: "/about", label: "ABOUT US" },
  { href: "/donate", label: "DONATE" },
  { href: "/membership", label: "BECOME MEMBER" },
  { href: "/contact", label: "CONTACT US" },
];

/** Bottom row: pill buttons; active item uses solid gold. */
const secondaryLinks: { href: string; label: string }[] = [
  { href: "/", label: "HOME" },
  { href: "/hall-of-fame", label: "HALL OF FAME" },
  { href: "/nominations", label: "NOMINATE A STEPPER" },
  { href: "/shop", label: "SHOP" },
  { href: "/events", label: "EVENTS" },
  { href: "/blog", label: "BLOG" },
];

function primaryIsActive(pathname: string, href: string) {
  if (href === "/about") {
    return pathname === "/about" || pathname.startsWith("/about/");
  }
  if (href === "/membership") {
    return pathname === "/membership" || pathname.startsWith("/membership/");
  }
  if (href === "/contact") {
    return pathname === "/contact" || pathname.startsWith("/contact/");
  }
  return pathname === href;
}

function secondaryIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

type LandingHeaderProps = {
  logoPriority?: boolean;
  /** When true, removes the bottom border so a full-bleed hero can sit flush under the bar. */
  heroFlush?: boolean;
};

/** One type scale for top text links and bottom bar buttons (aligned; tiny bump from prior sizes). */
const navItemTextSize =
  "text-[0.7rem] font-semibold uppercase leading-none sm:text-[0.74rem] min-[1200px]:text-[0.8rem]";

/** Bottom nav: subtle radius, black fill + gold ring; tight padding. */
const navPillClass =
  `inline-flex min-h-7 min-w-0 max-w-full items-center justify-center rounded-md border border-gold bg-black px-1.5 py-0.5 text-center ${navItemTextSize} tracking-[0.02em] sm:min-h-7 sm:px-2 sm:py-0.5 sm:tracking-[0.03em] md:px-2 md:py-0.5`;

const primaryLinkBase =
  "inline-flex text-center transition-colors duration-200 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70";

const primaryLinkInactive =
  `${primaryLinkBase} text-white hover:text-gold`;

const primaryLinkActive =
  `${primaryLinkBase} text-gold hover:underline hover:decoration-gold/80 hover:underline-offset-4`;

/** Inactive pill: outline → solid gold fill on hover (matches brand CTA pattern). */
const navPillInactiveHover =
  "transition-[color,background-color,border-color,filter] duration-200 hover:border-gold hover:bg-gold hover:text-background active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/80";

/** Active (solid gold) pill: subtle brightening on hover. */
const navPillActiveHover =
  "transition-[filter,transform] duration-200 hover:brightness-105 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/90";

function NavLinks({
  pathname,
  variant,
  onNavigate,
}: {
  pathname: string;
  variant: "mobile" | "desktop";
  onNavigate?: () => void;
}) {
  const isMobile = variant === "mobile";
  return (
    <div
      className={
        isMobile
          ? "flex w-full min-w-0 flex-col"
          : "flex w-full min-w-0 max-w-4xl flex-col items-end gap-4 min-[1500px]:gap-5 self-end lg:max-w-none"
      }
    >
      <nav aria-label="Primary">
        <ul
          className={
            isMobile
              ? "m-0 flex list-none flex-col gap-0.5 p-0"
              : "m-0 flex list-none flex-wrap items-center justify-end gap-x-5 gap-y-1 p-0 min-[1100px]:gap-x-8 min-[1200px]:gap-x-10"
          }
        >
          {primaryLinks.map(({ href, label }) => {
            const active = primaryIsActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={
                    isMobile
                      ? `block rounded-md px-1 py-2.5 ${navItemTextSize} tracking-[0.06em] transition-colors duration-200 hover:bg-gold/10 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/70 ${
                        active ? "text-gold" : "text-white"
                      }`
                      : `${navItemTextSize} tracking-[0.06em] ${
                        active ? primaryLinkActive : primaryLinkInactive
                      }`
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav
        aria-label="Secondary"
        className={isMobile ? "mt-6 w-full" : "w-full min-w-0"}
      >
        {isMobile ? (
          <ul className="grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2 min-[400px]:gap-3.5">
            {secondaryLinks.map(({ href, label }) => {
              const active = secondaryIsActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`${navPillClass} w-full ${
                      active
                        ? `!border-gold !bg-gold text-background ${navPillActiveHover}`
                        : `text-white ${navPillInactiveHover}`
                    } `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="flex w-full min-w-0 flex-wrap items-center justify-end gap-3 sm:gap-3.5 md:gap-4 min-[1200px]:gap-5 min-[1500px]:gap-6">
            {secondaryLinks.map(({ href, label }) => {
              const active = secondaryIsActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? `${navPillClass} !border-gold !bg-gold text-background ${navPillActiveHover}`
                      : `${navPillClass} text-white ${navPillInactiveHover}`
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
}

export function LandingHeader({
  logoPriority = true,
  heroFlush = false,
}: LandingHeaderProps) {
  const pathname = usePathname();
  const menuPanelId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      closeMenu();
    });
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onM = () => {
      if (mq.matches) closeMenu();
    };
    mq.addEventListener("change", onM);
    onM();
    return () => mq.removeEventListener("change", onM);
  }, [closeMenu]);

  return (
    <header
      className={`relative z-[200] bg-black isolate [touch-action:manipulation] ${
        heroFlush ? "border-b-0" : "border-b border-white/20"
      }`}
    >
      <div
        className={`mx-auto ${landingContentMax} py-3 sm:py-4 md:py-6 ${landingGutterX}`}
      >
        <div className="flex flex-col gap-0 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:gap-x-8">
          <div className="flex w-full min-w-0 items-center justify-between gap-3 lg:w-auto lg:shrink-0">
            <Link
              href="/"
              className="inline-flex min-w-0 shrink items-center no-underline transition hover:opacity-95"
              onClick={closeMenu}
            >
              <Image
                src="/images/18.png"
                alt="The Elite Steppers Hall of Fame"
                width={283}
                height={97}
                priority={logoPriority}
                sizes="(max-width: 1024px) 62vw, 24rem"
                className="h-9 w-auto max-w-[min(100%,12rem)] sm:h-11 sm:max-w-[16rem] md:h-[3.25rem] md:max-w-[17rem] lg:h-[4.25rem] lg:max-w-none xl:h-[4.75rem]"
              />
            </Link>

            <div className="relative z-[201] list-none lg:hidden">
              <button
                type="button"
                className="relative z-10 flex h-11 w-11 shrink-0 list-none items-center justify-center rounded-md border border-white/20 bg-black text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/10 [touch-action:manipulation] [-webkit-tap-highlight-color:transparent] cursor-pointer"
                aria-controls={menuPanelId}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Menu open" : "Open menu"}
                tabIndex={menuOpen ? -1 : 0}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!menuOpen) openMenu();
                }}
              >
                <MenuIcon className="pointer-events-none" />
              </button>
            </div>
            {menuOpen
              ? createPortal(
                  <div
                    id={menuPanelId}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Main navigation"
                    className="fixed inset-0 z-[10000] flex h-[100dvh] min-h-0 min-w-0 flex-col overflow-hidden bg-black pt-[max(0.5rem,env(safe-area-inset-top))]"
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    <div
                      className={`relative z-[1] mx-auto flex w-full min-w-0 ${landingContentMax} shrink-0 items-center justify-between border-b border-white/10 pb-3 ${landingGutterX}`}
                    >
                      <span className="min-w-0 text-sm font-normal uppercase tracking-wide text-white/80">
                        Menu
                      </span>
                      <button
                        type="button"
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 [touch-action:manipulation] cursor-pointer [-webkit-tap-highlight-color:transparent]"
                        aria-label="Close menu"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeMenu();
                        }}
                      >
                        <CloseIcon className="pointer-events-none" />
                      </button>
                    </div>
                    <div
                      className={`min-h-0 flex-1 overflow-y-auto overscroll-y-contain py-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] ${landingGutterX}`}
                    >
                      <NavLinks
                        pathname={pathname}
                        variant="mobile"
                        onNavigate={closeMenu}
                      />
                    </div>
                  </div>,
                  document.body
                )
              : null}
          </div>

          <div className="mt-0 hidden w-full min-w-0 flex-1 flex-col items-stretch gap-4 self-stretch sm:gap-4 lg:mt-0 lg:flex lg:items-end">
            <NavLinks pathname={pathname} variant="desktop" />
          </div>
        </div>
      </div>
    </header>
  );
}
