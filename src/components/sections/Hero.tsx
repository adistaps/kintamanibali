'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Check,
    Clock3,
    Users
} from 'lucide-react';

const CARDS_DATA = [
    {
        titleLines: ["100% AMAN", "& SERU"],
        subtext: "PENGALAMAN PERTAMA TERBAIK",
        icon: Check,
        bgImage: "/images/rafting-1.webp",
        isGrayscale: false,
    },
    {
        titleLines: ["12 KM", "TRIP SERU"],
        subtext: "DURASI ±3 JAM PENGARUNGAN",
        icon: Clock3,
        bgImage: "/images/rafting-2.webp",
        isGrayscale: true,
    },
    {
        titleLines: ["FASILITAS", "ALL-IN"],
        subtext: "GUIDE + MAKAN + DOKUMENTASI",
        icon: Users,
        bgImage: "/images/rafting-3.webp",
        isGrayscale: false,
    }
];

export default function Hero() {
    const [activeBgIndex] = useState(0);
    const [logoError, setLogoError] = useState(false);

    const heroBackgrounds = [
        "/images/rafting-5.webp",
        "/images/rafting-6.webp"
    ];

    return (
        <section id="hero" className="relative w-full font-sans select-none">

            {/* SEO: H1 tersembunyi secara visual */}
            <h1 className="sr-only">
                Rafting Elo Magelang — Arung Jeram Terbaik dan Termurah Dekat Borobudur
            </h1>

            {/* ==========================================
            TOP HERO BANNER
            ========================================== */}
            <div className="relative bg-[#0d0d0d] text-white min-h-[45vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col justify-between items-center px-4 pt-12 sm:pt-28 pb-20 sm:pb-32">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBackgrounds[activeBgIndex]}
                        alt="Rafting Background"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        className="object-cover object-center transition-all duration-700 brightness-90 contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/20 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 my-auto py-4 flex flex-col items-center">
                    {!logoError ? (
                        <Image
                            src="/logo.webp"
                            alt="Rafting Elo Magelang - Arung Jeram Sungai Elo"
                            width={400}
                            height={160}
                            priority
                            className="h-36 sm:h-64 md:h-80 lg:h-96 w-auto object-contain mx-auto mb-2 brightness-0 invert drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
                            onError={() => setLogoError(true)}
                        />
                    ) : (
                        <div className="logo-fallback mb-2 text-3xl sm:text-5xl font-extrabold tracking-widest text-white uppercase border-2 border-blue-600 px-6 py-2 rounded-xs">
                            LOGOTYPE
                        </div>
                    )}
                </div>
            </div>

            {/* ==========================================
            OVERLAPPING CARDS
            ========================================== */}
            <div className="relative z-30 max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8 -mt-12 sm:-mt-28 lg:-mt-32">
                {/* Grid 3 Kolom */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-6">
                    {CARDS_DATA.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative min-h-[120px] sm:min-h-[260px] lg:min-h-[300px] flex flex-col justify-between p-3 sm:p-6 lg:p-7 rounded-none border border-white/10 overflow-hidden cursor-pointer bg-[#141414] shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                            >
                                {/* Background Photo */}
                                <Image
                                    src={card.bgImage}
                                    alt={card.subtext}
                                    fill
                                    sizes="(max-width: 768px) 33vw, 33vw"
                                    loading="lazy"
                                    className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${card.isGrayscale
                                        ? "grayscale brightness-[0.45] group-hover:grayscale-0 group-hover:brightness-[0.6]"
                                        : "brightness-[0.45] group-hover:brightness-[0.6]"
                                        }`}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

                                {/* KONTEN UTAMA */}
                                <div className="relative z-10 flex flex-col justify-between h-full">

                                    {/* 1. IKON DI KIRI ATAS */}
                                    <div className="flex items-center justify-start">
                                        <div className="w-6 h-6 min-[380px]:w-7 min-[380px]:h-7 sm:w-10 sm:h-10 rounded-full bg-[#ccff00] flex items-center justify-center shrink-0 shadow-lg">
                                            <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
                                        </div>
                                    </div>

                                    {/* 2. JUDUL & DESKRIPSI DI BAWAH IKON */}
                                    <div className="flex flex-col gap-1 sm:gap-2 mt-auto">
                                        <div>
                                            {card.titleLines.map((line, lIdx) => (
                                                <div
                                                    key={lIdx}
                                                    className="text-[10px] min-[380px]:text-[11px] sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md group-hover:text-[#ccff00] transition-colors"
                                                >
                                                    {line}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Deskripsi / Subtext */}
                                        <p className="text-[9px] min-[380px]:text-[10px] sm:text-xs font-bold tracking-wider text-neutral-300 uppercase leading-snug">
                                            {card.subtext}
                                        </p>
                                    </div>

                                </div>

                                {/* Hover Accent Bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ccff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}