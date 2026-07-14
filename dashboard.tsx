'use client'

const DOWNLOAD_URL = 'https://t.me/+arXsOCc8LWhjMzYy'

interface DashboardProps {
  username: string
  onLogout: () => void
}

export default function Dashboard({ username, onLogout }: DashboardProps) {
  const handleDownload = () => {
    window.open(DOWNLOAD_URL, '_blank', 'noopener,noreferrer')
  }

  const initials = username.slice(0, 2).toUpperCase()

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#090909' }}
    >
      {/* Dashboard navbar */}
      <header
        className="flex items-center justify-between px-6 py-4 sticky top-0 z-50"
        style={{
          background: 'rgba(9,9,9,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
        role="banner"
      >
        <span
          style={{
            fontFamily: 'Verdana, Arial, sans-serif',
            fontWeight: 700,
            letterSpacing: '0.18em',
            fontSize: '1rem',
            color: '#f0f0f0',
          }}
        >
          HELLSTAR
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={onLogout}
            className="text-xs px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/5"
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              color: '#555',
              letterSpacing: '0.06em',
            }}
          >
            Logout
          </button>

          {/* Avatar */}
          <div
            className="flex items-center justify-center w-9 h-9 rounded-xl select-none"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'Verdana, Arial, sans-serif',
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.06em',
              color: '#888',
            }}
            aria-label={`User avatar for ${username}`}
          >
            {initials}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 animate-fade-in-up">
        <div className="flex flex-col items-center text-center max-w-lg gap-6">
          {/* Welcome badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: '#555',
              fontFamily: 'Verdana, Arial, sans-serif',
              letterSpacing: '0.1em',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#4a7a4a' }}
              aria-hidden="true"
            />
            AUTHENTICATED
          </div>

          {/* Welcome heading */}
          <div>
            <h1
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 6vw, 3.2rem)',
                letterSpacing: '0.02em',
                color: '#e8e8e8',
                lineHeight: 1.1,
              }}
            >
              Welcome back.
            </h1>
            <p
              className="mt-2"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                fontSize: '0.82rem',
                color: '#444',
                letterSpacing: '0.04em',
              }}
            >
              {username}
            </p>
          </div>

          {/* Glass card */}
          <div
            className="w-full mt-4 p-8 rounded-2xl flex flex-col items-center gap-6"
            style={{
              background: 'rgba(16,16,16,0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="flex items-center justify-center w-14 h-14 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              aria-hidden="true"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M11 3v12M5.5 10.5l5.5 5.5 5.5-5.5M4 19h14"
                  stroke="#888"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="text-center">
              <p
                style={{
                  fontFamily: 'Verdana, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#d0d0d0',
                  letterSpacing: '0.03em',
                }}
              >
                Latest Lua release.
              </p>

            </div>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                letterSpacing: '0.06em',
                background: '#e8e8e8',
                color: '#090909',
                boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
              }}
              aria-label="Download Lua — opens in new tab"
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
          </div>


        </div>
      </main>
    </div>
  )
}
