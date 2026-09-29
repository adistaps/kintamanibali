# Elo Rafting Magelang — Dokumentasi Website

Website landing page untuk Elo Rafting Magelang, layanan arung jeram di Sungai Elo, Magelang (dekat Candi Borobudur).

---

## Live Website

Akses di: `https://elorafting.id` *(sesuaikan dengan domain aktif)*

---

## Teknologi yang Digunakan

| Teknologi | Versi | Keterangan |
|---|---|---|
| Next.js | 16.3.3 | Framework utama |
| React | 19 | Library UI |
| TypeScript | 5.7.3 | Bahasa pemrograman |
| Tailwind CSS | 4.x | Styling |
| Radix UI | — | Komponen aksesibel (Accordion, dll.) |
| Lucide React | 1.46 | Ikon |
| Framer Motion | 13.x | Animasi |
| Vercel Analytics | 1.6.1 | Analitik pengunjung |
| pnpm | 12.3.4 | Package manager |

---

## Struktur Folder

```
elorafting-main/
│
├── app/
│   ├── layout.tsx              # Layout global (font, metadata, SEO)
│   ├── page.tsx                # Halaman utama — urutan semua section
│   ├── globals.css             # Style global
│   ├── robots.ts               # Konfigurasi mesin pencari
│   └── sitemap.ts              # Sitemap otomatis
│
├── components/
│   ├── sections/               # Setiap section di halaman utama
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Pricing.tsx
│   │   ├── Segments.tsx
│   │   ├── Facilities.tsx
│   │   ├── Schedule.tsx
│   │   ├── TripFlow.tsx
│   │   ├── BookingSteps.tsx
│   │   ├── Gallery.tsx
│   │   ├── Maps.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingWhatsApp.tsx
│   │
│   └── ui/                     # Komponen UI reusable (shadcn/ui)
│
├── public/
│   ├── logo.webp
│   ├── logob+.webp
│   └── images/
│       ├── rafting-1.webp
│       ├── rafting-2.webp
│       ├── rafting-3.webp
│       ├── rafting-4.webp
│       ├── rafting-5.webp      # Background hero 1
│       ├── rafting-6.webp      # Background hero 2
│       └── rafting-7.webp      # Foto section About
│
├── lib/                        # Utility functions
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Section Halaman

Website menggunakan satu halaman panjang (single-page). Urutan section dari atas ke bawah:

| # | Section | Fungsi |
|---|---|---|
| 1 | Navbar | Menu navigasi, logo, tombol Reservasi WA |
| 2 | Hero | Foto banner utama, 3 card keunggulan |
| 3 | About | Deskripsi singkat + galeri foto |
| 4 | WhyUs | 4 jaminan keunggulan layanan |
| 5 | Pricing | Paket dan harga |
| 6 | Segments | Kategori pengunjung |
| 7 | Facilities | Fasilitas basecamp |
| 8 | Schedule | Jadwal dan jam operasional |
| 9 | TripFlow | Alur perjalanan rafting |
| 10 | BookingSteps | Cara memesan (3 langkah) |
| 11 | Gallery | Galeri foto kegiatan |
| 12 | Maps | Peta lokasi dan panduan rute |
| 13 | FAQ | Pertanyaan yang sering ditanyakan |
| 14 | Testimonials | Review pelanggan |
| 15 | CTASection | Ajakan booking akhir halaman |
| 16 | Footer | Kontak, sosial media, copyright |

---

## Menjalankan Secara Lokal

Prasyarat: **Node.js 18+** dan **pnpm** sudah terpasang.

```bash
# Install pnpm jika belum ada
npm install -g pnpm

# Clone repository
git clone https://github.com/adistaps/b-rafting.git
cd b-rafting

# Install dependensi
pnpm install

# Jalankan server development
pnpm dev
```

Buka `http://localhost:3000` di browser.

---

## Build Produksi

```bash
pnpm build
pnpm start
```

---

## Cara Update Konten

Semua konten dikelola langsung melalui file komponen. Tidak ada CMS atau database.

| Yang Ingin Diubah | File |
|---|---|
| Nomor WhatsApp | Cari `wa.me/` di semua file `components/sections/` |
| Harga paket | `components/sections/Pricing.tsx` |
| Jadwal trip | `components/sections/Schedule.tsx` |
| Foto hero / background | `public/images/rafting-5.webp` dan `rafting-6.webp` |
| Foto section About | `public/images/rafting-7.webp` |
| Logo | `public/logo.webp` |
| Pertanyaan FAQ | `components/sections/FAQ.tsx` — ubah array `faqs` |
| Testimoni | `components/sections/Testimonials.tsx` |
| Fasilitas | `components/sections/Facilities.tsx` |
| Menu navigasi | `components/sections/Navbar.tsx` — ubah array `links` |
| Peta lokasi | `components/sections/Maps.tsx` |

### Mengganti Foto

Foto disimpan di `public/images/` dalam format WebP. Untuk mengganti, cukup timpa file lama dengan nama yang sama persis. Disarankan ukuran foto di bawah 200KB — bisa dikompresi menggunakan [squoosh.app](https://squoosh.app).

---

## Deployment

Website di-deploy ke **Vercel**. Setiap push ke branch `main` akan otomatis trigger deployment baru.

```bash
git add .
git commit -m "update: deskripsi perubahan"
git push
```

Proses deployment biasanya selesai dalam 1–3 menit dan bisa dipantau di dashboard Vercel.


## Kontak

Untuk pertanyaan teknis seputar kode dan pemeliharaan website, hubungi developer yang mengerjakan proyek ini.

Whatsapp 082221298344
adistaputras.my.id