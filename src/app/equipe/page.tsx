'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Award, Calendar } from 'lucide-react'
import { doctors } from '@/data/siteData'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function TeamPage() {
  const leadDoctor = doctors[0]
  const otherDoctors = doctors.slice(1)

  return (
    <>
      {/* Hero Section - Editorial */}
      <section className="relative min-h-[70vh] flex items-center bg-noir overflow-hidden">
        {/* Kuba Pattern */}
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />

        {/* Geometric Elements */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-cuivre/20 via-cuivre/10 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-px h-1/2 bg-gradient-to-t from-cuivre/30 to-transparent" />

        {/* Large Decorative Text */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 font-serif text-[25rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          É
        </div>

        <div className="container-editorial relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="overline mb-8">Notre Équipe Médicale</p>

            <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
              L'Excellence
              <span className="block text-cuivre italic mt-2">au Service</span>
              <span className="block">de Votre Vision</span>
            </h1>

            <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Des spécialistes de renommée internationale, unis par une passion commune:
              l'excellence des soins ophtalmologiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Doctor - Editorial Portrait */}
      <section className="bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="grid lg:grid-cols-2">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] lg:aspect-auto"
          >
            <Image
              src={leadDoctor.image}
              alt={leadDoctor.name}
              fill
              className="object-cover"
              style={{ objectPosition: leadDoctor.imagePosition }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ivoire/20" />

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-cuivre text-ivoire p-5">
              <Award size={28} strokeWidth={1.5} />
            </div>

            {/* Name Overlay - Mobile */}
            <div className="absolute bottom-8 right-8 lg:hidden">
              <p className="font-serif text-2xl text-ivoire">{leadDoctor.name}</p>
              <p className="text-cuivre text-sm">{leadDoctor.title}</p>
            </div>
          </motion.div>

          {/* Content */}
          <div className="section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mx-0 lg:ml-16"
            >
              <p className="overline mb-4">Fondateur & Directeur Médical</p>

              <h2 className="font-serif text-4xl md:text-5xl text-charbon mb-4 leading-tight">
                {leadDoctor.name}
              </h2>

              <p className="text-cuivre font-sans text-lg mb-8">
                {leadDoctor.title}
              </p>

              <div className="accent-line mb-8" />

              <p className="text-cendre leading-relaxed mb-6">
                Chirurgien-ophtalmologue de renom, le Dr. Nzolantima est le fondateur
                et directeur médical de LAËL VISION. Avec plus de 20 ans d'expérience,
                il a consacré sa carrière à l'amélioration de la santé visuelle en RDC.
              </p>

              <p className="text-cendre leading-relaxed mb-10">
                Sa vision d'excellence et son engagement envers l'innovation ont fait
                de LAËL VISION un centre de référence en ophtalmologie dans la région.
              </p>

              {/* Specialties */}
              {leadDoctor.specialties && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {leadDoctor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 border border-cuivre/30 text-charbon text-sm font-sans hover:bg-cuivre/5 transition-colors"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              )}

              <Link
                href="/rendez-vous"
                className="btn-primary group"
              >
                <Calendar size={18} />
                <span>Prendre Rendez-Vous</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Doctors Grid - Editorial Style */}
      <section className="section-padding bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="container-editorial relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="overline mb-4">Équipe Médicale</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ivoire leading-tight">
                Nos
                <span className="text-cuivre italic block">Spécialistes</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 lg:mt-0"
            >
              <p className="text-ivoire/50 text-sm max-w-xs">
                Une équipe pluridisciplinaire dédiée à votre santé visuelle.
              </p>
            </motion.div>
          </div>

          {/* Doctors Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-1"
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                variants={fadeInUp}
                className="group relative bg-noir"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: doctor.imagePosition }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent" />

                  {/* Number */}
                  <span className="absolute top-4 left-4 font-serif text-5xl text-ivoire/20 leading-none">
                    0{index + 1}
                  </span>

                  {/* Founder Badge */}
                  {doctor.isFounder && (
                    <div className="absolute top-4 right-4 bg-cuivre text-ivoire px-3 py-1.5 text-xs uppercase tracking-widest">
                      Fondateur
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl text-ivoire mb-1">{doctor.name}</h3>
                    <p className="text-cuivre text-sm mb-4">{doctor.title}</p>

                    {/* Specialties */}
                    {doctor.specialties && (
                      <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {doctor.specialties.slice(0, 2).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 border border-ivoire/30 text-ivoire/70 text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href="/rendez-vous"
                      className="inline-flex items-center gap-2 text-ivoire text-sm font-sans tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-cuivre"
                    >
                      <span>Prendre RDV</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Copper Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cuivre via-cuivre-dark to-cuivre-muted" />
        <div className="absolute inset-0 bg-kuba opacity-10" />

        <div className="container-editorial relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-ivoire/70 uppercase tracking-[0.3em] text-xs mb-6">
                Consultation
              </p>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivoire mb-8 leading-[1.05]">
                Prêt à Consulter
                <span className="block italic">Nos Experts ?</span>
              </h2>

              <p className="text-ivoire/80 text-lg mb-12 max-w-xl mx-auto">
                Nos spécialistes sont à votre disposition pour un examen complet
                de votre santé visuelle. Prenez rendez-vous dès aujourd'hui.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center justify-center gap-3 bg-ivoire text-charbon px-10 py-5 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white group"
                >
                  <Calendar size={18} />
                  <span>Prendre Rendez-Vous</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border border-ivoire/40 text-ivoire px-10 py-5 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-ivoire/10"
                >
                  <span>Nous Contacter</span>
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
