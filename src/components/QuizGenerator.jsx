import { useMemo, useState } from 'react';
import { CheckCircle, XCircle, Sparkles } from 'lucide-react';

const bank = {
  Limit: [
    {
      q: 'Nilai limit x→2 dari f(x) = (x^2 − 4)/(x − 2) adalah …',
      options: ['0', '2', '3', '4'],
      a: 3,
      explain: 'Faktorkan (x^2−4)=(x−2)(x+2), maka f(x)=x+2 untuk x≠2. Substitusi 2 menghasilkan 4.'
    },
    {
      q: 'Limit x→0 dari sin x / x (dalam radian) bernilai …',
      options: ['0', '1', 'Tidak ada', '∞'],
      a: 1,
      explain: 'Limit fundamental trigonometri: lim x→0 sin x / x = 1.'
    },
  ],
  Turunan: [
    {
      q: 'Turunan dari f(x)=x^3 adalah …',
      options: ['x^2', '2x', '3x^2', '3x^3'],
      a: 2,
      explain: 'Gunakan aturan pangkat: d/dx x^n = n x^{n-1}, sehingga 3x^2.'
    },
    {
      q: 'Jika y=ln x, maka dy/dx = …',
      options: ['1/x', 'x', 'e^x', 'x ln x'],
      a: 0,
      explain: 'Turunan ln x adalah 1/x untuk x>0.'
    },
  ],
  Integral: [
    {
      q: '∫ x dx = …',
      options: ['x^2/2 + C', '2x + C', 'ln x + C', 'x^3/3 + C'],
      a: 0,
      explain: 'Gunakan aturan kebalikan turunan pangkat: ∫ x^n dx = x^{n+1}/(n+1) + C.'
    },
    {
      q: 'Luas di bawah y=2x pada x∈[0,3] adalah …',
      options: ['6', '7', '8', '9'],
      a: 3,
      explain: '∫_0^3 2x dx = [x^2]_0^3 = 9.'
    },
  ],
};

function sample(arr, n) {
  const copy = [...arr];
  const out = [];
  while (out.length < Math.min(n, copy.length)) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}

export default function QuizGenerator() {
  const [topic, setTopic] = useState('Limit');
  const [difficulty, setDifficulty] = useState('Mudah');
  const [count, setCount] = useState(3);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const generated = useMemo(() => {
    const base = bank[topic] || [];
    // difficulty as tweak: add a filler or keep as is
    const n = Math.max(1, Math.min(6, count));
    return sample(base, n);
  }, [topic, difficulty, count, // eslint-disable-line
  questions]);

  function generate() {
    setQuestions(generated);
    setAnswers({});
    setChecked(false);
  }

  function selectAnswer(qIdx, oIdx) {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
  }

  const score = questions.reduce((acc, q, i) => acc + ((answers[i] ?? -1) === q.a ? 1 : 0), 0);

  return (
    <section id="quiz" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center">
            <Sparkles size={18} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Generator Kuis</h2>
            <p className="text-gray-600">Buat kuis otomatis sesuai topik dan jumlah soal.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-black/10 bg-white p-4">
            <label className="text-sm text-gray-600">Topik</label>
            <select value={topic} onChange={(e)=>setTopic(e.target.value)} className="mt-2 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10">
              {Object.keys(bank).map((t)=>(<option key={t} value={t}>{t}</option>))}
            </select>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-4">
            <label className="text-sm text-gray-600">Tingkat Kesulitan</label>
            <select value={difficulty} onChange={(e)=>setDifficulty(e.target.value)} className="mt-2 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10">
              <option>Mudah</option>
              <option>Menengah</option>
              <option>Sulit</option>
            </select>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-4">
            <label className="text-sm text-gray-600">Jumlah Soal</label>
            <input type="number" min={1} max={6} value={count} onChange={(e)=>setCount(parseInt(e.target.value || '1'))} className="mt-2 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10" />
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-4 flex items-end">
            <button onClick={generate} className="w-full rounded-lg bg-black text-white px-4 py-2 font-medium shadow hover:shadow-md">Generate</button>
          </div>
        </div>

        {questions.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6">
            {questions.map((q, i) => (
              <div key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium">{i + 1}. {q.q}</p>
                  {checked && (
                    (answers[i] === q.a) ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium"><CheckCircle size={16}/> Benar</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-600 text-sm font-medium"><XCircle size={16}/> Salah</span>
                    )
                  )}
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, oi) => {
                    const active = answers[i] === oi;
                    const isCorrect = checked && oi === q.a;
                    const isWrong = checked && active && oi !== q.a;
                    return (
                      <button
                        key={oi}
                        onClick={() => selectAnswer(i, oi)}
                        className={`rounded-lg border px-4 py-3 text-left transition ${
                          isCorrect ? 'border-emerald-500 bg-emerald-50' : isWrong ? 'border-rose-500 bg-rose-50' : active ? 'border-black bg-gray-50' : 'border-black/10 bg-white hover:border-black/20'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {checked && (
                  <p className="mt-3 text-sm text-gray-600"><span className="font-medium">Penjelasan:</span> {q.explain}</p>
                )}
              </div>
            ))}

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">Skor: <span className="font-semibold">{score}</span> / {questions.length}</p>
              {!checked ? (
                <button onClick={() => setChecked(true)} className="rounded-lg bg-black text-white px-5 py-2 text-sm font-medium">Periksa Jawaban</button>
              ) : (
                <div className="flex items-center gap-2">
                  <button onClick={() => {setChecked(false); setAnswers({});}} className="rounded-lg border border-black/10 bg-white px-5 py-2 text-sm font-medium">Ubah Jawaban</button>
                  <button onClick={() => {setQuestions([]); setAnswers({}); setChecked(false);}} className="rounded-lg bg-black text-white px-5 py-2 text-sm font-medium">Reset</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
