import {
  Monitor,
  Brain,
  Briefcase,
  Lightbulb,
  Shield,
} from 'lucide-react'
import { VideoBackground } from '../components/VideoBackground'
import { Logo } from '../components/Logo'

const ANALYTICS_VIDEO =
  'https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8'

const CARDS = [
  {
    icon: Monitor,
    title: 'Competitors',
    description:
      'Tên, link, mô tả — so sánh các marketplace AI agent trên thị trường.',
  },
  {
    icon: Brain,
    title: 'Metrics & Monetization',
    description:
      'Metrics, mô hình doanh thu, và cách các đối thủ kiếm tiền.',
  },
  {
    icon: Briefcase,
    title: 'Strengths / Weaknesses',
    description:
      'Phân tích SWOT-style cho từng đối thủ và cho ClawFriend.',
  },
  {
    icon: Lightbulb,
    title: 'Overall analysis',
    description:
      'Bản đồ cạnh tranh và xu hướng AI agent marketplace.',
  },
  {
    icon: Shield,
    title: 'ClawFriend positioning',
    description:
      'Kết luận: vị trí ClawFriend theo CLAWFRIEND_SPEC (docs.clawfriend.ai).',
  },
] as const

export function AnalyticsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground src={ANALYTICS_VIDEO} />
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <Logo />
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Gryffin
          </span>
          <span className="text-white/80" style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}>
            Page 002
          </span>
        </header>
        <main className="flex-1 flex flex-col px-[5.2%] min-h-0">
          <div className="text-center pt-[1%]">
            <p
              className="text-white/90"
              style={{ fontSize: 'clamp(14px, 1.2vw, 24px)' }}
            >
              Competitive Landscape Deliverables
            </p>
            <h2
              className="text-white font-bold tracking-[-0.02em]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', lineHeight: 1.05 }}
            >
              AI Agent Marketplaces & ClawFriend
            </h2>
          </div>
          <div
            className="flex-1 grid mt-[2%] min-h-0"
            style={{
              gridTemplateRows: '1fr 1fr',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 'clamp(10px, 1.5vw, 27px)',
            }}
          >
            {CARDS.slice(0, 3).map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="liquid-glass rounded-lg flex flex-col justify-end min-h-0 col-span-2"
                style={{ padding: 'clamp(20px, 2.5vw, 48px)' }}
              >
                <Icon
                  className="text-white shrink-0 mb-3"
                  style={{ width: 'clamp(32px, 2.5vw, 48px)', height: 'clamp(32px, 2.5vw, 48px)' }}
                  strokeWidth={1.5}
                />
                <h3
                  className="text-white font-semibold"
                  style={{ fontSize: 'clamp(18px, 1.8vw, 36px)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-white/80 mt-1"
                  style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}
                >
                  {description}
                </p>
              </div>
            ))}
            {CARDS.slice(3, 5).map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="liquid-glass rounded-lg flex flex-col justify-end min-h-0 col-span-3"
                style={{ padding: 'clamp(20px, 2.5vw, 48px)' }}
              >
                <Icon
                  className="text-white shrink-0 mb-3"
                  style={{ width: 'clamp(32px, 2.5vw, 48px)', height: 'clamp(32px, 2.5vw, 48px)' }}
                  strokeWidth={1.5}
                />
                <h3
                  className="text-white font-semibold"
                  style={{ fontSize: 'clamp(18px, 1.8vw, 36px)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-white/80 mt-1"
                  style={{ fontSize: 'clamp(12px, 1.05vw, 20px)' }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
