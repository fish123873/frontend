import type { CartItem } from '@/types/cart'
import { getProductById } from '@/lib/constants/products'
import type { Product } from '@/types/product'

const UPSELL_PRIORITY = ['baume-argan-sous', 'serum-niacinamide', 'spray-keratine']

export function getUpsellProduct(cartItems: CartItem[]): Product | null {
  const cartIds = cartItems.map((i) => i.productId)
  const missing = UPSELL_PRIORITY.filter((id) => !cartIds.includes(id))
  if (missing.length === 0) return null
  return getProductById(missing[0]) ?? null
}
