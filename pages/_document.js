import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "/styles/createEmotionCache.js";

const SITE_URL = "https://www.aurora-blossom.com";
const SITE_NAME = "Aurora Blossom";
const SITE_DESCRIPTION =
  "Aurora Blossom — enterprise IT consulting, AI & analytics, cloud architecture, SAP, e-commerce, and digital marketing. Hyderabad, India.";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const clinicflowSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClinicFlow247",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, Android, iOS",
  url: "https://clinicflow247.com",
  description:
    "ClinicFlow247 is a clinic management software for Indian clinics — appointment booking, EMR, e-prescriptions, WhatsApp reminders, and billing. Plans from ₹1,199/month.",
  offers: {
    "@type": "Offer",
    price: "1199",
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1199",
      priceCurrency: "INR",
      unitCode: "MON",
    },
  },
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo/aurora-blossom-logo-512.png`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@aurora-blossom.com",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "English",
  },
  founder: {
    "@type": "Person",
    name: "Suhasini",
    jobTitle: "Chief Executive Officer",
  },
  foundingDate: "2020",
  knowsAbout: [
    "Digital Transformation",
    "Artificial Intelligence",
    "Cloud Architecture",
    "SAP Consulting",
    "E-Commerce Development",
    "Data Analytics",
    "IT Staffing",
  ],
  sameAs: [
    "https://www.linkedin.com/company/aurorablossomtech",
    "https://twitter.com/aurorablossomtech",
  ],
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    // Extract MUI (Emotion) critical CSS into <head> instead of inline <style>
    // tags scattered through the body.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });
    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyleTags = extractCriticalToChunks(initialProps.html).styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));
    return { ...initialProps, emotionStyleTags };
  }

  render() {
    return (
      <Html lang="en-IN">
        <Head>
          {/* Charset & basics */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}

          {/* Page-level SEO (description, canonical, Open Graph, Twitter) lives in
              pages/_app.js so each page can override it without duplicates. */}
          <meta name="robots" content="index, follow" />

          {/* Geo */}
          <meta name="geo.region" content="IN-TG" />
          <meta name="geo.placename" content="Hyderabad" />

          {/* Theme & PWA */}
          <meta name="theme-color" content="#4C1D95" />
          <meta name="application-name" content={SITE_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

          {/* Favicons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />

          {/* Fonts — self-hosted (styles/fonts.css); preload the Latin faces used above the fold */}
          <link rel="preload" href="/fonts/montserrat-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

          {/* JSON-LD: Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          {/* JSON-LD: WebSite (enables Google Sitelinks search) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          {/* JSON-LD: SoftwareApplication — ClinicFlow247 product */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicflowSchema) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
