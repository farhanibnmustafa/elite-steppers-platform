import { landingInnerMax } from "@/components/marketing/landingLayout";
import {
  nominationCriteriaCardClass,
  nominationSurfaceClass,
} from "@/components/marketing/nominationFormStyles";

const criteria = [
  "Must have made a significant impact on the stepping community.",
  "Must have been active for at least 3 years.",
  "Can be a performer, DJ, instructor, organizer, or fashion icon.",
  "Contributions should show leadership, creativity, and community spirit.",
];

export function NominationCriteria() {
  return (
    <section
      className={`relative z-10 w-full min-w-0 ${nominationSurfaceClass} pb-4 pt-2 sm:pb-5 sm:pt-3 md:pb-6`}
      aria-labelledby="nomination-criteria-heading"
    >
      <div className={landingInnerMax}>
        <div className="mx-auto w-full min-w-0 max-w-4xl">
          <div className={nominationCriteriaCardClass}>
            <div className="grid w-full min-w-0 grid-cols-1 items-start gap-4 pl-0 sm:gap-5 sm:pl-2.5 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:items-center md:gap-8 md:pl-3 lg:gap-10 lg:pl-4">
              <h2
                id="nomination-criteria-heading"
                className="m-0 flex w-full min-w-0 max-md:justify-center text-lg font-bold leading-[1.15] tracking-[0.08em] min-[400px]:text-xl md:block md:justify-start md:text-2xl"
              >
                <span className="flex w-fit max-w-full flex-col items-center">
                  <span className="text-gold">NOMINATION</span>
                  <span className="text-white">CRITERIA</span>
                </span>
              </h2>
              <ul className="m-0 w-full min-w-0 list-inside list-disc space-y-1.5 pl-0 text-left text-xs leading-relaxed text-white sm:text-sm md:ml-0 md:max-w-none md:space-y-1.5 lg:ml-1.5 [&>li]:font-semibold marker:text-white">
                {criteria.map((item) => (
                  <li key={item} className="text-pretty">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
