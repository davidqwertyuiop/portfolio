"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Experience() {
  const { role } = useRole();
  const data = portfolioData[role];

  return (
    <section id="experience" className="py-24 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="space-y-12">
            {data.experience.map((item, index) => (
              <div key={index} className="relative pl-8 border-l border-white/10">
                <div className={cn(
                  "absolute -left-1.5 top-1.5 w-3 h-3 rounded-full",
                  role === "software" ? "bg-purple-500" : "bg-amber-500"
                )} />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <span className="text-sm text-zinc-500 font-mono">{item.period}</span>
                </div>
                
                <div className="text-base font-medium text-zinc-300 mb-2">{item.company}</div>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
