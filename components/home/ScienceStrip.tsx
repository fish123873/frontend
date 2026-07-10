import { FlaskConical, ShieldCheck, Microscope, Award } from 'lucide-react'

const SCIENCE = [
  {
    ingredient: 'نياسيناميد 5%',
    mechanism: 'يثبط نقل الميلانين من المصدر',
    result: 'تفتيح البقع في 21 يوم',
  },
  {
    ingredient: 'كيراتين مُحلَّل',
    mechanism: 'يملأ الفراغات في الألياف التالفة',
    result: 'حماية كاملة من الكلور',
  },
  {
    ingredient: 'زنك ريسينوليات',
    mechanism: 'يحيد جزيئات الرائحة الكريهة',
    result: '48 ساعة حماية مؤكدة',
  },
  {
    ingredient: 'مستخلص عرق السوس',
    mechanism: 'يوقف إنزيم التيروزيناز',
    result: 'تفتيح تدريجي طبيعي',
  },
]

export function ScienceStrip() {
  return (
    <section className="py-16 md:py-24 bg-authority text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2 text-center md:text-start">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-6">
              <ShieldCheck size={18} className="text-gold" />
              <span className="text-gold">مرخص من ONSSA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.2] tracking-tight mb-6">
              جمالك مبني على أساس علمي متين
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-medium">
              مكينش تسويق فارغ، مكينش وعود خاوية. تركيباتنا مبنية حصرياً على المكونات النشطة لي مثبتة علميا في مختبرات عالمية ومصادق عليها من طرف ONSSA في المغرب.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, text: 'ترخيص ONSSA رقم 14589' },
              { icon: Microscope, text: 'اختُبر درماتولوجياً للجلد الحساس' },
              { icon: FlaskConical, text: '0% مواد كيميائية ضارة' },
              { icon: Award, text: 'جودة صيدلانية أوروبية' }
            ].map((feature, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-3">
                <feature.icon size={32} className="text-gold opacity-80" />
                <span className="font-bold text-sm text-white/90 leading-snug">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/10">
          <h3 className="text-center text-xl font-bold mb-8 text-white/90">المكونات النشطة في منتجاتنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCIENCE.map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 space-y-4 hover:bg-white/10 transition-colors duration-300">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-lg">
                  {i + 1}
                </div>
                <h4 className="font-extrabold text-xl text-white">{s.ingredient}</h4>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <p className="text-sm text-white/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    {s.mechanism}
                  </p>
                  <p className="text-sm text-gold font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    {s.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
