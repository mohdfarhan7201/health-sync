import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Doctors from './sections/Doctors';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import FAQs from './sections/FAQs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#004D4D] selection:text-white antialiased overflow-x-hidden w-full">
      
      {/* 1. Global Navigation Bar Header Segment */}
      <Navbar />

      {/* 2. Scroll Target Sections Group Panel */}
      {/* Note: All IDs perfectly match with getSectionId() mapping inside your Navbar */}
      <div className="flex flex-col w-full">
        
        {/* ID: hero */}
        <Hero />
        
        {/* ID: about */}
        <div id="about" className="w-full scroll-mt-20">
          <About />
        </div>
        
        {/* ID: services */}
        <div id="services" className="w-full scroll-mt-20">
          <Services />
        </div>
        
        {/* ID: doctor */}
        <div id="doctor" className="w-full scroll-mt-20">
          <Doctors />
        </div>

        {/* Process, Layout and Reviews Extensions */}
        <Process />
        <Testimonials />
        
        {/* ID: faqs */}
        <div id="faqs" className="w-full scroll-mt-20">
          <FAQs />
        </div>
        
        {/* ID: contact */}
        <div id="contact" className="w-full scroll-mt-20">
          <Contact />
        </div>
      </div>

      {/* 3. Global Structural Navigation Footer Deck */}
      <Footer />
      
    </main>
  );
}