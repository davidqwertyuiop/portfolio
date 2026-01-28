"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRole } from "./RoleContext";

export function Contact() {
  const { role } = useRole();

  return (
    <section id="contact" className="py-16 lg:py-32 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] lg:rounded-[4rem] border border-white/5 bg-zinc-900 p-8 lg:p-24 relative overflow-hidden group">
          {/* Background Glow */}
          <div className={cn(
             "absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 transition-colors duration-1000",
             role === "software" ? "bg-purple-600" : "bg-blue-600"
          )} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6 lg:space-y-8">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl lg:text-7xl font-black tracking-tight leading-[1.0] lg:leading-[0.9]"
              >
                Let's build <br /> <span className="text-zinc-500 italic">the future</span>.
              </motion.h2>
              <p className="text-lg lg:text-xl text-zinc-400 font-medium">
                I'm always open to discussing high-impact projects, architectural consultations, or technical collaborations.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-4 lg:space-y-6">
              <a 
                href={`mailto:${portfolioData.personal.email}?subject=Collaboration%20Inquiry&body=Hi,%20I%20would%20like%20to%20work%20with%20you.`}
                className="group flex items-center justify-between p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all overflow-hidden relative"
              >
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">Direct Message</span>
                    <span className="text-sm lg:text-lg font-bold text-white tracking-tight italic truncate">Initiate Collaboration</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank"
                  className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 p-4 lg:p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                >
                  <Github className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-400" />
                  <span className="font-bold text-[10px] lg:text-sm uppercase tracking-widest text-zinc-400">Github</span>
                </a>
                <a 
                href={portfolioData.personal.linkedin} 
                  target="_blank"
                  className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 p-4 lg:p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                >
                  <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-400" />
                  <span className="font-bold text-[10px] lg:text-sm uppercase tracking-widest text-zinc-400">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
