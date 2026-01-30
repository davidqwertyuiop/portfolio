"use client";

import { useRole } from "@/components/RoleContext";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const { role } = useRole();

  return (
    <footer className="py-20 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-black tracking-tight">SIJIBOMI FADEYIBI</h3>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              Operating at the threshold of {
                role === "software" 
                  ? "blockchain and full-stack engineering" 
                  : role === "backend"
                    ? "high-performance systems and backend architecture"
                    : "industrial automation and electrical systems"
              }.
            </p>
          </div>

          <div className="flex items-center gap-8 text-zinc-500">
            <a href={portfolioData.personal.github} target="_blank" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${(portfolioData[role as keyof typeof portfolioData] as any).email}`} className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-700">Alternate Profiles</span>
            <div className="flex flex-col items-center md:items-end gap-1.5">
              {role !== "software" && (
                <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-purple-400 transition-all">
                  Software Engineering
                </Link>
              )}
              {role !== "backend" && (
                <Link href="/backend" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-orange-400 transition-all">
                  Rust Backend Engineer
                </Link>
              )}
              {role !== "electrical" && (
                <Link href="/engineering" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-red-700 transition-all">
                  Electrical Engineering
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] font-mono text-zinc-700 tracking-widest">
            © {new Date().getFullYear()} SIJIBOMI FADEYIBI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
