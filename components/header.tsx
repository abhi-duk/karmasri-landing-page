'use client'

import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Logo from './logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [lang, setLang] = useState<'en' | 'ml'>('en')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const toggleLang = () => setLang(lang === 'en' ? 'ml' : 'en')

  return (
    <header
      className={`
        fixed top-0 w-full z-50 border-b border-blue-100/40
        bg-white/90 backdrop-blur-md
        transition
        ${theme === 'dark' ? 'bg-slate-900 border-slate-700' : ''}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="
                relative text-sm font-medium text-slate-700
                transition-colors
                hover:text-[#0B4A8F]
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-[#0B4A8F]
                after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              Services
            </a>

            <a
              href="#features"
              className="
                relative text-sm font-medium text-slate-700
                transition-colors
                hover:text-[#0B4A8F]
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-[#0B4A8F]
                after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              Features
            </a>

            <a
              href="#stats"
              className="
                relative text-sm font-medium text-slate-700
                transition-colors
                hover:text-[#0B4A8F]
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-[#0B4A8F]
                after:transition-all after:duration-200
                hover:after:w-full
              "
            >
              Impact
            </a>

            {/* Language Switch */}
            <button
              onClick={toggleLang}
              className="
                px-3 py-1.5 rounded-md border border-blue-200 bg-white
                text-slate-700 font-medium text-xs sm:text-sm
                hover:bg-blue-50 hover:border-blue-300 transition
              "
            >
              {lang === 'en' ? 'മലയാളം' : 'EN'}
            </button>

            {/* Theme Switch */}
            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-md border border-blue-200 bg-white
                hover:bg-blue-50 transition text-slate-700
              "
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* NAVY CTA */}
            <button
              className="
                bg-[#002B5B] hover:bg-[#001F44]
                text-white px-6 py-2 rounded-lg
                font-semibold text-sm tracking-wide
                transition-all shadow-sm
              "
            >
              Officer Portal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a
              href="#services"
              className="
                block text-base font-medium text-slate-700
                hover:text-[#0B4A8F] transition
              "
            >
              Services
            </a>

            <a
              href="#features"
              className="
                block text-base font-medium text-slate-700
                hover:text-[#0B4A8F] transition
              "
            >
              Features
            </a>

            <a
              href="#stats"
              className="
                block text-base font-medium text-slate-700
                hover:text-[#0B4A8F] transition
              "
            >
              Impact
            </a>

            {/* Language Switch */}
            <button
              onClick={toggleLang}
              className="
                w-full px-3 py-2 rounded-md border border-blue-200 bg-white
                text-slate-700 font-medium text-sm
                hover:bg-blue-50 transition
              "
            >
              {lang === 'en' ? 'മലയാളം' : 'EN'}
            </button>

            {/* Theme Switch */}
            <button
              onClick={toggleTheme}
              className="
                w-full px-3 py-2 rounded-md border border-blue-200 bg-white
                hover:bg-blue-50 transition text-slate-700
                flex items-center gap-2 text-sm
              "
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>

            {/* CTA Navy */}
            <button
              className="
                w-full bg-[#002B5B] hover:bg-[#001F44]
                text-white px-6 py-2 rounded-lg
                transition font-semibold text-sm
              "
            >
              Officer Portal
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
