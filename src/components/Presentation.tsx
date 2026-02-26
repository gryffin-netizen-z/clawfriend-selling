import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react'

interface PresentationProps {
  slides: ReactNode[]
}

const INACTIVITY_MS = 3000
const FADE_MS = 300
const TRANSITION_MS = 500

export function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const total = slides.length
  const goNext = useCallback(() => setCurrent((i) => Math.min(i + 1, total - 1)), [total])
  const goPrev = useCallback(() => setCurrent((i) => Math.max(i - 1, 0)), [])

  const handleMouseMove = useCallback(() => {
    setControlsVisible(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setControlsVisible(false), INACTIVITY_MS)
  }, [])

  useEffect(() => {
    handleMouseMove()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [handleMouseMove])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFullscreen()
      } else if (e.key === 'Escape') {
        exitFullscreen()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  function exitFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      style={{ transition: `background ${TRANSITION_MS}ms ease-in-out` }}
    >
      {/* Slide stack with transitions */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? 'auto' : 'none',
            transform: `scale(${i < current ? 0.95 : i > current ? 1.05 : 1})`,
            transition: `opacity ${TRANSITION_MS}ms ease-in-out, transform ${TRANSITION_MS}ms ease-in-out`,
            zIndex: i === current ? 5 : i < current ? 4 : 6,
          }}
        >
          {slide}
        </div>
      ))}

      {/* Auto-hiding controls overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end"
        style={{
          opacity: controlsVisible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      >
        {/* Bottom navigation bar */}
        <div
          className="px-[5.2%] pb-[1%] flex items-center justify-between"
          style={{ paddingBottom: '1%' }}
        >
          <span
            className="text-white/50 tabular-nums"
            style={{ fontSize: 'clamp(11px, 1.2vw, 13px)' }}
          >
            {current + 1} / {total}
          </span>

          <div className="flex items-center gap-[6px] pointer-events-auto">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full transition-all duration-200 hover:opacity-90"
                style={{
                  width: i === current ? 24 : 6,
                  height: 6,
                  minWidth: i === current ? 24 : 6,
                  backgroundColor: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                }}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              type="button"
              aria-label="Previous slide"
              className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors"
              onClick={goPrev}
              disabled={current === 0}
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors"
              onClick={goNext}
              disabled={current === total - 1}
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
            <span className="w-px h-4 bg-white/30 mx-1" aria-hidden />
            <button
              type="button"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors"
              onClick={toggleFullscreen}
            >
              <Maximize size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
