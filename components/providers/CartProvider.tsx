'use client'

import { CartDrawer } from '@/components/cart/CartDrawer'
import { CheckoutPopup } from '@/components/checkout/CheckoutPopup'
import { PostCheckoutUpsell } from '@/components/checkout/PostCheckoutUpsell'

export function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CartDrawer />
      <CheckoutPopup />
      <PostCheckoutUpsell />
    </>
  )
}
