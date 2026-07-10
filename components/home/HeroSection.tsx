import Image from 'next/image'
import Link from 'next/link'
import { Star, Package, Truck } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-cream py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text — right on RTL */}
          <div className="md:w-1/2 space-y-6 text-center md:text-start">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
              <span>الطقوس الصيفية المغربية</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-charcoal leading-tight">
              الصيف جا..<br />
              <span className="text-primary">واش غتبقاي مخبية؟</span>
            </h1>

            <p className="text-xl text-muted leading-relaxed font-semibold">
              بشرة خالية من البقع، شعر كيحمق ومخبلش، وإبط صافي 100%
            </p>

            {/* Trust */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-semibold text-charcoal">4.9/5</span>
              </div>
              <span className="text-muted">·</span>
              <span className="text-charcoal">8,247 زبونة</span>
              <span className="text-muted">·</span>
              <div className="flex items-center gap-1 text-trust-green font-semibold">
                <Package size={14} />
                <span>الدفع عند الاستلام</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/products/serum-niacinamide"
                className="btn-primary text-center"
              >
                تهناي من مشاكلك دابا
              </Link>
              <Link
                href="/collections/rituel-ete"
                className="btn-secondary text-center"
              >
                اكتشفي المجموعة
              </Link>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs text-muted">
              <div className="flex items-center gap-1">
                <Truck size={12} className="text-primary" />
                <span>توصيل 1-5 أيام</span>
              </div>
              <span>·</span>
              <span>✓ مرخص من ONSSA</span>
              <span>·</span>
              <span>✓ ضمان 30 يوم</span>
            </div>
          </div>

          {/* Image — left on RTL */}
          <div className="md:w-1/2 relative">
            <div className="relative aspect-square max-w-sm mx-auto">
              <Image
                src="https://placehold.co/600x600/FAF7F2/C4714A?text=لومارا+هيلث"
                alt="لومارا هيلث — طقوس الصيف"
                width={600}
                height={600}
                className="rounded-3xl shadow-elevated object-cover"
                priority
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -start-4 bg-white rounded-2xl shadow-elevated p-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-trust-green rounded-xl flex items-center justify-center">
                  <Package size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">الدفع عند الاستلام</p>
                  <p className="text-xs text-muted">لا بطاقة بنكية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
