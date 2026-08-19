"use client";

import { useEffect, useRef, useState } from "react";
import "./services-section.css";

type ServiceIconKind = "web" | "mobile" | "ai";

const ServiceIcon = ({ kind }: { kind: ServiceIconKind }) => (
  <span className={`service-symbol ${kind}`} aria-hidden="true">
    <i />
    <i />
    <i />
  </span>
);

export default function ServicesSection({ whatsappUrl }: { whatsappUrl: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsAnimated(true);
        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`section services${isAnimated ? " is-animated" : ""}`} id="layanan">
      <div className="container">
        <div className="services-heading">
          <p className="eyebrow">LAYANAN KAMI</p>
          <h2>Solusi software sesuai kebutuhan bisnis</h2>
        </div>

        <div className="service-grid">
          <article className="service-card web-card">
            <div className="service-card-main">
              <ServiceIcon kind="web" />
              <div>
                <h3>Pengembangan Aplikasi Web</h3>
                <p>Sistem berbasis browser untuk operasional, layanan pelanggan, dan pengelolaan data yang lebih rapi.</p>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Selengkapnya <span aria-hidden="true">→</span></a>
          </article>

          <article className="service-card mobile-card">
            <div className="service-card-main">
              <ServiceIcon kind="mobile" />
              <div>
                <h3>Pengembangan Aplikasi Mobile</h3>
                <p>Aplikasi praktis untuk perangkat mobile dengan alur yang mudah dipahami oleh pengguna sehari-hari.</p>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Selengkapnya <span aria-hidden="true">→</span></a>
          </article>

          <article className="service-card ai-card">
            <div className="service-card-main">
              <ServiceIcon kind="ai" />
              <div>
                <h3>Pengembangan AI &amp; Automasi</h3>
                <p>AI dan automasi untuk merapikan pekerjaan berulang, mengolah data, dan mempercepat alur kerja.</p>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Selengkapnya <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </div>
    </section>
  );
}
