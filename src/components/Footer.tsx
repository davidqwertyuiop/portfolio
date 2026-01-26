export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Sijibomi Fadeyibi. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
