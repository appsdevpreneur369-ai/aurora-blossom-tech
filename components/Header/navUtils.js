import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { headerLinksData } from "../../data/header-links-data.js";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Smoothly scrolls to an on-page section when already on the homepage.
 * Returns true when the navigation was handled in-page.
 */
export function scrollToSection(id) {
  if (typeof window === "undefined" || window.location.pathname !== "/") return false;
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  return true;
}

// Interior routes that belong to a top-level navigation item.
const ROUTE_TO_TITLE = [
  ["/services-details", "Services"],
  ["/ai-details", "Services"],
  ["/career-details", "Careers"],
  ["/contact-us", "Contact Us"],
  ["/book-demo", "Products"],
  ["/clinic-management-software-india", "Products"],
  ["/doctor-appointment-software", "Products"],
  ["/electronic-prescription-software", "Products"],
];

/** Title of the nav item that should show as current (scroll-spy on "/"). */
export function useActiveNavItem() {
  const router = useRouter();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (router.pathname !== "/") {
      const match = ROUTE_TO_TITLE.find(([path]) => router.pathname.startsWith(path));
      setActive(match ? match[1] : null);
      return undefined;
    }
    if (typeof IntersectionObserver === "undefined") return undefined;

    const sections = headerLinksData.links
      .map((link) => ({ title: link.title, el: document.getElementById(link.smoothScroll) }))
      .filter((s) => s.el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hit = sections.find((s) => s.el === entry.target);
            if (hit) setActive(hit.title);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, [router.pathname]);

  return active;
}
