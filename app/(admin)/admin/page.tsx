// app/(admin)/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiBox, FiCoffee, FiActivity } from 'react-icons/fi';
import { db } from '@/lib/firebase';
import { collection, getCountFromServer } from 'firebase/firestore';

export default function AdminDashboardPage() {
const [counts, setCounts] = useState<{users:number; products:number; foods:number}>({ users: 0, products: 0, foods: 0 });
const [loading, setLoading] = useState(true);

useEffect(() => {
    (async () => {
    try {
    const [usersSnap, productsSnap, foodsSnap] = await Promise.all([
    getCountFromServer(collection(db, 'users')),
    getCountFromServer(collection(db, 'products')),
    getCountFromServer(collection(db, 'foods')),
    ]);
    setCounts({
    users: usersSnap.data().count,
    products: productsSnap.data().count,
    foods: foodsSnap.data().count,
    });
    } finally {
    setLoading(false);
    }
    })();
    }, []);
    
    const cards = [
    { label: 'Users', value: counts.users, icon: FiUsers },
    { label: 'Products', value: counts.products, icon: FiBox },
    { label: 'Foods', value: counts.foods, icon: FiCoffee },
    ];
    
    return (
    <div className="space-y-6">
    <div>
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p className="text-sm text-gray-500">Overview of your e‑catalog.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cards.map(({ label, value, icon: Icon }, i) => (
    <motion.div
    key={label}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: i * 0.05 }}
    className="rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/60 dark:border-neutral-800 p-4"
    >
    <div className="flex items-center justify-between">
    <div>
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-3xl font-bold">{loading ? '…' : value}</div>
    </div>
    <Icon size={28} className="text-gray-500" />
    </div>
    </motion.div>
    ))}
    </div>
    
    {/* Example Activity Card */}
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.2 }}
    className="rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/60 dark:border-neutral-800 p-4"
    >
    <div className="flex items-center gap-3 mb-2">
    <FiActivity />
    <h2 className="font-semibold">Recent Activity</h2>
    </div>
    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
    <li>• Welcome to your new admin dashboard ✨</li>
    <li>• Hook up a Firestore collection to list latest orders/changes.</li>
    </ul>
    </motion.div>
    </div>
    );
    }
    