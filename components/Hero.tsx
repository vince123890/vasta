import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Radial glow accents */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-brand-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-brand-400/20 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-8">
          <Image
            src="/icon-512.png"
            alt="Mark VASTA Indonesia"
            width={140}
            height={140}
            priority
            className="w-24 drop-shadow-[0_0_40px_rgba(63,143,214,0.55)] sm:w-32"
          />
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100/80">
          We Are Grounded Dreamers
        </p>

        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Berpikir Luas,
          <br />
          <span className="bg-gradient-to-r from-brand-100 via-white to-brand-100 bg-clip-text text-transparent">
            Bekerja Nyata.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          VASTA Indonesia membantu perusahaan mengubah visi besar menjadi
          solusi teknologi yang benar-benar bekerja di lapangan.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-brand-900 shadow-lg shadow-black/20 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Diskusikan Proyek Anda
          </a>
          <a
            href="#layanan"
            className="w-full rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Pelajari Layanan Kami
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/0 to-transparent" />
    </section>
  );
}
