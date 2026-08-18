# DESIGN SPEC — "JMC-Style" Corporate/Software House Website
> Hasil reverse-engineering desain dari **jmc.co.id** (JMC IT Consultant), diadaptasi dengan
> pendekatan warna **dominan BIRU** (bukan oranye). Dokumen ini mencatat setiap detail visual —
> warna, tipografi, spacing, komponen, dan struktur section — agar bisa dijiplak 1:1 secara
> struktural, hanya beda palet warna.

---

## 1. Ringkasan & Positioning

Website referensi (jmc.co.id) adalah landing page company profile software house dengan gaya:
- **Modern-friendly-corporate**: sudut membulat (pill button, rounded card), ilustrasi orang
  memegang laptop, ikon line-art dalam badge bulat/kotak lembut.
- **Warm & approachable** di versi asli (oranye + krem), akan kita ubah jadi **trustworthy &
  tech-forward** (biru + putih/abu terang) — kesan lebih "IT/SaaS/enterprise".
- Struktur halaman: Navbar sticky → Hero → Logo strip klien → Layanan (3 card warna) →
  Kelebihan (list fitur) → Portofolio (tab) → Tentang Kami → Testimoni (carousel) →
  Partner teknologi (logo strip) → FAQ (accordion) → CTA Banner → Footer besar (mega link) →
  Floating WhatsApp button.
- Font berkarakter **rounded-geometric**: heading pakai **Outfit**, body pakai **Questrial** —
  keduanya dari Google Fonts, memberi kesan ramah tapi tetap profesional.

---

## 2. Palet Warna

### 2.1 Warna asli (referensi, hasil inspeksi computed style)

| Token | Hex | Penggunaan di situs asli |
|---|---|---|
| Primary Orange | `#FF7A00` | Tombol CTA, active nav underline, link aktif, footer, ikon aksen |
| Cream/Peach BG | `#FFF8F1` – `#FFF6F0` | Background navbar & hero |
| Off-white BG | `#FFFCF8` | Background section alternatif |
| Teal (card 1) | `#40C3CD` | Card layanan "Aplikasi & Website" |
| Olive/Lime (card 2) | `#B6C141` | Card layanan "Aplikasi E-Gov" |
| Orange (card 3) | `#FF7A00` | Card layanan "Aplikasi ERP" |
| Heading text | `#414141` | Semua H1–H2 |
| Body text | `#656565` | Paragraf |
| Nav text | `#000000` | Link navbar non-aktif |
| Footer BG | `#FF7A00` | Footer besar |
| Copyright bar | `#2B2B2B` (dark slate) | Baris copyright paling bawah |
| CTA Banner | Foto + overlay slate gray-blue | Section "Masih bertahan dengan sistem yang rumit?" |

### 2.2 Palet baru — **Dominan Biru** (untuk versi kita)

Prinsip adaptasi: oranye (warna primer/dominan) → **Biru**. Warna sekunder (teal, olive)
disesuaikan supaya tetap harmonis dalam skema biru — teal dipertahankan (masih serumpun biru),
olive diganti dengan indigo/ungu-biru supaya 3 kartu layanan tetap punya kontras satu sama lain
tanpa memunculkan oranye.

| Token (CSS var) | Hex | Peran | Menggantikan |
|---|---|---|---|
| `--color-primary` | `#1D5FFF` | Warna dominan: tombol CTA, active state, aksen, footer | Orange `#FF7A00` |
| `--color-primary-dark` | `#134BCC` | Hover/pressed state tombol primer | Orange dark |
| `--color-primary-light` | `#5A8CFF` | Aksen sekunder, badge, ikon | Orange light |
| `--color-bg-tint` | `#F0F5FF` | Background navbar & hero (pengganti krem) | `#FFF8F1` |
| `--color-bg-tint-2` | `#F5F9FF` | Background section alternatif | `#FFF6F0` |
| `--color-bg-offwhite` | `#FBFDFF` | Background section putih kebiruan | `#FFFCF8` |
| `--color-card-teal` | `#37B6C8` | Card layanan 1 (dipertahankan, masih rumpun biru) | `#40C3CD` |
| `--color-card-indigo` | `#5B67D6` | Card layanan 2 (pengganti olive, biar tetap 1 keluarga biru-ungu) | `#B6C141` |
| `--color-card-primary` | `#1D5FFF` | Card layanan 3 (= primary blue) | `#FF7A00` |
| `--color-heading` | `#2B2F38` | Warna semua heading (sedikit lebih dingin dari abu asli) | `#414141` |
| `--color-body` | `#5B6472` | Warna paragraf | `#656565` |
| `--color-nav-text` | `#0F1720` | Teks navbar non-aktif | `#000000` |
| `--color-footer-bg` | `#1D5FFF` | Background footer | Orange `#FF7A00` |
| `--color-footer-copyright` | `#0F1B33` | Baris copyright (biru sangat gelap, bukan abu netral) | `#2B2B2B` |
| `--color-cta-overlay` | `#12294D` → gradient ke `#1D5FFF` | Overlay foto CTA banner | slate gray |
| `--color-white` | `#FFFFFF` | Teks di atas background biru/gelap | sama |
| `--color-border-soft` | `#DCE6FF` | Border tipis kartu/accordion (pengganti border oranye tipis) | `#FF7A00` (border FAQ) |

> **Catatan implementasi:** simpan semua token ini sebagai CSS custom properties di `:root`
> supaya tone bisa diubah dari satu tempat:
> ```css
> :root {
>   --color-primary: #1D5FFF;
>   --color-primary-dark: #134BCC;
>   --color-primary-light: #5A8CFF;
>   --color-bg-tint: #F0F5FF;
>   --color-bg-tint-2: #F5F9FF;
>   --color-bg-offwhite: #FBFDFF;
>   --color-card-teal: #37B6C8;
>   --color-card-indigo: #5B67D6;
>   --color-card-primary: #1D5FFF;
>   --color-heading: #2B2F38;
>   --color-body: #5B6472;
>   --color-footer-bg: #1D5FFF;
>   --color-footer-copyright: #0F1B33;
> }
> ```

### 2.3 Aturan pemakaian warna (rasio dominasi)
- **Biru harus dominan visual** di: navbar CTA button, hero CTA button, active tab/underline,
  badge eyebrow text kecil di atas tiap judul section, ikon aksen, footer penuh, tombol
  "Selengkapnya" pada card layanan ke-3, floating chat button boleh tetap hijau WhatsApp (netral,
  bukan bagian brand).
- Teal dan indigo hanya dipakai **terbatas** pada 2 dari 3 kartu layanan di section "Layanan
  Kami" — supaya tetap terasa biru yang dominan secara keseluruhan halaman.
- Background besar (navbar, hero, alternating section) pakai **tint biru sangat muda**
  (`--color-bg-tint`), bukan putih polos — ini meniru efek "cream tint" asli tapi dengan hue biru.

---

## 3. Tipografi

| Elemen | Font | Size (desktop) | Weight | Line-height |
|---|---|---|---|---|
| Import | `Outfit` (heading) + `Questrial` (body) via Google Fonts | — | 400–700 | — |
| H1 (hero headline) | Outfit | 40px | 700 | 60px (1.5) |
| H2 (section title) | Outfit | 32px | 700 | 48px (1.5) |
| H3 (card title) | Outfit | 20–24px | 700 | 1.4 |
| Nav link | Outfit | 20px | 400 (700 saat aktif) | normal |
| Body/paragraf | Questrial | 16px | 400 | 24px (1.5) |
| Eyebrow/label kecil di atas judul | Questrial | 16px | 400 | normal, warna primary |
| Button text | Outfit | 16px | 600–700 | normal |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Questrial&display=swap" rel="stylesheet">
```

Karakter font **Outfit** & **Questrial**: geometric sans-serif dengan sudut membulat lembut —
selaras dengan gaya rounded button/card di seluruh halaman. Pertahankan pasangan font ini persis
karena inilah yang memberi identitas visual utama situs referensi (bukan warnanya).

---

## 4. Layout & Grid

- **Container max-width**: `1320px`, padding horizontal `12px` (mengikuti breakpoint Bootstrap-like).
- **Spacing section**: padding vertikal antar-section besar (~80–120px desktop, ~48–64px mobile).
- Grid layanan / kartu: 3 kolom desktop → 1 kolom mobile (stack).
- Grid fitur "Kelebihan": 2 kolom (gambar kiri, list kanan) → stack di mobile.
- Border-radius umum: **`8px`** untuk card, **`800px` (pill/full-round)** untuk tombol dan badge.
- Shadow tombol CTA: soft colored shadow mengikuti warna tombol
  (`0 8px 25px rgba(29, 95, 255, 0.25)` — versi biru dari shadow oranye asli).

---

## 5. Komponen per Section

### 5.1 Navbar (sticky top)
- Background: `--color-bg-tint` (`#F0F5FF`), shadow lembut biru saat discroll:
  `box-shadow: 6px 8px 25px rgba(29, 95, 255, 0.15)`.
- Kiri: logo (wordmark + swoosh icon).
- Tengah: menu horizontal — **Beranda** (aktif, underline biru tebal di bawah), **Aplikasi &
  Website** (dropdown mega-menu), **Aplikasi ERP** (dropdown), **Aplikasi E-Gov** (dropdown),
  **Tentang Kami**, **Blog**, **Karir**.
- Kanan: tombol pill solid **"Hubungi Kami"** (`--color-primary` bg, teks putih).
- **Mega-menu dropdown** (saat hover/klik item dengan submenu): panel putih rounded besar dengan
  shadow, berisi:
  - Judul submenu (H3) + deskripsi 1 baris + link "Selengkapnya →" (warna primary)
  - Garis pembatas horizontal tipis
  - Grid ikon: setiap item = ikon SVG line-art kecil + label teks (mis. Mobile Apps, Web Base
    App, Website, GIS, Integrasi / HRIS, Absensi, Payroll, dst / Website Pemerintah, e-Data
    Sektoral, dst.)

### 5.2 Hero Section
- Background: tint biru sangat muda, full-width, `position: relative; overflow: hidden`.
- Layout 2 kolom: **kiri teks, kanan ilustrasi foto orang** (memegang laptop, pose percaya diri).
- Struktur teks kiri:
  1. Eyebrow kecil warna primary: *"Jasa Pembuatan Software"*
  2. H1 dua baris — baris pertama warna heading gelap, baris kedua (frasa penekanan) **warna
     primary biru** (mis. "Software Inovatif Dibangun dengan" + **"Standar yang Tepat"** dalam biru)
  3. Paragraf deskripsi 2 baris, warna body
  4. Tombol CTA pill dengan ikon WhatsApp: *"Saya Mau Tanya"*
- Di bawah hero: baris kecil *"[Brand] telah dipercaya banyak perusahaan"* + **strip logo klien**
  (grayscale/berwarna, berjajar horizontal, 8–10 logo).

### 5.3 Section "Layanan Kami"
- Eyebrow: *"LAYANAN KAMI"* (uppercase, warna primary)
- H2: *"Solusi software sesuai kebutuhan bisnis"*
- 3 kartu warna solid, sejajar, masing-masing:
  - Padding dalam, rounded-3 (~8–16px), teks putih
  - Judul (H3) di atas
  - Ikon bulat putih (lingkaran putih berisi ikon line-art warna kartu) di tengah
  - Deskripsi singkat 2–3 baris
  - Tombol pill putih kecil "Selengkapnya" (teks warna sesuai kartu)
  - Kartu 1 = teal, kartu 2 = indigo, kartu 3 = **primary blue** (dominan)

### 5.4 Section "Kelebihan Kami"
- Eyebrow: *"KELEBIHAN KAMI"*
- H2 2 baris: *"Kami pahami proses bisnis Anda sebelum membangun software"*
- Layout 2 kolom:
  - Kiri: foto ilustrasi (gambar orang/tim)
  - Kanan: **5 baris card list** (border tipis `--color-border-soft`, rounded 8px), masing-masing:
    - Ikon kotak lembut (bg tint biru muda, ikon line-art biru)
    - Judul bold warna primary (H4)
    - Deskripsi 1–2 baris warna body
    - 5 item: Inovatif, Bergaransi & Maintenance, Berpengalaman, Tim Profesional, Project On Time
- Tombol pill CTA di bawah list: *"Mulai Konsultasi"*

### 5.5 Section Portofolio/Proyek ("Dipercaya Berbagai Bisnis")
- Eyebrow: *"DIPERCAYA BERBAGAI BISNIS"*
- H2: *"Solusi nyata dari berbagai proyek"*
- **Tab pill horizontal** (4 tab nama proyek) — tab aktif: bg primary solid + teks putih; tab
  non-aktif: outline tipis + teks gelap.
- Konten tab terpilih: card besar rounded dengan background tint biru muda, isi:
  - Kiri: mockup screenshot aplikasi (di frame monitor/browser)
  - Kanan: judul proyek (H3) + paragraf studi kasus (before/after) + 2 badge fitur (ikon + label,
    mis. "Aplikasi innovative", "Desain responsive")

### 5.6 Section "Tentang Kami"
- Eyebrow: *"TENTANG KAMI"*
- H2 2 baris: *"Membangun Indonesia melalui teknologi"*
- Paragraf panjang (5–6 baris) bercerita sejarah perusahaan.
- 2 badge penghargaan (logo medali + judul penghargaan + subjudul) berjajar horizontal.
- Kolom kanan:
  - Kartu statistik solid warna primary (bg biru): **"700+ Project IT"** / garis pembatas / **"17
    Tahun Pengalaman"**
  - Foto kantor + tombol play video (thumbnail video profil perusahaan) yang overlap di atas foto
  - Dekorasi titik-titik (dot pattern) warna primary di pojok

### 5.7 Section Testimoni
- Eyebrow: *"APA KATA KLIEN KAMI"* dengan tanda kutip besar dekoratif (ikon quote kiri-kanan)
- H2: *"Pengalaman bekerja sama dalam membangun software"*
- **Background dekoratif**: lingkaran-lingkaran konsentris tipis warna primary transparan,
  radiating dari tengah (efek "sonar"/ripple), full width di belakang carousel
- Carousel 1 testimoni tampil per waktu: logo perusahaan klien → quote paragraf → foto profil
  bulat kecil → nama (bold) → jabatan → nama perusahaan
- Navigasi: panah kiri/kanan bulat outline (warna primary) di sisi kiri-kanan + dot indicator di
  bawah (dot aktif = warna primary penuh, non-aktif = outline/pucat)

### 5.8 Section Partner Teknologi
- Eyebrow: *"PARTNER TEKNOLOGI KAMI"*
- H2 2 baris: *"Berkolaborasi untuk Solusi yang Lebih Baik"*
- Strip logo brand (AWS, Telkom Indonesia, neuCentrIX, Mandiri, BCA, Google, dst.) berwarna asli
  (bukan grayscale), berjajar rata, wrap ke baris baru jika sempit.

### 5.9 Section FAQ
- Eyebrow: *"FREQUENTLY ASK QUESTION"*
- H2: *"Pertanyaan yang sering ditanyakan"*
- **Accordion list** (5 item), setiap item:
  - Border 1px warna primary (bukan lagi oranye), rounded 8px
  - Background: putih di item non-aktif, sedikit tint abu (`#F7F9FC`) di header saat idle
  - Ikon chevron bulat solid warna primary di kanan (rotate 180° saat terbuka)
  - Klik → expand jawaban paragraf di bawah pertanyaan

### 5.10 CTA Banner ("Masih bertahan dengan sistem yang rumit?")
- Card besar rounded top corners, terpotong menyatu dengan section footer di bawahnya (efek
  "menyambung" visual antara 2 blok warna).
- Kiri: foto orang (pose menjelaskan/gesture tangan terbuka) full-bleed di sisi kiri card.
- Kanan (background overlay gradient dari **navy-gelap → primary blue**, bukan lagi slate-orange):
  - H2 putih: *"Masih bertahan dengan sistem yang rumit?"*
  - Sub teks putih: *"Jangan sampai terlambat, beralih ke aplikasi [Brand] sekarang!"*
  - Tombol pill putih dengan teks & ikon warna primary: *"Konsultasi Sekarang!"*
  - Caption kecil di bawah tombol: *"Dapatkan penawaran menarik"*
- Section ini **menyatu langsung** (tanpa gap) dengan footer yang background-nya juga
  `--color-primary` — menciptakan blok warna biru besar dari CTA sampai footer.

### 5.11 Footer (mega footer)
- Background: **solid `--color-primary` (biru)** penuh satu layar lebar.
- 3–5 kolom link (semua teks putih/putih-transparan):
  1. **Tentang** — Tentang Kami, Company Profile, Blog, Karir
  2. **Website & Aplikasi** — Mobile Apps, Web Base Apps, Website, GIS, Integrasi
  3. **Aplikasi Bisnis ERP** — daftar 10 modul ERP
  4. **Aplikasi E-Government** — daftar panjang 20+ modul e-gov (3 sub-kolom)
- Kiri bawah: logo putih + tagline singkat perusahaan + 3 ikon sosial media (Facebook, LinkedIn,
  Instagram) dalam lingkaran outline putih.
- Tengah bawah: **"Berasosiasi"** — logo asosiasi (mis. KADIN) versi putih/monokrom.
- Kanan bawah: **"Liputan Pers"** — logo-logo media (versi putih monokrom) + tombol pill putih
  "Layanan aduan".
- **Copyright bar** paling bawah: full-width, background lebih gelap (`--color-footer-copyright`,
  biru sangat gelap — bukan abu netral), teks putih center: *"Copyright © [tahun] [Brand]. All
  rights reserved."*

### 5.12 Floating Action Button
- Tombol bulat hijau WhatsApp fixed di kanan-bawah semua halaman (biarkan hijau — ini elemen
  fungsional netral, bukan bagian palet brand).

---

## 6. Ikonografi
- Gaya **line-art / outline icon** monoline, sudut membulat, 1 warna (mengikuti warna
  container-nya: putih di atas kartu warna, primary blue di atas background terang).
- Ikon selalu dibungkus dalam **badge bulat atau kotak rounded lembut** (bg tint lebih muda dari
  ikonnya) — pola konsisten di: kartu layanan, list kelebihan, mega-menu navbar, badge fitur
  proyek.

## 7. Fotografi
- Foto orang: gaya studio/kantor natural, warm-neutral lighting, pose percaya diri/profesional
  (menjelaskan, memegang device, gesture terbuka).
- Screenshot produk: ditampilkan dalam **frame device** (monitor/browser mock) di atas
  background tint warna brand.
- Semua foto memakai **rounded corner** besar (16–24px) atau dipotong dalam card rounded.

## 8. Tombol & Interaksi
| Jenis tombol | Style |
|---|---|
| Primary (solid) | bg `--color-primary`, teks putih, pill (radius 800px), shadow biru lembut, padding ~12px 24px |
| Secondary (outline on dark) | bg putih, teks `--color-primary`, pill, dipakai di atas background biru (footer/CTA/hero card) |
| Tab pill (aktif) | bg `--color-primary`, teks putih |
| Tab pill (non-aktif) | outline abu tipis, teks gelap, bg putih |
| Link nav aktif | teks `--color-primary`, underline solid biru tebal di bawahnya |

## 9. Breakpoint Responsif (asumsi umum, mengikuti pola situs asli)
- Desktop: ≥1200px — layout multi-kolom penuh seperti dijabarkan di atas.
- Tablet: 768–1199px — grid 3-kolom → 2-kolom, mega-menu tetap dropdown.
- Mobile: <768px — semua section jadi 1 kolom stack, navbar jadi hamburger menu, tab portofolio
  jadi scroll horizontal, footer mega-link jadi accordion/stack per kolom.

---

## 10. Ringkasan Perubahan dari Referensi Asli

| Aspek | Situs Asli (jmc.co.id) | Versi Kita |
|---|---|---|
| Warna dominan | Oranye `#FF7A00` | **Biru `#1D5FFF`** |
| Background hero/navbar | Krem/peach `#FFF8F1` | Tint biru muda `#F0F5FF` |
| Kartu layanan #2 | Olive green `#B6C141` | Indigo `#5B67D6` |
| Footer & CTA banner | Oranye penuh | **Biru penuh** |
| Font, layout, spacing, struktur section, komponen | — | **Dipertahankan identik** |

Semua elemen non-warna (tipografi Outfit+Questrial, border-radius pill, struktur 11 section,
pola kartu, mega-menu, carousel testimoni dengan efek ripple, footer besar) **dipertahankan
persis** — hanya sistem warna yang diubah agar biru menjadi warna dominan menggantikan oranye.