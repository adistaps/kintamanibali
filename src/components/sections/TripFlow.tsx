'use client';

import React from "react";
import { Compass, Camera, Mountain, Backpack } from "lucide-react";

const steps = [
    {
        title: "Penjemputan & Persiapan",
        description: "Penjemputan dari hotel Anda atau meeting point Kintamani, dilanjutkan brefing singkat siap menjelajah.",
        icon: Compass,
    },
    {
        title: "Golden Sunrise & Foto Jeep",
        description: "Saksikan keindahan matahari terbit Gunung Batur dan abadikan momen estetik terbaik di atas Jeep 4x4.",
        icon: Camera,
    },
    {
        title: "Black Lava & Drop-off",
        description: "Eksplorasi hamparan lahar hitam vulkanik Batur, dilanjutkan pengantaran kembali ke titik awal dengan aman.",
        icon: Mountain,
    },
];

export default function TripFlow() {
    return (
        <section id="alur-trip" className="w-full bg-white py-12 sm:py-24 font-sans select-none overflow-hidden">
            <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
                    {/* Subtitle bergaya Cursive/Handwriting */}
                    <span
                        className="text-lg md:text-2xl text-[#1D4ED8] mb-2 md:mb-3"
                        style={{ fontFamily: "'Dancing Script', 'Caveat', 'Comic Sans MS', cursive" }}
                    >
                        Cara Kerja
                    </span>

                    {/* Judul Utama */}
                    <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-[#08126A] sm:text-4xl lg:text-5xl leading-[1.2]">
                        Proses & Alur Petualangan<br />
                        Tinggal Terima Beres
                    </h2>
                </div>

                {/* Flow Container */}
                <div className="relative mt-6 md:mt-10">

                    {/* Garis Lengkung Putus-Putus (Tampil Baik di Mobile Maupun Desktop) */}
                    <div className="block absolute top-[25px] md:top-[45px] left-0 right-0 w-full h-[60px] md:h-[120px] -z-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1000 120" preserveAspectRatio="none" fill="none">
                            {/* Titik Kiri */}
                            <circle cx="30" cy="100" r="5" fill="#CBD5E1" />
                            {/* Titik Kanan */}
                            <circle cx="970" cy="100" r="5" fill="#CBD5E1" />
                            {/* Garis Lengkung Utama */}
                            <path
                                d="M 30 100 Q 500 -30 970 100"
                                stroke="#CBD5E1"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                            />
                        </svg>
                    </div>

                    {/* Grid 3 Langkah (3 Kolom Sejajar Baik di HP Maupun Desktop) */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-6 md:gap-8 relative z-10 px-1 sm:px-6 md:px-12">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            // Index 1 (Tengah) posisinya ditarik ke atas persis seperti desain desktop
                            const isMiddle = index === 1;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col items-center text-center ${isMiddle ? "-mt-4 md:-mt-8" : "mt-4 md:mt-12"
                                        }`}
                                >
                                    {/* Watermark Backpack (Khusus di Langkah Ke-3) */}
                                    {index === 2 && (
                                        <div className="absolute top-[-10px] right-[-5px] md:top-[-20px] md:right-8 -z-10 text-slate-200 opacity-60 rotate-[15deg] pointer-events-none">
                                            <Backpack className="w-[60px] h-[60px] md:w-[150px] md:h-[150px]" strokeWidth={1} />
                                        </div>
                                    )}

                                    {/* Circle Icon Navy Blue */}
                                    <div className="mb-2 sm:mb-4 md:mb-6 flex h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] md:h-[85px] md:w-[85px] shrink-0 items-center justify-center rounded-full bg-[#08126A] text-white shadow-md md:shadow-lg transition-transform hover:scale-105">
                                        <IconComponent className="h-5 w-5 sm:h-7 sm:w-7 md:h-9 md:w-9 stroke-[1.5]" />
                                    </div>

                                    {/* Judul Langkah */}
                                    <h3 className="text-[11px] sm:text-base md:text-xl font-bold text-[#08126A] mb-1 sm:mb-2 md:mb-3 leading-tight">
                                        {step.title}
                                    </h3>

                                    {/* Deskripsi Langkah */}
                                    <p className="text-[9px] sm:text-xs md:text-[15px] leading-tight sm:leading-relaxed text-slate-500 max-w-[280px]">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}