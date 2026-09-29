'use client';

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Clock, MapPin, Star } from "lucide-react";

const packages = [
    {
        name: "Paket Sunrise",
        price: "Rp500.000",
        note: "Per Pack · 2 Destinasi",
        details: "±5 Jam · 04:00–09:00",
        location: "Gunung Batur",
        duration: "±5 Jam",
        time: "04:00–09:00",
        features: ["Jeep 4x4 + Driver", "Golden Sunrise Batur", "Black Lava Adventure", "Sesi Foto Jeep"],
        image: "/1.webp",
        isPopular: false,
    },
    {
        name: "Sunrise + Pura Segara",
        price: "Rp600.000",
        note: "Populer · 3 Destinasi",
        details: "±5 Jam · 04:00–09:00",
        location: "Pura Segara",
        duration: "±5 Jam",
        time: "04:00–09:00",
        features: ["Semua fasilitas Paket Sunrise", "Kunjungan Pura Segara", "View Danau Batur", "FREE Drop-off Area Kintamani"],
        image: "/2.webp",
        isPopular: true,
    },
    {
        name: "Sunrise + Black Sand",
        price: "Rp650.000",
        note: "Lengkap · 4 Destinasi",
        details: "±6 Jam · 04:00–10:00",
        location: "Black Sand Batur",
        duration: "±6 Jam",
        time: "04:00–10:00",
        features: ["Sunrise Gunung Batur", "Black Lava + Black Sand", "Pura Segara", "FREE Drop-off Kintamani"],
        image: "/3.webp",
        isPopular: false,
    },
    {
        name: "Paket Private Tour",
        price: "Hubungi Kami",
        note: "Custom · Fleksibel",
        details: "Waktu & Rute Sesuka Kamu",
        location: "Custom Route",
        duration: "Fleksibel",
        time: "Sesuai Request",
        features: ["Jeep privat eksklusif", "Rute custom pilihan", "Foto profesional driver", "Jadwal fleksibel"],
        image: "/4.webp",
        isPopular: false,
    },
];

export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Fungsi update indeks dots aktif saat pengguna swipe di HP
    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : container.clientWidth;

        const newIndex = Math.round(scrollPosition / cardWidth);
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    };

    // Fungsi klik dots untuk langsung beralih slide
    const scrollToIndex = (index: number) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const card = container.children[index] as HTMLElement;
        if (card) {
            container.scrollTo({
                left: card.offsetLeft - container.offsetLeft,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    return (
        <section id="paket" className="w-full bg-white py-16 font-sans text-[#111827] select-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        {/* Subtitle Cursive (Gaya TripFlow) */}
                        <span
                            className="text-lg md:text-2xl text-[#1D4ED8] mb-2 md:mb-3 block"
                            style={{ fontFamily: "'Dancing Script', 'Caveat', 'Comic Sans MS', cursive" }}
                        >
                            Pilih Paket Anda
                        </span>

                        {/* Judul Utama Navy Blue */}
                        <h2 className="text-3xl font-bold leading-[1.2] text-[#08126A] sm:text-4xl lg:text-[3rem]">
                            Paket Jeep Tour<br />
                            Untuk Setiap Petualangan.
                        </h2>
                    </div>

                    {/* Subdeskripsi */}
                    <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#6B7280] pb-1">
                        Harga transparan per paket, sudah termasuk jeep 4x4 dan driver profesional.
                    </p>
                </div>


                {/* Wrapper Cards: Horizontal Scroll khusus Mobile/Tablet, Grid di Desktop (lg) */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:pb-0"
                >
                    {packages.map((item, index) => {
                        const whatsappMessage = `Halo Admin Sunrise Kintamani, saya berminat booking *${item.name}* (${item.price} · ${item.details}). Mohon informasi ketersediaan slot tanggal.`;
                        const whatsappUrl = `https://wa.me/6285159771469?text=${encodeURIComponent(whatsappMessage)}`;

                        return (
                            <article
                                key={index}
                                className="group flex min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-col justify-between rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 pb-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] snap-center shrink-0 lg:shrink"
                            >
                                <div>
                                    {/* Frame Gambar + Floating Pill */}
                                    <div className="relative h-[240px] w-full rounded-t-[2rem] bg-gray-100 overflow-visible">
                                        <div className="relative h-full w-full overflow-hidden rounded-t-[2rem]">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            />
                                        </div>

                                        {/* Tag Populer / Arrow Button */}
                                        {item.isPopular ? (
                                            <span className="absolute right-3 top-3 rounded-full bg-[#0B1221] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                                                Populer
                                            </span>
                                        ) : (
                                            <a
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Lihat Detail"
                                                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#08126A] text-white transition-transform hover:scale-110"
                                            >
                                                <ArrowUpRight className="h-4 w-4" />
                                            </a>
                                        )}

                                        {/* Floating Info Pill (Lokasi & Durasi) */}
                                        <div className="absolute bottom-0 left-4 right-4 translate-y-1/2 flex items-center justify-between rounded-xl bg-white px-3.5 py-2.5 shadow-[0_8px_20px_-3px_rgba(0,0,0,0.1)] border border-gray-100/90 z-10">
                                            <div className="flex items-center gap-1.5 truncate mr-1">
                                                <MapPin className="h-3.5 w-3.5 text-[#64748B] shrink-0" />
                                                <span className="text-[10px] font-bold text-[#1F2937] truncate">{item.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 shrink-0">
                                                <Clock className="h-3.5 w-3.5 text-[#64748B] shrink-0" />
                                                <span className="text-[10px] font-bold text-[#1F2937]">{item.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Konten Isi Card */}
                                    <div className="flex flex-col px-5 pt-9">
                                        {/* Note / Subtitle */}
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                                            {item.note}
                                        </p>

                                        {/* Nama Paket */}
                                        <h3 className="mt-1 text-lg font-bold text-[#111827] line-clamp-1">
                                            {item.name}
                                        </h3>

                                        {/* Fitur / Layanan Include */}
                                        <ul className="mt-3 space-y-2">
                                            {item.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                                                    <Check className="h-3.5 w-3.5 text-[#10B981] shrink-0 mt-0.5" />
                                                    <span className="leading-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Rating Bintang */}
                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-3 w-3 fill-[#FBBF24] text-[#FBBF24]" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Card: Harga & Tombol WhatsApp */}
                                <div className="mt-5 px-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase">Harga</span>
                                        <span className="text-base sm:text-lg font-bold text-[#111827] leading-none">
                                            {item.price}
                                        </span>
                                    </div>

                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-full bg-[#08126A] px-4 py-2 text-[11px] font-bold text-white transition-all hover:bg-[#0c1d8a] active:scale-95 shadow-sm"
                                    >
                                        <span>Booking</span>
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Indikator Dots Navigation (Hanya Muncul di Tampilan Mobile/Tablet) */}
                <div className="mt-6 flex justify-center items-center gap-2 lg:hidden">
                    {packages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                                ? "w-7 bg-[#0B1221]"
                                : "w-2.5 bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}