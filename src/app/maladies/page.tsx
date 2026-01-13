'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Eye, AlertTriangle, Info, Calendar } from 'lucide-react'
import { eyeConditions } from '@/data/siteData'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

export default function MaladiesPage() {
  return (
    <>
      {/* Hero Section - Editorial */}
      <section className="relative min-h-[70vh] flex items-center bg-noir overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-cuivre/20 via-cuivre/10 to-transparent" />

        {/* Large Decorative Text */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 font-serif text-[25rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          M
        </div>

        <div className="container-editorial relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="overline mb-8">Information Santé</p>
            <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
              Les Maladies
              <span className="block text-cuivre italic mt-2">de l'Œil</span>
            </h1>
            <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Découvrez les principales pathologies oculaires, leurs symptômes et
              l'importance d'un dépistage précoce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warning Banner - Editorial */}
      <section className="py-6 bg-cuivre relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba opacity-10" />
        <div className="container-editorial relative z-10">
          <div className="flex items-center gap-4 justify-center text-center">
            <AlertTriangle className="text-ivoire flex-shrink-0" size={24} />
            <p className="text-ivoire">
              <strong>Attention au glaucome</strong> — Le tueur silencieux de la vue.
              Un contrôle annuel après 40 ans est recommandé.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid - Editorial Cards */}
      <section className="section-padding bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="overline mb-4">Pathologies</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charbon leading-tight">
                Pathologies
                <span className="text-cuivre italic block">Courantes</span>
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
            {eyeConditions.map((condition, index) => (
              <motion.div
                key={condition.id}
                variants={fadeInUp}
                className="group bg-white border border-argent/50 p-8 hover:border-cuivre/30 transition-all duration-500"
              >
                {/* Number */}
                <span className="font-serif text-5xl text-argent/30 leading-none block mb-6">
                  0{index + 1}
                </span>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 border border-cuivre/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cuivre group-hover:border-cuivre transition-colors">
                    <Eye size={24} className="text-cuivre group-hover:text-ivoire transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charbon">{condition.name}</h3>
                    <p className="text-cuivre text-sm">{condition.shortDescription}</p>
                  </div>
                </div>

                <p className="text-cendre text-sm leading-relaxed mb-6">
                  {condition.description}
                </p>

                <Link
                  href={`/maladies/${condition.slug}`}
                  className="inline-flex items-center gap-2 text-cuivre font-sans text-sm tracking-wide hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prevention Section - Editorial Split */}
      <section className="bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="grid lg:grid-cols-2">
          {/* Content Side */}
          <div className="section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-16"
            >
              <p className="overline mb-6">Prévention</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ivoire mb-8 leading-tight">
                Quand
                <span className="text-cuivre italic block">Consulter ?</span>
              </h2>

              <p className="text-ivoire/60 mb-12 leading-relaxed">
                Un examen régulier des yeux permet de détecter précocement de nombreuses
                pathologies. Voici nos recommandations pour protéger votre vue.
              </p>

              <div className="space-y-4">
                {[
                  { age: '0-2 ans', recommendation: 'Examens à 3 mois, 9 mois et 2 ans' },
                  { age: '6 ans', recommendation: 'Examen à l\'entrée scolaire' },
                  { age: '6-40 ans', recommendation: 'Examen 1 à 2 fois par an' },
                  { age: '40+ ans', recommendation: 'Examen annuel obligatoire (glaucome)' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-5 bg-noir/50 border border-cuivre/10"
                  >
                    <div className="w-20 h-12 border border-cuivre/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-cuivre font-serif text-sm">{item.age}</span>
                    </div>
                    <div className="flex items-center">
                      <p className="text-ivoire/80">{item.recommendation}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Alert Signs Side */}
          <div className="section-padding bg-noir/50 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mx-0 lg:mr-auto lg:ml-16"
            >
              <div className="p-8 border border-cuivre/20 bg-cuivre/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-cuivre/30 flex items-center justify-center">
                    <Info className="text-cuivre" size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-ivoire">Signes d'Alerte</h3>
                </div>

                <p className="text-ivoire/60 mb-8">
                  Consultez rapidement si vous présentez l'un de ces symptômes :
                </p>

                <ul className="space-y-4">
                  {[
                    'Vision floue ou brouillée',
                    'Douleur oculaire persistante',
                    'Yeux rouges ou irrités',
                    'Sensibilité à la lumière',
                    'Halos autour des lumières',
                    'Perte de vision périphérique',
                    'Taches ou flashs lumineux',
                    'Difficultés à voir la nuit'
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-center gap-3 text-ivoire/80">
                      <div className="w-2 h-2 bg-cuivre" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
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
                Prévention
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivoire mb-8 leading-[1.05]">
                Protégez
                <span className="block italic">Votre Vision</span>
              </h2>
              <p className="text-ivoire/80 text-lg mb-12 max-w-xl mx-auto">
                N'attendez pas l'apparition des symptômes. Un examen préventif
                peut sauver votre vue.
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
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border border-ivoire/40 text-ivoire px-10 py-5 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-ivoire/10"
                >
                  <span>Nos Services</span>
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
