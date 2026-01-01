# Omnihorizon Landing Page

A modern, responsive landing page built with Next.js 14.2+, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript 5.4+
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 11.0+
- **State Management**: Zustand 4.5+
- **HTTP Client**: Axios 1.6+

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file (optional):
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Landing page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   └── sections/           # Landing page sections
│       ├── HeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── TestimonialsSection.tsx
│       └── CTASection.tsx
├── lib/
│   ├── api.ts              # Axios instance with interceptors
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css         # Global styles and Tailwind directives
```

## Features

- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion
- ✅ SEO-optimized with comprehensive metadata
- ✅ Accessible and keyboard-navigable
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Mobile-optimized experience

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The design uses a black/gray color scheme. To customize colors, edit `tailwind.config.ts` and update the theme colors.

### Fonts

Fonts are configured in `app/layout.tsx`. The project uses:
- **Poppins**: Primary sans-serif font
- **Playfair Display**: Serif font for headings

### Content

Edit the section components in `components/sections/` to customize content, features, testimonials, etc.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## License

MIT


