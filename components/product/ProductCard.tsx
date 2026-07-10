'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Zap } from 'lucide-react'
import { useCartStore } from '@/lib/store/cartStore'
import { StarRating } from '@/components/shared/StarRating'
import { fbTrackAddToCart } from '@/lib/pixels/facebook'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openDrawer } = useCartStore()

  const handleAddToCart = () => {
    addItem(product.id, product.nameAr, 1)
    fbTrackAddToCart(product.id, product.price)
    openDrawer()
  }

  return (
    <div className="card overflow-hidden hover:shadow-elevated hover:scale-[1.01] transition-all duration-200">
      <Link href={`/products/${product.slug}`} className="block relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
          <Image
            src={product.imageUrl}
            alt={product.nameAr}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 start-3 flex items-center gap-1 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-full">
            <Zap size={10} />
            <span>{product.stock} قطعة متبقية</span>
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-2">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-charcoal leading-tight hover:text-primary transition-colors">
            {product.nameAr}
          </h3>
          <p className="text-sm text-muted mt-0.5">{product.tagline}</p>
        </Link>

        <StarRating rating={product.rating} count={product.reviewCount} size="sm" />

        <p className="font-bold text-primary text-lg">
          ابدئي من <span>{product.price} درهم</span>
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full btn-primary py-3 text-sm"
        >
          احصلي عليه الآن
        </button>
      </div>
    </div>
  )
}
