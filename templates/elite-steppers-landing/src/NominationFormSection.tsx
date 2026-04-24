"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { landingInnerMax } from "./landingLayout";
import {
  nominationCardClass,
  nominationFieldClass,
  nominationFileFieldShellClass,
  nominationFileInputClass,
  nominationSelectClass,
  nominationSelectOptionClass,
  nominationSurfaceClass,
  nominationTextareaClass,
  nominationCheckboxClass,
} from "./nominationFormStyles";

const categoryOptions = [
  { value: "", label: "Select category from the list" },
  { value: "performer", label: "Performer" },
  { value: "dj-host", label: "DJ / Host" },
  { value: "instructor", label: "Instructor" },
  { value: "organizer", label: "Event organizer" },
  { value: "community", label: "Community leader" },
  { value: "lifetime", label: "Lifetime achievement" },
  { value: "other", label: "Other" },
] as const;

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 flex w-full items-baseline justify-between gap-3 text-left text-xs font-medium text-white/95 sm:mb-2 sm:text-sm"
    >
      <span className="min-w-0">{children}</span>
      {required ? (
        <span className="shrink-0 text-[0.65rem] font-normal italic text-zinc-400 sm:text-xs">
          (Required)
        </span>
      ) : null}
    </label>
  );
}

export function NominationFormSection() {
  const baseId = useId();
  const [photoLabel, setPhotoLabel] = useState("");

  return (
    <section
      className={`relative z-10 w-full min-w-0 ${nominationSurfaceClass} pb-0`}
      aria-labelledby="nomination-form-heading"
    >
      <div className={landingInnerMax}>
        <div className="mx-auto w-full min-w-0 max-w-4xl">
        <h2 id="nomination-form-heading" className="sr-only">
          Hall of Fame nomination form
        </h2>

        <form
          className="flex flex-col gap-5 sm:gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div
              className={`${nominationCardClass} flex h-full min-h-0 min-w-0 flex-col gap-4 sm:gap-5`}
            >
              <h3 className="m-0 text-xl font-semibold leading-tight text-white sm:text-2xl">
                Nominee Information
              </h3>

              <div>
                <FieldLabel htmlFor={`${baseId}-name`} required>
                  Full name
                </FieldLabel>
                <input
                  id={`${baseId}-name`}
                  name="nomineeName"
                  type="text"
                  autoComplete="name"
                  className={nominationFieldClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                <div>
                  <FieldLabel htmlFor={`${baseId}-category`} required>
                    Choose category
                  </FieldLabel>
                  <div className="relative">
                    <select
                      id={`${baseId}-category`}
                      name="category"
                      className={nominationSelectClass}
                      defaultValue=""
                    >
                      {categoryOptions.map((o) => (
                        <option
                          key={o.value}
                          value={o.value}
                          disabled={o.value === ""}
                          className={nominationSelectOptionClass}
                        >
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <span
                      className="pointer-events-none absolute right-3 top-1/2 z-0 -translate-y-1/2 text-zinc-400"
                      aria-hidden
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block"
                      >
                        <path
                          d="M5 8l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <FieldLabel htmlFor={`${baseId}-photo`} required>
                    Upload photo
                  </FieldLabel>
                  <div className={nominationFileFieldShellClass}>
                    <input
                      id={`${baseId}-photo`}
                      name="nomineePhoto"
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                      onChange={(e) =>
                        setPhotoLabel(e.target.files?.[0]?.name ?? "")
                      }
                    />
                    <span className="pointer-events-none truncate text-xs italic text-zinc-500">
                      {photoLabel || "High-Resolution Portrait"}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <FieldLabel htmlFor={`${baseId}-bio`}>Short bio</FieldLabel>
                <textarea
                  id={`${baseId}-bio`}
                  name="shortBio"
                  className={nominationTextareaClass}
                  placeholder="(150-200 words)"
                />
              </div>

              <div>
                <FieldLabel htmlFor={`${baseId}-achievements`}>
                  Key achievements
                </FieldLabel>
                <textarea
                  id={`${baseId}-achievements`}
                  name="achievements"
                  className={nominationTextareaClass}
                  placeholder="(150-200 words)"
                />
                <p className="mt-1.5 text-[0.7rem] text-zinc-500 sm:text-xs">
                  You may use up to 700 words for detailed achievements.
                </p>
              </div>

              <div>
                <FieldLabel htmlFor={`${baseId}-social`}>
                  Social Media Links / Website
                </FieldLabel>
                <input
                  id={`${baseId}-social`}
                  name="social"
                  type="url"
                  inputMode="url"
                  className={nominationFieldClass}
                />
              </div>
            </div>

            <div className="flex h-full min-h-0 min-w-0 flex-col gap-5 sm:gap-6">
              <div
                className={`${nominationCardClass} flex shrink-0 flex-col gap-4 sm:gap-5`}
              >
                <h3 className="m-0 text-xl font-semibold leading-tight text-white sm:text-2xl">
                  Nominator Information
                </h3>
                <div>
                  <FieldLabel htmlFor={`${baseId}-nominator`} required>
                    Your name
                  </FieldLabel>
                  <input
                    id={`${baseId}-nominator`}
                    name="nominatorName"
                    type="text"
                    autoComplete="name"
                    className={nominationFieldClass}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor={`${baseId}-email`} required>
                    Email
                  </FieldLabel>
                  <input
                    id={`${baseId}-email`}
                    name="nominatorEmail"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    className={nominationFieldClass}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor={`${baseId}-phone`}>
                    Phone number
                  </FieldLabel>
                  <input
                    id={`${baseId}-phone`}
                    name="nominatorPhone"
                    type="tel"
                    autoComplete="tel"
                    className={nominationFieldClass}
                  />
                </div>
              </div>

              <div
                className={`${nominationCardClass} flex min-h-0 flex-1 flex-col gap-4 sm:gap-5`}
              >
                <h3 className="m-0 text-xl font-semibold leading-tight text-white sm:text-2xl">
                  Supporting Evidence
                </h3>
                <div>
                  <FieldLabel htmlFor={`${baseId}-files`}>
                    Upload files
                  </FieldLabel>
                  <input
                    id={`${baseId}-files`}
                    name="supportingFiles"
                    type="file"
                    multiple
                    accept="image/*,video/*,audio/*,.pdf"
                    className={nominationFileInputClass}
                  />
                  <p className="mt-1.5 text-[0.7rem] text-zinc-500 sm:text-xs">
                    Images, videos, press articles, etc.
                  </p>
                </div>
                <div>
                  <FieldLabel htmlFor={`${baseId}-performance-links`}>
                    Links to performances
                  </FieldLabel>
                  <input
                    id={`${baseId}-performance-links`}
                    name="performanceLinks"
                    type="text"
                    className={nominationFieldClass}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid w-full min-w-0 grid-cols-1 gap-5 sm:mt-8 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="flex min-w-0 flex-col gap-2.5 sm:gap-3">
              <label className="flex cursor-pointer items-center gap-2.5 text-sm font-normal leading-snug text-white">
                <input
                  type="checkbox"
                  className={nominationCheckboxClass}
                  name="confirmAccuracy"
                />
                <span>
                  I confirm the information provided is accurate.
                </span>
              </label>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm font-normal leading-snug text-white">
                <input
                  type="checkbox"
                  className={nominationCheckboxClass}
                  name="acceptTerms"
                />
                <span>
                  I understand that submission does not guarantee induction.
                </span>
              </label>
            </div>
            <div className="w-full min-w-0 self-center">
              <Link
                href="/nominations/success"
                className="shadow-gold-sm inline-flex min-h-[3rem] w-full min-w-0 items-center justify-center rounded-2xl border-2 border-gold bg-gold px-5 py-3 text-center font-sans text-sm font-semibold uppercase leading-tight tracking-[0.1em] text-background transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:min-h-[3.25rem] sm:px-6 sm:py-3.5 sm:text-base"
              >
                Click to nominate
              </Link>
            </div>
          </div>
        </form>
        </div>
      </div>
      <div
        className="my-10 h-0.5 w-full min-w-0 bg-gold/85 sm:my-12 md:my-14"
        role="separator"
        aria-hidden
      />
    </section>
  );
}
