# Aurora Blossom Tech — Corporate Website

Official website for **Aurora Blossom Tech**, an enterprise IT services company based in Hyderabad, India.  
Built with Next.js 12, React 18, and MUI v5.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 12 (Pages Router) |
| UI Library | MUI v5 (`@mui/material`) |
| Styling | MUI JSS + SCSS |
| Animations | `react-type-animation`, CSS keyframes |
| Fonts | Inter + Montserrat (Google Fonts) |
| SEO | JSON-LD schema, Open Graph, Twitter Cards, canonical URLs |

---

## Getting Started

### Prerequisites
- Node.js 16+ — [nodejs.org](https://nodejs.org)
- npm 8+

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

The app auto-redirects `localhost:3000` → `localhost:3000/sections`.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
aurora-blossom-tech/
├── pages/
│   ├── _document.js          # Global SEO head — OG, Twitter, JSON-LD, fonts
│   ├── _app.js               # Aurora Blossom MUI theme + page transitions
│   ├── index.js              # Redirects → /sections
│   ├── sections.js           # Main single-page layout (all sections)
│   ├── ai-details.js         # AI services detail page
│   ├── career-details.js     # Careers search + job listings
│   ├── services-details.js   # Services detail page
│   └── contact-us.js         # Standalone contact page
│
├── pages-sections/sections-page/
│   ├── SectionHome.js        # Hero — Aurora gradient, TypeAnimation CTAs
│   ├── SectionAboutUsDetails.js  # Vision / Mission / Values cards
│   ├── SectionServices.js    # 6-service grid with Aurora colour palette
│   ├── SectionProducts.js    # Vishudha e-commerce product showcase
│   ├── SectionClients.js     # Client logo cards + CTA
│   ├── SectionTeams.js       # Flip cards — 6 team members
│   ├── SectionCareers.js     # Filterable job listings
│   └── SectionContactUs.js   # Contact info with icon rows
│
├── components/
│   ├── Header/
│   │   ├── Header.js         # App bar with mobile drawer
│   │   └── HeaderLinks.js    # Desktop nav + Aurora Blossom logo/brand
│   └── Footer/Footer.js
│
├── data/                     # All content data files
│   ├── contact-us-data.js
│   ├── careers-data.js
│   ├── services-data.js
│   └── header-links-data.js
│
├── public/
│   ├── img/logo/
│   │   └── aurora-blossom-logo.png   # ← place your logo here
│   ├── robots.txt
│   └── sitemap.xml
│
├── styles/
│   ├── jss/novel-logiks/     # MUI JSS style definitions
│   └── scss/novel-logiks.scss
│
└── next.config.js            # Image optimisation + security headers
```

---

## Brand Colours

| Role | Hex |
|---|---|
| Primary violet | `#7C3AED` / `#4C1D95` |
| Secondary teal | `#0891B2` / `#22D3EE` |
| Accent pink | `#EC4899` / `#BE185D` |
| Dark slate | `#0F172A` / `#1E293B` |

---

## Logo Setup

Save your logo image to:

```
public/img/logo/aurora-blossom-logo.png
```

It will appear automatically in the desktop and mobile header.

---

## SEO

- **JSON-LD** Organization schema in `_document.js`
- **Open Graph** and **Twitter Card** meta tags
- **Canonical URL**: `https://www.aurorablossomtech.com`
- **robots.txt** and **sitemap.xml** in `/public`
- Per-page `<Head>` override in `pages/sections.js`

---

## Team

| Name | Role |
|---|---|
| Suhasini | Chief Executive Officer |
| Venkat Raju | Cloud Architect |
| Farhaan | Data Analyst & Data Scientist |
| Sunil | Front End Lead |
| Shanti | Technical Lead |
| Sri Charan | Full Stack Developer |

---

## Contact

- **Website**: [aurorablossomtech.com](https://www.aurorablossomtech.com)
- **Email**: contact@aurorablossomtech.com
- **HR**: hr@aurorablossomtech.com
- **Location**: Hyderabad, Telangana, India

---

© 2025 Aurora Blossom Tech. All rights reserved.
