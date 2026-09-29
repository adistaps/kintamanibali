import React from 'react';
import { Users, Star, Building2, ShieldCheck } from 'lucide-react';

const STATS = [
    {
        icon: Users,
        value: "15.000+",
        label: "Peserta Terlayani",
        sub: "Sejak 2018"
    },
    {
        icon: Star,
        value: "4.9 / 5.0",
        label: "Rating Ulasan",
        sub: "Google Reviews"
    },
    {
        icon: Building2,
        value: "120+",
        label: "Event Corporate",
        sub: "Instansi & Perusahaan"
    },
    {
        icon: ShieldCheck,
        value: "100%",
        label: "Jaminan Safety",
        sub: "Zero Accident Record"
    }
];

export default function StatsBanner() {
    return (
        <section className="w-full bg-white py-12 select-none">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center p-6 bg-white border border-neutral-200"
                            >
                                <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-900 mb-3">
                                    <Icon className="w-5 h-5 stroke-[2.5]" />
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight leading-none mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 mt-1">
                                    {stat.label}
                                </div>
                                <div className="text-[10px] font-medium text-neutral-400 mt-0.5">
                                    {stat.sub}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
