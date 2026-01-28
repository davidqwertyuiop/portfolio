"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";
import Image from "next/image";

export function About() {
  const { role } = useRole();
  const data = portfolioData[role];
  
  return (
    <section id="about" className="py-16 lg:py-32 border-t border-white/5 bg-zinc-950/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-12 lg:sticky lg:top-32"
          >
            <div className="space-y-6 lg:space-y-8">
              <h3 className={cn(
                "text-xs font-black uppercase tracking-[0.3em] mb-4",
                role === "software" ? "text-purple-500" : "text-red-800"
              )}>
                Identity
              </h3>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                Solving complex problems with <span className="italic">precision</span>.
              </h2>
              <div className="space-y-4 lg:space-y-6 text-xl text-zinc-400 leading-relaxed font-medium">
                <p>
                  I am <span className="text-white font-bold">{portfolioData.personal.name}</span>, 
                  a multidisciplinary engineer operating at the intersection of 
                  {role === "software" ? " blockchain security and scalable web applications." : " industrial automation and high-voltage power systems."}
                </p>
                <p>
                  {data.description}
                </p>
              </div>
            </div>

            {/* Shared Background / Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 lg:pt-8">
              {/* Education */}
              <div className="space-y-6">
                <div className={cn("flex items-center gap-3", role === "software" ? "text-purple-400" : "text-red-700")}>
                  <GraduationCap className="w-6 h-6" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-white">Education</h4>
                </div>
                {data.education.map((edu, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-sm font-bold text-zinc-200">{edu.school}</p>
                    <p className={cn("text-xs font-medium italic", role === "software" ? "text-purple-500/80" : "text-red-500/80")}>{edu.degree}</p>
                    <p className="text-xs font-mono text-zinc-500">{edu.period}</p>
                    <ul className="space-y-1 pt-2">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="text-xs text-zinc-400 flex items-start gap-2">
                          <span className={cn("mt-1", role === "software" ? "text-purple-600" : "text-red-700")}>•</span>
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
                      {("certifications" in data ? data.certifications : []).map((cert, i) => (
                        <div key={i} className="group">
                          <p className="text-sm font-bold text-zinc-200 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{cert.name}</p>
                          <p className="text-xs text-zinc-500">{cert.issuer}</p>
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
                      {("awards" in data ? data.awards : []).map((award, i) => (
                        <div key={i} className="group">
                          <p className="text-sm font-bold text-zinc-200 group-hover:text-red-600 transition-colors tracking-tight">{award.title}</p>
                          <p className="text-xs text-zinc-500 font-mono">{award.period}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </motion.div>

          {/* Profile Image Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden bg-zinc-900 border border-white/10 group"
          >
            {data.profileImage ? (
               <Image 
                 src={data.profileImage} 
                 alt={portfolioData.personal.name}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden">
                 <span className="text-[12rem] lg:text-[20rem] font-black text-white/5 select-none leading-none">
                   {portfolioData.personal.name[0]}
                 </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
