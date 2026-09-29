"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
    ["Apakah harus bisa berenang untuk ikut rafting di Sungai Elo?", "Tidak harus. Sungai Elo tergolong sungai Grade II-III yang aman untuk non-perenang maupun pemula. Setiap peserta wajib memakai pelampung standar keselamatan SNI dan didampingi guide profesional."],
    ["Berapa kapasitas 1 perahu dan jika rombongan kurang dari 4 orang?", "Kapasitas 1 perahu adalah 4 orang peserta ditambah 1 guide profesional. Jika rombongan Anda kurang dari 4 orang, Anda tetap menikmati perahu secara privat tanpa digabung dengan peserta asing."],
    ["Pakaian & perlengkapan apa saja yang wajib dibawa saat trip?", "Disarankan memakai pakaian olahraga yang ringan/cepat kering dan sandal gunung/sepatu air. Bawa juga pakaian ganti lengkap, alat mandi, serta kantong plastik untuk pakaian basah."],
    ["Bagaimana jika cuaca hujan saat hari H pengarungan?", "Pengarungan tetap aman dan seru berjalan saat hujan ringan hingga sedang. Apabila debit air sungai naik melebihi batas aman SOP guide, jam keberangkatan atau jadwal akan disesuaikan demi keselamatan."],
    ["Fasilitas apa saja yang sudah termasuk dalam paket rafting?", "Paket All-In sudah mencakup peralatan keselamatan (helm, pelampung, dayung), river guide bersertifikat, transportasi lokal dari finish ke basecamp, makan siang/kuliner lokal, dokumentasi foto/video, serta asuransi."],
    ["Berapa durasi pengarungan dan jarak basecamp dari Borobudur?", "Pengarungan menempuh jarak 12 KM dengan durasi ±2,5 hingga 3 jam di air. Basecamp kami sangat strategis, hanya 10-15 menit dari Candi Borobudur dan 45-60 menit dari pusat Kota Yogyakarta."]
] as const

export default function FAQ() {
    const half = Math.ceil(faqs.length / 2)
    const leftFaqs = faqs.slice(0, half)
    const rightFaqs = faqs.slice(half)

    return (
        <section id="faq" className="w-full bg-white py-20 text-neutral-900">
            {/* Container Fixed Width */}
            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                            Pertanyaan yang<br />
                            <span className="text-neutral-400">sering ditanyakan.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-xs font-medium text-neutral-500 leading-relaxed">
                        Jawaban lengkap seputar keamanan, persiapan, lokasi, dan teknis pengarungan Sungai Elo.
                    </p>
                </div>

                {/* 2-Column Grid Accordion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 items-start">

                    {/* Kolom Kiri (01 - 03) */}
                    <Accordion type="single" collapsible className="w-full border-t border-neutral-200">
                        {leftFaqs.map(([question, answer], index) => {
                            const num = index + 1
                            return (
                                <AccordionItem
                                    key={question}
                                    value={`item-left-${index}`}
                                    className="border-b border-neutral-200 rounded-none overflow-hidden"
                                >
                                    <AccordionTrigger className="group flex w-full items-center justify-between py-5 text-left text-sm sm:text-base font-bold uppercase tracking-tight text-neutral-900 hover:no-underline hover:text-neutral-500 transition-colors duration-200 [&[data-state=open]>svg]:rotate-45">
                                        <span className="flex items-center gap-4">
                                            <span className="text-xs font-mono font-normal text-neutral-400 shrink-0">
                                                {num.toString().padStart(2, "0")}
                                            </span>
                                            {question}
                                        </span>
                                        <Plus className="h-4 w-4 shrink-0 text-neutral-900 transition-transform duration-300 ease-out group-hover:scale-110" />
                                    </AccordionTrigger>
                                    <AccordionContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed pl-9 pb-5">
                                            {answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>

                    {/* Kolom Kanan (04 - 06) */}
                    <Accordion type="single" collapsible className="w-full border-t border-neutral-200">
                        {rightFaqs.map(([question, answer], index) => {
                            const num = index + half + 1
                            return (
                                <AccordionItem
                                    key={question}
                                    value={`item-right-${index}`}
                                    className="border-b border-neutral-200 rounded-none overflow-hidden"
                                >
                                    <AccordionTrigger className="group flex w-full items-center justify-between py-5 text-left text-sm sm:text-base font-bold uppercase tracking-tight text-neutral-900 hover:no-underline hover:text-neutral-500 transition-colors duration-200 [&[data-state=open]>svg]:rotate-45">
                                        <span className="flex items-center gap-4">
                                            <span className="text-xs font-mono font-normal text-neutral-400 shrink-0">
                                                {num.toString().padStart(2, "0")}
                                            </span>
                                            {question}
                                        </span>
                                        <Plus className="h-4 w-4 shrink-0 text-neutral-900 transition-transform duration-300 ease-out group-hover:scale-110" />
                                    </AccordionTrigger>
                                    <AccordionContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed pl-9 pb-5">
                                            {answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>

                </div>

            </div>
        </section>
    )
}