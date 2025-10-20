# SecureAssist - Professional Executive Assistant Services Website

A modern, professional enterprise website for global executive assistant services.

## Features

- ✅ Next.js 15 with App Router & TypeScript
- ✅ Internationalization (EN, ZH-CN) with next-intl
- ✅ Professional UI with Shadcn/ui + Tailwind CSS v4
- ✅ SEO Optimized with complete metadata
- ✅ Responsive design (mobile-first)
- ✅ Type-safe with full TypeScript support

## Tech Stack

- **Framework**: Next.js 15.5.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **i18n**: next-intl

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/[locale]/          # Internationalized routes
│   ├── layout.tsx         # Root layout with i18n
│   └── page.tsx          # Homepage
├── components/
│   ├── layout/           # Navigation, Footer
│   ├── sections/         # Hero, Services, WhyUs, CTA
│   └── ui/              # Shadcn/ui components
├── messages/
│   ├── en.json          # English translations
│   └── zh-CN.json       # Chinese translations
└── lib/
    └── metadata.ts      # SEO configuration
```

## Available Pages

- **Homepage** (`/` or `/en`, `/zh-CN`)
  - Hero section with brand messaging
  - Services overview (Standard, Customized, AI Agent)
  - Why choose us section
  - CTA section

## Internationalization

Switch between languages:
- English: http://localhost:3000/en
- 中文: http://localhost:3000/zh-CN

## Design System

### Colors
- Primary: Professional Blue
- Background: White
- Text: Deep Navy/Black

### Typography
- Sans: Inter (Latin), Noto Sans SC (Chinese)
- Headings: Bold, tight tracking

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import in Vercel dashboard.

## License

Proprietary - All rights reserved

---

Built with Next.js & Tailwind CSS
