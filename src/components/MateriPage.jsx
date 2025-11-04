import { BookOpen, Sigma, FunctionSquare, Timer } from 'lucide-react';

function Section({ icon: Icon, title, children, color }) {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${color} text-white grid place-items-center`}>
          <Icon size={18} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="prose prose-slate max-w-none mt-4">
        {children}
      </div>
    </section>
  );
}

export default function MateriPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center">
            <BookOpen size={18} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Materi Kalkulus</h1>
            <p className="text-gray-600">Ringkasan konsep inti dengan contoh singkat dan intuisi visual.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Section icon={Timer} title="Limit" color="from-amber-500 to-orange-600">
            <p>
              Limit menggambarkan perilaku fungsi ketika input mendekati suatu nilai. Misal, (x^2−4)/(x−2) tidak
              terdefinisi di x=2, tetapi nilainya mendekati 4 ketika x→2. Ini disebut limit fungsi di titik.
            </p>
            <ul>
              <li>Limit kiri/kanan: arah pendekatan mempengaruhi nilai.</li>
              <li>Teknik: pemfaktoran, rasionalisasi, dan limit trigonometrik dasar.</li>
            </ul>
            <svg className="w-full h-28 mt-4" viewBox="0 0 220 90">
              <defs>
                <linearGradient id="lim-page" x1="0" x2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
              <line x1="20" y1="70" x2="200" y2="20" stroke="url(#lim-page)" strokeWidth="4" />
              <circle cx="180" cy="24" r="6" fill="#111">
                <animate attributeName="cx" values="40;180" dur="2.2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </Section>

          <Section icon={FunctionSquare} title="Turunan" color="from-emerald-500 to-teal-600">
            <p>
              Turunan menyatakan laju perubahan sesaat. Secara geometris, turunan adalah kemiringan garis singgung
              kurva di suatu titik. Aturan pangkat: d/dx x^n = n x^{n-1}.
            </p>
            <ul>
              <li>Aturan produk, bagi, dan rantai.</li>
              <li>Penerapan: optimasi, kecepatan sesaat, dan sensitivitas.</li>
            </ul>
            <svg className="w-full h-28 mt-4" viewBox="0 0 220 90">
              <path d="M10,70 C70,15 150,15 210,70" fill="none" stroke="#10b981" strokeWidth="3" />
              <circle r="5" fill="#111">
                <animateMotion dur="2.4s" repeatCount="indefinite" path="M10,70 C70,15 150,15 210,70" />
              </circle>
            </svg>
          </Section>

          <Section icon={Sigma} title="Integral" color="from-indigo-500 to-violet-600">
            <p>
              Integral tak tentu adalah kebalikan turunan, sedangkan integral tentu menghitung akumulasi (mis. luas di bawah
              kurva). Teorema Dasar Kalkulus menghubungkan keduanya.
            </p>
            <ul>
              <li>Teknik: substitusi, parsial, pecahan sederhana.</li>
              <li>Penerapan: luas, volume, dan kerja.</li>
            </ul>
            <svg className="w-full h-28 mt-4" viewBox="0 0 220 90">
              <path d="M20,70 C70,25 150,25 200,70" fill="none" stroke="#c7d2fe" strokeWidth="2" />
              <path d="M20,70 C70,25 150,25 200,70 L200,70 L20,70 Z" fill="#818cf8" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.25;0.6" dur="2.6s" repeatCount="indefinite" />
              </path>
            </svg>
          </Section>
        </div>
      </div>
    </main>
  );
}
