import CTABand from './components/CTABand';
import FaqSection from './components/FaqSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LeadFormSection from './components/LeadFormSection';
import LearningPathsSection from './components/LearningPathsSection';
import MethodologySection from './components/MethodologySection';
import NavBar from './components/NavBar';
import TestimonialsSection from './components/TestimonialsSection';
import TransformationSection from './components/TransformationSection';
import TrustBand from './components/TrustBand';
import WhatsAppStickyButton from './components/WhatsAppStickyButton';
import WhyDmcSection from './components/WhyDmcSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <TrustBand />
        <WhyDmcSection />
        <LearningPathsSection />
        <TransformationSection />
        <TestimonialsSection />
        <MethodologySection />
        <CTABand />
        <LeadFormSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppStickyButton />
    </div>
  );
}
