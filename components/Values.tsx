import { VALUES } from "@/lib/content";

export default function Values() {
  return (
    <section id="nilai" className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Nilai-Nilai Perusahaan
          </h2>
          <p className="mt-3 text-2xl font-bold text-brand-900">
            Prinsip yang kami pegang di setiap proyek
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value, index) => (
            <div
              key={value.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <span className="text-sm font-bold text-brand-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-semibold text-brand-900">{value.title}</p>
              <p className="mt-2 text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
