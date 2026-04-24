import type { Metadata } from "next";
import { ContentMain } from "@/components/marketing/ContentMain";

export const metadata: Metadata = {
  title: "Registration | Elite Level Steppers",
};

export default function RegistrationPage() {
  return (
    <ContentMain>
      <h1 className="text-2xl font-semibold">Registration</h1>
      <p className="mt-4 text-white/75">Coming soon.</p>
    </ContentMain>
  );
}
