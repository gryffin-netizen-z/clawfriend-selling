import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const COVER_VIDEO = 'https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8'

export function DistributionPlanSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={COVER_VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Gryffin
          </span>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center" style={{ marginTop: '-3%' }}>
          <h1
            className="text-white text-center font-bold tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px, 5vw, 96px)', lineHeight: 1.05 }}
          >
            Distribution Plan
          </h1>
          <p
            className="text-white/90 text-center mt-[1.5%]"
            style={{ fontSize: 'clamp(20px, 2.5vw, 48px)' }}
          >
            Go-to-market & growth strategy
          </p>
          <p
            className="text-white/75 mt-[2%]"
            style={{ fontSize: 'clamp(14px, 1.2vw, 24px)' }}
          >
            By Gryffin
          </p>
        </main>
        <footer className="text-center pb-[4%]">
          <span className="text-white/60" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            2024
          </span>
        </footer>
      </div>
    </div>
  )
}
