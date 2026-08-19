const services = [
  { code: "01 / WEB", title: "Pengembangan Aplikasi Web", description: "Sistem berbasis browser yang dirancang mengikuti proses kerja, bukan memaksa tim mengikuti template aplikasi.", outputs: ["Dashboard operasional", "Portal layanan", "Sistem internal"] },
  { code: "02 / MOBILE", title: "Pengembangan Aplikasi Mobile", description: "Aplikasi Android dan iOS dengan alur yang ringkas, mudah dipelajari, dan siap digunakan dalam aktivitas harian.", outputs: ["Aplikasi pelanggan", "Aplikasi lapangan", "Integrasi sistem"] },
  { code: "03 / AI", title: "Pengembangan AI & Automasi", description: "Automasi untuk pekerjaan berulang serta pemanfaatan AI yang terukur pada data dan proses bisnis Anda.", outputs: ["Automasi proses", "Asisten berbasis AI", "Pengolahan data"] },
];

export default function ServicesSection({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section className="section services" id="layanan">
      <div className="container">
        <div className="services-heading-row">
          <div className="services-intro">
            <h2>Tiga kemampuan inti untuk membangun sistem yang tepat</h2>
          </div>
          <div className="services-summary">
            <p className="services-lead">Kami mulai dari proses yang perlu dibenahi, lalu memilih teknologi yang paling masuk akal untuk menjalankannya.</p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Diskusikan kebutuhan <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className={`service-card${index === 0 ? " service-card-featured" : ""}`} key={service.code}>
              <div className="service-card-head">
                <p className="service-code">{service.code}</p>
                <a className="service-arrow" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Diskusikan ${service.title} melalui WhatsApp`}><span aria-hidden="true">↗</span></a>
              </div>
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ul aria-label={`Contoh hasil ${service.title}`}>
                {service.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
