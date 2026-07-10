'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Package, Truck, FlaskConical, ChevronDown } from 'lucide-react'

const FOOTER_SECTIONS = [
  {
    title: 'منتجاتنا',
    links: [
      { label: 'سيروم النياسيناميد', href: '/products/serum-niacinamide' },
      { label: 'بخاخ الكيراتين', href: '/products/spray-keratine' },
      { label: 'بلسم عرق السوس', href: '/products/baume-argan-sous' },
      { label: 'الطقوس الصيفية', href: '/collections/rituel-ete' },
    ],
  },
  {
    title: 'معلومات',
    links: [
      { label: 'من نحن', href: '/about' },
      { label: 'تواصل معنا', href: '/contact' },
      { label: 'yassineabdellaoui816@gmail.com', href: 'mailto:yassineabdellaoui816@gmail.com' },
      { label: 'سياسة التوصيل', href: '/shipping-policy' },
      { label: 'سياسة الإرجاع', href: '/return-policy' },
    ],
  },
  {
    title: 'قانوني',
    links: [
      { label: 'سياسة الخصوصية', href: '/privacy-policy' },
      { label: 'الشروط القانونية', href: '/legal' },
    ],
  },
]

function FooterSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-stone-700 md:border-none">
      {/* Mobile: collapsible header */}
      <button
        className="md:hidden w-full flex items-center justify-between py-4 font-bold text-white"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          className={`text-stone-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Desktop: always visible title */}
      <h4 className="hidden md:block font-bold mb-3 text-white">{title}</h4>

      {/* Links */}
      <ul
        className={`space-y-2 text-stone-400 text-sm overflow-hidden transition-all duration-300 md:!max-h-none md:!pb-0 ${
          open ? 'max-h-60 pb-4' : 'max-h-0 md:max-h-none'
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-white transition-colors block py-0.5 ${
                link.href.startsWith('mailto:') ? 'text-xs break-all' : ''
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-1 pb-6 md:pb-0 border-b border-stone-700 md:border-none mb-2 md:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold font-latin">L</span>
              </div>
              <div>
                <p className="font-bold text-lg">لومارا</p>
                <p className="text-xs text-stone-400 font-latin">lumarahealth</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm">صيفك بلا تنازلات</p>
            <p className="text-stone-500 text-xs mt-1">منتجات تجميل علمية للمرأة المغربية</p>

            <div className="hidden md:flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2 text-trust-green text-xs">
                <Package size={14} />
                <span>الدفع عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2 text-primary text-xs">
                <Truck size={14} />
                <span>توصيل 2-4 أيام</span>
              </div>
              <div className="flex items-center gap-2 text-gold text-xs">
                <FlaskConical size={14} />
                <span>مكونات علمية مثبتة</span>
              </div>
            </div>
          </div>

          {/* Collapsible sections */}
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        {/* Mobile trust badges */}
        <div className="md:hidden flex justify-around mt-6 pt-4 border-t border-stone-700">
          <div className="flex items-center gap-1.5 text-trust-green text-xs">
            <Package size={13} />
            <span>الدفع عند الاستلام</span>
          </div>
          <div className="flex items-center gap-1.5 text-primary text-xs">
            <Truck size={13} />
            <span>توصيل 2-4 أيام</span>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-6 pt-5 text-center text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} لومارا هيلث — lumarahealth.shop — جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
