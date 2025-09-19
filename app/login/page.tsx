// app/(admin)/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { FiLock, FiMail } from 'react-icons/fi';

export default function AdminLoginPage() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const snap = await getDoc(doc(db, 'users', user.uid));
    const role = snap.exists() ? (snap.data() as any).role : undefined;
    if (role === 'admin') {
    window.location.href = '/admin';
    } else {
    setError('Access denied. Admin only.');
    }
    } catch (err: any) {
    setError(err?.message ?? 'Login failed');
    } finally {
    setLoading(false);
    }
    };
    
    return (
    <div className="min-h-screen grid place-items-center bg-neutral-50 dark:bg-neutral-950 px-4">
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="w-full max-w-md rounded-2xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/60 dark:border-neutral-800 p-6"
    >
    <div className="mb-6">
    <h1 className="text-2xl font-bold">Admin Login</h1>
    <p className="text-sm text-gray-500">Sign in with your admin account.</p>
    </div>
    
    <form onSubmit={onSubmit} className="space-y-4">
    <div>
    <label className="text-sm font-medium">Email</label>
    <div className="mt-1 flex items-center gap-2 rounded-xl border bg-white/50 dark:bg-neutral-900/50 dark:border-neutral-800 px-3">
    <FiMail className="text-gray-500" />
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full bg-transparent py-2.5 outline-none"
    placeholder="admin@example.com"
    />
    </div>
    </div>
    
    <div>
    <label className="text-sm font-medium">Password</label>
    <div className="mt-1 flex items-center gap-2 rounded-xl border bg-white/50 dark:bg-neutral-900/50 dark:border-neutral-800 px-3">
    <FiLock className="text-gray-500" />
    <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full bg-transparent py-2.5 outline-none"
    placeholder="••••••••"
    />
    </div>
    </div>
    
    {error && <p className="text-sm text-red-500">{error}</p>}
    
    <button
    type="submit"
    disabled={loading}
    className="w-full rounded-xl border px-4 py-2.5 font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800/50 disabled:opacity-50"
    >
    {loading ? 'Signing in…' : 'Sign In'}
    </button>
    </form>
    </motion.div>
    </div>
    );
    }