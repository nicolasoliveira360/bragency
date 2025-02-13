'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { href: "#beneficios", label: "Benefícios" },
    { href: "#portfolio", label: "Como Funciona" },
    { href: "#investimento", label: "Investimento" },
    { href: "#contato", label: "Contato" }
  ]

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed w-full top-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-5 group">
            <div className="relative w-16 h-16 border border-[#D4B98C] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-[2px] before:border before:border-[#D4B98C]/20">
              <span className="text-2xl font-extralight tracking-wider text-[#D4B98C] relative z-10">BR</span>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4B98C] to-[#A38E6A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              <span className="absolute text-2xl font-extralight tracking-wider text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-20">BR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extralight tracking-wider text-white">BR</span>
              <span className="text-base font-light tracking-[0.2em] text-[#D4B98C]">AGENCY</span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-500 text-sm uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#D4B98C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {/* CTA Button */}
            <a 
              href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
              target="_blank"
              rel="noopener noreferrer" 
              className="hidden md:flex btn-primary items-center space-x-2 group"
            >
              <span>Solicitar Orçamento</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>

            {/* Menu Mobile Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center group"
              aria-label="Menu"
            >
              <div className={`w-6 h-px bg-[#D4B98C] transition-all duration-300 ease-out mb-1.5 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:w-5'}`} />
              <div className={`w-6 h-px bg-[#D4B98C] transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45' : 'group-hover:w-4'}`} />
            </button>
          </div>
        </nav>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && mounted && (
          <div className="md:hidden py-8 animate-fade-in border-t border-[#333333] mt-6">
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-500 text-sm uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center space-x-2 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Solicitar Orçamento</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 