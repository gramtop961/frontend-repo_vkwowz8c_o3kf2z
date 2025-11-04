import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Belajar Kalkulus jadi lebih mudah dan interaktif
        </h1>
        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto">
          Jelajahi konsep limit, turunan, dan integral dengan animasi 3D yang responsif, contoh visual, dan kuis yang dibuat otomatis.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#materi" className="rounded-lg bg-black text-white px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">Jelajahi Materi</a>
          <a href="#quiz" className="rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-medium hover:border-black/20 transition">Coba Kuis</a>
        </div>
      </div>
    </section>
  );
}
