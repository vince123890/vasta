import Image from "next/image";
import Link from "next/link";
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
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-brand-50">
                <Image
                  src={item.image}
                  alt={`Tampilan ${item.title}`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {item.category}
                </span>
                <p className="mt-1 font-semibold text-brand-900">{item.title}</p>
                <p className="mt-2 flex-1 text-sm text-gray-600">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                  Lihat Detail
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
