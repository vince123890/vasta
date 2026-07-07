import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/lib/content";

export default function Portfolio() {
  const [featured, ...rest] = PORTFOLIO;

  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            Portfolio
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-brand-900">
            Proyek yang pernah kami kerjakan
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PortfolioCard item={featured} large />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {rest.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  large = false,
}: {
  item: (typeof PORTFOLIO)[number];
  large?: boolean;
}) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(15,49,87,0.2)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-brand-50">
        <Image
          src={item.image}
          alt={`Tampilan ${item.title}`}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 580px, 100vw"
              : "(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-500">
          {item.category}
        </span>
        <p className={`mt-1 font-semibold text-brand-900 ${large ? "text-lg" : ""}`}>
          {item.title}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          Lihat Detail
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
