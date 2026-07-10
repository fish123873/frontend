import { create } from 'zustand'
import type { CartState, CartItem } from '@/types/cart'

function getCartTotal(uniqueCount: number): number {
  if (uniqueCount >= 3) return 349
  if (uniqueCount === 2) return 279
  return 199
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isDrawerOpen: false,
  isCheckoutOpen: false,
  isUpsellOpen: false,
  upsellProduct: null,
  orderId: null,
  customerName: '',
  customerPhone: '',
  eventId: null,

  addItem: (productId, productName, quantity) => {
    set((state) => {
      const existing = state.items.find((i) => i.productId === productId)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
          ),
        }
      }
      const newItem: CartItem = {
        productId,
        productName,
        quantity,
        unitPrice: 199,
      }
      return { items: [...state.items, newItem] }
    })
  },

  removeItem: (productId) => {
    set((state) => ({ items: state.items.filter((i) => i.productId !== productId) }))
  },

  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  openCheckout: () => set({ isCheckoutOpen: true }),
  closeCheckout: () => set({ isCheckoutOpen: false }),

  showUpsell: (product) => set({ upsellProduct: product, isUpsellOpen: true, isCheckoutOpen: false }),

  acceptUpsell: () => {
    const { upsellProduct, items } = get()
    if (upsellProduct) {
      set((state) => ({
        items: [...state.items, { ...upsellProduct, unitPrice: 99 }],
        isUpsellOpen: false,
      }))
    }
  },

  declineUpsell: () => set({ isUpsellOpen: false }),

  setOrderId: (id) => set({ orderId: id }),

  setCustomer: (name, phone) => set({ customerName: name, customerPhone: phone }),

  setEventId: (id) => set({ eventId: id }),

  clearCart: () =>
    set({
      items: [],
      isDrawerOpen: false,
      isCheckoutOpen: false,
      isUpsellOpen: false,
      upsellProduct: null,
      orderId: null,
      customerName: '',
      customerPhone: '',
      eventId: null,
    }),

  getTotal: () => {
    const { items } = get()
    const uniqueCount = new Set(items.map((i) => i.productId)).size
    return getCartTotal(uniqueCount)
  },

  getUniqueCount: () => {
    const { items } = get()
    return new Set(items.map((i) => i.productId)).size
  },
}))
