import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import Topics from './components/Topics';
import QuizGenerator from './components/QuizGenerator';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSpline />
      <Topics />
      <QuizGenerator />

      <footer id="tentang" className="border-t border-black/5 py-10 mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="font-semibold">Kalkulus Interaktif</h3>
              <p className="text-sm text-gray-600 mt-1">Belajar modern dengan animasi, contoh visual, dan kuis adaptif.</p>
            </div>
            <div className="text-sm text-gray-600 md:text-center">Dibuat untuk membantu siswa memahami konsep inti kalkulus.</div>
            <div className="md:text-right">
              <a href="#quiz" className="inline-flex rounded-lg bg-black text-white px-4 py-2 text-sm font-medium">Mulai Kuis</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
