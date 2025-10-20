'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Building2, Calculator, FileCheck, Globe as GlobeIcon, MessageSquare, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const buttons = [
  { key: 'corporateStructuring', icon: Building2 },
  { key: 'accountingTax', icon: Calculator },
  { key: 'advisoryLicensing', icon: FileCheck },
  { key: 'globalIdentity', icon: GlobeIcon },
  { key: 'contact', icon: MessageSquare },
] as const;

export function CTASection() {
  const t = useTranslations('cta');
  const email = t('email');

  return (
    <section id="contact" className="min-h-screen section-padding gradient-primary text-primary-foreground relative overflow-hidden scroll-mt-20 md:scroll-mt-24 snap-section">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="mb-3 text-balance font-display text-white">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {buttons.map((button, index) => {
              const Icon = button.icon;
              return (
                <ActionButton
                  key={button.key}
                  icon={Icon}
                  label={t(`buttons.${button.key}.label`)}
                  description={t(`buttons.${button.key}.description`)}
                  email={email}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionButton({
  icon: Icon,
  label,
  description,
  email,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  email: string;
  index: number;
}) {
  return (
    <Link
      href={`mailto:${email}`}
      className="block"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
      }}
    >
      <Button
        variant="secondary"
        className="w-full h-auto p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4
                 bg-white/10 hover:bg-white/20 backdrop-blur-sm
                 border-2 border-white/20 hover:border-white/40
                 text-white hover:text-white
                 shadow-luxury-lg hover:shadow-luxury
                 hover:scale-[1.02] transition-all duration-300
                 rounded-[var(--radius-lg)] group min-h-[60px] sm:min-h-[68px]"
      >
        <div className="flex items-center gap-3 sm:gap-4 flex-1 text-left">
          {/* Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[var(--radius-md)] bg-white/20
                        flex items-center justify-center flex-shrink-0
                        group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1 truncate">
              {label}
            </div>
            <div className="text-[11px] sm:text-xs text-white/70 font-medium truncate">
              {description}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
  );
}
