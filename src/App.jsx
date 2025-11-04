import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MateriPage from './components/MateriPage';
import SoalPage from './components/SoalPage';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/materi" element={<MateriPage />} />
          <Route path="/soal" element={<SoalPage />} />
        </Routes>

        <footer id="tentang" className="border-t border-black/5 py-10 mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <h3 className="font-semibold">Kalkulus Interaktif</h3>
                <p className="text-sm text-gray-600 mt-1">Belajar modern dengan animasi, contoh visual, dan kuis adaptif.</p>
              </div>
              <div className="text-sm text-gray-600 md:text-center">Dibuat untuk membantu siswa memahami konsep inti kalkulus.</div>
              <div className="md:text-right">
                <a href="/soal" className="inline-flex rounded-lg bg-black text-white px-4 py-2 text-sm font-medium">Mulai Kuis</a>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
