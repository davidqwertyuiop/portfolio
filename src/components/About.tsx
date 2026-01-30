"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";
import Image from "next/image";

export function About() {
  const { role } = useRole();
  const data = portfolioData[role as keyof typeof portfolioData] as any;
  
  return (
    <section id="about" className="py-16 lg:py-32 border-t border-white/5 bg-zinc-950/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-12"
          >
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <h3 className={cn(
                "text-xs font-black uppercase tracking-[0.3em] mb-4",
                role === "software" ? "text-purple-500" : role === "backend" ? "text-orange-500" : "text-red-800"
              )}>
                Identity
              </h3>
              <h2 className="text-4xl lg:text-7xl font-black tracking-tight leading-tight">
                Solving complex problems with <span className="italic">precision</span>.
              </h2>
              <div className="space-y-4 lg:space-y-6 text-xl lg:text-2xl text-zinc-400 leading-relaxed font-medium">
                <p>
                  I am <span className="text-white font-bold">{portfolioData.personal.name}</span>, 
                  a multidisciplinary engineer operating at the intersection of 
                  {role === "software" ? " blockchain security and scalable web applications." : role === "backend" ? " systems programming and high-performance backend architecture." : " industrial automation and high-voltage power systems."}
                </p>
                <p>
                  {data.description}
                </p>
              </div>
            </div>

            {/* Shared Background / Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-white/5">
              {/* Education */}
              <div className="space-y-6">
                <div className={cn("flex items-center gap-3", role === "software" ? "text-purple-400" : role === "backend" ? "text-orange-400" : "text-red-700")}>
                  <GraduationCap className="w-6 h-6" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-white">Education</h4>
                </div>
                {data.education.map((edu: any, i: number) => (
                  <div key={i} className="space-y-2">
                    <p className="text-lg font-bold text-zinc-200">{edu.school}</p>
                    <p className={cn("text-sm font-medium italic", role === "software" ? "text-purple-500/80" : role === "backend" ? "text-orange-500/80" : "text-red-500/80")}>{edu.degree}</p>
                    <p className="text-xs font-mono text-zinc-500">{edu.period}</p>
                    <ul className="space-y-2 pt-4">
                      {edu.highlights.map((h: string, j: number) => (
                        <li key={j} className="text-sm text-zinc-400 flex items-start gap-2">
                          <span className={cn("mt-1.5", role === "software" ? "text-purple-600" : role === "backend" ? "text-orange-600" : "text-red-700")}>•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Certifications or Awards */}
              <div className="space-y-6">
                {(role === "software" && "certifications" in data) ? (
                  <>
                    <div className="flex items-center gap-3 text-purple-400">
                      <Award className="w-6 h-6" />
                      <h4 className="text-sm font-black uppercase tracking-widest text-white">Certifications</h4>
                    </div>
                    <div className="space-y-4">
                      {("certifications" in data ? data.certifications : []).map((cert: any, i: number) => (
                        <div key={i} className="group border-b border-white/5 pb-4 last:border-0">
                          <p className="text-lg font-bold text-zinc-200 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{cert.name}</p>
                          <p className="text-sm text-zinc-500">{cert.issuer}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (role === "electrical" && "awards" in data) ? (
                  <>
                    <div className="flex items-center gap-3 text-red-700">
                      <Trophy className="w-6 h-6" />
                      <h4 className="text-sm font-black uppercase tracking-widest text-white">Leadership</h4>
                    </div>
                    <div className="space-y-4">
                      {("awards" in data ? data.awards : []).map((award: any, i: number) => (
                        <div key={i} className="group border-b border-white/5 pb-4 last:border-0">
                          <p className="text-lg font-bold text-zinc-200 group-hover:text-red-600 transition-colors tracking-tight">{award.title}</p>
                          <p className="text-sm text-zinc-500 font-mono">{award.period}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
