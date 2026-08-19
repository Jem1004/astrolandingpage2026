import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://astrodigiso.id/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete Astro Digital Solution landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Astro Digital Solution — Software House Penajam Paser Utara &amp; Paser<\/title>/i);
  assert.match(html, /Teknologi lokal,/);
  assert.match(html, /didampingi sampai digunakan/);
  assert.match(html, /class="hero-proof"/);
  assert.match(html, /30\+/);
  assert.match(html, /6\+/);
  assert.match(html, /\/hero-team-ppu-v2\.webp/);
  assert.match(html, /\/konsultasi-lokal-ppu\.webp/);
  assert.match(html, /\/ruang-kerja-astro-ppu\.webp/);
  assert.match(html, /\/konsultasi-umkm-ppu\.webp/);
  assert.doesNotMatch(html, /photo-1573496359142/);
  assert.doesNotMatch(html, /images\.unsplash\.com/);
  assert.match(html, /Solusi software sesuai kebutuhan bisnis/);
  assert.match(html, /class="service-grid"/);
  assert.equal((html.match(/class="service-card (?:web|mobile|ai)-card"/g) ?? []).length, 3);
  assert.match(html, /Pengembangan Aplikasi Web/);
  assert.match(html, /Pengembangan Aplikasi Mobile/);
  assert.match(html, /Pengembangan AI &amp; Automasi/);
  assert.equal((html.match(/class="service-symbol/g) ?? []).length, 3);
  assert.equal((html.match(/>Selengkapnya /g) ?? []).length, 3);
  assert.doesNotMatch(html, /service-row|service-card-featured/);
  assert.doesNotMatch(html, /Aplikasi E-Gov|Aplikasi ERP/);
  assert.match(html, /SPMB Disdikpora PPU/);
  assert.match(html, /href="https:\/\/spmb-disdikpora\.penajamkab\.go\.id\/"/);
  assert.match(html, /href="https:\/\/dpmptsp\.penajamkab\.go\.id\/"/);
  assert.match(html, /href="https:\/\/www\.nukarin\.id\/"/);
  assert.match(html, /href="https:\/\/ams\.astrodigiso\.id\/"/);
  assert.match(html, /DPMPTSP PPU/);
  assert.match(html, /Nukarin/);
  assert.match(html, /Astro Management School/);
  assert.match(html, /class="showcase-grid"/);
  assert.doesNotMatch(html, /showcase-bar|showcase-frame/);
  assert.match(html, /\/products\/spmb-disdikpora-ppu\.webp/);
  assert.match(html, /\/products\/simas-disdikpora-ppu\.webp/);
  assert.match(html, /\/products\/sipena-disdikpora-ppu\.webp/);
  assert.match(html, /\/products\/spmb-paser\.webp/);
  assert.match(html, /\/products\/astro-absensi-digital\.webp/);
  assert.match(html, /SIMAS/);
  assert.match(html, /SIPENA/);
  assert.match(html, /SPMB Kabupaten Paser/);
  assert.match(html, /Astro Absensi Digital/);
  assert.match(html, /https:\/\/simas-disdikpora\.penajamkab\.go\.id\//);
  assert.match(html, /https:\/\/sipena-disdikpora\.penajamkab\.go\.id\//);
  assert.match(html, /https:\/\/spmb\.paserkab\.go\.id\//);
  assert.equal((html.match(/class="showcase-card"/g) ?? []).length, 8);
  assert.equal((html.match(/class="showcase-shot"/g) ?? []).length, 8);
  assert.equal((html.match(/class="showcase-live"/g) ?? []).length, 7);
  assert.doesNotMatch(html, /CMS Sekolah Terintegrasi|Ujian Online ExamBro/);
  assert.match(html, /class="team-grid"/);
  assert.match(html, /Irawan/);
  assert.match(html, /Sadriansyah/);
  assert.match(html, /Adit/);
  assert.match(html, /Founder &amp; CEO/);
  assert.match(html, /Lead Engineer/);
  assert.match(html, /Lead Creative Team/);
  assert.match(html, /\/team\/irawan\.webp/);
  assert.match(html, /\/team\/sadriansyah\.webp/);
  assert.match(html, /\/team\/adit\.webp/);
  assert.match(html, /id="tim"/);
  assert.equal((html.match(/class="team-col/g) ?? []).length, 3);
  assert.equal((html.match(/class="team-col is-flipped"/g) ?? []).length, 1);
  assert.doesNotMatch(html, /TODO_ISI/);
  assert.match(html, /rel="icon" href="\/favicon\.ico"/);
  assert.match(html, /rel="apple-touch-icon" href="\/apple-icon\.png"/);
  assert.equal((html.match(/class="brand-mark"/g) ?? []).length, 2);
  assert.doesNotMatch(html, /<span class="brand-mark">/);
  assert.match(html, /class="testi-grid"/);
  assert.equal((html.match(/class="testi-card/g) ?? []).length, 3);
  assert.equal((html.match(/class="testi-card is-featured"/g) ?? []).length, 1);
  assert.match(html, /class="testi-pill"/);
  assert.match(html, /Budi Santoso/);
  assert.doesNotMatch(html, /testimonial-track|testimonial-nav|client-avatar/);
  assert.match(html, /0821 5873 6885/);
  assert.match(html, /6282158736885/);
  assert.match(html, /PARTNER TEKNOLOGI · PPU · PASER · KALTIM/);
  assert.match(html, /Penajam Paser Utara/);
  assert.match(html, /&quot;Paser&quot;|>Paser</);
  assert.doesNotMatch(html, /6287784451080|8445 1080/);
  assert.doesNotMatch(html, /SOFTWARE HOUSE LOKAL · PENAJAM PASER UTARA|Tim berbasis di PPU|Tumbuh di PPU/);
  assert.doesNotMatch(html, /NusaTech|Mandiri Group|Telkom Indonesia|KOMINFO|700\+|17\+|6281234567890/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("defines host-aware social metadata", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /x-forwarded-host/);
  assert.match(layout, /new URL\("\/og\.png", origin\)/);
  assert.match(layout, /summary_large_image/);
});
