import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AccountingTaxSection } from '@/components/sections/AccountingTaxSection';
import { AdvisoryLicensingSection } from '@/components/sections/AdvisoryLicensingSection';
import { GlobalIdentitySection } from '@/components/sections/GlobalIdentitySection';
import { CTASection } from '@/components/sections/CTASection';
import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 snap-container">
        <HeroSection />
        <ServicesSection />
        <AccountingTaxSection />
        <AdvisoryLicensingSection />
        <GlobalIdentitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
