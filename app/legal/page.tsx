import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'الشروط القانونية — لومارا هيلث' }

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-3xl font-extrabold text-charcoal mb-6">الشروط القانونية</h1>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">هوية الشركة</h2>
          <p>لومارا هيلث — lumarahealth.shop — المغرب</p>
          <p className="mt-1">البريد الإلكتروني: contact@lumarahealth.shop</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">شروط الاستخدام</h2>
          <p>باستخدام هذا الموقع، توافقين على الشروط والأحكام التالية. الاستخدام مسموح فقط للأفراد البالغين من العمر 18 سنة أو أكثر.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">ملكية فكرية</h2>
          <p>جميع محتويات هذا الموقع — النصوص، الصور، العلامة التجارية — هي ملك حصري للومارا هيلث. أي نسخ أو استخدام تجاري غير مصرح محظور.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">المسؤولية</h2>
          <p>نبذل قصارى جهدنا لضمان دقة المعلومات على الموقع. نتائج المنتجات قد تتفاوت من شخص لآخر.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">القانون المطبق</h2>
          <p>تخضع هذه الشروط للقانون المغربي.</p>
        </section>
      </div>
    </div>
  )
}
