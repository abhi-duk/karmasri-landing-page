"use client"

import { useState, useEffect } from "react"
import { Bell, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export default function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const announcements = [
    { id: "0", title: "Portal Maintenance Schedule", date: "Nov 20, 2025", icon: "🔧" },
    { id: "1", title: "New Service Request Module Launched", date: "Nov 18, 2025", icon: "✨" },
    { id: "2", title: "Resource Allocation Guidelines Updated", date: "Nov 15, 2025", icon: "📋" }
  ]

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, announcements.length])

  const nextAnnouncement = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % announcements.length)
  }

  const prevAnnouncement = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length)
  }

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white
        border-t border-amber-300
      "
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-1.5">
        <div className="flex items-center justify-between gap-3">

          {/* Left Controls */}
          <div className="flex items-center gap-1.5">
            <div
              className="
                p-1.5 rounded-md
                bg-white hover:bg-amber-50
                border border-amber-300
                transition
              "
            >
              <Bell className="w-3.5 h-3.5 text-amber-600" />
            </div>

            <span className="text-[10px] font-semibold text-amber-700 hidden sm:inline tracking-wide">
              NEWS
            </span>
          </div>

          {/* Ticker Content */}
          <div className="flex-1 overflow-hidden">
            <div className="relative h-9 sm:h-9 flex items-center">
              {announcements.map((announcement, index) => (
                <div
                  key={announcement.id}
                  className={`absolute w-full transition-all duration-300 ${
                    index === currentIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div
                    className="
                      rounded-md px-3 py-1.5
                      flex items-center gap-2.5
                      bg-white border border-amber-200
                    "
                  >
                    <span className="text-base flex-shrink-0">{announcement.icon}</span>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-[11px] sm:text-xs font-semibold text-slate-900 truncate">
                        {announcement.title}
                      </h3>
                      <p className="text-[10px] text-slate-600">
                        {announcement.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={prevAnnouncement}
              className="
                p-1.5 rounded-md
                bg-white hover:bg-amber-50
                border border-amber-300
                text-amber-700
                transition
              "
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={nextAnnouncement}
              className="
                p-1.5 rounded-md
                bg-white hover:bg-amber-50
                border border-amber-300
                text-amber-700
                transition
              "
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* View All Button */}
          <a
            href="#"
            className="
              hidden sm:inline-flex
              items-center gap-1.5 px-3 py-1.5 rounded-full
              bg-gradient-to-r from-amber-500 to-amber-400
              text-white text-xs font-semibold
              transition-all
              border border-amber-300
            "
          >
            View All
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
