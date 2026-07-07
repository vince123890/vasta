import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Layanan
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-brand-900">
              Solusi teknologi yang kami kerjakan
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Empat area utama yang paling sering kami tangani untuk klien —
              dari perancangan sistem sampai eksekusi ke tangan pengguna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`group border-t border-black/[0.06] py-6 pr-4 transition-colors hover:bg-brand-50/40 sm:px-6 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <span className="font-mono text-xs text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-semibold text-brand-900">
                  {service.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
