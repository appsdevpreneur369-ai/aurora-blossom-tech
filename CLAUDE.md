# CLAUDE.md — Aurora Blossom Tech

## 1. Project Mission

Build and maintain a polished, modern, enterprise-grade digital experience for Aurora Blossom Tech.

Aurora Blossom's business positioning spans:
- IT Services and Technology Consulting
- AI Automation
- Digital Marketing
- Software Development and Digital Solutions

ClinicFlow247 is a healthcare SaaS product created by Aurora Blossom. Keep the parent-company and product relationship clear wherever the existing application already represents it.

The website should communicate credibility, technical capability, trust, and quality. The target experience should feel thoughtfully designed and production-ready—not like a generic template.

## 2. Non-Negotiable Content Preservation Rule

**Do not change the existing website's content.**

Unless the user explicitly authorizes content changes:
- Do not rewrite, paraphrase, shorten, expand, translate, or remove existing copy.
- Do not change headings, subheadings, service descriptions, button labels, navigation labels, testimonials, FAQs, legal text, contact information, metadata, or other existing content.
- Do not invent clients, customer logos, case studies, metrics, awards, certifications, testimonials, partnerships, or business claims.
- Do not replace real content with placeholder text or lorem ipsum.
- Do not hide content simply to make a design cleaner.
- Preserve existing links and their destinations unless a technical defect requires correction; explain any necessary correction.
- Preserve existing SEO content and metadata. Do not change SEO copy as part of a visual redesign.

You may change the **presentation** of existing content: layout, spacing, typography, colors, borders, backgrounds, responsive behavior, component structure, icons, and animations. Reorganize sections only when doing so does not alter the meaning, order-dependent flow, functionality, or wording of the content. If a proposed change might alter content or meaning, leave it unchanged and report the opportunity separately.

## 3. Reference Websites

Use these sites as visual and UX references:
- https://www.skillzaglobal.com/
- https://www.infosys.com/

Inspect the currently available pages and experiences before implementation. Study patterns such as:
- Header and navigation behavior
- Hero-section composition and visual hierarchy
- Typography and whitespace
- Grid systems and section rhythm
- Service and capability cards
- Image and illustration treatment
- Color usage and contrast
- Calls to action
- Navigation menus and mobile menus
- Motion, hover states, and transitions
- Responsive behavior
- Footer structure
- Accessibility and interaction feedback

Treat these websites as references for quality and design patterns, not as assets to copy. **Do not copy their source code, branding, logos, text, distinctive illustrations, or proprietary design assets.** Create an original Aurora Blossom design system.

If a reference website is inaccessible to your browser or inspection tools, state that limitation and continue using only patterns you can verify. Do not claim to have inspected pages you could not access.

## 4. Required Workflow Before Making Changes

1. Inspect the complete project repository and identify the actual application root.
2. Read existing project documentation, `package.json` or equivalent manifests, routing, page components, global styles, design tokens, assets, and test/build commands.
3. Identify the framework, UI libraries, CSS approach, routing structure, and current component conventions.
4. Run the existing application and inspect all relevant pages at desktop, tablet, and mobile sizes if the environment supports it.
5. Record the current page structure and the existing text content so that content can be preserved.
6. Inspect both reference websites and make a short list of reusable visual/UX principles.
7. Present a concise audit and implementation plan, then proceed with implementation unless a genuinely blocking issue requires user input.
8. Make changes incrementally, keeping the project runnable.

Do not assume the project uses React, Next.js, Tailwind, or any other technology until the repository confirms it.

## 5. Design Direction

Aim for a distinctive, refined, enterprise technology aesthetic:
- Strong visual hierarchy and deliberate typography
- Generous, consistent whitespace
- Carefully controlled use of brand colors
- Clear content grouping and section rhythm
- High-quality responsive layouts
- Consistent alignment, border radii, shadows, and dividers
- Well-designed buttons, navigation, cards, forms, and interactive states
- Purposeful use of photography, illustrations, icons, and decorative graphics
- Subtle, performance-conscious motion
- Accessible contrast and readable line lengths
- A professional footer and cohesive navigation system

The result should feel modern and memorable while remaining appropriate for a B2B technology services company. Avoid visual clutter, excessive gradients, gratuitous glassmorphism, random animations, giant empty areas, generic template styling, and inconsistent card designs.

Do not choose colors arbitrarily. Inspect the current Aurora Blossom branding and assets first, then establish a coherent palette that supports the existing brand. Do not replace the brand identity without authorization.

## 6. Design System and Component Quality

Where appropriate, establish or improve reusable design tokens for:
- Brand and semantic colors
- Typography scale and font weights
- Spacing scale
- Content/container widths
- Breakpoints
- Border radii
- Shadows and borders
- Focus rings
- Transition timing

Create reusable components when they improve consistency and maintainability. Reuse the project's existing UI system where practical. Avoid introducing duplicate components or competing styling approaches.

For interactive components, implement all relevant states:
- Default
- Hover
- Keyboard focus
- Active/pressed
- Disabled
- Loading, error, or success where applicable

Do not add controls that look interactive but do nothing.

## 7. Responsive Design

The site must work well on:
- Small mobile phones
- Large mobile phones
- Tablets
- Laptops
- Wide desktop displays

Requirements:
- No horizontal overflow at supported viewport sizes.
- Navigation remains usable on mobile.
- Typography scales sensibly.
- Cards and grids adapt without awkward gaps.
- Buttons and touch targets remain comfortable to use.
- Images preserve their intended aspect ratio and do not distort.
- Important content and calls to action remain visible and usable.
- No essential information is available only on hover.

Do not solve mobile issues by hiding important content.

## 8. Accessibility and Usability

Follow established accessibility practices:
- Use semantic HTML and appropriate heading hierarchy.
- Ensure keyboard navigation works.
- Provide visible focus indicators.
- Give meaningful images appropriate alt text; use empty alt text for purely decorative images.
- Give icon-only controls accessible names.
- Associate form fields with labels and expose validation feedback.
- Respect reduced-motion preferences.
- Maintain sufficient text and control contrast.
- Do not use color alone to communicate status.
- Ensure menus, dialogs, and other interactive patterns are keyboard-accessible.

Do not add accessibility claims unless they have been verified.

## 9. Performance and Technical Quality

- Preserve existing application behavior and integrations.
- Avoid unnecessary dependencies. Before adding a library, check whether the project already has a suitable solution.
- Avoid unnecessary client-side JavaScript and large animation libraries.
- Optimize image sizing, formats, and loading behavior where feasible.
- Prevent layout shifts and oversized media.
- Preserve existing SEO structure, metadata, canonical URLs, and routes.
- Use stable keys and appropriate component boundaries.
- Keep code readable, typed where the project supports types, and consistent with repository conventions.
- Do not disable lint rules, TypeScript checks, tests, or accessibility checks just to make a build pass.
- Do not replace working architecture with a new framework or styling system solely for visual reasons.
- Never expose secrets, environment variables, API keys, or credentials.

## 10. Functionality Preservation

Before changing a component, understand what it does. Preserve:
- Existing routes and navigation destinations
- Contact and lead-generation forms
- Form validation and submission behavior
- Existing API calls and integrations
- Authentication and authorization, if present
- Analytics and tracking, if present
- Existing CTA behavior
- Responsive navigation behavior
- Existing links, downloadable resources, and external destinations

Do not simulate a successful form submission or fabricate backend functionality. If an existing feature is broken, report it and make a focused fix only when the cause is understood and the change is safe.

## 11. Content and Asset Rules

- Prefer existing, relevant project assets when they are appropriate.
- Do not use Skillza Global or Infosys logos, screenshots, copy, or proprietary assets as Aurora Blossom assets.
- Do not invent customer logos or display third-party logos as customers without evidence and authorization.
- Do not invent performance statistics or claims.
- Avoid generic stock imagery that conflicts with the content.
- Keep existing content text exactly as it is.
- Do not remove a section simply because its current content is difficult to design around.

If new imagery or icons are needed, use assets with suitable usage rights and document their source where appropriate.

## 12. Verification Before Completion

After implementation:
1. Run the available lint, type-check, test, and production-build commands.
2. Fix issues introduced by your changes.
3. Inspect every affected route and major section.
4. Verify mobile, tablet, and desktop layouts where tools allow.
5. Check for horizontal overflow, broken links, missing images, console errors, and nonfunctional controls.
6. Confirm forms and navigation retain their existing behavior.
7. Compare the final page content with the original and verify that no existing copy has been changed or removed.
8. Summarize the changes, files affected, tests run, and any unresolved issues.

Do not claim a test or visual inspection was completed if the environment did not allow it.

## 13. Implementation Priorities

Prioritize in this order:
1. Preserve content and functionality.
2. Fix structural and responsive layout issues.
3. Establish consistent typography, spacing, colors, and components.
4. Improve navigation, hero section, service presentation, CTAs, and footer.
5. Add restrained interaction polish and motion.
6. Optimize accessibility and performance.
7. Verify and report results.

The finished website should look cohesive across every page—not just the homepage.

## 14. Communication and Change Discipline

- Briefly explain the audit findings and implementation approach before large changes.
- Make changes directly in the existing repository.
- Avoid broad rewrites unrelated to the UI/UX task.
- Do not overwrite unrelated user work.
- Do not remove files or dependencies without understanding their purpose.
- Report assumptions, limitations, and any changes that could not be safely completed.
- Prefer a complete, working implementation over a visual mockup that is not wired into the application.
