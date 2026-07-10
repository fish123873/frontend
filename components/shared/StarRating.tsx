import { Star } from 'lucide-react'

interface StarRatingProps {
  rating?: number
  count?: number
  size?: 'sm' | 'md'
}

export function StarRating({ rating = 4.9, count, size = 'md' }: StarRatingProps) {
  const starSize = size === 'sm' ? 12 : 16
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={starSize}
            className="fill-gold text-gold"
          />
        ))}
      </div>
      <span className={`font-semibold text-charcoal ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
        {rating}
      </span>
      {count !== undefined && (
        <span className={`text-muted ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          ({count.toLocaleString('ar-MA')} تقييم)
        </span>
      )}
    </div>
  )
}
