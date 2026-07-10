export interface OrderItem {
  product_id: string
  product_name: string
  quantity: number
  unit_price: number
}

export interface PixelIds {
  fbc?: string
  fbp?: string
  ttclid?: string
  ttp?: string
  snap_uuid_c1?: string
}

export interface OrderPayload {
  name: string
  phone: string
  items: OrderItem[]
  cart_total: number
  upsell_accepted: boolean
  upsell_product?: OrderItem | null
  event_id: string
  user_agent: string
  ip_address: string
  source_url: string
  pixel_ids: PixelIds
}

export interface OrderResponse {
  order_id: string
  total_amount: number
  status: string
  message: string
}
