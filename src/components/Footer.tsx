'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Clock, ChevronRight, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react'
import { siteConfig, locations, healthTips } from '@/data/siteData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-noir text-ivoire relative overflow-hidden">
      {/* Kuba Pattern Background */}
      <div className="absolute inset-0 bg-kuba-dark opacity-20" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cuivre/20 via-cuivre/5 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-cuivre/10 to-transparent" />

      {/* Main Footer */}
      <div className="container-editorial section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/images/logo.png"
                alt="LAËL VISION"
                width={50}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="font-serif text-xl">LAËL VISION</h3>
                <p className="text-xs text-ivoire/50 tracking-[0.2em] uppercase">Centre Médical</p>
              </div>
            </div>
            <p className="text-ivoire/60 text-sm leading-relaxed mb-8">
              {siteConfig.description}. Vous y trouverez des informations pratiques et pourrez prendre rendez-vous facilement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-cuivre/30 flex items-center justify-center text-ivoire/60 hover:text-cuivre hover:border-cuivre transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-cuivre/30 flex items-center justify-center text-ivoire/60 hover:text-cuivre hover:border-cuivre transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-cuivre/30 flex items-center justify-center text-ivoire/60 hover:text-cuivre hover:border-cuivre transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-8">Raccourcis</h4>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À Propos', href: '/a-propos' },
                { name: 'Services', href: '/services' },
                { name: 'Notre Équipe', href: '/equipe' },
                { name: 'Les Maladies', href: '/maladies' },
                { name: 'Laboratoire', href: '/laboratoire' },
                { name: 'Prendre RDV', href: '/rendez-vous' },
                { name: 'Boutique Optique', href: '/boutique' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-ivoire/60 hover:text-cuivre transition-colors text-sm group"
                  >
                    <ChevronRight size={14} className="text-cuivre/50 group-hover:text-cuivre transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Tips */}
          <div>
            <h4 className="font-serif text-lg mb-8">Conseil Santé</h4>
            <div className="space-y-4">
              {healthTips[1].tips.slice(0, 4).map((tip, index) => (
                <p key={index} className="text-ivoire/60 text-sm flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cuivre mt-2 flex-shrink-0" />
                  {tip}
                </p>
              ))}
            </div>
            <Link
              href="/conseils"
              className="inline-flex items-center gap-2 mt-6 text-cuivre hover:text-cuivre-light text-sm tracking-wide transition-colors"
            >
              En savoir plus
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-8">Nous Contacter</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 border border-cuivre/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-cuivre" />
                </div>
                <span className="text-ivoire/60 text-sm">{locations[0].address}</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 border border-cuivre/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-cuivre" />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="text-ivoire/60 hover:text-cuivre text-sm transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 border border-cuivre/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-cuivre" />
                </div>
                <a href={`tel:${siteConfig.phone}`} className="text-ivoire/60 hover:text-cuivre text-sm transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 border border-cuivre/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-cuivre" />
                </div>
                <div className="text-ivoire/60 text-sm">
                  <p>Lun - Ven: {locations[0].hours.weekdays}</p>
                  <p>Samedi: {locations[0].hours.saturday}</p>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-cuivre text-cuivre hover:bg-cuivre hover:text-ivoire text-sm font-sans tracking-wide transition-all duration-300"
            >
              Tous nos sites
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-ivoire/10 relative z-10">
        <div className="container-editorial py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ivoire/40 text-sm text-center md:text-left">
              © {currentYear} <span className="text-cuivre">LAËL VISION</span>. Tous droits réservés.
            </p>
            <div className="flex gap-8 text-ivoire/40 text-sm">
              <Link href="/confidentialite" className="hover:text-cuivre transition-colors">
                Confidentialité
              </Link>
              <Link href="/mentions-legales" className="hover:text-cuivre transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
