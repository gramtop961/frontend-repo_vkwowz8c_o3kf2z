import { Rocket, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">Kalkulus Interaktif</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/materi" className="text-gray-700 hover:text-black transition">Materi</Link>
            <Link to="/soal" className="text-gray-700 hover:text-black transition">Soal</Link>
            <a href="#tentang" className="text-gray-700 hover:text-black transition">Tentang</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/soal" className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition">
              <Brain size={16} /> Mulai Kuis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
