"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { SlideTabs } from "@/components/ui/slide-tabs"

const links = [
  ["Paket Tour", "paket"],
  ["Fasilitas", "fasilitas"],
  ["Itinerary", "jadwal"],
  ["Cara Booking", "booking"],
  ["Tanya Jawab", "faq"],
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-5 pointer-events-none transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white px-4 py-2.5 sm:px-6 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100/80 pointer-events-auto">

        {/* Logo Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 py-1 transition-all hover:opacity-85 shrink-0"
        >
          <Image
            src="/logo.webp"
            alt="Sunrise Kintamani Logo"
            width={130}
            height={40}
            priority
            className="h-8 md:h-9 w-auto object-contain"
          />
          <span className="hidden text-sm md:text-base font-extrabold uppercase leading-tight tracking-tight text-slate-900 sm:block">
            Sunrise Kintamani
          </span>
        </a>

        {/* Menu Tengah (SlideTabs) */}
        <nav className="hidden items-center lg:flex">
          <SlideTabs links={links} />
        </nav>

        {/* Tombol Reservasi WA */}
        <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
          <a
            href="https://wa.me/6285159771469?text=Halo%20Admin%20Sunrise%20Kintamani,%20saya%20ingin%20bertanya%20informasi%20dan%20booking%20Batur%20Jeep%20Tour."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#08126A] hover:bg-[#0c1d8a] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Reservasi WA</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Toggle Menu Mobile */}
          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 lg:hidden"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="pointer-events-auto mx-auto mt-2 max-w-7xl flex flex-col gap-1.5 rounded-3xl border border-slate-100 bg-white/95 backdrop-blur-xl px-5 py-5 lg:hidden shadow-2xl transition-all">
          {links.map(([label, id]) => (
            <a
              onClick={() => setOpen(false)}
              key={id}
              href={`#${id}`}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/6285159771469?text=Halo%20Admin%20Sunrise%20Kintamani,%20saya%20ingin%20bertanya%20informasi%20dan%20booking%20Batur%20Jeep%20Tour."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#08126A] px-4 py-3 text-center text-sm font-bold text-white shadow-md active:scale-95"
          >
            <span>Reservasi WA</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  )
}