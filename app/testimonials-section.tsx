"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  tag: string;
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    tag: "UMKM PPU",
    quote: "Sistem kasir membantu stok dan laporan usaha menjadi jauh lebih rapi. Tim Astro juga datang langsung untuk melatih karyawan kami.",
    name: "Budi Santoso",
    role: "Pemilik rumah makan · Penajam Paser Utara",
  },
  {
    tag: "Sekolah",
    quote: "Proses penerimaan murid kini lebih tertata dan mudah dijalankan, termasuk oleh guru yang sebelumnya belum terbiasa dengan sistem digital.",
    name: "Ibu Rina",
    role: "Perwakilan sekolah",
  },
  {
    tag: "Usaha lokal",
    quote: "Website usaha kami terlihat lebih profesional. Saat membutuhkan bantuan, kami bisa langsung berbicara dengan tim melalui WhatsApp.",
    name: "Andi",
    role: "Pemilik usaha lokal",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsAnimated(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`section testimonials${isAnimated ? " is-animated" : ""}`}>
      <div className="container">
        <div className="testi-head">
          <h2>Dipercaya <span className="testi-pill">klien Kaltim</span></h2>
          <p>
            Kami mendampingi usaha, sekolah, dan instansi di Penajam Paser Utara, Paser, dan sekitarnya — dari sistem pertama sampai benar-benar dipakai sehari-hari.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((item, index) => (
            <figure key={item.name} className={`testi-card${index === 0 ? " is-featured" : ""}`}>
              <div className="testi-top">
                <span className="testi-tag">{item.tag}</span>
                <span className="testi-mark" aria-hidden="true">&rdquo;</span>
              </div>

              <blockquote>{item.quote}</blockquote>

              <figcaption>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
