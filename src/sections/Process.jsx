import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUserCheck, FiActivity, FiShield } from 'react-icons/fi';

export default function Process() {
  const steps = [
    { num: '01', title: 'Expert Doctors', icon: FiUserCheck, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
    { num: '02', title: 'Easy Appointments', icon: FiCalendar, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
    { num: '03', title: 'Comprehensive Care', icon: FiActivity, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
    { num: '04', title: 'Advanced Technology', icon: FiShield, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' }
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Upper Heading Context Labels */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004D4D]">Appointment Process</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 tracking-tight font-bold">
            Simple Steps to Better Health
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Dynamic Structural Grid Step Timeline Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                
                {/* Visual Circle & Icon Overlay Container Block */}
                <div className="relative mb-6">
                  {/* Floating Number Count Bubble */}
                  <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#004D4D] text-white text-xs font-bold flex items-center justify-center shadow-md z-10">
                    {step.num}
                  </div>
                  
                  {/* Primary Decorative Outer Loop Circles */}
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center p-2 group-hover:border-[#004D4D] group-hover:rotate-45 transition-all duration-700">
                    <div className="w-full h-full rounded-full bg-[#F4F9F9] flex items-center justify-center text-[#004D4D]">
                      <StepIcon className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow Vectors - Rendered exclusively for wide viewports */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] pointer-events-none">
                    <svg className="w-full h-full text-gray-300" fill="none" preserveAspectRatio="none">
                      <path d="M 0 1 L 200 1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M 195 -3 L 200 1 L 195 5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                )}

                {/* Context Text Content Elements */}
                <div className="space-y-2 max-w-[220px]">
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">{step.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{step.desc}</p>
                  
                  {/* Bottom Minimal Accent Line Intersect */}
                  <div className="w-10 h-[2px] bg-[#004D4D]/20 mx-auto mt-4 group-hover:w-16 transition-all duration-300" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}