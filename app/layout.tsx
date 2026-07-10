import type { Metadata } from 'next'
import { Noto_Kufi_Arabic, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartProvider } from '@/components/providers/CartProvider'
import { PixelScripts } from '@/components/providers/PixelScripts'

const arabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const latin = Inter({
  subsets: ['latin'],
  variable: '--font-latin',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'لومارا هيلث — صيفك بلا تنازلات',
  description: 'منتجات تجميل علمية للمرأة المغربية — سيروم النياسيناميد · بخاخ الكيراتين · بلسم عرق السوس',
  keywords: 'لومارا, سيروم, نياسيناميد, كيراتين, عرق السوس, تجميل مغربي, صيف',
  openGraph: {
    title: 'لومارا هيلث — صيفك بلا تنازلات',
    description: 'منتجات تجميل علمية للمرأة المغربية',
    locale: 'ar_MA',
    type: 'website',
    url: 'https://lumarahealth.shop',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${arabic.variable} ${latin.variable}`}>
      <body className="font-arabic bg-cream text-charcoal antialiased" suppressHydrationWarning>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <PixelScripts />
      </body>
    </html>
  )
}
