"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function About() {
  const { role } = useRole();
  const data = portfolioData[role];
  
  return (
    <section id="about" className="py-32 border-t border-white/5 bg-zinc-950/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] relative rounded-[4rem] overflow-hidden bg-zinc-900 border border-white/10"
          >
            {/* Image Placeholder with abstract design */}
            <div className={cn(
              "absolute inset-0 opacity-10",
              role === "software" ? "bg-purple-600" : "bg-blue-600"
            )} />
            <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden">
               <span className="text-[20rem] font-black text-white/5 select-none leading-none">
                 {portfolioData.personal.name[0]}
               </span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={cn(
                "text-xs font-black uppercase tracking-[0.3em] mb-4",
                role === "software" ? "text-purple-500" : "text-red-800"
              )}>
                Identity
              </h3>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Solving complex problems with <span className="italic">precision</span>.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-xl text-zinc-400 leading-relaxed font-medium"
            >
              <p>
                I am <span className="text-white font-bold">{portfolioData.personal.name}</span>, 
                a multidisciplinary engineer operating at the intersection of 
                {role === "software" ? " blockchain security and scalable web applications." : " industrial automation and high-voltage power systems."}
              </p>
              <p>
                {data.description}
              </p>
              <p>
                My philosophy is simple: build for the long term, prioritize security, and never stop learning. Whether it's optimization of a Solana program or a PLC control loop, I aim for excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
