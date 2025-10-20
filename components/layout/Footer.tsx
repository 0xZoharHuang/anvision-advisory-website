'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  const footerLinks = {
    services: [
      { name: 'Corporate Structuring', href: '#corporate-structuring' },
      { name: 'Accounting & Tax', href: '#accounting-tax' },
      { name: 'Advisory & Licensing', href: '#advisory-licensing' },
      { name: 'Global Identity Planning', href: '#global-identity' },
    ],
    company: [
      { name: t('contact.label'), href: '#contact' },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t-2 border-primary-light/20">
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-bold text-2xl tracking-tight
                             bg-gradient-accent bg-clip-text text-transparent">
                ANVISION ADVISORY
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-8 max-w-sm leading-relaxed font-body">
              {t('tagline')}
            </p>
            <div className="space-y-4 text-sm text-primary-foreground/70">
              {/* Address */}
              <div>
                <p className="font-semibold text-primary-foreground/90 mb-2">
                  {t('address.label')}
                </p>
                <p className="leading-relaxed">{t('address.line1')}</p>
                <p className="leading-relaxed">{t('address.line2')}</p>
              </div>
              {/* Contact */}
              <div>
                <p className="font-semibold text-primary-foreground/90 mb-2">
                  {t('contact.label')}
                </p>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-primary-foreground/70 hover:text-primary-foreground
                           transition-colors underline"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">{t('services')}</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground
                             transition-colors text-[15px] font-body
                             hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">{t('company')}</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground
                             transition-colors text-[15px] font-body
                             hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t-2 border-primary-light/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            {/* Copyright */}
            <p className="text-primary-foreground/60 text-xs sm:text-sm font-body text-center md:text-left">
              {t('copyright')}
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground
                         transition-colors font-medium min-h-[44px] flex items-center"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground
                         transition-colors font-medium min-h-[44px] flex items-center"
              >
                {t('terms')}
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-5 justify-center md:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground
                         transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground
                         transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:hello@anvisionadvisory.com"
                className="text-primary-foreground/60 hover:text-primary-foreground
                         transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
