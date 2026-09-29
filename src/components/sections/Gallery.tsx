"use client"

import React from "react"
import Image from "next/image"

const photos = [
    {
        img: "/3.webp",
        alt: "Jeep 4x4 Melintas Hamparan Black Lava Gunung Batur Kintamani Bali",
    },
    {
        img: "/4.webp",
        alt: "Golden Sunrise Spektakuler di Puncak Gunung Batur Kintamani",
    },
    {
        img: "/1.webp",
        alt: "Panorama Danau Batur yang Memukau dari Jalur Jeep Tour",
    },
    {
        img: "/2.webp",
        alt: "Sesi Foto Estetik di Atas Jeep 4x4 Batur Sunrise Tour",
    },
    {
        img: "/1.webp",
        alt: "Suasana Petualangan Offroad Black Sand Batur Kintamani Bali",
    },
] as const

export default function Gallery() {
    return (
        <section id="galeri" className="w-full bg-white py-16 sm:py-24 font-sans select-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Section (Gaya TripFlow) */}
                <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
                    <span
                        className="text-lg md:text-2xl text-[#1D4ED8] mb-2 md:mb-3"
                        style={{ fontFamily: "'Dancing Script', 'Caveat', 'Comic Sans MS', cursive" }}
                    >
                        Galeri Momen
                    </span>

                    <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-[#08126A] sm:text-4xl lg:text-5xl leading-[1.2]">
                        Dokumentasi Keseruan Petualangan<br />
                        Batur Jeep Tour
                    </h2>
                </div>

                {/* Gallery Grid (Exact Match Layout Referensi) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">

                    {/* KOLOM KIRI (Grid 2 Atas & Bawah) */}
                    <div className="md:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
                        {/* Foto 1: Landscape Atas (Memanjang Kiri ke Kanan) */}
                        <div className="col-span-2 relative h-60 sm:h-72 lg:h-80 overflow-hidden rounded-2xl group bg-gray-100 shadow-sm">
                            <Image
                                src={photos[0].img}
                                alt={photos[0].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                loading="lazy"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                        </div>

                        {/* Foto 2: Kiri Bawah */}
                        <div className="col-span-1 relative h-52 sm:h-64 lg:h-72 overflow-hidden rounded-2xl group bg-gray-100 shadow-sm">
                            <Image
                                src={photos[1].img}
                                alt={photos[1].alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                loading="lazy"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                        </div>

                        {/* Foto 3: Kanan Bawah */}
                        <div className="col-span-1 relative h-52 sm:h-64 lg:h-72 overflow-hidden rounded-2xl group bg-gray-100 shadow-sm">
                            <Image
                                src={photos[2].img}
                                alt={photos[2].alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                loading="lazy"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                        </div>
                    </div>

                    {/* KOLOM TENGAH: Foto Tinggi / Portrait Standalone */}
                    <div className="md:col-span-3 relative h-80 md:h-auto overflow-hidden rounded-2xl group bg-gray-100 shadow-sm">
                        <Image
                            src={photos[3].img}
                            alt={photos[3].alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            loading="lazy"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                    </div>

                    {/* KOLOM KANAN: Foto Tinggi / Portrait Right */}
                    <div className="md:col-span-3 relative h-80 md:h-auto overflow-hidden rounded-2xl group bg-gray-100 shadow-sm">
                        <Image
                            src={photos[4].img}
                            alt={photos[4].alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            loading="lazy"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    )
}