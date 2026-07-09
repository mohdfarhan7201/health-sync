import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, UserPlus, CheckCircle2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

export default function SignUpView({ setView }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.3 }}
      // Responsive dynamic grid framing setup
      className="grid grid-cols-1 lg:grid-cols-12 items-stretch w-full min-h-full sm:min-h-[520px] md:min-h-[580px] overflow-hidden rounded-2xl"
    >
      {/* Left Profile Features Column (Hidden on Mobile/Tablet for seamless fit) */}
      <div className="lg:col-span-5 bg-[#F4F9F9] p-8 lg:p-12 flex flex-col justify-center space-y-6 hidden lg:flex select-none">
        <div className="space-y-3">
          <h2 className="text-3xl font-serif text-gray-900 leading-tight">
            Create Your Account <br />for <span className="text-[#004D4D] font-bold">Better Health</span>
          </h2>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Join us and get access to trusted healthcare services and personalized care.
          </p>
        </div>

        {/* Feature Checklists Overlay Layout */}
        <div className="space-y-4 pt-4 text-left">
          {['Secure & Safe', 'Easy Appointments', 'Trusted Care'].map((feat, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#004D4D] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-gray-800">{feat}</h4>
                <p className="text-[10px] text-gray-400 font-light leading-normal">
                  Your data is completely protected with top-level security.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Account Form Grid Frame */}
      {/* Handled mobile internal padding shifting from p-8 to px-4 py-6 */}
      <div className="lg:col-span-7 px-4 py-6 sm:p-8 md:p-10 lg:p-12 bg-white flex flex-col justify-center w-full">
        <div className="max-w-xl w-full mx-auto space-y-5">
          
          {/* Header Segment Grid */}
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Create Account</h3>
            <p className="text-[11px] sm:text-xs text-gray-400 font-light">Fill in the details below to create your account</p>
          </div>

          {/* Core Interactive Fields Row */}
          <div className="space-y-3.5 pt-1">
            
            {/* Two-Column Form Split Layout for Row Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#004D4D] tracking-wide">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Enter full name" 
                    className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light text-gray-800" 
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#004D4D] tracking-wide">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="email" 
                    placeholder="Enter email" 
                    className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light text-gray-800" 
                  />
                </div>
              </div>
            </div>

            {/* Phone Number Full Deck Row Element */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#004D4D] tracking-wide">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light text-gray-800" 
                />
              </div>
            </div>

            {/* Password Verification Row Splits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#004D4D] tracking-wide">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="password" 
                    placeholder="Create password" 
                    className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light text-gray-800" 
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#004D4D] tracking-wide">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="password" 
                    placeholder="Confirm password" 
                    className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light text-gray-800" 
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Submit Action Block Framework */}
          <div className="space-y-3 pt-2">
            <motion.button 
              whileHover={{ scale: 1.01 }} 
              whileTap={{ scale: 0.99 }} 
              className="w-full py-3 sm:py-3.5 bg-[#004D4D] hover:bg-[#003333] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#004D4D]/10 transition-colors flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" /> Create Account
            </motion.button>
            
            {/* OAuth Continue Trigger Component */}
            <button 
              type="button"
              className="w-full py-2.5 sm:py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 font-semibold shadow-sm transition-colors"
            >
              <FcGoogle className="text-base sm:text-lg" /> Continue With Google
            </button>
          </div>

          {/* View Toggle Panel Navigation Link */}
          <p className="text-center text-xs text-gray-500 pt-1 font-medium">
            Already have an account?{' '}
            <button 
              type="button"
              onClick={() => setView('login')} 
              className="text-[#004D4D] font-bold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}