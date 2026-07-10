import type { Metadata } from 'next'
import { ProductCard } from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/constants/products'
import { TrustBadges } from '@/components/shared/TrustBadges'

export const metadata: Metadata = {
  title: 'الطقوس الصيفية — لومارا هيلث',
  description: '3 منتجات تجميل علمية للمرأة المغربية — الدفع عند الاستلام',
}

export default function CollectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream to-white py-12 md:py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-semibold text-sm mb-2">طقوس الصيف المغربي</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-charcoal mb-4">
            الطقوس الصيفية — ريتويل إيتي
          </h1>
          <p className="text-muted text-lg mb-6">
            3 منتجات علمية مختارة للمرأة المغربية — لحماية البشرة والشعر والجسم في الصيف
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 inline-block text-sm font-semibold text-charcoal">
            🎁 اجمعي الثلاثة وخلصي <span className="text-primary text-lg font-bold">349 درهم</span> عوض 597
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bundle pricing explanation */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-card">
            <h3 className="font-bold text-lg text-charcoal mb-4 text-center">نظام الأسعار</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: '1 منتج', price: '199 درهم', note: 'السعر العادي', highlight: false },
                { label: '2 منتجات', price: '279 درهم', note: 'وفري 119 درهم', highlight: false },
                { label: '3 منتجات', price: '349 درهم', note: 'وفري 248 درهم ⭐', highlight: true },
              ].map((opt, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 text-center border-2 ${opt.highlight ? 'border-primary bg-primary/5' : 'border-stone-100'}`}
                >
                  <p className="font-semibold text-charcoal">{opt.label}</p>
                  <p className={`text-2xl font-extrabold mt-1 ${opt.highlight ? 'text-primary' : 'text-charcoal'}`}>
                    {opt.price}
                  </p>
                  <p className="text-sm text-trust-green font-semibold mt-1">{opt.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <TrustBadges variant="grid" />
        </div>
      </section>
    </>
  )
}
