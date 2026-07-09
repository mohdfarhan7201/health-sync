import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar, FaBriefcase, FaHeart, FaBrain, FaBaby, FaBone } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Doctors() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.doctor-card', 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.doctors-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const doctorsList = [
    { name: 'Dr. Leslie Alexander', specialty: 'Cardiologist', exp: '6+ Years Experience', rating: '4.9', reviews: '320', icon: FaHeart, img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&fit=crop&auto=format&q=80' },
    { name: 'Dr. Wade Warren', specialty: 'Neurologist', exp: '4+ Years Experience', rating: '4.8', reviews: '472', icon: FaBrain, img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&fit=crop&auto=format&q=80' },
    { name: 'Dr. Guy Hawkins', specialty: 'Pediatrician', exp: '12+ Years Experience', rating: '4.9', reviews: '893', icon: FaBaby, img: 'https://images.unsplash.com/photo-1594824813573-246434e3b96f?w=400&fit=crop&auto=format&q=80' },
    { name: 'Dr. Devon Lane', specialty: 'Orthopedic Surgeon', exp: '9+ Years Experience', rating: '4.8', reviews: '620', icon: FaBone, img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&fit=crop&auto=format&q=80' }
  ];

  return (
    <section ref={containerRef} id="doctor" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Top Header Row with Title and Action CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004D4D]">Our Doctors</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 tracking-tight leading-[1.15]">
              Meet Our <span className="text-[#004D4D] font-bold">Expert Doctor</span>
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-[#004D4D] hover:text-[#004D4D] transition-colors group self-start md:self-auto"
          >
            View All Doctors <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Doctors Profiles Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 doctors-grid">
          {doctorsList.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <div key={idx} className="doctor-card relative bg-white border border-gray-100 rounded-3xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group">
                
                {/* Image Section Container */}
                <div className="relative aspect-[1/1] w-full rounded-2xl overflow-hidden bg-[#F4F9F9]">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Absolute Top Floating Medical Icon Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#004D4D]/90 backdrop-blur-sm flex items-center justify-center text-white text-xs">
                    <Icon />
                  </div>
                </div>

                {/* Information content metadata panel */}
                <div className="pt-4 px-2 pb-2 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight">{doc.name}</h3>
                    <p className="text-xs text-[#004D4D] font-medium mt-0.5">{doc.specialty}</p>
                  </div>

                  {/* Experience Tag Panel */}
                  <div className="flex items-center gap-2 text-gray-400 text-[11px]">
                    <FaBriefcase className="text-gray-300" />
                    <span>{doc.exp}</span>
                  </div>

                  {/* Rating Stars Layer Row */}
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-500 text-[10px] gap-0.5">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 ml-1">
                      {doc.rating} <span className="text-gray-400 font-normal">({doc.reviews})</span>
                    </span>
                  </div>

                  {/* Fully responsive action card button trigger link */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-[#004D4D] text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[#003333] shadow-md shadow-[#004D4D]/5 group"
                  >
                    Book Appointment <FiArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}