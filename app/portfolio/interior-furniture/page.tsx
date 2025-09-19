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

// Gambar dari /public (ganti sesuai aset/Cloudinary)
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

// ===== Data (khusus Interior Furniture) =====
const highlights = [
  { icon: FiShield, title: "Bergaransi", desc: "Garansi konstruksi & finishing sesuai perjanjian." },
  { icon: FiClock, title: "On Schedule", desc: "Produksi workshop & instalasi onsite terjadwal." },
  { icon: FiTool, title: "Material & Hardware Pilihan", desc: "Plywood/Blockboard, HPL/Duco/Veneer, engsel & rel soft-close." },
  { icon: FiMapPin, title: "Solo Raya", desc: "Solo, Sukoharjo, Karanganyar, Boyolali & sekitar." },
];

const scopes = [
  "Built-in: kitchen set, pantry, wardrobe swing/sliding, kabinet TV, rak display",
  "Loose custom: meja makan/kerja, bedside, credenza, coffee table",
  "Material utama: plywood/multiplex, blockboard; rangka solid (opsional)",
  "Finishing: HPL/duco PU/melamine, veneer + clear coat; edge banding rapi",
  "Hardware: soft-close hinge, tandem/undermount drawer, gas spring, profil handle/handleless",
  "Aksen: kaca cermin, aluminium frame, fluted panel, lighting LED (strip/spot)",
  "Interior kids/teen room & workspace ergonomis (cable management)",
  "Storage pintar: pull-out pantry, corner susan, laci dalam, divider cutlery",
  "Shop drawing & 3D preview (opsional) sebelum produksi",
  "Instalasi, touch-up, dan QC final + manual perawatan",
];

// Testimoni
type Testi = { name: string; role: string; comment: string; rating: number };
const testimonials: Testi[] = [
  { name: "Ibu Mega", role: "Apartemen – Solo", comment: "Wardrobe sliding silent, finishing duco halus. Pemasangan bersih.", rating: 5 },
  { name: "Bpk. Raka", role: "Rumah – Colomadu", comment: "Kitchen set HPL kuat & mudah dibersihkan, storage maksimal.", rating: 5 },
  { name: "Kedai Nara", role: "Komersial – Jebres", comment: "Counter & rak display presisi, LED bikin produk standout.", rating: 5 },
];

// Proyek Furniture
const projectTeaser = [
  { id: "FUR-001", title: "Kitchen Set HPL + LED", location: "Solo", year: 2025, cover: project1.src, tags: ["Kitchen", "HPL"] },
  { id: "FUR-002", title: "Wardrobe Sliding + Cermin", location: "Colomadu", year: 2024, cover: project2.src, tags: ["Wardrobe", "Sliding"] },
  { id: "FUR-003", title: "Backdrop TV + Rak Display", location: "Kartasura", year: 2024, cover: project3.src, tags: ["TV Wall", "Lighting"] },
  { id: "FUR-004", title: "Pantry & Coffee Bar", location: "Sukoharjo", year: 2025, cover: project4.src, tags: ["Pantry", "Storage"] },
];

export default function InteriorFurniturePage() {
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
        <title>Interior Furniture | Gebang Construction</title>
        <meta
          name="description"
          content="Jasa interior furniture custom: kitchen set, wardrobe, kabinet TV, meja, rak display. Material & hardware pilihan, finishing rapi, bergaransi."
        />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="space-y-6">
              <motion.h1 variants={fadeUp()} className="text-4xl/tight md:text-5xl/tight font-bold tracking-tight">
                Jasa <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Interior Furniture</span> Custom
              </motion.h1>
              <motion.p variants={fadeUp(0.1)} className="text-blue-100 max-w-xl">
                Built-in & loose sesuai kebutuhan ruangmu—fungsional, tahan lama, dan tampil estetis. Produksi workshop, instalasi rapi.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3">
                <a href="#keunggulan" className="rounded-xl bg-amber-500 text-blue-900 px-5 py-3 text-sm shadow hover:shadow-md hover:bg-amber-400 transition-all">Lihat Keunggulan</a>
                <a href="#proyek" className="rounded-xl border border-blue-300 px-5 py-3 text-sm hover:border-blue-100 hover:bg-blue-800/30 transition-all">Lihat Proyek</a>
              </motion.div>
              <motion.ul variants={fadeUp(0.3)} className="flex items-center gap-4 text-blue-100 text-sm">
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Bergaransi</li>
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> On Schedule</li>
                <li className="inline-flex items-center gap-2"><FiCheckCircle className="text-amber-400" /> Finishing Halus</li>
              </motion.ul>
            </motion.div>

            <motion.div className="relative" variants={prefersReducedMotion ? undefined : float} initial="initial" animate="animate">
              <div className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10" />
                <img src={heroImage.src} alt="Interior Furniture – Gebang Construction" className="w-full h-full object-cover" />
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
          <p className="text-slate-600 mt-2 max-w-2xl">Fungsionalitas, estetika, dan ketahanan material jadi prioritas utama kami.</p>
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
          <p className="text-slate-600 mt-2 max-w-2xl">Bisa design–produce–install lengkap atau hanya produksi/instalasi saja.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-900">Proyek Furniture Terbaru</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">Beberapa pekerjaan built-in & loose terakhir kami.</p>
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
          <p className="text-slate-600 mt-2 max-w-2xl">Konstruksi kuat, finishing halus, hardware awet—itu standar kami.</p>
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
          <p className="text-slate-600 mt-2 max-w-2xl">Belum ada gambar? Tenang—kami bisa mulai dari brief & ukuran ruang.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "HPL vs duco vs veneer—pilih mana?", a: "HPL ekonomis & tahan gores; duco rapi & bebas warna; veneer tampil kayu natural. Kami sesuaikan style & budget." },
            { q: "Berapa lama produksi & instalasi?", a: "Umumnya 10–21 hari kerja (shop drawing → produksi workshop → instalasi onsite) tergantung volume." },
            { q: "Bisa lighting LED tersembunyi?", a: "Bisa. Kami siapkan jalur listrik aman & manajemen kabel agar rapi dan mudah servis." },
            { q: "Skema pembayaran?", a: "Termin progres (DP–produksi–instalasi–serah terima). Semua terdokumentasi & transparan." },
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
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Konsultasi Interior Furniture Gratis</h3>
              <p className="text-blue-100 mt-2 max-w-prose">
                Kirim ukuran ruang, referensi desain, & preferensi material—kami bantu desain, RAB, dan jadwal produksi.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/gebang-construction#kontak"
                  className="rounded-xl bg-amber-500 text-blue-900 px-5 py-3 text-sm shadow hover:shadow-md hover:bg-amber-400 transition-all inline-flex items-center gap-2"
                >
                  Hubungi Tim <FiPhoneCall />
                </Link>
                <a
                  href="mailto:hello@gebangconstruction.id?subject=Konsultasi%20Interior%20Furniture"
                  className="rounded-xl border border-blue-300 px-5 py-3 text-sm hover:border-blue-100 hover:bg-blue-800/30 transition-all inline-flex items-center gap-2"
                >
                  Kirim Email <FiMail />
                </a>
              </div>
            </div>
            <motion.div className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg overflow-hidden" variants={prefersReducedMotion ? undefined : float} initial="initial" animate="animate">
              <img src={ctaImage.src} alt="Konsultasi Interior Furniture" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
