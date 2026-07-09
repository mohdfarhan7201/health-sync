import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginView({ setView }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 15 }}
      transition={{ duration: 0.3 }}
      // Responsive layout fix: grid-cols-1 for mobile, h-auto for fluid height
      className="grid grid-cols-1 lg:grid-cols-12 items-stretch w-full min-h-full sm:min-h-[500px] md:min-h-[550px] overflow-hidden rounded-2xl"
    >
      {/* Left Banner Brand Frame Section (Hidden on mobile/tablet, fully visible on laptop) */}
      <div className="lg:col-span-5 bg-[#F4F9F9] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden hidden lg:flex select-none">
        <div className="space-y-4 max-w-sm z-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 leading-[1.2]">
            Your Health, <br /><span className="text-[#004D4D] font-bold">Our Priority</span>
          </h2>
          <div className="w-12 h-[3px] bg-[#004D4D]" />
          <p className="text-xs text-gray-500 font-light leading-relaxed pt-2">
            We are here to provide you with the best healthcare experience.
          </p>
        </div>
        {/* Decorative Blurred Vector Glow Circle */}
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#004D4D]/5 blur-xl" />
      </div>

      {/* Right Core Interactive Form Frame Section */}
      {/* Padding adjusted from p-8 to px-4 py-6 on small mobile for clean fit */}
      <div className="lg:col-span-7 px-4 py-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white w-full ">
        <div className="max-w-md w-full mx-auto space-y-5 sm:space-y-6">
          
          {/* Form Header Text Layout */}
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Welcome Back</h3>
            <p className="text-[11px] sm:text-xs text-gray-400 font-light">Login to your account and continue</p>
          </div>

          {/* Form Controls Field Framework */}
          <div className="space-y-4 pt-1">
            {/* Email Field Group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#004D4D] tracking-wide">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-11 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light text-gray-800" 
                />
              </div>
            </div>

            {/* Password Field Group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#004D4D] tracking-wide">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full pl-11 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light text-gray-800" 
                />
              </div>
            </div>

            {/* Utility Quick Links Row */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500 cursor-pointer select-none font-medium">
                <input type="checkbox" className="rounded text-[#004D4D] focus:ring-[#004D4D] border-gray-200 w-3.5 h-3.5 sm:w-4 sm:h-4" /> Remember me
              </label>
              <button 
                type="button"
                onClick={() => setView('forgot')} 
                className="text-[10px] sm:text-[11px] font-semibold text-[#004D4D] hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Action Interactive Triggers Segment */}
          <div className="space-y-3 pt-1">
            {/* Native Form Execution Trigger */}
            <motion.button 
              whileHover={{ scale: 1.01 }} 
              whileTap={{ scale: 0.99 }} 
              className="w-full py-3 sm:py-3.5 bg-[#004D4D] hover:bg-[#003333] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#004D4D]/10 transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" /> Login
            </motion.button>
            
            {/* Visual Divider Panel Overlay */}
            <div className="relative flex py-1 items-center text-xs text-gray-300">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-3 text-[10px] text-gray-400 font-medium uppercase tracking-wider">Or</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>
            
            {/* OAuth Federated Social Engine Endpoint Trigger */}
            <button 
              type="button"
              className="w-full py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 font-semibold shadow-sm transition-colors"
            >
              <FcGoogle className="text-base sm:text-lg" /> Continue With Google
            </button>
          </div>

          {/* View Alternative Structural Router Trigger */}
          <p className="text-center text-xs text-gray-500 pt-2 font-medium">
            Don't have an account?{' '}
            <button 
              type="button"
              onClick={() => setView('signup')} 
              className="text-[#004D4D] font-bold hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}