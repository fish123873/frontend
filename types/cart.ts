export interface CartItem {
  productId: string
  productName: string
  quantity: number
  unitPrice: number
}

export interface CartState {
  items: CartItem[]
  isDrawerOpen: boolean
  isCheckoutOpen: boolean
  isUpsellOpen: boolean
  upsellProduct: CartItem | null
  orderId: string | null
  customerName: string
  customerPhone: string
  eventId: string | null
  addItem: (productId: string, productName: string, quantity: number) => void
  removeItem: (productId: string) => void
  openDrawer: () => void
  closeDrawer: () => void
  openCheckout: () => void
  closeCheckout: () => void
  showUpsell: (product: CartItem) => void
  acceptUpsell: () => void
  declineUpsell: () => void
  setOrderId: (id: string) => void
  setCustomer: (name: string, phone: string) => void
  setEventId: (id: string) => void
  clearCart: () => void
  getTotal: () => number
  getUniqueCount: () => number
}
