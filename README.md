# maharnab.github.io

Modern portfolio and blog site built with Astro.

## Local Development

1. Install dependencies:

```sh
npm install
```

2. Run local dev server:

```sh
npm run dev
```

3. Open:

```text
http://localhost:4321
```

## Build

```sh
npm run build
npm run preview
```

## Content Editing

- Pages: `src/pages/`
- Blog posts: `src/content/blog/`
- Shared styles: `src/styles/global.css`

## Deployment

Deployment is handled by GitHub Actions through:

- `.github/workflows/deploy.yml`

Pushing to `master` builds the Astro site and deploys `dist/` to GitHub Pages.
