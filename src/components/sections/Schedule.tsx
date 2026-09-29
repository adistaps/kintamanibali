'use client';

import React from "react";
import { Sun, Sunset, Clock3, CheckCircle2, ArrowRight } from "lucide-react";

export default function Schedule() {
    return (
        <section id="jadwal" className="w-full bg-white py-12 sm:py-24 font-sans text-[#0F172A] select-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

                    {/* Left Column: Headers & Timeline */}
                    <div className="flex flex-col pr-0 lg:pr-8">

                        {/* Header */}
                        <span
                            className="mb-3 text-xl md:text-2xl text-[#3B82F6]"
                            style={{ fontFamily: "'Dancing Script', 'Caveat', 'Comic Sans MS', cursive" }}
                        >
                            Best Itinerary Plan
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight text-[#0C134F] sm:text-4xl lg:text-5xl leading-[1.2]">
                            Itinerary yang sudah<br />teratur rapi.
                        </h2>

                        <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-slate-500">
                            Penjemputan dimulai pukul 04:00–05:00 WITA dari area Kintamani. Sunrise terbaik ada di pukul 05:45. Seluruh tour selesai sekitar pukul 09:00.
                        </p>

                        {/* Vertical Timeline */}
                        <div className="relative mt-8 sm:mt-12 space-y-8 sm:space-y-10 pl-2">
                            {/* Dotted Line Penghubung */}
                            <div className="absolute left-[25px] top-6 bottom-6 w-px border-l-2 border-dotted border-slate-300"></div>

                            {/* Step 1 */}
                            <div className="relative flex items-start gap-4 sm:gap-5">
                                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0C134F] text-white shadow-md">
                                    <Sun className="h-5 w-5" />
                                </div>
                                <div className="pt-1.5 sm:pt-2">
                                    <h3 className="text-base sm:text-lg font-bold text-[#0C134F]">Penjemputan</h3>
                                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                                        Meeting point di area Kintamani. Tepat waktu sangat penting agar tidak ketinggalan golden hour.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-start gap-4 sm:gap-5">
                                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0C134F] text-white shadow-md">
                                    <Sunset className="h-5 w-5" />
                                </div>
                                <div className="pt-1.5 sm:pt-2">
                                    <h3 className="text-base sm:text-lg font-bold text-[#0C134F]">Destinasi Tour</h3>
                                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                                        Sunrise → Black Lava → Pura Segara → Sesi Foto Jeep → Drop-off.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex items-start gap-4 sm:gap-5">
                                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0C134F] text-white shadow-md">
                                    <Clock3 className="h-5 w-5" />
                                </div>
                                <div className="pt-1.5 sm:pt-2">
                                    <h3 className="text-base sm:text-lg font-bold text-[#0C134F]">Info Durasi</h3>
                                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                                        Durasi tour ±5–6 jam. Start 04:00 WITA dan selesai ±09:00–10:00. Konfirmasi slot dengan admin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 3 Schedule Cards */}
                    <div className="flex flex-col gap-4 sm:gap-6">

                        {/* Card 1: Penjemputan */}
                        <div className="relative flex flex-col sm:flex-row items-center rounded-[1.25rem] bg-[#F1F5F9] p-2.5 sm:p-3 shadow-sm overflow-hidden border border-white">
                            {/* Header / Left Box */}
                            <div className="flex w-full sm:w-[220px] shrink-0 flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center rounded-xl bg-white p-3.5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative z-10">
                                <div>
                                    <span className="text-xs sm:text-sm font-bold text-[#0C134F]">Sesi Pagi</span>
                                    <div className="mt-0 sm:mt-2 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0C134F]">04:00</div>
                                    <span className="hidden sm:block mt-1 text-xs font-medium text-slate-500">WITA / Kintamani Area</span>
                                </div>
                                <button className="sm:mt-5 flex w-fit items-center gap-1.5 rounded-full bg-[#0C134F] px-3 py-1.5 sm:px-4 sm:py-2.5 text-[10px] font-bold text-white transition-transform hover:scale-105">
                                    Wajib Ikut <ArrowRight size={12} strokeWidth={3} />
                                </button>
                            </div>

                            {/* Desktop List (100% Kode Asli Anda) */}
                            <div className="hidden sm:flex flex-1 w-full pl-8 py-5 flex-col gap-3.5 relative z-10">
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    04:00 WITA Penjemputan
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    04:30 WITA Opsi Kumpul
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    05:00 WITA Batas Akhir
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    Meeting Point Kintamani
                                </div>
                            </div>

                            {/* Mobile Grid (HANYA MUNCUL DI HP: Ringkas 2 Kolom) */}
                            <div className="grid sm:hidden grid-cols-2 gap-2 w-full pt-3 pb-1 px-1 relative z-10">
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    04:00 WITA Penjemputan
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    04:30 WITA Opsi Kumpul
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    05:00 WITA Batas Akhir
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    Meeting Point Kintamani
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Destinasi / Eksplorasi */}
                        <div className="relative flex flex-col sm:flex-row items-center rounded-[1.25rem] bg-[#F1F5F9] p-2.5 sm:p-3 shadow-sm overflow-hidden border border-white">
                            <div className="flex w-full sm:w-[220px] shrink-0 flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center rounded-xl bg-white p-3.5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative z-10">
                                <div>
                                    <span className="text-xs sm:text-sm font-bold text-[#0C134F]">Destinasi</span>
                                    <div className="mt-0 sm:mt-2 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0C134F]">05:45</div>
                                    <span className="hidden sm:block mt-1 text-xs font-medium text-slate-500">WITA / Golden Hour</span>
                                </div>
                                <button className="sm:mt-5 flex w-fit items-center gap-1.5 rounded-full bg-[#0C134F] px-3 py-1.5 sm:px-4 sm:py-2.5 text-[10px] font-bold text-white transition-transform hover:scale-105">
                                    Eksplorasi <ArrowRight size={12} strokeWidth={3} />
                                </button>
                            </div>

                            {/* Desktop List */}
                            <div className="hidden sm:flex flex-1 w-full pl-8 py-5 flex-col gap-3.5 relative z-10">
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    05:45 WITA Sunrise Point
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    07:00 WITA Black Lava
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    Wisata Pura Segara
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    Sesi Foto Jeep Estetik
                                </div>
                            </div>

                            {/* Mobile Grid */}
                            <div className="grid sm:hidden grid-cols-2 gap-2 w-full pt-3 pb-1 px-1 relative z-10">
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    05:45 WITA Sunrise Point
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    07:00 WITA Black Lava
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    Wisata Pura Segara
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    Sesi Foto Jeep Estetik
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Selesai */}
                        <div className="relative flex flex-col sm:flex-row items-center rounded-[1.25rem] bg-[#F1F5F9] p-2.5 sm:p-3 shadow-sm overflow-hidden border border-white">
                            <div className="flex w-full sm:w-[220px] shrink-0 flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center rounded-xl bg-white p-3.5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative z-10">
                                <div>
                                    <span className="text-xs sm:text-sm font-bold text-[#0C134F]">Selesai</span>
                                    <div className="mt-0 sm:mt-2 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0C134F]">09:00</div>
                                    <span className="hidden sm:block mt-1 text-xs font-medium text-slate-500">WITA / Drop-off Hotel</span>
                                </div>
                                <button className="sm:mt-5 flex w-fit items-center gap-1.5 rounded-full bg-[#0C134F] px-3 py-1.5 sm:px-4 sm:py-2.5 text-[10px] font-bold text-white transition-transform hover:scale-105">
                                    Info Penting <ArrowRight size={12} strokeWidth={3} />
                                </button>
                            </div>

                            {/* Desktop List */}
                            <div className="hidden sm:flex flex-1 w-full pl-8 py-5 flex-col gap-3.5 relative z-10">
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    09:00 WITA Tour Selesai
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    Durasi Keseluruhan ±5–6 Jam
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    Pengantaran Kembali
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-4 w-4 shrink-0" strokeWidth={2.5} />
                                    Konfirmasi Slot ke Admin
                                </div>
                            </div>

                            {/* Mobile Grid */}
                            <div className="grid sm:hidden grid-cols-2 gap-2 w-full pt-3 pb-1 px-1 relative z-10">
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    09:00 WITA Tour Selesai
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    Durasi Keseluruhan ±5–6 Jam
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    Pengantaran Kembali
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                                    <CheckCircle2 className="text-[#3B82F6] h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                                    Konfirmasi Slot ke Admin
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}