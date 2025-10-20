'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Shield, Award, Hexagon } from 'lucide-react';

const serviceIcons = [TrendingUp, Shield, Award, Hexagon];

export function AdvisoryLicensingSection() {
  const t = useTranslations('advisoryLicensing');
  const services = t.raw('services') as Array<{ title: string; description: string }>;

  return (
    <section id="advisory-licensing" className="section-padding bg-subtle scroll-mt-20 md:scroll-mt-24 snap-section flex flex-col justify-center min-h-fit">
      <div className="container-custom w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="mb-3">{t('title')}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-body max-w-prose mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || TrendingUp;
            return (
              <ServiceCard
                key={index}
                icon={Icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <Card
      className="group shadow-luxury hover:shadow-luxury-lg transition-all duration-500 border-2
               border-border hover:border-primary/40 bg-background-elevated
               rounded-[var(--radius-lg)] overflow-hidden
               hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <CardContent className="p-4 sm:p-5">
        {/* Icon */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[var(--radius-md)] bg-gradient-accent
                      flex items-center justify-center mb-3
                      shadow-luxury group-hover:shadow-luxury-lg
                      group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-body">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
