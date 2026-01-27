"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "@/components/RoleContext";
import { cn } from "@/lib/utils";
import { Cpu, Code, Wallet, Download, Github, Zap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

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

          {role === "software" ? (
            <button className="h-10 px-6 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <Wallet className="w-4 h-4" />
              Connect
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center border border-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              >
                <Zap className="w-5 h-5 fill-current" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-red-500 leading-none uppercase tracking-tighter">System</span>
                <span className="text-[12px] font-black text-white leading-none uppercase">Online</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
