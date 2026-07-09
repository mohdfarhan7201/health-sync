import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

// Register ScrollTrigger plugin safely
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Numerical counter animations using GSAP ScrollTrigger
      const targets = gsap.utils.toArray('.stat-number');
      targets.forEach((target) => {
        const val = parseInt(target.getAttribute('data-value'), 10);
        const suffix = target.getAttribute('data-suffix') || '';
        
        gsap.fromTo(target, 
          { textContent: 0 },
          {
            textContent: val,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: target,
              start: 'top 90%',
              toggleActions: 'play none none none'
            },
            onUpdate: function() {
              const current = Math.ceil(this.targets()[0].textContent);
              this.targets()[0].textContent = current + suffix;
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const points = [
    'Our doctors are highly certified with global health standards.',
    'Easy scheduling systems built directly around your availability.',
    'Full diagnostic evaluations alongside holistic wellness plans.'
  ];

  const stats = [
    { num: '15', suffix: '+', label: 'Years of Experience' },
    { num: '25', suffix: '+', label: 'Expert Doctors' },
    { num: '10', suffix: 'k+', label: 'Happy Patients' },
    { num: '98', suffix: '%', label: 'Patient Satisfaction' }
  ];

  return (
    <section id="about" ref={sectionRef} className="bg-white pt-20 md:pt-28 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Upper Segment: Profile Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 md:pb-20">
          
          {/* Right Block (Text Content) shifted up on mobile using order-1 */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-5 md:space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004D4D]">
              About Us
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-tight leading-[1.2] sm:leading-[1.15]">
              We're Here for <br className="hidden sm:inline" /> You and Your Family
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            {/* Checklist Arrays */}
            <div className="space-y-3 pt-2">
              {points.map((point, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#004D4D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-600 font-light">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-3 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#004D4D] text-white font-semibold text-xs sm:text-sm hover:bg-[#003333] shadow-lg shadow-[#004D4D]/10 group w-full sm:w-auto transition-colors duration-300"
              >
                About Our Practice <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Left Block (Image Layout) pushed down on mobile using order-2 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:col-span-6 w-full"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&fit=crop&auto=format&q=80" 
                alt="Doctor consulting with a senior patient" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lower Segment: Numerical Data Matrix Row */}
      <div className="bg-[#F4F9F9] border-t border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-y-0 md:divide-x divide-gray-200">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-2 sm:px-4">
                <span 
                  data-value={stat.num}
                  data-suffix={stat.suffix}
                  className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold text-[#004D4D] tracking-tight font-sans"
                >
                  0
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm text-gray-600 font-serif mt-1.5 font-medium px-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}