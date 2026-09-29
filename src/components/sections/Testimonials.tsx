"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
    ["Nadia P.", "Jakarta", "Driver jeep-nya ramah banget dan jago ambil foto/video! Hasil foto di Black Lava aesthetic banget buat feed."],
    ["Bimo R.", "Yogyakarta", "Penjemputan tepat waktu pukul 04:00 WITA. Sunrise Batur-nya indah banget, worth it bangun pagi!"],
    ["PT Arunika", "Semarang", "Gathering kantor 30 pax sewa 10 Jeep Batur. Pelayanan sangat rapi, konvoi aman, dan tim admin fast respon."],
    ["Hendra K.", "Bandung", "Jeep 4x4-nya terawat dan bersih. Pengalaman melintasi lahar hitam Gunung Batur betul-betul tidak terlupakan."],
    ["Sarah & Rian", "Surabaya", "Pertama kali ikutan Batur Sunrise Jeep Tour, ketagihan! Driver-nya sabar banget ngarahin gaya saat sesi foto."],
    ["Dimas A.", "Solo", "Booking serba cepat lewat WA. Sampai titik meeting point langsung disambut ramah. Pelayanan mantap 10/10!"],
    ["Citra W.", "Tangerang", "Suka banget pas diajak eksplor Black Lava & Pura Segara. Pemandangannya luar biasa, momen healing terbaik."],
    ["Keluarga Budi", "Bekasi", "Trip keluarga bareng anak-anak ter-handle dengan sangat baik dan aman. Pilihan terbaik kalau ke Kintamani!"]
] as const

export default function Testimonials() {
    // Duplikasi 2x agar animasi infinite loop marquee berjalan mulus tanpa terputus
    const duplicatedReviews = [...reviews, ...reviews]

    return (
        <section id="testimoni" className="w-full bg-white py-16 sm:py-24 text-[#0F172A] font-sans overflow-hidden select-none">

            {/* Header Section (Gaya TripFlow) */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 flex flex-col items-center text-center">
                <span
                    className="text-lg md:text-2xl text-[#1D4ED8] mb-2 md:mb-3"
                    style={{ fontFamily: "'Dancing Script', 'Caveat', 'Comic Sans MS', cursive" }}
                >
                    Ulasan Wisatawan
                </span>

                <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-[#08126A] sm:text-4xl lg:text-5xl leading-[1.2]">
                    Pulang Membawa Momen Indah<br />
                    & Cerita Baru
                </h2>
            </div>

            {/* Marquee Track dengan Masking Fade Kiri-Kanan */}
            <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex shrink-0 gap-6 pr-6"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 35, // Kecepatan animasi marquee (makin besar nilainya makin lambat)
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedReviews.map(([name, city, quote], index) => (
                        <figure
                            key={`${name}-${index}`}
                            className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md"
                        >
                            <div>
                                <div className="mb-4 flex gap-1 text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <blockquote className="text-sm sm:text-base font-medium leading-relaxed text-slate-700">
                                    “{quote}”
                                </blockquote>
                            </div>

                            <figcaption className="mt-6 border-t border-slate-200/60 pt-4 text-xs sm:text-sm">
                                <strong className="font-bold text-[#0F172A]">{name}</strong>
                                <span className="ml-2 font-mono text-slate-400">· {city}</span>
                            </figcaption>
                        </figure>
                    ))}
                </motion.div>
            </div>

        </section>
    )
}