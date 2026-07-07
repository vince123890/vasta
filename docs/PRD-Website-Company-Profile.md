# PRD — Website Company Profile VASTA Indonesia

## 1. Ringkasan

| Item | Detail |
|---|---|
| **Produk** | Website company profile PT Visi Anak Bangsa Solusi Teknologi Aplikatif (VASTA Indonesia) |
| **Jenis** | Single-tenant marketing site, one-page scroll (kemungkinan multi-route kecil untuk halaman kontak jika dibutuhkan) |
| **Tech stack** | Next.js (App Router), React, TypeScript, CSS Modules atau Tailwind CSS |
| **Target rilis** | MVP sederhana — bisa live cepat, konten mudah diedit tanpa CMS |
| **Referensi** | Struktur umum website software house lokal (mis. dot.co.id): Hero → Tentang → Layanan → Proses/Keunggulan → Kontak |

## 2. Tujuan & Latar Belakang

VASTA Indonesia adalah software house yang baru berdiri. Website ini menjadi kartu nama digital pertama perusahaan — dipakai untuk:

1. Memperkenalkan identitas brand (nama, tagline, filosofi) ke calon klien dan mitra.
2. Menjelaskan layanan yang ditawarkan (system analysis, web/mobile development, data & automation).
3. Membangun kredibilitas melalui nilai-nilai perusahaan dan tone yang membumi-namun-percaya diri.
4. Menyediakan jalur kontak yang jelas untuk calon klien mengajukan kebutuhan proyek.

**Non-goals (di luar scope MVP ini):**
- Tidak ada portfolio/studi kasus proyek (perusahaan baru berdiri, belum ada klien untuk ditampilkan).
- Tidak ada halaman blog/artikel.
- Tidak ada CMS/admin panel — konten di-hardcode di kode, diedit langsung oleh developer.
- Tidak ada multi-bahasa (EN/ID toggle) — bahasa utama Indonesia, tagline internasional cukup ditampilkan sebagai aksen.
- Tidak ada sistem login/dashboard klien.

## 3. Target Pengguna

| Persona | Kebutuhan saat mengunjungi situs |
|---|---|
| Calon klien (perusahaan/startup yang cari vendor software) | Ingin cepat tahu: apa yang dikerjakan VASTA, kredibilitas, cara menghubungi |
| Calon partner/investor | Ingin memahami visi, nilai, dan arah perusahaan |
| Calon talent/kandidat kerja | (Sekunder) Ingin merasakan budaya kerja dari tone & value yang ditampilkan |

## 4. Struktur Halaman (Information Architecture)

Single page scroll dengan anchor navigation, sesuai keputusan "sangat sederhana":

```
/ (Home — one-page)
├── Header (sticky nav: Logo, Tentang, Layanan, Proses, Kontak, CTA button)
├── Hero Section
├── Tentang Kami (About)
├── Nilai-Nilai Perusahaan (Values)
├── Layanan (Services)
├── Proses Kerja (How We Work)
├── CTA Section (ajakan diskusi proyek)
├── Kontak (Contact)
└── Footer
```

Tidak ada halaman terpisah di MVP ini. Kontak berupa section + mailto/WhatsApp link (bukan form dengan backend), supaya tetap sederhana tanpa perlu server/DB.

## 5. Detail Konten per Section

### 5.1 Header
- Logo VASTA (dari `docs/Gemini_Generated_Image_4leiau4leiau4lei.png`, versi dioptimasi untuk web)
- Nav links: Tentang, Layanan, Proses, Kontak
- CTA button: "Diskusikan Proyek" → scroll ke section Kontak atau mailto

### 5.2 Hero
- Headline: tagline utama **"Berpikir Luas, Bekerja Nyata"**
- Sub-headline: one-liner dari brand doc — *"VASTA Indonesia membantu perusahaan mengubah visi besar menjadi solusi teknologi yang benar-benar bekerja di lapangan."*
- Tagline internasional sebagai aksen kecil: *"We Are Grounded Dreamers"*
- CTA primer: "Diskusikan Proyek Anda"
- CTA sekunder (opsional): "Pelajari Layanan Kami" → scroll ke Layanan
- Visual: logo/mark VASTA sebagai elemen grafis (swoosh biru)

### 5.3 Tentang Kami
- Nama legal + nama brand + akronim V-A-S-T-A dengan makna tiap huruf (bisa ditampilkan sebagai 5 kartu kecil atau list bertingkat)
- Paragraf deskripsi perusahaan (dari brand doc bagian 3)
- Kalimat penutup soal "anak bangsa" — penekanan identitas lokal yang bisa bersaing secara global

### 5.4 Nilai-Nilai Perusahaan
5 value dari brand doc, ditampilkan sebagai grid kartu (1 baris icon + judul + deskripsi singkat):
1. Visi Luas
2. Anak Bangsa
3. Solutif
4. Teknologi yang Relevan
5. Aplikatif

### 5.5 Layanan
Diturunkan dari deskripsi perusahaan ("system analysis dan arsitektur enterprise, pengembangan aplikasi web dan mobile, hingga solusi data dan otomasi"). Ditampilkan sebagai 4 kartu layanan:
1. **System Analysis & Enterprise Architecture** — analisis kebutuhan bisnis dan rancangan arsitektur sistem.
2. **Web Development** — aplikasi web custom, dashboard, sistem internal.
3. **Mobile Development** — aplikasi mobile Android/iOS.
4. **Data & Automation Solutions** — integrasi data, otomasi proses bisnis.

*(Catatan: konten placeholder ini perlu dikonfirmasi ulang ke user sebelum final — brand doc tidak merinci layanan secara eksplisit per kategori, hanya menyebutnya dalam satu kalimat deskripsi.)*

### 5.6 Proses Kerja
Alur kerja sederhana 4 langkah (placeholder umum software house, perlu validasi user):
1. **Konsultasi** — memahami masalah dan kebutuhan bisnis klien
2. **Analisis & Rancangan** — system analysis dan desain solusi
3. **Pengembangan** — eksekusi build dengan stack yang relevan
4. **Deploy & Dukungan** — rilis dan pendampingan pasca-launch

### 5.7 CTA Section
- Kalimat penutup ajakan, tone percaya diri-membumi
- Button ke email/WhatsApp

### 5.8 Kontak
- Email perusahaan (placeholder — perlu diisi user, contoh: `hello@vasta.co.id`)
- Nomor WhatsApp/telepon (placeholder — perlu diisi user)
- Alamat/lokasi (placeholder — perlu diisi user, brand doc hanya menyebut "Berbasis di Indonesia")
- Link sosial media (LinkedIn/Instagram — sesuai contoh bio di brand doc), placeholder jika belum ada akun

### 5.9 Footer
- Logo kecil + nama legal PT
- Copyright tahun berjalan
- Tagline kecil

## 6. Kebutuhan Data / Input dari User (Blocking sebelum development final)

Beberapa data belum tersedia di brand doc dan **wajib dikonfirmasi** sebelum konten final ditulis (development bisa jalan dengan placeholder yang jelas ditandai):

- [ ] Email kontak resmi
- [ ] Nomor WhatsApp/telepon
- [ ] Alamat kantor (kota minimal)
- [ ] Link LinkedIn/Instagram (jika sudah ada)
- [ ] Daftar layanan final (apakah 4 kategori di atas sudah sesuai, atau ada penyesuaian)
- [ ] Apakah logo yang ada (`Gemini_Generated_Image_4leiau4leiau4lei.png`) final untuk dipakai di web, atau perlu versi lain (favicon, versi putih untuk dark background, dst.)

## 7. Non-Functional Requirements

| Aspek | Requirement |
|---|---|
| **Responsive** | Mobile-first, harus tampil baik di layar HP, tablet, desktop |
| **Performance** | Skor Lighthouse Performance ≥ 90 di halaman one-page ini (aset ringan, no heavy JS framework tambahan) |
| **SEO dasar** | Meta title/description, Open Graph tags, favicon dari logo, semantic HTML |
| **Aksesibilitas** | Kontras warna sesuai WCAG AA (logo biru di atas putih/gelap harus tetap terbaca), alt text di semua gambar |
| **Browser support** | Browser modern evergreen (Chrome, Edge, Safari, Firefox terbaru) |
| **Hosting** | Next.js — asumsi deploy ke Vercel (default), bisa disesuaikan jika user punya preferensi lain |

## 8. Desain & Brand Guideline

- **Warna utama:** Biru (turunan dari warna logo — perlu extract hex code dari file logo saat implementasi)
- **Warna pendukung:** Putih/abu netral untuk latar, agar kesan "membumi" dan bersih
- **Tipografi:** Sans-serif modern, tegas namun tidak kaku (mencerminkan "percaya diri tapi tidak arogan")
- **Tone visual:** Bersih, minim, banyak whitespace, elemen grafis swoosh dari logo bisa dipakai sebagai aksen dekoratif di background hero
- **Bahasa:** Indonesia formal-hangat, hindari hype berlebihan dan jargon kosong (sesuai tone of voice brand doc §5)

## 9. Struktur Teknis (Proposed)

```
vasta_ind/
├── docs/
│   ├── VASTA-Indonesia-Brand-Identity.md
│   ├── PRD-Website-Company-Profile.md
│   └── Gemini_Generated_Image_4leiau4leiau4lei.png
├── public/
│   ├── logo.png (versi web-optimized)
│   ├── favicon.ico
│   └── og-image.png
├── app/
│   ├── layout.tsx
│   ├── page.tsx (one-page: merender semua section)
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Values.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── CtaSection.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── next.config.js
├── package.json
└── tsconfig.json
```

Styling: Tailwind CSS (cepat untuk styling one-page sederhana, konsisten, mudah maintain tanpa perlu banyak file CSS custom).

## 10. Success Metrics (Kualitatif untuk MVP)

Karena ini bukan produk dengan traffic terukur di awal, sukses MVP didefinisikan sebagai:
- Website live dan bisa diakses publik
- Semua informasi dari brand identity doc tersampaikan akurat
- Tampilan profesional, konsisten dengan brand (warna, tone, logo)
- Tidak ada broken link/placeholder yang terekspos ke publik (semua kontak sudah data asli sebelum go-live)
- Responsive di HP (mayoritas pengunjung awal kemungkinan dari share link di WhatsApp/LinkedIn mobile)

## 11. Out of Scope / Next Phase (Ide lanjutan, bukan MVP)

- Halaman portfolio/studi kasus setelah ada klien pertama
- Blog/insight teknis untuk SEO jangka panjang
- Form kontak dengan backend + email notifikasi
- Multi-bahasa (ID/EN)
- CMS ringan (mis. Sanity/Notion-as-CMS) agar konten bisa diubah non-developer
- Halaman karir jika mulai rekrutmen terbuka

## 12. Open Questions

1. Apakah perlu domain khusus (misal `vasta.co.id`) — apakah sudah dimiliki?
2. Apakah butuh Google Analytics/tracking sejak awal, atau nanti?
3. Apakah CTA "Diskusikan Proyek" mengarah ke WhatsApp, email, atau form sederhana (tanpa backend, kirim via mailto)?

---

*Dokumen ini disusun berdasarkan `VASTA-Indonesia-Brand-Identity.md` per 2026-07-07. Section 6 dan 12 berisi item yang perlu dikonfirmasi user sebelum development konten final dimulai — development struktur/kode bisa tetap berjalan paralel dengan placeholder yang ditandai jelas.*
