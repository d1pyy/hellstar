'use client'

interface HeroSectionProps {
  onDownload: () => void
  onCreateAccount: () => void
}

export default function HeroSection({ onDownload, onCreateAccount }: HeroSectionProps) {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4"
      aria-label="Hero"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(40,40,40,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
        {/* Main title */}
        <h1
          className="animate-fade-in-up delay-100 text-balance"
          style={{
            fontFamily: 'Verdana, Arial, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            letterSpacing: '0.14em',
            color: '#f0f0f0',
            lineHeight: 1.05,
          }}
        >
          HELLSTAR
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: 'Verdana, Arial, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
            letterSpacing: '0.28em',
            color: '#444',
          }}
        >
          THE BEST FREE LUA
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 animate-fade-in-up delay-400">
          <button
            onClick={onDownload}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              letterSpacing: '0.06em',
              background: '#e8e8e8',
              color: '#090909',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M7.5 1v9M4 7.5l3.5 3.5 3.5-3.5M2 13h11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Lua
          </button>

          <button
            onClick={onCreateAccount}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              letterSpacing: '0.06em',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#c0c0c0',
            }}
          >
            Create Account
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500"
        aria-hidden="true"
      >
        <span
          className="text-[10px] tracking-[0.2em]"
          style={{ color: '#333', fontFamily: 'Verdana, Arial, sans-serif' }}
        >
          SCROLL
        </span>
        <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
      </div>
    </section>
  )
}
