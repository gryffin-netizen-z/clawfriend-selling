import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO =
  'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8'

export function SkillResearchDetailSlide5() {
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
            Skill Research · 5/5
          </span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em] mb-[2%]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            Smart Money / Copy-Trade Tracker
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Target user</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Trader muốn “follow” wallet có lợi nhuận cao; $5K–$50K; không muốn trả Nansen $99/mo chỉ để copytrade.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Problem</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Không biết wallet nào đáng follow; Nansen có Smart Money và “Copytrading Top Performing Wallets” nhưng đắt; cần list wallet + alert khi họ mua/bán token X.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>How the skill solves it</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Curated list “smart money” wallet (leaderboard/manual): top ROI, win rate. User chọn 1–10 wallet theo dõi. Alert khi wallet swap/buy/sell (token + amount, link tx). Optional: tổng hợp “A vừa mua X, B vừa bán Y”. Data từ RPC/indexer (Etherscan, BSC).
              </p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Visibility & Monetization</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Public free:</strong> theo 3 wallet, alert delay 10 phút. <strong>Holder-gated (≥1 share):</strong> theo 20 wallet, alert real-time, filter token/chain. Nansen $99/mo → share-gated thay subscription.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Demand evidence</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Nansen: “Use Case 4: Copytrading Top Performing Wallets”, “Use Case 2: Find & Copytrade Wallets on Hyperliquid”; Minara copy-trade workflow; Nansen $99 = willingness to pay.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Strengths / Weaknesses</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Strengths:</strong> Curated smart money list; alert real-time; share-gated thay Nansen $99/mo. <strong>Weaknesses:</strong> Free chỉ 3 wallet, delay 10 phút; chất lượng phụ thuộc list wallet curate.
              </p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Skill Research · 5/5
          </span>
        </footer>
      </div>
    </div>
  )
}
