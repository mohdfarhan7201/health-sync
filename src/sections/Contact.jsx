import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiSend } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.contact-animate',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="bg-[#F4F9F9]/50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Heading Stack */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 contact-animate">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004D4D]">Contact Us</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 tracking-tight font-bold">
            We're Here to Help You
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Layout Split Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SUBPANEL: Map Container Mockup */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[350px] shadow-sm border border-gray-100 contact-animate">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.7758360212046!2d83.3731872!3d26.7595304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a00000001%3A0x86ef4da73273e6!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 filter contrast-[95%] hue-rotate-[10deg]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map Location Tracker"
            />
          </div>

          {/* RIGHT SUBPANEL: Secure Interactive Message Form Sheet */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between contact-animate">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E6F2F2] text-[#004D4D] flex items-center justify-center">
                  <FiSend className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">Send Us a Message</h3>
                  <p className="text-[11px] text-gray-400 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
              </div>

              {/* Form Element Node Fields Grid Layout */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] outline-none transition-all duration-300 font-light placeholder:text-gray-400"
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] outline-none transition-all duration-300 font-light placeholder:text-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] outline-none transition-all duration-300 font-light placeholder:text-gray-400"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] outline-none transition-all duration-300 font-light placeholder:text-gray-400 resize-none"
                />
              </div>
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-[#004D4D] text-white font-semibold text-sm hover:bg-[#003333] shadow-lg shadow-[#004D4D]/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}