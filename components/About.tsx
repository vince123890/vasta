import { AKRONIM } from "@/lib/content";

export default function About() {
  return (
    <section id="tentang" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Tentang Kami
            </h2>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-brand-900">
              Visi besar hanya berarti kalau bisa diwujudkan jadi solusi yang
              benar-benar dipakai.
            </p>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Berbasis di Indonesia, kami menangani kebutuhan teknologi lintas
              skala — dari system analysis dan arsitektur enterprise,
              pengembangan aplikasi web dan mobile, hingga solusi data dan
              otomasi.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Visi kami bukan cuma soal kode dan sistem — ini soal anak bangsa
              yang percaya bahwa teknologi buatan sendiri bisa bersaing, bisa
              dipercaya, dan bisa jadi solusi yang sesungguhnya untuk tantangan
              nyata.
            </p>
          </div>

          <div className="space-y-3">
            {AKRONIM.map((item) => (
              <div
                key={item.letter}
                className="flex items-start gap-4 rounded-xl border border-black/[0.06] p-4 transition-colors hover:bg-brand-50/40"
              >
                <span className="font-mono text-2xl font-bold leading-none text-brand-500">
                  {item.letter}
                </span>
                <div>
                  <p className="font-semibold text-brand-900">{item.word}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{item.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
