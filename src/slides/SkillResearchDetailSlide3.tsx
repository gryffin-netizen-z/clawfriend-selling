import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO =
  'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8'

export function SkillResearchDetailSlide3() {
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
            Skill Research · 3/5
          </span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em] mb-[2%]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            Auto Yield Optimizer
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Target user</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                DeFi user có stablecoin/blue-chip $5K–$100K; muốn tối ưu APY mà không tự so sánh vault/pool mỗi ngày; không muốn phí quản lý cao.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Problem</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Yield thay đổi liên tục; 50+ protocol, nhiều chain; bridging + rebalance thủ công tốn thời gian và gas; không rõ net APY sau fee.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>How the skill solves it</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                Agent đọc portfolio → so sánh APY vs top 5–10 vault/pool (ETH/BSC/BASE…); gợi ý “move X từ A sang B để +Y% APY”; ước tính gas; optional alert khi APY giảm &gt;Z% hoặc opportunity &gt;W%. Chỉ recommend, không tự execute.
              </p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Visibility & Monetization</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Public free:</strong> 1 chain, 1 lần/ngày, không alert. <strong>Holder-gated (≥1 share):</strong> đa chain, real-time, Telegram alert opportunity &gt; ngưỡng. Nansen/DeBank Pro paid → share-gated thay subscription.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Demand evidence</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                &gt;2/3 TVL DeFi liên quan yield; &gt;50 assets + nhiều protocol; DeFi Saver 18–23% APY; Yearn/Zapper/DeBank lượng user lớn.
              </p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Strengths / Weaknesses</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>
                <strong>Strengths:</strong> Chỉ recommend, không auto execute → giảm rủi ro; share-gated thay subscription. <strong>Weaknesses:</strong> Free 1 chain, 1 lần/ngày; APY biến động nhanh, data có độ trễ.
              </p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Skill Research · 3/5
          </span>
        </footer>
      </div>
    </div>
  )
}
