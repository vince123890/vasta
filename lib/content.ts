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
  { href: "#portfolio", label: "Portfolio" },
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

export const PORTFOLIO = [
  {
    slug: "point-of-sales",
    title: "Aplikasi Point of Sales",
    category: "Web Development",
    image: "/portfolio/point-of-sales.jpg",
    description:
      "Sistem kasir digital untuk mencatat transaksi, stok, dan laporan penjualan secara real-time.",
    longDescription:
      "Bandar POS adalah sistem kasir (Point of Sales) berbasis web yang dirancang untuk membantu pelaku usaha mencatat transaksi penjualan, mengelola stok barang, dan memantau laporan bisnis dari satu tempat. Sistem ini dibangun agar mudah dipakai oleh kasir di lapangan sekaligus memberi pemilik usaha visibilitas penuh atas operasional tokonya.",
    highlights: [
      "Pencatatan transaksi penjualan secara real-time",
      "Manajemen stok dan produk terpusat",
      "Laporan penjualan untuk pengambilan keputusan bisnis",
      "Sistem login untuk keamanan akses kasir",
    ],
    url: "https://bandar-pos-1.vercel.app/login",
  },
  {
    slug: "company-profile",
    title: "Aplikasi Company Profile",
    category: "Web Development",
    image: "/portfolio/company-profile.jpg",
    description:
      "Website profil perusahaan yang menampilkan informasi, kegiatan, dan layanan secara profesional.",
    longDescription:
      "Website company profile untuk Paroki Yohanes Gabriel Perboyre (Stasi YGP) yang menampilkan jadwal kegiatan, informasi liturgi, pengumuman, dan kegiatan sosial komunitas. Dibangun dengan desain bersih dan navigasi sederhana agar informasi mudah diakses oleh jemaat maupun pengunjung baru.",
    highlights: [
      "Jadwal misa dan kalender liturgi",
      "Pengumuman dan artikel kegiatan komunitas",
      "Desain bersih dengan navigasi yang jelas",
      "Informasi kontak dan kegiatan sosial",
    ],
    url: "https://stasi-ygp-psi.vercel.app/",
  },
  {
    slug: "prediksi-crypto",
    title: "Aplikasi Prediksi Crypto",
    category: "Data & Automation",
    image: "/portfolio/prediksi-crypto.jpg",
    description:
      "Alat bantu analisis dan prediksi pergerakan harga Bitcoin berbasis data.",
    longDescription:
      "Aplikasi berbasis data yang membantu pengguna menganalisis dan memprediksi pergerakan harga Bitcoin. Dibangun untuk mengubah data pasar mentah menjadi insight yang lebih mudah dibaca, sehingga pengguna bisa mengambil keputusan berbasis data alih-alih tebakan semata.",
    highlights: [
      "Analisis tren pergerakan harga Bitcoin",
      "Visualisasi data pasar yang mudah dipahami",
      "Diproses dari data historis harga crypto",
    ],
    url: "https://bitcoin-prediksi-1.vercel.app/",
  },
  {
    slug: "ide-konten",
    title: "Aplikasi Ide Konten",
    category: "Web Development",
    image: "/portfolio/ide-konten.jpg",
    description:
      "Generator ide konten A-Z untuk membantu kebutuhan konten kreator dan tim marketing.",
    longDescription:
      "A-Z Content Generator adalah aplikasi yang membantu kreator dan tim marketing keluar dari kebuntuan ide dengan menghasilkan variasi ide konten secara sistematis dari A sampai Z. Cocok dipakai untuk brainstorming konten media sosial, blog, maupun kampanye marketing.",
    highlights: [
      "Generate ide konten secara sistematis A-Z",
      "Membantu proses brainstorming tim marketing/konten",
      "Antarmuka simpel dan cepat dipakai",
    ],
    url: "https://a-z-generator-ktr3.vercel.app/",
  },
  {
    slug: "pembelajaran-marketing",
    title: "Aplikasi Pembelajaran Marketing",
    category: "Web Development",
    image: "/portfolio/pembelajaran-marketing.jpg",
    description:
      "Platform edukasi marketing yang membantu pengguna belajar strategi pemasaran secara terstruktur.",
    longDescription:
      "Marketing OS adalah platform pembelajaran yang menyajikan materi strategi marketing secara terstruktur, membantu pengguna memahami konsep pemasaran dari dasar hingga penerapan praktis. Dirancang sebagai sistem belajar mandiri yang bisa diakses kapan saja.",
    highlights: [
      "Materi marketing terstruktur dari dasar ke praktis",
      "Format belajar mandiri, bisa diakses kapan saja",
      "Cocok untuk individu maupun tim marketing",
    ],
    url: "https://marketing-os-amber-omega.vercel.app/",
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
