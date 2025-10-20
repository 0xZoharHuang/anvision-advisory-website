'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Briefcase } from 'lucide-react';

export function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('corporateStructuring'), href: `/${locale}#corporate-structuring` },
    { name: t('accountingTax'), href: `/${locale}#accounting-tax` },
    { name: t('advisoryLicensing'), href: `/${locale}#advisory-licensing` },
    { name: t('globalIdentity'), href: `/${locale}#global-identity` },
    { name: t('contact'), href: `/${locale}#contact` },
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'zh-CN' : 'en';
    const currentPath = window.location.pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border shadow-luxury">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Professional design with icon */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-[var(--radius-md)] bg-gradient-primary
                          flex items-center justify-center shadow-luxury
                          group-hover:shadow-luxury-lg group-hover:scale-105 transition-all duration-300">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg md:text-xl tracking-tight
                             text-foreground group-hover:text-primary transition-colors">
                ANVISION ADVISORY
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-wide">
                Executive Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground
                         transition-all duration-300 font-medium text-[15px]
                         relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary
                              group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-2 px-3 py-2 rounded-[var(--radius-sm)]
                       text-muted-foreground hover:text-foreground hover:bg-subtle
                       transition-all duration-300"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">
                {locale === 'en' ? 'EN' : '中文'}
              </span>
            </button>

            {/* CTA Button */}
            <Button className="gradient-primary text-primary-foreground
                             shadow-luxury hover:shadow-luxury-lg
                             hover:scale-[1.02] transition-all duration-300
                             rounded-[var(--radius-md)] px-6">
              {t('getDemo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background max-h-[70vh] overflow-y-auto">
          <div className="container-wide py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 px-3 text-sm text-foreground font-medium rounded-[var(--radius-sm)]
                         hover:bg-subtle transition-colors min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-border space-y-2 mt-3">
              <button
                onClick={toggleLocale}
                className="flex items-center space-x-2 py-2.5 px-3 text-sm text-muted-foreground
                         hover:bg-subtle rounded-[var(--radius-sm)] transition-colors w-full min-h-[44px]"
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span>{locale === 'en' ? 'English' : '中文'}</span>
              </button>
              <Button className="w-full gradient-primary text-white text-sm py-3 min-h-[44px]">
                {t('getDemo')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
