import { ShoppingBag, Phone, Package } from 'lucide-react'

const STEPS = [
  {
    icon: ShoppingBag,
    step: '01',
    title: 'اختاري',
    desc: 'اختاري المنتج اللي يحل مشكلتك — أو خذي 3 وتستفيدي من أفضل سعر',
  },
  {
    icon: Phone,
    step: '02',
    title: 'سجلي',
    desc: 'دخلي اسمك ورقم الهاتف — بلا بطاقة بنكية ولا حساب',
  },
  {
    icon: Package,
    step: '03',
    title: 'استقبلي',
    desc: 'الطلبة توصلك في 2-4 أيام وتخلصي عند الباب',
  },
]

export function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">كيفاش يمشي الطلب؟</h2>
          <p className="text-muted text-sm mt-2">بسيط وسريع وبلا مخاطر</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div key={i} className="text-center space-y-3 relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 start-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-stone-200" />
              )}
              <div className="relative inline-flex">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <s.icon size={24} className="text-primary" />
                </div>
                <span className="absolute -top-1 -end-1 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-bold text-xl text-charcoal">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
