'use client';

import React from "react";
import Image from "next/image";
import {
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    ArrowUpRight,
    Award,
    Camera,
    Building2,
    ShieldCheck
} from "lucide-react";

export default function WhyUs() {
    return (
        <section id="keunggulan" className="w-full bg-[#F8FAFC] py-16 sm:py-24 font-sans text-[#0F172A] select-none">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Header Bagian Atas (Gaya TripFlow) */}
                <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
                    <span
                        className="text-lg md:text-2xl text-[#1D4ED8] mb-2 md:mb-3"
                        style={{ fontFamily: "'Dancing Script', 'Caveat', 'Comic Sans MS', cursive" }}
                    >
                        Alasan Memilih Kami
                    </span>

                    <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-[#08126A] sm:text-4xl lg:text-5xl leading-[1.2]">
                        Jaminan Pengalaman Sunrise<br />
                        Batur Tak Terlupakan
                    </h2>
                </div>

                {/* Grid Konten Utama (2 Kolom: Kiri Card Gambar & Kanan List Fitur) */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">

                    {/* Kolom Kiri: Card Gambar Besar dengan Social Icons & Fitur 1 */}
                    <div className="lg:col-span-5 flex flex-col rounded-[2rem] bg-white p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100">
                        {/* Wrapper Gambar & Tombol Panah Kanan Atas */}
                        <div className="relative h-[280px] sm:h-[320px] w-full rounded-2xl overflow-hidden bg-slate-100">
                            <Image
                                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800" // Ganti dengan path foto Jeep/Sunrise Kintamani Anda
                                alt="Jeep 4x4 Bertenaga Gunung Batur"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            {/* Tombol Circle Arrow Top Right */}
                            <button
                                aria-label="Lihat Detail Armada"
                                className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm backdrop-blur transition-transform hover:scale-105"
                            >
                                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                            </button>
                        </div>

                        {/* Baris Social Action Bar (Heart, Chat, Share, Bookmark) */}
                        <div className="flex items-center justify-between px-2 pt-4 pb-2">
                            <div className="flex items-center gap-3.5">
                                <Heart className="h-5 w-5 fill-red-500 text-red-500 cursor-pointer" />
                                <MessageCircle className="h-5 w-5 text-slate-700 cursor-pointer" />
                                <Share2 className="h-5 w-5 text-slate-700 cursor-pointer" />
                            </div>
                            <Bookmark className="h-5 w-5 text-slate-900 fill-slate-900 cursor-pointer" />
                        </div>

                        {/* Deskripsi Fitur Utama 1 (Jeep 4x4) */}
                        <div className="px-2 pt-1 pb-2">
                            <h3 className="text-lg font-bold text-[#0F172A]">
                                Jeep 4x4 Bertenaga
                            </h3>
                            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                                Armada Jeep 4x4 terawat dan siap menjelajahi medan vulkanik Gunung Batur dengan aman dan nyaman.
                            </p>
                        </div>
                    </div>

                    {/* Kolom Kanan: Deskripsi Atas, Fitur List, & Dark Highlight Box */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full lg:pl-4">

                        {/* Paragraf Deskripsi Atas */}
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-500 max-w-xl mb-8">
                            Kami tidak sekadar menawarkan tur jeep biasa, tapi pengalaman menyaksikan golden sunrise Gunung Batur yang akan selalu diingat.
                        </p>

                        {/* Fitur Item 2: Driver Berpengalaman */}
                        <div className="flex items-start gap-4 mb-7">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1021] text-white shadow-sm">
                                <Award className="h-5 w-5 stroke-[2]" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                                    Driver Berpengalaman
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-500">
                                    Driver kami paham betul jalur terbaik, titik foto ikonik, dan waktu golden hour yang tidak boleh terlewat.
                                </p>
                            </div>
                        </div>

                        {/* Fitur Item 3: Bantu Foto di Setiap Spot */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1021] text-white shadow-sm">
                                <Camera className="h-5 w-5 stroke-[2]" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                                    Bantu Foto di Setiap Spot
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-500">
                                    Driver siap membantu mengabadikan momen terbaikmu di setiap destinasi — sunrise, black lava, hingga tepi danau.
                                </p>
                            </div>
                        </div>

                        {/* Fitur Item 4 (Dark Highlight Box): FREE Drop-off Kintamani */}
                        <div className="flex items-start gap-4 rounded-2xl bg-[#080D1A] p-5 sm:p-6 text-white shadow-lg">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#080D1A]">
                                <Building2 className="h-5 w-5 stroke-[2.5]" />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-white">
                                    FREE Drop-off Kintamani
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
                                    Setiap paket sudah termasuk drop-off gratis di area Kintamani. Tidak perlu khawatir soal perjalanan pulang.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}