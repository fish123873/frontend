'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Package, Truck, Star, Phone } from 'lucide-react'
import { CrossSellSection } from '@/components/product/CrossSellSection'

interface OrderData {
  orderId: string
  name: string
  total: number
  items: Array<{ product_name: string; quantity: number; unit_price: number }>
  upsellAccepted: boolean
  upsellProduct?: { product_name: string; unit_price: number } | null
}

export default function ThankYouPage() {
  const [order, setOrder] = useState<OrderData | null>(null)

  useEffect(() => {
    const raw = sessionStorage.getItem('lumara_order')
    if (raw) {
      try {
        setOrder(JSON.parse(raw))
      } catch {
        // ignore
      }
    }
  }, [])

  return (
    <>
      <section className="bg-gradient-to-b from-trust-green/10 to-cream py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-trust-green rounded-full flex items-center justify-center">
              <CheckCircle size={44} className="text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-charcoal">
              ✅ تم تأكيد طلبك!
            </h1>
            {order && (
              <p className="text-xl text-muted mt-2">
                شكرا <span className="font-bold text-charcoal">{order.name}</span> — طلبك في الطريق إليك 🎉
              </p>
            )}
          </div>

          {/* Order recap */}
          {order && (
            <div className="bg-white rounded-2xl shadow-card p-6 text-start space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">رقم الطلب:</span>
                <span className="font-bold text-charcoal font-latin">{order.orderId}</span>
              </div>

              <div className="border-t border-stone-100 pt-3 space-y-2">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-charcoal">{item.product_name} ×{item.quantity}</span>
                    <span className="font-semibold">{item.unit_price} درهم</span>
                  </div>
                ))}
                {order.upsellAccepted && order.upsellProduct && (
                  <div className="flex justify-between text-sm text-primary">
                    <span>{order.upsellProduct.product_name} (إضافة خاصة)</span>
                    <span className="font-semibold">99 درهم</span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
                <p className="text-muted text-sm">ستدفعين عند الاستلام:</p>
                <p className="text-4xl font-extrabold text-primary mt-1">{order.total} درهم</p>
              </div>
            </div>
          )}

          {/* Delivery info */}
          <div className="bg-white rounded-2xl shadow-card p-5 space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={24} className="text-authority flex-shrink-0" />
              <div className="text-start">
                <p className="font-bold text-charcoal text-lg">جاوبي على التليفون!</p>
                <p className="text-sm text-muted">غادي نتاصلو بيك في غضون ساعتين من رقم 06 باش نأكدو الطلبية ديالك. جاوبي باش نصيفطولك لاكوموند اليوم.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Package size={24} className="text-trust-green flex-shrink-0" />
              <div className="text-start">
                <p className="font-bold text-charcoal">ماتخلصي والو دابا</p>
                <p className="text-sm text-muted">حتا توصلك السلعة لباب دارك وتشوفيها بعينيك عاد خلصي.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck size={24} className="text-primary flex-shrink-0" />
              <div className="text-start">
                <p className="font-bold text-charcoal">توصيل سريع</p>
                <p className="text-sm text-muted">1-2 أيام للمدن الكبرى، 2-5 أيام لباقي المدن.</p>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="bg-gold/10 border border-gold/20 rounded-2xl p-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm font-semibold text-charcoal">
              87% من طلباتنا توصل بنجاح في الوقت المحدد
            </p>
          </div>

          <Link href="/" className="inline-block btn-secondary py-3 px-8">
            العودة للرئيسية
          </Link>
        </div>
      </section>

      {/* Cross-sells */}
      {order && order.items.length > 0 && (
        <CrossSellSection excludeId={order.items[0].product_name} />
      )}
    </>
  )
}
