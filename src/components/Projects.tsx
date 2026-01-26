"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Folder, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section id="projects" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-400">
            A selection of projects demonstrating expertise in {role === "software" ? "blockchain and web development" : "electrical engineering and automation"}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl border border-white/5 bg-white/5 p-6 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "p-3 rounded-xl",
                  role === "software" ? "bg-purple-500/10 text-purple-400" : "bg-amber-500/10 text-amber-400"
                )}>
                  <Folder className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="p-2 text-zinc-500 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {project.link && (
                    <Link href={project.link} target="_blank" className="p-2 text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-zinc-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
