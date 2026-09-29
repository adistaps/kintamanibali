"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
    ["Nadia P.", "Jakarta", "Guide-nya ramah banget dan sabar mengarahkan. Anak-anak happy, kami juga tenang sepanjang trip."],
    ["Bimo R.", "Yogyakarta", "Paket Elo + Foto worth it. Jeramnya seru, fotonya juga jadi kenang-kenangan yang keren."],
    ["PT Arunika", "Semarang", "Koordinasi untuk gathering 40 orang sangat rapi. Dari booking sampai makan siang semuanya lancar."],
    ["Hendra K.", "Bandung", "Fasilitas lengkap, perlengkapan safety sangat terawat. Sangat merekomendasikan untuk acara gathering kantor."],
    ["Sarah & Rian", "Surabaya", "Pertama kali cobain rafting di Sungai Elo, langsung ketagihan! Guidenya humoris tapi tetep utamain keamanan."],
    ["Dimas A.", "Solo", "Pelayanan fast respon dari awal tanya-tanya di WA sampai selesai trip. Pokoknya mantap!"],
    ["Citra W.", "Tangerang", "Makan siang pasca rafting enak banget, tempat bilas bersih dan nyaman. Pengalaman 10/10!"],
    ["Keluarga Budi", "Bekasi", "Rombongan keluarga besar ter-handle dengan sangat baik. Jadwal tepat waktu dan seru habis!"]
] as const

export default function Testimonials() {
    // Duplikasi 2x agar looping tidak terputus
    const duplicatedReviews = [...reviews, ...reviews]

    return (
        <section className="w-full bg-white py-20 text-neutral-900 overflow-hidden">

            {/* Header */}
            <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                    Pulang membawa<br />
                    <span className="text-neutral-400">cerita baru.</span>
                </h2>
            </div>

            {/* Marquee Track dengan Masking Fade Kiri-Kanan */}
            <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex shrink-0 gap-6 pr-6"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40, // Atur kecepatan di sini (makin besar nilainya, makin pelan)
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedReviews.map(([name, city, quote], index) => (
                        <figure
                            key={`${name}-${index}`}
                            className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col justify-between transition-colors hover:border-neutral-400 hover:bg-white"
                        >
                            <div>
                                <div className="mb-4 flex gap-1 text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <blockquote className="text-sm sm:text-base font-medium leading-relaxed text-neutral-800">
                                    “{quote}”
                                </blockquote>
                            </div>

                            <figcaption className="mt-6 border-t border-neutral-200 pt-4 text-xs sm:text-sm">
                                <strong className="font-bold uppercase tracking-wide text-neutral-900">{name}</strong>
                                <span className="ml-2 font-mono text-neutral-400">· {city}</span>
                            </figcaption>
                        </figure>
                    ))}
                </motion.div>
            </div>

        </section>
    )
}