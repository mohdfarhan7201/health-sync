import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiMessageSquare, FiHeadphones } from 'react-icons/fi';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    { q: "How can I book an appointment?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
    { q: "Lorem ipsum dolor sit amet, consectetur", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
    { q: "Lorem ipsum dolor sit amet, consectetur", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
    { q: "Lorem ipsum dolor sit amet, consectetur", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
    { q: "Lorem ipsum dolor sit amet, consectetur", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." }
  ];

  return (
    <section id="faqs" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Core Subsection Informative Headers */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004D4D]">FAQs</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 tracking-tight font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Master Content Layout Structure Wrapper Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SUBPANEL: Quick Interactive Visual Call To Action Banner */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&fit=crop&auto=format&q=80" 
              alt="Healthcare representative desk assistant" 
              className="w-full h-full object-cover object-center"
            />
            {/* Absolute Linear Shadow Gradient Mask Layer overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
            
            {/* Floating Internal Context Details Overlay Area */}
            <div className="absolute bottom-8 left-8 right-8 text-left space-y-4 z-10">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center text-white text-xl shadow-sm">
                <FiMessageSquare className="text-white fill-white/10" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Still have <br />questions?</h3>
                <p className="text-xs text-gray-300 font-light mt-1">Lorem ipsum dolor sit amet, sed do eiusmod.</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#004D4D] text-white text-xs font-semibold hover:bg-[#003333] shadow-lg shadow-[#004D4D]/20 transition-all"
              >
                <FiHeadphones className="text-sm" /> Contact Us
              </motion.button>
            </div>
          </div>

          {/* RIGHT SUBPANEL: Interactive Accordion Row Node Structure List Stack */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300
                    ${isOpen ? 'bg-[#E6F2F2]/40 border-[#E6F2F2] shadow-sm' : 'bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]'}`}
                >
                  {/* Accordion Direct Interaction Toggle Header Target Bar */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 focus:outline-none select-none"
                  >
                    <div className="flex items-center gap-4">
                      {/* Interactive Context Icon Node Indicator Button */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0
                        ${isOpen ? 'bg-[#004D4D] text-white' : 'bg-[#E6F2F2] text-[#004D4D]'}`}>
                        {isOpen ? <FiMinus className="text-sm" /> : <FiPlus className="text-sm" />}
                      </div>
                      <span className={`text-sm font-bold tracking-tight transition-colors duration-300
                        ${isOpen ? 'text-[#004D4D]' : 'text-gray-800'}`}>
                        {item.q}
                      </span>
                    </div>
                    {/* Tiny trailing direction indicator angle carat vector layout */}
                    <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#004D4D]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expandable Panel Slide Interaction Logic Layer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pl-[52px] border-t border-dashed border-gray-100/50 pt-3">
                          <p className="text-xs text-gray-500 font-light leading-relaxed max-w-2xl text-left">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}