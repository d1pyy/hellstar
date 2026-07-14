const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2L3 7v6l7 5 7-5V7L10 2z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M10 7v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6.5 9l3.5 2 3.5-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Aimbot',
    description:
      'Best-in-class AI Peek, Jump Scout, Air Teleport, Air Exploit, and advanced Interpolate Prediction.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10h6M7 7h4M7 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Misc',
    description:
      'Auto Release, Super Toss, Fast Ladder, No Fall Damage, Model Changer, and many more features coming soon.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M10 6.5v3.5l2.5 1.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Anti-Aim',
    description:
      'The best free Anti-Aim builder with numerous modifiers, advanced customization, and powerful exploit support.',
  },
]

export default function FeaturesSection() {
  return (
    <section
      className="py-24 px-4 max-w-5xl mx-auto"
      id="features"
      aria-label="Features"
    >
      {/* Section header */}
      <div className="text-center mb-16">
        <p
          className="text-xs mb-4"
          style={{
            fontFamily: 'Verdana, Arial, sans-serif',
            letterSpacing: '0.2em',
            color: '#444',
          }}
        >
          FEATURES
        </p>
        <h2
          className="text-balance"
          style={{
            fontFamily: 'Verdana, Arial, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            letterSpacing: '0.04em',
            color: '#e0e0e0',
          }}
        >
          Everything you need.
        </h2>

      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <article
            key={feature.title}
            className="glass-card p-8 rounded-2xl flex flex-col gap-5"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#888',
              }}
            >
              {feature.icon}
            </div>
            <div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'Verdana, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: '#e0e0e0',
                  letterSpacing: '0.03em',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Verdana, Arial, sans-serif',
                  fontSize: '0.82rem',
                  color: '#555',
                  lineHeight: 1.75,
                }}
              >
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
