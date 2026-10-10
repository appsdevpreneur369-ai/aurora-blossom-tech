import React, { useState } from "react";
import PropTypes from "prop-types";
import Router from "next/router";

// Becomes true on the first client-side navigation. Until then, every island
// on the page was server-rendered, so its HTML (and its Emotion CSS, which is
// extracted into <head>) is already in the document.
let hasNavigated = false;
if (typeof window !== "undefined") {
  Router.events.on("routeChangeStart", () => {
    hasNavigated = true;
  });
}

/**
 * Wraps purely presentational content (no event handlers, no state) that
 * never needs to be interactive. On the initial page load React keeps the
 * server HTML as-is instead of hydrating it, which removes that subtree's
 * hydration cost from the main thread. After a client-side navigation the
 * children render normally.
 *
 * Only use for static markup: links inside still work (as regular anchors),
 * but onClick handlers, state and effects would never run on first load.
 * Never put next/image inside: in Next 12 it lazy-loads via JavaScript, so a
 * non-hydrated image would stay a blank placeholder.
 */
export default function StaticIsland({ as: Tag, children, ...rest }) {
  const [skipHydration] = useState(() => typeof window !== "undefined" && !hasNavigated);
  if (skipHydration) {
    // eslint-disable-next-line react/no-danger
    return <Tag {...rest} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: "" }} />;
  }
  return <Tag {...rest}>{children}</Tag>;
}

StaticIsland.defaultProps = { as: "div" };
StaticIsland.propTypes = { as: PropTypes.elementType, children: PropTypes.node };
