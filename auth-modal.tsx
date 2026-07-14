'use client'

import { useEffect, useRef, useState } from 'react'

interface AuthModalProps {
  mode: 'login' | 'register'
  onClose: () => void
  onSuccess: (username: string) => void
  onSwitchMode: (mode: 'login' | 'register') => void
}

export default function AuthModal({ mode, onClose, onSuccess, onSwitchMode }: AuthModalProps) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    firstInputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username.trim()) {
      setError('Please enter a username.')
      return
    }
    if (!password.trim()) {
      setError('Please enter a password.')
      return
    }
    if (mode === 'register') {
      if (!email.trim()) {
        setError('Please enter an email.')
        return
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.')
        return
      }
    }

    onSuccess(username.trim())
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#f0f0f0',
    fontFamily: 'Verdana, Arial, sans-serif',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={mode === 'login' ? 'Login dialog' : 'Register dialog'}
    >
      <div
        className="w-full max-w-md animate-scale-in"
        style={{
          background: 'rgba(16, 16, 16, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div
              className="text-[#f0f0f0] mb-1"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.1em',
                fontSize: '0.85rem',
                color: '#666',
              }}
            >
              HELLSTAR
            </div>
            <h2
              className="text-[#f0f0f0]"
              style={{
                fontFamily: 'Verdana, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '1.4rem',
                letterSpacing: '0.02em',
              }}
            >
              {mode === 'login' ? 'Welcome back' : 'Create account'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-xl text-[#666] hover:text-[#f0f0f0] hover:bg-white/5 transition-all duration-200"
            aria-label="Close dialog"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
          <div>
            <label
              htmlFor="modal-username"
              className="block text-xs mb-2"
              style={{ color: '#888', fontFamily: 'Verdana, Arial, sans-serif', letterSpacing: '0.05em' }}
            >
              USERNAME
            </label>
            <input
              ref={firstInputRef}
              id="modal-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={inputStyle}
              autoComplete="username"
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.25)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>

          {mode === 'register' && (
            <div>
              <label
                htmlFor="modal-email"
                className="block text-xs mb-2"
                style={{ color: '#888', fontFamily: 'Verdana, Arial, sans-serif', letterSpacing: '0.05em' }}
              >
                EMAIL
              </label>
              <input
                id="modal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={inputStyle}
                autoComplete="email"
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.25)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="modal-password"
              className="block text-xs mb-2"
              style={{ color: '#888', fontFamily: 'Verdana, Arial, sans-serif', letterSpacing: '0.05em' }}
            >
              PASSWORD
            </label>
            <input
              id="modal-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={inputStyle}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.25)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>

          {mode === 'register' && (
            <div>
              <label
                htmlFor="modal-confirm"
                className="block text-xs mb-2"
                style={{ color: '#888', fontFamily: 'Verdana, Arial, sans-serif', letterSpacing: '0.05em' }}
              >
                CONFIRM PASSWORD
              </label>
              <input
                id="modal-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                style={inputStyle}
                autoComplete="new-password"
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.25)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
          )}

          {error && (
            <p
              className="text-xs mt-1"
              style={{ color: '#e06060', fontFamily: 'Verdana, Arial, sans-serif' }}
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: 'Verdana, Arial, sans-serif',
              letterSpacing: '0.06em',
              background: '#e8e8e8',
              color: '#090909',
              border: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            {mode === 'login' ? 'LOGIN' : 'CREATE ACCOUNT'}
          </button>
        </form>

        {/* Switch mode */}
        <p
          className="text-center mt-6 text-xs"
          style={{ color: '#555', fontFamily: 'Verdana, Arial, sans-serif' }}
        >
          {mode === 'login' ? (
            <>
              {"Don't have an account? "}
              <button
                onClick={() => onSwitchMode('register')}
                className="text-[#aaa] hover:text-[#f0f0f0] transition-colors duration-200 underline underline-offset-2"
              >
                Register
              </button>
            </>
          ) : (
            <>
              {'Already have an account? '}
              <button
                onClick={() => onSwitchMode('login')}
                className="text-[#aaa] hover:text-[#f0f0f0] transition-colors duration-200 underline underline-offset-2"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
