import type { Metadata } from 'next'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تواصل معنا — لومارا هيلث',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-charcoal">تواصل معنا</h1>
        <p className="text-muted mt-2">نحن هنا للمساعدة — تواصلي معنا بأي طريقة تناسبك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { icon: MessageCircle, title: 'واتساب', desc: 'أسرع طريقة للتواصل', link: 'https://wa.me/212XXXXXXXXX', cta: 'راسلينا' },
          { icon: Mail, title: 'الإيميل', desc: 'yassineabdellaoui816@gmail.com', link: 'mailto:yassineabdellaoui816@gmail.com', cta: 'أرسلي إيميل' },
          { icon: Phone, title: 'الهاتف', desc: 'نتصل بك خلال 24 ساعة', link: 'tel:+212XXXXXXXXX', cta: 'اتصلي بنا' },
        ].map((item, i) => (
          <div key={i} className="card p-5 text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <item.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-bold text-charcoal">{item.title}</h3>
            <p className="text-[11px] text-muted whitespace-nowrap overflow-hidden">{item.desc}</p>
            <a href={item.link} className="inline-block btn-secondary text-sm py-2 px-4">
              {item.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="bg-trust-green/10 border border-trust-green/20 rounded-2xl p-6">
        <h2 className="font-bold text-charcoal mb-2">🕐 أوقات الاستجابة</h2>
        <ul className="space-y-1 text-sm text-muted">
          <li>الاثنين — السبت: 9:00 صباحاً — 6:00 مساءً</li>
          <li>الأحد: 10:00 صباحاً — 2:00 مساءً</li>
          <li>زمن الاستجابة: أقل من 24 ساعة</li>
        </ul>
      </div>
    </div>
  )
}
