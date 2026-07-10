import { Package } from 'lucide-react'

interface CodBadgeProps {
  size?: 'sm' | 'lg'
}

export function CodBadge({ size = 'sm' }: CodBadgeProps) {
  if (size === 'lg') {
    return (
      <div className="flex items-center gap-3 bg-trust-green/10 border border-trust-green/20 rounded-2xl p-4">
        <div className="w-12 h-12 bg-trust-green rounded-xl flex items-center justify-center flex-shrink-0">
          <Package size={24} className="text-white" />
        </div>
        <div>
          <p className="font-bold text-trust-green">📦 الدفع عند الاستلام</p>
          <p className="text-sm text-muted">خلصي عند الباب — لا بطاقة بنكية</p>
        </div>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-1.5 bg-trust-green/10 text-trust-green text-sm font-semibold px-3 py-1.5 rounded-full">
      <Package size={14} />
      <span>الدفع عند الاستلام</span>
    </div>
  )
}
