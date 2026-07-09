import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  { id: '01', title: 'Intelligent Platforms', category: 'Development', size: 'md:col-span-2' },
  { id: '02', title: 'Minimalist Infrastructure', category: 'Branding', size: 'md:col-span-1' },
  { id: '03', title: 'Immersive Interfaces', category: 'UI/UX Architecture', size: 'md:col-span-1' },
  { id: '04', title: 'Fluid Motion Design', category: 'Animation', size: 'md:col-span-2' },
];

export default function Showcase() {
  return (
    <section className="bg-[#030712] text-white py-32 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">Selected Portfolios</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-2">Curated Showcases</h2>
          </div>
          <p className="text-slate-400 font-light max-w-sm text-sm leading-relaxed">
            A precise balance of layout integrity and smooth interaction mechanics built out from absolute scratch.
          </p>
        </div>

        {/* Premium Dynamic Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.610, 0.355, 1.000] }}
              className={`group relative aspect-[4/3] bg-gradient-to-b from-slate-900 to-black rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between p-8 ${project.size}`}
            >
              {/* Subtle hover background accent overlay */}
              <div className="absolute inset-0 bg-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start z-10">
                <span className="font-mono text-xs text-slate-600 group-hover:text-cyan-400 transition-colors">
                  {project.id}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-medium px-3 py-1 rounded-full bg-white/5">
                  {project.category}
                </span>
              </div>

              <div className="z-10">
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-slate-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                {/* Clean inline link slide-arrow */}
                <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  View Specifications <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}