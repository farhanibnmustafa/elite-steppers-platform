import type { Metadata } from "next";
import { SimpleStubPageView } from "@/components/marketing/SimpleStubPageView";
import { registrationPageStub } from "@/components/marketing/stubPageDefaultData";

export const metadata: Metadata = {
  title: "Registration | Elite Level Steppers",
};

export default function RegistrationPage() {
  return <SimpleStubPageView data={registrationPageStub} />;
}
