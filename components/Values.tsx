import { VALUES } from "@/lib/content";

export default function Values() {
  return (
    <section id="nilai" className="bg-brand-50/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            Nilai-Nilai Perusahaan
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-brand-900">
            Prinsip yang kami pegang di setiap proyek
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value, index) => (
            <div
              key={value.title}
              className="group relative rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(15,49,87,0.06)] ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(15,49,87,0.18)] hover:ring-brand-200"
            >
              <span className="text-sm font-bold tracking-tight text-brand-300 transition-colors group-hover:text-brand-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-semibold text-brand-900">{value.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
