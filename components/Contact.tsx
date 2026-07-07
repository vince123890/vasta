import { WHATSAPP_LINK } from "@/lib/content";

export default function Contact() {
  return (
    <section id="kontak" className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Kontak
        </h2>
        <p className="mt-3 text-2xl font-bold text-brand-900">
          Mari mulai percakapan
        </p>
        <p className="mt-4 text-gray-600">
          Cara tercepat untuk menghubungi kami adalah melalui WhatsApp.
          Ceritakan kebutuhan proyek Anda, dan tim kami akan segera merespons.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
