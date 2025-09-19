// components/admin/AdminSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiGrid, FiBox, FiCoffee, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

const navItems = [
{ href: '/admin', label: 'Dashboard', icon: FiGrid },
{ href: '/admin/products', label: 'Products', icon: FiBox },
{ href: '/admin/foods', label: 'Foods', icon: FiCoffee },
{ href: '/admin/users', label: 'Users', icon: FiUsers },
{ href: '/admin/settings', label: 'Settings', icon: FiSettings },
];

export default function AdminSidebar() {
const pathname = usePathname();

return (
<aside className="h-full w-72 border-r bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/60 dark:border-neutral-800 hidden md:flex flex-col">
<div className="p-4 border-b dark:border-neutral-800">
<div className="text-xl font-bold">Admin Panel</div>
<div className="text-xs text-gray-500">Nexty Labs</div>
</div>

<nav className="p-2 space-y-1 flex-1">
{navItems.map(({ href, label, icon: Icon }) => {
const active = pathname === href;
return (
<Link key={href} href={href} className="block">
<motion.div
initial={{ opacity: 0, y: 4 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.2 }}
className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium border
${active ? 'bg-gray-100 dark:bg-neutral-800 border-transparent' : 'border-transparent hover:bg-gray-50 dark:hover:bg-neutral-800/50'}`}
>
<Icon className={`shrink-0 ${active ? 'text-black dark:text-white' : 'text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white'}`} size={18} />
<span className="truncate">{label}</span>
</motion.div>
</Link>
);
})}
</nav>

<div className="p-3 border-t dark:border-neutral-800">
<button
onClick={async () => {
await signOut(auth);
window.location.href = '/admin/login';
}}
className="w-full inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800/50"
>
<FiLogOut /> Logout
</button>
</div>
</aside>
);
}