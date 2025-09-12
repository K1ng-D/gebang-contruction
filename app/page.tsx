"use client";

import { useMemo } from "react";
import Head from "next/head";
import {
  motion,
  useReducedMotion,
  cubicBezier,
  type Variants,
} from "framer-motion";
import {
  FiHome,
  FiLayers,
  FiFeather,
  FiGrid,
  FiAperture,
  FiBox,
  FiTool,
  FiZap,
  FiSettings,
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiStar,
} from "react-icons/fi";

// Import gambar dari folder public
import heroImage from "@/public/assets/images/hero.jpg";
import project1 from "@/public/assets/images/project1.jpg";
import project2 from "@/public/assets/images/project2.jpg";
import project3 from "@/public/assets/images/project3.jpg";
import project4 from "@/public/assets/images/project4.jpg";
import ctaImage from "@/public/assets/images/cta-image.jpg";

/**
 * Company Profile: Gebang Construction
 * Stack: Next.js (App Router), Tailwind CSS, Framer Motion, React Icons
 * File suggestion: app/gebang-construction/page.tsx
 */

// ---- Motion helpers ----
const easeOutQuint = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuint, delay },
  },
});

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// This is the single, correct declaration for the float animation
const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ---- Data ----
const services = [
  {
    title: "Konstruksi",
    desc: "Pembangunan bangunan dari pondasi hingga finishing dengan standar mutu tinggi.",
    icon: FiHome,
    bullets: ["Struktur kuat & tahan lama", "Material tersertifikasi", "Tim profesional"],
  },
  {
    title: "Plafon",
    desc: "Instalasi plafon gypsum, PVC, akustik, dan dekoratif yang rapi & presisi.",
    icon: FiLayers,
    bullets: ["Detail rapih", "Finishing halus", "Desain kustom"],
  },
  {
    title: "Atap Baja Ringan",
    desc: "Rangka atap ringan, anti karat, pemasangan cepat, hemat biaya perawatan.",
    icon: FiFeather,
    bullets: ["Tahan cuaca", "Struktur presisi", "Garansi pemasangan"],
  },
  {
    title: "Interior",
    desc: "Penataan ruang fungsional & estetis: partisi, panel dinding, lantai, dan dekor.",
    icon: FiGrid,
    bullets: ["Desain modern", "Warna & tekstur serasi", "Instalasi cepat"],
  },
  {
    title: "Kanopi",
    desc: "Kanopi baja ringan/aluminium untuk melindungi area outdoor dari cuaca.",
    icon: FiAperture,
    bullets: ["Kuat & elegan", "Custom ukuran", "Perawatan mudah"],
  },
  {
    title: "Landscape",
    desc: "Tata hijau, taman, hardscape & drainase untuk lingkungan yang nyaman.",
    icon: FiBox,
    bullets: ["Konsep menyatu", "Irigasi baik", "Pemilihan tanaman tepat"],
  },
  {
    title: "MEP (Mechanical, Electrical, Plumbing)",
    desc: "Perencanaan & instalasi sistem utilitas bangunan yang aman & efisien.",
    icon: FiTool,
    bullets: ["Sesuai SNI", "Panel & instalasi rapi", "Dokumentasi lengkap"],
  },
  {
    title: "Desain & Struktur",
    desc: "Perencanaan arsitektur, perhitungan struktur, shop drawing, & as built drawing.",
    icon: FiSettings,
    bullets: ["Optimasi biaya", "Standar teknik", "Detail konstruktif"],
  },
  {
    title: "Interior Furniture",
    desc: "Custom furniture built-in & loose: kitchen set, lemari, meja, dan lainnya.",
    icon: FiStar,
    bullets: ["Material premium", "Finishing clean", "Ergonomis"],
  },
];

const stats = [
  { label: "Tahun Pengalaman", value: "10+" },
  { label: "Proyek Selesai", value: "250+" },
  { label: "Kepuasan Klien", value: "98%" },
  { label: "Tenaga Profesional", value: "50+" },
];

const projects = [
  {
    title: "Hunian Minimalis 2 Lantai",
    tags: ["Konstruksi", "Struktur", "Interior"],
    img: project1,
  },
  {
    title: "Renovasi Plafon & Pencahayaan",
    tags: ["Plafon", "MEP"],
    img: project2,
  },
  {
    title: "Atap Baja Ringan & Kanopi",
    tags: ["Atap", "Kanopi"],
    img: project3,
  },
  {
    title: "Landscape Area Komersial",
    tags: ["Landscape"],
    img: project4,
  },
];

export default function GebangConstructionPage() {
  const prefersReducedMotion = useReducedMotion();

  const wave = useMemo(
    () => (
      <svg
        aria-hidden
        viewBox="0 0 1440 200"
        className="absolute inset-x-0 -bottom-0 h-[120px] w-full text-blue-50"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L80,80C160,96,320,128,480,138.7C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z"
        />
      </svg>
    ),
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
      <Head>
        <title>Gebang Construction | Company Profile</title>
        <meta
          name="description"
          content="Jasa konstruksi, plafon, atap baja ringan, interior, kanopi, landscape, MEP, desain & struktur, furniture."
        />
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-blue-900/90 bg-blue-900/80 border-b border-blue-700">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white text-blue-900 grid place-items-center shadow">
              <img
              src="/assets/images/LOGO.png"
              alt="Gebang Construction Logo"
              width={40}
              height={40}
              className="h-10 w-10"
              />
            </div>
            <span className="font-semibold tracking-tight text-white">Gebang Construction</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100">
            <a href="#layanan" className="hover:text-white transition-colors">Layanan</a>
            <a href="#proyek" className="hover:text-white transition-colors">Proyek</a>
            <a href="#proses" className="hover:text-white transition-colors">Proses</a>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </nav>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-blue-900 px-4 py-2 text-sm shadow hover:shadow-md hover:bg-amber-400 transition-all"
          >
            Konsultasi Gratis <FiArrowRight />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.h1 variants={fadeUp()} className="text-4xl/tight md:text-5xl/tight font-bold tracking-tight">
                Solusi{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Konstruksi Modern
                </span>
                <br />
                Andal, Estetis, dan Efisien
              </motion.h1>
              <motion.p variants={fadeUp(0.1)} className="text-blue-100 max-w-xl">
                Kami menghadirkan layanan terpadu: konstruksi, plafon, atap baja ringan, interior, kanopi, landscape, MEP,
                desain & struktur, hingga furniture. Dikerjakan oleh tim ahli dengan standar mutu terbaik.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3">
                <a href="#layanan" className="rounded-xl bg-amber-500 text-blue-900 px-5 py-3 text-sm shadow hover:shadow-md hover:bg-amber-400 transition-all">
                  Jelajahi Layanan
                </a>
                <a href="#proyek" className="rounded-xl border border-blue-300 px-5 py-3 text-sm hover:border-blue-100 hover:bg-blue-800/30 transition-all">
                  Lihat Proyek
                </a>
              </motion.div>
              <motion.ul variants={fadeUp(0.3)} className="flex items-center gap-4 text-blue-100 text-sm">
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Bergaransi</li>
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Tepat Waktu</li>
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Dokumentasi Rapi</li>
              </motion.ul>
            </motion.div>

            <motion.div
              className="relative"
              variants={prefersReducedMotion ? undefined : float}
              initial="initial"
              animate="animate"
            >
              {/* Mengubah bagian ini untuk menggunakan gambar lokal */}
              <div 
                className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"
                ></div>
                <img 
                  src={heroImage.src} 
                  alt="Gebang Construction Hero" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl bg-white/90 backdrop-blur border border-white/80 grid place-items-center shadow z-20">
                <FiZap className="h-8 w-8 text-blue-900" />
              </div>
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-2xl bg-white/90 backdrop-blur border border-white/80 grid place-items-center shadow z-20">
                <FiStar className="h-8 w-8 text-blue-900" />
              </div>
            </motion.div>
          </div>
        </div>
        {wave}
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={prefersReducedMotion ? undefined : float}
              initial="initial"
              animate="animate"
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-3xl font-semibold tracking-tight text-blue-900">{s.value}</p>
              <p className="text-slate-600 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Layanan Unggulan</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Paket layanan lengkap untuk kebutuhan bangunan residensial maupun komersial. Fleksibel, transparan, dan
            berorientasi hasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={prefersReducedMotion ? undefined : float}
              initial="initial"
              animate="animate"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-blue-900 text-white grid place-items-center shadow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold tracking-tight text-blue-900">{s.title}</h3>
              </div>
              <p className="text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 text-blue-600" /> <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proyek" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Proyek Terpilih</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">Beberapa dokumentasi pekerjaan yang telah kami selesaikan.</p>
          </div>
          <a
            href="#kontak"
            className="hidden md:inline-flex items-center gap-2 text-sm rounded-xl border border-blue-300 px-4 py-2 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            Minta Portofolio Lengkap <FiArrowRight />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={prefersReducedMotion ? undefined : float}
              initial="initial"
              animate="animate"
              className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[4/3] bg-blue-100">
                <img
                  src={p.img.src}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold tracking-tight text-blue-900">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-lg bg-blue-100 px-2.5 py-1 text-xs text-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proses" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Proses Kerja</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Transparan, kolaboratif, dan berorientasi pada kualitas.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Konsultasi", desc: "Diskusi kebutuhan, target, dan anggaran." },
            { step: "2", title: "Desain & RAB", desc: "Konsep, gambar teknis, & estimasi biaya." },
            { step: "3", title: "Eksekusi", desc: "Pelaksanaan lapangan & quality control." },
            { step: "4", title: "Serah Terima", desc: "Dokumentasi & garansi pekerjaan." },
          ].map((it) => (
            <motion.div
              key={it.step}
              variants={prefersReducedMotion ? undefined : float}
              initial="initial"
              animate="animate"
              className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <span className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-blue-900 text-white grid place-items-center shadow">
                {it.step}
              </span>
              <h3 className="font-semibold tracking-tight text-blue-900">{it.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-900 to-blue-700 p-8 md:p-12 shadow-sm overflow-hidden text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Siap Bangun atau Renovasi Bersama Kami?</h3>
              <p className="text-blue-100 mt-2 max-w-prose">
                Dapatkan survei & konsultasi gratis. Kami akan bantu dari perencanaan hingga pekerjaan selesai.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#kontak"
                  className="rounded-xl bg-amber-500 text-blue-900 px-5 py-3 text-sm shadow hover:shadow-md hover:bg-amber-400 transition-all inline-flex items-center gap-2"
                >
                  Hubungi Tim <FiPhoneCall />
                </a>
                <a
                  href="#kontak"
                  className="rounded-xl border border-blue-300 px-5 py-3 text-sm hover:border-blue-100 hover:bg-blue-800/30 transition-all inline-flex items-center gap-2"
                >
                  Kirim Email <FiMail />
                </a>
              </div>
            </div>
            <motion.div
              className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg overflow-hidden"
              variants={prefersReducedMotion ? undefined : float}
              initial="initial"
              animate="animate"
            >
              <img 
                src={ctaImage.src} 
                alt="Konsultasi Konstruksi" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="kontak" className="border-t border-blue-200 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-blue-900 text-white grid place-items-center shadow">
                <FiShield className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight text-blue-900">Gebang Construction</span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              Mitra konstruksi & interior tepercaya. Mengutamakan kualitas, ketepatan waktu, dan layanan ramah.
            </p>
            <div className="flex gap-3 text-slate-600">
              <a
                href="tel:+6281234567890"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm hover:border-blue-400 transition-all"
              >
                <FiPhoneCall className="text-blue-600" /> +62 812-3456-7890
              </a>
              <a
                href="mailto:halo@gebang.co.id"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm hover:border-blue-400 transition-all"
              >
                <FiMail className="text-blue-600" /> halo@gebang.co.id
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold tracking-tight mb-3 text-blue-900">Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {services.slice(0, 6).map((s) => (
                <li key={s.title} className="flex items-center gap-2">
                  <FiCheckCircle className="text-blue-600" />
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-tight mb-3 text-blue-900">Lokasi</h4>
            <p className="text-sm text-slate-600 inline-flex items-start gap-2">
              <FiMapPin className="mt-0.5 text-blue-600" /> Jl. Contoh Raya No. 123, Gebang, Indonesia
            </p>
            <div className="mt-3">
              <a
                href="https://maps.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-900 text-white px-4 py-2 text-sm shadow hover:shadow-md hover:bg-blue-800 transition-all"
              >
                Lihat di Maps <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-200 py-6 text-center text-xs text-slate-500 bg-white">
          © {new Date().getFullYear()} Gebang Construction. All rights reserved.
        </div>
      </footer>
    </main>
  );
}