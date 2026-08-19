type Showcase = {
  sector: string;
  name: string;
  institution: string;
  summary: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  url?: string;
  priority?: boolean;
};

const showcases: Showcase[] = [
  {
    sector: "PENERIMAAN MURID",
    name: "SPMB Disdikpora PPU",
    institution: "Disdikpora Penajam Paser Utara",
    summary: "Penerimaan murid digital dengan verifikasi, seleksi, dan pengumuman terintegrasi.",
    image: "/products/spmb-disdikpora-ppu.webp",
    width: 1440,
    height: 900,
    alt: "Tampilan halaman utama SPMB Disdikpora Penajam Paser Utara",
    url: "https://spmb-disdikpora.penajamkab.go.id/",
    priority: true,
  },
  {
    sector: "MUTASI SISWA",
    name: "SIMAS",
    institution: "Disdikpora Penajam Paser Utara",
    summary: "Sistem pengajuan dan pemantauan mutasi siswa secara daring dalam satu layanan.",
    image: "/products/simas-disdikpora-ppu.webp",
    width: 1600,
    height: 681,
    alt: "Tampilan SIMAS Sistem Mutasi Siswa Disdikpora Penajam Paser Utara",
    url: "https://simas-disdikpora.penajamkab.go.id/",
  },
  {
    sector: "DATA PENDIDIKAN",
    name: "SIPENA",
    institution: "Disdikpora Penajam Paser Utara",
    summary: "Pendataan dan pemetaan GTK untuk mendukung perencanaan pendidikan berbasis data.",
    image: "/products/sipena-disdikpora-ppu.webp",
    width: 1600,
    height: 925,
    alt: "Tampilan SIPENA Sistem Pendataan dan Pemerataan GTK Penajam Paser Utara",
    url: "https://sipena-disdikpora.penajamkab.go.id/",
  },
  {
    sector: "PENERIMAAN MURID",
    name: "SPMB Kabupaten Paser",
    institution: "Pemerintah Kabupaten Paser",
    summary: "Layanan pendaftaran murid baru dengan jalur, kuota, dan status pendaftaran yang jelas.",
    image: "/products/spmb-paser.webp",
    width: 1600,
    height: 817,
    alt: "Tampilan layanan SPMB Online Kabupaten Paser",
    url: "https://spmb.paserkab.go.id/",
  },
  {
    sector: "LAYANAN PUBLIK",
    name: "Website DPMPTSP PPU",
    institution: "DPMPTSP Penajam Paser Utara",
    summary: "Portal investasi dan layanan publik yang memudahkan akses informasi serta perizinan.",
    image: "/products/dpmptsp-ppu.webp",
    width: 1440,
    height: 900,
    alt: "Tampilan website resmi DPMPTSP Penajam Paser Utara",
    url: "https://dpmptsp.penajamkab.go.id/",
  },
  {
    sector: "EKOSISTEM UMKM",
    name: "Nukarin",
    institution: "Platform UMKM Digital",
    summary: "Ekosistem warung digital yang menghubungkan POS, pemetaan, dan analitik usaha.",
    image: "/products/nukarin.webp",
    width: 1440,
    height: 900,
    alt: "Tampilan platform Warung Digital Nusantara Nukarin",
    url: "https://www.nukarin.id/",
  },
  {
    sector: "MANAJEMEN SEKOLAH",
    name: "Astro Management School",
    institution: "Produk Astro Digital Solution",
    summary: "Manajemen data siswa, absensi RFID, konseling, dan administrasi akademik berbasis cloud.",
    image: "/products/astro-management-school.webp",
    width: 1440,
    height: 900,
    alt: "Tampilan Astro Management School untuk manajemen sekolah",
    url: "https://ams.astrodigiso.id/",
  },
  {
    sector: "ABSENSI SEKOLAH",
    name: "Astro Absensi Digital",
    institution: "Solusi sekolah berbasis data",
    summary: "Pencatatan kehadiran, sinkronisasi data, dan rekapitulasi sekolah dalam satu dashboard.",
    image: "/products/astro-absensi-digital.webp",
    width: 1600,
    height: 743,
    alt: "Tampilan dashboard Sistem Absensi Digital Astro untuk sekolah",
  },
];

export default function PortfolioSection({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-heading-row">
          <div className="section-heading">
            <p className="eyebrow">PORTOFOLIO TERPILIH</p>
            <h2>Sistem digital yang sudah <br />bekerja di lapangan</h2>
          </div>
          <div className="portfolio-intro">
            <p>Proyek nyata untuk pendidikan, layanan publik, dan UMKM—dirancang bersama instansi serta pengguna di Kalimantan Timur.</p>
          </div>
        </div>
        <div className="showcase-grid" aria-label="Daftar delapan proyek portofolio">
        {showcases.map((showcase) => {
          const destination = showcase.url ?? whatsappUrl;
          const action = showcase.url ? "Kunjungi situs" : "Diskusikan proyek";

          return (
            <figure key={showcase.name} className="showcase-card">
              <div className="showcase-shot">
                <img src={showcase.image} width={showcase.width} height={showcase.height} alt={showcase.alt} loading={showcase.priority ? undefined : "lazy"} />
                {showcase.url && <span className="showcase-live"><i aria-hidden="true" /> Situs aktif</span>}
              </div>

              <figcaption>
                <p className="showcase-sector">{showcase.sector}</p>
                <h3>{showcase.name}</h3>
                <p className="showcase-institution">{showcase.institution}</p>
                <p className="showcase-summary">{showcase.summary}</p>
                <a href={destination} target="_blank" rel="noreferrer" aria-label={`${action} ${showcase.name}`}>
                  {action}<span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
          );
        })}
        </div>
      </div>
    </section>
  );
}
