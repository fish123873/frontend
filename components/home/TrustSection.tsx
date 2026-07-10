import { Package, Truck, RotateCcw, ShieldCheck } from 'lucide-react'

const TRUST_ITEMS = [
  {
    icon: Package,
    color: 'text-trust-green',
    bg: 'bg-trust-green/10',
    title: 'الدفع عند الاستلام',
    desc: 'خلصي براحتك ملي توصلك الطلبية وتأكدي منها بيدك. زيرو ريسك.',
  },
  {
    icon: Truck,
    color: 'text-primary',
    bg: 'bg-primary/10',
    title: 'توصيل سريع ومجاني',
    desc: 'طلبيتك توصلك للدار أو العمل في 24-48 ساعة للمدن الكبرى.',
  },
  {
    icon: RotateCcw,
    color: 'text-authority',
    bg: 'bg-authority/10',
    title: 'ضمان 30 يوم لومارا',
    desc: 'إما تشوفي النتيجة بعينيك، أو نرجعو ليك فلوسك كاملة بدون أسئلة.',
  },
  {
    icon: ShieldCheck,
    color: 'text-gold-dark',
    bg: 'bg-gold/20',
    title: 'مرخص من ONSSA',
    desc: 'أقصى درجات الأمان. منتجات مصادق عليها ومختبرة درماتولوجياً.',
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-stone-100 text-charcoal text-sm font-bold tracking-wide mb-4">
            التزامنا تجاهك
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal tracking-tight">
            لومارا كتوفر ليك راحة البال
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
            &quot;شريتي من عندنا؟ كنعطيوك ضمان حديدي، ومكتخلصي والو حتى تأكدي بنفسك.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1 text-center space-y-5">
              <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110`}>
                <item.icon size={28} className={item.color} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-base text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
