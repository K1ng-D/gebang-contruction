// app/(admin)/admin/layout.tsx
import type { ReactNode } from 'react';
import ProtectedRouteAdmin from '@/components/admin/ProtectedRouteAdmin';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
return (
<ProtectedRouteAdmin>
<div className="min-h-screen grid grid-cols-1 md:grid-cols-[18rem_1fr] bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
{/* Sidebar */}
<AdminSidebar />

{/* Main */}
<div className="flex flex-col min-h-screen">
{/* Topbar (mobile) */}
<div className="md:hidden sticky top-0 z-10 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/60 dark:border-neutral-800 p-3">
<div className="text-base font-semibold">Admin Panel</div>
<div className="text-xs text-gray-500">Nexty Labs</div>
</div>

<main className="p-4 md:p-6 lg:p-8 flex-1">
{children}
</main>
</div>
</div>
</ProtectedRouteAdmin>
);
}