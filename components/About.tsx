import { AKRONIM } from "@/lib/content";

export default function About() {
  return (
    <section id="tentang" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Tentang Kami
          </h2>
          <p className="mt-4 text-gray-700">
            VASTA Indonesia adalah perusahaan software house yang lahir dari
            satu keyakinan sederhana: visi yang besar hanya berarti kalau bisa
            diwujudkan jadi solusi yang benar-benar dipakai. Berbasis di
            Indonesia, kami menangani kebutuhan teknologi lintas skala — dari
            system analysis dan arsitektur enterprise, pengembangan aplikasi
            web dan mobile, hingga solusi data dan otomasi.
          </p>
          <p className="mt-4 text-gray-700">
            Visi kami bukan cuma soal kode dan sistem — ini soal anak bangsa
            yang percaya bahwa teknologi buatan sendiri bisa bersaing, bisa
            dipercaya, dan bisa jadi solusi yang sesungguhnya untuk tantangan
            nyata.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {AKRONIM.map((item) => (
            <div
              key={item.letter}
              className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 text-center"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {item.letter}
              </div>
              <p className="font-semibold text-brand-900">{item.word}</p>
              <p className="mt-1 text-xs text-gray-500">{item.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
