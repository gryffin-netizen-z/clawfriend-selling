import { VideoBackground } from '../components/VideoBackground'

const OUTRO_VIDEO =
  'https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8'

export function OutroSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={OUTRO_VIDEO} />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <h2
          className="text-white text-center font-bold tracking-[-0.02em]"
          style={{ fontSize: 'clamp(36px, 5vw, 96px)', lineHeight: 1.1 }}
        >
          Câu hỏi?
        </h2>
        <p
          className="text-white/80 text-center mt-[2%]"
          style={{ fontSize: 'clamp(18px, 2vw, 32px)' }}
        >
          Q&A
        </p>
      </div>
    </div>
  )
}
