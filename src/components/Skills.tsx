"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Skills() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section id="skills" className="py-24 bg-zinc-950/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <div 
                key={index}
                className={cn(
                  "px-6 py-3 rounded-full border text-sm font-medium transition-colors cursor-default",
                  role === "software"
                    ? "bg-purple-500/5 border-purple-500/10 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/20"
                    : "bg-amber-500/5 border-amber-500/10 text-amber-300 hover:bg-amber-500/10 hover:border-amber-500/20"
                )}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
