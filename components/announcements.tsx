"use client"

import { useState, useEffect } from 'react'
import { Bell, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const announcements = [
    {
      id: '0',
      title: 'Portal Maintenance Schedule',
      date: 'Nov 20, 2025',
      category: 'Maintenance',
      icon: '🔧',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: '1',
      title: 'New Service Request Module Launched',
      date: 'Nov 18, 2025',
      category: 'Update',
      icon: '✨',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: '2',
      title: 'Resource Allocation Guidelines Updated',
      date: 'Nov 15, 2025',
      category: 'Policy',
      icon: '📋',
      gradient: 'from-blue-400 to-cyan-500',
    }
  ]

  // Auto-scroll ticker
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-lg border-t border-white/10 bg-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left Controls */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              <Bell className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold text-white/70 hidden sm:inline">NEWS</span>
          </div>

          {/* Ticker Content */}
          <div className="flex-1 overflow-hidden">
            <div className="relative h-16 sm:h-14 flex items-center">
              {announcements.map((announcement, index) => (
                <div
                  key={announcement.id}
                  className={`absolute w-full transition-all duration-500 ${
                    index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="glass-effect rounded-lg p-3 sm:p-4 flex items-center gap-3">
                    <span className="text-lg flex-shrink-0">{announcement.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-white truncate">{announcement.title}</h3>
                      <p className="text-xs text-white/60">{announcement.date}</p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${announcement.gradient} text-white whitespace-nowrap`}>
                      {announcement.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prevAnnouncement}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
              aria-label="Previous announcement"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextAnnouncement}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
              aria-label="Next announcement"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* View All Button */}
          <a
            href="#"
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50 text-white text-sm font-semibold transition-all whitespace-nowrap"
          >
            View All
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1 px-4 py-2">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoPlay(false)
              setCurrentIndex(index)
            }}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/30 w-2'
            }`}
            aria-label={`Go to announcement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
