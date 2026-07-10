import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'سياسة الخصوصية — لومارا هيلث' }

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-3xl font-extrabold text-charcoal mb-6">سياسة الخصوصية</h1>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">المعلومات التي نجمعها</h2>
          <p>نجمع فقط الاسم ورقم الهاتف اللازمين لتنفيذ الطلب وتأكيده. لا نجمع أي بيانات بنكية.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">كيف نستخدم معلوماتك</h2>
          <p>معلوماتك تُستخدم فقط لمعالجة طلبك والتواصل معك بخصوصه. لا نشارك بياناتك مع أي طرف ثالث خارج نطاق التوصيل.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">ملفات تعريف الارتباط (Cookies)</h2>
          <p>نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتتبع أداء الإعلانات عبر فيسبوك وتيكتوك وسناب.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">حماية بياناتك</h2>
          <p>بياناتك محمية ومشفرة. لك الحق في طلب حذف معلوماتك في أي وقت بالتواصل معنا.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">التواصل</h2>
          <p>لأي استفسار عن خصوصيتك، تواصلي عبر: contact@lumarahealth.shop</p>
        </section>
      </div>
    </div>
  )
}
