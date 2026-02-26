import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface VideoBackgroundProps {
  src: string
}

export function VideoBackground({ src }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const isSafariNativeHls = video.canPlayType('application/vnd.apple.mpegurl')
    if (isSafariNativeHls) {
      video.src = src
      video.addEventListener('loadedmetadata', () => video.play().catch(() => {}))
      return
    }

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true })
      hlsRef.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
      return () => {
        hls.destroy()
        hlsRef.current = null
      }
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover opacity-100"
      autoPlay
      loop
      muted
      playsInline
      aria-hidden
    />
  )
}
