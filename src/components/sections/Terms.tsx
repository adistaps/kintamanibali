"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        q: "How does venture building differ from traditional investing?",
        a: "Unlike traditional investors who only write checks, we work inside the business for two years or more, providing dedicated commercial strategy, financial modeling, and nature impact systems support.",
    },
    {
        q: "What kind of financing structures do you offer?",
        a: "We offer highly flexible catalytic capital: revenue-based debt, purchase-order financing, SAFEs, convertibles, and bridge loans tailored to what the company actually needs.",
    },
    {
        q: "What is the HIVE blended finance facility?",
        a: "HIVE (Holistic Investments in Vital Ecosystems) is our main vehicle designed to mobilize $225.9M in new nature finance, blending catalytic grants with private investment across Southeast Asia.",
    },
    {
        q: "Which business archetypes do you support?",
        a: "We focus on nature-based solutions across four archetypes: Protect (ecosystems), Manage (agriculture/mariculture sustainably), Restore (degraded lands), and Enable (supply chains & technology).",
    },
];

// Helper: render teks dengan reveal PER HURUF.
function RevealChars({ text }: { text: string }) {
    const words = text.split(" ");
    return (
        <>
            {words.map((word, wi) => (
                <span key={wi} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((char, ci) => (
                        <span key={ci} className="reveal-word">
                            {char}
                        </span>
                    ))}
                </span>
            ))}
        </>
    );
}

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".faq-label", { scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }, y: 30, opacity: 0, duration: 0.6 });
            gsap.from(".faq-title", { scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }, y: 50, opacity: 0, duration: 0.8, delay: 0.1 });
            gsap.from(".faq-item", { scrollTrigger: { trigger: sectionRef.current, start: "top 60%" }, y: 30, opacity: 0, duration: 0.6, stagger: 0.1 });

            // === SCROLL-REVEAL PER HURUF ===
            const revealBlocks = gsap.utils.toArray<HTMLElement>(".reveal-text");
            revealBlocks.forEach((block) => {
                const chars = block.querySelectorAll(".reveal-word");
                if (!chars.length) return;

                gsap.set(chars, { color: block.dataset.revealFrom || "#d4d4d4" });
                gsap.to(chars, {
                    color: block.dataset.revealColor || "#000000",
                    stagger: 0.1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 88%",
                        end: "bottom 60%",
                        scrub: true,
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 bg-[#fefefe]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left - Header */}
                    <div>
                        <span className="faq-label inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7d7d7d] mb-6">
                            <span className="w-8 h-px bg-[#7d7d7d]" />
                            FAQ
                        </span>
                        <h2 className="faq-title reveal-text text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                            <RevealChars text="Answered questions. Everything you might want to know up front." />
                        </h2>
                        <div className="mt-8 p-6 bg-[#f8f8f8] rounded-2xl">
                            <h4 className="font-bold text-[#1d1d1d]">Still no luck? We can help!</h4>
                            <p className="mt-2 text-sm text-[#7d7d7d]">Let us know how we can assist</p>
                        </div>
                    </div>

                    {/* Right - Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item border border-[#dfdfdf] rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                    aria-controls={`faq-answer-${i}`}
                                    className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-[#f8f8f8] transition-colors focus:outline-none"
                                >
                                    <span className="text-base lg:text-lg font-semibold text-[#1d1d1d] pr-4">{faq.q}</span>
                                    <span className="shrink-0 w-8 h-8 rounded-full border border-[#dfdfdf] flex items-center justify-center transition-colors">
                                        {open === i ? <Minus className="w-4 h-4 text-[#1d1d1d]" /> : <Plus className="w-4 h-4 text-[#1d1d1d]" />}
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${i}`}
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm text-[#4b4b4b] leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}