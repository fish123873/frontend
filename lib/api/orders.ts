import axios, { AxiosError } from 'axios'
import type { OrderPayload, OrderResponse } from '@/types/order'

export class OrderBlockedError extends Error {
  constructor(public readonly userMessage: string, public readonly reason?: string) {
    super(userMessage)
    this.name = 'OrderBlockedError'
  }
}

export async function submitOrder(payload: OrderPayload): Promise<OrderResponse> {
  try {
    const { data } = await axios.post<OrderResponse>('/api/orders', payload)
    return data
  } catch (err) {
    if (err instanceof AxiosError && err.response?.status === 403) {
      const data = err.response.data as { message?: string; reason?: string }
      throw new OrderBlockedError(
        data?.message ?? 'ما قدرناش نأكدو الطلبية.',
        data?.reason
      )
    }
    throw err
  }
}
