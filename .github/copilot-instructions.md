# OneLuckiDev - Copilot Instructions

## Repository Overview

This is a professional personal portfolio website built as a modern React single-page application. The site showcases professional experience, accomplishments, and provides contact information. It uses React 19, TypeScript 5, React Router DOM 7, and Vite 7 for fast development and production builds.

## Technology Stack

- **Frontend Framework**: React 19.2.4
- **Type System**: TypeScript 5.9.3
- **Routing**: React Router DOM 7.13.0
- **Build Tool**: Vite 7.3.1
- **Runtime**: Node.js (use latest LTS version)
- **Package Manager**: npm (package-lock.json present)
- **Deployment**: Azure Static Web Apps

## Build & Development Instructions

### Initial Setup

**ALWAYS run `npm install` before any other commands** when working with this repository for the first time or after pulling changes:

```bash
npm install
```

This installs all dependencies and is required for TypeScript compilation and build processes to work.

### Development Server

To start the development server:

```bash
npm run dev
```

- Server runs on http://localhost:5173
- Hot module replacement (HMR) is enabled
- Development server typically starts in 2-3 seconds

### Building for Production

To build the application for production:

```bash
npm run build
```

- This runs TypeScript compilation (`tsc`) followed by Vite build
- Build output goes to the `dist/` directory
- Build time is typically 1-2 seconds
- Build artifacts should NOT be committed to the repository

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Common Issues

- **TypeScript errors about missing modules**: Always run `npm install` first
- **Build failures**: Ensure `node_modules/` exists and is up-to-date
- **Port conflicts**: If port 5173 is in use, Vite will automatically use the next available port

## Project Structure

```
oneluckidev-site/
├── .github/
│   ├── agents/                    # Custom GitHub Copilot agents
│   │   └── my-agent.agent.md      # UI/UX agent with React skills
│   ├── workflows/                 # GitHub Actions workflows
│   │   └── azure-static-web-apps-*.yml  # Azure deployment workflow
│   └── copilot-instructions.md    # This file
├── public/
│   └── images/                    # Static assets (profile pictures, etc.)
├── src/
│   ├── components/                # Reusable React components
│   │   ├── DadJoke.tsx + .css    # Dad joke widget component
│   │   ├── Footer.tsx + .css     # Site footer
│   │   ├── Navbar.tsx + .css     # Navigation bar with mobile menu
│   │   ├── ScrollToTop.tsx + .css # Scroll to top button
│   │   └── ThemeToggle.tsx + .css # Dark/light theme toggle
│   ├── pages/                     # Page components (one per route)
│   │   ├── Home.tsx + .css       # Landing page
│   │   ├── About.tsx + .css      # About page
│   │   ├── Experience.tsx + .css # Professional experience
│   │   ├── Accomplishments.tsx + .css # Achievements and projects
│   │   └── Contact.tsx + .css    # Contact information
│   ├── contexts/                  # React context providers
│   ├── styles/
│   │   └── index.css             # Global styles and CSS variables
│   ├── App.tsx                    # Main app component with routing
│   └── main.tsx                   # Application entry point
├── index.html                     # HTML template
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.node.json             # TypeScript config for Node
└── package.json                   # Dependencies and scripts
```

## Architecture & Conventions

### Component Structure

- Each component has co-located `.tsx` and `.css` files
- Components are organized by type: `components/` for reusable components, `pages/` for route-level components
- Use functional components with React hooks
- TypeScript interfaces should be defined at the top of component files

### Styling

- CSS Modules are NOT used; regular CSS files are imported directly
- Global CSS variables are defined in `src/styles/index.css` (`:root` section)
- Component-specific styles are in their own CSS files
- Responsive design uses CSS media queries
- Theme switching is implemented via CSS class toggles

### Routing

- React Router DOM v7 is used for client-side routing
- Routes are defined in `src/App.tsx`
- All pages are under `/` with React Router handling navigation
- Use `<Link>` component from react-router-dom for internal navigation

### TypeScript Configuration

- Strict mode is enabled (`strict: true`)
- `noUnusedLocals` and `noUnusedParameters` are enforced
- Target is ES2020
- JSX transform: `react-jsx` (automatic runtime)

## CI/CD Pipeline

### Azure Static Web Apps Workflow

- **File**: `.github/workflows/azure-static-web-apps-delightful-stone-0f3a1f00f.yml`
- **Triggers**: Push to main, PRs to main, manual workflow dispatch
- **Build**: Automatic via Azure Static Web Apps action
- **Output**: Deploys `dist/` directory
- **Requirements**: 
  - `npm install` is run automatically by Azure deployment action
  - Build command: `npm run build` (runs automatically)

### Manual Deployment Steps

If deploying manually:
1. Run `npm install`
2. Run `npm run build`
3. Deploy contents of `dist/` directory to static hosting

## Testing

- **Current State**: No test framework is currently configured
- **When adding tests**: Consider Jest + React Testing Library as they are standard for React projects

## Code Style Guidelines

- Use TypeScript for all new code
- Follow existing naming conventions (PascalCase for components, camelCase for functions/variables)
- Prefer functional components over class components
- Use React hooks for state management
- Keep components focused and single-responsibility
- Import order: external packages → internal modules → styles

## Important Notes

- **Never commit**: `node_modules/`, `dist/`, `*.log` files (already in .gitignore)
- **Always run**: `npm install` before building or running dev server
- **Build artifacts**: The `dist/` directory is generated and should not be edited manually
- **Dependencies**: Only add new dependencies if absolutely necessary; prefer using existing libraries
- **Responsive Design**: All UI changes must work on desktop, tablet, and mobile viewports
- **Theme Support**: Components should respect the light/dark theme system

## Key Files to Check Before Changes

1. **package.json** - For available scripts and dependencies
2. **tsconfig.json** - For TypeScript compiler settings
3. **vite.config.ts** - For build configuration
4. **src/App.tsx** - For routing configuration
5. **src/styles/index.css** - For global styles and CSS variables

## Validation Steps

Before submitting changes:
1. Run `npm install` to ensure dependencies are up-to-date
2. Run `npm run build` to verify TypeScript compilation and build succeed
3. Start dev server with `npm run dev` and manually test changes in browser
4. Check responsive design at different screen sizes
5. Verify both light and dark themes work correctly
6. Test all navigation links and interactive elements

## Performance Considerations

- Vite provides optimized production builds automatically
- Images should be optimized before adding to `public/images/`
- Lazy loading is not currently implemented but could be added for routes if needed
- Bundle size is currently ~241KB (gzipped: ~76KB)
