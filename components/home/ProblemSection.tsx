import { Sun, Droplets, EyeOff } from 'lucide-react'

const PROBLEMS = [
  {
    icon: Sun,
    color: '#C4714A', // primary
    bg: 'bg-primary/10',
    title: 'كتخبي البقع تحت الفون دو تان؟',
    desc: 'الشمس المغربية الحارة كدير بقع في الوجه وتصبغات صعيب تحيديها. كتولي حشمانة تباني بوجهك الطبيعي وكل صيف كيتزاد المشكل، وكتفقدي ثقتك فبشرتك.',
    solution: 'سيروم النياسيناميد — يمنع البقع ويوحد اللون',
  },
  {
    icon: Droplets,
    color: '#4A90A4', // azur
    bg: 'bg-azur/10',
    title: 'شعرك كيتخبل بعد لاپيسين؟',
    desc: 'الكلور والملحة كيدمرو الزغبة وكيخليو الشعر بحال الشطابة. كتدخلي زوينة وكتخرجي بشعر حالتو حالة ممرتبش وكيطيح، وهادشي كيخليك ديما مقلقة.',
    solution: 'بخاخ الكيراتين — حماية فورية ولمعان',
  },
  {
    icon: EyeOff,
    color: '#7A9E8E', // sage
    bg: 'bg-sage/10',
    title: 'حشمانة من سواد الإبط؟',
    desc: 'حرارة الصيف كتعني العرق. ومزيلات العرق العادية لي فيها الكحول والألومينيوم كتكحل الإبط وكتخليك ديما مخبية ومكتقدريش تلبسي حوايج الصيف بحرية.',
    solution: 'بلسم عرق السوس — فراكة وتفتيح آمن',
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-coral/10 text-coral text-sm font-bold tracking-wide mb-4">
            الصيف ماخصوش يكون معاناة
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal tracking-tight">
            فهمنا مشاكلك، وجبنا ليك الحل النهائي
          </h2>
          <p className="text-muted text-lg mt-5 max-w-3xl mx-auto font-medium leading-relaxed">
            المرأة المغربية كتعاني بصمت من هاد المشاكل 3 كل صيف. بلاصة ما تبقاي تخبي المشكل ورا المكياج أو الحوايج، طورنا تركيبات علمية باش ترجعي ثقتك في جمالك الطبيعي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
              <div className={`w-16 h-16 ${p.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 -rotate-3 group-hover:rotate-0`}>
                <p.icon size={32} style={{ color: p.color }} strokeWidth={2} />
              </div>
              <h3 className="font-extrabold text-xl md:text-2xl text-charcoal mb-4">{p.title}</h3>
              <p className="text-base text-muted leading-relaxed mb-8 flex-grow">{p.desc}</p>
              <div className="mt-auto pt-5 border-t border-stone-100">
                <div className="inline-flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full w-full">
                  <span className="text-trust-green font-bold">✓</span>
                  <span className="text-sm font-bold text-charcoal truncate">{p.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
