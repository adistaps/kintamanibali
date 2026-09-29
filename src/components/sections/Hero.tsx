'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
    Calendar as CalendarIcon,
    MapPin,
    Users,
    ArrowRight,
    Camera,
    Share2,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Check
} from 'lucide-react';

const PACKAGES = [
    { name: 'Paket Sunrise', price: 'Rp500rb' },
    { name: 'Sunrise + Pura Segara', price: 'Rp600rb' },
    { name: 'Sunrise + Black Sand', price: 'Rp650rb' },
    { name: 'Paket Private Tour (Custom)', price: 'Fleksibel' },
];

const GUEST_OPTIONS = [
    '1 Orang',
    '2 Orang',
    '3 - 4 Orang',
    '5 - 10 Orang',
    'Grup (> 10 Orang)',
];

const MONTH_NAMES = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const DAYS_SHORT = ["Mg", "Sn", "Sl", "Rb", "Km", "Jm", "Sb"];

export default function Hero() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedPackage, setSelectedPackage] = useState(PACKAGES[0]);
    const [selectedGuests, setSelectedGuests] = useState(GUEST_OPTIONS[1]);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isPackageOpen, setIsPackageOpen] = useState(false);
    const [isGuestsOpen, setIsGuestsOpen] = useState(false);

    const today = new Date();
    const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

    const calendarRef = useRef<HTMLDivElement>(null);
    const packageRef = useRef<HTMLDivElement>(null);
    const guestsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsCalendarOpen(false);
            }
            if (packageRef.current && !packageRef.current.contains(event.target as Node)) {
                setIsPackageOpen(false);
            }
            if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
                setIsGuestsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };
    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();

        const formattedDateStr = selectedDate
            ? selectedDate.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })
            : 'Belum ditentukan';

        const message = `Halo Admin Sunrise Kintamani 👋%0A%0ASaya ingin booking Batur Jeep Tour dengan rincian berikut:%0A- *Tanggal*: ${formattedDateStr}%0A- *Paket Tour*: ${selectedPackage.name} (${selectedPackage.price})%0A- *Jumlah Peserta*: ${selectedGuests}%0A%0AMohon info ketersediaan slot dan instruksi selanjutnya. Terima kasih!`;

        const whatsappUrl = `https://wa.me/6285159771469?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="hero" className="relative w-full z-30 font-sans select-none">

            <h1 className="sr-only">
                Sunrise Kintamani — Batur Jeep Tour Terbaik & Terpercaya di Bali
            </h1>

            {/* Hero Banner */}
            <div className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] w-full bg-[#0d0d0d] flex flex-col justify-between px-4 sm:px-10 lg:px-16 pt-28 sm:pt-44 lg:pt-48 pb-24 sm:pb-36 lg:pb-40">

                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/hero.webp"
                        alt="Gunung Batur Kintamani Landscape"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        className="object-cover object-center brightness-90 contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/0 to-black/0" />
                </div>

                {/* Content Top */}
                <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-end my-auto">

                    <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-5 text-white">
                        <h2 className="text-2xl sm:text-4xl lg:text-[2.85rem] xl:text-5xl font-bold tracking-tight leading-[1.2]">
                            Explore Without Limits Your Journey Begins Here.
                        </h2>

                        <a
                            href="#tentang"
                            className="inline-flex items-center gap-2 sm:gap-2.5 bg-white text-slate-900 hover:bg-slate-100 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
                        >
                            <span>Begin Your Story</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                    </div>


                </div>

                {/* 
          FORM CARD HORIZONTAL SELALU (1 BARIS DARI HP SAMPAI DESKTOP)
        */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-50 max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
                    <form
                        onSubmit={handleBooking}
                        className="bg-white rounded-2xl sm:rounded-[2.2rem] p-2.5 sm:p-6 lg:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-slate-100"
                    >
                        {/* Grid dibuat tetap 12 kolom di semua ukuran layar */}
                        <div className="grid grid-cols-12 gap-1.5 sm:gap-4 items-center">

                            {/* 1. DATE PICKER */}
                            <div className="col-span-3 flex flex-col gap-0.5 sm:gap-1 relative" ref={calendarRef}>
                                <label className="text-[9px] sm:text-xs font-bold text-slate-600 ml-1 sm:ml-3 truncate">Date</label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsCalendarOpen(!isCalendarOpen);
                                        setIsPackageOpen(false);
                                        setIsGuestsOpen(false);
                                    }}
                                    className="w-full flex items-center justify-between bg-[#f8f9fa] hover:bg-slate-100/80 rounded-lg sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3 border border-slate-200/60 transition-all text-left"
                                >
                                    <div className="flex items-center truncate mr-0.5">
                                        <CalendarIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-400 shrink-0 mr-1 sm:mr-2.5" />
                                        <span className={`text-[10px] sm:text-sm font-semibold truncate ${selectedDate ? 'text-slate-900' : 'text-slate-400'}`}>
                                            {selectedDate
                                                ? selectedDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
                                                : 'Select Date'}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isCalendarOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* CALENDAR POPOVER */}
                                {isCalendarOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-64 sm:w-80 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 p-3 sm:p-4 z-50 animate-in fade-in duration-200">
                                        <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
                                            <span className="text-xs sm:text-sm font-bold text-slate-800">
                                                {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <button
                                                    type="button"
                                                    onClick={handlePrevMonth}
                                                    className="p-1 rounded-full hover:bg-slate-100 text-slate-600"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={handleNextMonth}
                                                    className="p-1 rounded-full hover:bg-slate-100 text-slate-600"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 text-center mb-1">
                                            {DAYS_SHORT.map((day, dIdx) => (
                                                <span key={dIdx} className="text-[10px] font-bold text-slate-400">
                                                    {day}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 text-center">
                                            {Array.from({ length: firstDayIndex }).map((_, i) => (
                                                <div key={`empty-${i}`} />
                                            ))}

                                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                                const dayNumber = i + 1;
                                                const currentGridDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), dayNumber);

                                                const isPast = currentGridDate.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
                                                const isSelected = selectedDate &&
                                                    selectedDate.getDate() === dayNumber &&
                                                    selectedDate.getMonth() === viewDate.getMonth() &&
                                                    selectedDate.getFullYear() === viewDate.getFullYear();

                                                return (
                                                    <button
                                                        key={dayNumber}
                                                        type="button"
                                                        disabled={isPast}
                                                        onClick={() => {
                                                            setSelectedDate(currentGridDate);
                                                            setIsCalendarOpen(false);
                                                        }}
                                                        className={`h-7 w-7 sm:h-8 sm:w-8 mx-auto rounded-full text-[11px] sm:text-xs font-semibold flex items-center justify-center transition-all ${isSelected
                                                            ? 'bg-slate-950 text-white shadow-md'
                                                            : isPast
                                                                ? 'text-slate-300 cursor-not-allowed'
                                                                : 'text-slate-700 hover:bg-slate-100'
                                                            }`}
                                                    >
                                                        {dayNumber}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* 2. PACKAGE DROPDOWN */}
                            <div className="col-span-4 flex flex-col gap-0.5 sm:gap-1 relative" ref={packageRef}>
                                <label className="text-[9px] sm:text-xs font-bold text-slate-600 ml-1 sm:ml-3 truncate">Package</label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsPackageOpen(!isPackageOpen);
                                        setIsCalendarOpen(false);
                                        setIsGuestsOpen(false);
                                    }}
                                    className="w-full flex items-center justify-between bg-[#f8f9fa] hover:bg-slate-100/80 rounded-lg sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3 border border-slate-200/60 transition-all text-left"
                                >
                                    <div className="flex items-center truncate mr-0.5">
                                        <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-400 shrink-0 mr-1 sm:mr-2.5" />
                                        <span className="text-[10px] sm:text-sm font-semibold text-slate-800 truncate">
                                            {selectedPackage.name}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isPackageOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isPackageOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl sm:rounded-3xl shadow-2xl border border-slate-100 p-1.5 sm:p-2 z-50 animate-in fade-in duration-200 min-w-[180px]">
                                        {PACKAGES.map((pkg, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    setSelectedPackage(pkg);
                                                    setIsPackageOpen(false);
                                                }}
                                                className={`flex items-center justify-between px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl cursor-pointer text-[11px] sm:text-sm transition-all ${selectedPackage.name === pkg.name
                                                    ? 'bg-slate-900 text-white font-semibold'
                                                    : 'text-slate-700 hover:bg-slate-100 font-medium'
                                                    }`}
                                            >
                                                <span className="truncate">{pkg.name}</span>
                                                <div className="flex items-center gap-1.5 ml-1">
                                                    <span className={`text-[9px] sm:text-[11px] ${selectedPackage.name === pkg.name ? 'text-slate-300' : 'text-slate-400'}`}>
                                                        {pkg.price}
                                                    </span>
                                                    {selectedPackage.name === pkg.name && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* 3. GUESTS DROPDOWN */}
                            <div className="col-span-3 flex flex-col gap-0.5 sm:gap-1 relative" ref={guestsRef}>
                                <label className="text-[9px] sm:text-xs font-bold text-slate-600 ml-1 sm:ml-3 truncate">Guests</label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsGuestsOpen(!isGuestsOpen);
                                        setIsCalendarOpen(false);
                                        setIsPackageOpen(false);
                                    }}
                                    className="w-full flex items-center justify-between bg-[#f8f9fa] hover:bg-slate-100/80 rounded-lg sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3 border border-slate-200/60 transition-all text-left"
                                >
                                    <div className="flex items-center truncate mr-0.5">
                                        <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-400 shrink-0 mr-1 sm:mr-2.5" />
                                        <span className="text-[10px] sm:text-sm font-semibold text-slate-800 truncate">
                                            {selectedGuests}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isGuestsOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isGuestsOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl sm:rounded-3xl shadow-2xl border border-slate-100 p-1.5 sm:p-2 z-50 animate-in fade-in duration-200 min-w-[140px]">
                                        {GUEST_OPTIONS.map((guest, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    setSelectedGuests(guest);
                                                    setIsGuestsOpen(false);
                                                }}
                                                className={`flex items-center justify-between px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl cursor-pointer text-[11px] sm:text-sm transition-all ${selectedGuests === guest
                                                    ? 'bg-slate-900 text-white font-semibold'
                                                    : 'text-slate-700 hover:bg-slate-100 font-medium'
                                                    }`}
                                            >
                                                <span>{guest}</span>
                                                {selectedGuests === guest && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* 4. BOOKING BUTTON */}
                            <div className="col-span-2 flex flex-col justify-end pt-3 sm:pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#08126A] hover:bg-[#0c1d8a] text-white font-bold py-2 sm:py-3.5 px-1 sm:px-5 rounded-lg sm:rounded-full transition-all duration-300 shadow-md active:scale-95 text-[10px] sm:text-sm text-center truncate"
                                >
                                    Booking
                                </button>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}