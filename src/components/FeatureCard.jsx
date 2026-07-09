import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left px-6 py-4 md:border-r last:border-0 border-gray-100 flex-1 min-w-[180px]">
      <div className="p-3 bg-[#E6F2F2] text-[#004D4D] rounded-xl mb-4 transition-transform duration-300 hover:scale-110">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-bold text-gray-800 tracking-tight">{title}</h4>
      <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed max-w-[160px]">
        {description}
      </p>
    </div>
  );
}