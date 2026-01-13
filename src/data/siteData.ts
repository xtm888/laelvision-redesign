export const siteConfig = {
  name: 'LAËL VISION',
  tagline: 'Centre Médical Ophtalmologique',
  description: 'Centre médical principalement dédié à la vision depuis 2003 en R.D.C',
  phone: '+243 (0) 999 060 457',
  whatsapp: '+243822086308',
  email: 'info@laelvision.com',
  calendlyUrl: 'https://calendly.com/laelvision', // Update with actual Calendly URL
}

export const locations = [
  {
    id: 'kinshasa',
    name: 'Kinshasa',
    address: '119 Boulevard Du 30 Juin Gombe, Matrix Tower Mall, Kinshasa, RDC',
    hours: {
      weekdays: '08:30 - 18:30',
      saturday: '08:30 - 15:00',
      sunday: 'Fermé',
    },
    phone: '+243 (0) 999 060 457',
    whatsapp: '+243822086308',
    mapUrl: 'https://maps.google.com/?q=-4.3217,15.3125',
  },
  {
    id: 'matadi',
    name: 'Kongo-Central (Matadi)',
    address: 'Matadi, Kongo-Central, RDC',
    hours: {
      weekdays: '08:30 - 17:00',
      saturday: '08:30 - 14:00',
      sunday: 'Fermé',
    },
    phone: '+243822086308',
    whatsapp: '+243822086308',
    mapUrl: 'https://maps.google.com/?q=-5.8167,13.4500',
  },
]

export const doctors = [
  {
    id: 1,
    name: 'Dr. NZOLANTIMA Magloire',
    title: 'Chirurgien / Ophtalmologue',
    image: '/images/team/Dr_Nzolantima.jpg',
    imagePosition: '35% 18%', // Face on left, head higher in frame
    specialties: ['Chirurgie oculaire', 'Cataracte', 'Glaucome'],
    isFounder: true,
  },
  {
    id: 2,
    name: 'Dr. META Therem',
    title: 'Médecin Généraliste',
    image: '/images/team/Dr_Meta.jpg',
    imagePosition: '50% 15%', // Centered, head higher in frame
    specialties: ['Médecine générale', 'Consultations'],
  },
  {
    id: 3,
    name: 'Dr. TSHIHATA Pierre',
    title: 'Ophtalmologue',
    image: '/images/team/Dr_Tihata_Pierre.jpg',
    imagePosition: '55% 10%', // Slightly right, head at top
    specialties: ['Ophtalmologie', 'Diagnostic'],
  },
  {
    id: 4,
    name: 'Dr. NDENGOLI Guy Marcel',
    title: 'Ophtalmologue',
    image: '/images/team/Dr_Ngengoli_Guy_Marcel.jpg',
    imagePosition: '50% 20%', // Centered
    specialties: ['Ophtalmologie', 'Rétine'],
  },
  {
    id: 5,
    name: 'Dr. DIASILUA Jean Baptiste',
    title: 'Ophtalmologue',
    image: '/images/team/Dr_Diasilua.jpg',
    imagePosition: '50% 18%', // Centered
    specialties: ['Ophtalmologie', 'Cornée'],
  },
  {
    id: 6,
    name: 'Dr. KASWA Carine',
    title: 'Ophtalmologue',
    image: '/images/team/Dr_Kaswa.jpg',
    imagePosition: '50% 15%', // Centered
    specialties: ['Ophtalmologie', 'Pédiatrie oculaire'],
  },
]

export const departments = [
  {
    id: 'ophthalmology',
    name: 'Ophtalmologie',
    description: 'Diagnostic et traitement complet des maladies oculaires',
    icon: 'Eye',
    image: '/images/services/servi1.png',
  },
  {
    id: 'general',
    name: 'Médecine Générale',
    description: 'Soins médicaux généraux et consultations',
    icon: 'Stethoscope',
    image: '/images/services/stetoscope1.png',
  },
  {
    id: 'laboratory',
    name: 'Laboratoire',
    description: 'Analyses médicales avec équipements performants',
    icon: 'Microscope',
    image: '/images/services/microscope1.png',
  },
  {
    id: 'optics',
    name: 'Optique',
    description: 'Examens de la vue et correction visuelle',
    icon: 'Glasses',
    image: '/images/services/champvi.png',
  },
  {
    id: 'pharmacy',
    name: 'Pharmacie',
    description: 'Médicaments et produits ophtalmologiques',
    icon: 'Pill',
    image: '/images/services/surgery.png',
  },
]

export const services = [
  {
    id: 'consultation',
    name: 'Consultation Ophtalmologique',
    description: 'Examen complet de la vue et diagnostic',
    duration: '30-45 min',
  },
  {
    id: 'refraction',
    name: 'Réfraction',
    description: 'Mesure précise de votre correction visuelle',
    duration: '20-30 min',
  },
  {
    id: 'tonometry',
    name: 'Tonométrie',
    description: 'Mesure de la pression intraoculaire',
    duration: '15 min',
  },
  {
    id: 'fundoscopy',
    name: 'Fond d\'œil',
    description: 'Examen de la rétine et du nerf optique',
    duration: '20 min',
  },
  {
    id: 'oct',
    name: 'OCT (Tomographie)',
    description: 'Imagerie haute résolution de la rétine',
    duration: '15 min',
  },
  {
    id: 'visual-field',
    name: 'Champ Visuel',
    description: 'Évaluation de la vision périphérique',
    duration: '30 min',
  },
]

export const eyeConditions = [
  {
    id: 'cataracte',
    name: 'Cataracte',
    slug: 'cataracte',
    shortDescription: 'Opacification du cristallin',
    description: 'La cataracte est une opacification du cristallin qui entraîne une baisse progressive de la vision.',
  },
  {
    id: 'glaucome',
    name: 'Glaucome',
    slug: 'glaucome',
    shortDescription: 'Le tueur silencieux de la vue',
    description: 'Le glaucome est une maladie qui endommage le nerf optique, souvent causée par une pression intraoculaire élevée.',
  },
  {
    id: 'myopie',
    name: 'Myopie',
    slug: 'myopie',
    shortDescription: 'Difficulté à voir de loin',
    description: 'La myopie est un trouble de la vision où les objets éloignés apparaissent flous.',
  },
  {
    id: 'hypermetropie',
    name: 'Hypermétropie',
    slug: 'hypermetropie',
    shortDescription: 'Difficulté à voir de près',
    description: 'L\'hypermétropie est un défaut visuel où la vision de près est floue.',
  },
  {
    id: 'astigmatisme',
    name: 'Astigmatisme',
    slug: 'astigmatisme',
    shortDescription: 'Vision déformée',
    description: 'L\'astigmatisme est un défaut de courbure de la cornée causant une vision déformée.',
  },
  {
    id: 'presbytie',
    name: 'Presbytie',
    slug: 'presbytie',
    shortDescription: 'Vieillissement du cristallin',
    description: 'La presbytie est la perte progressive de la capacité d\'accommodation liée à l\'âge.',
  },
  {
    id: 'conjonctivite',
    name: 'Conjonctivite',
    slug: 'conjonctivite',
    shortDescription: 'Inflammation de la conjonctive',
    description: 'La conjonctivite est une inflammation de la membrane qui recouvre l\'œil.',
  },
  {
    id: 'secheresse',
    name: 'Sécheresse Oculaire',
    slug: 'secheresse-oculaire',
    shortDescription: 'Manque de larmes',
    description: 'La sécheresse oculaire survient quand les yeux ne produisent pas assez de larmes.',
  },
  {
    id: 'retinopathie',
    name: 'Rétinopathie Diabétique',
    slug: 'retinopathie-diabetique',
    shortDescription: 'Complication du diabète',
    description: 'La rétinopathie diabétique est une complication du diabète affectant les vaisseaux de la rétine.',
  },
  {
    id: 'dmla',
    name: 'Dégénérescence Maculaire',
    slug: 'degenerescence-maculaire',
    shortDescription: 'Atteinte de la macula',
    description: 'La DMLA est une maladie dégénérative de la rétine centrale affectant la vision fine.',
  },
]

export const luxuryBrands = [
  { id: 'cartier', name: 'Cartier', logo: '/images/brands/cartier.png' },
  { id: 'fred', name: 'FRED', logo: '/images/brands/fred.png' },
  { id: 'maybach', name: 'Maybach', logo: '/images/brands/maybach.png' },
  { id: 'tomford', name: 'Tom Ford', logo: '/images/brands/tom.png' },
  { id: 'calvin', name: 'Calvin Klein', logo: '/images/brands/calvin.png' },
  { id: 'chloe', name: 'Chloé', logo: '/images/brands/chloe.png' },
  { id: 'puma', name: 'Puma', logo: '/images/brands/puma.png' },
  { id: 'persol', name: 'Persol', logo: '/images/brands/persol.png' },
  { id: 'rayban', name: 'Ray-Ban', logo: '/images/brands/ray.png' },
  { id: 'boss', name: 'Hugo Boss', logo: '/images/brands/boss.png' },
  { id: 'emporio', name: 'Emporio Armani', logo: '/images/brands/emporio.png' },
  { id: 'ralph', name: 'Ralph Lauren', logo: '/images/brands/ralph.png' },
  { id: 'michael', name: 'Michael Kors', logo: '/images/brands/mk.png' },
  { id: 'pierre', name: 'Pierre Cardin', logo: '/images/brands/pierre.png' },
  { id: 'levis', name: 'Levi\'s', logo: '/images/brands/levis.png' },
  { id: 'mulberry', name: 'Mulberry', logo: '/images/brands/mulberry.png' },
]

export const healthTips = [
  {
    id: 1,
    title: 'Comment manipuler ses lunettes ?',
    tips: [
      'Mettez et ôtez vos lunettes toujours à l\'aide des deux mains.',
      'Ne déposez jamais les verres de vos lunettes sur une surface dure.',
      'Lorsque vous ne les portez pas, conservez toujours vos lunettes dans un étui.',
      'Ne placez pas vos lunettes derrière la vitre d\'une voiture.',
      'Utilisez un tissu doux pour essuyer les verres.',
    ],
  },
  {
    id: 2,
    title: 'Examens des yeux, à quel âge ?',
    tips: [
      'Premiers examens des yeux : à l\'âge de 3 mois, 9 mois, et 2 ans.',
      'Puis à l\'âge de 6 ans (âge scolaire).',
      'Ensuite une fois l\'an ou 2 fois l\'an.',
      'À 40 ans, examen chez l\'ophtalmologue 1 fois l\'an.',
      'Attention au glaucome, le tueur silencieux.',
    ],
  },
]

export const stats = [
  { value: '20+', label: 'Années d\'expérience' },
  { value: '6', label: 'Spécialistes' },
  { value: '2', label: 'Centres médicaux' },
  { value: '15+', label: 'Marques de luxe' },
]

export const labWaitTimes = {
  standard: '24-48 heures',
  urgent: '4-6 heures',
  note: 'Les délais peuvent varier selon le type d\'analyse. Contactez-nous pour plus d\'informations.',
}

export const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    {
      name: 'À Propos',
      href: '/a-propos',
      children: [
        { name: 'LAËL VISION', href: '/a-propos' },
        { name: 'Notre équipe', href: '/equipe' },
        { name: 'Les maladies', href: '/maladies' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    {
      name: 'Services',
      href: '/services',
      children: [
        { name: 'Nos Examens', href: '/services' },
        { name: 'Laboratoire', href: '/laboratoire' },
        { name: 'Prendre RDV', href: '/rendez-vous' },
      ]
    },
    { name: 'Boutique', href: '/boutique' },
    { name: 'Contact', href: '/contact' },
  ],
  quickActions: [
    { name: 'Trouver un Docteur', href: '/equipe', icon: 'UserRound' },
    { name: 'Prendre un RDV', href: '/rendez-vous', icon: 'Calendar' },
    { name: 'Résultats du laboratoire', href: '/laboratoire', icon: 'FileText' },
  ],
}
