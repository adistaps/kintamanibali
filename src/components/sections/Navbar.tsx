"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { SlideTabs } from "@/components/ui/slide-tabs"

const links = [
  ["Harga Paket", "paket"],
  ["Fasilitas", "fasilitas"],
  ["Jadwal Trip", "jadwal"],
  ["Cara Pesan", "booking"],
  ["Tanya Jawab", "faq"],
] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isOverDarkSection, setIsOverDarkSection] = useState(true)

  useEffect(() => {
    // Memantau posisi logo terhadap semua elemen bermuatan section/div berlatar gelap
    const checkBgBrightness = () => {
      // Ambil elemen tepat di bawah posisi logo (koordinat x: 60, y: 30)
      const elementAtLogo = document.elementFromPoint(60, 30)
      if (!elementAtLogo) return

      // Cari kontainer utama terdekat dari posisi logo
      const section = elementAtLogo.closest("section, footer, div")
      if (section) {
        const bg = window.getComputedStyle(section).backgroundColor
        // Hitung brightness dari RGB
        const rgb = bg.match(/\d+/g)
        if (rgb && rgb.length >= 3) {
          const r = parseInt(rgb[0], 10)
          const g = parseInt(rgb[1], 10)
          const b = parseInt(rgb[2], 10)
          // Rumus Luminance / Brightness standar: (r*299 + g*587 + b*114) / 1000
          const brightness = (r * 299 + g * 587 + b * 114) / 1000
          // Jika brightness < 128 (Gelap) -> Logo Putih, Jika brightness >= 128 (Terang) -> Logo Gelap
          setIsOverDarkSection(brightness < 140)
          return
        }
      }

      // Fallback berbasis posisi scroll jika tidak terdeteksi RGB
      setIsOverDarkSection(window.scrollY < 400)
    }

    window.addEventListener("scroll", checkBgBrightness, { passive: true })
    checkBgBrightness()

    return () => window.removeEventListener("scroll", checkBgBrightness)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white py-4 transition-all duration-300 pointer-events-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 pointer-events-auto">
        {/* Brand Logo - Gelap saat menyentuh background terang, Terang saat menyentuh background gelap */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 py-1.5 transition-all hover:opacity-80"
        >
          <Image
            src="/logob+.webp"
            alt="Rafting Elo Logo"
            width={140}
            height={44}
            priority
            className={`h-11 w-auto object-contain transition-all duration-300 ${isOverDarkSection ? "brightness-0 invert" : "brightness-0"
              }`}
          />
          <span
            className={`hidden text-xm font-black uppercase leading-tight tracking-tight sm:block transition-colors duration-300 ${isOverDarkSection ? "text-white" : "text-[#0b192c]"
              }`}
          >
            Elorafting.id
          </span>
        </a>

        {/* Desktop Navigation with SlideTabs */}
        <nav className="hidden items-center lg:flex">
          <SlideTabs links={links} />
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6285159771469?text=Halo%20Admin%20Elo%20Rafting,%20saya%20ingin%20bertanya%20informasi%20dan%20reservasi%20paket%20arung%20jeram."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1eb956] px-4 py-2 text-xs sm:text-sm font-bold text-white transition sm:flex shadow-lg"
          >
            <svg
              className="w-4 h-4 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Reservasi WA
          </a>

          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/20 bg-black/50 backdrop-blur-md p-2 text-white hover:bg-white/10 lg:hidden shadow-lg"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <nav className="pointer-events-auto mx-5 mt-2 flex flex-col gap-1 rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl px-5 py-4 lg:hidden shadow-2xl">
          {links.map(([label, id]) => (
            <a
              onClick={() => setOpen(false)}
              key={id}
              href={`#${id}`}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/6285159771469?text=Halo%20Admin%20Elo%20Rafting,%20saya%20ingin%20bertanya%20informasi%20dan%20reservasi%20paket%20arung%20jeram."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-bold text-white shadow-lg"
          >
            <svg
              className="w-4 h-4 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Reservasi WA
          </a>
        </nav>
      )}
    </header>
  )
}