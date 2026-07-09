import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { X } from 'lucide-react'; // Switched to lucide-react for consistency
import LoginView from './LoginView';
import SignUpView from './SignUpView';
import ForgotView from './ForgotView';
import { FaHeadphones, FaCalendarCheck, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function AuthModal({ isOpen, onClose, initialView = 'login' }) {
  const [view, setView] = React.useState(initialView);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setView(initialView);
      // GSAP Entrance Animation for smooth backdrop blur and scale up
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(modalRef.current, 
        { opacity: 0, scale: 0.95, y: 15 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  return (
    // Fixed: changed items-center to items-start on mobile + added pt-12 to push it beautifully down
    <div 
      ref={backdropRef} 
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 pt-12 pb-6 sm:py-4 bg-gray-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div 
        ref={modalRef} 
        className={`relative w-full bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 my-auto
          ${view === 'forgot' ? 'max-w-md' : 'max-w-5xl'}`}
      >
        {/* Close Button Trigger */}
        {/* Adjusted spacing slightly on mobile (top-4 right-4) to stay clear of content */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 p-2 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Dynamic Panel Switching View */}
        <AnimatePresence mode="wait">
          {view === 'login' && <LoginView key="login" setView={setView} />}
          {view === 'signup' && <SignUpView key="signup" setView={setView} />}
          {view === 'forgot' && <ForgotView key="forgot" setView={setView} />}
        </AnimatePresence>

        {/* Shared Bottom Feature Utility Strip Row */}
        {/* Fixed: Hidden on mobile (hidden sm:flex) to prevent pushing the login card too high */}
        <div className="bg-[#004D4D] text-white py-4 px-6 md:px-12 flex-wrap items-center justify-between gap-4 text-[11px] font-light border-t border-[#003333] hidden sm:flex">
          <div className="flex items-center gap-6">
            <span>✓ Trusted & Secure</span>
            <span className='flex gap-2'><FaHeadphones className='mt-[2px]'/> 24/7 Support</span>
            <span className='flex gap-2'><FaCalendarCheck className='mt-[2px]'/> Easy Appointments</span>
          </div>
          <div className="flex items-center gap-3 opacity-80">
            <span>Follow Us:</span>
            <a href="#" className="hover:underline"><FaFacebookF /></a>
            <a href="#" className="hover:underline"><FaInstagram /></a>
            <a href="#" className="hover:underline"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}