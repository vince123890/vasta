import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PORTFOLIO } from "@/lib/content";

export function generateStaticParams() {
  return PORTFOLIO.map((item) => ({ slug: item.slug }));
}

function getItem(slug: string) {
  return PORTFOLIO.find((item) => item.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);

  if (!item) return {};

  return {
    title: `${item.title} — VASTA Indonesia`,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem(slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="border-b border-black/5 bg-brand-50/40 py-16">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/#portfolio"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              &larr; Kembali ke Portfolio
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-600">
              {item.category}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              {item.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Kunjungi Aplikasi
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src={item.image}
                alt={`Tampilan ${item.title}`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-xl font-bold text-brand-900">Tentang Aplikasi</h2>
            <p className="mt-4 text-gray-700">{item.longDescription}</p>

            <h2 className="mt-10 text-xl font-bold text-brand-900">
              Fitur Utama
            </h2>
            <ul className="mt-4 space-y-3">
              {item.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
