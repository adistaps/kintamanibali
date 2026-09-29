"use client"

import React from "react"
import Image from "next/image"
import { ArrowUp, Camera, Share2, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="w-full bg-[#081246] text-white font-sans px-6 py-12 sm:px-12 sm:py-16 select-none border-t border-blue-900/50">
            <div className="mx-auto max-w-7xl">

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* 1. Kolom Kiri: Brand & Info */}
                    <div className="md:col-span-4 flex flex-col justify-between min-h-[260px]">
                        <div>
                            {/* Logo Image & Brand Name */}
                            <a href="#hero" className="flex items-center gap-3 mb-4">
                                <Image
                                    src="/logo.webp"
                                    alt="Sunrise Kintamani Logo"
                                    width={140}
                                    height={44}
                                    priority
                                    className="h-9 w-auto object-contain brightness-0 invert"
                                />
                                <span className="text-lg font-black uppercase tracking-wider text-white">
                                    Sunrise Kintamani
                                </span>
                            </a>

                            <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed max-w-sm mb-6 font-medium">
                                Penyedia layanan Batur Jeep Tour 4x4 profesional di Kintamani, Bali. Nikmati pengalaman Golden Sunrise, Black Lava & Pura Segara tak terlupakan.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div>
                            <span className="text-xs text-blue-300/60 font-semibold uppercase tracking-wider block mb-3">Sosial Media</span>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://instagram.com/sunrise_kintamani.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                                    aria-label="Instagram"
                                >
                                    <Camera className="w-4 h-4 stroke-[2]" />
                                </a>
                                <a
                                    href="https://tiktok.com/@mybalijeep7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                                    aria-label="TikTok"
                                >
                                    <Share2 className="w-4 h-4 stroke-[2]" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2. Kolom Tengah: Kontak & Lokasi */}
                    <div className="md:col-span-4 flex flex-col justify-between min-h-[260px]">
                        <div>
                            <span className="text-xs text-blue-300/60 font-semibold uppercase tracking-wider block mb-4">
                                Hubungi Kami
                            </span>

                            <div className="space-y-4 text-xs sm:text-sm">
                                {/* Phone / WhatsApp */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-blue-300/70 block uppercase font-bold">WhatsApp & Telepon</span>
                                        <a
                                            href="https://wa.me/6285159771469"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-white hover:text-blue-300 transition-colors"
                                        >
                                            +62 851-5977-1469
                                        </a>
                                    </div>
                                </div>

                                {/* Instagram Username */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-blue-300/70 block uppercase font-bold">Instagram</span>
                                        <a
                                            href="https://instagram.com/sunrise_kintamani.id"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-white hover:text-blue-300 transition-colors"
                                        >
                                            sunrise_kintamani.id
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-300">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-blue-300/70 block uppercase font-bold">Lokasi</span>
                                        <p className="font-semibold text-white">
                                            Kintamani, Bangli, Bali, Indonesia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Kolom Navigasi */}
                    <div className="md:col-span-2">
                        <span className="text-xs text-blue-300/60 font-semibold uppercase tracking-wider block mb-4">
                            Navigasi
                        </span>
                        <nav className="flex flex-col gap-2.5 text-xs sm:text-sm font-medium text-blue-100/90">
                            <a href="#hero" className="hover:text-white transition-colors">Home</a>
                            <a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a>
                            <a href="#paket" className="hover:text-white transition-colors">Paket Tour</a>
                            <a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan</a>
                            <a href="#jadwal" className="hover:text-white transition-colors">Itinerary</a>
                            <a href="#galeri" className="hover:text-white transition-colors">Galeri</a>
                            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                        </nav>
                    </div>

                    {/* 4. Kolom Kanan: Back to Top & Copyright */}
                    <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end min-h-[260px]">
                        <button
                            onClick={scrollToTop}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#081246] transition-all cursor-pointer shadow-lg"
                            aria-label="Kembali ke Atas"
                        >
                            <ArrowUp className="w-5 h-5 stroke-[2]" />
                        </button>

                        <div className="mt-8 md:mt-0 text-left md:text-right">
                            <p className="text-xs font-semibold text-white">
                                © 2026 Sunrise Kintamani
                            </p>
                            <p className="text-[11px] text-blue-300/60 mt-0.5">
                                All rights reserved.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}