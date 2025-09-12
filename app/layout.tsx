import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gebang Contruction — Spesialis Konstruksi & Baja Ringan",
  description:
    "Jasa konstruksi, rangka atap baja ringan, kanopi, plafon, las & interior. Profesional & berpengalaman.",
  openGraph: {
    title: "Gebang Contruction",
    description:
      "Jasa konstruksi & baja ringan. Konsultasi gratis via WhatsApp.",
    url: "https://gebang-contruction.example", // ganti domain
    siteName: "Gebang Contruction",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900 antialiased">

        {children}
      </body>
    </html>
  );
}
