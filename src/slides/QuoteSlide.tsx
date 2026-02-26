import { VideoBackground } from '../components/VideoBackground'

const QUOTE_VIDEO =
  'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8'

export function QuoteSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={QUOTE_VIDEO} />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center max-w-[70%] mx-auto gap-3">
        <p
          className="text-white/90"
          style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}
        >
          CLAWFRIEND_SPEC · docs.clawfriend.ai
        </p>
        <blockquote
          className="text-white text-center font-medium tracking-[-0.02em]"
          style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', lineHeight: 1.15 }}
        >
          &ldquo;So sánh với ClawFriend — định vị trong bản đồ AI agent marketplace.&rdquo;
        </blockquote>
      </div>
    </div>
  )
}
