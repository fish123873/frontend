declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...a: unknown[]) => void
      push?: (...args: unknown[]) => void
      loaded?: boolean
      version?: string
      queue?: unknown[]
    }
    _fbq?: unknown
  }
}

export function initFacebookPixel(pixelId: string) {
  if (typeof window === 'undefined' || window.fbq) return
  type FbqFn = typeof window.fbq
  const n: FbqFn = function (...args: unknown[]) {
    if (n?.callMethod) {
      n.callMethod?.(...args)
    } else {
      n?.queue?.push(args)
    }
  }
  n!.push = n
  n!.loaded = true
  n!.version = '2.0'
  n!.queue = []
  window.fbq = n
  if (!window._fbq) window._fbq = n
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
  window.fbq?.('init', pixelId)
  window.fbq?.('track', 'PageView')
}

export function fbTrackPurchase(value: number, eventId: string, contents: unknown[]) {
  if (typeof window?.fbq !== 'function') return
  window.fbq?.(
    'track',
    'Purchase',
    { value, currency: 'MAD', contents, content_type: 'product' },
    { eventID: eventId }
  )
}

export function fbTrackAddToCart(productId: string, value: number) {
  window.fbq?.('track', 'AddToCart', { content_ids: [productId], value, currency: 'MAD' })
}

export function fbTrackInitiateCheckout(value: number) {
  window.fbq?.('track', 'InitiateCheckout', { value, currency: 'MAD' })
}

export function getFbc(): string {
  if (typeof document === 'undefined') return ''
  return document.cookie.match(/_fbc=([^;]+)/)?.[1] ?? ''
}

export function getFbp(): string {
  if (typeof document === 'undefined') return ''
  return document.cookie.match(/_fbp=([^;]+)/)?.[1] ?? ''
}
