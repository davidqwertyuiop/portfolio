"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-zinc-400 mb-12">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 text-white" />
              <span className="text-zinc-300">{portfolioData.personal.email}</span>
            </a>
            
            <a 
              href={`tel:${portfolioData.personal.phone}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 text-white" />
              <span className="text-zinc-300">{portfolioData.personal.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
