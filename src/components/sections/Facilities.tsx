import Image from "next/image"
import { LucideIcon, BedDouble, Building2, Coffee, Landmark, ShieldCheck, ShowerHead, Store } from "lucide-react"

interface FacilityItem {
    title: string
    text: string
    icon: LucideIcon
    tag: string
    img?: string
    lgOrder: string // Mengatur posisi khusus di layar Desktop
}

const facilities: FacilityItem[] = [
    {
        title: "Parkir Luas & Aman",
        text: "Area parkir lapang muat bus pariwisata hingga puluhan mobil pribadi.",
        icon: Building2,
        tag: "Area Parkir",
        img: "/images/rafting-1.webp",
        lgOrder: "lg:order-1", // Desktop Row 1, Col 1 (GAMBAR)
    },
    {
        title: "Kamar Mandi & Bilas",
        text: "Tersedia area untuk bilas setelah rafting",
        icon: ShowerHead,
        tag: "Fasilitas Air",
        lgOrder: "lg:order-2", // Desktop Row 1, Col 2 (POLOS)
    },
    {
        title: "Musholla Nyaman",
        text: "Tempat ibadah bersih & tenang lengkap dengan sarana wudhu yang memadai.",
        icon: Landmark,
        tag: "Ibadah",
        lgOrder: "lg:order-4", // Desktop Row 1, Col 4 (POLOS)
    },
    {
        title: "Peralatan Keselamatan SNI",
        text: "Helm, pelampung, dan dayung standar SNI siap digunakan tanpa biaya tambahan.",
        icon: ShieldCheck,
        tag: "Safety SNI",
        img: "/images/rafting-2.webp",
        lgOrder: "lg:order-3", // Desktop Row 1, Col 3 (GAMBAR)
    },
    {
        title: "Resto & Kuliner Khas",
        text: "Sajian makan siang lezat, tersedia banyak pilihan untuk upgrade menu",
        icon: Coffee,
        tag: "Kuliner",
        img: "/images/rafting-3.webp",
        lgOrder: "lg:order-6", // Desktop Row 2, Col 2 (GAMBAR)
    },
    {
        title: "Sentra Oleh-Oleh",
        text: "Dekat sentra oleh-oleh. Lokasi dekat kawasan borobudur",
        icon: Store,
        tag: "Oleh-Oleh",
        lgOrder: "lg:order-5", // Desktop Row 2, Col 1 (POLOS)
    },
    {
        title: "Penginapan Dekat",
        text: "Rekomendasi hotel, homestay, & villa nyaman di sekitar lokasi basecamp.",
        icon: BedDouble,
        tag: "Akomodasi",
        lgOrder: "lg:order-7", // Desktop Row 2, Col 3 (POLOS)
    },
    {
        title: "Lokasi Dekat Borobudur",
        text: "Banyak pilihan destinasi bisa yang lain yang bisa dituju setelah rafting disekitar kami",
        icon: Landmark,
        tag: "Destinasi",
        img: "/images/rafting-4.webp",
        lgOrder: "lg:order-8", // Desktop Row 2, Col 4 (GAMBAR)
    },
]

export default function Facilities() {
    return (
        <section id="fasilitas" className="w-full bg-white overflow-hidden select-none">
            {/* Header Section */}
            <div className="w-full bg-white px-5 sm:px-8 lg:px-12 py-10 text-left">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
                    Fasilitas Lengkap All-In
                </h2>
            </div>

            {/* Grid 2 Kolom di Mobile, 4 Kolom di Desktop */}
            <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-0">
                {facilities.map((item) => {
                    const Icon = item.icon

                    // 1. CARD DENGAN BACKGROUND FOTO
                    if (item.img) {
                        return (
                            <div
                                key={item.title}
                                className={`group relative h-[200px] sm:h-[280px] w-full overflow-hidden bg-black p-4 sm:p-8 flex flex-col justify-between border-b border-r border-neutral-800 ${item.lgOrder}`}
                            >
                                <Image
                                    src={item.img}
                                    alt={`Fasilitas ${item.title} Rafting Elo Magelang`}
                                    fill
                                    sizes="(max-width: 640px) 50vw, 25vw"
                                    loading="lazy"
                                    className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

                                <div className="relative z-10 flex items-center justify-between">
                                    <span className="bg-[#ccff00] px-2 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-black">
                                        {item.tag}
                                    </span>
                                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" />
                                </div>

                                <div className="relative z-10 space-y-1 sm:space-y-1.5 mt-auto">
                                    <h3 className="text-sm sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-xs font-medium text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-none">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )
                    }

                    // 2. CARD PUTIH POLOS
                    return (
                        <div
                            key={item.title}
                            className={`group h-[200px] sm:h-[280px] w-full bg-white hover:bg-neutral-100 transition-colors p-4 sm:p-8 flex flex-col justify-between border-b border-r border-neutral-200 ${item.lgOrder}`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                                    {item.tag}
                                </span>
                                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-black shrink-0" />
                            </div>

                            <div className="space-y-1 sm:space-y-1.5 mt-auto">
                                <h3 className="text-sm sm:text-2xl font-black uppercase tracking-tight text-black leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[10px] sm:text-xs font-medium text-neutral-700 leading-relaxed line-clamp-3 sm:line-clamp-none">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}