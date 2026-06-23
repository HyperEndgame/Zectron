import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Zectron Industries',
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-10">

        <div>
          <Link href="/" className="text-white/30 text-xs tracking-[0.3em] uppercase hover:text-white/60 transition-colors">
            ← Zectron Industries
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-widest uppercase">Privacy Policy</h1>
          <p className="text-white/30 text-sm">Effective: January 1, 2025</p>
        </div>

        <div className="space-y-8 text-white/60 text-sm leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-white text-xs tracking-[0.3em] uppercase">Information We Collect</h2>
            <p>Zectron Industries does not collect personal information from visitors to this site. This is a static landing page with no forms, accounts, or tracking.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xs tracking-[0.3em] uppercase">Cookies</h2>
            <p>This site does not use cookies or any local storage mechanisms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xs tracking-[0.3em] uppercase">Third Parties</h2>
            <p>We do not share, sell, or transmit any data to third parties.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-white text-xs tracking-[0.3em] uppercase">Contact</h2>
            <p>Questions about this policy can be directed to <a href="mailto:hello@zectron.net" className="text-white/80 hover:text-white transition-colors">hello@zectron.net</a>.</p>
          </section>

        </div>

        <div className="border-t border-white/10 pt-8 text-white/20 text-xs tracking-[0.3em] uppercase">
          © 2025 Zectron Industries
        </div>

      </div>
    </main>
  )
}
