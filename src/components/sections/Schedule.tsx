import { Sun, Sunset, Clock3 } from "lucide-react"

export default function Schedule() {
    const morningTimes = ["07:00", "08:00", "09:00"]
    const afternoonTimes = ["13:00", "14:00", "15:00"]

    return (
        <section id="jadwal" className="w-full bg-white py-16 sm:py-24 text-neutral-900">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    {/* Column Kiri: Header Section */}
                    <div className="space-y-5">
                        <h2 className="text-3xl font-black uppercase tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
                            Pilih jam yang <br />
                            <span className="text-neutral-400">paling pas.</span>
                        </h2>

                        <p className="max-w-md text-sm sm:text-base leading-relaxed text-neutral-600">
                            Kami menyarankan trip pagi untuk udara yang lebih sejuk. Trip siang cocok untuk kamu yang ingin menggabungkan rafting dengan agenda lain.
                        </p>
                    </div>

                    {/* Column Kanan: Cards Container */}
                    <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">

                            {/* Card Trip Pagi */}
                            <div className="border border-neutral-200 bg-white p-6 sm:p-7">
                                <div className="flex items-center justify-between">
                                    <Sun className="h-6 w-6 text-neutral-900 stroke-[2]" />
                                    <span className="border border-neutral-900 bg-neutral-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                                        Favorit
                                    </span>
                                </div>

                                <h3 className="mt-5 text-xl font-bold uppercase tracking-tight text-neutral-900">
                                    Trip pagi
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {morningTimes.map((t) => (
                                        <span
                                            key={t}
                                            className="border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800"
                                        >
                                            {t} WIB
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-5 text-xs leading-relaxed text-neutral-500">
                                    Progo Bawah hanya tersedia di sesi ini.
                                </p>
                            </div>

                            {/* Card Trip Siang */}
                            <div className="border border-neutral-200 bg-white p-6 sm:p-7">
                                <Sunset className="h-6 w-6 text-neutral-900 stroke-[2]" />

                                <h3 className="mt-5 text-xl font-bold uppercase tracking-tight text-neutral-900">
                                    Trip siang
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {afternoonTimes.map((t) => (
                                        <span
                                            key={t}
                                            className="border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-800"
                                        >
                                            {t} WIB
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-5 text-xs leading-relaxed text-neutral-500">
                                    Berangkat setelah makan siang dan tetap seru.
                                </p>
                            </div>

                        </div>

                        {/* Footer Banner Info */}
                        <div className="flex items-center gap-3 border border-neutral-200 bg-neutral-50 px-5 py-4 text-xs font-medium text-neutral-700">
                            <Clock3 className="h-4 w-4 shrink-0 text-neutral-900" />
                            <span>Durasi umum 1,5–3 jam · Jarak 8–12 KM · Konfirmasi slot bersama admin</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}