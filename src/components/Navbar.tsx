"use client";

import Link from "next/link";
import { useRole } from "@/components/RoleContext";
import { cn } from "@/lib/utils";
import { Cpu, Code, Wallet } from "lucide-react";

export function Navbar() {
  const { role, toggleRole } = useRole();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Sijibomi<span className={cn("ml-1", role === "software" ? "text-purple-400" : "text-amber-400")}>Fadeyibi</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleRole}
              className={cn(
                "relative h-9 px-4 rounded-full flex items-center gap-2 text-xs font-semibold transition-all duration-300 border",
                role === "software" 
                  ? "bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20" 
                  : "bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/20"
              )}
            >
              {role === "software" ? <Code className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
              <span>{role === "software" ? "Software Engineer" : "Electrical Engineer"}</span>
            </button>
            
            <button className="h-9 px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold flex items-center gap-2 transition-colors">
              <Wallet className="w-4 h-4" />
              <span>Select Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
