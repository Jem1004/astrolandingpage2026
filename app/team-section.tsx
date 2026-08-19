// Nama, peran, dan foto diambil dari folder foto-tim/ (dikonversi ke /public/team/).
// `focus` mengatur titik crop vertikal tiap potret agar wajah tidak terpotong.
type Member = {
  photo: string;
  focus: string;
  name: string;
  role: string;
  scope: string;
};

const roster: Member[] = [
  {
    photo: "/team/irawan.webp",
    focus: "center 28%",
    name: "Irawan",
    role: "Founder & CEO",
    scope: "Menemui klien langsung di PPU dan Paser, menyusun ruang lingkup proyek, dan memastikan hasilnya sesuai kebutuhan di lapangan.",
  },
  {
    photo: "/team/sadriansyah.webp",
    focus: "center 22%",
    name: "Sadriansyah",
    role: "Co-Founder · Lead Engineer",
    scope: "Memimpin pembangunan sistem, dari basis data sampai antarmuka yang dipakai sehari-hari, lalu merawatnya setelah rilis.",
  },
  {
    photo: "/team/adit.webp",
    focus: "center 18%",
    name: "Adit",
    role: "Co-Founder · Lead Creative Team",
    scope: "Memimpin arah desain dan alur penggunaan agar sistem mudah dipahami staf, guru, dan pemilik usaha.",
  },
];

export default function TeamSection({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section className="section team" id="tim">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">TIM ASTRO</p>
          <h2>Orang yang mengerjakan, <span>bukan sekadar nama perusahaan</span></h2>
        </div>

        <div className="team-intro">
          <p>Tim kecil yang bisa Anda temui langsung di Penajam Paser Utara dan Paser.</p>
          <a className="team-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hubungi tim
          </a>
        </div>

        <div className="team-grid">
          {roster.map((member, index) => (
            <article key={member.name} className={`team-col${index % 2 === 1 ? " is-flipped" : ""}`}>
              <div className="team-photo">
                <img
                  src={member.photo}
                  alt={`Potret ${member.name}, ${member.role} Astro Digital Solution`}
                  style={{ objectPosition: member.focus }}
                  loading="lazy"
                />
              </div>

              <div className="team-note">
                <p className="team-role">{member.role}</p>
                <h3>{member.name}</h3>
                <p className="team-scope">{member.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
