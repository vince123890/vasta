import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Layanan
          </h2>
          <p className="mt-3 text-2xl font-bold text-brand-900">
            Solusi teknologi yang kami kerjakan
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-black/5 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-brand-600" />
              <p className="font-semibold text-brand-900">{service.title}</p>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
