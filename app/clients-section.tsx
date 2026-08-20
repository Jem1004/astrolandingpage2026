type Client = {
  name: string;
  descriptor: string;
  logo: string;
};

// Logo asli dari folder logo-client/, dioptimasi ke /public/clients/*.webp.
const clients: Client[] = [
  {
    name: "Disdikpora PPU",
    descriptor: "Dinas Pendidikan",
    logo: "/clients/disdikpora-ppu.webp",
  },
  {
    name: "DPMPTSP PPU",
    descriptor: "Perizinan & Investasi",
    logo: "/clients/dpmptsp-ppu.webp",
  },
  {
    name: "Pemkab Paser",
    descriptor: "Pemerintah Daerah",
    logo: "/clients/pemkab-paser.webp",
  },
  {
    name: "FKPP PPU",
    descriptor: "Forum Komunikasi Pondok Pesantren",
    logo: "/clients/fkpp-ppu.webp",
  },
  {
    name: "SMK Muhammadiyah 1 PPU",
    descriptor: "Sekolah Menengah Kejuruan",
    logo: "/clients/smk-muh1-ppu.webp",
  },
  {
    name: "SMP Negeri 1 PPU",
    descriptor: "Sekolah Menengah Pertama",
    logo: "/clients/smpn1-ppu.webp",
  },
  {
    name: "SMP Negeri 3 PPU",
    descriptor: "Sekolah Menengah Pertama",
    logo: "/clients/smpn3-ppu.webp",
  },
  {
    name: "SMP Negeri 5 PPU",
    descriptor: "Sekolah Menengah Pertama",
    logo: "/clients/smpn5-ppu.webp",
  },
  {
    name: "SDN 017 Penajam",
    descriptor: "Sekolah Dasar Negeri",
    logo: "/clients/sdn017-penajam.webp",
  },
];

export default function ClientsSection() {
  return (
    <section className="section clients">
      <div className="container clients-layout">
        <div className="clients-head">
          <p className="eyebrow">KLIEN &amp; MITRA KAMI</p>
          <h2>Dipercaya instansi, sekolah, dan lembaga daerah</h2>
          <p className="clients-lead">
            Sistemnya sudah berjalan dan dipakai melayani masyarakat setiap hari.
          </p>
        </div>

        <ul className="clients-wall">
          {clients.map((client) => (
            <li key={client.name}>
              <a href="#portfolio">
                <img
                  className="clients-logo"
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  loading="lazy"
                />
                <strong>{client.name}</strong>
                <small>{client.descriptor}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
