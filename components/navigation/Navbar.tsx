// components/site/Navbar.tsx
'use client';

import Image from 'next/image';

export default function Navbar() {
return (
<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white bg-white/80 border-b border-[#104269]">
<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-16 w-16 rounded-xl text-[#104269] grid place-items-center ">
<Image
src="/assets/images/GBKlogo.png"
alt="Gebang Construction Logo"
width={64}
height={64}
className="h-16 w-16"
priority
/>
</div>
<span className="font-bold text-xl tracking-tight text-[#104269]">Gebang Konstruksi</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-[#104269] font-bold">
<a href="#layanan" className="hover:text-[#fd7733] transition-colors">Layanan</a>
<a href="#proyek" className="hover:text-[#fd7733] transition-colors">Proyek</a>
<a href="#proses" className="hover:text-[#fd7733] transition-colors">Proses</a>
<a href="#kontak" className="hover:text-[#fd7733] transition-colors">Kontak</a>
</nav>
</div>
</header>
);
}