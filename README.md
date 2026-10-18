# CloudStore

![CI/CD](https://github.com/swathikumaravel48-tech/cloudstore/actions/workflows/deploy.yml/badge.svg)

A responsive static website for a cloud storage service concept, with an interactive storage-plan calculator, monthly/yearly pricing, features, a how-it-works guide, and an FAQ. Built with HTML, CSS and vanilla JavaScript, with no frameworks and no build step.

**Live site:** https://swathikumaravel48-tech.github.io/cloudstore

## Features
- Storage slider that recommends a plan and price in real time
- Monthly / yearly billing toggle (20% yearly discount)
- Responsive layout, dark mode support, keyboard-accessible controls
- Custom 404 page (`error.html`)

## CI/CD pipeline
Every push to `main` runs a GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. **Validate**: HTML checked with HTMLHint, JavaScript syntax checked with Node.js
2. **Quality check**: Lighthouse audits accessibility, best practices, SEO and performance
3. **Deploy**: the site is published to GitHub Pages only if the checks pass

**Lighthouse scores:** `ADD YOUR SCORES HERE` (Performance / Accessibility / Best Practices / SEO)

## Tech stack
HTML5, CSS3, JavaScript, GitHub Actions, GitHub Pages, HTMLHint, Lighthouse CI

## Architecture
See [docs/architecture.md](docs/architecture.md) for the current deployment flow and an AWS S3 + CloudFront hosting design (documented, not deployed).

## Project structure
```
cloudstore/
├── index.html
├── 404.html
├── style.css
├── script.js
├── lighthouserc.json
├── .htmlhintrc
├── .github/workflows/deploy.yml
└── docs/
    ├── architecture.md
    └── aws-s3-design/bucket-policy.json
```

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` and visit http://localhost:8000.

## Screenshots
Add screenshots of the home page, the pricing table, the GitHub Actions run, and the Lighthouse report.

## Author
K. Swathi · github.com/swathikumaravel48-tech
