'use client'

import { useEffect, useState } from 'react'

interface NavbarProps {
  onLogin: () => void
  onRegister: () => void
}

export default function Navbar({ onLogin, onRegister }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 animate-fade-in"
      role="banner"
    >
      <nav
        className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(14, 14, 14, 0.85)'
            : 'rgba(14, 14, 14, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div
          className="text-[#f0f0f0] text-xl select-none"
          style={{
            fontFamily: 'Verdana, Arial, sans-serif',
            fontWeight: 700,
            letterSpacing: '0.18em',
            fontSize: '1.1rem',
          }}
          aria-label="HELLSTAR"
        >
          HELLSTAR
        </div>

        {/* Nav Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onLogin}
            className="px-5 py-2 text-sm rounded-xl text-[#aaaaaa] hover:text-[#f0f0f0] transition-all duration-200 hover:bg-white/5"
            style={{ fontFamily: 'Verdana, Arial, sans-serif', letterSpacing: '0.04em' }}
          >
            Login
          </button>
          <button
            onClick={onRegister}
            className="px-5 py-2 text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              letterSpacing: '0.04em',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#f0f0f0',
            }}
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  )
}
