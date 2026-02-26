import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function DistributionPlanTwitterSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Gryffin</span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution · 2/7</span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2 className="text-white font-bold tracking-[-0.02em] mb-[2%]" style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}>
            Channel 1 — Twitter/X Ads (Paid)
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Why</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>DeFi/crypto user active trên X; target follower DefiLlama, Nansen, etherscan, WhaleAlert.</p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Budget</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>$4,500 tháng 1 (45% tổng).</p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Action plan</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>Campaign Awareness + Consideration. Creative: 2 video 15s (Whale Alert + Rug Check) + 1 carousel. Landing Skill Market (UTM). A/B 2 sets; sau 2 tuần tắt creative kém.</p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Timeline</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>Tuần 1: Setup account, pixel, 2 video + carousel. Tuần 2-4: Chạy; review ngày 7, 14. Cuối tháng: Báo cáo CAC, sign-up, skill install.</p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Reach & cost</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>200K-400K impressions; 60-240 sign-ups. CPC target $0.50; CAC $18.75-75.</p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution Plan · 2/7</span>
        </footer>
      </div>
    </div>
  )
}
