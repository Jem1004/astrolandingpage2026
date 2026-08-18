import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NusaTech — Software untuk Bisnis yang Bertumbuh",
  description:
    "Partner pengembangan aplikasi, ERP, dan solusi e-government yang memahami proses bisnis Anda.",
};

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="icon" aria-hidden="true">{children}</span>
);

const SectionHeading = ({ eyebrow, title, center = false }: { eyebrow: string; title: React.ReactNode; center?: boolean }) => (
  <div className={`section-heading${center ? " center" : ""}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
  </div>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#beranda" aria-label="NusaTech, kembali ke beranda">
            <span className="brand-mark">N</span>
            <span>Nusa<span>Tech</span></span>
          </a>

          <nav aria-label="Navigasi utama">
            <a className="active" href="#beranda">Beranda</a>
            <details className="nav-dropdown">
              <summary>Layanan <span>⌄</span></summary>
              <div className="mega-menu">
                <div className="mega-intro">
                  <p className="eyebrow">SOLUSI DIGITAL</p>
                  <h3>Teknologi yang bekerja untuk Anda</h3>
                  <p>Dari ide hingga sistem siap pakai, tim kami mendampingi setiap tahapnya.</p>
                  <a href="#layanan">Lihat semua layanan →</a>
                </div>
                <div className="mega-links">
                  <a href="#layanan"><Icon>⌘</Icon><span><strong>Aplikasi & Website</strong><small>Mobile, web, GIS, integrasi</small></span></a>
                  <a href="#layanan"><Icon>▦</Icon><span><strong>Aplikasi ERP</strong><small>HRIS, payroll, inventory</small></span></a>
                  <a href="#layanan"><Icon>◎</Icon><span><strong>E-Government</strong><small>Portal, e-data, smart city</small></span></a>
                  <a href="#kontak"><Icon>↗</Icon><span><strong>Konsultasi IT</strong><small>Roadmap transformasi digital</small></span></a>
                </div>
              </div>
            </details>
            <a href="#portfolio">Portofolio</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="button button-small desktop-cta" href="#kontak">Hubungi Kami</a>
          <details className="mobile-menu">
            <summary aria-label="Buka navigasi"><span /><span /><span /></summary>
            <div>
              <a href="#beranda">Beranda</a><a href="#layanan">Layanan</a><a href="#portfolio">Portofolio</a>
              <a href="#tentang">Tentang Kami</a><a href="#faq">FAQ</a><a href="#kontak">Hubungi Kami</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero" id="beranda">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">JASA PEMBUATAN SOFTWARE</p>
            <h1>Software inovatif dibangun dengan <span>standar yang tepat.</span></h1>
            <p className="hero-text">Kami bantu memetakan kebutuhan, menguji alur, lalu membangun software yang mudah dipakai dan siap mengikuti perkembangan organisasi Anda.</p>
            <div className="hero-actions">
              <a className="button" href="#kontak"><span aria-hidden="true">✦</span> Saya Mau Tanya</a>
              <a className="text-link" href="#portfolio">Lihat karya kami <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-assurances" aria-label="Pendekatan kerja NusaTech">
              <span><i>01</i>Proses dipahami lebih dulu</span>
              <span><i>02</i>Rilis dibangun bertahap</span>
              <span><i>03</i>Tim didampingi setelah rilis</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="experience-chip"><strong>01</strong><span>Discovery<br />sebelum development</span></div>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85" alt="Profesional teknologi tersenyum sambil bekerja dengan laptop" />
            <div className="project-chip"><span className="status-dot" /><strong>Milestone transparan</strong><small>Progres dapat ditinjau bersama</small></div>
          </div>
        </div>
        <div className="container capability-strip">
          <p>Area solusi yang kami kerjakan</p>
          <div aria-label="Area solusi"><span>WEB APP</span><span>MOBILE</span><span>ERP</span><span>DATA</span><span>INTEGRASI</span><span>E-GOV</span></div>
        </div>
      </section>

      <section className="section services" id="layanan">
        <div className="container">
          <div className="services-heading-row">
            <SectionHeading eyebrow="LAYANAN KAMI" title={<>Solusi software sesuai<br />kebutuhan bisnis</>} />
            <p>Kami tidak memulai dari daftar fitur. Setiap layanan dimulai dari tujuan, pengguna, dan proses yang perlu diperbaiki.</p>
          </div>
          <div className="service-showcase">
            <article className="service-card service-featured teal">
              <div className="service-card-top"><span className="card-number">01 / PRODUK DIGITAL</span><Icon>⌘</Icon></div>
              <div className="service-card-copy"><h3>Aplikasi & Website</h3><p>Produk digital yang cepat, intuitif, dan responsif untuk memperkuat layanan serta operasional bisnis Anda.</p></div>
              <ul><li>Web application</li><li>Mobile application</li><li>Website layanan</li><li>GIS & integrasi API</li></ul>
              <a href="#kontak">Bahas kebutuhan <span>→</span></a>
            </article>
            <div className="service-stack">
              <article className="service-card indigo">
                <div className="service-card-top"><span className="card-number">02 / LAYANAN PUBLIK</span><Icon>▦</Icon></div>
                <h3>Aplikasi E-Government</h3><p>Sistem terintegrasi untuk layanan publik yang lebih mudah diakses, dipantau, dan dikelola.</p>
                <div className="service-tags"><span>Portal</span><span>Satu Data</span><span>Pengaduan</span></div>
              </article>
              <article className="service-card blue">
                <div className="service-card-top"><span className="card-number">03 / OPERASIONAL</span><Icon>◎</Icon></div>
                <h3>Aplikasi ERP</h3><p>Satu sistem untuk menghubungkan keuangan, SDM, inventori, penjualan, dan pelaporan.</p>
                <div className="service-tags"><span>HRIS</span><span>Finance</span><span>Inventory</span></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section advantages">
        <div className="container advantages-grid">
          <div className="advantages-visual">
            <div className="dot-pattern" aria-hidden="true" />
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="Tim software berkolaborasi dalam ruang kerja modern" />
            <div className="quality-badge"><span>✓</span><p><strong>Validasi bersama</strong><small>Sebelum fitur dikembangkan</small></p></div>
          </div>
          <div>
            <SectionHeading eyebrow="KELEBIHAN KAMI" title={<>Kami pahami proses bisnis Anda <span>sebelum membangun software</span></>} />
            <p className="advantages-lead">Cara kerja konsultatif membantu kami menemukan perubahan yang benar-benar dibutuhkan—bukan sekadar menambah aplikasi baru.</p>
            <div className="process-list">
              <article><span>01</span><div><h3>Pahami konteks</h3><p>Aktor, alur, dokumen, dan titik hambatan dipetakan bersama.</p></div></article>
              <article><span>02</span><div><h3>Uji arah solusi</h3><p>Prototipe dan model data memastikan keputusan bisa diperiksa sejak awal.</p></div></article>
              <article><span>03</span><div><h3>Bangun bertahap</h3><p>Rilis kecil menjaga progres tetap terlihat dan koreksi tetap ringan.</p></div></article>
              <article><span>04</span><div><h3>Dampingi penggunaan</h3><p>Dokumentasi, pelatihan, dan maintenance menjadi bagian dari hasil.</p></div></article>
            </div>
            <a className="button" href="#kontak">Mulai Konsultasi <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-heading-row">
            <SectionHeading eyebrow="CONTOH RUANG LINGKUP" title={<>Dari masalah operasional<br />menjadi arah sistem</>} />
            <p>Contoh berikut menggambarkan pola kebutuhan yang umum kami temui. Rancangan akhirnya selalu disesuaikan dengan proses organisasi Anda.</p>
          </div>
          <article className="featured-project">
            <div className="solution-map" aria-label="Ilustrasi alur sistem SatuData">
              <div className="map-head"><span>NUSATECH / SYSTEM MAP</span><strong>SatuData Daerah</strong></div>
              <div className="map-flow">
                <div><i>01</i><strong>Sumber data</strong><small>Unit & instansi</small></div><b>→</b>
                <div><i>02</i><strong>Validasi</strong><small>Standar & kualitas</small></div><b>→</b>
                <div><i>03</i><strong>Katalog</strong><small>Akses & riwayat</small></div><b>→</b>
                <div><i>04</i><strong>Pelaporan</strong><small>Informasi terpilah</small></div>
              </div>
              <p>Ilustrasi ruang lingkup — bukan tampilan produk final.</p>
            </div>
            <div className="project-copy"><p className="project-kicker">DATA LINTAS INSTANSI</p><h3>SatuData Daerah</h3><dl><div><dt>Kondisi</dt><dd>Data tersebar, format berbeda, dan proses rekap sulit ditelusuri.</dd></div><div><dt>Arah solusi</dt><dd>Satu katalog data dengan validasi, hak akses, serta riwayat perubahan yang jelas.</dd></div><div><dt>Fokus</dt><dd>Integrasi sumber, kualitas data, dan pelaporan lintas peran.</dd></div></dl><a href="#kontak">Diskusikan kebutuhan serupa →</a></div>
          </article>
          <div className="project-index">
            <article><span>02</span><p>OPERASIONAL SDM</p><h3>HRIS terintegrasi</h3><small>Absensi · payroll · administrasi</small></article>
            <article><span>03</span><p>SUPPLY CHAIN</p><h3>Sistem distribusi</h3><small>Stok · pengiriman · pelaporan</small></article>
            <article><span>04</span><p>LAYANAN PUBLIK</p><h3>Command center</h3><small>Aduan · indikator · integrasi API</small></article>
          </div>
        </div>
      </section>

      <section className="section about" id="tentang">
        <div className="container about-grid">
          <div className="about-copy">
            <SectionHeading eyebrow="TENTANG KAMI" title={<>Membangun Indonesia<br /><span>melalui teknologi</span></>} />
            <p>NusaTech lahir dari keyakinan bahwa teknologi terbaik adalah teknologi yang benar-benar dipakai. Sejak 2009, kami mendampingi perusahaan dan instansi pemerintah memahami masalah, menyederhanakan proses, lalu menghadirkan software yang bekerja dengan baik.</p>
            <p>Hari ini, tim lintas disiplin kami telah membantu lebih dari 700 proyek di Indonesia—dengan semangat kolaborasi yang tetap sama seperti hari pertama.</p>
            <div className="award-row"><div><Icon>★</Icon><p><strong>Top IT Consultant</strong><small>Indonesia Digital Award 2025</small></p></div><div><Icon>♢</Icon><p><strong>ISO 9001 Certified</strong><small>Quality Management System</small></p></div></div>
            <a className="text-link" href="#kontak">Kenal NusaTech lebih dekat <span>→</span></a>
          </div>
          <div className="about-visual">
            <div className="stats-card"><div><strong>700<span>+</span></strong><small>Project IT selesai</small></div><i /><div><strong>17<span>+</span></strong><small>Tahun pengalaman</small></div></div>
            <div className="office-photo"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85" alt="Kantor NusaTech yang modern dan kolaboratif" /><a href="#kontak" aria-label="Putar video profil perusahaan">▶</a></div>
            <div className="dot-pattern" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="ripple r1" /><div className="ripple r2" /><div className="ripple r3" />
        <div className="container">
          <SectionHeading eyebrow="APA KATA KLIEN KAMI" title={<>Pengalaman bekerja sama<br />dalam membangun software</>} center />
          <div className="quote-mark" aria-hidden="true">“</div>
          <div className="testimonial-track">
            <article id="testi-one"><div className="testimonial-logo">MANDIRI</div><blockquote>“NusaTech tidak langsung bicara fitur. Mereka memahami alur kerja kami terlebih dahulu, lalu memberi solusi yang bahkan belum terpikirkan oleh tim internal.”</blockquote><div className="client-profile"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=85" alt="Foto Arief Wibowo" /><p><strong>Arief Wibowo</strong><small>VP Digital Operations · Mandiri Group</small></p></div></article>
            <article id="testi-two"><div className="testimonial-logo">TELKOM</div><blockquote>“Kolaborasinya transparan dan sangat terstruktur. Setiap milestone jelas, tim responsif, dan produknya mudah diadopsi oleh pengguna di lapangan.”</blockquote><div className="client-profile"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=85" alt="Foto Laras Pramesti" /><p><strong>Laras Pramesti</strong><small>Head of Product · Telkom Indonesia</small></p></div></article>
            <article id="testi-three"><div className="testimonial-logo">KOMINFO</div><blockquote>“Platform yang dikembangkan berhasil memangkas waktu rekap data secara signifikan. Pendampingan setelah peluncuran juga sangat membantu tim kami.”</blockquote><div className="client-profile"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=85" alt="Foto Dimas Nugraha" /><p><strong>Dimas Nugraha</strong><small>Program Director · Instansi Pemerintah</small></p></div></article>
          </div>
          <div className="testimonial-nav"><a href="#testi-one" aria-label="Testimoni pertama">1</a><a href="#testi-two" aria-label="Testimoni kedua">2</a><a href="#testi-three" aria-label="Testimoni ketiga">3</a></div>
        </div>
      </section>

      <section className="section partners">
        <div className="container"><SectionHeading eyebrow="PARTNER TEKNOLOGI KAMI" title={<>Berkolaborasi untuk solusi<br />yang lebih baik</>} center /><div className="partner-logos"><span><b>aws</b><small>amazon web services</small></span><span><b>Google</b><small>Cloud</small></span><span><b>Microsoft</b><small>Solutions Partner</small></span><span><b>neuCentrIX</b><small>data center</small></span><span><b>Oracle</b><small>Cloud Infrastructure</small></span><span><b>Alibaba</b><small>Cloud</small></span></div></div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div><SectionHeading eyebrow="FREQUENTLY ASKED QUESTION" title={<>Pertanyaan yang<br />sering ditanyakan</>} /><p className="faq-lead">Belum menemukan jawaban yang Anda cari? Tim kami siap membantu memahami kebutuhan Anda.</p><a className="text-link" href="#kontak">Tanyakan langsung <span>→</span></a></div>
          <div className="accordion">
            <details open><summary>Berapa lama proses pembuatan aplikasi?<span>⌄</span></summary><p>Durasi menyesuaikan kompleksitas dan ruang lingkup. Proyek terfokus umumnya memerlukan 2–4 bulan, sementara sistem enterprise bertahap dapat berjalan 6 bulan atau lebih.</p></details>
            <details><summary>Apakah saya mendapat garansi dan maintenance?<span>⌄</span></summary><p>Ya. Setiap proyek dilengkapi masa garansi, dokumentasi, pelatihan pengguna, dan opsi maintenance berkelanjutan sesuai kebutuhan operasional.</p></details>
            <details><summary>Bisakah aplikasi diintegrasikan dengan sistem lama?<span>⌄</span></summary><p>Bisa. Tim kami akan mengaudit sistem yang ada dan merancang integrasi API atau migrasi data dengan pendekatan yang aman.</p></details>
            <details><summary>Bagaimana cara memulai konsultasi?<span>⌄</span></summary><p>Cukup hubungi kami melalui formulir atau WhatsApp. Sesi konsultasi awal gratis dan tidak mengikat.</p></details>
            <details><summary>Apakah melayani klien di luar Yogyakarta?<span>⌄</span></summary><p>Tentu. Kami melayani klien di seluruh Indonesia dengan proses kolaborasi hybrid maupun sepenuhnya remote.</p></details>
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontak">
        <div className="container cta-banner">
          <div className="cta-photo"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85" alt="Konsultan NusaTech berdiskusi dengan klien" /></div>
          <div className="cta-copy"><p className="eyebrow">MARI BERTUMBUH BERSAMA</p><h2>Masih bertahan dengan sistem yang rumit?</h2><p>Jangan sampai terlambat. Beralih ke aplikasi NusaTech dan buat pekerjaan tim Anda jauh lebih sederhana.</p><a className="button button-white" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Konsultasi Sekarang! <span>→</span></a><small>Dapatkan konsultasi awal tanpa biaya</small></div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand"><a className="brand inverse" href="#beranda"><span className="brand-mark">N</span><span>NusaTech</span></a><p>Partner teknologi untuk bisnis dan layanan publik yang terus bergerak maju.</p><div className="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a></div></div>
          <div className="footer-links"><div><h3>Tentang</h3><a href="#tentang">Tentang Kami</a><a href="#portfolio">Portofolio</a><a href="#">Blog & Insight</a><a href="#">Karir</a></div><div><h3>Website & Aplikasi</h3><a href="#layanan">Mobile Apps</a><a href="#layanan">Web Base Apps</a><a href="#layanan">Company Website</a><a href="#layanan">GIS & Integrasi</a></div><div><h3>Aplikasi ERP</h3><a href="#layanan">HRIS & Payroll</a><a href="#layanan">Keuangan</a><a href="#layanan">Inventory</a><a href="#layanan">CRM & Penjualan</a><a href="#layanan">Project Management</a></div><div><h3>E-Government</h3><a href="#layanan">Satu Data</a><a href="#layanan">Smart City</a><a href="#layanan">Portal Layanan</a><a href="#layanan">E-Planning</a><a href="#layanan">Sistem Aduan</a></div></div>
        </div>
        <div className="container footer-bottom"><div><strong>Berasosiasi</strong><span>KADIN · APTIKNAS</span></div><div><strong>Liputan Pers</strong><span>DailySocial · Tech in Asia · Bisnis</span></div><a href="#kontak">Layanan Aduan →</a></div>
        <div className="copyright">Copyright © 2026 NusaTech. All rights reserved.</div>
      </footer>

      <a className="whatsapp" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" aria-label="Hubungi NusaTech melalui WhatsApp">☎<span>Chat dengan kami</span></a>
    </main>
  );
}
