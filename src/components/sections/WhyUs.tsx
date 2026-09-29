"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Award, Camera, Building2 } from 'lucide-react';

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Peralatan Standar SNI",
        description: "Perahu karet PVC heavy-duty, helm pelindung, dan jaket pelampung kualitas SNI berdaya apung tinggi.",
        badge: "100% Safety"
    },
    {
        icon: Award,
        title: "Guide Sertifikasi BNSP",
        description: "Setiap perahu didampingi skipper profesional berlisensi BNSP yang menguasai teknik water rescue.",
        badge: "Terverifikasi"
    },
    {
        icon: Camera,
        title: "Dokumentasi HD",
        description: "Pesan paketnya, abadikan momen seru dengan Foto Video berkualitas kami",
        badge: "Momen Terbaik"
    },
    {
        icon: Building2,
        title: "Basecamp Terluas & Nyaman",
        description: "basecamp luas dan nyaman, parkir muat untuk bus dan juga mobil pribadi, tersedia area bilas, mushola yang berlokasi diarea resto.",
        badge: "Fasilitas All-In"
    }
];

export default function WhyUs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // Navigasi presisi ke slide tertentu berdasarkan index
    const scrollToCard = (index: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cardWidth = container.clientWidth;

        container.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    };

    // Auto-Scroll Otomatis Khusus Tampilan HP / Mobile (3.5 Detik)
    useEffect(() => {
        if (isInteracting) return;

        const interval = setInterval(() => {
            const isMobile = window.innerWidth < 640;
            if (!isMobile) return;

            const nextIndex = (activeIndex + 1) % FEATURES.length;
            scrollToCard(nextIndex);
        }, 3500);

        return () => clearInterval(interval);
    }, [activeIndex, isInteracting]);

    // Detect posisi manual scroll pada ponsel
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollPosition = container.scrollLeft;
        const width = container.clientWidth;

        if (width > 0) {
            const newIndex = Math.round(scrollPosition / width);
            if (newIndex !== activeIndex && newIndex >= 0 && newIndex < FEATURES.length) {
                setActiveIndex(newIndex);
            }
        }
    };

    return (
        <section id="keunggulan" className="w-full bg-white text-neutral-900 py-16 sm:py-24 select-none overflow-hidden">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-400">
                            Alasan Memilih Kami
                        </p>
                        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[1.1]">
                            Jaminan Pengalaman<br />
                            <span className="text-neutral-400">Terbaik & Teraman.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-xs sm:text-sm font-medium text-neutral-500 leading-relaxed">
                        Kami tidak sekadar menawarkan pengarungan sungai, tapi juga standar keselamatan internasional dan kenyamanan terbaik bagi setiap pengunjung.
                    </p>
                </div>

                {/* Container Slider / Grid (Hanya Garis Vertikal) */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    onTouchStart={() => setIsInteracting(true)}
                    onTouchEnd={() => setTimeout(() => setIsInteracting(false), 3000)}
                    className="w-full flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-none border-l border-neutral-200"
                >
                    {FEATURES.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                onClick={() => scrollToCard(idx)}
                                className="group w-full min-w-full sm:min-w-0 snap-start shrink-0 p-6 sm:p-8 flex flex-col justify-between gap-10 transition-colors duration-300 hover:bg-[#ccff00] active:bg-[#ccff00] cursor-pointer border-r border-neutral-200 rounded-none box-border"
                            >
                                {/* Top: Icon Polos & Badge */}
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <Icon className="w-8 h-8 text-neutral-900 group-hover:text-black stroke-[2.2] transition-colors shrink-0" />
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-neutral-100 text-neutral-800 group-hover:bg-black group-hover:text-[#ccff00] px-2.5 py-1 rounded-none transition-colors">
                                            {item.badge}
                                        </span>
                                    </div>

                                    {/* Middle: Judul & Deskripsi */}
                                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-neutral-900 group-hover:text-black mb-3 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-neutral-500 group-hover:text-black leading-relaxed font-medium transition-colors break-words">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom: Footer Nomor Urut */}
                                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                                    <span>Standar Elo Rafting</span>
                                    <span className="text-neutral-900 group-hover:text-black font-black transition-colors">
                                        0{idx + 1}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Indikator Dots untuk HP */}
                <div className="flex justify-center items-center gap-2 mt-8 sm:hidden">
                    {FEATURES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToCard(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-2 transition-all duration-300 rounded-none ${activeIndex === idx
                                ? 'w-8 bg-[#ccff00] border border-black'
                                : 'w-2 bg-neutral-300'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}