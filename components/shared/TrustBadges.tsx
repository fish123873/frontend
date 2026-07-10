import { CheckCircle, Truck, FlaskConical, Star } from 'lucide-react'

interface TrustBadgesProps {
  variant?: 'row' | 'grid'
  className?: string
}

export function TrustBadges({ variant = 'row', className = '' }: TrustBadgesProps) {
  const badges = [
    { icon: CheckCircle, text: 'اختُبر درماتولوجياً', color: 'text-authority' },
    { icon: Truck, text: 'الدفع عند الاستلام', color: 'text-trust-green' },
    { icon: Truck, text: 'توصيل 2-4 أيام', color: 'text-primary' },
    { icon: FlaskConical, text: 'مكونات علمية مثبتة', color: 'text-authority' },
    { icon: Star, text: '8,000+ زبونة راضية', color: 'text-gold' },
  ]

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 ${className}`}>
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-card">
            <b.icon size={18} className={b.color} />
            <span className="text-sm text-charcoal font-medium">{b.text}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {badges.map((b, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <b.icon size={16} className={b.color} />
          <span className="text-sm text-charcoal">{b.text}</span>
        </div>
      ))}
    </div>
  )
}
