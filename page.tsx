'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import AuthModal from '@/components/auth-modal'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'
import Dashboard from '@/components/dashboard'

type ModalMode = 'login' | 'register' | null

export default function Page() {
  const [modalMode, setModalMode] = useState<ModalMode>(null)
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null)

  const openModal = (mode: 'login' | 'register') => setModalMode(mode)
  const closeModal = () => setModalMode(null)

  const handleAuthSuccess = (username: string) => {
    setLoggedInUser(username)
    setModalMode(null)
  }

  const handleLogout = () => {
    setLoggedInUser(null)
  }

  // Show dashboard if logged in
  if (loggedInUser) {
    return <Dashboard username={loggedInUser} onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen" style={{ background: '#090909' }}>
      {/* Navigation */}
      <Navbar
        onLogin={() => openModal('login')}
        onRegister={() => openModal('register')}
      />

      {/* Auth Modal */}
      {modalMode && (
        <AuthModal
          mode={modalMode}
          onClose={closeModal}
          onSuccess={handleAuthSuccess}
          onSwitchMode={(mode) => setModalMode(mode)}
        />
      )}

      {/* Page content */}
      <main>
        {/* Hero */}
        <HeroSection
          onDownload={() => openModal('login')}
          onCreateAccount={() => openModal('register')}
        />

        {/* Divider */}
        <div
          className="max-w-5xl mx-auto px-4"
          aria-hidden="true"
        >
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.04)' }} />
        </div>

        {/* Features */}
        <FeaturesSection />

        {/* FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
