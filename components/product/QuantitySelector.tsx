'use client'

import { CheckCircle2, Flame, Trophy } from 'lucide-react'

interface QuantitySelectorProps {
  selected: number
  onChange: (qty: number) => void
}

const OPTIONS = [
  {
    qty: 1,
    price: 199,
    originalPrice: null,
    savings: null,
    duration: 'كفاية لـ 3-4 أسابيع',
    result: 'نتيجة أولية ملحوظة',
    badge: null,
    Icon: null,
    highlight: false,
  },
  {
    qty: 2,
    price: 279,
    originalPrice: 398,
    savings: 119,
    duration: 'كفاية لـ 2-3 شهور',
    result: 'نتيجة كاملة ودائمة',
    badge: 'الأكثر طلباً',
    Icon: Flame,
    highlight: true,
  },
  {
    qty: 3,
    price: 349,
    originalPrice: 597,
    savings: 248,
    duration: 'طقوس صيفية كاملة',
    result: 'أحسن قيمة + احتياطي',
    badge: 'أفضل قيمة',
    Icon: Trophy,
    highlight: false,
  },
]

export function QuantitySelector({ selected, onChange }: QuantitySelectorProps) {
  return (
    <div className="space-y-2.5">
      {OPTIONS.map((opt) => {
        const isSelected = selected === opt.qty

        return (
          <button
            key={opt.qty}
            onClick={() => onChange(opt.qty)}
            className={`relative w-full text-start rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
              isSelected
                ? opt.highlight
                  ? 'border-primary bg-primary shadow-cta scale-[1.01]'
                  : 'border-primary bg-primary shadow-md scale-[1.01]'
                : opt.highlight
                ? 'border-primary/40 bg-white hover:border-primary hover:scale-[1.005]'
                : 'border-stone-200 bg-white hover:border-stone-300'
            }`}
          >
            {/* Highlight ribbon */}
            {opt.highlight && !isSelected && (
              <div className="absolute top-0 start-0 end-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
            )}

            <div className="flex items-center gap-3 p-3.5">
              {/* Checkbox */}
              <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                isSelected ? 'border-white bg-white' : 'border-stone-300'
              }`}>
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-extrabold text-sm ${isSelected ? 'text-white' : 'text-charcoal'}`}>
                    {opt.qty === 1 ? '1 وحدة' : opt.qty === 2 ? '2 وحدات' : '3 وحدات'}
                  </span>
                  <span className={`text-xs font-medium ${isSelected ? 'text-white/70' : 'text-muted'}`}>
                    — {opt.duration}
                  </span>
                  {opt.badge && (
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : opt.highlight
                        ? 'bg-primary text-white'
                        : 'bg-trust-green text-white'
                    }`}>
                      {opt.Icon && <opt.Icon size={10} />}
                      {opt.badge}
                    </span>
                  )}
                </div>
                <p className={`text-xs mt-0.5 ${isSelected ? 'text-white/80' : 'text-muted'}`}>
                  <CheckCircle2 size={11} className="inline me-1" />
                  {opt.result}
                </p>
              </div>

              {/* Price */}
              <div className="text-end flex-shrink-0">
                {opt.originalPrice && (
                  <p className={`text-xs line-through ${isSelected ? 'text-white/50' : 'text-stone-400'}`}>
                    {opt.originalPrice} درهم
                  </p>
                )}
                <p className={`font-extrabold text-xl leading-tight ${isSelected ? 'text-white' : 'text-primary'}`}>
                  {opt.price} <span className="text-sm font-bold">درهم</span>
                </p>
                {opt.savings && (
                  <span className={`text-[11px] font-bold ${isSelected ? 'text-white/80' : 'text-trust-green'}`}>
                    وفري {opt.savings} درهم
                  </span>
                )}
              </div>
            </div>
          </button>
        )
      })}

      <p className="text-center text-xs text-muted pt-1">
        🔒 الدفع عند الاستلام — مكاتخلصي والو الآن
      </p>
    </div>
  )
}
