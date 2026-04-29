import React from 'react';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/Hero/HeroSection';
import TechStackMarquee from './components/Sections/TechStackMarquee';
import TechGridSection from './components/Sections/TechGridSection';
import ServicesSection from './components/Sections/ServicesSection';
import SuccessCases from './components/Sections/SuccessCases';
import ProcessSection from './components/Sections/ProcessSection';
import Testimonials from './components/Sections/Testimonials';
import FAQSection from './components/Sections/FAQSection';
import CTASection from './components/Sections/CTASection';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#091925] font-sans">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <HeroSection />
        <TechStackMarquee />
        <TechGridSection />
        <ServicesSection />
        <SuccessCases />
        <ProcessSection />
        <Testimonials />
        <FAQSection />
        <CTASection />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
