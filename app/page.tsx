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
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">JASA PEMBUATAN SOFTWARE</p>
            <h1>Software inovatif dibangun dengan <span>standar yang tepat.</span></h1>
            <p className="hero-text">Kami menerjemahkan proses bisnis yang rumit menjadi solusi digital yang praktis, terukur, dan siap bertumbuh bersama perusahaan Anda.</p>
            <div className="hero-actions">
              <a className="button" href="#kontak"><span aria-hidden="true">✦</span> Saya Mau Tanya</a>
              <a className="text-link" href="#portfolio">Lihat karya kami <span aria-hidden="true">→</span></a>
            </div>
            <div className="trust-row">
              <div className="avatar-stack" aria-hidden="true"><span>A</span><span>B</span><span>C</span></div>
              <p><strong>700+ proyek</strong><br />dipercaya bisnis & instansi</p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="experience-chip"><strong>17+</strong><span>Tahun<br />Pengalaman</span></div>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85" alt="Profesional teknologi tersenyum sambil bekerja dengan laptop" />
            <div className="project-chip"><span className="status-dot" /><strong>Project on time</strong><small>Tim profesional & responsif</small></div>
          </div>
        </div>
        <div className="container client-strip">
          <p>Dipercaya oleh perusahaan dan institusi di Indonesia</p>
          <div className="client-logos" aria-label="Daftar klien"><span>TELKOM</span><span>PERTAMINA</span><span>MANDIRI</span><span>KAI</span><span>BRI</span><span>KOMINFO</span></div>
        </div>
      </section>

      <section className="section services" id="layanan">
        <div className="container">
          <SectionHeading eyebrow="LAYANAN KAMI" title={<>Solusi software sesuai<br />kebutuhan bisnis</>} center />
          <div className="service-grid">
            <article className="service-card teal">
              <div><span className="card-number">01</span><Icon>⌘</Icon></div>
              <h3>Aplikasi & Website</h3><p>Produk digital yang cepat, intuitif, dan responsif untuk memperkuat layanan serta operasional bisnis Anda.</p>
              <a href="#kontak">Selengkapnya <span>→</span></a>
            </article>
            <article className="service-card indigo">
              <div><span className="card-number">02</span><Icon>▦</Icon></div>
              <h3>Aplikasi E-Government</h3><p>Sistem pemerintahan terintegrasi yang membantu layanan publik menjadi transparan, mudah, dan efisien.</p>
              <a href="#kontak">Selengkapnya <span>→</span></a>
            </article>
            <article className="service-card blue">
              <div><span className="card-number">03</span><Icon>◎</Icon></div>
              <h3>Aplikasi ERP</h3><p>Satu sistem untuk menghubungkan keuangan, SDM, inventori, penjualan, dan pengambilan keputusan.</p>
              <a href="#kontak">Selengkapnya <span>→</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section advantages">
        <div className="container advantages-grid">
          <div className="advantages-visual">
            <div className="dot-pattern" aria-hidden="true" />
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="Tim software berkolaborasi dalam ruang kerja modern" />
            <div className="quality-badge"><span>✓</span><p><strong>Quality first</strong><small>Software siap digunakan</small></p></div>
          </div>
          <div>
            <SectionHeading eyebrow="KELEBIHAN KAMI" title={<>Kami pahami proses bisnis Anda <span>sebelum membangun software</span></>} />
            <div className="advantage-list">
              <article><Icon>✦</Icon><div><h3>Inovatif</h3><p>Solusi relevan yang memberi dampak nyata, bukan sekadar mengikuti tren.</p></div></article>
              <article><Icon>♢</Icon><div><h3>Bergaransi & Maintenance</h3><p>Pendampingan berkelanjutan agar sistem selalu aman dan optimal.</p></div></article>
              <article><Icon>◴</Icon><div><h3>Berpengalaman</h3><p>Lebih dari 17 tahun menangani kebutuhan lintas industri dan pemerintahan.</p></div></article>
              <article><Icon>♙</Icon><div><h3>Tim Profesional</h3><p>Engineer, analis, dan desainer berdedikasi dalam satu tim yang solid.</p></div></article>
              <article><Icon>✓</Icon><div><h3>Project On Time</h3><p>Milestone transparan dengan progres yang dapat Anda pantau setiap saat.</p></div></article>
            </div>
            <a className="button" href="#kontak">Mulai Konsultasi <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section portfolio" id="portfolio">
        <div className="container">
          <SectionHeading eyebrow="DIPERCAYA BERBAGAI BISNIS" title={<>Solusi nyata dari<br />berbagai proyek</>} center />
          <div className="portfolio-tabs">
            <input defaultChecked type="radio" name="project" id="project-one" />
            <input type="radio" name="project" id="project-two" />
            <input type="radio" name="project" id="project-three" />
            <input type="radio" name="project" id="project-four" />
            <div className="tab-labels" role="tablist" aria-label="Pilih proyek">
              <label htmlFor="project-one">SatuData</label><label htmlFor="project-two">HRIS Pro</label><label htmlFor="project-three">DistribusiKu</label><label htmlFor="project-four">Smart City</label>
            </div>
            <div className="project-panels">
              <article className="project-panel panel-one">
                <div className="browser-mock"><div className="browser-bar"><i /><i /><i /></div><div className="dashboard"><aside><b>N</b><span /><span /><span /><span /></aside><div className="dash-main"><small>RINGKASAN DATA</small><h4>Dashboard SatuData</h4><div className="stat-row"><span><b>1,248</b><small>Dataset</small></span><span><b>42</b><small>Instansi</small></span><span><b>98%</b><small>Tervalidasi</small></span></div><div className="chart"><i /><i /><i /><i /><i /><i /><i /></div></div></div></div>
                <div className="project-copy"><p className="project-kicker">PEMERINTAHAN DIGITAL</p><h3>SatuData Daerah</h3><p>Platform terpadu yang mengubah data lintas instansi menjadi informasi akurat. Proses rekap yang sebelumnya berminggu-minggu kini dapat dilakukan secara real-time.</p><div className="feature-badges"><span><Icon>✦</Icon>Aplikasi inovatif</span><span><Icon>▤</Icon>Desain responsif</span></div><a href="#kontak">Diskusikan proyek serupa →</a></div>
              </article>
              <article className="project-panel panel-two"><div className="browser-mock variant-two"><div className="browser-bar"><i /><i /><i /></div><div className="mock-center"><Icon>♙</Icon><h4>HRIS Pro</h4><div><span /><span /><span /></div></div></div><div className="project-copy"><p className="project-kicker">OPERASIONAL SDM</p><h3>HRIS Pro Terintegrasi</h3><p>Absensi, payroll, penilaian, dan administrasi karyawan terkonsolidasi dalam satu aplikasi yang mudah digunakan seluruh tim.</p><div className="feature-badges"><span><Icon>✓</Icon>Payroll otomatis</span><span><Icon>◴</Icon>Data real-time</span></div></div></article>
              <article className="project-panel panel-three"><div className="browser-mock variant-three"><div className="browser-bar"><i /><i /><i /></div><div className="mock-center"><Icon>↗</Icon><h4>DistribusiKu</h4><div><span /><span /><span /></div></div></div><div className="project-copy"><p className="project-kicker">SUPPLY CHAIN</p><h3>DistribusiKu</h3><p>Sistem pemantauan stok dan pengiriman end-to-end yang membantu perusahaan menekan kesalahan distribusi dan mempercepat pelaporan.</p><div className="feature-badges"><span><Icon>◎</Icon>Tracking langsung</span><span><Icon>▦</Icon>Multi gudang</span></div></div></article>
              <article className="project-panel panel-four"><div className="browser-mock variant-four"><div className="browser-bar"><i /><i /><i /></div><div className="mock-center"><Icon>⌘</Icon><h4>Smart City</h4><div><span /><span /><span /></div></div></div><div className="project-copy"><p className="project-kicker">LAYANAN PUBLIK</p><h3>Command Center Smart City</h3><p>Dashboard terpadu untuk memantau layanan kota, aduan masyarakat, dan indikator strategis dari satu pusat kendali.</p><div className="feature-badges"><span><Icon>◇</Icon>Visualisasi data</span><span><Icon>↗</Icon>Integrasi API</span></div></div></article>
            </div>
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
