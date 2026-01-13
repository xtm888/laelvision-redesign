'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Clock,
  Eye,
  Stethoscope,
  Microscope,
  Glasses,
  Pill,
  Plus
} from 'lucide-react'
import { doctors, departments, luxuryBrands, stats, locations } from '@/data/siteData'

// Refined animation variants
const revealUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const revealScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
}

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  Eye, Stethoscope, Microscope, Glasses, Pill,
}

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO - Editorial Swiss Precision
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-noir overflow-hidden">
        {/* Kuba Pattern Background */}
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />

        {/* Grid Lines */}
        <div className="absolute inset-0 grid-lines opacity-50" />

        {/* Accent Shapes */}
        <div className="absolute top-0 right-0 w-[40%] h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-cuivre/5 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cuivre/5 rounded-full blur-[150px]" />

        {/* Content */}
        <div className="container-editorial relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="overline mb-6"
                >
                  Centre Médical Ophtalmologique — Kinshasa, RDC
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-serif text-[4rem] md:text-[6rem] lg:text-[7.5rem] text-ivoire leading-[0.9] tracking-tight mb-8"
                >
                  <span className="block">Précision</span>
                  <span className="block text-cuivre italic">Africaine</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-ivoire/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
                >
                  Excellence ophtalmologique et optique de luxe réunies sous un même toit.
                  Depuis 2003, nous façonnons les standards de la vision en République Démocratique du Congo.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/rendez-vous" className="btn-copper group">
                    <Calendar size={18} />
                    Prendre Rendez-Vous
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="btn-secondary border-ivoire/30 text-ivoire hover:border-cuivre hover:text-cuivre">
                    Explorer nos Services
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Side Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="lg:col-span-4 hidden lg:block"
            >
              <div className="border-l border-cuivre/30 pl-8 space-y-8">
                <div>
                  <div className="font-serif text-5xl text-cuivre">20+</div>
                  <div className="text-ivoire/50 text-sm uppercase tracking-wider mt-1">Années d'Excellence</div>
                </div>
                <div>
                  <div className="font-serif text-5xl text-cuivre">15+</div>
                  <div className="text-ivoire/50 text-sm uppercase tracking-wider mt-1">Marques de Luxe</div>
                </div>
                <div>
                  <div className="font-serif text-5xl text-cuivre">2</div>
                  <div className="text-ivoire/50 text-sm uppercase tracking-wider mt-1">Centres en RDC</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-ivoire/40 text-xs uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-cuivre to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DUAL EXPERTISE - Editorial Cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-ivoire">
        <div className="container-editorial">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Medical Excellence */}
            <motion.div variants={staggerItem} className="group">
              <Link href="/services" className="block">
                <div className="relative bg-white p-10 md:p-14 border border-argent hover:border-cuivre/40 transition-all duration-700">
                  {/* Number */}
                  <div className="absolute top-8 right-8 font-serif text-8xl text-argent/50 leading-none select-none">
                    01
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 border border-charbon/20 flex items-center justify-center mb-8 group-hover:border-cuivre group-hover:bg-cuivre transition-all duration-500">
                      <Eye size={28} className="text-charbon group-hover:text-ivoire transition-colors duration-500" />
                    </div>

                    <p className="overline mb-4">Médecine & Chirurgie</p>

                    <h2 className="font-serif text-3xl md:text-4xl text-charbon mb-6 leading-tight">
                      Excellence<br />Ophtalmologique
                    </h2>

                    <p className="text-cendre leading-relaxed mb-8 max-w-md">
                      Diagnostic de précision, traitements innovants et chirurgies de pointe
                      par nos spécialistes formés aux standards internationaux.
                    </p>

                    <div className="flex items-center gap-3 text-charbon font-sans text-sm uppercase tracking-wider group-hover:text-cuivre transition-colors">
                      Découvrir nos services
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Luxury Boutique */}
            <motion.div variants={staggerItem} className="group">
              <Link href="/boutique" className="block">
                <div className="relative bg-noir p-10 md:p-14 overflow-hidden">
                  {/* Kuba Pattern */}
                  <div className="absolute inset-0 bg-kuba-dark opacity-40" />

                  {/* Number */}
                  <div className="absolute top-8 right-8 font-serif text-8xl text-ivoire/5 leading-none select-none">
                    02
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 border border-cuivre/30 flex items-center justify-center mb-8 group-hover:border-cuivre group-hover:bg-cuivre transition-all duration-500">
                      <Glasses size={28} className="text-cuivre group-hover:text-noir transition-colors duration-500" />
                    </div>

                    <p className="overline mb-4">Optique de Luxe</p>

                    <h2 className="font-serif text-3xl md:text-4xl text-ivoire mb-6 leading-tight">
                      Boutique<br /><span className="text-cuivre italic">Exclusive</span>
                    </h2>

                    <p className="text-ivoire/60 leading-relaxed mb-8 max-w-md">
                      Cartier, Maybach, FRED, Tom Ford — les plus grandes maisons
                      réunies dans notre espace dédié au raffinement.
                    </p>

                    <div className="flex items-center gap-3 text-cuivre font-sans text-sm uppercase tracking-wider">
                      Explorer la collection
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ABOUT - Asymmetric Editorial Layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-ivoire-300 bg-grid-swiss">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Images - Asymmetric Grid */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/5] bg-noir overflow-hidden">
                  <Image
                    src="/images/services/ser1.png"
                    alt="LAËL VISION Excellence"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Accent Image */}
                <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-cuivre/10 overflow-hidden border-8 border-ivoire-300">
                  <Image
                    src="/images/services/ser2.png"
                    alt="Equipment"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Copper Accent */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-cuivre" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <p className="overline mb-6">Notre Vision</p>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charbon mb-8 leading-[1.05]">
                L'excellence n'est pas<br />
                <span className="text-cuivre italic">une option</span>
              </h2>

              <div className="accent-line-long mb-8" />

              <p className="text-cendre text-lg leading-relaxed mb-6">
                Depuis 2003, LAËL VISION incarne l'excellence ophtalmologique en République
                Démocratique du Congo. Notre centre réunit expertise médicale de pointe et
                optique de luxe dans un environnement pensé pour votre confort.
              </p>

              <p className="text-cendre leading-relaxed mb-10">
                Notre équipe de spécialistes, formée aux standards internationaux, vous
                accompagne avec professionnalisme et humanité. Des équipements de dernière
                génération garantissent des diagnostics précis et des traitements optimaux.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { label: 'Temps d\'attente', value: 'Optimisé', icon: Clock },
                  { label: 'Équipements', value: 'Dernière Génération', icon: Eye },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 bg-white border border-argent/50">
                    <item.icon size={24} className="text-cuivre flex-shrink-0" />
                    <div>
                      <div className="text-xs text-cendre uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="font-serif text-lg text-charbon">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/a-propos" className="btn-primary">
                En savoir plus
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DEPARTMENTS - Minimal Grid
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mb-16"
          >
            <p className="overline mb-4">Services Médicaux</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charbon mb-6">
              Nos Départements
            </h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-argent"
          >
            {departments.slice(0, 6).map((dept, index) => {
              const Icon = iconMap[dept.icon] || Eye
              return (
                <motion.div
                  key={dept.id}
                  variants={staggerItem}
                  className="group bg-white p-8 md:p-10 hover:bg-ivoire transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 border border-argent flex items-center justify-center group-hover:border-cuivre group-hover:bg-cuivre transition-all duration-500">
                      <Icon size={24} className="text-cendre group-hover:text-ivoire transition-colors duration-500" />
                    </div>
                    <span className="font-serif text-4xl text-argent">0{index + 1}</span>
                  </div>

                  <h3 className="font-serif text-xl text-charbon mb-3">{dept.name}</h3>
                  <p className="text-cendre text-sm leading-relaxed">{dept.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DOCTORS - Editorial Portraits
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-ivoire-300">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <p className="overline mb-4">Équipe Médicale</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charbon">
                Nos Spécialistes
              </h2>
            </div>
            <Link href="/equipe" className="btn-secondary">
              Voir toute l'équipe
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                variants={staggerItem}
                className="group"
              >
                <div className="relative aspect-[3/4] bg-noir overflow-hidden mb-4">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: doctor.imagePosition }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent opacity-60" />

                  {/* Hover State */}
                  <div className="absolute inset-0 bg-cuivre/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Plus size={32} className="text-ivoire" />
                  </div>
                </div>
                <h3 className="font-serif text-base text-charbon leading-tight">{doctor.name}</h3>
                <p className="text-cendre text-sm">{doctor.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA - Bold Statement
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 bg-noir overflow-hidden">
        {/* Kuba Pattern */}
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        {/* Gradient Accent */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-cuivre/10 to-transparent" />

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="overline mb-6">Rendez-Vous</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivoire leading-[1.05] mb-8">
              Votre vision mérite<br />
              <span className="text-cuivre italic">le meilleur</span>
            </h2>
            <p className="text-ivoire/60 text-lg max-w-xl mb-10">
              Réservez votre consultation en quelques clics. Notre équipe vous accueille
              dans un cadre d'exception pour prendre soin de vos yeux.
            </p>
            <Link href="/rendez-vous" className="btn-copper">
              <Calendar size={20} />
              Prendre Rendez-Vous
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          LUXURY BRANDS - Dark Editorial
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-charbon">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <p className="overline mb-4">Optique de Luxe</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ivoire">
                Marques <span className="text-cuivre italic">Exclusives</span>
              </h2>
            </div>
            <Link href="/boutique" className="btn-secondary border-ivoire/30 text-ivoire hover:border-cuivre hover:text-cuivre">
              Découvrir la collection
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center"
          >
            {luxuryBrands.slice(0, 16).map((brand) => (
              <motion.div
                key={brand.id}
                variants={staggerItem}
                className="flex items-center justify-center p-4 opacity-40 hover:opacity-100 transition-opacity duration-500"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={40}
                  className="max-h-8 w-auto invert grayscale"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS - Refined Numbers
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-ivoire border-y border-argent">
        <div className="container-editorial">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="font-serif text-5xl md:text-6xl text-cuivre mb-2">
                  {stat.value}
                </div>
                <p className="text-cendre text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          LOCATIONS - Clean Cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mb-16"
          >
            <p className="overline mb-4">Nos Centres</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charbon mb-6">
              Nous Trouver
            </h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={staggerItem}
                className="group bg-ivoire-300 p-8 md:p-10 border border-transparent hover:border-cuivre/30 transition-all duration-500"
              >
                <h3 className="font-serif text-2xl text-charbon mb-6">{location.name}</h3>

                <div className="space-y-4 text-cendre mb-8">
                  <p className="flex items-start gap-4">
                    <MapPin size={20} className="text-cuivre mt-0.5 flex-shrink-0" />
                    <span>{location.address}</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Clock size={20} className="text-cuivre" />
                    <span>Lun-Ven: {location.hours.weekdays}</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Clock size={20} className="text-cuivre" />
                    <span>Samedi: {location.hours.saturday}</span>
                  </p>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-charbon font-sans text-sm uppercase tracking-wider hover:text-cuivre transition-colors"
                >
                  Voir sur Google Maps
                  <ArrowUpRight size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
