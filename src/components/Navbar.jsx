import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const links = ['Home', 'About Us', 'Services', 'Doctor', 'FAQS', 'Contact'];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  // Scroll tracking to alter dynamic layout backgrounds
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to map names cleanly to section IDs
  const getSectionId = (link) => {
    if (link === 'Home') return 'hero';
    if (link === 'About Us') return 'about';
    return link.toLowerCase();
  };

  // ROBUST FIX: Native programmatic scroll handler for mobile overlay menus
  const handleNavigation = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close drawer safely

    const targetId = getSectionId(link);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Small timeout ensures the Framer Motion animation closing doesn't interrupt scroll calculations
      setTimeout(() => {
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80; // 80px is navbar height spacing
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4 transition-all duration-300
          ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white/70 backdrop-blur-sm'}`}
      >
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavigation(e, 'Home')} className="flex items-center gap-2 group z-50 shrink-0">
          <FaHeartbeat className="w-5 h-5 sm:w-6 h-6 text-[#004D4D] group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-base sm:text-lg tracking-tight text-[#004D4D]">HEALTH</span>
            <span className="text-[8px] sm:text-[9px] text-gray-500 font-medium tracking-wide">Your Path To Wellness</span>
          </div>
        </a>

        {/* Laptop & TABLET Dynamic Navigation Row (Visible from md: 768px and up) */}
        {/* Adjusted spacing to gap-4 on tablets so items don't overflow */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${getSectionId(link)}`}
              onClick={(e) => handleNavigation(e, link)}
              className="text-xs lg:text-sm font-medium text-gray-600 hover:text-[#004D4D] transition-colors duration-300 relative py-1 group shrink-0"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#004D4D] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions Frame: Tablet Login button scaling + Hamburger control toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setAuthOpen(true)}
            className="hidden md:block px-4 lg:px-7 py-2 lg:py-2.5 rounded-xl bg-[#004D4D] text-white font-medium text-xs lg:text-sm hover:bg-[#003333] transition-colors duration-300 shadow-md shadow-[#004D4D]/10 shrink-0"
          >
            Login
          </motion.button>

          {/* Toggle Button Container for Mobile Viewports (Below 768px) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-gray-700 hover:text-[#004D4D] transition-colors focus:outline-none z-50"
            aria-label="Toggle navigation structural menu"
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Flyout Drawer Component Sheet */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col p-6 space-y-4 md:hidden z-40 overflow-hidden"
            >
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${getSectionId(link)}`}
                  onClick={(e) => handleNavigation(e, link)} // Handled smoothly via Javascript runtime calculation
                  className="text-base font-medium text-gray-700 hover:text-[#004D4D] px-2 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 block text-left"
                >
                  {link}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-100">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setAuthOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-[#004D4D] text-white font-semibold text-sm text-center shadow-md shadow-[#004D4D]/5"
                >
                  Login / Sign Up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Auth Portal Layer Overlay */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} initialView="login" />
    </>
  );
}