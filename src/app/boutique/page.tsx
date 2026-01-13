'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Glasses, Sparkles, Award, HeartHandshake } from 'lucide-react'
import { luxuryBrands } from '@/data/siteData'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function BoutiquePage() {
  // Split brands into premium and other categories
  const premiumBrands = luxuryBrands.filter(b =>
    ['cartier', 'fred', 'maybach', 'tomford'].includes(b.id)
  )

  return (
    <>
      {/* Hero Section - Editorial Luxury */}
      <section className="relative min-h-[90vh] flex items-center bg-noir overflow-hidden">
        {/* Kuba Pattern Background */}
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />

        {/* Geometric Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cuivre/5" />
        <div className="absolute bottom-0 left-1/4 w-px h-1/2 bg-gradient-to-t from-cuivre/40 to-transparent" />

        {/* Large Decorative Number */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[35rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          L
        </div>

        <div className="container-editorial relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="overline mb-8">Boutique Optique de Luxe</p>

              <h1 className="font-serif text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
                L'Excellence
                <span className="block text-cuivre italic mt-2">Vous Sied</span>
              </h1>

              <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-lg mb-12">
                Une collection exclusive des plus grandes maisons.
                Cartier, Maybach, FRED, Tom Ford — le luxe à portée de regard.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/rendez-vous"
                  className="btn-copper group"
                >
                  <span>Découvrir</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#collection"
                  className="btn-secondary border-ivoire/30 text-ivoire hover:border-cuivre hover:text-cuivre"
                >
                  Voir la Collection
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-noir-50 border border-cuivre/20">
                  <Image
                    src="/images/services/champvi.png"
                    alt="Boutique Optique de Luxe"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-cuivre text-ivoire p-6">
                  <div className="font-serif text-4xl">15+</div>
                  <div className="text-xs uppercase tracking-widest mt-1">Maisons de Luxe</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Brands - Editorial Showcase */}
      <section id="collection" className="section-padding bg-ivoire relative overflow-hidden">
        {/* Swiss Grid Background */}
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          {/* Section Header - Asymmetric */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="overline mb-4">Collection Prestige</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charbon leading-[1.05]">
                Maisons
                <span className="text-cuivre italic block">d'Excellence</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 lg:mt-0"
            >
              <div className="accent-line-long" />
            </motion.div>
          </div>

          {/* Premium Brands Grid - Staggered */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {premiumBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="aspect-square bg-white border border-argent/50 flex flex-col items-center justify-center p-10 transition-all duration-500 hover:border-cuivre/40 hover:shadow-card">
                  {/* Number */}
                  <span className="absolute top-4 left-4 font-serif text-6xl text-argent/30 leading-none">
                    0{index + 1}
                  </span>

                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={160}
                    height={80}
                    className="max-h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"
                  />

                  <p className="mt-6 font-sans text-xs uppercase tracking-[0.2em] text-cendre group-hover:text-cuivre transition-colors">
                    {brand.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Editorial Split */}
      <section className="bg-noir relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-auto"
          >
            <Image
              src="/images/services/champvi.png"
              alt="Expérience Boutique"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-noir/60 via-transparent to-transparent" />

            {/* Floating Text */}
            <div className="absolute bottom-12 left-12 right-12">
              <p className="font-serif text-3xl md:text-4xl text-ivoire leading-tight">
                "Le luxe n'est pas un prix,
                <span className="text-cuivre italic"> c'est une expérience."</span>
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="section-padding bg-noir-50 relative">
            <div className="absolute inset-0 bg-kuba opacity-20" />

            <div className="relative z-10 max-w-lg mx-auto lg:mx-0 lg:ml-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="overline mb-6">Notre Engagement</p>
                <h2 className="font-serif text-3xl md:text-4xl text-ivoire mb-12 leading-tight">
                  Une Expérience
                  <span className="text-cuivre italic block">Sur Mesure</span>
                </h2>
              </motion.div>

              <div className="space-y-10">
                {[
                  {
                    icon: Award,
                    title: 'Authenticité Garantie',
                    description: 'Montures authentiques, directement des maisons.'
                  },
                  {
                    icon: HeartHandshake,
                    title: 'Conseil Expert',
                    description: 'Guidance personnalisée pour votre style unique.'
                  },
                  {
                    icon: Sparkles,
                    title: 'Verres de Précision',
                    description: 'Haute qualité optique, adaptée à votre vue.'
                  },
                  {
                    icon: Glasses,
                    title: 'Ajustements Offerts',
                    description: 'Entretien et ajustement gratuits à vie.'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 border border-cuivre/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cuivre/10 transition-colors">
                      <item.icon className="text-cuivre" size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ivoire mb-1">{item.title}</h3>
                      <p className="text-ivoire/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Brands Grid - Magazine Style */}
      <section className="section-padding bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="container-editorial relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="overline mb-4">Notre Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivoire mb-6">
              Toutes Nos <span className="text-cuivre italic">Marques</span>
            </h2>
            <div className="accent-line mx-auto" />
          </motion.div>

          {/* Brands Grid - Compact */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-cuivre/10"
          >
            {luxuryBrands.map((brand) => (
              <motion.div
                key={brand.id}
                variants={fadeInUp}
                className="group aspect-square bg-charbon flex items-center justify-center p-6 hover:bg-noir-50 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={40}
                  className="max-h-6 w-auto invert grayscale opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Editorial */}
      <section className="relative py-32 overflow-hidden">
        {/* Copper Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cuivre via-cuivre-dark to-cuivre-muted" />
        <div className="absolute inset-0 bg-kuba opacity-10" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-ivoire/20" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-noir/20" />

        <div className="container-editorial relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-ivoire/70 uppercase tracking-[0.3em] text-xs mb-6">
                Visitez-Nous
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivoire mb-8 leading-[1.05]">
                Votre Regard Mérite
                <span className="block italic">l'Excellence</span>
              </h2>
              <p className="text-ivoire/80 text-lg mb-12 max-w-xl mx-auto">
                Nos conseillers vous attendent pour vous faire découvrir
                notre collection exclusive de montures de luxe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center justify-center gap-3 bg-ivoire text-charbon px-10 py-5 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white group"
                >
                  <span>Prendre Rendez-Vous</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border border-ivoire/40 text-ivoire px-10 py-5 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-ivoire/10"
                >
                  <span>Nous Trouver</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
