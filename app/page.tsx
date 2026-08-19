import type { Metadata } from "next";
import PortfolioSection from "./portfolio-section";
import ServicesSection from "./services-section";
import TeamSection from "./team-section";
import TestimonialsSection from "./testimonials-section";

export const metadata: Metadata = {
  title: "Astro Digital Solution — Software House Penajam Paser Utara & Paser",
  description: "Partner pengembangan aplikasi web, mobile, AI, dan automasi untuk bisnis, sekolah, serta instansi di Penajam Paser Utara, Paser, dan seluruh Kalimantan Timur.",
};

const whatsappUrl = "https://wa.me/6282158736885";
const Icon = ({ children }: { children: React.ReactNode }) => <span className="icon" aria-hidden="true">{children}</span>;
const SectionHeading = ({ eyebrow, title, center = false }: { eyebrow: string; title: React.ReactNode; center?: boolean }) => <div className={`section-heading${center ? " center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>;
const structuredData = { "@context": "https://schema.org", "@type": "SoftwareCompany", name: "Astro Digital Solution", url: "https://astrodigiso.id", telephone: "+62 821 5873 6885", description: "Partner pengembangan aplikasi untuk bisnis, sekolah, dan layanan publik di Penajam Paser Utara, Paser, dan Kalimantan Timur.", areaServed: ["Penajam Paser Utara", "Paser", "Kalimantan Timur", "Balikpapan", "Samarinda"] };

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header"><nav className="nav-bar container" aria-label="Navigasi utama">
        <a className="brand" href="#beranda" aria-label="Astro Digital Solution, kembali ke beranda"><img className="brand-mark" src="/astro-mark.webp" alt="" width="34" height="34" /><span>Astro <span>Digital Solution</span></span></a>
        <div className="nav-bar-links"><a className="active" href="#beranda">Beranda</a><details className="nav-dropdown"><summary>Layanan <span>⌄</span></summary><div className="mega-menu"><div className="mega-intro"><p className="eyebrow">SOLUSI DIGITAL LOKAL</p><h3>Teknologi yang dekat dengan kebutuhan Anda</h3><p>Dari usaha kecil hingga sekolah, kami membantu merapikan proses kerja dengan sistem yang mudah digunakan.</p><a href="#layanan">Lihat semua layanan →</a></div><div className="mega-links"><a href="#layanan"><Icon>▦</Icon><span><strong>Kasir & POS</strong><small>Penjualan, stok, dan laporan</small></span></a><a href="#layanan"><Icon>⌘</Icon><span><strong>Website Usaha</strong><small>Profil resmi yang lebih dipercaya</small></span></a><a href="#layanan"><Icon>◎</Icon><span><strong>Sistem Sekolah</strong><small>PPDB, absensi, rapor, dan CMS</small></span></a><a href="#kontak"><Icon>↗</Icon><span><strong>Konsultasi IT</strong><small>Pendampingan langsung dari nol</small></span></a></div></div></details><a href="#portfolio">Karya</a><a href="#tim">Tim</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a></div>
        <a className="button button-small nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Chat WhatsApp</a><details className="mobile-menu"><summary aria-label="Buka navigasi"><span /><span /><span /></summary><div><a href="#beranda">Beranda</a><a href="#layanan">Layanan</a><a href="#portfolio">Karya</a><a href="#tim">Tim</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Hubungi WhatsApp</a></div></details>
      </nav></header>

      <section className="hero" id="beranda">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">PARTNER TEKNOLOGI · PPU · PASER · KALTIM</p>
            <h1>Teknologi lokal, <span>didampingi sampai digunakan.</span></h1>
            <p className="hero-text">Kami membantu bisnis, sekolah, dan instansi di Penajam Paser Utara, Paser, dan seluruh Kalimantan Timur membangun sistem digital dengan proses yang jelas dan pendampingan yang mudah dijangkau.</p>
            <div className="hero-actions">
              <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Diskusikan kebutuhan <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#portfolio">Lihat proyek kami <span aria-hidden="true">→</span></a>
            </div>
            <dl className="hero-proof" aria-label="Bukti pengalaman Astro Digital Solution">
              <div><dt>30+</dt><dd>Proyek selesai</dd></div>
              <div><dt>6+</dt><dd>Tahun mendampingi</dd></div>
              <div><dt>PPU &amp; Paser</dt><dd>Wilayah layanan utama</dd></div>
            </dl>
          </div>
          <figure className="hero-visual">
            <div className="experience-chip"><strong>PPU · Paser</strong><span>Pendampingan dekat<br />dan terarah</span></div>
            <img src="/hero-team-ppu-v2.webp" width="1448" height="1086" fetchPriority="high" decoding="async" alt="Tim software Indonesia di Kalimantan Timur berdiskusi mengenai proyek digital" />
            <figcaption>Visual representatif · profesional teknologi Indonesia</figcaption>
          </figure>
        </div>
        <div className="container capability-strip"><p>Solusi yang kami tangani</p><div aria-label="Area solusi"><span>KASIR POS</span><span>WEBSITE</span><span>PPDB</span><span>ABSENSI</span><span>CMS SEKOLAH</span><span>KONSULTASI</span></div></div>
      </section>

      <ServicesSection whatsappUrl={whatsappUrl} />

      <section className="section advantages"><div className="container advantages-grid"><div className="advantages-visual"><div className="dot-pattern" aria-hidden="true" /><img src="/konsultasi-lokal-ppu.webp" width="1122" height="1402" loading="lazy" alt="Konsultan Astro berdiskusi dengan pelaku usaha dan pengelola sekolah di Kalimantan Timur" /><div className="quality-badge"><span>✓</span><p><strong>Tim lokal Kaltim</strong><small>Bisa diskusi dan pelatihan langsung</small></p></div></div><div><SectionHeading eyebrow="MENGAPA ASTRO" title={<>Teknologi yang dekat dengan <span>cara kerja Anda</span></>} /><p className="advantages-lead">Kami memahami kondisi usaha dan sekolah di daerah. Solusi disusun bersama, dijelaskan dengan bahasa yang mudah dipahami, lalu didampingi sampai benar-benar digunakan.</p><div className="process-list"><article><span>01</span><div><h3>Dekat dan mudah dijangkau</h3><p>Tim melayani Kalimantan Timur sehingga diskusi, survei, dan pelatihan dapat dijadwalkan secara langsung maupun daring.</p></div></article><article><span>02</span><div><h3>Harga sesuai kebutuhan lokal</h3><p>Ruang lingkup disusun berdasarkan prioritas agar investasi digital tetap masuk akal.</p></div></article><article><span>03</span><div><h3>Paham kebutuhan di lapangan</h3><p>Kami tumbuh di daerah yang sama dan memahami tantangan UMKM, sekolah, serta layanan publik.</p></div></article><article><span>04</span><div><h3>Bantuan manusia sungguhan</h3><p>Anda berkomunikasi dengan tim yang memahami proyek, bukan sekadar balasan otomatis.</p></div></article></div><a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Mulai Konsultasi <span>→</span></a></div></div></section>

      <PortfolioSection whatsappUrl={whatsappUrl} />

      <TeamSection whatsappUrl={whatsappUrl} />

      <section className="section about" id="tentang"><div className="container about-grid"><div className="about-copy"><SectionHeading eyebrow="TENTANG KAMI" title={<>Tumbuh di Kaltim,<br /><span>bekerja untuk Indonesia</span></>} /><p>Astro Digital Solution adalah software house yang berfokus di Penajam Paser Utara dan Paser, serta melayani Kalimantan Timur, membantu UMKM, sekolah, dan instansi beralih dari proses manual ke sistem digital yang lebih rapi.</p><p>Selama lebih dari enam tahun, kami membangun solusi yang relevan dengan kebutuhan daerah—dengan komunikasi yang mudah, biaya yang realistis, dan pendampingan setelah sistem digunakan.</p><div className="award-row"><div><Icon>⌂</Icon><p><strong>Berbasis di Kaltim</strong><small>Kalimantan Timur</small></p></div><div><Icon>◎</Icon><p><strong>Melayani lintas wilayah</strong><small>Balikpapan · Samarinda · sekitarnya</small></p></div></div><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Kenal Astro lebih dekat <span>→</span></a></div><div className="about-visual"><div className="stats-card"><div><strong>30<span>+</span></strong><small>Proyek selesai</small></div><i /><div><strong>6<span>+</span></strong><small>Tahun mendampingi</small></div></div><div className="office-photo"><img src="/ruang-kerja-astro-ppu.webp" width="1122" height="1402" loading="lazy" alt="Ruang kerja tim Astro Digital Solution di Kalimantan Timur" /></div><div className="dot-pattern" aria-hidden="true" /></div></div></section>

      <TestimonialsSection />

      <section className="section partners"><div className="container"><SectionHeading eyebrow="FOKUS KAMI" title={<>Dekat dengan kebutuhan<br />masyarakat dan organisasi lokal</>} center /><div className="partner-logos"><span><b>UMKM</b><small>Kuliner & jasa</small></span><span><b>Retail</b><small>Toko & persediaan</small></span><span><b>Sekolah</b><small>Administrasi digital</small></span><span><b>PPDB</b><small>Penerimaan murid</small></span><span><b>Instansi</b><small>Layanan publik</small></span><span><b>Kaltim</b><small>Wilayah layanan</small></span></div></div></section>

      <section className="section faq" id="faq"><div className="container faq-grid"><div><SectionHeading eyebrow="PERTANYAAN UMUM" title={<>Hal yang sering<br />ditanyakan</>} /><p className="faq-lead">Ceritakan kondisi usaha atau sekolah Anda. Tim kami akan membantu memetakan langkah yang paling masuk akal.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Tanyakan langsung <span>→</span></a></div><div className="accordion"><details open><summary>Layanan apa saja yang tersedia?<span>⌄</span></summary><p>Kami mengembangkan aplikasi kasir dan POS, website profil usaha, sistem sekolah, PPDB online, absensi, rapor, CMS sekolah, serta konsultasi IT.</p></details><details><summary>Wilayah mana yang dilayani?<span>⌄</span></summary><p>Fokus utama kami Penajam Paser Utara dan Paser, sehingga pertemuan dan pendampingan langsung paling mudah dijadwalkan di dua wilayah ini. Kami juga melayani Balikpapan, Samarinda, dan wilayah lain di Kalimantan Timur, serta proyek luar daerah secara daring.</p></details><details><summary>Apakah tim bisa datang langsung?<span>⌄</span></summary><p>Bisa. Untuk kebutuhan di area layanan, pertemuan, survei, dan pelatihan langsung dapat dijadwalkan bersama tim.</p></details><details><summary>Bagaimana cara memulai proyek?<span>⌄</span></summary><p>Hubungi kami melalui WhatsApp dan ceritakan masalah yang ingin diselesaikan. Kami akan membantu menyusun kebutuhan dan prioritas awalnya.</p></details><details><summary>Apakah ada pendampingan setelah sistem jadi?<span>⌄</span></summary><p>Ya. Pendampingan, pelatihan pengguna, dan dukungan teknis disesuaikan dengan kebutuhan operasional setiap proyek.</p></details></div></div></section>

      <section className="contact-section" id="kontak"><div className="container cta-banner"><div className="cta-photo"><img src="/konsultasi-umkm-ppu.webp" width="1536" height="1024" loading="lazy" alt="Konsultan Astro membantu pelaku UMKM Kalimantan Timur merencanakan digitalisasi usaha" /></div><div className="cta-copy"><p className="eyebrow">MARI MULAI DARI KEBUTUHAN ANDA</p><h2>Saatnya bisnis Anda tampil lebih profesional.</h2><p>Astro Digital Solution siap membantu digitalisasi usaha dan sekolah dengan cara yang mudah dipahami, proses yang jelas, dan biaya yang masuk akal.</p><a className="button button-white" href={whatsappUrl} target="_blank" rel="noreferrer">Hubungi WhatsApp <span>→</span></a><small>0821 5873 6885 · Respon cepat selama jam kerja</small></div></div></section>

      <footer><div className="container footer-main"><div className="footer-brand"><a className="brand inverse" href="#beranda"><img className="brand-mark" src="/astro-mark.webp" alt="" width="34" height="34" /><span>Astro Digital Solution</span></a><p>Partner pengembangan aplikasi untuk UMKM, sekolah, dan layanan publik di Penajam Paser Utara, Paser, dan Kalimantan Timur.</p><a className="footer-contact" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp 0821 5873 6885</a></div><div className="footer-links"><div><h3>Navigasi</h3><a href="#layanan">Layanan</a><a href="#portfolio">Karya</a><a href="#tim">Tim</a><a href="#tentang">Tentang</a><a href="#faq">FAQ</a></div><div><h3>Layanan</h3><a href="#layanan">Kasir & POS</a><a href="#layanan">Website Usaha</a><a href="#layanan">Sistem Sekolah</a><a href="#layanan">PPDB Online</a></div><div><h3>Wilayah</h3><span>Penajam Paser Utara</span><span>Paser</span><span>Balikpapan</span><span>Samarinda</span></div><div><h3>Kontak</h3><a href={whatsappUrl} target="_blank" rel="noreferrer">0821 5873 6885</a><a href="https://astrodigiso.id">astrodigiso.id</a></div></div></div><div className="container footer-bottom"><div><strong>Wilayah utama</strong><span>Kalimantan Timur</span></div><div><strong>Fokus utama</strong><span>Penajam Paser Utara · Paser</span></div><a href={whatsappUrl} target="_blank" rel="noreferrer">Konsultasi via WhatsApp →</a></div><div className="copyright">© 2026 Astro Digital Solution — astrodigiso.id</div></footer>
      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hubungi Astro Digital Solution melalui WhatsApp">☎<span>Chat dengan kami</span></a>
    </main>
  );
}
