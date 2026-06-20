import { useEffect } from "react";
import Router from "next/router";

export default function Index() {
  useEffect(() => {
    Router.replace("/sections#home");
  }, []);

  return null;
}

// Server-side redirect for SEO — search engines get a proper 301
export function getServerSideProps() {
  return {
    redirect: { destination: "/sections", permanent: false },
  };
}
