"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section id="projects" className="py-32 bg-zinc-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn(
                "text-xs font-black uppercase tracking-[0.3em] mb-4",
                role === "software" ? "text-purple-500" : "text-red-700"
              )}
            >
              Case Studies
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black tracking-tight"
            >
              Selected Engineering Marvels
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href={portfolioData.personal.github}
              target="_blank"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
            >
              View GitHub Archive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col rounded-[3rem] border border-white/5 bg-white/[0.01] overflow-hidden hover:border-white/10 transition-all"
            >
              {/* Card visual header */}
              <div className="h-64 relative overflow-hidden bg-zinc-900 border-b border-white/5">
                <div className={cn(
                  "absolute inset-0 opacity-20 bg-gradient-to-br",
                  role === "software" ? "from-purple-900 via-transparent to-transparent" : "from-red-950 via-transparent to-transparent"
                )} />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm group-hover:opacity-20 group-hover:blur-none transition-all duration-1000">
                  <span className="text-9xl font-black text-white select-none">0{index + 1}</span>
                </div>
                
                {/* Project Links Overlay */}
                <div className="absolute top-8 right-8 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <Github className="w-6 h-6" />
                    </Link>
                  )}
                  {project.link && project.link !== "#" && (
                    <Link href={project.link} target="_blank" className="w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <ExternalLink className="w-6 h-6" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <Link 
                     href={project.github || "#"} 
                     target="_blank"
                     className={cn(
                       "flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all",
                       role === "software" ? "text-purple-400 hover:text-purple-300" : "text-red-700 hover:text-red-600"
                     )}
                   >
                     Case Study
                     <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
