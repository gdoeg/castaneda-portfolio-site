# Gabriela Castaneda's Portfolio Site

This repository contains a personal portfolio site that is currently implemented as a React + TypeScript + Vite frontend in the `frontend/` directory.

The app renders a single-page portfolio with sections for navigation, hero content, an about section, project and experience cards, a contact form, and a footer.

## Current State

- Active frontend lives in `frontend/`
- Built with React 19, TypeScript, and Vite
- Styling is currently loaded from `frontend/src/styles.css`
- Project content is hard-coded in component files
- Contact form uses client-side validation and a simulated async submit

## Repository Structure

```text
.
├── README.md
├── contact.html
├── index.html
└── frontend/
	├── package.json
	├── vite.config.ts
	├── public/
	└── src/
		├── App.tsx
		├── main.tsx
		├── styles.css
		└── components/
			├── About.tsx
			├── Contact.tsx
			├── Footer.tsx
			├── Hero.tsx
			├── Navbar.tsx
			└── Projects.tsx
```

## App Sections

### Navbar

Top navigation with in-page links to `Home`, `About`, `Projects`, and `Contact`.

### Hero

Landing section with an introduction and a call-to-action button linking to the about section.

### About

Overview of Gabriela Castaneda's background in application development and cloud computing.

### Projects

Card-based section that mixes portfolio projects and experience entries. The current data includes:

- Portfolio Pilot
- Svistas AI Onboarding System
- Emergent Societies

### Contact

Form with local validation for name, email, and message fields. Submission currently waits for a short timeout and then shows a success message; it does not send data to a backend service yet.

## Development

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Available frontend scripts:

- `npm run dev` starts the Vite development server
- `npm run build` runs TypeScript project builds and creates a production bundle
- `npm run lint` runs ESLint
- `npm run preview` serves the production build locally

## Notes About Legacy Files

The root-level `index.html` and `contact.html` files are older static HTML artifacts. They do not represent the main application flow anymore; the actively maintained app is the React frontend in `frontend/`.

## Deployment

The repository name and earlier setup indicate AWS static hosting as a deployment target, but deployment automation and infrastructure configuration are not defined in the current codebase. If this project is deployed to S3 and CloudFront, that setup is external to the source currently in this repository.
