'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Beaker, Phone, CheckCircle, ArrowRight, ArrowUpRight, AlertTriangle, FileText } from 'lucide-react'
import { siteConfig, labWaitTimes } from '@/data/siteData'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

export default function LaboratoryPage() {
  return (
    <>
      {/* Hero Section - Editorial */}
      <section className="relative min-h-[70vh] flex items-center bg-noir overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />
        <div className="absolute bottom-0 left-1/3 w-px h-1/2 bg-gradient-to-t from-cuivre/40 to-transparent" />

        {/* Large Decorative Text */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-serif text-[25rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          L
        </div>

        <div className="container-editorial relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="overline mb-8">Laboratoire</p>
            <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
              Notre
              <span className="block text-cuivre italic mt-2">Laboratoire</span>
            </h1>
            <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Équipements performants et résultats fiables pour un diagnostic précis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wait Times Section - Editorial Cards */}
      <section className="section-padding bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="overline mb-4">Délais</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charbon mb-6">
              Délais de <span className="text-cuivre italic">Résultats</span>
            </h2>
            <div className="accent-line mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-1 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-argent/50 p-10"
            >
              <div className="w-16 h-16 border border-cuivre/30 flex items-center justify-center mb-8">
                <Clock className="text-cuivre" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-charbon mb-4">Analyses Standard</h3>
              <div className="font-serif text-5xl text-cuivre mb-6">
                {labWaitTimes.standard}
              </div>
              <p className="text-cendre text-sm mb-8">
                Pour la plupart des examens de routine et analyses courantes.
              </p>
              <ul className="space-y-3">
                {['Bilan sanguin', 'Tests visuels', 'Analyses de base'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charbon text-sm">
                    <CheckCircle size={16} className="text-cuivre" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-cuivre text-ivoire p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-kuba opacity-10" />
              <div className="relative z-10">
                <div className="w-16 h-16 border border-ivoire/30 flex items-center justify-center mb-8">
                  <AlertTriangle className="text-ivoire" size={32} />
                </div>
                <h3 className="font-serif text-2xl mb-4">Analyses Urgentes</h3>
                <div className="font-serif text-5xl mb-6">
                  {labWaitTimes.urgent}
                </div>
                <p className="text-ivoire/80 text-sm mb-8">
                  Pour les situations nécessitant un diagnostic rapide.
                </p>
                <ul className="space-y-3">
                  {['Urgences médicales', 'Suivi post-opératoire', 'Contrôles critiques'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-ivoire/90 text-sm">
                      <CheckCircle size={16} className="text-ivoire" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-2xl mx-auto text-center"
          >
            <div className="p-6 bg-cuivre/10 border border-cuivre/20">
              <p className="text-charbon">
                <strong className="text-cuivre">Note :</strong> {labWaitTimes.note}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section - Editorial Grid */}
      <section className="section-padding bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="container-editorial relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="overline mb-4">Analyses</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ivoire leading-tight">
                Nos
                <span className="text-cuivre italic block">Analyses</span>
              </h2>
            </motion.div>
            <div className="accent-line-long mt-8 lg:mt-0" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: 'Hématologie', description: 'Numération formule sanguine, VS, plaquettes' },
              { title: 'Biochimie', description: 'Glycémie, bilan lipidique, fonction rénale' },
              { title: 'Sérologie', description: 'Tests infectieux, auto-immunité' },
              { title: 'Microbiologie', description: 'Cultures, antibiogrammes' },
              { title: 'Analyses ophtalmiques', description: 'Examens spécialisés de l\'œil' },
              { title: 'Bilan général', description: 'Check-up complet de santé' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-noir border border-cuivre/10 p-6 hover:border-cuivre/30 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-cuivre/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cuivre/10 transition-colors">
                    <Beaker className="text-cuivre" size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ivoire mb-2">{service.title}</h3>
                    <p className="text-ivoire/50 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Editorial Steps */}
      <section className="py-24 bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="overline mb-4">Processus</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charbon">
              Comment Ça <span className="text-cuivre italic">Marche</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-1">
            {[
              { step: '01', title: 'Prescription', description: 'Obtenez une ordonnance de votre médecin', icon: FileText },
              { step: '02', title: 'Prélèvement', description: 'Rendez-vous au laboratoire pour le prélèvement', icon: Beaker },
              { step: '03', title: 'Analyse', description: 'Nos équipes analysent vos échantillons', icon: Clock },
              { step: '04', title: 'Résultats', description: 'Récupérez vos résultats selon les délais', icon: CheckCircle },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-argent/50 p-8 text-center hover:border-cuivre/30 transition-all duration-500"
              >
                <div className="font-serif text-5xl text-cuivre/30 mb-4">
                  {item.step}
                </div>
                <div className="w-14 h-14 border border-cuivre/30 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-cuivre" size={24} />
                </div>
                <h3 className="font-serif text-lg text-charbon mb-2">{item.title}</h3>
                <p className="text-cendre text-sm">{item.description}</p>
              </motion.div>
            ))}
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
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivoire mb-8 leading-[1.05]">
                Des
                <span className="block italic">Questions ?</span>
              </h2>
              <p className="text-ivoire/80 text-lg mb-12 max-w-xl mx-auto">
                Contactez-nous pour toute information sur nos analyses et délais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-3 bg-ivoire text-charbon px-10 py-5 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white"
                >
                  <Phone size={18} />
                  <span>Appeler</span>
                </a>
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border border-ivoire/40 text-ivoire px-10 py-5 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-ivoire/10 group"
                >
                  <span>Prendre RDV</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
