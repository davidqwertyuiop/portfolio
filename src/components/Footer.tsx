export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white">SIJIBOMI</span>
            <span className="text-[10px] font-black tracking-[0.3em] text-zinc-600 uppercase">Engineer + Developer</span>
          </div>
          
          <div className="flex items-center gap-8 text-xs font-black uppercase tracking-widest text-zinc-500">
            <span>© {new Date().getFullYear()} Sijibomi Fadeyibi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span>Built with Next.js 15 & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
