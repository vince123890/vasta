import { PORTFOLIO } from "@/lib/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Portfolio
          </h2>
          <p className="mt-3 text-2xl font-bold text-brand-900">
            Proyek yang pernah kami kerjakan
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-black/5 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-brand-600" />
              <p className="font-semibold text-brand-900">{item.title}</p>
              <p className="mt-2 flex-1 text-sm text-gray-600">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                Lihat Aplikasi
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
