import { BookOpen, FunctionSquare, Sigma, Timer } from 'lucide-react';

const topics = [
  {
    icon: Timer,
    title: 'Limit',
    desc: 'Pahami perilaku fungsi saat mendekati suatu nilai dengan contoh grafik yang intuitif.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: FunctionSquare,
    title: 'Turunan',
    desc: 'Pelajari konsep laju perubahan, aturan turunan, dan aplikasinya pada optimasi.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Sigma,
    title: 'Integral',
    desc: 'Kuasi luas di bawah kurva, integral tentu/tak tentu, dan teknik substitusi.',
    color: 'from-indigo-500 to-violet-600'
  }
];

export default function Topics() {
  return (
    <section id="materi" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center">
            <BookOpen size={18} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Materi Inti</h2>
            <p className="text-gray-600">Ringkasan konsep dengan animasi kecil dan interaksi cepat.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t) => (
            <article key={t.title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${t.color} text-white grid place-items-center shadow-md`}>
                <t.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{t.desc}</p>

              <div className="mt-6">
                <MiniAnimation topic={t.title} />
              </div>

              <button className="mt-6 inline-flex text-sm font-medium text-black hover:opacity-80">Pelajari lebih lanjut →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniAnimation({ topic }) {
  // Simple SVG animations for conceptual feel
  if (topic === 'Limit') {
    return (
      <svg className="w-full h-24" viewBox="0 0 200 80">
        <defs>
          <linearGradient id="lim" x1="0" x2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <line x1="20" y1="60" x2="180" y2="20" stroke="url(#lim)" strokeWidth="4" />
        <circle cx="160" cy="24" r="6" fill="#111">
          <animate attributeName="cx" values="40;160" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }
  if (topic === 'Turunan') {
    return (
      <svg className="w-full h-24" viewBox="0 0 200 80">
        <path d="M10,60 C60,10 140,10 190,60" fill="none" stroke="#10b981" strokeWidth="3" />
        <circle r="5" fill="#111">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M10,60 C60,10 140,10 190,60" />
        </circle>
        <line x1="0" y1="0" x2="0" y2="0" stroke="#10b981" strokeWidth="2">
          <animate attributeName="x1" values="10;60;140;190" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="y1" values="60;10;10;60" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="x2" values="30;80;160;210" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="y2" values="50;20;20;50" dur="2.2s" repeatCount="indefinite" />
        </line>
      </svg>
    );
  }
  return (
    <svg className="w-full h-24" viewBox="0 0 200 80">
      <defs>
        <linearGradient id="int" x1="0" x2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path d="M20,60 C60,20 140,20 180,60" fill="none" stroke="#c7d2fe" strokeWidth="2" />
      <path d="M20,60 C60,20 140,20 180,60 L180,60 L20,60 Z" fill="url(#int)">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
