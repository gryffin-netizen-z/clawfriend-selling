import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function DistributionPlanTimelineSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Gryffin</span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution · 7/7</span>
        </header>
        <main className="flex-1 px-[5.2%] flex flex-col justify-center min-h-0 overflow-hidden">
          <h2 className="text-white font-bold tracking-[-0.02em] mb-[2%]" style={{ fontSize: 'clamp(22px, 2.8vw, 48px)', lineHeight: 1.05 }}>
            Timeline & Metrics (Month 1)
          </h2>
          <div className="flex gap-[4%]" style={{ gap: '4%' }}>
            <div className="flex flex-col flex-[0_0_48%] min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Timeline tổng hợp</p>
              <ul className="text-white/90 space-y-0.5 mb-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.4 }}>
                <li><strong>Tuần 1:</strong> Twitter setup, creative; shortlist KOL; setup Space + giveaway; 2 bài blog; pin + post; BNB grant apply.</li>
                <li><strong>Tuần 2:</strong> Chạy Ads; KOL đăng thread; công bố giveaway; 2 bài blog; OpenClaw outreach.</li>
                <li><strong>Tuần 3:</strong> Tối ưu bid/creative; Telegram post hoặc KOL 2; AMA/Space; 2 bài blog; BNB follow-up; DEX outreach.</li>
                <li><strong>Tuần 4:</strong> Báo cáo Ads; đóng giveaway, trao prize; 1–2 bài; draft PR/guest post OpenClaw.</li>
              </ul>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-white font-semibold mb-0.5" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>Metrics & targets</p>
              <ul className="text-white/90 space-y-0.5" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)', lineHeight: 1.4 }}>
                <li><strong>Sign-ups</strong> (UTM mọi kênh): 300–700.</li>
                <li><strong>Skill installs:</strong> 80–200.</li>
                <li><strong>CAC (paid):</strong> $15–35 trung bình.</li>
                <li><strong>Organic vs paid:</strong> Tối thiểu 15–20% organic.</li>
                <li><strong>Community:</strong> +200–500 members TG/Discord.</li>
              </ul>
              <p className="text-white/80 mt-2" style={{ fontSize: 'clamp(11px, 0.95vw, 14px)' }}>Tổng paid $9,500; dự phòng $500; organic $0.</p>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right shrink-0">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>Distribution Plan · 7/7</span>
        </footer>
      </div>
    </div>
  )
}
