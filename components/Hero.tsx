import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
            We Are Grounded Dreamers
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-900 sm:text-5xl">
            Berpikir Luas,
            <br />
            Bekerja Nyata.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-gray-600 md:mx-0">
            VASTA Indonesia membantu perusahaan mengubah visi besar menjadi
            solusi teknologi yang benar-benar bekerja di lapangan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-brand-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
            >
              Diskusikan Proyek Anda
            </a>
            <a
              href="#layanan"
              className="w-full rounded-full border border-brand-200 px-6 py-3 text-center text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 sm:w-auto"
            >
              Pelajari Layanan Kami
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/icon-512.png"
            alt="Mark VASTA Indonesia"
            width={380}
            height={380}
            priority
            className="w-64 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}
