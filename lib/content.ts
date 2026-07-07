// TODO: ganti nomor WhatsApp placeholder ini dengan nomor resmi VASTA Indonesia sebelum go-live.
export const WHATSAPP_NUMBER = "628XXXXXXXXXX"; // format: 62 diikuti nomor, tanpa spasi/strip
export const WHATSAPP_MESSAGE =
  "Halo VASTA Indonesia, saya ingin diskusi mengenai kebutuhan proyek.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#kontak", label: "Kontak" },
];

export const AKRONIM = [
  { letter: "V", word: "Visi", meaning: "Cara pandang jauh ke depan, arah yang jelas" },
  { letter: "A", word: "Anak Bangsa", meaning: "Identitas lokal, kebanggaan sebagai karya Indonesia" },
  { letter: "S", word: "Solusi", meaning: "Fokus pada penyelesaian masalah nyata, bukan sekadar produk" },
  { letter: "T", word: "Teknologi", meaning: "Domain kerja: software, sistem, aplikasi" },
  { letter: "A", word: "Aplikatif", meaning: "Hasil yang bisa benar-benar dipakai, bukan konsep di atas kertas" },
];

export const VALUES = [
  {
    title: "Visi Luas",
    description: "Melihat masalah dari berbagai sudut sebelum membangun solusi.",
  },
  {
    title: "Anak Bangsa",
    description: "Bangga membangun teknologi lokal yang setara kualitas global.",
  },
  {
    title: "Solutif",
    description: "Setiap proyek dimulai dari masalah nyata klien, bukan dari template.",
  },
  {
    title: "Teknologi yang Relevan",
    description: "Memilih stack dan pendekatan sesuai kebutuhan, bukan tren semata.",
  },
  {
    title: "Aplikatif",
    description: "Semua yang dibangun harus bisa dipakai, diukur, dan memberi dampak.",
  },
];

export const SERVICES = [
  {
    title: "System Analysis & Enterprise Architecture",
    description: "Analisis kebutuhan bisnis dan rancangan arsitektur sistem yang kokoh untuk jangka panjang.",
  },
  {
    title: "Web Development",
    description: "Aplikasi web custom, dashboard, dan sistem internal yang dibangun sesuai proses bisnis Anda.",
  },
  {
    title: "Mobile Development",
    description: "Aplikasi mobile Android & iOS yang responsif, stabil, dan siap dipakai pengguna nyata.",
  },
  {
    title: "Data & Automation Solutions",
    description: "Integrasi data lintas sistem dan otomasi proses bisnis untuk efisiensi operasional.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Memahami masalah dan kebutuhan bisnis klien secara menyeluruh.",
  },
  {
    step: "02",
    title: "Analisis & Rancangan",
    description: "System analysis dan desain solusi yang tepat sasaran.",
  },
  {
    step: "03",
    title: "Pengembangan",
    description: "Eksekusi build dengan stack teknologi yang relevan dengan kebutuhan.",
  },
  {
    step: "04",
    title: "Deploy & Dukungan",
    description: "Rilis ke production dan pendampingan pasca-launch.",
  },
];
