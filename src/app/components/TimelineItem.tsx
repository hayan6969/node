"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"

interface TimelineItemProps {
  number: string
  heading: string
  content: string
  align: "left" | "right"
}

function TimelineItem({ number, heading, content, align }: TimelineItemProps) {
  return (
    <div className={`grid grid-cols-[1fr,auto,1fr] gap-8 items-start`}>
      <div className={`${align === "left" ? "block" : "hidden"}`}>
        <div className="flex flex-col items-start">
          <div className="text-7xl font-bold text-white mb-4">{number}</div>
          <div className="space-y-4">
            <div className="tagline text-sm text-purple-500">tagline</div>
            <h2 className="text-4xl font-bold text-white">{heading}</h2>
            <p className="text-gray-400 max-w-lg">{content}</p>
            <Button variant="secondary" className="bg-purple-600 hover:bg-purple-700 text-white">
              Change variant
            </Button>
          </div>
        </div>
      </div>

      <div className="w-px h-full relative"></div>

      <div className={`${align === "right" ? "block" : "hidden"}`}>
        <div className="flex flex-col items-start">
          <div className="text-7xl font-bold text-white mb-4">{number}</div>
          <div className="space-y-4">
            <div className="tagline text-sm text-purple-500">tagline</div>
            <h2 className="text-4xl font-bold text-white">{heading}</h2>
            <p className="text-gray-400 max-w-lg">{content}</p>
            <Button variant="secondary" className="bg-purple-600 hover:bg-purple-700 text-white">
              Change variant
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

