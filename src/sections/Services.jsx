import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';
import { FaLock, FaClock, FaFileInvoiceDollar, FaHeadset } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Clean stagger reveal for the service cards as they enter viewport
      gsap.fromTo('.service-card', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const serviceCards = [
    { title: 'Primary Care', img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&fit=crop&auto=format&q=80' },
    { title: 'Specialty Care', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&fit=crop&auto=format&q=80' },
    { title: 'Diagnostics', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&fit=crop&auto=format&q=80' },
    { title: 'Preventive Care', img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&fit=crop&auto=format&q=80' }
  ];

  const trustItems = [
    { icon: FaLock, label: 'Secure & Confidential' },
    { icon: FaClock, label: 'Insurance Accepted' },
    { icon: FaFileInvoiceDollar, label: 'Convenient Location' },
    { icon: FaHeadset, label: 'Need Help?' }
  ];

  return (
    <section ref={containerRef} id="services" className="bg-white pt-24 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Main Section Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-24">
          
          {/* Left Block: Description & CTA */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004D4D]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 font-bold tracking-tight leading-[1.2]">
              Complete Care for Every Stage of Life
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="pt-2">
              <motion.button 
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#004D4D] text-white font-semibold text-sm hover:bg-[#003333] shadow-lg shadow-[#004D4D]/10 group"
              >
                View All Service <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Right Block: Image Cards Grid layout */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 services-grid">
            {serviceCards.map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="service-card relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-gray-100"
              >
                {/* Micro-Interaction Image Zoom Effect */}
                <motion.img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Floating Bottom Card Banner */}
                <div className="absolute bottom-3 left-3 right-3 bg-white py-3 px-2 rounded-xl shadow-sm border border-gray-50 flex items-center justify-center text-center">
                  <h3 className="text-xs font-bold text-[#004D4D] tracking-tight whitespace-nowrap">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Trust Elements Bottom Bar Row */}
      <div className="bg-[#F4F9F9] border-t border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y-0 md:divide-x divide-gray-200">
            {trustItems.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex items-center justify-center gap-4 px-4">
                  <div className="p-3 bg-[#004D4D] text-white rounded-xl shadow-sm">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-serif font-medium text-gray-800 tracking-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}