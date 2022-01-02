import { useEffect, useRef, useState } from 'react'

interface UseMarqueeOptions {
  speed?: number
}

export function useMarquee(options: UseMarqueeOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const { speed = 10 ** 4 } = options
  const [containerWidth, setContainerWidth] = useState(0)
  const [keyframes, setKeyframes] = useState<{ transform: string }[]>([])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const keyframes = [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-100%)' },
    ]

    const { width: containerWidth } = element.getBoundingClientRect()

    setContainerWidth(containerWidth)
    setKeyframes(keyframes)
  }, [])

  return {
    marqueeProps: {
      keyframes,
      containerWidth,
      ref,
      speed,
    },
  }
}
