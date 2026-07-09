import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar, FaStethoscope, FaCalendarCheck, FaHeartbeat, FaShieldAlt, FaUserFriends } from 'react-icons/fa';
import FeatureCard from '../components/FeatureCard';

export default function Hero() {
  const compRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Title Reveal Animation
      gsap.fromTo('.reveal-up', 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.15, delay: 0.3 }
      );

      // 2. Doctor Image smooth fade-in-scale
      gsap.fromTo('.doctor-img',
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out', delay: 0.2 }
      );

      // 3. Stagger reveal everything else cleanly
      gsap.fromTo('.stagger-fade',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1, delay: 0.8 }
      );
    }, compRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: FaStethoscope, title: 'Expert Doctors', description: 'Real certified specialists dedicated to your health.' },
    { icon: FaCalendarCheck, title: 'Easy Appointments', description: 'Book online in minutes and save your time.' },
    { icon: FaHeartbeat, title: 'Comprehensive Care', description: 'From prevention to treatment, we\'ve got you covered.' },
    { icon: FaShieldAlt, title: 'Advanced Technology', description: 'Modern technology for accurate diagnostics.' },
    { icon: FaUserFriends, title: 'Patient First', description: 'Compassionate care every single step of the way.' }
  ];

  return (
    // Added id="hero" to match your navbar scroll navigation targeting
    <section id="hero" ref={compRef} className="relative min-h-screen bg-gradient-to-br from-[#F4F9F9] via-[#FFFFFF] to-[#EBF5F5] pt-28 md:pt-36 pb-16 px-6 md:px-16 flex flex-col justify-between overflow-hidden">
      
      {/* Structural layout grid split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 max-w-7xl mx-auto w-full flex-grow">
        
        {/* LEFT COLUMN: Narrative details */}
        <div className="lg:col-span-7 space-y-6 z-10 text-left">
          <span className="stagger-fade inline-block text-xs font-bold uppercase tracking-wider text-gray-400">
            Trusted Care, better Health
          </span>
          
          {/* Wrapped reveal text into overflow hidden boxes to let GSAP slide-up look perfect */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 leading-[1.15] sm:leading-[1.1]">
              <div className="overflow-hidden">
                <span className="reveal-up inline-block font-semibold">Compassionate Care</span>
              </div>
              <div className="overflow-hidden">
                <span className="reveal-up inline-block">
                  For a <span className="text-[#004D4D] font-bold">Healthier You</span>
                </span>
              </div>
            </h1>
          </div>

          <p className="stagger-fade text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          {/* Action buttons with high micro-fidelity interactive states */}
          <div className="stagger-fade flex flex-wrap items-center gap-4 pt-2">
            <motion.button 
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#004D4D] text-white font-semibold text-sm hover:bg-[#003333] shadow-lg shadow-[#004D4D]/10 group transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              Book Session <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(0, 77, 77, 0.05)' }} whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border-2 border-gray-300 font-semibold text-sm text-gray-700 hover:border-[#004D4D] hover:text-[#004D4D] transition-colors w-full sm:w-auto text-center"
            >
              Learn More
            </motion.button>
          </div>

          {/* Social Proof/Patient Reviews Rating Segment */}
          <div className="stagger-fade flex flex-row items-center gap-4 pt-4 sm:pt-6">
            <div className="flex -space-x-3 shrink-0">
              {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=80', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&auto=format&q=80', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&auto=format&q=80', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&auto=format&q=80'].map((src, i) => (
                <img key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" src={src} alt="patient avatar" />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-amber-500 text-[10px] sm:text-xs gap-0.5">
                {[...Array(5)].map((_, idx) => <FaStar key={idx} />)}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-700 mt-0.5">
                4.5/5 <span className="text-gray-400 font-normal">from 1,200 patients</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Cinematic Doctor Photo */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full">
          <div className="doctor-img relative w-full max-w-sm lg:max-w-none aspect-[4/5] lg:h-[480px] xl:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&fit=crop&auto=format&q=80" 
              alt="Professional Doctor Portrait" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM CONTAINER: Mobile Responsive Grid Configuration for Feature Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl w-full mx-auto bg-white rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 md:p-4 mt-12 lg:mt-16 z-20 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:justify-between gap-6 md:gap-y-0"
      >
        {features.map((item, index) => (
          <div key={index} className="md:flex-1 min-w-[150px]">
            <FeatureCard icon={item.icon} title={item.title} description={item.description} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}