# RankRocket Digital – SEO Sandbox Site

RankRocket Digital is a static HTML SEO sandbox designed for practicing real-world SEO, analytics, and technical auditing without touching a live production site.

The site behaves like a small agency website with services, case studies, a blog, and several built‑in experiments for duplicate content, noindex behavior, tags, categories, and 404 handling.

## Project Overview

- Static, framework‑free HTML/CSS/JS project
- Dark theme layout with reusable header, footer, and article styles
- GTM and GA4 placeholders wired via `window.dataLayer` events on key pages
- Multiple SEO scenarios intentionally included:
  - Service hub + detail pages
  - Blog with pagination, tags, and categories
  - Duplicate content and canonicalization test
  - Noindex + robots.txt test URL
  - Custom 404 page and broken internal link
  - Organization, Article, Breadcrumb structured data

## Structure

Top‑level files:

- `index.html` – Home page, service overview, lead form, and experiment cards
- `about.html` – About page for E‑E‑A‑T and brand messaging audits
- `services.html` – Services hub; individual services live in `/services`
- `case-studies.html` – Case studies hub
- `blog.html` / `blog-page-2.html` – Blog index with pagination, tags, and categories
- `contact.html` – Contact/lead form for conversion testing
- `sitemap.html` / `sitemap.xml` – HTML and XML sitemaps
- `robots.txt` – Robots directives for the sandbox (including the noindex test URL)
- `privacy-policy.html` and `terms-and-conditions.html` – Legal pages
- `404.html` – Custom 404 template used for broken link tests
- `duplicate-on-page-seo-guide.html` – Duplicate content experiment page
- `noindex-test.html` – Meta robots `noindex,follow` test URL

Key directories:

- `assets/css/styles.css` – Global styles for layout, typography, blog cards, etc.
- `assets/js/main.js` – Basic JS for navigation, small UX behaviors, and example tracking hooks
- `blog/` – All blog articles (technical SEO, GA4, schema, on‑page SEO, etc.)
- `services/` – Individual service pages (technical audits, content SEO, local SEO, analytics)
- `tags/` – Tag archive pages:
  - `on-page-seo.html`
  - `technical-seo.html`
  - `local-seo.html`
- `categories/` – Category archive pages:
  - `seo-guides.html`
  - `technical-seo.html`

## Running the Site

There is no build step or server‑side code. You can:

- Open `index.html` directly in a browser, or
- Serve the folder with any static HTTP server (recommended if you want URLs to behave more like production):
  - For example, using Node:
    - `npx serve .`
    - or `npx http-server .`

All links are relative and assume the project root is the site root.

## SEO Experiments Included

Use these URLs and sections to practice common SEO tasks.

### Duplicate Content and Canonicalization

- Main canonical article:
  - `/blog/on-page-seo-guide-beginners.html`
- Duplicate experiment:
  - `/duplicate-on-page-seo-guide.html`
  - Has a canonical tag pointing to the main article
  - Linked from the home page and sitemaps

Suggested exercises:

- Crawl both URLs and compare duplicate content reports
- Verify canonical handling in your crawler and in search testing tools

### Noindex + robots.txt Behavior

- Test URL:
  - `/noindex-test.html`
  - Meta robots: `noindex,follow`
  - Disallowed in `robots.txt`
  - Linked from the home page, sitemaps, and content

Suggested exercises:

- Confirm how your crawler treats a URL that is both disallowed and noindex
- Inspect indexation status and reporting in your tools

### Tags and Categories

- Tag archives:
  - `/tags/on-page-seo.html`
  - `/tags/technical-seo.html`
  - `/tags/local-seo.html`
- Category archives:
  - `/categories/seo-guides.html`
  - `/categories/technical-seo.html`
- Individual blog posts link to relevant tag pages via `article-tags` sections.

Suggested exercises:

- Analyze internal linking between articles, tags, categories, and services
- Test how crawlers treat tag/category archives in sitemaps

### Custom 404 and Broken Links

- 404 template:
  - `/404.html`
- Intentional broken internal link:
  - From `blog/technical-seo-checklist.html` to `/services/ppc-management.html` (does not exist)

Suggested exercises:

- Crawl the site and verify that broken URLs are reported as 404
- Review how users are routed to `/404.html` and how helpful the template is

## Analytics and Tracking Placeholders

- Google Tag Manager (GTM) and GA4 script tags are present but use placeholder IDs
- Each major template pushes a `page_view` event to `dataLayer` with:
  - `page_type` (home, blog_article, blog_index, category_archive, tag_archive, experiment, error, etc.)
  - `page_template` (per-page identifier)
- You can replace `GTM-XXXXXXX` and `G-XXXXXXXXXX` with real container/property IDs in a controlled environment for testing.

## Customizing for Your Own Use

- Replace copy, images, and branding with your own while keeping the structure if you want a reusable sandbox
- Extend the blog with additional posts, tags, and experiments
- Wire real GTM/GA4 containers and add your own events in `assets/js/main.js`

