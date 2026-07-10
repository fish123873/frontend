import type { Product } from '@/types/product'

export const PRODUCTS: Product[] = [
  {
    id: 'serum-niacinamide',
    slug: 'serum-niacinamide',
    nameAr: 'سيروم النياسيناميد',
    nameFull: 'سيروم النياسيناميد — قضي على بقع الشمس و وحدي لونك',
    tagline: 'مضمون: نتيجة فـ 21 يوم أو نرجعو ليك فلوسك',
    price: 199,
    accentColor: '#C9A962',
    rating: 4.9,
    reviewCount: 847,
    stock: 43,
    imageUrl: 'https://placehold.co/800x800/FAF7F2/C9A962?text=سيروم+النياسيناميد',
    ingredients: [
      { name: 'Niacinamide 5%', nameAr: 'نياسيناميد 5%', benefit: 'يمنع نقل الميلانين — يقلل البقع من المصدر' },
      { name: 'Tinosorb S + Uvinul A Plus', nameAr: 'تينوسورب + يونيفيل', benefit: 'حماية واسعة UVA/UVB SPF50+' },
      { name: 'Hyaluronic Acid 1%', nameAr: 'حمض الهيالورونيك 1%', benefit: 'ترطيب خفيف لا يثقل البشرة' },
      { name: 'Vitamin E', nameAr: 'فيتامين E', benefit: 'مضاد أكسدة يحمي الخلايا' },
    ],
    claims: [
      'SPF50+ Large spectre UVA/UVB',
      'Testé dermatologiquement',
      'Zéro traîne blanche',
      'Sans parabènes · Non-comédogène',
    ],
    howToUse: [
      'نظفي وجهك جيداً في الصباح',
      'ضعي كمية صغيرة من السيروم على كامل الوجه والرقبة',
      'اتركيه يُمتص لمدة دقيقة',
      'يمكن تطبيقه قبل المكياج مباشرة',
      'كرري كل صباح للحصول على أفضل النتائج',
    ],
    faqs: [
      { q: 'واش يصلح لبشرة السمراء؟', a: 'نعم — ما كيخليش أثر أبيض خلافاً للكريمات العادية. مجرب درماتولوجياً على كل أنواع البشرة.' },
      { q: 'واش نقدر نستعملوه كل يوم؟', a: 'نعم، مصمم للاستعمال اليومي الصباحي.' },
      { q: 'كيفاش يوصل؟', a: 'التوصيل كياخد 1 لـ 2 أيام للمدن الكبرى، و 2 لـ 5 أيام لباقي المدن. الدفع كيكون عند الاستلام.' },
      { q: 'واش فيه هيدروكينون؟', a: 'لا — 0% هيدروكينون. يعمل فقط بالنياسيناميد الطبيعي.' },
      { q: 'فين يصلح؟', a: 'للوجه والرقبة والمناطق المعرضة للشمس.' },
    ],
  },
  {
    id: 'spray-keratine',
    slug: 'spray-keratine',
    nameAr: 'بخاخ الكيراتين',
    nameFull: 'بخاخ الكيراتين — حماية فورية من كلور المسبح',
    tagline: 'دخلي تعومي وخرجي بشعر كيحمق ومخبلش',
    price: 199,
    accentColor: '#4A90A4',
    rating: 4.9,
    reviewCount: 634,
    stock: 31,
    imageUrl: 'https://placehold.co/800x800/FAF7F2/4A90A4?text=بخاخ+الكيراتين',
    ingredients: [
      { name: 'Kératine hydrolysée', nameAr: 'كيراتين مُحلَّل', benefit: 'يقوي الألياف من الداخل ويملأ الشعيرات التالفة' },
      { name: 'Protéine de soie', nameAr: 'بروتين الحرير', benefit: 'تنعيم ولمعة فورية' },
      { name: 'Filtre UV capillaire', nameAr: 'فلتر UV للشعر', benefit: 'حماية اللون من الشمس' },
      { name: "Huile d'argan légère", nameAr: 'زيت أرغان خفيف', benefit: 'ترطيب بدون دهون' },
    ],
    claims: [
      'Technologie barrière pré-piscine',
      'Sans rinçage · Léger',
      'Anti-chlore · Anti-sel · Anti-UV',
    ],
    howToUse: [
      'رشي البخاخ على الشعر الرطب أو الجاف',
      'وزعيه من الجذور للأطراف',
      'لا حاجة للشطف — ادخلي المسبح مباشرة',
      'بعد الخروج من الماء، رشي مرة أخرى للتغذية',
    ],
    faqs: [
      { q: 'واش يصلح للشعر المصبوغ؟', a: 'نعم — الفلتر UV يحمي اللون من التغيير.' },
      { q: 'واش خفيف؟', a: 'نعم — خفيف جداً ما كيخليش الشعر دهني.' },
      { q: 'كيفاش نستعملوه؟', a: 'رشي قبل المسبح على شعر جاف أو رطب.' },
      { q: 'واش يصلح للأطفال؟', a: 'نعم، تركيبة خفيفة ومجربة على البشرة الحساسة.' },
    ],
  },
  {
    id: 'baume-argan-sous',
    slug: 'baume-argan-sous',
    nameAr: 'بلسم عرق السوس',
    nameFull: 'بلسم عرق السوس — وداعا لسواد الإبط ورائحة العرق',
    tagline: 'فراكة 48 ساعة وإبط صافي 100%',
    price: 199,
    accentColor: '#7A9E8E',
    rating: 4.9,
    reviewCount: 521,
    stock: 27,
    imageUrl: 'https://placehold.co/800x800/FAF7F2/7A9E8E?text=بلسم+عرق+السوس',
    ingredients: [
      { name: 'Zinc Ricinoléate', nameAr: 'زنك ريسينوليات', benefit: 'يحيد جزيئات الرائحة من المصدر' },
      { name: "Extrait de réglisse", nameAr: 'مستخلص عرق السوس', benefit: 'يثبط الإنزيم المسؤول عن السواد' },
      { name: 'Acide lactique AHA 5%', nameAr: 'حمض اللاكتيك AHA 5%', benefit: 'تقشير خفيف يجدد الجلد' },
      { name: 'Beurre de karité', nameAr: 'زبدة الشيا', benefit: 'ترميم وترطيب بعد الحلاقة' },
    ],
    claims: [
      '48h de fraîcheur — testé',
      '0% aluminium · 0% alcool',
      'عرق السوس — مكون طبيعي معروف',
      'Testé peaux sensibles',
    ],
    howToUse: [
      'ضعي كمية صغيرة على منطقة الإبط النظيفة والجافة',
      'دلكي برفق حتى يتشرب البلسم',
      'انتظري دقيقة قبل الملابس',
      'استعملي مرة أو مرتين يومياً حسب الحاجة',
    ],
    faqs: [
      { q: 'واش فيه ألومينيوم؟', a: 'لا — 0% ألومينيوم. مأمون للاستعمال اليومي.' },
      { q: 'واش يصلح بعد الحلاقة؟', a: 'نعم — زبدة الشيا تهدئ الجلد وتمنع الاحمرار.' },
      { q: 'كم ساعة يدوم؟', a: 'مجرب لـ 48 ساعة حماية مستمرة.' },
      { q: 'واش يفتح لون الإبط؟', a: 'نعم — عرق السوس يعمل بشكل تدريجي على توحيد اللون خلال 3-4 أسابيع.' },
      { q: 'واش يصلح للبشرة الحساسة؟', a: 'نعم — مجرب على البشرة الحساسة، خالٍ من الكحول والمواد المهيجة.' },
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}
