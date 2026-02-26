import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO =
  'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8'

export function SkillResearchDetailSlide2() {
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
            Skill Research · 2/5
          </span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em] mb-[2%]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            Rug Pull & Honeypot Detector
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Target user</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Retail DeFi/memecoin trader, $2K–$50K; hay mua token mới trên DEX (BSC/ETH/BASE); sợ rug, honeypot.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Problem</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Không đọc contract; không biết holder concentration, liquidity lock, mint; mất tiền vì rug hoặc không bán được (honeypot).
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>How the skill solves it</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                User nhập token address (hoặc link DEX). So sánh bytecode với pattern scam → risk score; cảnh báo honeypot, unverified, holder concentration, liquidity không lock. Output: “Safe / Caution / High risk”. Có thể Telegram: paste link → reply risk.
              </p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Visibility & Monetization</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Public free:</strong> 5 check/ngày, 1 chain. <strong>Holder-gated (≥1 share):</strong> unlimited, đa chain, real-time alert token mới list đạt ngưỡng risk. Token Sniffer API $99/mo → holder-gated thay subscription.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Demand evidence</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Rug pulls $2.8B thiệt hại 2024; Token Sniffer 30K contracts/ngày, Sniffer Pack Pro $99/mo; demand: paste address → score.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Strengths / Weaknesses</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Strengths:</strong> Một bước paste → risk score; holder-gated thay Token Sniffer $99/mo. <strong>Weaknesses:</strong> Free chỉ 5 check/ngày, 1 chain; pattern scam cần cập nhật thường xuyên.
              </p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Skill Research · 2/5
          </span>
        </footer>
      </div>
    </div>
  )
}
