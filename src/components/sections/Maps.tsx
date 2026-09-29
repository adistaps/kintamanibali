'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DottedMap from 'dotted-map'

// Warna titik peta diubah menjadi abu-abu (#d1d5db)
const map = new DottedMap({ height: 50, grid: 'diagonal' })
const svgMapString = map.getSVG({
    radius: 0.35,
    color: '#d1d5db',
    shape: 'circle',
})

// Data titik lokasi di peta
const mapPins = [
    {
        id: 1,
        x: 75, // Indonesia / Magelang area
        y: 65,
        title: 'EloRafting.id Check Point Basecamp',
        address: 'Jl. Sendangsono No.KM 0, RW.5, Magelang, 56512, Jawa Tengah, ID',
        mapUrl: 'https://maps.app.goo.gl/MDtjdvCEBRpWwCbk7',
        image: '/hero-rafting.jpg'
    },
]

export default function Maps() {
    const [activePin, setActivePin] = useState<number | null>(1)

    const handlePinToggle = (pinId: number) => {
        setActivePin((prev) => (prev === pinId ? null : pinId))
    }

    return (
        <section id="lokasi" className="w-full bg-white py-12 md:py-24 px-5 sm:px-8 md:px-16 font-sans relative overflow-visible">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

                {/* KOLOM KIRI: Peta Interaktif DottedMap */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-3/5 relative flex justify-center items-center py-4"
                >
                    <div className="relative w-full max-w-[800px]">
                        {/* Peta Dotted Map (Abu-abu) */}
                        <img
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMapString)}`}
                            className="w-full h-auto pointer-events-none select-none"
                            alt="World Dotted Map"
                        />

                        {/* Titik Pins dan Pop-up Interaktif */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none">
                            {mapPins.map((pin) => (
                                <div
                                    key={pin.id}
                                    className="absolute"
                                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                                >
                                    {/* Lingkaran Titik Lime */}
                                    <div
                                        className="w-4 h-4 sm:w-5 sm:h-5 bg-[#ccff00] rounded-full cursor-pointer pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform shadow-[0_0_12px_rgba(204,255,0,0.8)]"
                                        onMouseEnter={() => pin.title && setActivePin(pin.id)}
                                        onClick={() => pin.title && handlePinToggle(pin.id)}
                                    />

                                    {/* Pop-up Card Responsive (Posisi disesuaikan agar tidak terpotong) */}
                                    <AnimatePresence>
                                        {activePin === pin.id && pin.title && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                                className="absolute z-30 flex bg-[#0b192c] text-white shadow-2xl pointer-events-auto cursor-pointer rounded-xl overflow-hidden"
                                                style={{
                                                    right: pin.x > 50 ? '0' : 'auto',
                                                    left: pin.x <= 50 ? '0' : 'auto',
                                                    bottom: 'calc(100% + 12px)',
                                                    width: 'min(250px, 65vw)',
                                                }}
                                                onClick={() => window.open(pin.mapUrl, '_blank')}
                                                onMouseEnter={() => setActivePin(pin.id)}
                                                onMouseLeave={() => setActivePin(null)}
                                            >
                                                <div className="p-3 sm:p-4 flex-1">
                                                    <h4 className="text-xs sm:text-sm font-bold mb-1 leading-tight">{pin.title}</h4>
                                                    <p className="text-[11px] sm:text-xs text-white/90 leading-tight">
                                                        {pin.address}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* KOLOM KANAN: Informasi Kontak */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-2/5 flex flex-col"
                >
                    <h2 className="text-3xl sm:text-5xl md:text-[64px] font-bold text-gray-900 tracking-tight leading-tight mb-4 md:mb-6">
                        Hubungi Kami
                    </h2>

                    <p className="text-gray-500 text-xs sm:text-[15px] leading-relaxed mb-6 md:mb-10 max-w-md">
                        Hubungi tim Elo Rafting untuk reservasi paket rafting, informasi jalur sungai, atau pertanyaan seputar fasilitas dan jadwal petualangan Anda.
                    </p>

                    {/* Grid Informasi Tambahan (Location & Email) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <strong className="block text-gray-900 font-bold text-base sm:text-lg mb-1.5 sm:mb-3">
                                Lokasi Kami
                            </strong>
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[220px]">
                                Jl. Sendangsono No.KM 0, RW.5, Magelang, 56512, Jawa Tengah, ID
                            </p>
                        </div>
                        <div>
                            <strong className="block text-gray-900 font-bold text-base sm:text-lg mb-1.5 sm:mb-3">
                                Jam Operasional & Email
                            </strong>
                            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-1">
                                Senin – Minggu, 07:00 – 17:00 WIB
                            </p>
                            <a href="mailto:info@elorafting.com" className="text-gray-500 text-[11px] sm:text-xs md:text-sm font-medium hover:text-[#ccff00] transition-colors break-words block">
                                +62 851-5977-1469 (WhatsApp)
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}