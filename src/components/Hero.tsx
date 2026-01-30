"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Code, Cpu, BookOpen, X, Eye } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function Hero() {
  const { role } = useRole();
  const data = portfolioData[role as keyof typeof portfolioData] as any;
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const cvPath = data.cvPath;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 lg:pt-32 pb-12 lg:pb-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={cn(
          "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 animate-pulse",
          role === "software" ? "bg-purple-600" : role === "backend" ? "bg-orange-600" : "bg-red-900"
        )} />
        <div className={cn(
          "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 animate-pulse delay-700",
          role === "software" ? "bg-indigo-600" : role === "backend" ? "bg-amber-600" : "bg-rose-900"
        )} />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Content Side */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 max-w-2xl order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-white/70">Available for new projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-black tracking-tight leading-[1] lg:leading-[0.85] text-white">
              {role === "software" ? (
                <>
                  <span className="block">Full Stack</span>
                  <span className="block">Developer &</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-600 animate-gradient-x select-none pb-1">
                    Blockchain
                  </span>
                  <span className="block opacity-60 text-indigo-400">
                    Engineer
                  </span>
                </>
              ) : role === "backend" ? (
                <>
                  <span className="block">Rust Backend</span>
                  <span className="block">& Systems</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-800 select-none pb-1">
                    Engineer
                  </span>
                  <span className="block opacity-60 text-orange-400">
                    High Performance
                  </span>
                </>
              ) : (
                <>
                  <span className="block italic">Electrical &</span>
                  <span className="block">Control Systems</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-rose-500 to-red-800 select-none pb-1">
                    Engineer
                  </span>
                  <span className="block opacity-60 text-red-900">
                    Powering Precision
                  </span>
                </>
              )}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium max-w-xl"
          >
            {data.description.split("Expert in").map((part: string, i: number) => (
              i === 0 ? part : <span key={i}>Expert in <span className="text-white font-bold">{part}</span></span>
            ))}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 pt-4 w-full sm:w-auto"
          >
            <Link 
              href="#projects"
              className="group flex items-center gap-2 text-white font-bold text-lg hover:gap-4 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
            >
              View Projects
              <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white" />
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <button 
                onClick={() => setIsCVModalOpen(true)}
                className="w-full sm:w-auto h-12 lg:h-14 px-8 rounded-xl font-black flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-200 transition-all shadow-2xl active:scale-95 text-sm lg:text-base"
              >
                Curriculum Vitae
                <BookOpen className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>

              <Link 
                href="#contact"
                className="w-full sm:w-auto h-12 lg:h-14 px-10 rounded-xl font-black flex items-center justify-center border border-zinc-700 text-white hover:bg-white/5 transition-all active:scale-95 text-sm lg:text-base"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-[4/5] relative z-10 order-2 lg:order-2"
        >
          {/* Layered Backing Decorations */}
          <div className={cn(
            "absolute inset-0 rounded-[2.5rem] lg:rounded-[3rem] rotate-6 blur-2xl opacity-20 -z-10",
            role === "software" ? "bg-purple-600" : role === "backend" ? "bg-orange-600" : "bg-red-600"
          )} />
          <div className={cn(
            "absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] -rotate-3 border border-white/5 bg-zinc-900/40 -z-10",
            role === "software" ? "bg-purple-900/10" : role === "backend" ? "bg-orange-900/10" : "bg-red-900/10"
          )} />

          <div className="relative w-full h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-zinc-900">
            <Image 
              src={data.profileImage}
              alt="Oluwasijibomi Fadeyibi"
              fill
              className="object-cover transition-all duration-700 scale-100 group-hover:scale-105"
              priority
              quality={100}
              unoptimized={true}
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 450px"
            />
            {/* Top Shine/Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isCVModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCVModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className={cn(
                "absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 -mr-10 -mt-10",
                role === "software" ? "bg-purple-500" : role === "backend" ? "bg-orange-500" : "bg-red-600"
              )} />
              
              <button 
                onClick={() => setIsCVModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
              
              <div className="text-center space-y-2 mb-8">
                <h3 className="text-2xl font-black tracking-tight text-white">Curriculum Vitae</h3>
                <p className="text-sm text-zinc-500 font-medium">Choose an action for the {role} resume</p>
              </div>
              
              <div className="space-y-4">
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 w-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                    role === "software" ? "bg-purple-500/10 text-purple-400" : role === "backend" ? "bg-orange-500/10 text-orange-400" : "bg-red-500/10 text-red-600"
                  )}>
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-base font-black text-white">Preview PDF</p>
                    <p className="text-xs text-zinc-500">View in your browser</p>
                  </div>
                </a>
                
                <a
                  href={cvPath}
                  download
                  className="group flex items-center gap-4 w-full p-6 rounded-2xl bg-white text-black hover:bg-zinc-200 transition-all"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                    role === "software" ? "bg-purple-600 text-white" : role === "backend" ? "bg-orange-600 text-white" : "bg-red-900 text-white"
                  )}>
                    <Download className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-base font-black">Download file</p>
                    <p className="text-xs opacity-60 italic font-medium">Save to your device</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
