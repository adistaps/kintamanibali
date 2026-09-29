import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

const PACKAGES = [
    {
        title: "Rafting + VW Safari Borobudur",
        badge: "Paling Populer",
        subtitle: "Pengarungan Sungai Elo + Keliling Desa Wisata Borobudur Naik Mobil VW Cabrio",
        image: "/images/rafting-1.webp",
        price: "Hemat Rp 50rb/pax",
        features: [
            "Rafting Elo Kompleks 12 KM",
            "Sewa Mobil VW Cabrio Klasik (3 Jam)",
            "Kunjungan 3 Spot Desa Wisata / Edukasi",
            "Makan Siang & Dokumentasi Foto HD"
        ],
        waText: "Halo%20Admin%2C%20saya%20tertarik%20dengan%20Paket%20Combo%20Rafting%20%2B%20VW%20Safari"
    },
    {
        title: "Rafting + Outbound & Team Building",
        badge: "Khusus Rombongan",
        subtitle: "Paket Komplit Penguat Kekompakan Tim & Fun Games Outdoor Bersama Trainer Master",
        image: "/images/rafting-3.webp",
        price: "Kapasitas Besar",
        features: [
            "Rafting Elo 12 KM + Guide BNSP",
            "Program Outbound Fun Games (2-3 Jam)",
            "Master Trainer & Sound System Set",
            "Prasmanan Khas + Coffeebreak"
        ],
        waText: "Halo%20Admin%2C%20saya%20tertarik%20dengan%20Paket%20Combo%20Rafting%20%2B%20Outbound"
    },
    {
        title: "Rafting + Jeep Lava Tour Merapi",
        badge: "Petualangan Ganda",
        subtitle: "Sensasi Sungai Elo Dipadu Offroad Jeep Menyusuri Jejak Erupsi Gunung Merapi",
        image: "/images/rafting-2.webp",
        price: "Double Adrenalin",
        features: [
            "Rafting Elo Kompleks 12 KM",
            "Jeep Offroad Merapi Route Short/Medium",
            "Driver Jeep Pengalaman & Helm Safety",
            "Makan Siang & Asuransi Pengarungan"
        ],
        waText: "Halo%20Admin%2C%20saya%20tertarik%20dengan%20Paket%20Combo%20Rafting%20%2B%20Jeep%20Merapi"
    }
];

export default function ComboPackages() {
    return (
        <section id="combo" className="w-full bg-white py-16 sm:py-24 border-t border-neutral-200 select-none">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                            Paket Hemat Multi-Destinasi
                        </p>
                        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                            Paket Combo Tour,<br />
                            <span className="text-neutral-400">Liburan Terima Beres.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-xs sm:text-sm font-medium text-neutral-500 leading-relaxed">
                        Gabungkan keseruan Rafting Sungai Elo dengan destinasi wisata hits Magelang & Jogja dalam satu hari praktis tanpa ribet.
                    </p>
                </div>

                {/* Grid 3 Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {PACKAGES.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Card Image Cover */}
                            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-neutral-900">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                <div className="absolute top-4 left-4 z-10">
                                    <span className="inline-flex items-center gap-1.5 bg-[#ccff00] text-black px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
                                        <Sparkles className="w-3 h-3 fill-black shrink-0" />
                                        <span>{pkg.badge}</span>
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 z-10">
                                    <h3 className="text-lg font-black uppercase text-white leading-snug drop-shadow-md">
                                        {pkg.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <p className="text-xs text-neutral-500 font-medium leading-relaxed mb-4">
                                        {pkg.subtitle}
                                    </p>

                                    <div className="space-y-2.5 mb-6 border-t border-neutral-100 pt-4">
                                        {pkg.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Link */}
                                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-wider text-black bg-neutral-100 px-3 py-1 rounded-lg">
                                        {pkg.price}
                                    </span>
                                    <a
                                        href={`https://wa.me/6285159771469?text=${pkg.waText}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold px-4 py-2 rounded-full transition-transform active:scale-95 shadow-md"
                                    >
                                        <span>Pesan Combo</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
