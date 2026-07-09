import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Footer() {
  const quickLinks = ['Home', 'About Us', 'Our Services', 'Doctors', 'Appointment', 'Health Packages', 'Contact Us'];
  const quickServices = ['General Medicine', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Gynecology', 'Diagnostics'];
  const patientinfo = ['General Medicine', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Gynecology', 'Diagnostics'];

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Identity Profile Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <FaHeartbeat className="w-6 h-6 text-[#004D4D]" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight text-[#004D4D]">HEALTH</span>
                <span className="text-[9px] text-gray-500 font-medium tracking-wide">Your Path To Wellness</span>
              </div>
            </a>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            
            {/* Direct Core Communication Metrics Lines */}
            <div className="space-y-3 pt-2 text-gray-600 text-xs font-light">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#E6F2F2] text-[#004D4D] flex items-center justify-center shrink-0">
                  <FiMapPin />
                </div>
                <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#E6F2F2] text-[#004D4D] flex items-center justify-center shrink-0">
                  <FiPhone />
                </div>
                <span>(405) 555-0128</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#E6F2F2] text-[#004D4D] flex items-center justify-center shrink-0">
                  <FiMail />
                </div>
                <span>felicia.reid@example.com</span>
              </div>
            </div>

            {/* Social Connection Link Elements */}
            <div className="flex items-center gap-3 pt-2">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: '#004D4D', color: '#ffffff' }}
                  className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center text-xs transition-colors duration-200"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Structural Navigation Directories */}
          <div className="lg:col-span-3 lg:pl-8 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-xs text-gray-400 hover:text-[#004D4D] transition-colors duration-200 font-light block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Services Directories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Quick Services</h4>
            <ul className="space-y-2.5">
              {quickServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-xs text-gray-400 hover:text-[#004D4D] transition-colors duration-200 font-light block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Client Patient Info Space Anchor */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-tight">Patient Info</h4>
            <ul className="space-y-2.5">
              {patientinfo.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-xs text-gray-400 hover:text-[#004D4D] transition-colors duration-200 font-light block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Absolute Base Copyright Signature Horizontal Deck Ribbon */}
      <div className="bg-[#004D4D] py-4 text-center border-t border-[#003333]">
        <p className="text-[11px] font-medium tracking-wide text-white/80">
          © 2026 Health Sync. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}