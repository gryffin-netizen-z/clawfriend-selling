import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function DistributionPlanOverviewSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Gryffin</span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution · 1/7</span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2 className="text-white font-bold tracking-[-0.02em] mb-[2%]" style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}>
            Budget overview — Month 1: $10,000
          </h2>
          <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)' }}>
            Tổng paid ≤ $10,000. Organic = $0 nhưng có action plan và timeline.
          </p>
          <ul className="text-white/90 space-y-1 overflow-y-auto pr-1" style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}>
            <li><strong>Twitter/X Ads (Paid) — $4,500:</strong> Crypto/DeFi audience; CPC $0.40–0.60; CAC $15–25.</li>
            <li><strong>KOL / Creator (Paid) — $3,000:</strong> reach 50K–150K/thread; CAC $20–40.</li>
            <li><strong>Community & Event (Paid) — $2,000:</strong> AMA, Space, Giveaway; sign-ups 100–300; $7–20 per sign-up.</li>
            <li><strong>Technical Blog (Organic) — $0:</strong> 2K–5K views/tháng; 20–80 sign-ups UTM.</li>
            <li><strong>Telegram / Discord (Organic) — $0:</strong> Members +200–500.</li>
          </ul>
          <p className="text-white/80 mt-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)' }}>
            <strong>Tổng paid: $9,500</strong> (dự phòng $500).
          </p>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution Plan · 1/7</span>
        </footer>
      </div>
    </div>
  )
}
