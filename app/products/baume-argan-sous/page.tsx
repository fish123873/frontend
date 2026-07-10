import type { Metadata } from 'next'
import { getProductBySlug } from '@/lib/constants/products'
import { ProductHero } from '@/components/product/ProductHero'
import { IngredientBreakdown } from '@/components/product/IngredientBreakdown'
import { ReviewsSection } from '@/components/product/ReviewsSection'
import { FAQSection } from '@/components/product/FAQSection'
import { CrossSellSection } from '@/components/product/CrossSellSection'
import { AlternatingFeature } from '@/components/product/AlternatingFeature'

export const metadata: Metadata = {
  title: 'بلسم عرق السوس — وداعا لسواد الإبط | لومارا هيلث',
  description: 'بلسم طبيعي بعرق السوس لـ48 ساعة فراكة وتفتيح تدريجي. 0% ألومينيوم. مرخص ONSSA. الدفع عند الاستلام.',
}

export default function BaumePage() {
  const product = getProductBySlug('baume-argan-sous')!

  return (
    <>
      <ProductHero product={product} />

      <AlternatingFeature
        title="مكتقدريش تلبسي لي بغيتي في الصيف حيت كتحشمي؟"
        subtitle="تخلصي من الإحراج للأبد"
        description={`الصيف والحرارة كيعنيو العرق، ولكن المشكل الأكبر هو الكحول لي في مزيلات العرق (Déodorants) العادية لي كيكحل منطقة الإبط وكيسد المسام. هادشي كيخليك تحشمي ترفعي يديك أو تلبسي حوايج صيفية عريانة.\n\nتخيلي دوزي نهار كامل بلا نقطة عرق وبلا ريحة، وفي نفس الوقت الإبط ديالك كيولي لونو موحد، صافي ومضوي.`}
        bullets={[
          'حماية أكيدة من رائحة العرق لمدة 48 ساعة كاملة',
          'تفتيح تدريجي وملحوظ لسواد الإبط في 3 أسابيع',
          'ثقة كاملة فاش تلبسي حوايج الصيف بلا خجل'
        ]}
        imageUrl="https://placehold.co/800x800/FAF7F2/7A9E8E"
        reversed={false}
        badgeTheme="sage"
        bgColor="bg-white"
      />

      <AlternatingFeature
        title="0% ألومينيوم، مرخص من ONSSA"
        subtitle="الدليل العلمي القاطع"
        description={`عكس لي ديودورون التجارية لي كتسد المسام بالألومينيوم وتسبب أمراض خطيرة ومشاكل هرمونية، البلسم ديالنا طبيعي وكيخلي الجلد يتنفس بحرية.\n\nعرق السوس معروف علمياً بتثبيط إنزيم التيروزيناز لي كيسبب السواد. المنتج مرخص من ONSSA ليضمن لك أقصى درجات الأمان والفعالية.`}
        bullets={[
          'شهادة ترخيص رسمية وآمنة 100% (ONSSA)',
          '0% ألومينيوم، 0% كحول، 0% مواد مسرطنة',
          'لا يسد المسام ويسمح بالتعرق الطبيعي الصحي بدون رائحة',
          'غني بعرق السوس وزبدة الشيا الطبيعية للتفتيح والترطيب'
        ]}
        imageUrl="https://placehold.co/800x800/FAF7F2/2C4A6E"
        reversed={true}
        badgeTheme="authority"
        bgColor="bg-cream"
      />

      <AlternatingFeature
        title="ترطيب مثالي وحماية بعد الحلاقة (Rasage)"
        subtitle="رفيقك اليومي"
        description={`تقدري تستعمليه مباشرة مورا ما تحسني (Rasage) بلا ما يحرقك، حيت فيه زبدة الشيا لي كترطب الجلد بعمق وكتمنع الحبوب والحمورية لي كتجي مورا الحلاقة.`}
        bullets={product.howToUse}
        imageUrl="https://placehold.co/800x800/FAF7F2/C9A962"
        reversed={false}
        badgeTheme="gold"
        bgColor="bg-white"
      />

      <IngredientBreakdown ingredients={product.ingredients} claims={product.claims} />
      <ReviewsSection productFilter="بلسم عرق السوس" title="تجارب حقيقية مع البلسم" />
      <FAQSection faqs={product.faqs} />
      <CrossSellSection excludeId={product.id} />
    </>
  )
}
