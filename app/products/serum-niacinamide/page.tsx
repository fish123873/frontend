import type { Metadata } from 'next'
import { getProductBySlug } from '@/lib/constants/products'
import { ProductHero } from '@/components/product/ProductHero'
import { IngredientBreakdown } from '@/components/product/IngredientBreakdown'
import { ReviewsSection } from '@/components/product/ReviewsSection'
import { FAQSection } from '@/components/product/FAQSection'
import { CrossSellSection } from '@/components/product/CrossSellSection'
import { AlternatingFeature } from '@/components/product/AlternatingFeature'

export const metadata: Metadata = {
  title: 'سيروم النياسيناميد — قضي على بقع الشمس | لومارا هيلث',
  description: 'سيروم SPF50+ مع النياسيناميد 5% لحماية البشرة من بقع الشمس. مرخص ONSSA. الدفع عند الاستلام.',
}

export default function SerumPage() {
  const product = getProductBySlug('serum-niacinamide')!

  return (
    <>
      <ProductHero product={product} />

      <AlternatingFeature
        title="تعبتي من تخبية وجهك تحت المكياج فكل صيف؟"
        subtitle="المشكل الحقيقي للمرأة المغربية"
        description={`الشمس ديال المغرب قوية (UV Index 11). ملي كتخرجي بلا حماية مناسبة، الشمس كتحفز إنتاج الميلانين بشكل عشوائي.\n\nالنتيجة؟ وجهك كيعمر بقع، لون غير موحد، وكتضطري تخبي هادشي كامل تحت الفون دو تان (Fond de teint). هادشي ماشي غير مشكل جمالي، هادشي كيأثر على ثقتك بنفسك كل نهار.`}
        bullets={[
          'تجنبي ظهور بقع وتصبغات جديدة',
          'قولي وداعاً للون الباهت وغير الموحد',
          'استرجعي ثقتك في بشرتك الطبيعية بلا فلاتر'
        ]}
        imageUrl="https://placehold.co/800x800/FAF7F2/C4714A"
        reversed={false}
        badgeTheme="primary"
        bgColor="bg-white"
      />

      <AlternatingFeature
        title="مرخص من ONSSA، فعالية مثبتة علمياً لجمالك"
        subtitle="الدليل العلمي الموثوق"
        description={`النياسيناميد 5% كيمنع نقل الميلانين للخلايا السطحية عند المصدر، وهادشي مثبت علمياً في مختبرات عالمية.\n\nتركيبتنا مرخصة من المكتب الوطني للسلامة الصحية (ONSSA)، ما يعني أنها خالية تماماً من المواد الكيميائية الضارة بحال الهيدروكينون اللي كيدمر البشرة على المدى الطويل. آمنة 100%.`}
        bullets={[
          'شهادة ترخيص رسمية وآمنة 100% (ONSSA)',
          'اختُبر درماتولوجياً ليلائم البشرة الحساسة',
          'بدون هيدروكينون، بارابين، أو كورتيزون',
          'SPF50+ لحماية كاملة من أشعة UVA/UVB'
        ]}
        imageUrl="https://placehold.co/800x800/FAF7F2/2C4A6E"
        reversed={true}
        badgeTheme="authority"
        bgColor="bg-cream"
      />

      <AlternatingFeature
        title="تركيبة خفيفة، زيرو تراس أبيض"
        subtitle="متعة الاستخدام اليومي"
        description={`عكس ليكرون (Ecran) العادي اللي كيخلي وجهك أبيض ومزيت ومكيخليكش مرتاحة، السيروم ديالنا خفيف بحال الما وكيمتصه الجلد في ثواني.\n\nصُمم خصيصاً ليناسب الجو الحار فالمغرب والبشرة السمراء والقمحية ليعطيك إشراقة طبيعية.`}
        bullets={product.howToUse}
        imageUrl="https://placehold.co/800x800/FAF7F2/C9A962"
        reversed={false}
        badgeTheme="gold"
        bgColor="bg-white"
      />

      <IngredientBreakdown ingredients={product.ingredients} claims={product.claims} />
      <ReviewsSection productFilter="سيروم النياسيناميد" title="تجارب حقيقية مع السيروم" />
      <FAQSection faqs={product.faqs} />
      <CrossSellSection excludeId={product.id} />
    </>
  )
}
