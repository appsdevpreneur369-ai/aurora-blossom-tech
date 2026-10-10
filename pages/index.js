import React from "react";
import Head from "next/head";

import Header      from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import SiteFooter  from "/components/Footer/SiteFooter.js";

import SectionHome           from "/pages-sections/sections-page/SectionHome.js";
import SectionAboutUsDetails from "/pages-sections/sections-page/SectionAboutUsDetails.js";
import SectionServices       from "/pages-sections/sections-page/SectionServices.js";
import SectionProducts       from "/pages-sections/sections-page/SectionProducts.js";
import SectionClients        from "/pages-sections/sections-page/SectionClients.js";
import SectionTeams          from "/pages-sections/sections-page/SectionTeams.js";
import SectionCareers        from "/pages-sections/sections-page/SectionCareers.js";
import SectionContactUs      from "/pages-sections/sections-page/SectionContactUs.js";

export default function HomePage() {
  // Deep links such as /#careers from other pages: land on the section after hydration.
  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Aurora Blossom | Digital Transformation &amp; IT Services</title>
        <meta
          name="description"
          content="Aurora Blossom — enterprise IT consulting, AI &amp; analytics, cloud architecture, SAP, e-commerce, and digital marketing. Hyderabad, India."
        />
        <link key="canonical" rel="canonical" href="https://www.aurora-blossom.com/" />
        <meta key="og:url" property="og:url"   content="https://www.aurora-blossom.com/" />
        <meta key="og:title" property="og:title" content="Aurora Blossom | Digital Transformation &amp; IT Services" />
      </Head>

      <Header
        color="white"
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{ height: 80, color: "white" }}
      />

      <main id="main-content">
        <SectionHome />
        <SectionAboutUsDetails />
        <SectionServices />
        <SectionProducts />
        <SectionClients />
        <SectionTeams />
        <SectionCareers />
        <SectionContactUs />
      </main>

      <SiteFooter
        legal={`© ${new Date().getFullYear()} Aurora Blossom. All rights reserved.`}
        extra="Made with ☀️ in Hyderabad, India"
      />
    </>
  );
}
