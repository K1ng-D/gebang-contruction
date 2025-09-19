// components/ProtectedRouteAdmin.tsx
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ProtectedRouteAdmin({ children }: { children: ReactNode }) {
const [loading, setLoading] = useState(true);
const [allowed, setAllowed] = useState(false);

useEffect(() => {
const unsub = onAuthStateChanged(auth, async (user: User | null) => {
if (!user) {
setAllowed(false);
setLoading(false);
return;
}
try {
const snap = await getDoc(doc(db, 'users', user.uid));
const role = snap.exists() ? (snap.data() as any).role : undefined;
if (role === 'admin') {
setAllowed(true);
} else {
await signOut(auth);
setAllowed(false);
}
} catch (e) {
console.error(e);
setAllowed(false);
} finally {
setLoading(false);
}
});
return () => unsub();
}, []);

if (loading) {
return (
<div className="min-h-[60vh] grid place-items-center">
<div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-300 border-t-transparent" />
</div>
);
}

if (!allowed) {
if (typeof window !== 'undefined') {
window.location.href = '/admin/login';
}
return null;
}

return <>{children}</>;
}
 