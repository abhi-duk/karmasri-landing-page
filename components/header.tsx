'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border bg-white/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition font-medium">Services</a>
            <a href="#features" className="text-foreground hover:text-primary transition font-medium">Features</a>
            <a href="#stats" className="text-foreground hover:text-primary transition font-medium">Impact</a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition font-semibold">
              Officer Portal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#services" className="block text-foreground hover:text-primary transition font-medium">Services</a>
            <a href="#features" className="block text-foreground hover:text-primary transition font-medium">Features</a>
            <a href="#stats" className="block text-foreground hover:text-primary transition font-medium">Impact</a>
            <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition font-semibold">
              Officer Portal
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
