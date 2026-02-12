# Portfolio Implementation — Ashish Shah

## Overview
- Purpose: 3‑page personal portfolio optimized for interviews and placements
- Role: Cybersecurity & Data Science Learner
- Stack: React + Vite, Tailwind CSS, Framer Motion, Lucide Icons, React Router
- Design: Dark mode by default, Apple‑esque minimal minimalism, Glassmorphism, Bento‑style grid sections, Inter font

## Key Files
- Config
  - [package.json](file:///C:/Users/aahis/Documents/trae_projects/portfolio/package.json)
  - [vite.config.js](file:///C:/Users/aahis/Documents/trae_projects/portfolio/vite.config.js)
  - [postcss.config.js](file:///C:/Users/aahis/Documents/trae_projects/portfolio/postcss.config.js)
  - [tailwind.config.js](file:///C:/Users/aahis/Documents/trae_projects/portfolio/tailwind.config.js)
  - [index.html](file:///C:/Users/aahis/Documents/trae_projects/portfolio/index.html) (html element has class="dark")
- App
  - [src/main.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/main.jsx)
  - [src/App.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/App.jsx)
  - [src/index.css](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/index.css)
  - [src/components/Layout.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/components/Layout.jsx)
  - Pages: [Home.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/pages/Home.jsx), [About.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/pages/About.jsx), [Projects.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/pages/Projects.jsx)
- Assets
  - public/ashish_image.jpeg (your photo; add this file)

## Configuration Details
- Tailwind: darkMode "class", Inter font, custom glass shadow
  - See [tailwind.config.js](file:///C:/Users/aahis/Documents/trae_projects/portfolio/tailwind.config.js)
- PostCSS: Tailwind + Autoprefixer
  - See [postcss.config.js](file:///C:/Users/aahis/Documents/trae_projects/portfolio/postcss.config.js)
- Global Styles: dark theme, utility components (glass, btn, chip), marquee animation
  - See [src/index.css](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/index.css)
- Dark by default: html class="dark" in [index.html](file:///C:/Users/aahis/Documents/trae_projects/portfolio/index.html)

## Routing
- React Router with nested layout
  - "/" → Home
  - "/about" → About
  - "/projects" → Projects
  - "*" → redirect to "/"
  - See [src/App.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/App.jsx)

## Layout Component
- Glass navbar with brand, nav items, social icons, resume button
- Accessible "Skip to content" link
- Footer with chips and copyright
- Name and initials configured as "Ashish Shah" and "AS"
- See [src/components/Layout.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/components/Layout.jsx)

## Home Page
- Hero headline: “Ashish Shah — Cybersecurity & Data Science Learner.”
- Profile card: image frame using /ashish_image.jpeg, name and role chips
- Featured Skills marquee: Python, Jupyter, Pandas, NumPy, scikit‑learn, SQL, Linux, Networking, Cybersecurity, Threat Modeling, OWASP, SIEM, Docker
- Bento-style highlight cards with chips and subtle motion
- CTA section for projects and contact
- See [src/pages/Home.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/pages/Home.jsx)

## About Page
- Bio section and simple timeline cards
- Technical stack chips focused on security/data: Python, Jupyter, Pandas, NumPy, scikit‑learn, SQL, Linux, Networking, Cybersecurity, Threat Modeling, OWASP, SIEM
- See [src/pages/About.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/pages/About.jsx)

## Projects Page
- Grid of project cards with title, description, tags
- Buttons: “View Code” (GitHub) and “Live Demo”
- See [src/pages/Projects.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/pages/Projects.jsx)

## Run Locally
1. In terminal from project root:
   - npm install
   - npm run dev
2. Open the URL shown (typically http://localhost:5173)
3. Build + preview:
   - npm run build
   - npm run preview

## Image Setup
- Place your photo at public/ashish_image.jpeg
- Recommended: square image, at least 240×240, optimized (≤300 KB)

## Customization
- Update email/GitHub/LinkedIn links in [Layout.jsx](file:///C:/Users/aahis/Documents/trae_projects/portfolio/src/components/Layout.jsx)
- Replace placeholder copy in pages with your content
- Add resume to public/resume.pdf for the Download button

## Hosting Notes
- React Router requires route rewrites to index.html on static hosts
- Example (Netlify): use a _redirects file with `/* /index.html 200`

## Accessibility
- Skip link, high contrast, focus states via Tailwind utilities
- Keep motion subtle; Framer Motion variants use small y/opacity transitions
