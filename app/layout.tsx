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
    title: "Astro Digital Solution — Software House Lokal PPU & Kaltim",
    description: "Website, kasir POS, dan sistem sekolah untuk UMKM serta pendidikan di Kalimantan Timur.",
    keywords: ["software house PPU", "web developer Kaltim", "jasa website Balikpapan", "kasir POS Kalimantan", "PPDB online", "Penajam Paser Utara"],
    robots: { index: true, follow: true },
    alternates: { canonical: "https://astrodigiso.id" },
    openGraph: {
      title: "Astro Digital Solution — Software House Lokal PPU & Kaltim",
      description: "Bikin bisnis dan sekolah Anda tampil profesional.",
      type: "website",
      locale: "id_ID",
      siteName: "Astro Digital Solution",
      images: [{ url: socialImage, width: 1730, height: 909, alt: "Astro Digital Solution — Software House Lokal PPU & Kaltim" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Astro Digital Solution — Software House Lokal PPU & Kaltim",
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
      <body>{children}</body>
    </html>
  );
}
