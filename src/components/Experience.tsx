"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Experience() {
  const { role } = useRole();
  const data = portfolioData[role as keyof typeof portfolioData] as any;

  return (
    <section id="experience" className="py-16 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12 lg:mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "text-xs font-black uppercase tracking-[0.3em] mb-4",
              role === "software" ? "text-purple-500" : "text-red-800"
            )}
          >
            Chronicle
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black tracking-tight"
          >
            Professional milestones.
          </motion.h2>
        </div>
        
        <div className="space-y-16 lg:space-y-24">
          {data.experience.map((item: any, index: number) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-20"
            >
              <div className="space-y-4">
                <span className="text-sm font-black font-mono text-zinc-600 uppercase tracking-widest bg-zinc-900 px-4 py-2 rounded-full border border-white/5 inline-block">
                  {item.period}
                </span>
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">{item.company}</h3>
                  {item.location && (
                    <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className={cn(
                  "text-xl sm:text-2xl font-bold italic tracking-tight leading-tight",
                  role === "software" ? "text-purple-400" : "text-red-700"
                )}>
                  {item.role}
                </h4>
                <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                  {item.description}
                </p>
                <div className="h-px w-full bg-white/5 pt-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
