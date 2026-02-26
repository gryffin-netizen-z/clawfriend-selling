import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const INTRO_VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8'

export function IntroSlide() {
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
            Page 001
          </span>
        </header>
        <main className="flex-1 px-[5.2%] pt-[2%] flex flex-col">
          <h2
            className="text-white font-bold tracking-[-0.02em]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', lineHeight: 1.05 }}
          >
            AI Agent Marketplaces / & ClawFriend
          </h2>
          <div
            className="flex gap-[4%] mt-[3.5%] flex-1 min-h-0"
            style={{ gap: '4%' }}
          >
            <div className="flex flex-col flex-[0_0_22%]">
              <p
                className="text-white/90"
                style={{ fontSize: 'clamp(13px, 1.1vw, 20px)', lineHeight: 1.5 }}
              >
                Phân tích chỉ các dự án AI agent marketplace (marketplace cho AI agent / skill cho
                agent) trên thị trường, so sánh với ClawFriend theo CLAWFRIEND_SPEC — docs.clawfriend.ai.
              </p>
              <div className="flex items-baseline gap-2 mt-4">
                <span
                  className="text-white font-bold"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 64px)' }}
                >
                  Spec
                </span>
                <span className="text-white/80" style={{ fontSize: 'clamp(13px, 1.1vw, 20px)' }}>
                  CLAWFRIEND
                </span>
              </div>
            </div>
            <div className="flex-[0_0_38%]">
              <p
                className="text-white/90"
                style={{
                  fontSize: 'clamp(13px, 1.1vw, 20px)',
                  lineHeight: 1.5,
                }}
              >
                Đối thủ: tên, link, mô tả, số liệu, monetization, điểm mạnh/yếu. Phân tích tổng thể
                và kết luận định vị ClawFriend trong bản đồ cạnh tranh.
              </p>
            </div>
            <div className="flex flex-col flex-[0_0_20%]">
              <span
                className="text-white font-bold"
                style={{ fontSize: 'clamp(28px, 3.5vw, 64px)' }}
              >
                Focus
              </span>
              <p
                className="text-white/90 mt-1"
                style={{ fontSize: 'clamp(12px, 1vw, 18px)' }}
              >
                Agent marketplace · Skills · So sánh & định vị.
              </p>
              <div className="mt-4 flex-1 min-h-[80px] flex items-end">
                <MiniLineGraph />
              </div>
            </div>
          </div>
        </main>
        <footer className="px-[5.2%] pb-[2%] text-right">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Competitive Landscape
          </span>
        </footer>
      </div>
    </div>
  )
}

function MiniLineGraph() {
  return (
    <svg
      width="100%"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="graphFill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#D2FF55" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D2FF55" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 0 45 Q 30 35, 60 25 T 120 15"
        fill="url(#graphFill)"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="0" cy="45" r="3" fill="#B750B2" stroke="white" strokeWidth="1" />
      <circle cx="120" cy="15" r="3" fill="#B750B2" stroke="white" strokeWidth="1" />
    </svg>
  )
}
