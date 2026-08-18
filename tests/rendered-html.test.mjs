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
  assert.match(html, /<title>Astro Digital Solution — Software House Lokal PPU &amp; Kaltim<\/title>/i);
  assert.match(html, /Bikin bisnis dan sekolah Anda/);
  assert.match(html, /Solusi digital untuk kebutuhan/);
  assert.match(html, /class="service-grid"/);
  assert.match(html, /Aplikasi Kasir &amp; POS/);
  assert.match(html, /Website Profil Usaha/);
  assert.match(html, /Sistem Manajemen Sekolah/);
  assert.match(html, /SPMB Disdikpora PPU/);
  assert.match(html, /DPMPTSP PPU/);
  assert.match(html, /Nukarin/);
  assert.match(html, /Astro Management School/);
  assert.match(html, /class="product-grid"/);
  assert.match(html, /\/products\/spmb-disdikpora-ppu\.webp/);
  assert.equal((html.match(/class="product-card"/g) ?? []).length, 4);
  assert.doesNotMatch(html, /CMS Sekolah Terintegrasi|Ujian Online ExamBro/);
  assert.match(html, /0877 8445 1080/);
  assert.match(html, /6287784451080/);
  assert.match(html, /Penajam Paser Utara/);
  assert.doesNotMatch(html, /NusaTech|Mandiri Group|Telkom Indonesia|KOMINFO|700\+|17\+|6281234567890/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("defines host-aware social metadata", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /x-forwarded-host/);
  assert.match(layout, /new URL\("\/og\.png", origin\)/);
  assert.match(layout, /summary_large_image/);
});
