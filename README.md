# Ajinkya Saivar — Personal Portfolio Website

A premium, production-grade personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed to feel like a modern SaaS product — not a generic developer portfolio.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design Philosophy](#2-design-philosophy)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Tech Stack](#5-tech-stack)
6. [Project Structure](#6-project-structure)
7. [Pages and Sections](#7-pages-and-sections)
8. [Components Breakdown](#8-components-breakdown)
9. [Animations and Interactions](#9-animations-and-interactions)
10. [Dark and Light Mode](#10-dark-and-light-mode)
11. [SEO Setup](#11-seo-setup)
12. [Performance Strategy](#12-performance-strategy)
13. [Responsive Design](#13-responsive-design)
14. [Advanced Features](#14-advanced-features)
15. [Environment Variables](#15-environment-variables)
16. [Getting Started](#16-getting-started)
17. [Deployment](#17-deployment)
18. [Roadmap](#18-roadmap)

---

## 1. Project Overview

This is the official personal portfolio of **Ajinkya Saivar**, a Full-Stack Developer specializing in the MERN stack. The website serves as a central hub for showcasing projects, skills, experience, and professional presence. It is built to make an immediate strong impression on recruiters, startup founders, and hiring managers.

The design is inspired by the aesthetic language of companies like Apple, Linear, Stripe, Vercel, Framer, and Raycast — clean, fast, intentional, and professional.

Key goals of this portfolio:

- Communicate technical credibility and professionalism instantly
- Present projects with depth, context, and impact — not just screenshots
- Perform at a Lighthouse score of 95 or above
- Load fast, look premium on all screen sizes, and support full accessibility
- Be easily maintainable and extensible as skills and projects grow

---

## 2. Design Philosophy

The visual and interaction design of this portfolio is guided by a small set of principles that are followed consistently across every section and component.

**Minimal over loud.** Every element on screen earns its place. Nothing is decorative for the sake of decoration. White space is used intentionally to let content breathe and create focus.

**Hierarchy before aesthetics.** Font size, weight, color, and spacing are used systematically to create a clear reading path. The most important thing on any screen should be the most visually dominant.

**Subtle motion over flashy animation.** Animations exist to guide attention and add a sense of polish — not to show off. Every motion is purposeful and never distracts from content.

**System thinking over one-off styling.** Colors, spacing, type sizes, and border radii all come from a defined token system. This ensures the design feels coherent from the first section to the last.

**Premium feel without excess.** No neon gradients. No floating blobs. No cyberpunk color palettes. The palette is restrained, the type is clean, and the layout is structured.

---

## 3. Color System

The color system is defined as CSS custom properties at the root level and switches between light and dark modes using a class-based approach (`class="dark"` on the `<html>` element).

### Light Mode

| Token         | Value     | Usage                                      |
|---------------|-----------|--------------------------------------------|
| Background    | `#FAFAFA` | Page background                            |
| Card          | `#FFFFFF` | Component surfaces, cards                  |
| Primary       | `#1A4D8F` | CTAs, links, highlights, active states     |
| Text          | `#0F172A` | Primary headings and body text             |
| Secondary     | `#64748B` | Descriptions, labels, meta information     |
| Border        | `#E2E8F0` | Dividers, card outlines, input borders     |

### Dark Mode

| Token         | Value     | Usage                                      |
|---------------|-----------|--------------------------------------------|
| Background    | `#09090B` | Page background                            |
| Card          | `#111827` | Component surfaces, cards                  |
| Primary       | `#3B82F6` | CTAs, links, highlights, active states     |
| Text          | `#F8FAFC` | Primary headings and body text             |
| Secondary     | `#94A3B8` | Descriptions, labels, meta information     |
| Border        | `#27272A` | Dividers, card outlines, input borders     |

These tokens are implemented in `tailwind.config.ts` and referenced throughout all components using semantic class names rather than hardcoded values.

---

## 4. Typography

Three typefaces are loaded from Google Fonts or a local source, each serving a distinct role.

**Geist** is used for headings, hero text, and large display type. It is clean, geometric, and modern — the kind of typeface that reads as technically precise and premium.

**Inter** is used for body copy, descriptions, and interface text. It is highly legible at small sizes and widely trusted in professional software products.

**Plus Jakarta Sans** is used for UI labels, badges, tags, and secondary interface elements. It adds a slight character to small text without competing with the larger display type.

### Scale

| Role              | Size        | Weight   | Font           |
|-------------------|-------------|----------|----------------|
| Hero Heading      | 72px–96px   | 700–800  | Geist          |
| Section Heading   | 40px–48px   | 700      | Geist          |
| Sub-heading       | 24px–32px   | 600      | Geist          |
| Body              | 16px–18px   | 400      | Inter          |
| Label / Badge     | 12px–14px   | 500–600  | Plus Jakarta   |

Line height for body text is set to 1.7 for comfortable reading. Letter spacing is tightened slightly on large display headings for a modern, compact feel.

---

## 5. Tech Stack

### Frontend

- **Next.js 15** — App Router, Server Components, file-based routing
- **React 18** — Component architecture
- **TypeScript** — Type safety across all components and utilities
- **Tailwind CSS** — Utility-first styling with a custom token extension
- **Framer Motion** — Declarative, physics-based animations
- **Shadcn UI** — Accessible, headless component primitives
- **next-themes** — Dark and light mode management

### Content

- MDX via `@next/mdx` for blog posts
- Static JSON data files for projects, skills, and timeline entries

### SEO and Meta

- Next.js Metadata API for dynamic Open Graph and Twitter cards
- `next-sitemap` for automated sitemap generation
- `robots.txt` configured for full crawl access
- JSON-LD structured data for Person schema

### Analytics and Monitoring

- Vercel Analytics (zero-config, privacy-first)
- Vercel Speed Insights

### Development Tooling

- ESLint with strict TypeScript rules
- Prettier for consistent formatting
- Husky and lint-staged for pre-commit checks
- `@commitlint/cli` for conventional commit enforcement

---

## 6. Project Structure

```
ajinkya-portfolio/
├── app/
│   ├── layout.tsx                  # Root layout, fonts, theme provider
│   ├── page.tsx                    # Home page (all sections assembled)
│   ├── globals.css                 # CSS custom properties, base styles
│   ├── projects/
│   │   ├── page.tsx                # All projects listing
│   │   └── [slug]/
│   │       └── page.tsx            # Individual project case study
│   ├── blog/
│   │   ├── page.tsx                # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx            # Individual blog post (MDX)
│   └── api/
│       └── contact/
│           └── route.ts            # Contact form submission handler
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CommandMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── GitHub.tsx
│   │   ├── Resume.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Tag.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── MagneticButton.tsx
│   └── common/
│       ├── SectionHeading.tsx
│       ├── AnimatedText.tsx
│       └── PageTransition.tsx
│
├── content/
│   ├── projects/                   # MDX files for project case studies
│   └── blog/                       # MDX files for blog posts
│
├── data/
│   ├── projects.ts                 # Project metadata
│   ├── skills.ts                   # Skill categories and levels
│   ├── experience.ts               # Timeline entries
│   └── testimonials.ts             # Testimonial entries
│
├── lib/
│   ├── utils.ts                    # cn(), formatDate(), etc.
│   ├── metadata.ts                 # Shared metadata factory
│   └── mdx.ts                      # MDX processing utilities
│
├── public/
│   ├── resume.pdf
│   ├── og-image.png
│   ├── sitemap.xml
│   ├── robots.txt
│   └── icons/
│
├── styles/
│   └── animations.css
│
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── .env.local
```

---

## 7. Pages and Sections

### Home Page ( / )

The home page is a single scrollable page where all sections are loaded in sequence. Each section fades in as the user scrolls using Framer Motion's `useInView` hook. Sections are separated by generous vertical spacing and subtle horizontal dividers.

Section order:

1. Hero
2. About
3. Skills
4. Projects (featured, 3 cards)
5. Experience Timeline
6. GitHub Stats
7. Resume
8. Testimonials
9. Blog (latest 3 posts)
10. Contact

### Projects Page ( /projects )

A full grid of all projects with filtering by category. Each card shows the project thumbnail, title, short description, and tech tags. Clicking a card navigates to the case study page.

### Project Case Study ( /projects/[slug] )

A full-page write-up for each project covering the problem it solved, the approach taken, architecture decisions, key features, tech stack, and the impact. Includes screenshots, GitHub link, and live demo link.

### Blog ( /blog )

A clean list view of all written articles. Posts are authored in MDX and rendered with proper code highlighting, typography, and reading time estimate.

### Blog Post ( /blog/[slug] )

Individual post with an estimated reading time, table of contents sidebar, syntax-highlighted code blocks, and a related posts section at the bottom.

---

## 8. Components Breakdown

### Navbar

Fixed at the top. Transparent background on load that gains a frosted glass effect with a subtle border on scroll. Contains logo (name initials), navigation links, theme toggle, and a Resume button.

On mobile it collapses into a slide-in drawer. The Command Menu (⌘K) can be triggered from the keyboard shortcut or a button in the navbar.

### Hero Section

Full viewport height. Two-column layout on desktop, stacked on mobile.

Left side contains:
- A small badge: "Available for Internships" with a pulsing green indicator dot
- Main heading: "Hi, I'm Ajinkya." in 80px Geist, followed by a value proposition line
- A short description of the tech stack and focus areas
- Two CTA buttons: "View Projects" (primary, filled) and "Download Resume" (secondary, outlined)

Right side contains a 3D-style glass card that lists the core technologies with their logos, rendered with a subtle floating animation via Framer Motion keyframes. Behind the card is a very faint dot-grid pattern to add depth without visual noise.

### About Section

Two-column layout. Left side has a professional photo or an illustrated developer avatar. Right side tells the story in paragraphs — who Ajinkya is, where he comes from (farmer's son, real-world responsibilities), why he codes, and where he is headed.

Below the text are four stat counters that animate up from zero using a count-up hook on scroll:

- Projects Built
- Technologies Learned
- GitHub Contributions
- Years Learning

### Skills Section

Six category cards in a responsive grid. Each card has a category title and a list of skill items. Each skill item includes an icon (sourced from Simple Icons or Devicons), the skill name, and a small experience indicator.

On hover, cards lift slightly with a shadow and the icons subtly scale up.

Categories:
- Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, JWT Authentication
- Database: MongoDB, Mongoose
- DevOps: Docker, AWS Basics, Deployment
- Tools: Git, GitHub, Postman, VS Code
- Currently Learning: (dynamically updated to reflect what is being explored)

### Projects Section

On the home page, the three most impactful projects are shown as large, premium cards. Each card occupies a generous amount of space and includes:

- A high-quality project screenshot or mockup image
- Project title and a one-sentence summary
- A horizontal list of tech stack tags
- Three buttons: Live Demo, GitHub, Case Study

The cards are staggered in their entrance animation — each one fades up with a slight delay after the previous one.

Full project list (for the /projects page):

- Full Stack E-Commerce Platform — A complete online store with product catalog, cart, checkout, and admin dashboard
- AI SaaS Tool — A web application powered by an AI API that solves a specific problem (writing, generation, or analysis)
- Task Management Platform — A Trello-like application with boards, drag-and-drop, and real-time updates
- Portfolio Builder — A tool that lets developers generate a portfolio from a simple form
- Real-Time Chat Application — WebSocket-based chat with rooms, authentication, and message history

### Experience Timeline

A vertical timeline with alternating left-right layout on desktop and single-column on mobile. Each entry includes:

- Date range
- Role or milestone title
- Company, institution, or context
- Short description (2–3 sentences)
- Tech tags where relevant

The timeline line animates downward as the user scrolls, and each entry fades in sequentially using `useInView`.

Timeline entries:
- B.Sc. enrollment and first contact with programming
- First personal project built
- Self-taught MERN stack journey
- First freelance project
- Open source contributions
- Internship (if applicable, or marked as actively seeking)

### GitHub Section

Pulls data from the GitHub REST API or a pre-fetched static snapshot. Displays:

- Contribution graph (custom SVG rendering or an embedded widget)
- Total stars across repositories
- Total commits in the last year
- Most used programming languages (horizontal bar chart)
- Current commit streak

Laid out in a two-column card grid with clean stat display.

### Resume Section

A premium-styled card with a preview of the resume layout summarizing:

- Education details (institution, degree, expected graduation)
- Top skills (tags)
- Featured projects (names only)
- Achievements or certifications

Two buttons at the bottom: "View Resume" (opens PDF in new tab) and "Download Resume" (triggers file download).

### Testimonials Section

A card carousel (controlled, not auto-playing) showing reviews from mentors, peers, or early clients. Each card includes:

- Full name and role of the reviewer
- Their organization or affiliation
- The testimonial text
- A profile photo or initials avatar

Navigation is handled by left and right arrow buttons. On mobile, swipe gestures are supported.

### Blog Section

Displays the three most recent posts in a clean card layout. Each card shows:

- Post title
- Publication date
- Estimated reading time
- A short excerpt
- Category tag

A "Read All Posts" link navigates to /blog.

### Contact Section

Heading: "Let's Build Something Amazing Together."

Below the heading, a short paragraph inviting collaboration, internships, or freelance projects.

Contact methods shown as icon + label cards:
- Email address (click to open mail client)
- LinkedIn profile link
- GitHub profile link
- Twitter/X profile link

Below the contact methods, a full contact form with:
- Name field
- Email field
- Subject field
- Message textarea
- Send button

On submission, the form shows a checkmark animation and a success message. On error, it shows a clear, friendly error message. The form handler lives at `/api/contact/route.ts` and sends an email via Resend or Nodemailer.

### Footer

Three-column layout on desktop:

- Left: Logo and tagline — "Building products, solving problems, and continuously learning."
- Center: Navigation links
- Right: Social icons

Below that, a single-line copyright notice.

---

## 9. Animations and Interactions

All animations use Framer Motion. Every animation is intentional, short, and respects the user's `prefers-reduced-motion` setting.

### Global Entrance Animations

Sections use a standard `fadeUp` variant:

```ts
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}
```

For grids of items, stagger children using `staggerChildren: 0.1` so they reveal one after another.

### Scroll Progress Bar

A fixed thin bar at the top of the viewport that fills from left to right as the user scrolls down the page. Implemented using Framer Motion's `useScroll` and `scaleX` transform.

### Magnetic Buttons

Primary CTA buttons have a subtle magnetic effect — the button and its text shift slightly toward the cursor position. This adds interactivity without being excessive.

### Card Hover Elevation

Cards lift 4px on hover and gain a softened shadow. Implemented with Tailwind `group-hover` utilities and a CSS `transform: translateY(-4px)` transition.

### Page Transition

When navigating between pages (home → project case study, home → blog post), there is a brief fade-out and fade-in using an `AnimatePresence` wrapper around the page content.

### Timeline Animation

The vertical line in the experience section uses a Framer Motion `pathLength` animation, growing from 0 to 1 as the user scrolls past the section.

### Loading Screen

On first load, a minimal loading animation shows the initials "AS" with a fade-out before the main content is revealed. This only runs once per session and is skipped on return visits.

---

## 10. Dark and Light Mode

Theme management is handled by `next-themes`. The initial theme is set to the system preference. Users can toggle manually using the theme button in the navbar.

The toggle button shows a sun icon in dark mode and a moon icon in light mode, with a smooth rotation animation on switch.

All colors are defined as CSS variables that reference the active theme. Tailwind's `dark:` variant classes are used to handle theme-specific overrides.

The selected theme is persisted in `localStorage` and respected on return visits without flash, because `next-themes` uses a blocking script injected into the `<head>` to set the class before the first paint.

---

## 11. SEO Setup

### Metadata API

Each page exports a `generateMetadata` function returning a full metadata object including:

- `title` with a template (`{Page} — Ajinkya Saivar`)
- `description`
- `openGraph` with image, title, description, type, and URL
- `twitter` card with image and handles
- `canonical` URL

### Open Graph Image

A static OG image at `public/og-image.png` is used as a fallback. Project and blog pages use dynamically generated OG images via `@vercel/og` at `/api/og`.

### Structured Data (JSON-LD)

The home page includes a JSON-LD `Person` schema block embedded in a `<script type="application/ld+json">` tag. It describes Ajinkya's name, job title, URLs, skills, and social profiles — which helps search engines surface the portfolio in rich results.

### Sitemap

Generated automatically using `next-sitemap`. Run `npm run postbuild` after each build to regenerate. The sitemap is submitted to Google Search Console after deployment.

### Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://ajinkya.dev/sitemap.xml
```

---

## 12. Performance Strategy

The target is a Lighthouse score of 95 or above on all four metrics: Performance, Accessibility, Best Practices, and SEO.

### Images

All images are served via the Next.js `<Image>` component, which:
- Serves modern formats (WebP, AVIF) automatically
- Applies lazy loading by default
- Requires explicit `width` and `height` to eliminate layout shift (CLS = 0)

### Fonts

Fonts are loaded using `next/font/google` with `display: swap` and preloaded subsets. This prevents render-blocking font requests and eliminates invisible text during load (FOIT).

### Code Splitting

Each section is a separate component. Next.js automatically splits the bundle per route. Heavy components (like the Command Menu) are loaded with `dynamic(() => import(...), { ssr: false })`.

### Static Generation

All pages that do not require real-time data are statically generated at build time. Blog posts and project case studies are pre-rendered from MDX files. GitHub stats are fetched at build time and re-validated using ISR (Incremental Static Regeneration) with a 24-hour revalidation interval.

### Third-Party Scripts

No third-party scripts are loaded synchronously. Analytics is handled by Vercel Analytics which injects a minimal, deferred script with no cookies.

---

## 13. Responsive Design

The layout is designed mobile-first. Every component starts with the mobile layout and expands using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`).

Breakpoints used:

| Prefix | Width    | Context                      |
|--------|----------|------------------------------|
| (base) | < 640px  | Mobile phones                |
| sm:    | ≥ 640px  | Large phones, small tablets  |
| md:    | ≥ 768px  | Tablets                      |
| lg:    | ≥ 1024px | Laptops and desktops         |
| xl:    | ≥ 1280px | Large monitors               |

Mobile-specific considerations:

- The navbar collapses into a full-screen drawer with large tap targets
- The hero section stacks vertically, with the glass card below the text
- The project cards display one per row on mobile
- The timeline shifts to a single-column layout
- Touch swipe gestures are enabled on the testimonials carousel
- All font sizes are capped to prevent oversized text on small screens

---

## 14. Advanced Features

### Command Menu (⌘K)

Triggered by the keyboard shortcut `Ctrl+K` (or `⌘K` on Mac) or a button in the navbar. Opens a search overlay similar to Linear or Raycast. Users can:

- Navigate to any section by typing its name
- Open the GitHub profile
- Open LinkedIn
- Download the resume
- Toggle dark/light mode

Implemented with `cmdk` (Command Menu library) and `AnimatePresence` for the open/close animation.

### Smooth Scroll

Native CSS `scroll-behavior: smooth` is applied globally. Internal navigation links use Next.js `<Link>` components with hash anchors. The scroll offset accounts for the fixed navbar height using a CSS custom property `--navbar-height`.

### Scroll Progress Indicator

A thin horizontal bar fixed to the top of the viewport. It fills left-to-right as the user scrolls from the top of the page to the bottom. The color matches the primary brand color.

### Accessibility

- All interactive elements are reachable by keyboard
- Focus indicators are clearly visible in both themes
- Color contrast ratios meet WCAG AA requirements across all text and background combinations
- All images have descriptive `alt` text
- ARIA labels are applied to icon-only buttons
- The site is navigable with a screen reader (tested with VoiceOver)
- `prefers-reduced-motion` is respected — animations are disabled for users who have requested reduced motion in their OS settings

---

## 15. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Contact form
RESEND_API_KEY=your_resend_api_key

# GitHub API (for stats section)
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=ajinkya-saivar

# Site URL (used for OG image generation and canonical URLs)
NEXT_PUBLIC_SITE_URL=https://ajinkya.dev
```

These variables are not committed to version control. A `.env.example` file is included in the repository with empty placeholders.

---

## 16. Getting Started

### Prerequisites

- Node.js 20 or later
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ajinkya-saivar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# Run the development server
npm run dev
```

Open `http://localhost:3000` in your browser.

### Scripts

| Command              | Description                                      |
|----------------------|--------------------------------------------------|
| `npm run dev`        | Start the development server with hot reload     |
| `npm run build`      | Create an optimized production build             |
| `npm run start`      | Start the production server locally              |
| `npm run lint`       | Run ESLint across all files                      |
| `npm run type-check` | Run TypeScript compiler without emitting files   |
| `npm run format`     | Format all files with Prettier                   |
| `npm run postbuild`  | Generate sitemap after build                     |

---

## 17. Deployment

This portfolio is deployed on **Vercel**, which provides the best integration with Next.js.

### Steps

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Set the environment variables in the Vercel project settings (same keys as `.env.local`)
4. Deploy

Vercel automatically deploys on every push to the `main` branch. Pull request previews are generated for every branch.

### Custom Domain

The portfolio is available at `ajinkya.dev`. The domain is configured in Vercel's domain settings, and an SSL certificate is provisioned automatically.

### Analytics

Vercel Analytics and Speed Insights are enabled from the Vercel dashboard. They provide Core Web Vitals data without requiring additional packages or configuration.

---

## 18. Roadmap

Features and improvements planned for future versions:

- Add animations to the GitHub contribution graph using custom SVG rendering
- Add a filtering and search system for the blog
- Integrate a CMS (Sanity or Contentlayer) for easier content management
- Add a guestbook page where visitors can leave a short message
- Publish case studies for each featured project with images and architecture diagrams
- Add support for multiple languages (Marathi and Hindi)
- Build a custom OG image generator for blog posts using `@vercel/og`
- Add an interactive code playground for JavaScript snippets in blog posts

---

## License

This project and all its design assets are personal and proprietary. The code structure and setup may inspire your own work, but direct copying of the design, content, or code for commercial use is not permitted.

---

Built by Ajinkya Saivar. Full-Stack Developer. MERN Stack. B.Sc. Student. Farmer's son.

*Building products, solving problems, and continuously learning.*