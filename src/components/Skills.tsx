"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Skills() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "text-xs font-black uppercase tracking-[0.3em] mb-4",
              role === "software" ? "text-purple-500" : "text-blue-500"
            )}
          >
            Technical Arsenal
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black tracking-tight"
          >
            Powering projects with modern technologies.
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {data.skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative h-40 rounded-3xl border border-white/5 bg-white/[0.02] p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-white/20 hover:bg-white/5 overflow-hidden">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-1/2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />
                
                <skill.icon 
                  className="w-12 h-12 mb-4 transition-all duration-500 group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-bold tracking-tight text-zinc-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
