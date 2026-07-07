import { WHATSAPP_LINK } from "@/lib/content";

export default function CtaSection() {
  return (
    <section className="bg-brand-900 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Punya visi besar untuk bisnis Anda?
        </h2>
        <p className="mt-4 text-white/70">
          Mari kita bahas bagaimana VASTA Indonesia bisa membantu mewujudkannya
          jadi solusi teknologi yang benar-benar bekerja.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50"
        >
          Diskusikan Proyek Anda
        </a>
      </div>
    </section>
  );
}
