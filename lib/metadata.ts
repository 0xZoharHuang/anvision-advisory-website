import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://anvisionadvisory.com'),
  title: {
    default: 'ANVISION ADVISORY - Professional Executive Assistant Services Worldwide',
    template: '%s | ANVISION ADVISORY',
  },
  description:
    'Global enterprise executive assistant services combining standardized excellence, customized solutions, and AI-powered efficiency for modern businesses.',
  keywords: [
    'executive assistant',
    'virtual assistant',
    'secretary service',
    'business support',
    'AI assistant',
    'enterprise services',
    'global secretary',
    'professional assistant',
    'anvision advisory',
  ],
  authors: [{ name: 'ANVISION ADVISORY' }],
  creator: 'ANVISION ADVISORY',
  publisher: 'ANVISION ADVISORY',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    url: 'https://anvisionadvisory.com',
    siteName: 'ANVISION ADVISORY',
    title: 'ANVISION ADVISORY - Professional Executive Assistant Services',
    description:
      'Global enterprise executive assistant services with AI-powered efficiency for modern businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ANVISION ADVISORY - Executive Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANVISION ADVISORY - Professional Executive Assistant Services',
    description: 'Global enterprise executive assistant services with AI-powered efficiency.',
    images: ['/og-image.jpg'],
    creator: '@anvisionadvisory',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://anvisionadvisory.com',
    languages: {
      'en': 'https://anvisionadvisory.com/en',
      'zh-CN': 'https://anvisionadvisory.com/zh-CN',
    },
  },
};
