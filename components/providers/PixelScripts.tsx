'use client'

import { useEffect } from 'react'
import { initFacebookPixel } from '@/lib/pixels/facebook'
import { initTikTokPixel } from '@/lib/pixels/tiktok'
import { initSnapchatPixel } from '@/lib/pixels/snapchat'

export function PixelScripts() {
  useEffect(() => {
    const initPixels = () => {
      const fbId = process.env.NEXT_PUBLIC_FB_PIXEL_ID
      const ttId = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID
      const snapId = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID
      if (fbId) initFacebookPixel(fbId)
      if (ttId) initTikTokPixel(ttId)
      if (snapId) initSnapchatPixel(snapId)
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(initPixels, { timeout: 3000 })
    } else {
      setTimeout(initPixels, 1500)
    }
  }, [])

  return null
}
