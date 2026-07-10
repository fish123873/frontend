'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '@/types/product'

const DEFAULT_FAQS: FAQ[] = [
  { q: 'كيفاش يوصل؟', a: 'نرسلوه في 2-4 أيام عمل بالدفع عند الاستلام. ما خاصكيش بطاقة بنكية.' },
  { q: 'واش الدفع آمن؟', a: 'نعم — الدفع فقط عند الاستلام. لا بطاقة، لا تحويل.' },
  { q: 'كيفاش نرجع المنتج؟', a: 'أي مشكل في المنتج نحلوها — تواصلي معنا عبر صفحة التواصل.' },
]

interface FAQSectionProps {
  faqs?: FAQ[]
}

export function FAQSection({ faqs = DEFAULT_FAQS }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)
  const allFaqs = [...faqs, ...DEFAULT_FAQS]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal text-center mb-8">
          أسئلة شائعة
        </h2>
        <div className="space-y-3">
          {allFaqs.map((faq, i) => (
            <div key={i} className="border border-stone-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-start font-semibold text-charcoal hover:bg-stone-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted transition-transform duration-200 flex-shrink-0 ms-2 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-muted leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
