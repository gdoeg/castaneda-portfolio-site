# Frontend

This directory contains the actively maintained portfolio application.

## Stack

- React 19
- TypeScript
- Vite
- ESLint

## Entry Points

- `src/main.tsx` mounts the application and imports `src/styles.css`
- `src/App.tsx` assembles the page layout

## Component Overview

- `components/Navbar.tsx` renders the site header and anchor navigation
- `components/Hero.tsx` renders the landing section
- `components/About.tsx` contains the personal summary content
- `components/Projects.tsx` defines and renders the current project and experience cards
- `components/Contact.tsx` manages the contact form state, validation, loading state, and success message
- `components/Footer.tsx` renders the footer

## Current Behavior

- Navigation is handled through in-page anchors
- Project data is defined directly in `components/Projects.tsx`
- The contact form validates required fields and email format in the browser
- Form submission is currently mocked with a timeout; no backend integration is wired up yet

## Scripts

```bash
npm install
npm run dev
```

- `npm run dev` starts the development server
- `npm run build` runs `tsc -b` and builds the app with Vite
- `npm run lint` runs ESLint against the frontend source
- `npm run preview` previews the production build locally

## Notes

- `src/styles.css` is the active stylesheet for the app shell
- `src/App.css` and `src/index.css` exist in the scaffold but are not currently imported by `main.tsx`
