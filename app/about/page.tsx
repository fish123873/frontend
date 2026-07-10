import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'من نحن — لومارا هيلث',
  description: 'قصة لومارا — علامة تجارية مغربية مبنية على العلم والجودة',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-3xl font-latin">N</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-charcoal">من نحن</h1>
        <p className="text-primary font-semibold mt-2">صيفك بلا تنازلات</p>
      </div>

      {/* Story */}
      <div className="prose prose-stone max-w-none space-y-6 text-charcoal">
        <div className="bg-cream rounded-2xl p-6 border border-stone-100">
          <h2 className="text-2xl font-bold text-charcoal mb-4">قصة لومارا</h2>
          <p className="text-muted leading-relaxed">
            لومارا وُلدت من ملاحظة بسيطة: المرأة المغربية تعاني كل صيف من نفس المشاكل — بقع الشمس، الشعر المتضرر من الكلور، وقلق الإبط في الحرارة — ولكنها لا تجد حلولاً علمية حقيقية بأسعار معقولة ودفع عند الاستلام.
          </p>
          <p className="text-muted leading-relaxed mt-3">
            أنشأنا لومارا لنقدم منتجات مبنية على مكونات علمية مثبتة، بتركيزات فعّالة، وبتركيبات آمنة مجربة درماتولوجياً — لأن المرأة المغربية تستحق الأفضل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'علمي', desc: 'كل مكون مختار بناءً على أبحاث درماتولوجية وتركيزات مثبتة' },
            { title: 'آمن', desc: 'مجرب على البشرة الحساسة، بدون مواد مثيرة للجدل' },
            { title: 'مغربي', desc: 'مصمم خصيصاً لاحتياجات المرأة المغربية وطقس المغرب' },
          ].map((v, i) => (
            <div key={i} className="bg-primary/5 rounded-2xl p-5 text-center">
              <h3 className="font-bold text-primary text-lg">{v.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-authority/5 rounded-2xl p-6 border border-authority/10">
          <h2 className="text-xl font-bold text-authority mb-3">التزامنا</h2>
          <ul className="space-y-2 text-muted text-sm">
            <li className="flex gap-2"><span className="text-trust-green">✓</span> الشفافية الكاملة في المكونات</li>
            <li className="flex gap-2"><span className="text-trust-green">✓</span> لا ادعاءات كاذبة — فقط ما أثبته العلم</li>
            <li className="flex gap-2"><span className="text-trust-green">✓</span> الدفع عند الاستلام دائماً — لا مخاطرة على الزبونة</li>
            <li className="flex gap-2"><span className="text-trust-green">✓</span> دعم ما بعد البيع — أي مشكل نحله</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
