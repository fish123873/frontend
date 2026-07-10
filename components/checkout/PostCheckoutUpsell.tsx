'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Star } from 'lucide-react'
import { useCartStore } from '@/lib/store/cartStore'
import { CountdownTimer } from '@/components/shared/CountdownTimer'
import { submitOrder, OrderBlockedError } from '@/lib/api/orders'
import { PRODUCTS } from '@/lib/constants/products'
import { fbTrackPurchase, getFbc, getFbp } from '@/lib/pixels/facebook'
import { ttqTrackPurchase, getTtclid, getTtp } from '@/lib/pixels/tiktok'
import { snaptrTrackPurchase, getSnapUuidC1 } from '@/lib/pixels/snapchat'

export function PostCheckoutUpsell() {
  const router = useRouter()
  const submittingRef = useRef(false)
  const {
    items,
    isUpsellOpen,
    upsellProduct,
    acceptUpsell,
    declineUpsell,
    customerName,
    customerPhone,
    eventId,
    getTotal,
    setOrderId,
    clearCart,
  } = useCartStore()

  const cartTotal = getTotal()
  const upsellProductData = upsellProduct
    ? PRODUCTS.find((p) => p.id === upsellProduct.productId)
    : null
  const shouldShowUpsell = isUpsellOpen && upsellProduct && upsellProduct.productId !== '__none__'

  const fireSubmitOrder = async (withUpsell: boolean) => {
    if (submittingRef.current) return
    submittingRef.current = true

    const upsellAccepted = withUpsell && !!upsellProduct && upsellProduct.productId !== '__none__'
    const finalTotal = cartTotal + (upsellAccepted ? 99 : 0)

    try {
      const payload = {
        name: customerName,
        phone: customerPhone,
        items: items.map((i) => ({
          product_id: i.productId,
          product_name: i.productName,
          quantity: i.quantity,
          unit_price: i.unitPrice,
        })),
        cart_total: cartTotal,
        upsell_accepted: upsellAccepted,
        upsell_product:
          upsellAccepted && upsellProduct
            ? {
                product_id: upsellProduct.productId,
                product_name: upsellProduct.productName,
                quantity: 1,
                unit_price: 99,
              }
            : null,
        event_id: eventId ?? `evt_${Date.now().toString(36)}`,
        user_agent: navigator.userAgent,
        ip_address: '',
        source_url: window.location.href,
        pixel_ids: {
          fbc: getFbc(),
          fbp: getFbp(),
          ttclid: getTtclid(),
          ttp: getTtp(),
          snap_uuid_c1: getSnapUuidC1(),
        },
      }

      const result = await submitOrder(payload)
      setOrderId(result.order_id)

      // Fire web pixels
      const contents = items.map((i) => ({ id: i.productId, quantity: i.quantity }))
      fbTrackPurchase(finalTotal, payload.event_id, contents)
      ttqTrackPurchase(finalTotal, payload.event_id, contents)
      snaptrTrackPurchase(finalTotal, payload.event_id)

      // Save order info to sessionStorage for thank-you page
      sessionStorage.setItem(
        'lumara_order',
        JSON.stringify({
          orderId: result.order_id,
          name: customerName,
          total: finalTotal,
          items: payload.items,
          upsellAccepted,
          upsellProduct: upsellAccepted ? payload.upsell_product : null,
        })
      )

      clearCart()
      router.push('/thank-you')
    } catch (err) {
      console.error('Order failed:', err)
      submittingRef.current = false
      if (err instanceof OrderBlockedError) {
        alert(err.userMessage)
      } else {
        alert('وقع مشكل تقني. عاودي المحاولة بعد شوية.')
      }
    }
  }

  useEffect(() => {
    if (isUpsellOpen && upsellProduct?.productId === '__none__') {
      fireSubmitOrder(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpsellOpen, upsellProduct])

  const handleAccept = () => {
    acceptUpsell()
    fireSubmitOrder(true)
  }

  const handleDecline = () => {
    declineUpsell()
    fireSubmitOrder(false)
  }

  if (!shouldShowUpsell) return null

  return (
    <div className="fixed inset-0 bg-black/70 z-[70] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-modal w-full max-w-md">
        <div className="p-6 space-y-4">
          {/* Timer */}
          <CountdownTimer seconds={12} onExpire={handleDecline} />

          {/* Headline */}
          <div className="text-center">
            <p className="text-2xl">🎉</p>
            <h2 className="font-bold text-lg text-charcoal">مبروك! طلبك في الطريق</h2>
            <p className="text-muted text-sm">هل تضيفين هذا المنتج بسعر خاص؟</p>
          </div>

          {/* Product */}
          {upsellProductData && (
            <div className="border border-stone-100 rounded-xl p-4 flex items-center gap-4">
              <Image
                src={upsellProductData.imageUrl}
                alt={upsellProductData.nameAr}
                width={80}
                height={80}
                className="rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <p className="font-bold text-charcoal">{upsellProductData.nameAr}</p>
                <p className="text-sm text-muted mt-0.5">{upsellProductData.tagline}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-muted line-through text-sm">199 درهم</span>
                  <span className="text-primary font-bold text-xl">99 درهم</span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    وفري 100 درهم
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Testimonial */}
          <div className="bg-stone-50 rounded-xl p-3">
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-charcoal">
              &quot;كنت خايفة نطلب من الأنترنت — وصل وهو أحسن مما توقعت&quot;
            </p>
            <p className="text-xs text-muted mt-1">— خديجة، الدار البيضاء</p>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={handleAccept}
              className="w-full btn-primary text-center"
            >
              ✓ نعم، أضيفيه بـ 99 درهم
            </button>
            <button
              onClick={handleDecline}
              className="w-full btn-ghost text-center"
            >
              لا شكرا، أتمم بدونه
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
