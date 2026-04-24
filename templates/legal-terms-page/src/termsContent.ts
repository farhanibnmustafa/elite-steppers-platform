/**
 * Terms of Use — data-driven from termsConfig. Legal review is required
 * before production; counsel should complete governing-law placeholders
 * and industry-specific obligations.
 */

import { termsPageConfig } from "./termsConfig";

const C = termsPageConfig;

export const TERMS_LAST_UPDATED = C.lastUpdated;

export type TermsBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type TermsSection = {
  id: string;
  title: string;
  blocks: TermsBlock[];
};

export const termsSections: TermsSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    blocks: [
      {
        type: "p",
        text: `These Terms and Conditions ("Terms") govern your access to and use of the website and online services of ${C.legalEntityName} ("we," "us," or "our"), including any content, features, or programs made available in connection with ${C.servicesScope} (collectively, the "Services").`,
      },
      {
        type: "p",
        text: 'By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you must not use the Services. We may change these Terms from time to time; the "Last updated" date at the top of this page reflects the latest version.',
      },
      {
        type: "p",
        text: "You represent that you are at least the age of majority in your place of residence, or that you are using the Services under the supervision of a parent or legal guardian who accepts these Terms on your behalf.",
      },
    ],
  },
  {
    id: "the-services",
    title: "The Services",
    blocks: [
      {
        type: "p",
        text: `The Services are provided to share information about ${C.serviceInformationFocus}, to facilitate ${C.serviceFacilitate}, and to support related programs, communications, and transactions we may offer (such as donations, event registration, merchandise, or membership information), as described on the site from time to time.`,
      },
      {
        type: "p",
        text: "We may modify, suspend, or discontinue any part of the Services, or restrict access, for operational, security, or legal reasons. We do not guarantee that the Services will be available without interruption, free of errors, or free of harmful components.",
      },
    ],
  },
  {
    id: "conduct",
    title: "Acceptable use",
    blocks: [
      {
        type: "p",
        text: "You agree to use the Services only for lawful purposes and in a manner that respects the rights of others. Without limiting the foregoing, you will not:",
      },
      {
        type: "ul",
        items: [
          "Violate any applicable law, regulation, or third-party right;",
          "Harass, threaten, or defame any person, or post unlawful, defamatory, obscene, or hateful content;",
          "Attempt to gain unauthorized access to the Services, other users, or our systems, or interfere with the integrity or performance of the Services;",
          "Use automated means (including bots or scrapers) to access the Services in a way that imposes an unreasonable load or circumvents access controls, except as allowed by public search engine indexing in accordance with our robots policy if any is posted;",
          "Use the Services to distribute malware, spam, or other harmful or unsolicited communications;",
          "Impersonate any person or entity, or misrepresent your affiliation with any person or entity.",
        ],
      },
    ],
  },
  {
    id: "nominations",
    title: "Nominations and other submissions",
    blocks: [
      {
        type: "p",
        text: 'If you submit a nomination, form response, or other materials through the Services ("Submissions"), you represent and warrant that the information is accurate to the best of your knowledge, that you have the right to provide the content, and that your Submission does not infringe the rights of any third party.',
      },
      {
        type: "p",
        text: `Submitting a nomination or other information does not guarantee selection, induction, or any particular outcome. We may use Submissions to evaluate programs, contact you for clarification, and operate ${C.primaryProgram} and related activities, in our sole discretion.`,
      },
      {
        type: "p",
        text: `To the extent allowed by law, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, display, and distribute your Submissions in connection with the Services and ${C.primaryProgram}, including for promotional, archival, and operational purposes, unless a separate written agreement with you provides otherwise. You retain any ownership rights you had in your Submissions, subject to the rights you grant to us here.`,
      },
      {
        type: "p",
        text: "Unless we have agreed in writing to treat specific information as confidential, Submissions and communications through the site should not be considered confidential, and we have no obligation to return or store them.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    blocks: [
      {
        type: "p",
        text: "The Services, including text, graphics, logos, images, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. Except for the limited rights expressly granted in these Terms, we reserve all rights. You may not use our name, logos, or marks without our prior written consent, except for fair use or as required for ordinary personal reference in accordance with law.",
      },
      {
        type: "p",
        text: "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal, non-commercial use, unless a separate written agreement with us provides broader rights.",
      },
    ],
  },
  {
    id: "communications",
    title: "Communications",
    blocks: [
      {
        type: "p",
        text: "If you sign up for newsletters, event updates, or similar communications, you consent to receive those messages in accordance with applicable law, including any consent requirements for email or text messages. You can opt out of marketing emails by following the instructions in those messages, where this is required and technically supported.",
      },
      {
        type: "p",
        text: "We may contact you regarding Submissions, account-related matters, or as otherwise permitted by law. You are responsible for keeping your contact information accurate if you provide it.",
      },
    ],
  },
  {
    id: "transactions",
    title: "Donations, shop, events, and other transactions",
    blocks: [
      {
        type: "p",
        text: "If we offer donations, merchandise sales, event registration, membership products, or similar transactions, additional terms, policies, and disclosures may apply to those specific offerings (for example, refund or shipping terms, or third-party payment processor terms). In case of a conflict, the more specific terms for that transaction govern with respect to that transaction only.",
      },
      {
        type: "p",
        text: "Payments may be processed by third-party providers. You are responsible for providing accurate payment and fulfillment information. Product availability, pricing, and event details are as stated on the Services at the time of the relevant offering unless otherwise required by law.",
      },
    ],
  },
  {
    id: "third-parties",
    title: "Third-party links and services",
    blocks: [
      {
        type: "p",
        text: "The Services may include links to third-party websites, applications, or services. We are not responsible for their content, practices, or policies. Your use of third-party services is at your own risk and subject to their terms and privacy practices.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      {
        type: "p",
        text: 'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMITTED BY LAW. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.',
      },
      {
        type: "p",
        text: "Content on the Services is for general information. It is not professional, legal, or other advice, and you should not rely on it as such. Decisions you make based on the Services are your own responsibility.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    blocks: [
      {
        type: "p",
        text: "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WE, OUR AFFILIATES, OR OUR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES, WHETHER OR NOT SUCH DAMAGES WERE FORESEEABLE AND WHETHER BASED IN CONTRACT, TORT, OR ANY OTHER THEORY.",
      },
      {
        type: "p",
        text: "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE SERVICES GIVING RISE TO THE CLAIM IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) U.S. ONE HUNDRED DOLLARS (US $100) IF NO SUCH PAYMENT APPLIES. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN THOSE JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    blocks: [
      {
        type: "p",
        text: "You will defend, indemnify, and hold harmless us and our affiliates, and our respective officers, directors, employees, and agents, from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your Submissions, your use of the Services, your violation of these Terms, or your violation of any law or third-party right.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    blocks: [
      {
        type: "p",
        text: "Our collection and use of personal information in connection with the Services will be described in a Privacy Policy that we will publish on this website. Until that policy is published, you may contact us using the information below if you have questions about our practices. The Privacy Policy, when available, is incorporated by reference into these Terms with respect to personal data it describes.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law; venue",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by the laws of [Insert state/country], without regard to conflict-of-law rules that would require the application of the laws of another jurisdiction. You agree that the courts located in [Insert city/county, state/country] will have exclusive jurisdiction over disputes arising from or relating to the Services and these Terms, subject to any mandatory rights you may have under the laws of your own country or state of residence.",
      },
    ],
  },
  {
    id: "general",
    title: "General",
    blocks: [
      {
        type: "p",
        text: "These Terms constitute the entire agreement between you and us regarding the subject matter and supersede any prior understandings, except for additional terms that we expressly state apply to a specific product or program.",
      },
      {
        type: "p",
        text: "If any provision of these Terms is held to be unenforceable, the remaining provisions remain in full effect. Our failure to enforce a provision is not a waiver. You may not assign or transfer your rights under these Terms without our consent; we may assign our rights in connection with a merger, reorganization, or sale of assets.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    blocks: [
      {
        type: "p",
        text: 'We may update these Terms to reflect changes to our Services, the law, or for other reasons. We will post the updated Terms and revise the "Last updated" date. If changes are material, we may provide a more prominent notice (for example, a banner on the site or, where we have your email, an email), where required by law. Your continued use of the Services after the effective date of changes constitutes your acceptance, unless we require a separate action where applicable law so requires.',
      },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      {
        type: "p",
        text: "For questions about these Terms, please contact us at:",
      },
      { type: "p", text: C.displayName },
      { type: "p", text: `Email: ${C.contactEmail}` },
    ],
  },
];
