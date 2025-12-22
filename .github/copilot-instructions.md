# Copilot Instructions - MR Motorsport (Lenzokart Deutschland)

## Project Overview

Next.js 16 marketing website for MR Motorsport, the official German Lenzokart importer. German language (`lang="de"`), motorsport/karting domain.

## Tech Stack

- **Framework**: Next.js 16 with App Router (React 19)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 + CSS custom properties in `globals.css`
- **Animations**: Framer Motion with `useReducedMotion` for accessibility
- **Path Alias**: `@/*` maps to `./src/*`

## Architecture

### Component Organization

```
src/
├── app/              # Pages using App Router (each folder = route)
├── components/
│   ├── layout/       # LayoutShell, Navbar, Footer (wraps all pages)
│   ├── ui/           # Reusable components (Section, Container, Button, Animation)
│   └── icons/        # SVG icon components as React functions
├── data/             # Static data (news articles with TypeScript interfaces)
```

### Key Patterns

1. **Layout**: Root layout uses `LayoutShell` which wraps children with `Navbar` and `Footer`
2. **Barrel Exports**: Use `index.ts` files for component exports (e.g., `@/components/ui`)
3. **Client Components**: Mark with `'use client'` for Framer Motion animations or React hooks

### Styling System

**Prefer CSS classes from `globals.css` over inline Tailwind for page sections:**
- Section backgrounds: `.section-white`, `.section-light-blue`, `.section-gray`, `.section-dark`
- Container: `.container` (uses CSS variables for responsive padding)
- Typography: `.section-label`, `.section-heading`, `.section-text`

**CSS Variables** (defined in `:root`):
```css
--primary: #1020C7;       /* Primary blue */
--yellow: #F5E326;        /* Accent */
--text: #0C0800;          /* Main text */
--text-light: rgba(12, 8, 0, 0.6);
```

## Component Conventions

### UI Components

Use exported components from `@/components/ui`:
```tsx
import { Section, SectionHeader, FadeIn, PrimaryButton } from '@/components/ui';
```

**Animation pattern** (respects reduced motion):
```tsx
<FadeIn direction="up" delay={0.1}>
  <content />
</FadeIn>
```

**Staggered lists**:
```tsx
<StaggerContainer>
  {items.map(item => <StaggerItem key={item.id}>{item}</StaggerItem>)}
</StaggerContainer>
```

### Icons

Define SVG icons as React components in `src/components/icons/Icons.tsx`:
```tsx
export const IconName = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {/* paths */}
  </svg>
);
```

### Page Structure

Standard page pattern:
```tsx
export default function PageName() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="about-label">Label</p>
            <h1>Page Title</h1>
            <p>Description</p>
          </motion.div>
        </div>
      </section>
      <section className="section-white">
        <div className="container">{/* content */}</div>
      </section>
    </>
  );
}
```

## Data Management

Static data lives in `src/data/` with TypeScript interfaces:
```tsx
// src/data/news.ts
export interface NewsArticle { id: string; title: string; /* ... */ }
export const newsArticles: NewsArticle[] = [/* ... */];
export function getArticleBySlug(slug: string): NewsArticle | undefined;
```

For dynamic routes, use `generateStaticParams()` for static generation.

## Commands

| Command | Use |
|---------|-----|
| `npm run dev` | Development server (localhost:3000) |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |

## Key Files

- `src/app/globals.css` - Design system (1700+ lines of CSS classes)
- `src/components/layout/LayoutShell.tsx` - Page wrapper
- `src/components/ui/Animation.tsx` - Motion components with a11y
- `src/data/news.ts` - News article data structure example
