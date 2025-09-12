// components/ServicesGrid.tsx
import React from 'react';
import Image from 'next/image';

type Service = {
  name: string;
  imageSrc: string;
  href: string;
};

const services: Service[] = [
  { name: 'Rangka Atap', imageSrc: '/images/services/rangka-atap.jpg', href: '/services/rangka-atap' },
  { name: 'Kanopi', imageSrc: '/images/services/kanopi.jpg', href: '/services/kanopi' },
  { name: 'Plafon', imageSrc: '/images/services/plafon.jpg', href: '/services/plafon' },
  { name: 'Las', imageSrc: '/images/services/las.jpg', href: '/services/las' },
  { name: 'Baja WF', imageSrc: '/images/services/baja‑wf.jpg', href: '/services/baja-wf' },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <a key={s.name} href={s.href} className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-48">
                <Image
                  src={s.imageSrc}
                  alt={s.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">{s.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
