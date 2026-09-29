"use client"

import Image from "next/image"
import { Globe2, MessageCircle, Play, Music2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="w-full bg-white p-4 sm:p-6 lg:p-8">
            <div className="w-full">

                {/* Grid Split Full Width */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                    {/* Kartu Kiri - Lime (#ccff00) */}
                    <div className="relative overflow-hidden lg:col-span-5 bg-[#ccff00] text-black rounded-3xl p-8 sm:p-12 flex flex-col justify-between min-h-[480px]">

                        {/* Grain Texture Overlay */}
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Content Top */}
                        <div className="relative z-10 flex items-center gap-3">
                            <Image
                                src="/logob+.webp"
                                alt="Rafting Elo Magelang Logo"
                                width={120}
                                height={36}
                                loading="lazy"
                                className="h-9 w-auto object-contain brightness-0"
                            />
                            <span className="font-bold text-lg tracking-wider uppercase text-black">Rafting Elo</span>
                        </div>

                        {/* Content Bottom */}
                        <div className="relative z-10 mt-12">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-black leading-[1.1]">
                                Membawa kamu lebih dekat dengan alam.
                            </h3>

                            <div className="mt-8 flex items-center gap-2 text-black/80">
                                <a href="#" className="p-3 rounded-xl border border-black/15 bg-black/5 hover:bg-black hover:text-white transition-all">
                                    <Globe2 className="size-4" />
                                </a>
                                <a href="#" className="p-3 rounded-xl border border-black/15 bg-black/5 hover:bg-black hover:text-white transition-all">
                                    <Music2 className="size-4" />
                                </a>
                                <a href="#" className="p-3 rounded-xl border border-black/15 bg-black/5 hover:bg-black hover:text-white transition-all">
                                    <Play className="size-4" />
                                </a>
                                <a href="#" className="p-3 rounded-xl border border-black/15 bg-black/5 hover:bg-black hover:text-white transition-all">
                                    <MessageCircle className="size-4" />
                                </a>
                            </div>

                            <p className="mt-8 text-xs font-mono text-black/60 font-semibold">
                                © 2026 Rafting Elo. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Kartu Kanan - Sembunyi di Mobile (hidden), Muncul di Desktop (lg:flex) */}
                    <div className="hidden lg:flex lg:col-span-7 bg-neutral-50/80 border border-neutral-200/80 rounded-3xl p-8 sm:p-12 flex-col justify-between gap-10">

                        {/* Links Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">Sitemap</h4>
                                <ul className="space-y-3 text-xs font-medium text-neutral-500">
                                    <li><a href="#hero" className="hover:text-neutral-900 transition-colors">Home</a></li>
                                    <li><a href="#fasilitas" className="hover:text-neutral-900 transition-colors">Fasilitas</a></li>
                                    <li><a href="#booking" className="hover:text-neutral-900 transition-colors">Cara Booking</a></li>
                                    <li><a href="#tentang" className="hover:text-neutral-900 transition-colors">Tentang Kami</a></li>
                                    <li><a href="#" className="hover:text-neutral-900 transition-colors">Blog</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">Jelajahi</h4>
                                <ul className="space-y-3 text-xs font-medium text-neutral-500">
                                    <li><a href="#paket" className="hover:text-neutral-900 transition-colors">Paket & Harga</a></li>
                                    <li><a href="#jadwal" className="hover:text-neutral-900 transition-colors">Jadwal Trip</a></li>
                                    <li><a href="#syarat" className="hover:text-neutral-900 transition-colors">Syarat & Ketentuan</a></li>
                                    <li><a href="#faq" className="hover:text-neutral-900 transition-colors">FAQ</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">Temui Kami</h4>
                                <p className="text-xs font-medium text-neutral-500 leading-relaxed mb-3">
                                    Magelang, Jawa Tengah, Indonesia
                                </p>
                                <p className="text-xs font-mono font-bold text-neutral-900">
                                    hello@raftingelo.id
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-4">Sosial</h4>
                                <ul className="space-y-3 text-xs font-medium text-neutral-500">
                                    <li><a href="#" className="hover:text-neutral-900 transition-colors">Instagram</a></li>
                                    <li><a href="#" className="hover:text-neutral-900 transition-colors">TikTok</a></li>
                                    <li><a href="#" className="hover:text-neutral-900 transition-colors">YouTube</a></li>
                                    <li><a href="https://wa.me/6285159771469" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">WhatsApp</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </footer>
    )
}