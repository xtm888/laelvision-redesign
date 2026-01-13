'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Calendar, MessageCircle, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig, navigation, locations } from '@/data/siteData'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'shadow-lg shadow-noir/20'
        : ''
    }`}>
      {/* Top Bar - Refined */}
      <div className={`hidden lg:block transition-all duration-500 ${
        isScrolled ? 'bg-noir py-2' : 'bg-noir/90 backdrop-blur-sm py-2.5'
      }`}>
        <div className="container-editorial flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-ivoire/80 hover:text-cuivre transition-colors"
            >
              <Phone size={13} className="text-cuivre" />
              <span className="text-xs tracking-wide">{siteConfig.phone}</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-cuivre" />
              <select
                value={selectedLocation.id}
                onChange={(e) => setSelectedLocation(locations.find(l => l.id === e.target.value) || locations[0])}
                className="bg-transparent border-none text-ivoire/80 text-xs tracking-wide focus:outline-none cursor-pointer hover:text-cuivre transition-colors"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id} className="text-noir bg-ivoire">
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-ivoire/50 text-xs tracking-wide">
              Lun–Ven: {selectedLocation.hours.weekdays}
            </span>
            <span className="text-ivoire/30">|</span>
            <span className="text-ivoire/50 text-xs tracking-wide">
              Sam: {selectedLocation.hours.saturday}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header - Editorial */}
      <div className="bg-noir/90 backdrop-blur-sm">
        <div className="container-editorial">
          <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="LAËL VISION"
                width={56}
                height={56}
                className="h-14 w-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl tracking-tight text-ivoire">
                LAËL VISION
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivoire/60">
                Centre Médical
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden lg:flex items-center gap-0">
            {navigation.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-5 py-2 text-sm font-sans tracking-wide transition-colors duration-300 text-ivoire/90 hover:text-cuivre"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown - Refined */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-full left-0 w-56 bg-ivoire border border-argent py-2 mt-2"
                    >
                      {item.children.map((child, index) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-cendre hover:text-cuivre hover:bg-ivoire-300 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons - Editorial */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/rendez-vous"
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-sans tracking-wide transition-all duration-300 bg-cuivre text-ivoire hover:bg-cuivre-dark"
            >
              <Calendar size={15} />
              <span>Rendez-Vous</span>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-sans tracking-wide border transition-all duration-300 border-ivoire/30 text-ivoire hover:border-cuivre hover:text-cuivre"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors text-ivoire"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Refined */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-ivoire border-t border-argent"
          >
            <div className="container-editorial py-6">
              <nav className="space-y-1">
                {navigation.main.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 font-sans text-charbon hover:text-cuivre transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-6 space-y-1 border-l border-argent ml-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-cendre hover:text-cuivre transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-argent space-y-3">
                <Link
                  href="/rendez-vous"
                  className="flex items-center justify-center gap-2 bg-charbon text-ivoire px-6 py-4 font-sans text-sm tracking-wide w-full hover:bg-cuivre transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar size={18} />
                  Prendre Rendez-Vous
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-charbon/30 text-charbon px-6 py-4 font-sans text-sm tracking-wide w-full hover:border-cuivre hover:text-cuivre transition-colors"
                >
                  <MessageCircle size={18} />
                  Contacter via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
