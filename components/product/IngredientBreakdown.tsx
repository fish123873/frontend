import { FlaskConical } from 'lucide-react'
import type { Ingredient } from '@/types/product'

interface IngredientBreakdownProps {
  ingredients: Ingredient[]
  claims: string[]
}

export function IngredientBreakdown({ ingredients, claims }: IngredientBreakdownProps) {
  return (
    <section className="py-12 md:py-20 bg-authority text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm mb-4">
            <FlaskConical size={16} />
            <span>المكونات العلمية</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">ما في هذا المنتج يستحق أن تعرفيه</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {ingredients.map((ing, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-5">
              <p className="font-bold text-white">{ing.nameAr}</p>
              <p className="text-sm text-white/70 font-latin mt-0.5">{ing.name}</p>
              <p className="text-sm text-white/90 mt-2">{ing.benefit}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {claims.map((claim, i) => (
            <span
              key={i}
              className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/20"
            >
              ✓ {claim}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
