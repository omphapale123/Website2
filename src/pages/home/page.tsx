
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import MarketTractionSection from './components/MarketTractionSection';
import PartnershipsSection from './components/PartnershipsSection';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <main className="font-inter">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <MarketTractionSection />
      <PartnershipsSection />
      <CTASection />
    </main>
  );
}
