import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'سياسة التوصيل — لومارا هيلث' }

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-3xl font-extrabold text-charcoal mb-6">سياسة التوصيل والدفع عند الاستلام</h1>
      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
          <p className="font-bold text-primary text-base">📦 الدفع عند الاستلام — الطريقة الوحيدة للدفع</p>
          <p className="mt-1">لا بطاقة بنكية، لا تحويل مسبق — تدفعين فقط عند استلام الطلبة</p>
        </div>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">مواعيد التوصيل</h2>
          <ul className="space-y-2">
            <li>🏙️ المدن الكبرى (الدار البيضاء، الرباط، مراكش، طنجة، فاس...): <strong>يوم إلى يومين (1-2 أيام)</strong></li>
            <li>🗺️ باقي المدن والمناطق: <strong>2 إلى 5 أيام</strong></li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">مسار الطلب</h2>
          <ol className="space-y-2 list-decimal list-inside">
            <li>تسجلي طلبك على الموقع</li>
            <li>يتصل بك فريقنا للتأكيد خلال 24 ساعة</li>
            <li>يُرسل الطلب مع شركة التوصيل</li>
            <li>تستلمين وتدفعين عند الباب</li>
          </ol>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">تكلفة التوصيل</h2>
          <p>التوصيل مجاني على كل الطلبات داخل المغرب.</p>
        </section>
        <section>
          <h2 className="font-bold text-charcoal text-lg mb-2">نسبة التوصيل الناجح</h2>
          <p>87% من طلباتنا توصل بنجاح في أول محاولة — من بين أعلى نسب في قطاع التجارة الإلكترونية المغربي.</p>
        </section>
      </div>
    </div>
  )
}
