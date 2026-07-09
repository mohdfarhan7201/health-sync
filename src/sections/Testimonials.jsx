import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const reviews = [
    { name: 'Lorem Ipsum', handle: '@loremipsumtext', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop&auto=format&q=80' },
    { name: 'Lorem Ipsum', handle: '@loremipsumtext', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&auto=format&q=80' },
    { name: 'Lorem Ipsum', handle: '@loremipsumtext', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop&auto=format&q=80' }
  ];

  return (
    <section ref={containerRef} id="testimonials" className="bg-[#F8FBFB] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header Text Stack Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004D4D]">Patient Testimonials</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 tracking-tight font-bold">
            What Our <span className="text-[#004D4D] font-bold">Patients</span> Say
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Testimonials 3-Column Responsive Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-6 testimonials-grid">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="testimonial-card relative bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.02)] mt-6 flex flex-col justify-between group"
            >
              {/* Overlapping Top Left Floating Profile Avatar Circle */}
              <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 rounded-full border-4 border-white shadow-md bg-gray-100 overflow-hidden">
                <img src={item.img} alt="Patient Headshot" className="w-full h-full object-cover filter grayscale" />
              </div>

              {/* Review Description Prose Area */}
              <p className="text-xs text-gray-400 font-light leading-relaxed mt-4 mb-6 text-left">
                Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit.
              </p>

              {/* Patient User Information Identity Footer Bar */}
              <div className="border-t border-gray-50 pt-4 text-left">
                <h4 className="text-sm font-bold text-gray-800 tracking-tight">{item.name}</h4>
                <p className="text-[11px] text-gray-400 font-medium mt-0.5">{item.handle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}