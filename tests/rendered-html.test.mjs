import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://nusatech.example/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete NusaTech landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>NusaTech — Software untuk Bisnis yang Bertumbuh<\/title>/i);
  assert.match(html, /Software inovatif dibangun dengan/);
  assert.match(html, /Solusi software sesuai/);
  assert.match(html, /SatuData Daerah/);
  assert.match(html, /Proses dipahami lebih dulu/);
  assert.match(html, /Pahami konteks/);
  assert.match(html, /Ilustrasi ruang lingkup/);
  assert.match(html, /Pertanyaan yang/);
  assert.match(html, /Konsultasi Sekarang!/);
  assert.doesNotMatch(html, /browser-mock|1,248|98%|TELKOM<\/span>|PERTAMINA<\/span>/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("defines host-aware social metadata", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /x-forwarded-host/);
  assert.match(layout, /new URL\("\/og\.png", origin\)/);
  assert.match(layout, /summary_large_image/);
});
