declare global {
  interface Window {
    ttq: {
      load: (id: string) => void
      page: () => void
      track: (event: string, data?: unknown, options?: unknown) => void
    }
  }
}

export function initTikTokPixel(pixelId: string) {
  if (typeof window === 'undefined' || window.ttq) return
  const ttq: unknown[] & {
    load?: (id: string) => void
    page?: () => void
    track?: (event: string, data?: unknown, options?: unknown) => void
  } = []
  ttq.load = function (id: string) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${id}`
    document.head.appendChild(script)
  }
  ttq.page = function () {
    /* page view tracked on load */
  }
  ttq.track = function (...args: unknown[]) {
    ;(ttq as unknown[]).push(['track', ...args])
  }
  window.ttq = ttq as unknown as Window['ttq']
  ttq.load?.(pixelId)
  ttq.page?.()
}

export function ttqTrackPurchase(value: number, eventId: string, contents: unknown[]) {
  if (typeof window?.ttq?.track !== 'function') return
  window.ttq.track('CompletePayment', { value, currency: 'MAD', contents }, { event_id: eventId })
}

export function ttqTrackAddToCart(productId: string, value: number) {
  window.ttq?.track?.('AddToCart', { content_id: productId, value, currency: 'MAD' })
}

export function getTtclid(): string {
  if (typeof window === 'undefined') return ''
  return (
    new URLSearchParams(window.location.search).get('ttclid') ??
    document.cookie.match(/ttclid=([^;]+)/)?.[1] ??
    ''
  )
}

export function getTtp(): string {
  if (typeof document === 'undefined') return ''
  return document.cookie.match(/_ttp=([^;]+)/)?.[1] ?? ''
}
