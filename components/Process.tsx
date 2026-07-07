import { PROCESS_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section id="proses" className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Proses Kerja
          </h2>
          <p className="mt-3 text-2xl font-bold text-brand-900">
            Bagaimana kami mengeksekusi proyek Anda
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <span className="text-3xl font-extrabold text-brand-100">
                {item.step}
              </span>
              <p className="mt-3 font-semibold text-brand-900">{item.title}</p>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
