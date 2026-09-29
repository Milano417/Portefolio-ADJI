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

## Notes

- The hero image uses a local Windows file path (`C:\Users\LENOVO\...`) that won't resolve in the container; it will show a broken image. This is a known issue in the source.
