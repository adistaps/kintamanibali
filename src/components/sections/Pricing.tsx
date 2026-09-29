'use client';
import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Plus, Star, Zap } from "lucide-react";

const packages = [
    {
        name: "Paket Elo Standard",
        price: "Rp650.000",
        note: "Maks 4 peserta/boat",
        details: "±8–12 KM · 2,5–3 jam",
        features: ["Perlengkapan rafting", "Pemandu min. 1 orang/boat", "Transport lokal", "Makan siang"],
        icon: Plus,
        isPopular: false,
    },
    {
        name: "Paket Elo + Foto",
        price: "Rp750.000",
        note: "Populer",
        details: "±8–12 KM · 2,5–3 jam",
        features: ["Semua fasilitas Standard", "Foto dokumentasi", "Maks 4 peserta/boat", "Snack & kelapa muda"],
        icon: Star,
        isPopular: true,
    },
    {
        name: "Paket Progo Atas",
        price: "Rp1.000.000",
        note: "Minimal 2 boat",
        details: "±8 KM · 1,5–2 jam",
        features: ["Perlengkapan rafting standar", "Pemandu min. 1 orang/boat", "Transport lokal", "Makan siang"],
        icon: Plus,
        isPopular: false,
    },
    {
        name: "Paket Progo Bawah",
        price: "Rp2.000.000",
        note: "Minimal 2 boat · Trip pagi",
        details: "±8 KM · 1,5–2 jam",
        features: ["Perlengkapan rafting standar", "Pemandu min. 2 orang/boat", "Transport lokal", "Foto dokumentasi"],
        icon: Zap,
        isPopular: false,
    },
];

export default function Pricing() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="paket" className="relative w-full overflow-hidden bg-black py-16 text-white select-none">
            {/* Background Photo */}
            <Image
                src="/images/rafting-4.webp"
                alt="Pengarungan Arung Jeram Sungai Elo Magelang"
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover opacity-80 pointer-events-none"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
                {/* Header Section */}
                <div className="mb-8 sm:mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                            Paket rafting untuk<br />
                            <span className="text-[#ccff00]">setiap cerita.</span>
                        </h2>
                    </div>

                    {/* Controls Navigasi Scroll Khusus Mobile/Tablet */}
                    <div className="flex items-center justify-between gap-4 md:justify-end">
                        <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-gray-300 hidden sm:block">
                            Harga transparan per boat, sudah termasuk perlengkapan dan pemandu.
                        </p>
                        <div className="flex gap-2 lg:hidden">
                            <button
                                onClick={() => scroll('left')}
                                aria-label="Scroll Kiri"
                                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/60 text-white active:bg-[#ccff00] active:text-black transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                aria-label="Scroll Kanan"
                                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/60 text-white active:bg-[#ccff00] active:text-black transition-colors"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* HORIZONTAL SCROLL GRID (Mobile: Scrollable, Desktop: 4 Columns Grid) */}
                <div
                    ref={scrollContainerRef}
                    className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4"
                >
                    {packages.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <article
                                key={item.name}
                                className={`group relative flex min-w-[280px] max-w-[320px] lg:max-w-none lg:min-w-0 flex-none snap-start flex-col justify-between border p-5 sm:p-6 backdrop-blur-md transition-all duration-300 ${item.isPopular
                                    ? "border-[#ccff00] bg-white/15"
                                    : "border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/15"
                                    }`}
                            >
                                {/* Top-Right Accent Square Badge (Tetap Tajam / No Rounded) */}
                                <div className="absolute right-0 top-0 flex items-center">
                                    {item.isPopular && (
                                        <span className="mr-2 bg-[#ccff00] px-2 py-0.5 text-[9px] font-black uppercase text-black">
                                            POPULER
                                        </span>
                                    )}
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#ccff00] text-black">
                                        <IconComponent className="h-5 w-5 stroke-[2.5]" />
                                    </div>
                                </div>

                                <div>
                                    {/* Subtitle / Note */}
                                    <p className="pr-16 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-300">
                                        {item.note}
                                    </p>

                                    {/* Package Name */}
                                    <h3 className="mt-1 pr-12 text-lg sm:text-xl font-black uppercase tracking-tight text-white">
                                        {item.name}
                                    </h3>

                                    {/* Price */}
                                    <div className="mt-4 border-b border-white/10 pb-4">
                                        <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                                            {item.price}
                                        </div>
                                        <p className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#ccff00]">
                                            / boat · {item.details}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <ul className="mt-4 space-y-2.5">
                                        {item.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-200">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#ccff00]" />
                                                <span className="leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom CTA Link (Tipe Box Kotak Tajam) */}
                                <div className="mt-6 border-t border-white/10 pt-4">
                                    <a
                                        href={`https://wa.me/6285159771469?text=${encodeURIComponent(`Halo Admin Elo Rafting, saya berminat untuk booking *${item.name}* (${item.price} ${item.details}). Mohon informasi ketersediaan slot tanggal.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-between border border-white/20 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:border-[#ccff00] group-hover:bg-[#ccff00] group-hover:text-black"
                                    >
                                        <span>Booking Paket Ini</span>
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom Banner */}
                <div className="mt-4 flex flex-col justify-between gap-3 border border-white/20 bg-white/10 p-5 backdrop-blur-md sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-white">Video Dokumentasi</p>
                        <p className="text-xs text-gray-300">Abadikan momen seru anda dengan video dokumentasi agar lebih bermakna</p>
                    </div>
                    <p className="text-base font-black text-[#ccff00]">mulai Rp300.000</p>
                </div>
            </div>
        </section>
    );
}