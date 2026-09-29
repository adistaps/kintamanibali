import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
    return (
        <section className="w-full bg-[#ccff00] overflow-hidden">

            {/* Grid Full Width (Edge-to-Edge) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[500px]">

                {/* Kolom Kiri: Foto Full Height */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-auto lg:min-h-full w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[#bcee00]">
                    <Image
                        src="/images/rafting-3.webp"
                        alt="Wisata Arung Jeram Sungai Elo Magelang - Reservasi dan Booking"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                </div>

                {/* Kolom Kanan: Konten Teks */}
                <div className="flex flex-col justify-center p-8 sm:p-16 lg:p-24 bg-[#ccff00] text-black">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/70 mb-3">
                        Ready When You Are
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight text-black">
                        Saatnya bikin cerita<br />
                        <span className="text-black/70">yang tidak cuma di galeri.</span>
                    </h2>

                    <p className="mt-4 max-w-md text-xs sm:text-sm text-black/80 leading-relaxed font-medium">
                        Cek ketersediaan tanggalmu dan mulai rencanakan petualangan di Sungai Elo sekarang.
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        <a
                            href="https://wa.me/6285159771469?text=Halo%20Admin%20Elo%20Rafting,%20saya%20ingin%20cek%20ketersediaan%20tanggal%20dan%20booking%20paket%20rafting."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="rounded-none bg-black text-white hover:bg-neutral-800 font-bold uppercase tracking-wider text-xs px-8 py-6 transition-all shadow-xl"
                            >
                                Booking Sekarang
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}