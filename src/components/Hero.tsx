"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[128px] opacity-20 transition-all duration-1000",
          role === "software" ? "bg-purple-600" : "bg-amber-600"
        )} />
        <div className={cn(
          "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[128px] opacity-20 transition-all duration-1000",
          role === "software" ? "bg-blue-600" : "bg-emerald-600"
        )} />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8 backdrop-blur-sm">
          <span>Available for work</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          {portfolioData.personal.name}
        </h1>

        <h2 className={cn(
          "text-2xl md:text-3xl font-medium mb-6 transition-colors duration-500",
          role === "software" ? "text-purple-400" : "text-amber-400"
        )}>
          {data.title}
        </h2>

        <p className="max-w-xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed">
          {data.description}
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link 
            href="#projects"
            className={cn(
              "h-12 px-8 rounded-full font-semibold flex items-center gap-2 transition-all duration-300",
              role === "software"
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-amber-500 text-black hover:bg-amber-400"
            )}
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <div className="flex items-center gap-4 px-6 border-l border-white/10 ml-2">
            <Link href={portfolioData.personal.github} target="_blank" className="p-2 text-zinc-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href={portfolioData.personal.linkedin} target="_blank" className="p-2 text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href={`mailto:${portfolioData.personal.email}`} className="p-2 text-zinc-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
