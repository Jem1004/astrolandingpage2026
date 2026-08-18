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
    title: "NusaTech — Partner Transformasi Digital",
    description: "Solusi software, ERP, dan e-government yang dirancang untuk kebutuhan nyata bisnis Indonesia.",
    openGraph: {
      title: "NusaTech — Partner Transformasi Digital",
      description: "Software yang bertumbuh bersama bisnis Anda.",
      type: "website",
      images: [{ url: socialImage, width: 1733, height: 908, alt: "NusaTech — Software yang Bertumbuh Bersama Bisnis Anda" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "NusaTech — Partner Transformasi Digital",
      description: "Software yang bertumbuh bersama bisnis Anda.",
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
