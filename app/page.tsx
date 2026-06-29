export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">

        {/* Logo mark */}
        <div className="flex justify-center mb-2">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" fill="white" />
            <path d="M10 18 H46 L32 28 L46 38 H10 L24 28 Z" fill="black" />
          </svg>
        </div>

        {/* Wordmark */}
        <div className="space-y-1">
          <h1 className="text-5xl sm:text-7xl font-black tracking-[0.15em] uppercase text-white">
            ZECTRON
          </h1>
          <p className="text-xs tracking-[0.4em] uppercase text-white/50">
            Industries
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Est. 2025</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Message */}
        <div className="space-y-3">
          <p className="text-xl sm:text-2xl font-light tracking-widest uppercase text-white/80">
            Coming Soon
          </p>
          <p className="text-sm text-white/40 tracking-wide max-w-sm mx-auto">
            Something significant is in the works. Check back shortly.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-8 flex items-center gap-6 text-white/20 text-xs tracking-[0.3em] uppercase">
        <span>© 2025 Zectron Industries</span>
        <a href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</a>
      </div>
    </main>
  )
}
