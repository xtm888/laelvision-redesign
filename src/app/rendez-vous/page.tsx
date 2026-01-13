'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Phone, CheckCircle, ArrowRight, ArrowUpRight } from 'lucide-react'
import { siteConfig, locations, doctors } from '@/data/siteData'
import { useEffect } from 'react'

export default function AppointmentPage() {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      {/* Hero Section - Editorial */}
      <section className="relative min-h-[60vh] flex items-center bg-noir overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-px h-1/2 bg-gradient-to-t from-cuivre/40 to-transparent" />

        {/* Large Decorative Text */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 font-serif text-[25rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          R
        </div>

        <div className="container-editorial relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="overline mb-8">Rendez-Vous</p>
            <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
              Prenez
              <span className="block text-cuivre italic mt-2">Rendez-Vous</span>
            </h1>
            <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Réservez votre consultation facilement en ligne. Notre équipe vous
              accueillera dans les meilleurs délais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section - Editorial Numbers */}
      <section className="py-20 bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <div className="grid md:grid-cols-4 gap-1">
            {[
              { step: '01', title: 'Choisissez le service', description: 'Sélectionnez le type de consultation souhaité' },
              { step: '02', title: 'Choisissez le créneau', description: 'Trouvez une date et heure qui vous convient' },
              { step: '03', title: 'Renseignez vos infos', description: 'Entrez vos coordonnées pour la confirmation' },
              { step: '04', title: 'Confirmation', description: 'Recevez la confirmation par email/SMS' },
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
                <h3 className="font-serif text-lg text-charbon mb-2">{item.title}</h3>
                <p className="text-cendre text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Embed Section - Editorial */}
      <section className="section-padding bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="container-editorial relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="overline mb-4">Informations</p>
                <h2 className="font-serif text-3xl text-ivoire mb-10">
                  Pratiques
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="p-6 bg-noir/50 border border-cuivre/10">
                    <h3 className="font-serif text-lg text-ivoire mb-4 flex items-center gap-3">
                      <MapPin className="text-cuivre" size={18} />
                      Nos Centres
                    </h3>
                    {locations.map((loc) => (
                      <div key={loc.id} className="mb-4 last:mb-0">
                        <p className="font-sans text-ivoire text-sm">{loc.name}</p>
                        <p className="text-ivoire/50 text-xs">{loc.address}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-noir/50 border border-cuivre/10">
                    <h3 className="font-serif text-lg text-ivoire mb-4 flex items-center gap-3">
                      <Clock className="text-cuivre" size={18} />
                      Horaires
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex justify-between">
                        <span className="text-ivoire/50">Lundi - Vendredi</span>
                        <span className="text-ivoire">08:30 - 18:30</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-ivoire/50">Samedi</span>
                        <span className="text-ivoire">08:30 - 15:00</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-ivoire/50">Dimanche</span>
                        <span className="text-ivoire/30">Fermé</span>
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-noir/50 border border-cuivre/10">
                    <h3 className="font-serif text-lg text-ivoire mb-4 flex items-center gap-3">
                      <Phone className="text-cuivre" size={18} />
                      Contact Direct
                    </h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-cuivre hover:text-cuivre-light transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-ivoire/50 text-xs mt-2">
                      Pour les urgences ou questions
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-cuivre/10 border border-cuivre/20">
                  <h3 className="font-serif text-lg text-ivoire mb-4">
                    À Apporter
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Carte d\'identité',
                      'Ordonnances précédentes',
                      'Lunettes actuelles',
                      'Carnet de santé'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-ivoire/80 text-sm">
                        <CheckCircle size={14} className="text-cuivre" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Calendly Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-ivoire overflow-hidden">
                <div className="p-6 border-b border-argent">
                  <h2 className="font-serif text-2xl text-charbon">
                    Réservez Votre Consultation
                  </h2>
                  <p className="text-cendre text-sm mt-1">
                    Sélectionnez une date et un créneau horaire disponible
                  </p>
                </div>

                {/* Calendly Inline Widget */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/aioxtm-888/consultation-laelvision?hide_gdpr_banner=1&primary_color=B87333"
                  style={{ minWidth: '320px', height: '700px' }}
                />

                {/* Fallback */}
                <noscript>
                  <div className="p-8 text-center">
                    <p className="text-cendre mb-4">
                      Pour prendre rendez-vous, veuillez activer JavaScript ou nous contacter directement.
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="btn-primary"
                    >
                      <Phone size={18} />
                      {siteConfig.phone}
                    </a>
                  </div>
                </noscript>
              </div>

              {/* Alternative Contact */}
              <div className="mt-8 p-6 bg-noir/50 border border-cuivre/10 text-center">
                <p className="text-ivoire/60 mb-6">
                  Vous préférez nous contacter directement ?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-ivoire text-charbon px-6 py-3 font-sans text-sm tracking-wide hover:bg-white transition-colors"
                  >
                    <Phone size={18} />
                    Appeler
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 font-sans text-sm tracking-wide hover:bg-[#20bd5a] transition-colors"
                  >
                    WhatsApp
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Quick View - Editorial */}
      <section className="section-padding bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="overline mb-4">Équipe Médicale</p>
            <h2 className="font-serif text-3xl text-charbon">
              Nos <span className="text-cuivre italic">Spécialistes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto overflow-hidden mb-3 border-2 border-argent group-hover:border-cuivre transition-colors">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: doctor.imagePosition }}
                  />
                </div>
                <p className="font-serif text-sm text-charbon">{doctor.name.split(' ').slice(-1)}</p>
                <p className="text-cendre text-xs">{doctor.title.split('/')[0]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
