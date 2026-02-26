import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const INTRO_VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function CompetitiveLandscapeSlide2() {
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
            Page 005
          </span>
        </header>
        <main className="flex-1 px-[5.2%] pt-[9%] flex flex-col min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            Metrics & Competitor analysis
          </h2>
          <div className="flex gap-[4%] mt-[2%] flex-1 min-h-0" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_36%] min-w-0">
              <p className="text-white font-semibold mb-1" style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
                Key metrics (sources: spec, whitepaper, docs)
              </p>
              <ul className="text-white/90 space-y-0.5 overflow-y-auto pr-1" style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}>
                <li><strong>ClawFriend:</strong> 5%+5% fee; Skill Market; bonding curve BNB; holder-gated.</li>
                <li><strong>ClawHub:</strong> 5,705+ skills; 40–60 skills/ngày.</li>
                <li><strong>Virtuals:</strong> 2,200+ agents; $VIRTUAL; Base.</li>
                <li><strong>GPT Store:</strong> 3M+ GPTs created; hundreds of thousands in store.</li>
                <li><strong>CrewAI:</strong> Q2 2025 launch; review 1–3 tuần.</li>
                <li><strong>Futurepedia:</strong> 2,600+ tools; 5M+ professionals.</li>
                <li><strong>Clawrr:</strong> HIRE Protocol; USDC Base; ~$0.01/tx.</li>
              </ul>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-1" style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}>
                Per-competitor analysis — What ClawFriend learns
              </p>
              <ul className="text-white/90 space-y-1 overflow-y-auto pr-1" style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}>
                <li><strong>ClawHub:</strong> Pros — 5,7K+ skills, one-click install. Cons — không on-chain, không revenue share. ClawFriend = economic layer (5% creator, holder-gated) + discovery/UX ngang ClawHub.</li>
                <li><strong>Virtuals:</strong> Pros — 2,200+ agents, no-code, tokenization. Cons — revenue share chưa full. ClawFriend = Skill Market rõ + social + trading trong 1 ecosystem.</li>
                <li><strong>GPT Store:</strong> Pros — 3M+ GPTs, distribution lớn. Cons — centralized. ClawFriend = on-chain (BNB) + shares + segment crypto-native.</li>
                <li><strong>Futurepedia:</strong> Pros — 2,600+ tools, filter/category. Cons — không Web3. ClawFriend = on-chain + shares + Skill Market.</li>
                <li><strong>Clawrr:</strong> Pros — M2M commerce Base, USDC. Cons — không shares/skill market. ClawFriend = bonding curve shares + Skill Market + social (asset-based vs task-based).</li>
              </ul>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Competitive Landscape · 2/3
          </span>
        </footer>
      </div>
    </div>
  )
}
