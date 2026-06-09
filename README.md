# Gaurav Kumar — Portfolio

A fast, responsive, animated personal portfolio website built from Gaurav Kumar's resume.
**Frontend only** — no backend. Statically prerendered and ready to deploy on Vercel.

Also installable as a **PWA** (Progressive Web App), so it can be added to a phone's
home screen or installed as a desktop app from a supported browser.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (dark theme, glassmorphism, gradients)
- **Framer Motion** for scroll & entrance animations
- **react-icons** for tech/brand icons
- **next/image** + **next/font** for optimized assets and fonts

## Sections

Hero · About · Skills · Projects · Education timeline · Coding platforms & Certifications · Contact

All content lives in a single source of truth: [`src/data/resume.ts`](src/data/resume.ts).
Edit that file to update text, projects, skills, links, etc.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Personalize (IMPORTANT)

Two placeholder assets were auto-generated so the site builds. Replace them with the real files:

1. **Profile photo** → replace `public/profile.jpg` with your photo
   (square crop, e.g. 600×600, keep the filename `profile.jpg`).
2. **Resume PDF** → `public/Gaurav_Kumar_Resume.pdf` is wired to the
   "Resume" / "Download CV" buttons. Replace it with your final PDF (keep the filename,
   or update `resumeUrl` in `src/data/resume.ts`).

Also update the social links in `src/data/resume.ts` (`socials` object) — the
LinkedIn / GitHub / HackerRank / LeetCode / platform URLs are currently placeholders.

## Deploy to Vercel

### Option A — Git (recommended)
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com → **Add New… → Project** → import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

No environment variables are required (frontend only).

## License

Personal project © Gaurav Kumar.
