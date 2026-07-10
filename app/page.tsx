import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { ProblemSection } from '@/components/home/ProblemSection'
import { ProductShowcase } from '@/components/home/ProductShowcase'
import { HowItWorks } from '@/components/home/HowItWorks'
import { ScienceStrip } from '@/components/home/ScienceStrip'
import { ReviewsSection } from '@/components/product/ReviewsSection'
import { TrustSection } from '@/components/home/TrustSection'
import { FinalCTA } from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'لومارا هيلث — صيفك بلا تنازلات',
  description: 'سيروم النياسيناميد · بخاخ الكيراتين · بلسم عرق السوس — منتجات تجميل علمية للمرأة المغربية. الدفع عند الاستلام.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ProductShowcase />
      <HowItWorks />
      <ScienceStrip />
      <ReviewsSection title="8,247 زبونة تثقن في لومارا" />
      <TrustSection />
      <FinalCTA />
    </>
  )
}
