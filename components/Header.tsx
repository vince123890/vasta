import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/icon-512.png"
            alt="Logo VASTA Indonesia"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-bold tracking-tight text-brand-900">
            VASTA Indonesia
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Diskusikan Proyek
        </a>
      </div>
    </header>
  );
}
