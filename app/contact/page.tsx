'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const field = 'w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm tracking-wide focus:outline-none focus:border-white/30 transition-colors'

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-lg mx-auto space-y-10">

        <div>
          <Link href="/" className="text-white/30 text-xs tracking-[0.3em] uppercase hover:text-white/60 transition-colors">
            ← Zectron Industries
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-widest uppercase">Contact</h1>
          <p className="text-white/30 text-sm">We&apos;ll get back to you shortly.</p>
        </div>

        {status === 'sent' ? (
          <div className="border border-white/10 px-6 py-10 text-center space-y-3">
            <p className="text-white/80 tracking-widest uppercase text-sm">Message Sent</p>
            <p className="text-white/30 text-xs">We&apos;ll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className={field}
              placeholder="Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              required
            />
            <input
              className={field}
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              required
            />
            <textarea
              className={`${field} resize-none`}
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              required
            />
            {status === 'error' && (
              <p className="text-red-400/70 text-xs tracking-wide">Something went wrong. Try again.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-white text-black text-xs font-bold tracking-[0.3em] uppercase px-6 py-3 hover:bg-white/90 transition-colors disabled:opacity-40"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}

        <div className="border-t border-white/10 pt-8 text-white/20 text-xs tracking-[0.3em] uppercase">
          © 2025 Zectron Industries
        </div>

      </div>
    </main>
  )
}
