# Repository Guidelines

## Project Overview

This repository contains a static, single-page portfolio built with Astro 7 and deployed to the root of `https://nyamadan.github.io/`.

- Keep the site framework-free unless an interactive feature clearly requires a client framework.
- Do not add blog posts, content collections, RSS, tag/archive routes, or a CMS unless explicitly requested.
- The public site currently consists only of `/`.
- Historical profile content and assets can be inspected from the local `origin/main` ref. Do not fetch: network fetches are unavailable in this environment.

## Project Structure

- `src/pages/index.astro`: portfolio content and page-specific styles.
- `src/layouts/Layout.astro`: document shell, global styles, and SEO/social metadata.
- `src/images/icon.png`: source profile image used by the page.
- `public/profile.png`: stable public image used by OGP and Twitter Card metadata.
- `astro.config.mjs`: canonical production site URL.
- `.github/workflows/deploy-pages.yml`: GitHub Pages build and deployment workflow.

Keep content and styling in Astro components. Prefer semantic HTML and static rendering over client-side JavaScript.

## Package Management and Commands

Use pnpm and preserve the checked-in lockfile.

```sh
pnpm install
pnpm fmt:check
pnpm lint
pnpm build
```

Run `pnpm fmt` only when formatting changes are intended. Before handing off code changes, run formatting checks, lint, and a production build.

## Development Server

Always start the Astro development server in background mode:

```sh
pnpm dev
```

Manage it with:

```sh
pnpm dev:status
pnpm dev:logs
pnpm dev:stop
```

Stop the server after browser-based verification. Do not start a foreground `astro dev` process.

## Design and Content Conventions

- Preserve the current restrained, typography-led visual direction unless a redesign is requested.
- Maintain responsive behavior down to a 320px viewport and avoid horizontal overflow.
- Keep Japanese as the document language and retain accessible heading order, meaningful alternative text, keyboard focus styles, and reduced-motion behavior.
- External profile links must open in a new tab with `rel="noopener noreferrer"`.
- When changing the profile image, update both `src/images/icon.png` and `public/profile.png` so the rendered page and social metadata stay consistent.
- Keep canonical and social URLs rooted at `https://nyamadan.github.io/`; this is a GitHub user site, so do not add an Astro `base` path.

## Deployment

GitHub Pages deployment runs on pushes to `main` and by manual workflow dispatch. The workflow installs with the frozen pnpm lockfile, builds `dist/`, uploads a Pages artifact, and deploys through the official GitHub Pages actions.

Do not restore the legacy `gh-pages` package or deploy by pushing generated files to a `pages` branch.

## Astro Documentation

Full documentation: https://docs.astro.build

Consult the relevant official guide before changing these areas:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
