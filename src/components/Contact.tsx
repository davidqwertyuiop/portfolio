"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRole } from "./RoleContext";

export function Contact() {
  const { role } = useRole();

  return (
    <section id="contact" className="py-32 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-[4rem] border border-white/5 bg-zinc-900 p-12 lg:p-24 relative overflow-hidden group">
          {/* Background Glow */}
          <div className={cn(
             "absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 transition-colors duration-1000",
             role === "software" ? "bg-purple-600" : "bg-blue-600"
          )} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]"
              >
                Let's build <br /> <span className="text-zinc-500 italic">the future</span>.
              </motion.h2>
              <p className="text-xl text-zinc-400 font-medium">
                I'm always open to discussing high-impact projects, architectural consultations, or technical collaborations.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <a 
                href={`mailto:${portfolioData.personal.email}?subject=Collaboration%20Inquiry&body=Hi,%20I%20would%20like%20to%20work%20with%20you.`}
                className="group flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all overflow-hidden relative"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">Direct Message</span>
                    <span className="text-lg font-bold text-white tracking-tight italic">Initiate Collaboration</span>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank"
                  className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                >
                  <Github className="w-6 h-6 text-zinc-400" />
                  <span className="font-bold text-sm uppercase tracking-widest text-zinc-400">Github</span>
                </a>
                <a 
                href={portfolioData.personal.linkedin} 
                  target="_blank"
                  className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                >
                  <Linkedin className="w-6 h-6 text-zinc-400" />
                  <span className="font-bold text-sm uppercase tracking-widest text-zinc-400">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
