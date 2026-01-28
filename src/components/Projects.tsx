"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData, Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section id="projects" className="py-16 lg:py-32 bg-zinc-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-20">
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
              {role === "software" ? "Engineered for the Blockchain" : "Industrial Automation Marvels"}
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
          {data.projects.map((project: Project, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col rounded-[3rem] border border-white/5 bg-white/[0.01] overflow-hidden hover:border-white/10 transition-all shadow-2xl"
            >
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden bg-zinc-900 border-b border-white/5">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                ) : (
                  <div className={cn(
                    "absolute inset-0 opacity-20 bg-gradient-to-br",
                    role === "software" ? "from-purple-900 via-transparent to-transparent" : "from-red-950 via-transparent to-transparent"
                  )} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Project Links Overlay */}
                <div className="absolute top-8 right-8 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all z-20">
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
                  {project.video && (
                    <Link href={project.video} target="_blank" className="w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all border border-red-500/50">
                      <Play className="w-6 h-6 fill-current" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-6 lg:p-10 flex flex-col flex-1 relative z-10 bg-zinc-950/40 backdrop-blur-sm">
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
                   {(project.github || (project.link && project.link !== "#")) ? (
                     <Link 
                       href={project.link !== "#" ? project.link : (project.github || "#")} 
                       target="_blank"
                       className={cn(
                         "flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all",
                         role === "software" ? "text-purple-400 hover:text-purple-300" : "text-red-700 hover:text-red-600"
                       )}
                     >
                       {project.link !== "#" ? "Launch Platform" : "View Case Study"}
                       <ArrowRight className="w-4 h-4" />
                     </Link>
                   ) : (
                     <div className="text-xs font-black uppercase tracking-widest text-zinc-600 italic">
                        Internal Infrastructure Project
                     </div>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
