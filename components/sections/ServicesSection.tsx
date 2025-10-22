'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Ship, MapPin } from 'lucide-react';

const regions = [
  {
    key: 'asiaMiddleEast',
    icon: Globe,
    gradient: 'from-primary/5 to-primary/10',
    iconGradient: 'bg-gradient-to-br from-primary to-primary-light',
  },
  {
    key: 'westernMarkets',
    icon: TrendingUp,
    gradient: 'from-secondary/5 to-secondary/10',
    iconGradient: 'bg-gradient-to-br from-secondary to-accent',
  },
  {
    key: 'offshoreJurisdictions',
    icon: Ship,
    gradient: 'from-accent/5 to-accent/10',
    iconGradient: 'gradient-accent',
  },
] as const;

export function ServicesSection() {
  const t = useTranslations('corporateStructuring');

  return (
    <section id="corporate-structuring" className="section-padding bg-subtle scroll-mt-20 md:scroll-mt-24 snap-section flex flex-col justify-center min-h-fit">
      <div className="container-custom w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="mb-3">{t('title')}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-body max-w-prose mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {regions.map((region, index) => (
            <RegionCard
              key={region.key}
              icon={region.icon}
              title={t(`${region.key}.title`)}
              description={t(`${region.key}.description`)}
              countries={t.raw(`${region.key}.countries`) as string[]}
              gradient={region.gradient}
              iconGradient={region.iconGradient}
              index={index}
            />
          ))}
        </div>

        {/* Web3 Support Notice */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="p-6 rounded-[var(--radius-lg)] bg-gradient-to-br from-accent/10 to-accent/5
                        border-2 border-accent/30 shadow-luxury">
            <p className="text-center text-foreground leading-relaxed font-body">
              {t('web3Support')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegionCard({
  icon: Icon,
  title,
  description,
  countries,
  gradient,
  iconGradient,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  countries: string[];
  gradient: string;
  iconGradient: string;
  index: number;
}) {
  return (
    <Card
      className="group shadow-luxury hover:shadow-luxury-lg transition-all duration-500 border-2
               border-border hover:border-primary/40 bg-background-elevated
               rounded-[var(--radius-lg)] overflow-hidden h-full
               hover:-translate-y-1 flex flex-col"
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
        {/* Icon */}
        <div className="mb-4 sm:mb-5">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[var(--radius-md)] ${iconGradient}
                         flex items-center justify-center
                         shadow-luxury group-hover:shadow-luxury-lg
                         group-hover:scale-110 transition-all duration-500 ease-out`}>
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 mb-4 sm:mb-6 leading-relaxed font-body text-xs sm:text-sm flex-1">
          {description}
        </p>

        {/* Countries List */}
        <div className="pt-3 sm:pt-4 border-t border-border/50">
          <div className="flex items-start gap-2 mb-2 sm:mb-3">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Jurisdictions:
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {countries.map((country, idx) => (
              <span
                key={idx}
                className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/5 text-primary
                         rounded-full text-[11px] sm:text-xs font-medium
                         border border-primary/10
                         hover:bg-primary/10 hover:border-primary/20
                         transition-colors duration-200"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0
                       group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[var(--radius-lg)]`} />
      </CardContent>
    </Card>
  );
}
