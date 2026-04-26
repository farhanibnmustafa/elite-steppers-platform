import type { ReactNode } from "react";

const baseClass =
  "mx-auto w-full min-w-0 max-w-7xl pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] py-12 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] lg:pl-[max(2rem,env(safe-area-inset-left))] lg:pr-[max(2rem,env(safe-area-inset-right))]";

type ContentMainProps = {
  children: ReactNode;
  className?: string;
};

export function ContentMain({ children, className = "" }: ContentMainProps) {
  return (
    <main className={[baseClass, className].filter(Boolean).join(" ")}>
      {children}
    </main>
  );
}
