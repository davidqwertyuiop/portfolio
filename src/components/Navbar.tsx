"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "@/components/RoleContext";
import { cn } from "@/lib/utils";
import { Cpu, Code, Wallet, Download, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const { role } = useRole();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5 bg-black/60 px-4">
      <div className="container mx-auto h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
            role === "software" 
              ? "bg-purple-600/20 text-purple-400 border border-purple-500/20" 
              : "bg-red-600/20 text-red-500 border border-red-500/20"
          )}>
            {role === "software" ? <Code className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white leading-tight">SIJIBOMI</span>
            <span className={cn(
              "text-[10px] font-medium tracking-[0.2em] transform uppercase",
              role === "software" ? "text-purple-400" : "text-red-500"
            )}>
              {role === "software" ? "Software Engineer" : "Electrical Engineer"}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Stack</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                <Download className="w-4 h-4" />
                CV
              </span>
              <div className="flex items-center gap-2">
              </div>
            </div>
          </div>

          <button className="h-10 px-6 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Wallet className="w-4 h-4" />
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
