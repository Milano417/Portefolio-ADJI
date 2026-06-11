// Mock data for ISATech website

export const schoolInfo = {
  name: "ISATech",
  fullName: "Institut Supérieur d'Application et de Technologie",
  slogan: "L'excellence demeure notre credo",
  foundedDate: "06 septembre 2001",
  location: "Abidjan, Koumassi, Côte d'Ivoire",
  address: "Boulevard Latrille, Koumassi, Abidjan, Côte d'Ivoire",
  phone: "+225 27 21 35 68 90",
  whatsapp: "+225 07 08 09 10 11",
  email: "info@isatech.ci",
  socialMedia: {
    facebook: "https://facebook.com/isatech.ci",
    linkedin: "https://linkedin.com/company/isatech",
    instagram: "https://instagram.com/isatech_ci",
    twitter: "https://twitter.com/isatech_ci"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.444864082867!2d-3.9453999999999997!3d5.336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjAnMDkuNiJOIDPCsDU2JzQzLjQiVw!5e0!3m2!1sfr!2sci!4v1234567890123!5m2!1sfr!2sci"
};

export const about = {
  history: "Fondé le 06 septembre 2001, ISATech est un établissement privé d'enseignement supérieur professionnel reconnu par l'État ivoirien. Depuis plus de deux décennies, nous formons l'élite professionnelle dans divers domaines technologiques et managériaux.",
  mission: "Notre mission est de former des professionnels compétents, innovants et éthiques, capables de répondre aux besoins du marché du travail africain et international.",
  vision: "Devenir l'institution de référence en Afrique de l'Ouest pour l'enseignement supérieur appliqué et technologique, reconnue pour l'excellence de ses programmes et l'employabilité de ses diplômés.",
  values: [
    { title: "Excellence", description: "Nous visons l'excellence académique et professionnelle dans toutes nos formations." },
    { title: "Innovation", description: "Nous encourageons la créativité et l'innovation technologique." },
    { title: "Intégrité", description: "Nous promouvons l'éthique et les valeurs morales dans l'éducation." },
    { title: "Professionnalisme", description: "Nous préparons nos étudiants aux exigences du monde professionnel." }
  ],
  recognition: "ISATech est un établissement d'enseignement supérieur privé agréé par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de Côte d'Ivoire."
};

export const filieres = [
  {
    id: "ida",
    code: "IDA",
    name: "Informatique Développeur d'Applications",
    description: "Formation spécialisée dans le développement d'applications web, mobiles et logicielles. Maîtrisez les langages de programmation modernes, les frameworks populaires et les méthodologies agiles.",
    image: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxjb21wdXRlciUyMGxhYnxlbnwwfHx8fDE3ODExNzMyODB8MA&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Développeur Web Full-Stack",
      "Développeur Mobile (iOS/Android)",
      "Analyste Programmeur",
      "Chef de Projet Informatique",
      "Ingénieur Logiciel"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "fcge",
    code: "FCGE",
    name: "Finance Comptabilité et Gestion d'Entreprise",
    description: "Formation permettant de maîtriser les techniques financières, comptables et de gestion d'entreprise. Devenez expert en analyse financière, contrôle de gestion et audit.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3ODExNzMyODd8MA&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Comptable Général",
      "Gestionnaire Financier",
      "Contrôleur de Gestion",
      "Auditeur Interne/Externe",
      "Chef Comptable"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "gec",
    code: "GEC",
    name: "Gestion Commerciale",
    description: "Formation orientée vers la vente, le marketing et le développement commercial. Développez vos compétences en négociation, stratégie commerciale et gestion de la relation client.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwzfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MHx8fHwxNzgxMTczMjg3fDA&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Responsable Commercial",
      "Conseiller Commercial",
      "Chef des Ventes",
      "Entrepreneur",
      "Chargé d'Affaires"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "cv",
    code: "CV",
    name: "Communication Visuelle",
    description: "Formation dans la création graphique, le design et les supports de communication. Maîtrisez les logiciels de création, le design thinking et la communication visuelle moderne.",
    image: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3ODExNzMyODd8MA&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Graphiste Designer",
      "Designer UI/UX",
      "Motion Designer",
      "Directeur Artistique",
      "Infographiste"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "rhcom",
    code: "RHCOM",
    name: "Ressources Humaines et Communication",
    description: "Formation en gestion du personnel et communication d'entreprise. Apprenez à gérer les talents, développer les compétences et optimiser la communication organisationnelle.",
    image: "https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3ODExNzMyODd8MA&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Responsable Ressources Humaines",
      "Chargé de Communication",
      "Consultant RH",
      "Gestionnaire du Personnel",
      "Responsable Formation"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "rit",
    code: "RIT",
    name: "Réseaux Informatiques et Télécommunications",
    description: "Formation dans les infrastructures réseaux et télécommunications. Maîtrisez la configuration, la sécurité et l'administration des réseaux d'entreprise.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MHx8fHwxNzgxMTczMjg3fDA&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Administrateur Réseau",
      "Technicien Télécommunications",
      "Expert en Cybersécurité",
      "Technicien Support Réseau",
      "Ingénieur Réseau"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "sei",
    code: "SEI",
    name: "Systèmes Électroniques et Informatiques",
    description: "Formation alliant électronique, automatisme et informatique. Devenez expert en systèmes embarqués, IoT et automatisation industrielle.",
    image: "https://images.pexels.com/photos/771317/pexels-photo-771317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    debouches: [
      "Technicien Électronique",
      "Automaticien",
      "Technicien Maintenance Industrielle",
      "Ingénieur Systèmes Embarqués",
      "Expert IoT"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "th",
    code: "TH",
    name: "Tourisme et Hôtellerie",
    description: "Formation aux métiers du tourisme, de l'accueil et de l'hôtellerie. Développez vos compétences en service client, gestion hôtelière et promotion touristique.",
    image: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc4MTE3MzI4MHww&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Réceptionniste d'Hôtel",
      "Gestionnaire Hôtelier",
      "Agent de Voyage",
      "Guide Touristique",
      "Responsable Événementiel"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  },
  {
    id: "si",
    code: "SI",
    name: "Systèmes Informatiques",
    description: "Formation spécialisée dans l'administration et la gestion des systèmes informatiques. Maîtrisez les serveurs, bases de données et infrastructures IT.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc4MTE3MzI4MHww&ixlib=rb-4.1.0&q=85",
    debouches: [
      "Administrateur Système",
      "Technicien Informatique",
      "Responsable Infrastructure IT",
      "Architecte Système",
      "Ingénieur DevOps"
    ],
    duration: "2 à 3 ans",
    diploma: "BTS / Licence Professionnelle"
  }
];

export const administration = [
  {
    id: 1,
    name: "Dr. Konan Yao",
    position: "Directeur Général",
    email: "direction@isatech.ci",
    phone: "+225 27 21 35 68 91",
    photo: "https://ui-avatars.com/api/?name=Konan+Yao&size=200&background=003366&color=ffffff&bold=true"
  },
  {
    id: 2,
    name: "Mme. Adjoua Kouassi",
    position: "Directrice des Études",
    email: "etudes@isatech.ci",
    phone: "+225 27 21 35 68 92",
    photo: "https://ui-avatars.com/api/?name=Adjoua+Kouassi&size=200&background=00BFFF&color=ffffff&bold=true"
  },
  {
    id: 3,
    name: "M. Koffi Brou",
    position: "Responsable Scolarité",
    email: "scolarite@isatech.ci",
    phone: "+225 27 21 35 68 93",
    photo: "https://ui-avatars.com/api/?name=Koffi+Brou&size=200&background=003366&color=ffffff&bold=true"
  },
  {
    id: 4,
    name: "Mme. Akissi N'Guessan",
    position: "Responsable Administrative",
    email: "admin@isatech.ci",
    phone: "+225 27 21 35 68 94",
    photo: "https://ui-avatars.com/api/?name=Akissi+Nguessan&size=200&background=00BFFF&color=ffffff&bold=true"
  }
];

export const equipments = [
  {
    id: 1,
    name: "Laboratoires Informatiques",
    description: "Salles équipées de plus de 100 ordinateurs de dernière génération avec logiciels professionnels.",
    icon: "Monitor",
    image: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxjb21wdXRlciUyMGxhYnxlbnwwfHx8fDE3ODExNzMyODB8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    name: "Salle Multimédia",
    description: "Espaces modernes pour les présentations, vidéoconférences et formations interactives.",
    icon: "Video",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc4MTE3MzI4MHww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    name: "Bibliothèque Moderne",
    description: "Plus de 5000 ouvrages, revues scientifiques et ressources numériques accessibles.",
    icon: "BookOpen",
    image: "https://images.unsplash.com/photo-1561379982-c9f0e54ff067?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MHx8fHwxNzgxMTczMjgwfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    name: "Salle de Conférence",
    description: "Auditorium de 200 places pour séminaires, conférences et événements académiques.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc4MTE3MzI4MHww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 5,
    name: "Connexion Internet Haut Débit",
    description: "WiFi gratuit sur tout le campus avec connexion fibre optique ultra-rapide.",
    icon: "Wifi",
    image: null
  },
  {
    id: 6,
    name: "Équipements Audiovisuels",
    description: "Vidéoprojecteurs, écrans interactifs et systèmes audio professionnels dans toutes les salles.",
    icon: "Projector",
    image: null
  }
];

export const statistics = [
  { label: "Années d'Excellence", value: 25, suffix: "+", icon: "Award" },
  { label: "Diplômés", value: 5000, suffix: "+", icon: "GraduationCap" },
  { label: "Étudiants Actuels", value: 1500, suffix: "+", icon: "Users" },
  { label: "Taux de Réussite", value: 95, suffix: "%", icon: "TrendingUp" },
  { label: "Partenaires", value: 200, suffix: "+", icon: "Briefcase" },
  { label: "Enseignants Qualifiés", value: 50, suffix: "+", icon: "UserCheck" }
];

export const testimonials = [
  {
    id: 1,
    name: "Kouadio Jean-Marc",
    filiere: "IDA - Promotion 2022",
    photo: "https://ui-avatars.com/api/?name=Jean+Marc&size=200&background=00BFFF&color=ffffff",
    rating: 5,
    text: "ISATech m'a permis d'acquérir des compétences solides en développement. Aujourd'hui, je travaille comme développeur full-stack dans une grande entreprise. L'enseignement pratique et les projets concrets m'ont vraiment préparé au monde professionnel."
  },
  {
    id: 2,
    name: "Aïcha Traoré",
    filiere: "FCGE - Promotion 2021",
    photo: "https://ui-avatars.com/api/?name=Aicha+Traore&size=200&background=003366&color=ffffff",
    rating: 5,
    text: "Excellente formation en comptabilité et gestion. Les professeurs sont compétents et le programme est bien structuré. Je suis maintenant contrôleuse de gestion dans une multinationale grâce à la qualité de la formation reçue à ISATech."
  },
  {
    id: 3,
    name: "Yves Koffi",
    filiere: "RIT - Promotion 2023",
    photo: "https://ui-avatars.com/api/?name=Yves+Koffi&size=200&background=00BFFF&color=ffffff",
    rating: 5,
    text: "Les infrastructures sont modernes et les équipements de qualité. ISATech offre un environnement propice à l'apprentissage. Je recommande vivement cette école à tous ceux qui veulent réussir dans les réseaux informatiques."
  },
  {
    id: 4,
    name: "Marie-Paule Diallo",
    filiere: "CV - Promotion 2022",
    photo: "https://ui-avatars.com/api/?name=Marie+Diallo&size=200&background=003366&color=ffffff",
    rating: 5,
    text: "Une formation complète en communication visuelle avec des enseignants passionnés. J'ai appris à maîtriser tous les outils de design professionnel. Aujourd'hui je dirige mon propre studio de création graphique."
  },
  {
    id: 5,
    name: "Ibrahim Sanogo",
    filiere: "GEC - Promotion 2021",
    photo: "https://ui-avatars.com/api/?name=Ibrahim+Sanogo&size=200&background=00BFFF&color=ffffff",
    rating: 5,
    text: "ISATech m'a donné toutes les clés pour réussir dans le commerce. L'accompagnement personnalisé et les stages en entreprise m'ont permis de créer ma propre société de distribution. Merci ISATech !"
  }
];

export const galleryImages = [
  {
    id: 1,
    category: "campus",
    title: "Façade Principale",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc4MTE3MzI4MHww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    category: "campus",
    title: "Campus ISATech",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc4MTE3MzI4MHww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    category: "salles",
    title: "Laboratoire Informatique",
    image: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxjb21wdXRlciUyMGxhYnxlbnwwfHx8fDE3ODExNzMyODB8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    category: "salles",
    title: "Bibliothèque",
    image: "https://images.unsplash.com/photo-1553448539-f6063db586a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MHx8fHwxNzgxMTczMjgwfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 5,
    category: "activites",
    title: "Salle de Cours",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3ODExNzMyODd8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 6,
    category: "activites",
    title: "Formation Pratique",
    image: "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3ODExNzMyODd8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 7,
    category: "vie",
    title: "Étudiants",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwzfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MHx8fHwxNzgxMTczMjg3fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 8,
    category: "vie",
    title: "Vie Étudiante",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MHx8fHwxNzgxMTczMjg3fDA&ixlib=rb-4.1.0&q=85"
  }
];

export const admissionInfo = {
  conditions: [
    "Être titulaire du Baccalauréat (toutes séries) ou équivalent",
    "Avoir un bon niveau en français (oral et écrit)",
    "Être motivé et passionné par le domaine choisi",
    "Pour certaines filières, un test d'aptitude peut être requis"
  ],
  documents: [
    "Photocopie certifiée du Baccalauréat ou diplôme équivalent",
    "Photocopie de la carte nationale d'identité ou passeport",
    "Acte de naissance",
    "04 photos d'identité récentes",
    "Certificat de visite médicale",
    "Bulletin du dernier établissement fréquenté",
    "Dossier d'inscription dûment rempli"
  ],
  modalites: [
    "Retrait du dossier d'inscription au secrétariat ou en ligne",
    "Remplir le formulaire d'inscription complet",
    "Déposer le dossier complet avec toutes les pièces requises",
    "Passer un entretien d'orientation (selon la filière)",
    "Effectuer le paiement des frais d'inscription",
    "Recevoir la confirmation d'admission"
  ],
  dates: {
    inscriptions: "Ouvertes toute l'année",
    rentree: "Septembre et Janvier"
  }
};