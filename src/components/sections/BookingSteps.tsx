import { ArrowRight, CalendarCheck, MessageCircle, WalletCards } from "lucide-react"

const steps = [
    {
        title: "Pilih Tanggal Seru",
        desc: "Chat admin ramah via WA buat pasang jadwal & jumlah rombongan kamu!",
        icon: MessageCircle,
    },
    {
        title: "Amankan Perahu",
        desc: "Transfer DP tipis-tipis, slot perahu tim kamu resmi terkunci aman 100%.",
        icon: WalletCards,
    },
    {
        title: "Gas Basah-Basahan!",
        desc: "Tiba di basecamp, pakai rompi & helm, siap taklukkan Sungai Elo!",
        icon: CalendarCheck,
    },
] as const

export default function BookingSteps() {
    return (
        <section id="booking" className="w-full bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    {/* Left Column: Bold Title & Pill CTA Button */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.1]">
                            Siap Berpetualang?
                        </h2>

                        <div>
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20Admin%2C%20saya%20mau%20booking%20Rafting%20Elo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 rounded-full bg-black py-2 pl-6 pr-2 text-xs font-black uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Amankan Slot via WhatsApp</span>
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] text-black">
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Sharp Cards, Direct Icon, Color-Switch on Hover */}
                    <div className="grid gap-4 sm:grid-cols-3">
                        {steps.map(({ title, desc, icon: Icon }, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col justify-between rounded-none border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-black hover:bg-black hover:shadow-xl hover:-translate-y-1"
                            >
                                <div>
                                    {/* Baris Atas: Ikon Langsung Sejajar dengan Judul */}
                                    <div className="flex items-center gap-3.5">
                                        <Icon className="h-6 w-6 shrink-0 text-neutral-900 group-hover:text-[#ccff00] transition-colors stroke-[2.2]" />
                                        <h3 className="text-sm sm:text-base font-black text-neutral-900 group-hover:text-white leading-snug transition-colors">
                                            {title}
                                        </h3>
                                    </div>

                                    {/* Deskripsi Singkat & Fun */}
                                    <p className="mt-4 text-xs text-neutral-500 group-hover:text-neutral-300 leading-relaxed font-medium transition-colors">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}