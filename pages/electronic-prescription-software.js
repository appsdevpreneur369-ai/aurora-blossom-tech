import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/SiteFooter.js";
import PageHero from "../components/ui/PageHero.js";
import { ProblemBand, FeatureSection, FaqSection, CtaBand, CtaLink } from "../components/ClinicFlow/LandingBlocks.js";
import BoltOutlined from "@mui/icons-material/BoltOutlined";
import SendToMobileOutlined from "@mui/icons-material/SendToMobileOutlined";
import WarningAmberOutlined from "@mui/icons-material/WarningAmberOutlined";
import FolderSharedOutlined from "@mui/icons-material/FolderSharedOutlined";
import PrintOutlined from "@mui/icons-material/PrintOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/electronic-prescription-software`;

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClinicFlow247 — e-Prescription Software",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://clinicflow247.com",
  description: "Digital e-prescription software for Indian doctors. Create, share, and store prescriptions digitally. ABDM-ready, WhatsApp sharing, and patient medication history.",
  offers: { "@type": "Offer", price: "1199", priceCurrency: "INR" },
  provider: { "@type": "Organization", name: "Aurora Blossom", url: SITE_URL },
};

const FEATURES = [
  { icon: BoltOutlined, title: "Prescriptions in 30 Seconds", desc: "Search drugs by name, select dosage, add instructions — the system generates a professional prescription PDF instantly." },
  { icon: SendToMobileOutlined, title: "Share via WhatsApp", desc: "Send prescriptions directly to patients on WhatsApp. No printing, no paper — patients always have their prescription on their phone." },
  { icon: WarningAmberOutlined, title: "Drug Interaction Alerts", desc: "The system flags common drug interactions as you type, reducing prescribing errors before they happen." },
  { icon: FolderSharedOutlined, title: "Complete Medication History", desc: "Every prescription is saved against the patient's profile. Access full medication history in one click during follow-up visits." },
  { icon: PrintOutlined, title: "Print-Ready Format", desc: "Prescriptions are formatted professionally with your clinic letterhead, doctor registration number, and patient details — printable on any printer." },
  { icon: LockOutlined, title: "Secure & Compliant", desc: "All prescriptions are stored securely on Google Cloud. Patient data is encrypted and role-restricted — only authorised staff can access." },
];

const FAQS = [
  { q: "Are digital prescriptions legal in India?", a: "Yes. Digital prescriptions are legally valid in India. ClinicFlow247 prescriptions include the doctor's name, registration number, and date — all required details." },
  { q: "Can patients use ClinicFlow247 prescriptions at any pharmacy?", a: "Yes. Prescriptions can be printed or shown on a phone screen at any pharmacy. WhatsApp delivery ensures patients always have a copy." },
  { q: "Can I add my clinic's letterhead and logo?", a: "Yes. You can customise the prescription template with your clinic name, logo, address, and doctor signature." },
  { q: "Is medication history maintained across visits?", a: "Yes. Every prescription is linked to the patient's profile. You can see all past medications, dosages, and instructions from previous visits." },
];

export default function ElectronicPrescriptionSoftware() {
  return (
    <>
      <Head>
        <title>Electronic Prescription Software India | ClinicFlow247 by Aurora Blossom</title>
        <meta name="description" content="Digital e-prescription software for Indian doctors. Create prescriptions in 30 seconds, share on WhatsApp, view medication history. Free 14-day trial." />
        <meta name="keywords" content="electronic prescription software India, e-prescription software, digital prescription India, doctor prescription app, EMR prescription software India" />
        <link key="canonical" rel="canonical" href={PAGE_URL} />
        <meta key="og:title" property="og:title" content="Electronic Prescription Software India | ClinicFlow247" />
        <meta key="og:description" property="og:description" content="Create digital prescriptions in 30 seconds. Share on WhatsApp. Complete medication history. Free 14-day trial." />
        <meta key="og:url" property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </Head>

      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" changeColorOnScroll={{ height: 60, color: "white" }} />

      <main id="main-content">
        <PageHero
          overline="CLINICFLOW247 FEATURE"
          title="Electronic Prescription Software for Doctors"
          lead="Replace handwritten prescriptions with digital ones. Create a complete e-prescription in under 30 seconds — and share it on WhatsApp before the patient leaves your clinic."
          actions={<CtaLink href="/book-demo">Book a Free Demo →</CtaLink>}
          footnote="Free 14-day trial · No credit card · Plans from ₹1,199/month"
        />

        <ProblemBand
          title="Can Your Patients Read Your Handwriting?"
          body="Illegible handwriting leads to dispensing errors at pharmacies. Paper prescriptions get lost before patients reach the chemist. And there's no way to track what you prescribed six months ago without digging through old files."
          pains={["❌ Illegible prescriptions causing errors", "❌ Lost paper prescriptions", "❌ No medication history at follow-up", "❌ Hours spent writing the same drug names daily"]}
        />

        <FeatureSection
          title="Prescribe Digitally. Share Instantly."
          subtitle="No more paper, no more guesswork at the pharmacy."
          features={FEATURES}
          iconVariant="teal"
        />

        <FaqSection faqs={FAQS} />

        <CtaBand
          title="Start Writing Digital Prescriptions Today"
          body="Takes 20 minutes to set up. Your first digital prescription goes out the same day."
        >
          <CtaLink href="/book-demo">Book a Free Demo →</CtaLink>
        </CtaBand>
      </main>

      <Footer legal={`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`} />
    </>
  );
}
