import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

interface AlternatingFeatureProps {
  title: string
  subtitle?: string
  description: string
  bullets?: string[]
  imageUrl: string
  reversed?: boolean
  badgeTheme?: 'primary' | 'authority' | 'sage' | 'gold' | 'azur'
  bgColor?: string
}

export function AlternatingFeature({
  title,
  subtitle,
  description,
  bullets = [],
  imageUrl,
  reversed = false,
  badgeTheme = 'primary',
  bgColor = 'bg-white',
}: AlternatingFeatureProps) {
  const themeTextColor: Record<string, string> = {
    primary: 'text-primary',
    authority: 'text-authority',
    sage: 'text-sage',
    gold: 'text-gold-dark',
    azur: 'text-azur',
  }
  
  const themeBgColor: Record<string, string> = {
    primary: 'bg-primary/5',
    authority: 'bg-authority/5',
    sage: 'bg-sage/5',
    gold: 'bg-gold/5',
    azur: 'bg-azur/5',
  }

  const textColor = themeTextColor[badgeTheme] ?? 'text-primary'
  const lightBgColor = themeBgColor[badgeTheme] ?? 'bg-primary/5'
  
  const isPlaceholder = imageUrl.includes('placehold.co')

  return (
    <section className={`py-16 md:py-24 ${bgColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`flex flex-col gap-12 md:gap-20 items-center ${
            reversed ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 md:space-y-8">
            {subtitle && (
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${lightBgColor} ${textColor} font-bold text-sm shadow-sm`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 bg-current`}></span>
                </span>
                {subtitle}
              </div>
            )}
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal leading-[1.2] tracking-tight">
              {title}
            </h2>
            
            <p className="text-lg md:text-xl text-muted leading-relaxed whitespace-pre-wrap font-medium">
              {description}
            </p>

            {bullets.length > 0 && (
              <ul className="space-y-4 mt-8 bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`mt-1 p-1 rounded-full ${lightBgColor} ${textColor}`}>
                      <CheckCircle2 size={20} className="flex-shrink-0" strokeWidth={2.5} />
                    </div>
                    <span className="text-charcoal font-bold text-base md:text-lg leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 w-full relative">
            {/* Decorative background blob */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${lightBgColor} rounded-full blur-3xl -z-10 opacity-70`}></div>
            
            <div className="relative aspect-[4/5] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              {isPlaceholder ? (
                <div className={`w-full h-full flex flex-col items-center justify-center ${lightBgColor} p-8 text-center transition-transform duration-700 group-hover:scale-105`}>
                  <div className={`w-24 h-24 mb-6 rounded-full bg-white shadow-lg flex items-center justify-center ${textColor}`}>
                    <CheckCircle2 size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-2xl font-bold ${textColor} opacity-80 mb-4`}>مساحة الصورة</h3>
                  <p className="text-muted text-sm max-w-[80%] mx-auto">سيتم إضافة صورة احترافية عالية الجودة تعبر عن القسم هنا.</p>
                </div>
              ) : (
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              
              {/* Elegant overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating elegant badge */}
            <div className="absolute -bottom-6 -start-6 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-4 z-10 animate-bounce-slow">
              <div className={`w-12 h-12 rounded-full ${lightBgColor} ${textColor} flex items-center justify-center`}>
                <CheckCircle2 size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs text-muted font-bold mb-1">ضمان لومارا</p>
                <p className="text-sm md:text-base font-extrabold text-charcoal">نتيجة مضمونة 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
