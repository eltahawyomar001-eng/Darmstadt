# MR Motorsport - Lenzokart Deutschland

Official website for MR Motorsport, the authorized Lenzokart importer for Germany. Built with modern web technologies for optimal performance and user experience.

## Overview

MR Motorsport is the official German distributor for Lenzokart racing chassis. This website serves as the primary digital presence, showcasing products, services, team information, and news related to professional karting.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Features

- Responsive design optimized for all devices
- Modern glassmorphism UI with light theme
- Smooth page transitions and micro-interactions
- SEO optimized structure
- Contact form integration
- News and events management
- Product showcase for Lenzo Chassis lineup

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── kontakt/           # Contact page
│   ├── lenzo-chassis/     # Products page
│   ├── motoren-service/   # Services page
│   ├── news/              # News listing and articles
│   ├── team/              # Team page
│   ├── impressum/         # Legal notice
│   ├── datenschutz/       # Privacy policy
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── ui/                # Reusable UI components
│   └── icons/             # SVG icon components
└── lib/                   # Utilities and helpers
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eltahawyomar001-eng/Darmstadt.git
cd Darmstadt
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Design System

The project uses a custom design system with CSS variables for consistent theming:

- **Primary Color**: Teal (#0d9488)
- **Typography**: SF Pro Display / System fonts
- **Spacing**: 4px base unit
- **Border Radius**: Rounded corners (8px - 24px)
- **Shadows**: Subtle elevation system

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy

### Manual Deployment

```bash
npm run build
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software developed for MR Motorsport.

## Contact

MR Motorsport  
Darmstadt, Germany  
info@mr-motorsport.de
