import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: "Astro Digital Solution — Software House Penajam Paser Utara & Paser",
    description: "Website, kasir POS, dan sistem sekolah untuk UMKM serta pendidikan di Penajam Paser Utara, Paser, dan Kalimantan Timur.",
    keywords: ["software house Penajam Paser Utara", "jasa website Paser", "software house PPU", "web developer Kaltim", "jasa website Balikpapan", "pengembangan aplikasi Samarinda", "kasir POS Kalimantan", "PPDB online"],
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    },
    alternates: { canonical: "https://astrodigiso.id" },
    openGraph: {
      title: "Astro Digital Solution — Software House Penajam Paser Utara & Paser",
      description: "Bikin bisnis dan sekolah Anda tampil profesional.",
      type: "website",
      locale: "id_ID",
      siteName: "Astro Digital Solution",
      images: [{ url: socialImage, width: 1730, height: 909, alt: "Astro Digital Solution — Software House Penajam Paser Utara & Paser" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Astro Digital Solution — Software House Penajam Paser Utara & Paser",
      description: "Bikin bisnis dan sekolah Anda tampil profesional.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var u=function(){var h=document.querySelector('.site-header');if(h){h.classList.toggle('is-scrolled',window.scrollY>24);}};window.addEventListener('scroll',u,{passive:true});u();})();",
          }}
        />
      </body>
    </html>
  );
}
