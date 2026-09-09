# Kreativ Auto

Kreativ Auto is an open-source Astro website for practical used-car research,
inspection records, maintenance planning, and model-specific ownership guides.
The production site is available at [kreativauto.com](https://kreativauto.com/).

The repository includes the complete site, its structured automotive content,
quality checks, static search index, sitemap controls, and GitHub Pages deployment
workflow. Some pages are intentionally kept out of search until their evidence and
editorial review records meet the project's publishing standard.

## Project status

The existing website remains online and all current content is preserved. New
coverage should be added deliberately: source quality and a distinct user task are
more important than publishing volume.

This project does not provide professional mechanical, safety, legal, or purchasing
advice. Vehicle-specific decisions should be verified against the VIN, official
manufacturer information, applicable regulator records, and a qualified technician.

## Technology

- Astro 6
- Tailwind CSS 4
- TypeScript
- Static output hosted with GitHub Pages
- Google Analytics and Cloudflare Web Analytics behind optional consent

## Local development

Requirements:

- Node.js 22 or later
- npm 10 or later

```bash
npm install
npm run dev
```

Build and validate the production output:

```bash
npm run build
npm run repo:health
npm run audit:commercial
```

Preview the generated site:

```bash
npm run preview
```

## Repository structure

```text
src/content/          Structured car, problem, and parts content
src/pages/            Astro routes, guides, comparisons, and worksheets
src/data/             Review readiness, evidence records, and relationships
src/components/       Shared interface and editorial components
scripts/              Build checks and local content-maintenance tools
public/images/        Brand assets and editorial imagery
docs/                 Analytics and operating documentation
.github/workflows/    GitHub Pages deployment
```

## Editorial review gates

`src/data/review-readiness.ts` controls which content is eligible for indexing.
Draft and incomplete routes remain available for development but render with
`noindex,follow`. The production sitemap and internal search include only eligible
pages.

The repository health check verifies, among other things, that:

- `noindex` pages are excluded from the sitemap and internal search;
- indexable pages meet minimum content and evidence requirements;
- homepage links do not lead directly to restricted pages;
- image references resolve to local optimized assets;
- structured content satisfies the Astro content schemas.

Automotive claims should cite manufacturer, regulator, or other primary material
near the claim. Do not add unsupported reliability scores, product ratings,
fitment claims, prices, or first-hand testing claims.

## Local content tools

The repository retains local tools for reviewing existing content and preparing a
new-car draft. They never publish, commit, or push automatically.

```bash
npm run autopilot:daily-maintenance:dry
npm run autopilot:add-next-car:dry
```

Remove `:dry` only after reviewing the proposed local change. Generated pages stay
out of search until their sources, vehicle scope, decision path, imagery, and
commercial metadata have been reviewed.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys `main` to GitHub
Pages. Configure GitHub Pages to use **GitHub Actions** as its source.

Optional public repository variables:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_GOOGLE_SITE_VERIFICATION`

Use `.env.example` for local placeholders. Never commit account credentials,
private analytics access, API secrets, or personal vehicle records.

AdSense script loading remains disabled. A production deployment must not enable
advertising until the applicable consent, privacy, and publisher requirements have
been implemented and reviewed.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Contributions
must preserve source attribution, vehicle scope, review restrictions, and image
provenance. Bug reports and focused improvements are welcome.

For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public
issue.

## Licensing

- Software source code is licensed under the [MIT License](LICENSE).
- Original editorial material is licensed under
  [CC BY-SA 4.0](CONTENT_LICENSE.md).
- Third-party photographs retain their original licenses. Other image and brand
  assets are not covered by the code or content licenses. See
  [ASSET_LICENSES.md](ASSET_LICENSES.md).

The Kreativ Auto name, logo, favicon, and visual brand identity are not licensed for
reuse.
