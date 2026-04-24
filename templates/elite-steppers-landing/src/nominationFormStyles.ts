/**
 * Shared surface styles for the nominations page (colors from the landing CSS
 * snippet: --nomination-* tokens).
 */
export const nominationSurfaceClass = "bg-background";

const cardBg = "bg-nomination-card";

const fieldBorder = "border border-nomination-border";
const fieldBg = "bg-nomination-field";

const fieldBase =
  "w-full min-w-0 " +
  fieldBorder +
  " " +
  fieldBg +
  " px-3.5 py-2.5 text-sm leading-normal text-zinc-100 shadow-none outline-none transition " +
  "placeholder:italic placeholder:text-zinc-500/95 " +
  "focus:border-gold/45 focus:ring-1 focus:ring-gold/20";

/**
 * Form panels: ~16px corners, no card border.
 */
export const nominationCardClass = [
  "rounded-2xl",
  cardBg,
  "px-6 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.35)]",
  "sm:px-6 sm:py-4 md:px-7 md:py-4",
].join(" ");

/** Top "Nomination criteria" panel — same surface, roomier padding. */
export const nominationCriteriaCardClass = [
  "rounded-2xl",
  cardBg,
  "px-7 py-7 shadow-[0_4px_24px_rgba(0,0,0,0.35)]",
  "min-[400px]:px-8 sm:py-8 sm:px-8 md:py-9 md:px-10",
].join(" ");

/**
 * Text inputs, textareas, URL fields — slightly tighter radius than cards (~10px), generous padding.
 */
export const nominationFieldClass = `${fieldBase} rounded-[10px]`;

export const nominationTextareaClass = `${fieldBase} min-h-16 resize-y rounded-[10px] sm:min-h-24`;

/** Native file input: keep button chip readable on same surface */
export const nominationFileInputClass = `${nominationFieldClass} file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-gold/12 file:px-2.5 file:py-1.5 file:text-[0.65rem] file:font-semibold file:uppercase file:tracking-wide file:text-gold hover:file:bg-gold/20`;

/** Use with a trailing chevron in a `relative` wrapper (see `NominationFormSection`). */
export const nominationSelectClass = `${nominationFieldClass} cursor-pointer appearance-none pr-10`;

/**
 * Invisible file input over a label row (same look as other fields).
 */
export const nominationFileFieldShellClass = [
  "relative flex min-h-[2.75rem] w-full min-w-0 items-center",
  fieldBorder,
  fieldBg,
  "px-3.5 py-2.5",
  "rounded-[10px]",
].join(" ");

export const nominationSelectOptionClass = "bg-nomination-field text-zinc-100";

/** Checkboxes: square, light border, cool grey fill — see `.nomination-form-checkbox` in snippet */
export const nominationCheckboxClass = "nomination-form-checkbox";
