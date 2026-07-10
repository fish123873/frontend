declare global {
  interface Window {
    snaptr: ((...args: unknown[]) => void) & { queue?: unknown[]; handleRequest?: (...args: unknown[]) => void }
  }
}

export function initSnapchatPixel(pixelId: string) {
  if (typeof window === 'undefined' || window.snaptr) return
  const s = function (...args: unknown[]) {
    if (s.handleRequest) {
      s.handleRequest(...args)
    } else {
      s.queue!.push(args)
    }
  }
  s.queue = [] as unknown[]
  window.snaptr = s
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://sc-static.net/scevent.min.js'
  document.head.appendChild(script)
  window.snaptr('init', pixelId, { user_email: '' })
  window.snaptr('track', 'PAGE_VIEW')
}

export function snaptrTrackPurchase(value: number, eventId: string) {
  window.snaptr?.('track', 'PURCHASE', {
    price: value,
    currency: 'MAD',
    transaction_id: eventId,
  })
}

export function snaptrTrackAddToCart(value: number) {
  window.snaptr?.('track', 'ADD_CART', { price: value, currency: 'MAD' })
}

export function getSnapUuidC1(): string {
  if (typeof document === 'undefined') return ''
  return document.cookie.match(/sc_at=([^;]+)/)?.[1] ?? ''
}
