import type { Metadata } from 'next'
import { getProductBySlug } from '@/lib/constants/products'
import { ProductHero } from '@/components/product/ProductHero'
import { IngredientBreakdown } from '@/components/product/IngredientBreakdown'
import { ReviewsSection } from '@/components/product/ReviewsSection'
import { FAQSection } from '@/components/product/FAQSection'
import { CrossSellSection } from '@/components/product/CrossSellSection'
import { AlternatingFeature } from '@/components/product/AlternatingFeature'

export const metadata: Metadata = {
  title: 'بخاخ الكيراتين — حماية الشعر من الكلور | لومارا هيلث',
  description: 'بخاخ حماية الشعر من كلور المسبح والشمس. مرخص ONSSA. الدفع عند الاستلام.',
}

export default function SprayPage() {
  const product = getProductBySlug('spray-keratine')!

  return (
    <>
      <ProductHero product={product} />

      <AlternatingFeature
        title="كتخرجي من لاپيسين وشعرك حالتو حالة ومحرج؟"
        subtitle="المشكل الحقيقي في الصيف"
        description={`الكلور والملحة كيدمرو الزغبة، كينشفوها وكيخليو الشعر بحال الشطابة. هادشي كيخليك ديما مخبية شعرك وممرتاحاش ملي كتكوني فالمسبح أو البحر قدام الناس.\n\nتخيلي تخرجي من الما وشعرك باقي رطب، لامع وسهل في التسريح. هادشي لي كيدير بخاخ الكيراتين ديالنا.`}
        bullets={[
          'حماية فورية من الكلور والملحة والشمس',
          'كيخلي الشعر رطب ومكيشربش الما المالح',
          'حافظي على لون شعرك وصباغتك مدة أطول بـ 3 أضعاف'
        ]}
        imageUrl="https://placehold.co/800x800/FAF7F2/4A90A4"
        reversed={false}
        badgeTheme="azur"
        bgColor="bg-white"
      />

      <AlternatingFeature
        title="حماية علمية مثبتة، مرخصة من ONSSA"
        subtitle="دليل الجودة والأمان"
        description={`بخاخ لومارا كيخلق طبقة عازلة (Barrière) على كل زغبة قبل ما تدخلي للماء. الكيراتين المُحلل كيعمر الفراغات في الشعر التالف باش مايدخلش ليه الكلور نهائياً.\n\nالمنتج ديالنا مرخص من ONSSA، مافيهش سلفات لي كيزيد ينشف الشعر، ومجرب درماتولوجياً لضمان سلامة فروة رأسك.`}
        bullets={[
          'شهادة ترخيص رسمية وآمنة 100% (ONSSA)',
          'غني بالكيراتين الطبيعي 100%',
          'بدون سلفات (Sans Sulfate) لحماية الزيوت الطبيعية',
          'فلتر UV مدمج يحمي من أشعة الشمس القوية'
        ]}
        imageUrl="https://placehold.co/800x800/FAF7F2/2C4A6E"
        reversed={true}
        badgeTheme="authority"
        bgColor="bg-cream"
      />

      <AlternatingFeature
        title="رشة وحدة فقط قبل ما تدخلي تعومي"
        subtitle="سهولة لا تضاهى"
        description={`ساهل بزاف وماكيحتاجش تغسليه. رشي على شعرك كامل قبل ما تدخلي للما، وهو غيدير خدمتو. خفيف بزاف ومكيخليش الشعر مزيت ولا ثقيل.\n\nاستمتعي بوقتك في الصيف بلا ما تهزي هم لشعرك.`}
        bullets={product.howToUse}
        imageUrl="https://placehold.co/800x800/FAF7F2/C9A962"
        reversed={false}
        badgeTheme="gold"
        bgColor="bg-white"
      />

      <IngredientBreakdown ingredients={product.ingredients} claims={product.claims} />
      <ReviewsSection productFilter="بخاخ الكيراتين" title="تجارب حقيقية مع البخاخ" />
      <FAQSection faqs={product.faqs} />
      <CrossSellSection excludeId={product.id} />
    </>
  )
}
