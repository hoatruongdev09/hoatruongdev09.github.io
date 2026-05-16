# Portfolio Personal Page

Source code for Hoa Truong's personal portfolio page.

- Live site: [https://hoatruongdev09.github.io](https://hoatruongdev09.github.io)
- This repository is used to showcase personal information, experience, and featured projects.

## Preview

Main sections:

- Intro (avatar, social links, theme toggle)
- About
- Resume
- Featured Portfolio

## Tech Stack

- React 19 + TypeScript
- Vite
- TanStack Router (file-based routing, hash history)
- Tailwind CSS v4
- shadcn/ui utilities + custom Retro UI components
- gh-pages (deploy static build to GitHub Pages)

## Run Local

Requirements:

- Node.js 18+ (Node.js 20+ recommended)
- npm

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the URL shown by Vite in your browser (usually `http://localhost:5173`)

## Scripts

- `npm run dev`: run local development
- `npm run build`: type-check and create a production build in `dist/`
- `npm run preview`: preview the local production build
- `npm run lint`: run ESLint
- `npm run deploy`: deploy `dist/` to GitHub Pages (via `gh-pages`)

## Deploy GitHub Pages

The project is already configured with the `homepage` field in `package.json`:

```json
"homepage": "https://hoatruongdev09.github.io"
```

To deploy:

```bash
npm run deploy
```

This command will:

1. Automatically build the project (`predeploy`)
2. Push the `dist/` content to the `gh-pages` branch

## Project Structure

```text
src/
  components/
    intro.component.tsx
    main-content.component.tsx
    footer.component.tsx
    main-contents/
      about.component.tsx
      resume.component.tsx
      featured-portfolio.component.tsx
  routes/
    __root.tsx
    index.tsx
  lib/
    theme-context.tsx
  router.tsx
  main.tsx
```

## Notes

- The router uses hash history for safe static hosting on GitHub Pages.
- Portfolio content is currently managed directly in the component code.

## License

MIT
