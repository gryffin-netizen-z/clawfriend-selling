import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function DistributionPlanPartnershipSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Gryffin</span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution · 6/7</span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2 className="text-white font-bold tracking-[-0.02em] mb-[2%]" style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}>
            Partnership / Collab (Bonus)
          </h2>
          <ul className="text-white/90 space-y-1.5 overflow-y-auto pr-1" style={{ fontSize: 'clamp(11px, 0.95vw, 15px)', lineHeight: 1.4 }}>
            <li><strong>OpenClaw (ClawHub):</strong> 135K+ GitHub stars; 5,7K+ skills. ClawFriend thêm economic layer (holder-gated, creator fee). Đề xuất: integration &quot;Install from ClawFriend&quot; trong ClawHub/docs (API api.clawfriend.ai/v1/academy); 1 bài OpenClaw blog. Tuần 2–3: outreach; Tuần 4: draft PR/guest post.</li>
            <li><strong>BNB Chain / builder program:</strong> ClawFriend chạy trên BNB. Apply builder/grant; feature newsletter/ecosystem page. Tuần 1: nộp; Tuần 3–4: follow up.</li>
            <li><strong>DEX hoặc analytics trên BNB:</strong> Co-marketing (PancakeSwap, BSCScan…): bài &quot;Cách dùng ClawFriend skill với DEX X&quot; hoặc cross-link. Tuần 3–4: chọn đối tác, email outreach.</li>
          </ul>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution Plan · 6/7</span>
        </footer>
      </div>
    </div>
  )
}
