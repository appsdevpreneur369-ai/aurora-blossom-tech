import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Footer from "../components/Footer/SiteFooter.js";
import PageHero from "../components/ui/PageHero.js";
import { ProblemBand, FeatureSection, FaqSection, CtaBand, CtaLink } from "../components/ClinicFlow/LandingBlocks.js";
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";
import PhoneIphoneOutlined from "@mui/icons-material/PhoneIphoneOutlined";
import NotificationsActiveOutlined from "@mui/icons-material/NotificationsActiveOutlined";
import LocalHospitalOutlined from "@mui/icons-material/LocalHospitalOutlined";
import EventRepeatOutlined from "@mui/icons-material/EventRepeatOutlined";
import InsightsOutlined from "@mui/icons-material/InsightsOutlined";

const SITE_URL = "https://www.aurora-blossom.com";
const PAGE_URL = `${SITE_URL}/doctor-appointment-software`;

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClinicFlow247 — Doctor Appointment Software",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://clinicflow247.com",
  description: "Online doctor appointment booking software for Indian clinics. Real-time slot management, patient self-booking, WhatsApp reminders, and queue management.",
  offers: { "@type": "Offer", price: "599", priceCurrency: "INR" },
  provider: { "@type": "Organization", name: "Aurora Blossom", url: SITE_URL },
};

const FEATURES = [
  { icon: EventAvailableOutlined, title: "Real-Time Slot Management", desc: "Define working hours, break times, and max appointments per slot. The system blocks overlapping bookings automatically." },
  { icon: PhoneIphoneOutlined, title: "Patient Self-Booking", desc: "Patients book their own appointments online — via your clinic's booking link or WhatsApp. Zero phone calls for your receptionist." },
  { icon: NotificationsActiveOutlined, title: "Automated Reminders", desc: "WhatsApp and SMS reminders 24 hours and 1 hour before appointments. Patients confirm or reschedule without calling." },
  { icon: LocalHospitalOutlined, title: "Today's Queue View", desc: "Doctors see a live queue of today's patients with their status — waiting, in-consultation, or done." },
  { icon: EventRepeatOutlined, title: "Easy Reschedule & Cancel", desc: "Staff or patients can reschedule or cancel with one tap. Freed slots are immediately available for others." },
  { icon: InsightsOutlined, title: "Appointment Analytics", desc: "See daily, weekly, and monthly appointment trends. Track peak hours and no-show rates." },
];

const FAQS = [
  { q: "Can patients book appointments themselves?", a: "Yes. ClinicFlow247 gives you a shareable booking link. Patients see available slots in real-time and book without calling your clinic." },
  { q: "Does it work for multi-doctor clinics?", a: "Yes. You can set up separate schedules for each doctor. Patients choose the doctor they want when booking." },
  { q: "What happens when a patient cancels?", a: "The slot is immediately freed and becomes available for other patients. You get a notification of the cancellation." },
  { q: "Can I block time for lunch or personal appointments?", a: "Yes. Mark any time slot as unavailable. The booking system respects your block-out periods." },
];

export default function DoctorAppointmentSoftware() {
  return (
    <>
      <Head>
        <title>Doctor Appointment Software India | ClinicFlow247 by Aurora Blossom</title>
        <meta name="description" content="Online doctor appointment booking software for Indian clinics. Real-time slots, patient self-booking, WhatsApp reminders & queue management. Free 14-day trial." />
        <meta name="keywords" content="doctor appointment software, online appointment booking India, clinic appointment system, patient booking software, doctor scheduling software India" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Doctor Appointment Software India | ClinicFlow247" />
        <meta property="og:description" content="Online doctor appointment booking with real-time slots, WhatsApp reminders, and queue management. Free 14-day trial." />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </Head>

      <Header brand="" links={<HeaderLinks dropdownHoverColor="info" />} fixed color="white" changeColorOnScroll={{ height: 60, color: "white" }} />

      <main id="main-content">
        <PageHero
          overline="CLINICFLOW247 FEATURE"
          title="Doctor Appointment Software for Indian Clinics"
          lead="Stop managing appointments on paper or WhatsApp messages. ClinicFlow247 gives your clinic real-time online booking, automated reminders, and a live patient queue — in minutes."
          actions={<CtaLink href="/book-demo">Book a Free Demo →</CtaLink>}
          footnote="Free 14-day trial · No credit card · Starts at ₹599/month"
        />

        <ProblemBand
          title="How Much Time Does Your Staff Spend on the Phone?"
          body="Clinics that manage appointments via phone calls and paper registers spend 3–4 hours daily on scheduling alone. Missed calls mean missed patients. Double-bookings cause chaos. No-shows go untracked."
          pains={["❌ Phone calls for every booking", "❌ Double-bookings from manual entry", "❌ No-shows with zero reminders", "❌ Staff tied up scheduling instead of serving patients"]}
        />

        <FeatureSection
          title="Appointment Management That Works 24/7"
          subtitle="Patients can book while you sleep. You manage the queue with one tap."
          features={FEATURES}
          iconVariant="teal"
        />

        <FaqSection faqs={FAQS} />

        <CtaBand
          title="See It Live — Book a Demo Today"
          body="Our team will walk you through the complete appointment workflow in 20 minutes. No commitment required."
        >
          <CtaLink href="/book-demo">Book a Free Demo →</CtaLink>
        </CtaBand>
      </main>

      <Footer legal={`© ${new Date().getFullYear()} Aurora Blossom. ClinicFlow247 is a product of Aurora Blossom, Hyderabad.`} />
    </>
  );
}
