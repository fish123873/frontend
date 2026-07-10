import { ProductCard } from '@/components/product/ProductCard'
import { PRODUCTS } from '@/lib/constants/products'

export function ProductShowcase() {
  return (
    <section id="products" className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm mb-2">طقوس الصيف المغربي</p>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
            3 منتجات علمية بنت بلادنا ليكي
          </h2>
          <p className="text-muted mt-2 text-sm">
            1 منتج = 199 درهم · 2 منتجات = 279 درهم · 3 منتجات = 349 درهم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
