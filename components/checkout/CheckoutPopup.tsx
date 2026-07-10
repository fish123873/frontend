'use client'

import { useState, useEffect } from 'react'
import { X, Lock, Star } from 'lucide-react'
import { useCartStore } from '@/lib/store/cartStore'
import { isValidMoroccoPhone } from '@/lib/utils/phone-validation'
import { getUpsellProduct } from '@/lib/utils/upsell-logic'
import { generateEventId } from '@/lib/utils/event-id'

export function CheckoutPopup() {
  const { items, isCheckoutOpen, closeCheckout, showUpsell, getTotal, setCustomer, setEventId } =
    useCartStore()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [nameError, setNameError] = useState('')

  const total = getTotal()

  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCheckoutOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true

    if (!name.trim()) {
      setNameError('الاسم مطلوب')
      valid = false
    } else {
      setNameError('')
    }

    if (!isValidMoroccoPhone(phone)) {
      setPhoneError('رقم الهاتف غير صحيح — تأكدي أنه يبدأ بـ 05، 06 أو 07 ويتكون من 10 أرقام')
      valid = false
    } else {
      setPhoneError('')
    }

    if (!valid) return

    const eventId = generateEventId()
    setCustomer(name.trim(), phone.replace(/\s/g, ''))
    setEventId(eventId)

    const upsellProduct = getUpsellProduct(items)
    if (upsellProduct) {
      showUpsell({
        productId: upsellProduct.id,
        productName: upsellProduct.nameAr,
        quantity: 1,
        unitPrice: 99,
      })
    } else {
      // All 3 in cart — go directly to order submission
      showUpsell({
        productId: '__none__',
        productName: '',
        quantity: 0,
        unitPrice: 0,
      })
    }
  }

  if (!isCheckoutOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-modal w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-100 bg-cream">
          <div>
            <h2 className="font-extrabold text-lg text-charcoal">خطوة أخيرة — احجزي طلبيتك</h2>
            <p className="text-xs text-muted mt-0.5">📦 الدفع فقط ملي توصلك البضاعة ليديك</p>
          </div>
          <button
            onClick={closeCheckout}
            className="p-2 hover:bg-stone-200 rounded-full transition-colors"
            aria-label="إغلاق"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Zero-risk trust banner */}
          <div className="bg-trust-green text-white rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <Lock size={20} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-base">مكاتخلصي درهم واحد دابا</p>
                <p className="text-white/80 text-sm mt-0.5">
                  نبعثو ليك السلعة أولاً — تشوفيها بعينيك وتتأكدي منها، وبعدين تخلصي عند الباب فقط.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3 border-t border-white/20 pt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-white text-white" />
              ))}
              <span className="text-white/90 text-xs font-bold mr-1">8,247 زبونة وثقت فينا بالمغرب</span>
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
            <p className="font-bold text-sm text-charcoal mb-3 flex items-center gap-1.5">
              🛒 ملخص طلبك
            </p>
            {items.map((item) => (
              <div key={item.productId} className="flex justify-between text-sm text-charcoal py-1.5 border-b border-stone-100 last:border-0">
                <span className="font-medium">{item.productName} ×{item.quantity}</span>
                <span className="font-bold text-primary">{item.unitPrice} درهم</span>
              </div>
            ))}
            <div className="mt-3 pt-2 flex justify-between items-center">
              <span className="font-bold text-charcoal">المجموع الكلي:</span>
              <span className="text-2xl font-extrabold text-primary">{total} درهم</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-charcoal mb-1.5">
                اسمك الكريم <span className="text-error">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="فاطمة الزهراء"
                className="w-full border-2 border-stone-200 rounded-2xl px-4 py-3.5 text-charcoal focus:outline-none focus:border-primary transition-colors font-medium"
              />
              {nameError && <p className="text-error text-xs mt-1.5 font-bold">{nameError}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-charcoal mb-1.5">
                رقم الهاتف <span className="text-error">*</span>
                <span className="text-muted font-normal text-xs mr-1">(غدي نتاصلو بيك باش نأكدو الطلبية)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="06XXXXXXXX"
                dir="ltr"
                className="w-full border-2 border-stone-200 rounded-2xl px-4 py-3.5 text-charcoal focus:outline-none focus:border-primary transition-colors text-right font-medium"
              />
              {phoneError && <p className="text-error text-xs mt-1.5 font-bold">{phoneError}</p>}
            </div>

            <button type="submit" className="w-full btn-primary text-center py-4 text-lg shadow-cta">
              📦 احجزي طلبيتي دابا — الدفع عند الاستلام
            </button>
          </form>

          <div className="bg-stone-50 rounded-2xl p-3 text-center space-y-1">
            <p className="text-xs font-bold text-charcoal">📞 غدي يتاصل بيك وكيل من عندنا</p>
            <p className="text-xs text-muted">باش يأكد العنوان ديالك وتوصل ليديك في 24-48 ساعة</p>
          </div>
        </div>
      </div>
    </div>
  )
}
