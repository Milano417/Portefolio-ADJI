# AGENTS.md

## Project Overview

This is a single-file static HTML portfolio page (`portfolio3.html`) for ADJI KOMENAN Ivan Florian, a developer based in Abidjan, Côte d'Ivoire. The page is in French.

## Tech Stack

- **Single HTML file** — no build step, no package manager, no backend.
- Styling via **Tailwind CSS** (CDN), **Font Awesome** (CDN), and inline `<style>`.
- Animations via **AOS** (CDN).
- All assets are loaded from CDNs; no local JS/CSS dependencies.

## Running the App

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- nginx:alpine serves `portfolio3.html` as the index page on **port 3000**.
- The repo is bind-mounted read-only; edits to `portfolio3.html` are reflected on browser refresh (call `reload_preview` after edits since there is no live-reload dev server).
- No environment variables or secrets are required.
- No migrations or seeds.

## Content

The portfolio contains the real personal and professional information for ADJI KOMENAN Ivan Florian (alias MILANO):
- Sections: Hero, About (philosophy + vision), Skills (dev + IA + creative), Projects (case studies), Experience & Education, Services (Milaweb), Contact.
- Projects are presented as case studies (HotelFlow, MILANO AI) with problem → solution → tech → result.
- Contact: adjikomenan@gmail.com, +225 05 54 18 66 19, +225 07 00 24 57 98, Abidjan.
- No external image assets are used; all visuals are Font Awesome icons and CSS gradients to avoid broken images in the container.
