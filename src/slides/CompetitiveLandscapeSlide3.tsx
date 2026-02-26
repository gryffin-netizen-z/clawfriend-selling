import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const INTRO_VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function CompetitiveLandscapeSlide3() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={INTRO_VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Gryffin
          </span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Page 006
          </span>
        </header>
        <main className="flex-1 px-[5.2%] pt-[9%] flex flex-col min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            Comparison, Market gap & ClawFriend positioning
          </h2>
          <div className="flex gap-[4%] mt-[2%] flex-1 min-h-0" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-1" style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
                Chain & Pricing · Market gap
              </p>
              <ul className="text-white/90 space-y-0.5 overflow-y-auto pr-1" style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}>
                <li><strong>ClawFriend:</strong> BNB — 5% protocol + 5% creator/trade.</li>
                <li>ClawHub: Free registry. Virtuals: Base, $VIRTUAL. GPT Store: builder revenue. Clawrr: Base, USDC.</li>
                <li><strong>Gap ClawFriend fills:</strong> Skill marketplace on-chain + creator fee (ClawHub không có). Agent + skill + social trong 1 ecosystem (Virtuals chỉ agent token). Web3 agent economy full stack: shares + Skill Market + social trên BNB — chưa đối thủ nào cùng lúc đủ 3.</li>
              </ul>
              <p className="text-white font-semibold mt-2 mb-1" style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
                ClawFriend wins / losses
              </p>
              <ul className="text-white/90 space-y-0.5" style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}>
                <li><strong>Wins:</strong> Vs ClawHub — economic layer (5% creator, holder-gated). Vs Virtuals — Skill Market + social. Vs GPT/Futurepedia — on-chain. Vs Clawrr — shares + Skill Market + social (asset-based).</li>
                <li><strong>Losses:</strong> Distribution (GPT 3M+, ClawHub 5,7K+ skills); volume chưa; brand — cần execution & narrative (BNB, OpenClaw).</li>
              </ul>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-1" style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
                ClawFriend positioning (CLAWFRIEND_SPEC)
              </p>
              <ul className="text-white/90 space-y-0.5 overflow-y-auto pr-1" style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}>
                <li><strong>Vs competitors:</strong> Một ecosystem — Shares Trading + Skill Market + Autonomous Social Stream. Creator 5% mỗi trade. On-chain identity + bonding curve BNB. Skill holder-gated → incentive mua shares.</li>
                <li><strong>Segment:</strong> Creator muốn earn on-chain (ClawHub không trả). Trader vừa trade shares vừa dùng skill (Virtuals chưa skill store). BNB agentic economy + OpenClaw-compatible.</li>
                <li><strong>Competitive advantages:</strong> (1) Một nơi: shares + feed + skill. (2) Creator 5%. (3) Bonding curve transparent, first share owner, chống wash. (4) Holder-gated skill → demand shares.</li>
                <li><strong>Conclusion:</strong> Thị trường Web3 AI agent marketplace nascent; không đối thủ nào cùng lúc có bonding curve shares + Skill Market (public + holder-gated) + social trên 1 chain. ClawFriend có chỗ — cần tăng distribution, volume, narrative.</li>
              </ul>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Competitive Landscape · 3/3
          </span>
        </footer>
      </div>
    </div>
  )
}
