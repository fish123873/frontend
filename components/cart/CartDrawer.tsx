'use client'

import { useEffect, useRef } from 'react'
import { X, ShoppingBag, Plus } from 'lucide-react'
import Image from 'next/image'
import { useCartStore } from '@/lib/store/cartStore'
import { PRODUCTS } from '@/lib/constants/products'
import { getCartTotal } from '@/lib/utils/pricing'
import { fbTrackInitiateCheckout } from '@/lib/pixels/facebook'

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, openCheckout, removeItem, addItem } = useCartStore()
  const overlayRef = useRef<HTMLDivElement>(null)

  const uniqueCount = new Set(items.map((i) => i.productId)).size
  const total = getCartTotal(uniqueCount)
  const cartProductIds = items.map((i) => i.productId)
  const crossSells = PRODUCTS.filter((p) => !cartProductIds.includes(p.id))

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  const handleCheckout = () => {
    fbTrackInitiateCheckout(total)
    openCheckout()
  }

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 start-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-modal">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="font-bold text-lg">سلتك 🛒</h2>
            {items.length > 0 && (
              <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="إغلاق"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted">
              <ShoppingBag size={48} className="mx-auto mb-3 opacity-30" />
              <p>سلتك فارغة</p>
              <button onClick={closeDrawer} className="mt-4 btn-secondary text-sm py-2 px-4">
                اكتشفي المنتجات
              </button>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.productId} className="flex items-center gap-3 bg-stone-50 rounded-xl p-3">
                    <Image
                      src={PRODUCTS.find((p) => p.id === item.productId)?.imageUrl ?? 'https://placehold.co/80x80/FAF7F2/C4714A?text=L'}
                      alt={item.productName}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-charcoal leading-tight">{item.productName}</p>
                      <p className="text-xs text-muted mt-0.5">الكمية: {item.quantity}</p>
                    </div>
                    <div className="text-end flex-shrink-0">
                      <p className="font-bold text-primary text-sm">{item.unitPrice} درهم</p>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-xs text-error hover:underline mt-1"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bundle nudge */}
              {uniqueCount === 1 && (
                <div className="bg-gold/10 border-2 border-gold/30 rounded-2xl p-4 space-y-1">
                  <p className="font-extrabold text-charcoal text-sm">💡 وفري أكثر مع منتج ثانٍ!</p>
                  <p className="text-sm text-muted">أضيفي منتج ثاني وخلصي <strong className="text-primary">279 درهم</strong> عوض 398 — <span className="text-trust-green font-bold">توفير 119 درهم</span></p>
                </div>
              )}
              {uniqueCount === 2 && (
                <div className="bg-gold/10 border-2 border-gold/30 rounded-2xl p-4 space-y-1">
                  <p className="font-extrabold text-charcoal text-sm">🏆 أكملي الطقوس الصيفية الكاملة!</p>
                  <p className="text-sm text-muted">الثلاثة معاً بـ <strong className="text-primary">349 درهم</strong> بدل 597 — <span className="text-trust-green font-bold">وفري 248 درهم</span></p>
                </div>
              )}

              {/* Cross-sells */}
              {crossSells.length > 0 && (
                <div>
                  <p className="font-semibold text-sm text-charcoal mb-2">أكملي الطقوس الصيفية:</p>
                  <div className="space-y-2">
                    {crossSells.map((p) => (
                      <div key={p.id} className="flex items-center gap-3 border border-stone-100 rounded-xl p-3">
                        <Image
                          src={p.imageUrl}
                          alt={p.nameAr}
                          width={48}
                          height={48}
                          className="rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-charcoal leading-tight">{p.nameAr}</p>
                          <p className="text-xs text-primary font-bold mt-0.5">199 درهم</p>
                        </div>
                        <button
                          onClick={() => addItem(p.id, p.nameAr, 1)}
                          className="flex items-center gap-1 bg-primary text-white text-xs font-bold py-1.5 px-3 rounded-full"
                        >
                          <Plus size={12} />
                          <span>أضيفي</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-100 p-4 space-y-3 bg-white">
            {/* Savings reminder */}
            {uniqueCount >= 2 && (
              <div className="flex items-center justify-between text-sm bg-trust-green/10 border border-trust-green/20 rounded-xl px-3 py-2">
                <span className="text-trust-green font-bold">🎉 وفرتي {uniqueCount === 2 ? '119' : '248'} درهم!</span>
                <span className="text-muted text-xs">مقارنة بالسعر العادي</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-charcoal font-bold text-lg">المجموع:</span>
              <div className="text-end">
                {uniqueCount >= 2 && (
                  <p className="text-muted line-through text-sm">{uniqueCount === 2 ? '398' : '597'} درهم</p>
                )}
                <span className="text-3xl font-extrabold text-primary">{total} درهم</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full btn-primary text-center py-4 text-lg shadow-cta"
            >
              🚀 احجزي طلبيتك دابا — الدفع عند الاستلام
            </button>

            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { emoji: '📦', text: 'الدفع عند الاستلام' },
                { emoji: '🚚', text: 'توصيل سريع' },
                { emoji: '🔄', text: 'ضمان 30 يوم' },
              ].map((t, i) => (
                <div key={i} className="bg-stone-50 rounded-xl py-2 px-1">
                  <p className="text-base">{t.emoji}</p>
                  <p className="text-[10px] font-bold text-muted leading-tight mt-0.5">{t.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-charcoal font-bold">
              🔒 مكاتخلصي والو دابا — الفلوس غير عند الاستلام
            </p>
          </div>
        )}
      </div>
    </>
  )
}
