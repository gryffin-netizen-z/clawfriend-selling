import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO =
  'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8'

export function SkillResearchDetailSlide4() {
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
            Skill Research · 4/5
          </span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em] mb-[2%]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            New Token Sniper / Launch Alert
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Target user</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Trader tích cực, $5K–$50K; muốn biết token mới list (DEX) sớm hoặc alert theo tiêu chí (liquidity, contract verified); không nhất thiết auto-buy.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Problem</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Token list mỗi phút; không theo kịp; sniper bot chuyên nghiệp (50–150ms) đắt và cạnh tranh MEV; user chỉ cần “alert + link” để tự quyết định.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>How the skill solves it</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Agent monitor factory/mempool cho new pool (BSC/ETH/BASE). Token mới có liquidity &gt; ngưỡng (VD $20K) + optional verified → alert Telegram (link DEX, liquidity, contract). Không auto-buy. Có thể kết hợp Rug Pull Detector trong alert.
              </p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Visibility & Monetization</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Public free:</strong> 1 chain, delay 5 phút, 20 alert/ngày. <strong>Holder-gated (≥1 share):</strong> đa chain, alert &lt;1 phút, filter liquidity/verified, unlimited. Sniper bot trả phí cao → skill “alert only” phù hợp holder-gated.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Demand evidence</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Bot market $1.4B→$4.8B; Banana Gun $3M fee, $7B volume; nhiều user cần “biết sớm” → demand alert-only; Reddit/Medium “token sniper”, “new token launch”.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Strengths / Weaknesses</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Strengths:</strong> Chỉ alert, không auto-buy → tránh legal/rug; kết hợp Rug Detector; holder-gated thay phí sniper cao. <strong>Weaknesses:</strong> Free delay 5 phút, 20 alert/ngày; không cạnh tranh với sniper 50–150ms.
              </p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Skill Research · 4/5
          </span>
        </footer>
      </div>
    </div>
  )
}
