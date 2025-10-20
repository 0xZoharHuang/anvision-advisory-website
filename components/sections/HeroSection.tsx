'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex flex-col justify-center gradient-hero overflow-hidden snap-section">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs with new colors */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl"
             style={{ animation: 'float 4s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/2 rounded-full blur-3xl"
             style={{ animation: 'float 5s ease-in-out infinite' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="mb-6 leading-[1.1]">
            <span className="block text-balance font-display">
              {t('title')}
            </span>
            <span className="block mt-4 bg-gradient-primary bg-clip-text text-transparent font-display">
              {t('titleHighlight')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto
                      leading-relaxed font-body text-balance">
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:mb-16">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-6 text-sm sm:text-base
                       shadow-luxury hover:shadow-luxury-lg transition-all duration-300
                       hover:scale-[1.02] group rounded-[var(--radius-md)] min-h-[44px]"
            >
              {t('ctaPrimary')}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-6 text-sm sm:text-base border-2 hover:border-primary/20
                       hover:bg-subtle transition-all duration-300
                       rounded-[var(--radius-md)] min-h-[44px]"
            >
              {t('ctaSecondary')}
            </Button>
          </div>

          {/* Mission & Vision - Side by side */}
          <div className="pt-8 lg:pt-10 border-t border-border/50 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Mission */}
              <MissionVisionCard
                icon={Target}
                title={t('mission.title')}
                description={t('mission.description')}
                gradient="from-primary/5 to-primary/10"
              />

              {/* Vision */}
              <MissionVisionCard
                icon={Eye}
                title={t('vision.title')}
                description={t('vision.description')}
                gradient="from-accent/5 to-accent/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionCard({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className={`group text-center p-4 sm:p-5 lg:p-6 rounded-[var(--radius-lg)] bg-gradient-to-br ${gradient}
                    border-2 border-border shadow-luxury hover:border-primary/40 hover:shadow-luxury-lg
                    transition-all duration-300 hover:-translate-y-1`}>
      {/* Icon */}
      <div className="inline-flex w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-primary
                    items-center justify-center mb-3
                    shadow-luxury group-hover:shadow-luxury-lg group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-300 ease-out">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-body max-w-prose mx-auto">
        {description}
      </p>
    </div>
  );
}
