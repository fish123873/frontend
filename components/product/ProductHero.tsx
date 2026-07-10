'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Zap, CheckCircle, Truck, Package, ArrowUp } from 'lucide-react'
import { useCartStore } from '@/lib/store/cartStore'
import { StarRating } from '@/components/shared/StarRating'
import { QuantitySelector } from '@/components/product/QuantitySelector'
import { TrustBadges } from '@/components/shared/TrustBadges'
import { getCartTotal } from '@/lib/utils/pricing'
import { fbTrackAddToCart } from '@/lib/pixels/facebook'
import { ttqTrackAddToCart } from '@/lib/pixels/tiktok'
import { snaptrTrackAddToCart } from '@/lib/pixels/snapchat'
import type { Product } from '@/types/product'

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  const [qty, setQty] = useState(2)
  const [stickyVisible, setStickyVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const { addItem, openDrawer, items } = useCartStore()

  const priceForQty = (q: number) => {
    const uniqueInCart = new Set(items.map((i) => i.productId)).size
    const newUnique = items.some((i) => i.productId === product.id)
      ? uniqueInCart
      : uniqueInCart + 1
    return getCartTotal(Math.min(newUnique + q - 1, 3))
  }

  const displayPrice = priceForQty(qty)

  const handleAddToCart = () => {
    addItem(product.id, product.nameAr, qty)
    fbTrackAddToCart(product.id, displayPrice)
    ttqTrackAddToCart(product.id, displayPrice)
    snaptrTrackAddToCart(displayPrice)
    openDrawer()
  }

  // Scroll back to product heading
  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Show sticky when the hero section scrolls out of view
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={heroRef} className="py-8 md:py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Mobile: Title + Rating above image */}
          <div className="md:hidden mb-5 space-y-3">
            <h1 className="text-2xl font-extrabold text-charcoal leading-tight">
              {product.nameFull}
            </h1>
            <StarRating rating={product.rating} count={product.reviewCount} />
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                <Zap size={12} />
                ⚡ {product.stock} وحدة متبقية فقط
              </span>
              <span className="inline-flex items-center text-xs font-bold text-trust-green bg-trust-green/10 px-3 py-1.5 rounded-full">
                ضمان 30 يوم: النتيجة أو فلوسك ترجع
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elevated">
                <Image
                  src={product.imageUrl}
                  alt={product.nameAr}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 space-y-5">

              {/* Desktop: Title + Rating beside image */}
              <div className="hidden md:block space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">
                  {product.nameFull}
                </h1>
                <StarRating rating={product.rating} count={product.reviewCount} />
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-bold px-3 py-1.5 rounded-full">
                    <Zap size={14} />
                    ⚡ {product.stock} وحدة متبقية فقط
                  </span>
                  <span className="inline-flex items-center text-sm font-bold text-trust-green bg-trust-green/10 px-3 py-1.5 rounded-full">
                    ضمان 30 يوم: النتيجة أو فلوسك ترجع
                  </span>
                </div>
              </div>

              {/* Quantity selector */}
              <div>
                <p className="font-semibold text-charcoal mb-2">اختاري الكمية:</p>
                <QuantitySelector selected={qty} onChange={setQty} />
              </div>

              {/* Price */}
              <div className="bg-white rounded-2xl p-4 border-2 border-primary/20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 end-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  أحسن ثمن
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-charcoal font-bold text-lg">المجموع:</span>
                  <span className="text-4xl font-extrabold text-primary">{displayPrice} درهم</span>
                </div>
                {qty > 1 && (
                  <p className="text-sm text-trust-green font-bold mt-2 text-end bg-trust-green/10 p-2 rounded-lg">
                    🎉 وفري {qty * 199 - displayPrice} درهم مقارنة بالسعر العادي
                  </p>
                )}
              </div>

              {/* CTA */}
              <div className="space-y-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full btn-primary text-xl py-5 shadow-lg"
                >
                  صيفطو ليا الطلبية دابا
                </button>
                <p className="text-center text-xs text-charcoal font-bold bg-stone-100 py-2 rounded-full">
                  ⚠️ مكاتخلصي والو دابا — الدفع حتا توصلك السلعة ليديك
                </p>
              </div>

              {/* Trust icons */}
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-trust-green">
                  <Package size={16} />
                  <span className="font-semibold">الدفع عند الاستلام</span>
                </div>
                <div className="flex items-center gap-1.5 text-primary">
                  <Truck size={16} />
                  <span>توصيل 1-5 أيام</span>
                </div>
                <div className="flex items-center gap-1.5 text-authority">
                  <CheckCircle size={16} />
                  <span>اختُبر درماتولوجياً</span>
                </div>
              </div>

              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA — desktop + mobile, appears after scrolling past hero */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ease-in-out ${
          stickyVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Mobile layout */}
        <div className="md:hidden bg-white border-t-2 border-primary/20 shadow-modal px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted font-semibold truncate">{product.nameAr}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-primary leading-tight">199</span>
              <span className="text-sm font-bold text-primary">درهم</span>
              <span className="text-xs text-muted">/ الوحدة</span>
            </div>
          </div>
          <button
            onClick={scrollToHero}
            className="flex-shrink-0 flex items-center gap-2 bg-primary text-white font-extrabold text-base px-5 py-3.5 rounded-full shadow-cta active:scale-95 transition-transform"
          >
            <ArrowUp size={16} />
            اطلبي الآن
          </button>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block bg-white border-t-2 border-primary/10 shadow-modal">
          <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between gap-6">
            {/* Left: product info */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                <Image
                  src={product.imageUrl}
                  alt={product.nameAr}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-0">
                <p className="font-extrabold text-charcoal text-base truncate">{product.nameAr}</p>
                <div className="flex items-center gap-3">
                  <StarRating rating={product.rating} count={product.reviewCount} size="sm" />
                  <span className="text-xs text-muted font-medium hidden lg:block">
                    ⚡ {product.stock} وحدة متبقية
                  </span>
                </div>
              </div>
            </div>

            {/* Center: price */}
            <div className="text-center flex-shrink-0">
              <p className="text-xs text-muted font-semibold">ابدئي من</p>
              <div className="flex items-baseline gap-1 justify-center">
                <span className="text-3xl font-extrabold text-primary leading-tight">199</span>
                <span className="text-base font-bold text-primary">درهم</span>
              </div>
            </div>

            {/* Right: trust + CTA */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="hidden lg:flex items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Package size={14} className="text-trust-green" />
                  الدفع عند الاستلام
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-authority" />
                  ضمان 30 يوم
                </span>
              </div>
              <button
                onClick={scrollToHero}
                className="flex items-center gap-2 btn-primary px-6 py-3 text-base shadow-cta"
              >
                <ArrowUp size={16} />
                اطلبي الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
