"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
    return (
        /* Top padding dibuat cukup lega (pt-28 sm:pt-36 lg:pt-40) agar memberi ruang bagi separuh bawah form yang menggantung */
        <section id="tentang" className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-32 bg-white text-[#111]">
            <div className="max-w-[1400px] mx-auto px-5 lg:px-12">

                {/* Top Section */}
                <div className="max-w-6xl mb-10 lg:mb-24">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide mb-3 lg:mb-6 text-gray-500">
                        TENTANG KAMI <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>

                    <h2 className="text-[1.75rem] xs:text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.15] lg:leading-[1.1] tracking-[-0.03em]">
                        Sensasi Golden Sunrise & Offroad Batur Jeep Tour Terbaik di Kintamani.
                    </h2>

                    <Link
                        href="https://wa.me/6285159771469"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-5 lg:mt-6 px-4 py-2.5 lg:px-6 lg:py-3 bg-[#08126A] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#0c1d8a] active:scale-[0.98] transition-all w-fit shadow-md"
                    >
                        HUBUNGI KAMI
                        <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    </Link>
                </div>

                {/* 3 Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
                    <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between h-auto lg:h-full lg:min-h-[400px]">
                        <div>

                            <p className="text-sm font-medium leading-relaxed pr-0 lg:pr-4 text-[#333]">
                                Sunrise Kintamani hadir untuk memberikan pengalaman petualangan Batur Jeep Tour 4x4 yang aman, seru, dan tak terlupakan di Kintamani, Bali.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4 lg:col-span-5 flex flex-col">
                        <div className="relative w-full aspect-[16/10] lg:aspect-[1.2/1] rounded-2xl lg:rounded-3xl overflow-hidden mb-4 lg:mb-6 bg-gray-100">
                            <Image
                                src="/about.webp"
                                alt="Jeep Tour Gunung Batur"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 lg:mb-3">Aman & Terpercaya</h3>
                        <p className="text-sm font-medium leading-relaxed text-[#4b4b4b] max-w-full lg:max-w-sm">
                            Dipandu oleh driver profesional & fotografer handal. Unit Jeep 4x4 prima siap menerjang lautan pasir Black Lava dan trek Gunung Batur.
                        </p>
                    </div>

                    <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 lg:mb-3">Lokasi Strategis</h3>
                        <p className="text-sm font-medium leading-relaxed text-[#4b4b4b] mb-4 lg:mb-6 max-w-full lg:max-w-sm">
                            Meeting point mudah dijangkau di Kintamani dengan pemandangan Danau Batur. Tersedia opsi layanan antar-jemput hotel seluruh Bali.
                        </p>
                        <div className="relative w-full aspect-[16/10] lg:aspect-[1.2/1] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100 mt-2 lg:mt-auto">
                            <Image
                                src="/about1.webp"
                                alt="Black Lava Tour Kintamani"
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