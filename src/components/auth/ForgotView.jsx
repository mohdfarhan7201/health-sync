import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowLeft, FiShield } from 'react-icons/fi';

export default function ForgotView({ setView }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="p-8 md:p-10 bg-white flex flex-col justify-center"
    >
      <div className="w-full space-y-6">
        {/* Top Centered Vector Icon Envelope Block */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#E6F2F2] text-[#004D4D] flex items-center justify-center text-2xl shadow-inner">
            <FiMail />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-serif font-bold text-gray-900 tracking-tight">Forgot Password?</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-xs mx-auto">
              Enter your registered email address and we'll send you a link to reset your password.
            </p>
          </div>
        </div>

        {/* Input Target Space */}
        <div className="space-y-1.5 text-left">
          <label className="text-xs font-bold text-[#004D4D]">Email Address</label>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" placeholder="Enter your email" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs outline-none focus:bg-white focus:border-[#004D4D] focus:ring-1 focus:ring-[#004D4D] transition-all font-light" />
          </div>
        </div>

        {/* Action Triggers Grid Panel Layout */}
        <div className="space-y-3">
          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full py-3.5 bg-[#004D4D] hover:bg-[#003333] text-white text-xs font-bold rounded-xl shadow-md transition-colors">
            Send Your Link
          </motion.button>
          
          <button 
            onClick={() => setView('login')} 
            className="w-full py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-xl flex items-center justify-center gap-2 font-medium transition-colors"
          >
            <FiArrowLeft /> Back to Login
          </button>
        </div>

        {/* Safe Verification Bottom Note Layout line */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-light pt-2">
          <FiShield className="text-[#004D4D]" />
          <span>Don't Worry! Your Information safe with us.</span>
        </div>
      </div>
    </motion.div>
  );
}