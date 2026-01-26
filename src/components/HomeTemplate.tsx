"use client";

import { useRole } from "@/components/RoleContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export function HomeTemplate() {
  const { role } = useRole();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={role}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white"
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        
        {/* Global Accent Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-zinc-900/40 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
