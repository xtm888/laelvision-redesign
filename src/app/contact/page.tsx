'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, ArrowUpRight } from 'lucide-react'
import { siteConfig, locations } from '@/data/siteData'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - Editorial */}
      <section className="relative min-h-[60vh] flex items-center bg-noir overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-30" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-cuivre/20 via-cuivre/10 to-transparent" />

        {/* Large Decorative Text */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[30rem] text-cuivre/[0.03] leading-none select-none pointer-events-none">
          C
        </div>

        <div className="container-editorial relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <p className="overline mb-8">Contact</p>
            <h1 className="font-serif text-[3rem] md:text-[4rem] lg:text-[5rem] text-ivoire leading-[0.95] tracking-tight mb-8">
              Nous
              <span className="block text-cuivre italic mt-2">Contacter</span>
            </h1>
            <p className="text-ivoire/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Nos équipes sont à votre disposition pour répondre à toutes vos questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Section - Editorial Cards */}
      <section className="section-padding bg-ivoire relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-swiss" />

        <div className="container-editorial relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="overline mb-4">Nos Centres</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charbon leading-tight">
                Deux Adresses
                <span className="text-cuivre italic block">Pour Vous Servir</span>
              </h2>
            </motion.div>
            <div className="accent-line-long mt-8 lg:mt-0" />
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-argent/50 hover:border-cuivre/30 transition-all duration-500"
              >
                {/* Map Placeholder */}
                <div className="h-48 bg-charbon relative overflow-hidden">
                  <div className="absolute inset-0 bg-kuba opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={32} className="text-cuivre mx-auto mb-3" strokeWidth={1.5} />
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ivoire/80 text-sm hover:text-cuivre transition-colors"
                      >
                        <span>Voir sur Google Maps</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                  {/* Number */}
                  <span className="absolute top-4 left-4 font-serif text-6xl text-ivoire/10 leading-none">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-8 md:p-10">
                  <h3 className="font-serif text-2xl text-charbon mb-8">{location.name}</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-cuivre/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-cuivre" size={18} />
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest text-cendre mb-1">Adresse</p>
                        <p className="text-charbon">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-cuivre/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-cuivre" size={18} />
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest text-cendre mb-1">Téléphone</p>
                        <a href={`tel:${location.phone}`} className="text-charbon hover:text-cuivre transition-colors">
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-cuivre/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-cuivre" size={18} />
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest text-cendre mb-1">Horaires</p>
                        <p className="text-charbon text-sm">Lun - Ven: {location.hours.weekdays}</p>
                        <p className="text-charbon text-sm">Samedi: {location.hours.saturday}</p>
                        <p className="text-cendre text-sm">Dimanche: {location.hours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-argent flex gap-3">
                    <a
                      href={`tel:${location.phone}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-charbon text-ivoire px-4 py-3 font-sans text-sm tracking-wide hover:bg-cuivre transition-colors"
                    >
                      <Phone size={16} />
                      Appeler
                    </a>
                    <a
                      href={`https://wa.me/${location.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 font-sans text-sm tracking-wide hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Editorial Split */}
      <section className="bg-charbon relative overflow-hidden">
        <div className="absolute inset-0 bg-kuba-dark opacity-40" />

        <div className="grid lg:grid-cols-2">
          {/* Info Side */}
          <div className="section-padding relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-16"
            >
              <p className="overline mb-6">Contact Direct</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ivoire mb-8 leading-tight">
                Une Question ?
                <span className="text-cuivre italic block">Écrivez-Nous</span>
              </h2>

              <p className="text-ivoire/60 mb-12">
                N'hésitez pas à nous contacter pour toute question concernant
                nos services, nos horaires ou pour prendre rendez-vous.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-noir/50 border border-cuivre/10">
                  <div className="w-12 h-12 border border-cuivre/30 flex items-center justify-center">
                    <Mail className="text-cuivre" size={20} />
                  </div>
                  <div>
                    <p className="text-ivoire/50 text-xs uppercase tracking-widest mb-1">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-ivoire hover:text-cuivre transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-noir/50 border border-cuivre/10">
                  <div className="w-12 h-12 border border-cuivre/30 flex items-center justify-center">
                    <Phone className="text-cuivre" size={20} />
                  </div>
                  <div>
                    <p className="text-ivoire/50 text-xs uppercase tracking-widest mb-1">Téléphone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-ivoire hover:text-cuivre transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/20">
                  <div className="w-12 h-12 border border-[#25D366]/30 flex items-center justify-center">
                    <MessageCircle className="text-[#25D366]" size={20} />
                  </div>
                  <div>
                    <p className="text-ivoire/50 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivoire hover:text-[#25D366] transition-colors"
                    >
                      Démarrer une conversation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="section-padding bg-ivoire relative">
            <div className="absolute inset-0 bg-grid-swiss" />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-md mx-auto lg:mx-0 lg:mr-auto lg:ml-16"
            >
              <h3 className="font-serif text-2xl text-charbon mb-8">
                Envoyer un Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cendre mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-argent focus:border-cuivre outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-cendre mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-argent focus:border-cuivre outline-none transition-colors"
                      placeholder="+243..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cendre mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-argent focus:border-cuivre outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cendre mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-argent focus:border-cuivre outline-none transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group"
                >
                  <span>Envoyer le message</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
