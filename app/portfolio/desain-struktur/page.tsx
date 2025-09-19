"use client";

import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  cubicBezier,
  type Variants,
} from "framer-motion";
import {
  FiCheckCircle,
  FiShield,
  FiClock,
  FiTool,
  FiMapPin,
  FiPhoneCall,
  FiMail,
  FiStar,
  FiThumbsUp,
  FiHelpCircle,
  FiZap,
  FiCalendar,
  FiArrowRight,
  FiAperture,
  FiLayers,
} from "react-icons/fi";

// Gambar dari /public (ganti sesuai aset/Cloudinary kamu)
import heroImage from "@/public/assets/images/hero.jpg";
import ctaImage from "@/public/assets/images/cta-image.jpg";
import project1 from "@/public/assets/images/project1.jpg";
import project2 from "@/public/assets/images/project2.jpg";
import project3 from "@/public/assets/images/project3.jpg";
import project4 from "@/public/assets/images/project4.jpg";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

// ===== Motion helpers =====
const easeOutQuint = cubicBezier(0.22, 1, 0.36, 1);
const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutQuint, delay } },
});
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const float: Variants = {
  initial: { y: 0 },
  animate: { y: [0, -6, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
};

// ===== Data (khusus Desain & Struktur) =====
const highlights = [
  { icon: FiShield, title: "Compliance SNI", desc: "Perhitungan & detail mengikuti SNI bangunan & best practice." },
  { icon: FiClock, title: "Tahap Jelas", desc: "Brief → skematik → pengembangan desain → gambar kerja." },
  { icon: FiTool, title: "Dokumen Lengkap", desc: "Gambar arsitektur–struktur–MEP koordinatif + RAB/BOQ." },
  { icon: FiMapPin, title: "Solo Raya", desc: "Solo, Sukoharjo, Karanganyar, Boyolali & sekitar." },
];

const scopes = [
  "Survey, pengukuran lahan, studi KDB/KLB & tata ruang dasar",
  "Konsep arsitektur: massa, zonasi, orientasi, sirkulasi & pencahayaan",
  "Denah, tampak, potongan, detail pintu–jendela–tangga",
  "3D visual/moodboard material (opsional)",
  "Pra-struktur: skema grid, modul, posisi kolom–balok–shear wall",
  "Desain struktur: pondasi (batu kali/footplat/tiang), sloof, kolom, balok, plat lantai/atap",
  "Evaluasi beban & gempa dasar, penulangan & detail sambungan",
  "Detail atap: baja ringan/baja, kuda-kuda & bracing",
  "Koordinasi bukaan, duct/shaft dengan MEP agar minim rework",
  "Dokumen tender: gambar kerja, RAB/BOQ, spesifikasi teknis & metode",
];

// Testimoni
type Testi = { name: string; role: string; comment: string; rating: number };
const testimonials: Testi[] = [
  { name: "Bpk. Arfan", role: "Rumah 2 Lantai – Solo", comment: "Denah fungsional, struktur efisien. Gambar kerja rapi & jelas.", rating: 5 },
  { name: "Ibu Tita", role: "Ruko – Jebres", comment: "Perizinan terbantu, RAB transparan. Pelaksanaan lancar.", rating: 5 },
  { name: "CV Bima", role: "Gudang – Palur", comment: "Grid & bracing kuat, bentang ekonomis. Dokumen tender lengkap.", rating: 5 },
];

// Proyek Desain & Struktur
const projectTeaser = [
  { id: "DS-001", title: "Rumah 2 Lantai – Minimalis", location: "Solo", year: 2025, cover: project1.src, tags: ["Arsitektur", "Struktur"] },
  { id: "DS-002", title: "Ruko 3 Lantai – Mixed Use", location: "Colomadu", year: 2024, cover: project2.src, tags: ["Ruko", "RAB"] },
  { id: "DS-003", title: "Gudang Baja – Bentang 20m", location: "Kartasura", year: 2024, cover: project3.src, tags: ["Gudang", "Baja"] },
  { id: "DS-004", title: "Renovasi & Penguatan Struktur", location: "Sukoharjo", year: 2025, cover: project4.src, tags: ["Retrofitting", "Detailing"] },
];

export default function DesainStrukturPage() {
  const prefersReducedMotion = useReducedMotion();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const wave = useMemo(
    () => (
      <svg aria-hidden viewBox="0 0 1440 200" className="absolute inset-x-0 -bottom-0 h-[120px] w-full text-blue-50" preserveAspectRatio="none">
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
        <title>Desain & Struktur | Gebang Construction</title>
        <meta
          name="description"
          content="Layanan desain arsitektur & perhitungan struktur: gambar kerja, RAB/BOQ, detail penulangan, koordinasi MEP, compliant SNI. Siap tender & pelaksanaan."
        />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="space-y-6">
              <motion.h1 variants={fadeUp()} className="text-4xl/tight md:text-5xl/tight font-bold tracking-tight">
                Layanan <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Desain & Struktur</span>
              </motion.h1>
              <motion.p variants={fadeUp(0.1)} className="text-blue-100 max-w-xl">
                Dari konsep hingga gambar kerja & RAB—arsitektur yang fungsional
                dengan struktur efisien, aman, dan siap dikerjakan di lapangan.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3">
                <a href="#keunggulan" className="rounded-xl bg-amber-500 text-blue-900 px-5 py-3 text-sm shadow hover:shadow-md hover:bg-amber-400 transition-all">Lihat Keunggulan</a>
                <a href="#proyek" className="rounded-xl border border-blue-300 px-5 py-3 text-sm hover:border-blue-100 hover:bg-blue-800/30 transition-all">Lihat Proyek</a>
              </motion.div>
              <motion.ul variants={fadeUp(0.3)} className="flex items-center gap-4 text-blue-100 text-sm">
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Compliance SNI</li>
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Dokumen Lengkap</li>
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Siap Tender</li>
              </motion.ul>
            </motion.div>

            <motion.div className="relative" variants={prefersReducedMotion ? undefined : float} initial="initial" animate="animate">
              <div className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10" />
                <img src={heroImage.src} alt="Desain & Struktur – Gebang Construction" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl bg-white/90 backdrop-blur border border-white/80 grid place-items-center shadow z-20">
                <FiZap className="h-8 w-8 text-blue-900" />
              </div>
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-2xl bg-white/90 backdrop-blur border border-white/80 grid place-items-center shadow z-20">
                <FiLayers className="h-8 w-8 text-blue-900" />
              </div>
            </motion.div>
          </div>
        </div>
        {wave}
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Kenapa Memilih Kami</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Output lengkap & koordinatif mengurangi risiko rework saat pelaksanaan.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <motion.div key={h.title} variants={prefersReducedMotion ? undefined : float} initial="initial" animate="animate" className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-blue-900 text-white grid place-items-center shadow mb-3">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold tracking-tight text-blue-900">{h.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cakupan Pekerjaan */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Cakupan Pekerjaan</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Bisa design only atau design & build—fleksibel sesuai kebutuhanmu.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {scopes.map((s) => (
            <div key={s} className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 flex items-start gap-2">
              <FiCheckCircle className="mt-0.5 text-blue-600 shrink-0" /> <span>{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Proyek Terbaru */}
      <section id="proyek" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Proyek Desain & Struktur</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">Beberapa proyek perencanaan yang siap tender & pelaksanaan.</p>
          </div>
          <Link
            href="/gebang-construction#proyek"
            className="hidden md:inline-flex items-center gap-2 text-sm rounded-xl border border-blue-300 px-4 py-2 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            Lihat Portofolio Lengkap <FiArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectTeaser.map((p, idx) => (
            <motion.article
              key={p.id}
              variants={prefersReducedMotion ? undefined : float}
              initial="initial"
              animate="animate"
              transition={{ delay: Math.min(idx * 0.03, 0.2) }}
              className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[4/3] bg-blue-100">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold tracking-tight text-blue-900">{p.title}</h3>
                <div className="mt-1 flex items-center gap-4 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1"><FiMapPin /> {p.location}</span>
                  <span className="inline-flex items-center gap-1"><FiCalendar /> {p.year}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-lg bg-blue-100 px-2.5 py-1 text-xs text-blue-800">
                      <FiAperture /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* tombol sekunder pada mobile */}
        <div className="mt-6 md:hidden">
          <Link
            href="/gebang-construction#proyek"
            className="inline-flex items-center gap-2 text-sm rounded-xl border border-blue-300 px-4 py-2 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            Lihat Portofolio Lengkap <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Testimoni */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Apa Kata Klien</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Gambar kerja lengkap, koordinasi solid, dan struktur ekonomis.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure key={i} variants={prefersReducedMotion ? undefined : float} initial="initial" animate="animate" className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-900 text-white grid place-items-center">
                  <FiThumbsUp className="h-5 w-5" />
                </div>
                <div>
                  <figcaption className="font-semibold text-blue-900">{t.name}</figcaption>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <blockquote className="mt-3 text-sm text-slate-700">“{t.comment}”</blockquote>
              <div className="mt-3 flex gap-1 text-amber-400" aria-label={`Rating ${t.rating} dari 5`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FiStar key={idx} className={idx < t.rating ? "opacity-100" : "opacity-30"} />
                ))}
              </div>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Pertanyaan Umum</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Belum ada brief matang? Kami bantu memformulasikan kebutuhan & anggaran.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "Output dokumen apa saja?", a: "Gambar arsitektur (denah, tampak, potongan, detail), gambar struktur (pondasi–balok–kolom–plat), RAB/BOQ, spesifikasi teknis, dan as-built bila design & build." },
            { q: "Bisakah desain bertahap sesuai budget?", a: "Bisa. Kami siapkan opsi bertahap (fase 1–2–3) tanpa mengorbankan struktur utama." },
            { q: "Apakah bantu proses perizinan?", a: "Ya, kami bantu kelengkapan dokumen & gambar sesuai ketentuan daerah." },
            { q: "Skema pembayaran?", a: "Termin per fase (skematik, DD, CD/gambar kerja). Transparan & terdokumentasi." },
          ].map((f, idx) => {
            const open = openIdx === idx;
            return (
              <div key={f.q} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <button onClick={() => setOpenIdx(open ? null : idx)} className="w-full flex items-start gap-3 text-left">
                  <div className="h-8 w-8 shrink-0 rounded-xl bg-blue-900 text-white grid place-items-center">
                    <FiHelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">{f.q}</p>
                    <div className={`text-sm text-slate-600 transition-all ${open ? "mt-1 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0 overflow-hidden"}`}>
                      {f.a}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="relative mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-900 to-blue-700 p-8 md:p-12 shadow-sm overflow-hidden text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Diskusikan Desain & Struktur Proyekmu</h3>
              <p className="text-blue-100 mt-2 max-w-prose">
                Kirim ukuran lahan/denah eksisting, kebutuhan ruang, & target anggaran—kami bantu konsep, gambar kerja, dan RAB.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/gebang-construction#kontak"
                  className="rounded-xl bg-amber-500 text-blue-900 px-5 py-3 text-sm shadow hover:shadow-md hover:bg-amber-400 transition-all inline-flex items-center gap-2"
                >
                  Hubungi Tim <FiPhoneCall />
                </Link>
                <a
                  href="mailto:hello@gebangconstruction.id?subject=Konsultasi%20Desain%20%26%20Struktur"
                  className="rounded-xl border border-blue-300 px-5 py-3 text-sm hover:border-blue-100 hover:bg-blue-800/30 transition-all inline-flex items-center gap-2"
                >
                  Kirim Email <FiMail />
                </a>
              </div>
            </div>
            <motion.div className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg overflow-hidden" variants={prefersReducedMotion ? undefined : float} initial="initial" animate="animate">
              <img src={ctaImage.src} alt="Konsultasi Desain & Struktur" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
