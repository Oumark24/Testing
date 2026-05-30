import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2416] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 text-2xl font-serif text-[#FAF6EF] mb-4">
          <Heart className="w-6 h-6 text-[#C8965A]" />
          <span>Kind<span className="italic text-[#C8965A]">Nest</span></span>
        </div>
        
        <p className="text-[#FAF6EF]/40 text-sm mb-6">
          Bringing warmth, presence & dignity to those who need it most.
        </p>

        <div className="flex items-center justify-center gap-6 text-[#FAF6EF]/30 text-sm">
          <a href="mailto:opamir2468@gmail.com" className="hover:text-[#C8965A] transition-colors">
            Contact
          </a>
          <span>•</span>
          <span>Founded with love by Alison Nunez</span>
        </div>

        <div className="mt-8 pt-8 border-t border-[#FAF6EF]/10 text-[#FAF6EF]/30 text-xs">
          © {new Date().getFullYear()} KindNest. All rights reserved. Made with compassion.
        </div>
      </div>
    </footer>
  );
}
