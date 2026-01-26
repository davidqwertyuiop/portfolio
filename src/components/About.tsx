"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function About() {
  const { role } = useRole();
  const data = portfolioData[role];
  // Using the personal description + a bit more flavour based on role
  
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-invert mx-auto">
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              Hi, I'm <span className="text-white font-semibold">{portfolioData.personal.name}</span>.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              As a <span className={cn("font-medium", role === "software" ? "text-purple-400" : "text-amber-400")}>
                {role === "software" ? "Software Engineer" : "Electrical Engineer"}
              </span>, I am passionate about {role === "software" ? "building robust, scalable technologies on the blockchain." : "designing efficient power and control systems."}
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
