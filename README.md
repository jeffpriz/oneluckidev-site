# OneLuckiDev - Personal Website

A professional personal website built with React and TypeScript, showcasing my experience as an Application Developer and DevOps Engineer, including professional accomplishments and published work to the Azure DevOps marketplace.

## Features

- **Multi-page React Application**: Fully featured React application with routing
- **TypeScript**: Type-safe code for better maintainability
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multiple Pages**: Separate pages for Home, About, Experience, Accomplishments, and Contact
- **Modern Build System**: Uses Vite for fast development and optimized production builds

## Technologies Used

- React 19
- TypeScript 5
- React Router DOM 7
- Vite 7
- CSS3 (with custom properties and modern layout techniques)
- Google Fonts (Inter)

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your profile picture to the `public/images` folder as `profile.jpg` (recommended size: 400x400px or larger)
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to http://localhost:5173

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

This is a modern React application that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Azure Static Web Apps
- Any static hosting service

### Build for Deployment

```bash
npm run build
```

The built files will be in the `dist` folder.

### GitHub Pages Deployment

1. Build the project: `npm run build`
2. Push your code to a GitHub repository
3. Go to repository Settings > Pages
4. Select the branch and set the folder to `/dist`
5. Save and wait for deployment

## Customization

- **Colors**: Edit CSS variables in `src/styles/index.css` (`:root` section)
- **Content**: Update content in the component files in `src/pages/`
- **Components**: Modify components in `src/components/`
- **Images**: Replace files in the `public/images` folder
- **Fonts**: Change Google Fonts import in `index.html`

## Project Structure

```
oneluckidev-site/
├── public/
│   └── images/             # Static images
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── About.tsx
│   │   ├── About.css
│   │   ├── Experience.tsx
│   │   ├── Experience.css
│   │   ├── Accomplishments.tsx
│   │   ├── Accomplishments.css
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── styles/
│   │   └── index.css       # Global styles
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## License

All rights reserved © 2026 OneLuckiDev

## Contact

- GitHub: [@jeffpriz](https://github.com/jeffpriz)
- Azure DevOps Marketplace: [View Extensions](https://marketplace.visualstudio.com)