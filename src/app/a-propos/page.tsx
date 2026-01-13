'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Heart, Eye, Users, CheckCircle, Calendar } from 'lucide-react'
import { stats } from '@/data/siteData'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Editorial */}
      <section className="relative min-h-[70vh] flex items-center bg-noir overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-cuivre/20 via-cuivre/10 to-transparent" />

        {/* Large Decorative Text */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[30rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          À
        </div>

        <div className="container-editorial relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="overline mb-8">À Propos</p>
            <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
              Notre Histoire,
              <span className="block text-cuivre italic mt-2">Votre Vision</span>
            </h1>
            <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Depuis 2003, LAËL VISION s'engage à offrir des soins ophtalmologiques
              d'excellence en République Démocratique du Congo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Editorial Split */}
      <section className="bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-auto"
          >
            <Image
              src="/images/services/ser1.png"
              alt="LAËL VISION Centre"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ivoire/20" />

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-cuivre text-ivoire p-6">
              <div className="font-serif text-4xl">20+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Années d'Expérience</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mx-0 lg:ml-16"
            >
              <p className="overline mb-4">Notre Mission</p>
              <h2 className="font-serif text-4xl text-charbon mb-6 leading-tight">
                Excellence en
                <span className="text-cuivre italic block">Soins Visuels</span>
              </h2>

              <div className="accent-line mb-8" />

              <p className="text-cendre text-lg leading-relaxed mb-6">
                LAËL VISION est un centre médical principalement dédié à la vision.
                Notre mission est de fournir des soins ophtalmologiques de qualité
                internationale tout en rendant accessible les meilleures marques
                d'optique de luxe.
              </p>

              <p className="text-cendre leading-relaxed mb-10">
                Notre équipe de soins est constituée de professionnels compétents
                et compatissants qui fournissent les meilleurs soins possibles à
                nos patients.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Équipements de dernière génération',
                  'Équipe de spécialistes qualifiés',
                  'Service personnalisé et attentionné',
                  'Marques de luxe exclusives'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-cuivre" size={18} />
                    <span className="text-charbon">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/equipe" className="btn-primary group">
                <span>Découvrir Notre Équipe</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Editorial Grid */}
      <section className="section-padding bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="container-editorial relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="overline mb-4">Nos Valeurs</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ivoire leading-tight">
                Ce Qui Nous
                <span className="text-cuivre italic block">Guide</span>
              </h2>
            </motion.div>
            <div className="accent-line-long mt-8 lg:mt-0" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              {
                icon: Eye,
                title: 'Excellence',
                description: 'Nous visons l\'excellence dans chaque consultation et chaque service.'
              },
              {
                icon: Heart,
                title: 'Compassion',
                description: 'Chaque patient est traité avec empathie et respect.'
              },
              {
                icon: Award,
                title: 'Innovation',
                description: 'Nous investissons dans les technologies les plus avancées.'
              },
              {
                icon: Users,
                title: 'Accessibilité',
                description: 'Des soins de qualité accessibles à tous.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-noir border border-cuivre/10 p-8 text-center hover:border-cuivre/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 border border-cuivre/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-cuivre/10 transition-colors">
                  <value.icon className="text-cuivre" size={24} />
                </div>
                <h3 className="font-serif text-xl text-ivoire mb-3">{value.title}</h3>
                <p className="text-ivoire/50 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Editorial Numbers */}
      <section className="py-24 bg-cuivre relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba opacity-10" />

        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-5xl md:text-6xl text-ivoire mb-2">
                  {stat.value}
                </div>
                <p className="text-ivoire/70 text-sm uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Editorial */}
      <section className="section-padding bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="overline mb-6">Consultation</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charbon mb-8 leading-tight">
                Prêt à Prendre Soin
                <span className="text-cuivre italic block">de Vos Yeux ?</span>
              </h2>
              <p className="text-cendre text-lg mb-12 max-w-xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
                et vous accompagner dans votre parcours de soins.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/rendez-vous" className="btn-primary group">
                  <Calendar size={18} />
                  <span>Prendre Rendez-Vous</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/equipe" className="btn-secondary">
                  Découvrir Notre Équipe
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
