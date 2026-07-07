import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-brand-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center">
        <div className="flex items-center gap-2">
          <Image
            src="/icon-512.png"
            alt="Logo VASTA Indonesia"
            width={28}
            height={28}
            className="rounded-sm"
          />
          <span className="text-base font-bold">VASTA Indonesia</span>
        </div>
        <p className="text-sm text-white/70">
          PT Visi Anak Bangsa Solusi Teknologi Aplikatif
        </p>
        <p className="text-xs italic text-white/50">
          Berpikir Luas, Bekerja Nyata
        </p>
        <p className="text-xs text-white/40">
          &copy; {year} VASTA Indonesia. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
