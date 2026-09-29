"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-32 bg-white text-[#111]">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-12">

                {/* Top Section: Label + Headline + CTA */}
                <div className="max-w-6xl mb-10 lg:mb-24">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide mb-3 lg:mb-6 text-gray-500">
                        TENTANG KAMI <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>

                    <h2 className="text-[1.75rem] xs:text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.15] lg:leading-[1.1] tracking-[-0.03em]">
                        Petualangan seru di Sungai Elo, pengalaman arung jeram terbaik di Magelang.
                    </h2>

                    <Link
                        href="https://wa.me/6285159771469"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 lg:mt-6 px-4 py-2.5 lg:px-6 lg:py-3 bg-[#0D4A50] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#1A6B72] active:scale-[0.98] transition-all w-fit shadow-md"
                    >
                        HUBUNGI KAMI
                        <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    </Link>
                </div>

                {/* Bottom Section: 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Column 1: Deskripsi singkat */}
                    <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between h-auto lg:h-full lg:min-h-[400px]">
                        <div>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 mb-4 lg:mb-6">
                                <Image
                                    src="/logob+.webp"
                                    alt="Rafting Elo Logo"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <p className="text-sm font-medium leading-relaxed pr-0 lg:pr-4 text-[#333]">
                                Rafting Elo Magelang hadir untuk memberikan pengalaman arung jeram yang aman, seru, dan tak terlupakan bagi semua kalangan — keluarga, komunitas, maupun rombongan perusahaan.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Keamanan & Pengalaman */}
                    <div className="md:col-span-4 lg:col-span-5 flex flex-col">
                        <div className="relative w-full aspect-[16/10] lg:aspect-[1.2/1] rounded-2xl lg:rounded-3xl overflow-hidden mb-4 lg:mb-6 bg-gray-100">
                            <Image
                                src="/images/rafting-1.webp"
                                alt="Arung Jeram Sungai Elo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 lg:mb-3">Aman & Terpercaya</h3>
                        <p className="text-sm font-medium leading-relaxed text-[#4b4b4b] max-w-full lg:max-w-sm">
                            Dipandu oleh instruktur berpengalaman dan bersertifikat, dengan perlengkapan keselamatan standar internasional. Cocok untuk pemula hingga yang sudah pernah rafting sebelumnya.
                        </p>
                    </div>

                    {/* Column 3: Lokasi & Paket */}
                    <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 lg:mb-3">Dekat Borobudur</h3>
                        <p className="text-sm font-medium leading-relaxed text-[#4b4b4b] mb-4 lg:mb-6 max-w-full lg:max-w-sm">
                            Berlokasi strategis di Magelang, hanya beberapa menit dari Candi Borobudur. Tersedia paket fleksibel untuk wisata keluarga, outing kantor, dan gathering komunitas.
                        </p>
                        <div className="relative w-full aspect-[16/10] lg:aspect-[1.2/1] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100 mt-2 lg:mt-auto">
                            <Image
                                src="/images/rafting-2.webp"
                                alt="Lokasi Rafting Magelang"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}