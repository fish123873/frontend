import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gold/20 to-gold/10">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal leading-tight">
          تهناي من مشاكل الصيف بمرة
        </h2>
        <p className="text-charcoal font-semibold text-xl">
          اطلبي المجموعة كاملة بـ <span className="text-primary font-extrabold text-2xl">349 درهم</span> فقط
        </p>
        <p className="text-muted text-sm bg-white/50 inline-block px-4 py-2 rounded-full font-bold">
          عوض 597 درهم — وفري 248 درهم دابا
        </p>
        <div className="pt-4">
          <Link
            href="/collections/rituel-ete"
            className="inline-block btn-primary text-xl px-12 py-5 shadow-xl hover:scale-105"
          >
            صيفطو ليا المجموعة دابا
          </Link>
          <p className="text-xs text-charcoal mt-3 font-bold">⚠️ الدفع حتى توصلي بالمنتجات وتأكدي منها</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal font-semibold mt-4">
          <span>📦 الدفع عند الاستلام</span>
          <span>🚚 توصيل 1-5 أيام</span>
          <span>🛡️ مرخص من ONSSA</span>
          <span>🔄 ضمان 30 يوم</span>
          <span className="text-gold-dark">★★★★★ 4.9/5</span>
        </div>
      </div>
    </section>
  )
}
