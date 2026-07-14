export default function Footer() {
  return (
    <footer
      className="py-10 px-4"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              color: '#333',
            }}
          >
            HELLSTAR
          </span>
          <span
            style={{
              color: '#2a2a2a',
              fontFamily: 'Verdana, Arial, sans-serif',
            }}
            aria-hidden="true"
          >
            /
          </span>
          <span
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              fontSize: '0.72rem',
              color: '#2e2e2e',
              letterSpacing: '0.04em',
            }}
          >
            &copy; 2026 Hellstar
          </span>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs transition-colors duration-200 hover:text-[#888]"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                color: '#2e2e2e',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs transition-colors duration-200 hover:text-[#888]"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                color: '#2e2e2e',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              Terms of Service
            </a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
