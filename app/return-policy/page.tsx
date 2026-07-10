import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'سياسة الإرجاع — لومارا هيلث' }

export default function ReturnPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-3xl font-extrabold text-charcoal mb-6">سياسة الإرجاع والاسترداد</h1>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <div className="bg-trust-green/10 border border-trust-green/20 rounded-2xl p-4 text-trust-green font-semibold text-base">
          🛡️ نضمن رضاك — أي مشكل في المنتج نحلوه
        </div>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">متى يمكنك الإرجاع؟</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>المنتج وصل تالفاً أو مختلفاً عما طلبت</li>
            <li>المنتج به عيب في التصنيع</li>
            <li>رفض الاستلام عند الباب — لا غرامات</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">كيفية الإرجاع</h2>
          <ol className="space-y-2 list-decimal list-inside">
            <li>تواصلي معنا عبر واتساب أو الإيميل خلال 48 ساعة من الاستلام</li>
            <li>أرسلي صورة للمنتج في حالته</li>
            <li>سيتصل بك فريقنا لترتيب الحل المناسب</li>
          </ol>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">ملاحظة</h2>
          <p>بما أن الدفع يتم عند الاستلام، لا توجد مشكلة مالية في حالة الرفض — ببساطة لا تستلمي الطلب.</p>
        </section>
      </div>
    </div>
  )
}
