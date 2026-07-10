'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Zap, Star, Gift, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/lib/store/cartStore'
import { PRODUCTS } from '@/lib/constants/products'
import { fbTrackAddToCart } from '@/lib/pixels/facebook'

interface CrossSellSectionProps {
  excludeId: string
}

export function CrossSellSection({ excludeId }: CrossSellSectionProps) {
  const products = PRODUCTS.filter((p) => p.id !== excludeId)
  const currentProduct = PRODUCTS.find((p) => p.id === excludeId)
  const { addItem, openDrawer, items } = useCartStore()

  const allInCart = PRODUCTS.every((p) =>
    items.some((i) => i.productId === p.id)
  )

  const handleAddSingle = (product: (typeof PRODUCTS)[0]) => {
    addItem(product.id, product.nameAr, 1)
    fbTrackAddToCart(product.id, product.price)
    openDrawer()
  }

  const handleAddBundle = () => {
    PRODUCTS.forEach((p) => {
      if (!items.some((i) => i.productId === p.id)) {
        addItem(p.id, p.nameAr, 1)
        fbTrackAddToCart(p.id, p.price)
      }
    })
    openDrawer()
  }

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-10">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-gold/10 text-gold-dark text-sm font-bold mb-3">
            💡 تلميحة الزبونات الذكيات
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal">
            أكملي الطقوس الصيفية — وفري أكثر
          </h2>
          <p className="text-muted mt-2 max-w-md mx-auto text-sm">
            89% من زبوناتنا اشتريو 3 منتجات معاً. لأن الشمس والكلور والعرق — المشاكل 3 تجيو معاً، والحل كذلك.
          </p>
        </div>

        {/* Bundle Deal Card */}
        {!allInCart && (
          <div className="relative bg-authority text-white rounded-3xl p-6 md:p-8 overflow-hidden shadow-elevated">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-bold">
                  <Gift size={14} />
                  الباقة الكاملة — أفضل قيمة
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold">
                  الثلاثة معاً بـ 349 درهم فقط
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-white/60 line-through text-lg">597 درهم</span>
                  <span className="bg-trust-green text-white font-bold text-sm px-3 py-1 rounded-full">
                    وفري 248 درهم
                  </span>
                </div>
                <p className="text-white/80 text-sm">
                  سيروم النياسيناميد + بخاخ الكيراتين + بلسم عرق السوس — الطقوس الصيفية الكاملة
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  {PRODUCTS.map((p) => (
                    <div key={p.id} className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                      <Image src={p.imageUrl} alt={p.nameAr} width={56} height={56} className="object-cover" />
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleAddBundle}
                  className="flex items-center gap-2 bg-white text-authority font-extrabold text-base px-6 py-3 rounded-full shadow-cta hover:shadow-elevated transition-all active:scale-95"
                >
                  احصلي على الباقة
                  <ArrowLeft size={18} />
                </button>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                  <span className="text-white/70 text-xs mr-1">4.9 — 1,200+ زبونة</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Individual product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((p) => {
            const inCart = items.some((i) => i.productId === p.id)
            return (
              <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-card border border-stone-100 hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
                <Link href={`/products/${p.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-stone-100">
                  <Image
                    src={p.imageUrl}
                    alt={p.nameAr}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 start-3 flex items-center gap-1 bg-primary/90 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                    <Zap size={10} />
                    {p.stock} قطعة متبقية
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <Link href={`/products/${p.slug}`}>
                    <h3 className="font-extrabold text-charcoal text-lg leading-snug hover:text-primary transition-colors mb-1">
                      {p.nameAr}
                    </h3>
                    <p className="text-sm text-muted mb-3 leading-relaxed">{p.tagline}</p>
                  </Link>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-gold text-gold" />
                        ))}
                        <span className="text-muted text-xs mr-1">({p.reviewCount.toLocaleString()})</span>
                      </div>
                      <span className="font-extrabold text-primary text-xl">{p.price} درهم</span>
                    </div>
                    <button
                      onClick={() => handleAddSingle(p)}
                      disabled={inCart}
                      className={`w-full py-3 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
                        inCart
                          ? 'bg-trust-green/10 text-trust-green border border-trust-green/20 cursor-default'
                          : 'btn-primary'
                      }`}
                    >
                      {inCart ? '✓ مضافة للسلة' : 'أضيفيه للسلة'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom link */}
        <div className="text-center">
          <p className="text-sm text-muted">
            هل تريدين معرفة المزيد؟{' '}
            <Link href="/collections/rituel-ete" className="text-primary font-bold hover:underline">
              تصفحي كل منتجاتنا ←
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
