"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Code, Cpu, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 lg:pt-32 pb-12 lg:pb-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
              <span className="block">Full Stack</span>
              <span className="block">Developer &</span>
              <span className={cn(
                "block bg-clip-text text-transparent bg-gradient-to-r select-none pb-1",
                role === "software" 
                  ? "from-purple-500 via-indigo-400 to-purple-600 animate-gradient-x" 
                  : "from-red-600 via-rose-500 to-red-800"
              )}>
                {role === "software" ? "Blockchain" : "Electrical"}
              </span>
              <span className={cn(
                "block opacity-60",
                role === "software" ? "text-indigo-400" : "text-red-900"
              )}>
                Engineer
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium max-w-xl"
          >
            {data.description.split("Expert in").map((part, i) => (
              i === 0 ? part : <span key={part}>Expert in <span className="text-white font-bold">{part}</span></span>
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
              <a 
                href={role === "software" ? "/cv/sijibomi-software-cv.pdf" : "/cv/sijibomi-electrical-cv.pdf"}
                download 
                className="w-full sm:w-auto h-12 lg:h-14 px-8 rounded-xl font-black flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-200 transition-all shadow-2xl active:scale-95 text-sm lg:text-base"
              >
                Download CV
                <Download className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>

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
            role === "software" ? "bg-purple-600" : "bg-red-600"
          )} />
          <div className={cn(
            "absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] -rotate-3 border border-white/5 bg-zinc-900/40 -z-10",
            role === "software" ? "bg-purple-900/10" : "bg-red-900/10"
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
    </section>
  );
}
