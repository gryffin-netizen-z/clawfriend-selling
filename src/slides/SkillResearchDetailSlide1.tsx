import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO =
  'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8'

export function SkillResearchDetailSlide1() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Gryffin
          </span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Skill Research · 1/5
          </span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em] mb-[2%]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            Real-time Whale Alert
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Target user</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Swing/active trader crypto, portfolio $10K–$100K; đang dùng hoặc cân nhắc Nansen/Arkham nhưng thấy đắt hoặc limited.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Problem</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Mất nhiều giờ theo dõi whale thủ công; bỏ lỡ move &gt;$100K; cần biết whale accumulate hay distribute.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>How the skill solves it</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Agent theo dõi 500+ whale wallet (ETH/BSC, optional SOL/BASE). Move &gt;$100K trong 30s → alert Telegram/Discord (wallet, token, amount, destination). User set filter: chain, token, min amount.
              </p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Visibility & Monetization</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Public free:</strong> 1 chain, 50 whale, delay 2 phút. <strong>Holder-gated (≥1 share):</strong> đa chain, 500 whale, alert &lt;30s, filter nâng cao. Nansen $99/mo → share model thay subscription.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Demand evidence</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Whale Alert &gt;3M followers; Nansen $99/mo = willingness to pay; Arkham free limited → gap “free + customizable” và “premium via shares”.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Strengths / Weaknesses</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Strengths:</strong> Alert &lt;30s, filter linh hoạt; share-gated thay $99/mo. <strong>Weaknesses:</strong> Bản free giới hạn 1 chain, 50 whale, delay 2 phút; cần hold share cho full feature.
              </p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Skill Research · 1/5
          </span>
        </footer>
      </div>
    </div>
  )
}
