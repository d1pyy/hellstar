import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HELLSTAR — Minimal. Fast. Reliable.',
  description:
    'Download the latest Lua release through your personal account. Secure access, simple interface, and lightweight experience.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090909',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased bg-[#090909] text-[#f0f0f0]" style={{ fontFamily: 'Verdana, Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
