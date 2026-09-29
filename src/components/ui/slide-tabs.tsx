"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

export interface Position {
    left: number
    width: number
    opacity: number
}

interface SlideTabsProps {
    links: readonly (readonly [string, string])[]
}

export const SlideTabs: React.FC<SlideTabsProps> = ({ links }) => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    })
    const [selected, setSelected] = useState<number | null>(null)
    const tabsRef = useRef<(HTMLLIElement | null)[]>([])

    const updatePosition = (index: number | null) => {
        if (index !== null && tabsRef.current[index]) {
            const selectedTab = tabsRef.current[index]
            if (selectedTab) {
                const { width } = selectedTab.getBoundingClientRect()
                setPosition({
                    left: selectedTab.offsetLeft,
                    width,
                    opacity: 1,
                })
            }
        } else {
            setPosition((prev) => ({ ...prev, opacity: 0 }))
        }
    }

    useEffect(() => {
        if (selected !== null) {
            updatePosition(selected)
        }
    }, [selected])

    return (
        <ul
            onMouseLeave={() => updatePosition(selected)}
            className="relative flex w-fit rounded-full border border-white/20 bg-black/40 backdrop-blur-md p-1"
        >
            {links.map(([label, id], i) => (
                <Tab
                    key={id}
                    href={`#${id}`}
                    ref={(el) => {
                        tabsRef.current[i] = el
                    }}
                    setPosition={setPosition}
                    onClick={() => setSelected(i)}
                    isSelected={selected === i}
                >
                    {label}
                </Tab>
            ))}

            <Cursor position={position} />
        </ul>
    )
}

interface TabProps {
    children: React.ReactNode
    href: string
    setPosition: React.Dispatch<React.SetStateAction<Position>>
    onClick: () => void
    isSelected?: boolean
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
    ({ children, href, setPosition, onClick, isSelected }, ref) => {
        return (
            <li
                ref={ref}
                onClick={onClick}
                onMouseEnter={() => {
                    if (ref && "current" in ref && ref.current) {
                        const { width } = ref.current.getBoundingClientRect()
                        setPosition({
                            left: ref.current.offsetLeft,
                            width,
                            opacity: 1,
                        })
                    }
                }}
                className={`relative z-10 block cursor-pointer px-3.5 py-1.5 text-xs font-bold transition-colors md:px-4 md:py-2 md:text-sm ${
                    isSelected ? "text-[#111]" : "text-white/80 hover:text-white"
                }`}
            >
                <a href={href} className="block w-full h-full">
                    {children}
                </a>
            </li>
        )
    }
)

Tab.displayName = "Tab"

const Cursor = ({ position }: { position: Position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
            }}
            className="absolute z-0 h-8 rounded-full bg-[#ccff00] md:h-9"
        />
    )
}