interface UseMarqueeOptions {
  speed?: number
}

export function useMarquee(options: UseMarqueeOptions = {}) {
  const { speed = 10 ** 4 } = options

  return {
    marqueeProps: {
      speed,
    },
  }
}
