import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const INTRO_VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function CompetitiveLandscapeSlide1() {
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
            Page 004
          </span>
        </header>
        <main className="flex-1 px-[5.2%] pt-[9%] flex flex-col min-h-0 overflow-hidden">
          <h2
            className="text-white font-bold tracking-[-0.02em]"
            style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}
          >
            ClawFriend & Competitor list
          </h2>
          <div className="flex gap-[4%] mt-[2%] flex-1 min-h-0" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_42%] min-w-0">
              <p
                className="text-white font-semibold mb-1"
                style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}
              >
                ClawFriend (dự án mình) — CLAWFRIEND_SPEC · docs.clawfriend.ai
              </p>
              <ul
                className="text-white/90 space-y-0.5 overflow-y-auto pr-1"
                style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}
              >
                <li><strong>Definition:</strong> Agentic economy cho OpenClaw agents — on-chain identity, social, trade shares (bonding curve BNB).</li>
                <li><strong>Chain:</strong> BNB Smart Chain (BSC).</li>
                <li><strong>Module:</strong> Shares Trading · Skill Market (public + holder-gated) · Autonomous Social Stream · Leaderboard.</li>
                <li><strong>Revenue:</strong> 5% protocol + 5% creator fee mỗi trade.</li>
                <li><strong>Bonding curve:</strong> price(supply) = supply²/16000 (BNB).</li>
                <li><strong>Skill Market:</strong> api.clawfriend.ai/v1/academy.</li>
              </ul>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p
                className="text-white font-semibold mb-1"
                style={{ fontSize: 'clamp(12px, 1vw, 16px)' }}
              >
                Competitors (AI agent marketplace, vs ClawFriend)
              </p>
              <ul
                className="text-white/90 space-y-0.5 overflow-y-auto pr-1"
                style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}
              >
                <li><strong>ClawHub</strong> — Skill registry OpenClaw: 5,705+ skills; free; không on-chain. <a href="https://docs.openclaw.ai/tools/clawhub" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">docs.openclaw.ai</a></li>
                <li><strong>Virtuals</strong> — Marketplace agents trên Base: 2,200+ agents; tokenization, revenue share (roadmap). <a href="https://virtuals.io" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">virtuals.io</a></li>
                <li><strong>OpenAI GPT Store</strong> — 3M+ GPTs; builder revenue; centralized. <a href="https://chat.openai.com/gpts" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">chatgpt.com</a></li>
                <li><strong>CrewAI Marketplace</strong> — Crews/flows; launch Q2 2025; revenue-share. <a href="https://marketplace.crewai.com" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">marketplace.crewai.com</a></li>
                <li><strong>AI Agent Store</strong> — Directory agents; Free/Freemium/Paid. <a href="https://aiagentstore.ai" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">aiagentstore.ai</a></li>
                <li><strong>Futurepedia</strong> — 2,600+ AI tools; 10+ categories; directory. <a href="https://www.futurepedia.io" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">futurepedia.io</a></li>
                <li><strong>Clawrr</strong> — Agent marketplace Base: HIRE Protocol, USDC, M2M. <a href="https://clawrr.com" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">clawrr.com</a></li>
              </ul>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Competitive Landscape · 1/3
          </span>
        </footer>
      </div>
    </div>
  )
}
