"use client"

import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react"

const faqs = [
    {
        question: "Berapa jam jam penjemputan & dimanakah meeting point-nya?",
        answer: "Penjemputan dimulai pukul 04:00 - 04:30 WITA sesuai lokasi hotel Anda (Kintamani/Ubud/Canggu/Seminyak) atau bisa langsung meeting point di Kintamani pada pukul 05:00 WITA."
    },
    {
        question: "Berapa kapasitas untuk 1 mobil Jeep 4x4?",
        answer: "Kapasitas 1 Jeep adalah 3-4 orang penumpang dewasa demi kenyamanan dan keamanan selama perjalanan melewati medan offroad."
    },
    {
        question: "Pakaian & perlengkapan apa yang sebaiknya dibawa saat trip?",
        answer: "Suhu Kintamani di pagi hari cukup dingin (15-18°C). Disarankan memakai jaket tebal/sweater, celana panjang, sepatu/sandal nyaman, serta kacamata hitam untuk sesi foto."
    },
    {
        question: "Bagaimana jika cuaca berkabut atau hujan saat hari H?",
        answer: "Pemandangan sunrise bergantung cuaca alam, namun perjalanan offroad Black Lava & Pura Segara tetap memberikan sensasi petualangan yang seru & eksotik meski berkabut."
    },
    {
        question: "Fasilitas apa saja yang sudah termasuk dalam paket Jeep Tour?",
        answer: "Paket sudah termasuk Jeep 4x4 + driver profesional (sekaligus fotografer), BBM, tiket masuk kawasan Kintamani, air minum, dan sarapan ringan di atas Jeep."
    },
    {
        question: "Apakah aman untuk anak-anak dan lansia?",
        answer: "Sangat aman! Driver kami berpengalaman dalam mengendalikan medan offroad dengan tenang dan mengutamakan kenyamanan seluruh anggota keluarga."
    }
]

export default function FAQ() {
    return (
        <section id="faq" className="w-full bg-white py-16 sm:py-24 font-sans text-[#0F172A] select-none">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Header Section (Gaya TripFlow) */}
                <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
                    <span
                        className="text-lg md:text-2xl text-[#1D4ED8] mb-2 md:mb-3"
                        style={{ fontFamily: "'Dancing Script', 'Caveat', 'Comic Sans MS', cursive" }}
                    >
                        Tanya Jawab
                    </span>

                    <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-[#08126A] sm:text-4xl lg:text-5xl leading-[1.2]">
                        Pertanyaan Yang Sering Ditanyakan<br />
                        Seputar Jeep Tour
                    </h2>
                </div>

                {/* Single Column Accordion Container (Tampilan Kartu Membulat) */}
                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full space-y-3.5">
                        {faqs.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="rounded-2xl bg-[#F4F4F5] px-6 py-1 border-none shadow-none transition-colors duration-200"
                            >
                                <AccordionTrigger className="group flex w-full items-center justify-between py-4.5 text-left text-sm sm:text-base font-medium text-[#18181B] hover:no-underline [&[data-state=open]_.plus-icon]:hidden [&[data-state=closed]_.minus-icon]:hidden">
                                    <span className="pr-4">{item.question}</span>
                                    {/* Ikon Plus & Minus yang Bergantian Otomatis */}
                                    <Plus className="plus-icon h-4 w-4 shrink-0 text-[#18181B]" />
                                    <Minus className="minus-icon h-4 w-4 shrink-0 text-[#18181B]" />
                                </AccordionTrigger>

                                <AccordionContent className="pb-5 pt-1 text-xs sm:text-sm text-[#52525B] leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    )
}