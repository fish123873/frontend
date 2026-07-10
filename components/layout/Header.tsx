'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/lib/store/cartStore'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { items, openDrawer } = useCartStore()
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <>
      {/* Trust strip */}
      <div className="bg-cream border-b border-stone-100 text-xs text-center py-1.5 text-muted">
        🚚 توصيل 2-4 أيام&nbsp;&nbsp;|&nbsp;&nbsp;📦 الدفع عند الاستلام&nbsp;&nbsp;|&nbsp;&nbsp;★★★★★ 4.9/5 من 8,247 زبونة
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-stone-100 h-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg font-latin">L</span>
            </div>
            <div>
              <p className="font-bold text-charcoal text-xl leading-tight">لومارا</p>
              <p className="text-muted text-xs font-latin leading-tight">lumarahealth</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-charcoal">
            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <Link href="/collections/rituel-ete" className="hover:text-primary transition-colors">منتجاتنا</Link>
            <Link href="/about" className="hover:text-primary transition-colors">من نحن</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">تواصل</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={openDrawer}
              className="relative p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="السلة"
            >
              <ShoppingCart size={22} className="text-charcoal" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -start-1 w-5 h-5 bg-gold text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="القائمة"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden absolute top-16 start-0 end-0 bg-white border-b border-stone-100 shadow-elevated">
            <nav className="flex flex-col p-4 gap-3 text-sm font-semibold text-charcoal">
              <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-primary py-2">الرئيسية</Link>
              <Link href="/collections/rituel-ete" onClick={() => setMobileOpen(false)} className="hover:text-primary py-2">منتجاتنا</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-primary py-2">من نحن</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-primary py-2">تواصل</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
