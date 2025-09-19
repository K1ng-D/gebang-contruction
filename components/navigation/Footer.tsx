// components/site/Footer.tsx
'use client';

import { FiArrowRight, FiCheckCircle, FiMail, FiMapPin, FiPhoneCall, FiShield } from 'react-icons/fi';

const services = [
'Konstruksi', 'Plafon', 'Atap Baja Ringan', 'Interior', 'Kanopi', 'Landscape',
];

export default function Footer() {
return (
<footer id="kontak" className="border-t border-blue-200 bg-blue-50">
<div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-xl bg-[#104269] text-white grid place-items-center shadow">
<FiShield className="h-5 w-5" />
</div>
<span className="font-semibold tracking-tight text-[#104269]">Gebang Construction</span>
</div>
<p className="text-sm text-slate-600 max-w-sm">
Mitra konstruksi & interior tepercaya. Mengutamakan kualitas, ketepatan waktu, dan layanan ramah.
</p>
<div className="flex gap-3 text-slate-600">
<a href="tel:+6281234567890" className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm hover:border-blue-400 transition-all">
<FiPhoneCall className="text-blue-600" /> +62 812-3456-7890
</a>
<a href="mailto:halo@gebang.co.id" className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm hover:border-blue-400 transition-all">
<FiMail className="text-blue-600" /> halo@gebang.co.id
</a>
</div>
</div>

<div>
<h4 className="font-semibold tracking-tight mb-3 text-[#104269]">Layanan</h4>
<ul className="space-y-2 text-sm text-slate-600">
{services.map((s) => (
<li key={s} className="flex items-center gap-2">
<FiCheckCircle className="text-blue-600" /> {s}
</li>
))}
</ul>
</div>

<div>
<h4 className="font-semibold tracking-tight mb-3 text-[#104269]">Lokasi</h4>
<p className="text-sm text-slate-600 inline-flex items-start gap-2">
<FiMapPin className="mt-0.5 text-blue-600" /> Jl. Contoh Raya No. 123, Gebang, Indonesia
</p>
<div className="mt-3">
<a
href="https://maps.google.com/"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-2 rounded-xl bg-[#104269] text-white px-4 py-2 text-sm shadow hover:shadow-md hover:bg-blue-800 transition-all"
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
);
}