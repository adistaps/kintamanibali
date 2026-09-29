import { BriefcaseBusiness, Crown, Heart, Zap } from "lucide-react"

const segments = [
    {
        title: "Family & Kids Friendly",
        text: "Pengarungan santai di jeram Grade II yang aman dan asri. Pilihan terbaik untuk liburan keluarga dengan anak usia mulai 6 tahun.",
        icon: Heart,
    },
    {
        title: "Fun & Adrenaline Rush",
        text: "Sensasi jeram Grade III yang memicu keseruan, dilengkapi spot berenang di air tenang serta tempat melompat tebing yang aman.",
        icon: Zap,
    },
    {
        title: "Corporate & Big Gathering",
        text: "Solusi acara perusahaan & outbound outdoor. Kapasitas parkir bus besar, arena team building, dan manajemen trip terorganisir.",
        icon: BriefcaseBusiness,
    },
    {
        title: "VIP Custom Experience",
        text: "Layanan privat eksklusif dengan perahu khusus, jam keberangkatan fleksibel, dokumentasi drone HD, dan hidangan kuliner pilihan.",
        icon: Crown,
    },
]

export default function Segments() {
    return (
        <section className="w-full bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="mb-12 max-w-xl">
                    <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
                        Pilih Vibe Petualanganmu
                    </span>
                    <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-neutral-900 sm:text-4xl">
                        Satu Sungai,<br />
                        <span className="text-neutral-400">Beragam Pengalaman Seru.</span>
                    </h2>
                </div>

                {/* 4 Column Feature Layout */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {segments.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.title} className="flex flex-col justify-between p-6  bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 hover:shadow-md transition-all">
                                <div>
                                    <div className="mb-4">
                                        <Icon className="h-7 w-7 text-neutral-900 stroke-[2.25]" />
                                    </div>
                                    <h3 className="text-lg font-black text-neutral-900 uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}