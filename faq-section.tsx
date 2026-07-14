'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Do I need an account?',
    answer:
      'Yes, registration is required before accessing downloads.',
  },
  {
    question: 'Where does the download button lead?',
    answer:
      'It redirects to the official Telegram access page.',
  },
  {
    question: 'Is the interface mobile-friendly?',
    answer:
      'Yes, fully responsive across all screen sizes.',
  },
  {
    question: 'Is registration free?',
    answer:
      'Registration is free.',
  },
  {
    question: 'How do I access the latest release?',
    answer:
      'Log in and use the Download Lua button on your dashboard.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="py-24 px-4"
      id="faq"
      aria-label="Frequently asked questions"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs mb-4"
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              letterSpacing: '0.2em',
              color: '#444',
            }}
          >
            FAQ
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
            Common questions.
          </h2>
        </div>

        <div className="flex flex-col gap-2" role="list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: open === i ? 'rgba(28,28,28,0.7)' : 'rgba(18,18,18,0.5)',
                border: open === i
                  ? '1px solid rgba(255,255,255,0.1)'
                  : '1px solid rgba(255,255,255,0.06)',
              }}
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span
                  style={{
                    fontFamily: 'Verdana, Arial, sans-serif',
                    fontSize: '0.88rem',
                    fontWeight: open === i ? 700 : 400,
                    color: open === i ? '#e0e0e0' : '#999',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 ml-4 transition-transform duration-200"
                  style={{
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    color: open === i ? '#888' : '#444',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 2v10M2 7h10"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-6 pb-5"
                >
                  <p
                    style={{
                      fontFamily: 'Verdana, Arial, sans-serif',
                      fontSize: '0.82rem',
                      color: '#555',
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
