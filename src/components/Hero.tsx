"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Code, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 animate-pulse",
          role === "software" ? "bg-purple-600" : "bg-red-900"
        )} />
        <div className={cn(
          "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 animate-pulse delay-700",
          role === "software" ? "bg-indigo-600" : "bg-rose-900"
        )} />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Available for projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9]"
          >
            {portfolioData.personal.name.split(" ").map((name, i) => (
              <span key={i} className="block last:text-zinc-500">{name}</span>
            ))}
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "text-3xl lg:text-4xl font-bold italic tracking-tight",
              role === "software" ? "text-purple-400" : "text-red-600"
            )}
          >
            {data.title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium"
          >
            {data.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Link 
              href="#projects"
              className={cn(
                "h-14 px-10 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all duration-300 shadow-2xl",
                role === "software"
                  ? "bg-purple-600 text-white hover:bg-purple-500 shadow-purple-500/20"
                  : "bg-red-900 text-white hover:bg-red-800 shadow-red-500/20"
              )}
            >
              Explore Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a 
              href={portfolioData.personal.cvPath}
              download
              className="h-14 px-10 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Get my CV
              <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Abstract Visual / Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg aspect-square relative group"
        >
          <div className={cn(
            "absolute inset-0 rounded-[4rem] border-2 border-white/5 transition-all duration-500 group-hover:rotate-6",
            role === "software" ? "group-hover:border-purple-500/20" : "group-hover:border-red-900/20"
          )} />
          <div className={cn(
            "absolute inset-4 rounded-[3.5rem] border-2 border-white/5 transition-all duration-700 group-hover:-rotate-3 group-hover:bg-white/[0.02]",
            role === "software" ? "group-hover:border-purple-500/10" : "group-hover:border-red-900/10"
          )} />
          <div className="absolute inset-8 rounded-[3rem] bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
             {/* Character/Icon Display */}
             {role === "software" ? (
               <Code className="w-32 h-32 text-purple-600/50" />
             ) : (
               <Cpu className="w-32 h-32 text-blue-600/50" />
             )}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
