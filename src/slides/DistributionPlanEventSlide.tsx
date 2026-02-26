import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function DistributionPlanEventSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Gryffin</span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution · 4/7</span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2 className="text-white font-bold tracking-[-0.02em] mb-[2%]" style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}>
            Channel 3 — Community & Event (Paid)
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Why</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>AMA/Space tạo trust; giveaway thu hút sign-up. Vừa giáo dục vừa acquisition.</p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Budget</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>$2,000. Prize $1,200 (3 giải BNB); còn lại Gleam, graphic, Space.</p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Action plan</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>AMA/X Space 1 lần (Skill Market, Whale/Rug/Yield trên BNB) 45–60 phút. Giveaway: Follow + join TG/Discord + install ≥1 skill. Random 3 winner sau 7 ngày. UTM event_m1.</p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Timeline</p>
              <p className="text-white/90 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>Tuần 1: Đặt lịch Space, design giveaway, Gleam. Tuần 2: Công bố. Tuần 3: AMA/Space. Tuần 4: Đóng giveaway, trao prize.</p>
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Reach & ROI</p>
              <p className="text-white/90" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.45 }}>Space 80–200 live; giveaway 300–800 entries. 100–300 sign-ups → CAC ~$7–20.</p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution Plan · 4/7</span>
        </footer>
      </div>
    </div>
  )
}
