import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

const SITE_URL = "https://www.aurora-blossom.com";
const SITE_NAME = "Aurora Blossom Tech";
const SITE_DESCRIPTION =
  "Aurora Blossom Tech — enterprise IT consulting, AI & analytics, cloud architecture, SAP, e-commerce, and digital marketing. Hyderabad, India.";
const OG_IMAGE = `${SITE_URL}/img/og-image.png`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/img/lsk_imgs/aurora-blossom-logo.png`,
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
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang="en-IN">
        <Head>
          {/* Charset & basics */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* SEO */}
          <meta name="robots" content="index, follow" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta
            name="keywords"
            content="IT services, digital transformation, AI, cloud architecture, SAP, e-commerce, Hyderabad, Aurora Blossom Tech"
          />
          <link rel="canonical" href={SITE_URL} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:title" content={`${SITE_NAME} | Digital Transformation & IT Services`} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={OG_IMAGE} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en_IN" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@aurorablossomtech" />
          <meta name="twitter:title" content={`${SITE_NAME} | Digital Transformation & IT Services`} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta name="twitter:image" content={OG_IMAGE} />

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

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            rel="stylesheet"
            crossOrigin="anonymous"
          />

          {/* JSON-LD Organization schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
