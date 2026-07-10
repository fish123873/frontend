import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'سارة م.',
    city: 'مراكش',
    product: 'سيروم النياسيناميد',
    text: 'والله ما توقعت النتيجة... كل صيف كيعمر وجهي بقع وكيكحال، هاد العام درت السيروم قبل ما نخرج، وجهي بقى صافي وبلا تراس أبيض. أول مرة نشري شي حاجة من الأنترنيت وتصدق.',
    rating: 5,
  },
  {
    name: 'ريم ب.',
    city: 'الدار البيضاء',
    product: 'بخاخ الكيراتين',
    text: 'كنت ديما كنخبي شعري فالبحر حيت كيولي حالتو بالملحة. هاد البخاخ سحر! رشيتو قبل ما نعوم وخرجت شعري رطب ومخبلش.',
    rating: 5,
  },
  {
    name: 'فاطمة ز.',
    city: 'فاس',
    product: 'بلسم عرق السوس',
    text: 'كنت كنحشم نلبس شي حاجة مقطعة حيت الإبط ديالي كحال بلي ديودورون العاديين. دابا 3 سيمانات باش بديت هاد البلسم، السواد نقص بزاف وماكايناش ريحة العرق نهائياً.',
    rating: 5,
  },
  {
    name: 'نادية ح.',
    city: 'أكادير',
    product: 'سيروم النياسيناميد',
    text: 'أنا سمرا وليكرون ديما كيخليني بحال إلى دايرا الدقيق لوجهي. هاد السيروم خفيف بزاف ومكيبانش وكيمتصه الجلد في البلاصة.',
    rating: 5,
  },
  {
    name: 'خديجة ل.',
    city: 'طنجة',
    product: 'بلسم عرق السوس',
    text: 'تهنيت من دوك لي ديودورون لي كيسدو المسام. هاد البلسم طبيعي، ريحتو خفيفة ومريحة، وكيخلي المنطقة رطبة مورا الحسانة.',
    rating: 5,
  },
  {
    name: 'إيمان س.',
    city: 'الرباط',
    product: 'بخاخ الكيراتين',
    text: 'خديت الباك ديال 3 منتجات. عجبني التوصيل سريع بزاف والباكاجينغ راقي. بخاخ الكيراتين عتق ليا شعري من لاپيسين هاد الصيف.',
    rating: 5,
  },
]

interface ReviewsSectionProps {
  productFilter?: string
  title?: string
}

export function ReviewsSection({ productFilter, title = 'ماذا قالت زبوناتنا' }: ReviewsSectionProps) {
  const reviews = productFilter
    ? REVIEWS.filter((r) => r.product === productFilter)
    : REVIEWS

  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">{title}</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-bold text-charcoal">4.9/5</span>
            <span className="text-muted text-sm">من 8,247 زبونة</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="card p-5 space-y-3">
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-charcoal text-sm leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                <div>
                  <p className="font-semibold text-sm text-charcoal">{review.name}</p>
                  <p className="text-xs text-muted">{review.city}</p>
                </div>
                <span className="text-xs text-muted bg-stone-100 px-2 py-0.5 rounded-full">
                  ✓ مشتري موثق
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
