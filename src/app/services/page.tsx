'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Eye, Stethoscope, Microscope, Glasses, Pill, Clock, CheckCircle, Calendar } from 'lucide-react'
import { departments, services } from '@/data/siteData'

const iconMap: { [key: string]: React.ElementType } = {
  Eye: Eye,
  Stethoscope: Stethoscope,
  Microscope: Microscope,
  Glasses: Glasses,
  Pill: Pill,
}

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Editorial */}
      <section className="relative min-h-[70vh] flex items-center bg-noir overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cuivre/20 via-cuivre/10 to-transparent" />
        <div className="absolute bottom-0 right-1/3 w-px h-1/2 bg-gradient-to-t from-cuivre/30 to-transparent" />

        {/* Large Decorative Text */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[30rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          S
        </div>

        <div className="container-editorial relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="overline mb-8">Nos Services</p>
            <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
              Des Soins
              <span className="block text-cuivre italic mt-2">d'Excellence</span>
            </h1>
            <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Découvrez notre gamme complète de services ophtalmologiques,
              équipés des technologies les plus modernes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section - Editorial Grid */}
      <section className="section-padding bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="overline mb-4">Départements</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charbon leading-tight">
                Cinq Spécialités
                <span className="text-cuivre italic block">À Votre Service</span>
              </h2>
            </motion.div>
            <div className="accent-line-long mt-8 lg:mt-0" />
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-1"
          >
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.icon] || Eye
              return (
                <motion.div
                  key={dept.id}
                  variants={fadeInUp}
                  className="group bg-white border border-argent/50 hover:border-cuivre/30 transition-all duration-500"
                >
                  <div className="h-48 relative bg-charbon overflow-hidden">
                    <div className="absolute inset-0 bg-kuba opacity-20" />
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="object-contain p-8 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Number */}
                    <span className="absolute top-4 left-4 font-serif text-6xl text-ivoire/10 leading-none">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 border border-cuivre/30 flex items-center justify-center group-hover:bg-cuivre/10 transition-colors">
                        <Icon className="text-cuivre" size={24} />
                      </div>
                      <h3 className="font-serif text-xl text-charbon">{dept.name}</h3>
                    </div>
                    <p className="text-cendre text-sm leading-relaxed">{dept.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Examinations Section - Editorial Cards */}
      <section className="section-padding bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="overline mb-4">Examens</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivoire mb-6">
              Nos <span className="text-cuivre italic">Examens</span>
            </h2>
            <div className="accent-line mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-noir border border-cuivre/10 p-6 hover:border-cuivre/30 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-cuivre/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cuivre/10 transition-colors">
                    <CheckCircle className="text-cuivre" size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ivoire mb-2">{service.name}</h3>
                    <p className="text-ivoire/50 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm text-cuivre">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Editorial Split */}
      <section className="bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="grid lg:grid-cols-2">
          {/* Content Side */}
          <div className="section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-16"
            >
              <p className="overline mb-6">Notre Engagement</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charbon mb-8 leading-tight">
                Pourquoi Nous
                <span className="text-cuivre italic block">Choisir ?</span>
              </h2>

              <p className="text-cendre mb-12 leading-relaxed">
                Notre engagement envers l'excellence médicale et le bien-être de nos patients
                fait de LAËL VISION le choix de confiance pour vos soins visuels.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: 'Équipements de Pointe',
                    description: 'Technologies dernière génération pour des diagnostics précis'
                  },
                  {
                    title: 'Délais Courts',
                    description: 'Système informatisé pour optimiser votre temps d\'attente'
                  },
                  {
                    title: 'Expertise Reconnue',
                    description: 'Spécialistes formés aux meilleures pratiques internationales'
                  },
                  {
                    title: 'Suivi Personnalisé',
                    description: 'Accompagnement complet de votre parcours de soins'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-10 h-10 bg-cuivre flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-ivoire" size={18} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-charbon mb-1">{item.title}</h4>
                      <p className="text-cendre text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-auto"
          >
            <Image
              src="/images/services/ser2.png"
              alt="Équipements modernes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ivoire/20" />

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-cuivre text-ivoire p-6">
              <div className="font-serif text-4xl">100%</div>
              <div className="text-xs uppercase tracking-widest mt-1">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Editorial */}
      <section className="relative py-32 overflow-hidden">
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
                Prenez Soin
                <span className="block italic">de Vos Yeux</span>
              </h2>
              <p className="text-ivoire/80 text-lg mb-12 max-w-xl mx-auto">
                N'attendez pas pour consulter. Nos spécialistes sont à votre disposition
                pour un bilan complet de votre santé visuelle.
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
