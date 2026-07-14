export default function AboutSection() {
  return (
    <section
      className="py-24 px-4"
      id="about"
      aria-label="About"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: label + heading */}
          <div>
            <p
              className="text-xs mb-5"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                letterSpacing: '0.2em',
                color: '#444',
              }}
            >
              ABOUT
            </p>
            <h2
              className="text-balance"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                letterSpacing: '0.04em',
                color: '#e0e0e0',
                lineHeight: 1.3,
              }}
            >
              Built around simplicity.
            </h2>

            {/* Decorative separator */}
            <div
              className="mt-8 w-12 h-px"
              style={{ background: 'rgba(255,255,255,0.12)' }}
              aria-hidden="true"
            />
          </div>

          {/* Right: description */}
          <div>
            <p
              className="text-pretty"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.9,
              }}
            >
              A focused platform for distributing Lua releases. Register once, access your release instantly.
            </p>

            {/* Stats row */}
            <div className="flex gap-10 mt-10">
              {[
                { value: '100%', label: 'Uptime focus' },
                { value: '< 1s', label: 'Access time' },
                { value: 'Zero', label: 'Bloat' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'Verdana, Arial, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: '#d0d0d0',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Verdana, Arial, sans-serif',
                      fontSize: '0.72rem',
                      color: '#444',
                      letterSpacing: '0.08em',
                      marginTop: '4px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
