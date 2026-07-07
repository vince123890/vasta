import { PROCESS_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section id="proses" className="bg-brand-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100/70">
            Proses Kerja
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white">
            Bagaimana kami mengeksekusi proyek Anda
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, index) => (
            <li
              key={item.step}
              className="relative border-t border-white/10 pt-6 pr-6 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="text-sm font-semibold tabular-nums text-brand-100/50">
                {item.step}
              </span>
              <p className="mt-3 font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
              {index < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-0 hidden text-white/20 lg:block"
                >
                  &rarr;
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
