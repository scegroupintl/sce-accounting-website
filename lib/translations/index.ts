import { Language } from "../context/LanguageContext";

// Translation keys organized by component/page
export interface Translations {
  // Common/Global
  common: {
    contact: string;
    services: string;
    aboutUs: string;
    freeConsultation: string;
    ourServices: string;
    followUs: string;
    allRightsReserved: string;
  };

  // Navigation
  nav: {
    services: string;
    aboutUs: string;
    contact: string;
    freeConsultation: string;
  };

  // Home Page
  home: {
    heroPreEmphasis: string;
    heroTitle: string;
    heroPostEmphasis: string;
    heroSubtitle: string;
    heroDescription: string;
    contactButton: string;
    servicesButton: string;
    servicesTitle: string;
    servicesDescription: string;
    taxReturns: {
      title: string;
      description: string;
    };
    taxPlanning: {
      title: string;
      description: string;
    };
    generalAccounting: {
      title: string;
      description: string;
    };
    payroll: {
      title: string;
      description: string;
    };
    whyChooseUsTitle: string;
    whyChooseUsDescription: string;
    experience: {
      title: string;
      description: string;
    };
    accuracy: {
      title: string;
      description: string;
    };
    personalized: {
      title: string;
      description: string;
    };
    support: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
      contactNow: string;
    };
  };

  // About Page
  about: {
    heroTitle: string;
    heroDescription: string;
    ourStoryTitle: string;
    storyParagraph1: string;
    storyParagraph2: string;
    storyParagraph3: string;
    keyDataTitle: string;
    experienceYears: string;
    happyClients: string;
    projectsCompleted: string;
    teamMembers: string;
    valuesTitle: string;
    integrity: {
      title: string;
      description: string;
    };
    excellence: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
    commitment: {
      title: string;
      description: string;
    };
    teamTitle: string;
    teamDescription: string;
    certifiedTeamTitle: string;
    certifiedTeamDescription: string;
    professionalCertifications: {
      title: string;
      cpa: string;
      taxSpecialists: string;
      quickbooksProAdvisors: string;
    };
    industryExperience: {
      title: string;
      smallMediumBusinesses: string;
      independentProfessionals: string;
      servicesCommerce: string;
    };
    continuingEducation: {
      title: string;
      annualTaxUpdate: string;
      specializedSeminars: string;
      additionalCertifications: string;
    };
    ceoTitle: string;
    ceoDescription: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    missionAndValuesTitle: string;
    missionAndValuesDescription: string;
  };

  // Contact Form
  contact: {
    title: string;
    description: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    selectService: string;
    message: string;
    messagePlaceholder: string;
    sendMessage: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    serviceOptions: {
      taxReturns: string;
      generalAccounting: string;
      taxPlanning: string;
      payroll: string;
      other: string;
    };
    contactInfo: {
      getInTouch: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
      mondayFriday: string;
      saturday: string;
      sunday: string;
    };
  };

  // Footer
  footer: {
    allRightsReserved: string;
    contact: string;
    followUs: string;
  };

  // Metadata
  meta: {
    title: string;
    description: string;
  };
}

// English translations (default)
const englishTranslations: Translations = {
  common: {
    contact: "Contact",
    services: "Services",
    aboutUs: "About Us",
    freeConsultation: "Free Consultation",
    ourServices: "Our Services",
    followUs: "Follow us:",
    allRightsReserved: "All rights reserved.",
  },

  nav: {
    services: "Services",
    aboutUs: "About Us",
    contact: "Contact",
    freeConsultation: "Free Consultation",
  },

  home: {
    heroPreEmphasis: "Trusted",
    heroTitle: "Accounting Services",
    heroPostEmphasis: "",
    heroSubtitle: "",
    heroDescription:
      "We provide professional accounting services to grow your business with the peace of mind of having your finances in order.",
    contactButton: "Contact",
    servicesButton: "Our Services",
    servicesTitle: "Our Services",
    servicesDescription:
      "We offer a complete range of accounting services to meet all your business needs.",
    taxReturns: {
      title: "Tax Returns",
      description:
        "We prepare both personal and business tax returns in a timely and accurate manner to maximize your benefits.",
    },
    taxPlanning: {
      title: "Tax Planning",
      description:
        "We develop personalized tax strategies to minimize your tax obligations and optimize your long-term finances.",
    },
    generalAccounting: {
      title: "General Accounting",
      description:
        "We provide comprehensive accounting services including financial statement preparation, account reconciliation, and ongoing bookkeeping support to ensure your records are accurate and up-to-date.",
    },
    payroll: {
      title: "Payroll Services",
      description:
        "We handle all aspects of payroll processing including employee payments, tax withholdings, and compliance with federal and state regulations to ensure accurate and timely payroll management.",
    },
    whyChooseUsTitle: "Why Choose Us?",
    whyChooseUsDescription:
      "We stand out for our commitment to excellence and personalized attention to each client.",
    experience: {
      title: "Experience",
      description: "More than 15 years providing quality accounting services.",
    },
    accuracy: {
      title: "Accuracy",
      description:
        "We ensure precision in every calculation and financial record.",
    },
    personalized: {
      title: "Personalized Service",
      description:
        "Each client receives individual attention tailored to their specific needs.",
    },
    support: {
      title: "Ongoing Support",
      description:
        "We are available to answer your questions and provide guidance year-round.",
    },
    cta: {
      title: "Request a Free Consultation",
      description:
        "Let us evaluate your accounting needs at no cost. Our experts will be happy to help you.",
      contactNow: "Contact Now",
    },
  },

  about: {
    heroTitle: "About Us",
    heroDescription:
      "With over 15 years of experience, SCE Accounting LLC is your trusted partner in accounting and tax services.",
    ourStoryTitle: "Our Story",
    storyParagraph1:
      "SCE Accounting LLC was founded with the vision of providing exceptional accounting services to businesses and individuals. Since our inception, we have been committed to excellence, integrity, and personalized service.",
    storyParagraph2:
      "Over the years, we have grown from a small practice to become a team of experienced professionals, always maintaining our focus on close client relationships and attention to detail.",
    storyParagraph3:
      "Today, we continue to evolve to meet our clients' changing needs, integrating the latest technologies with proven methods and deep expertise in the accounting field.",
    keyDataTitle: "Key Facts",
    experienceYears: "15+ Years of Experience",
    happyClients: "500+ Happy Clients",
    projectsCompleted: "1,000+ Projects Completed",
    teamMembers: "10+ Team Members",
    valuesTitle: "Our Values",
    integrity: {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our interactions and services.",
    },
    excellence: {
      title: "Excellence",
      description:
        "We strive for perfection in every task we perform for our clients.",
    },
    innovation: {
      title: "Innovation",
      description:
        "We adopt the latest technologies and methods to improve our services.",
    },
    commitment: {
      title: "Commitment",
      description:
        "We are dedicated to the long-term success of our clients and their businesses.",
    },
    teamTitle: "Our Team",
    teamDescription:
      "We are a team of certified professionals passionate about accounting and committed to our clients' success.",
    certifiedTeamTitle: "Certified Professional Team",
    certifiedTeamDescription:
      "Our team consists of Certified Public Accountants (CPAs) and tax specialists with extensive experience across various industries. Each team member stays current with the latest tax regulations and accounting best practices.",
    professionalCertifications: {
      title: "Professional Certifications",
      cpa: "Certified Public Accountants (CPA)",
      taxSpecialists: "Tax Specialists",
      quickbooksProAdvisors: "QuickBooks ProAdvisors",
    },
    industryExperience: {
      title: "Industry Experience",
      smallMediumBusinesses: "Small and medium businesses",
      independentProfessionals: "Independent professionals",
      servicesCommerce: "Services and commerce",
    },
    continuingEducation: {
      title: "Continuing Education",
      annualTaxUpdate: "Annual tax updates",
      specializedSeminars: "Specialized seminars",
      additionalCertifications: "Additional certifications",
    },
    ceoTitle: "CEO & Founder",
    ceoDescription:
      "With over 15 years of experience in accounting and taxation, our CEO leads the team with vision and dedication to provide the best service to our clients.",
    mission: {
      title: "Our Mission",
      description:
        "To provide exceptional accounting and tax services that empower our clients to make informed financial decisions, meet their tax obligations, and achieve their business goals with confidence.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be the premier accounting firm, recognized for our excellence, integrity, and commitment to our clients' success, establishing lasting relationships based on trust and exceptional results.",
    },
    missionAndValuesTitle: "Our Mission and Values",
    missionAndValuesDescription:
      "We are guided by solid principles that define the way we serve our clients and build lasting relationships.",
  },

  contact: {
    title: "Contact Us",
    description:
      "Get in touch with us to discuss how we can help with your accounting needs.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    service: "Service of Interest",
    selectService: "Select a service...",
    message: "Message",
    messagePlaceholder: "Tell us how we can help you...",
    sendMessage: "Send Message",
    sending: "Sending message...",
    successMessage: "Message sent successfully!",
    errorMessage: "Error sending message",
    serviceOptions: {
      taxReturns: "Tax Returns",
      generalAccounting: "General Accounting",
      taxPlanning: "Tax Planning",
      payroll: "Payroll Services",
      other: "Other",
    },
    contactInfo: {
      getInTouch: "Get in Touch",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Business Hours",
      mondayFriday: "Monday - Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: 10:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
  },

  footer: {
    allRightsReserved: "All rights reserved.",
    contact: "Contact:",
    followUs: "Follow us:",
  },

  meta: {
    title: "SCE Accounting Services",
    description: "Providing reliable accounting services for your business.",
  },
};

// Spanish translations
const spanishTranslations: Translations = {
  common: {
    contact: "Contacto",
    services: "Servicios",
    aboutUs: "Sobre Nosotros",
    freeConsultation: "Consulta Gratuita",
    ourServices: "Nuestros Servicios",
    followUs: "Síguenos en:",
    allRightsReserved: "Todos los derechos reservados.",
  },

  nav: {
    services: "Servicios",
    aboutUs: "Sobre Nosotros",
    contact: "Contacto",
    freeConsultation: "Consulta Gratuita",
  },

  home: {
    heroPreEmphasis: "",
    heroTitle: "Servicios Contables de",
    heroPostEmphasis: "Confianza",
    heroSubtitle: "",
    heroDescription:
      "Brindamos servicios contables profesionales para hacer crecer su negocio con la tranquilidad de tener sus finanzas en orden.",
    contactButton: "Contacto",
    servicesButton: "Nuestros Servicios",
    servicesTitle: "Nuestros Servicios",
    servicesDescription:
      "Ofrecemos una gama completa de servicios contables para satisfacer todas las necesidades de su empresa.",
    taxReturns: {
      title: "Declaraciones de Impuestos",
      description:
        "Preparamos declaraciones de impuestos tanto personales como empresariales de manera oportuna y precisa para maximizar sus beneficios.",
    },
    taxPlanning: {
      title: "Planificación Fiscal",
      description:
        "Desarrollamos estrategias fiscales personalizadas para minimizar sus obligaciones tributarias y optimizar sus finanzas a largo plazo.",
    },
    generalAccounting: {
      title: "Contabilidad General",
      description:
        "Proporcionamos servicios integrales de contabilidad incluyendo preparación de estados financieros, conciliación de cuentas y soporte continuo de teneduría de libros para garantizar que sus registros sean precisos y estén actualizados.",
    },
    payroll: {
      title: "Servicios de Nómina",
      description:
        "Manejamos todos los aspectos del procesamiento de nómina incluyendo pagos a empleados, retenciones de impuestos y cumplimiento de regulaciones federales y estatales para garantizar una gestión de nómina precisa y oportuna.",
    },
    whyChooseUsTitle: "¿Por Qué Elegirnos?",
    whyChooseUsDescription:
      "Nos destacamos por nuestro compromiso con la excelencia y la atención personalizada a cada cliente.",
    experience: {
      title: "Experiencia",
      description: "Más de 15 años brindando servicios contables de calidad.",
    },
    accuracy: {
      title: "Precisión",
      description:
        "Garantizamos exactitud en cada cálculo y registro financiero.",
    },
    personalized: {
      title: "Servicio Personalizado",
      description:
        "Cada cliente recibe atención individual adaptada a sus necesidades específicas.",
    },
    support: {
      title: "Soporte Continuo",
      description:
        "Estamos disponibles para responder sus preguntas y brindar orientación durante todo el año.",
    },
    cta: {
      title: "Solicite una Consulta Gratuita",
      description:
        "Permítanos evaluar sus necesidades contables sin costo alguno. Nuestros expertos estarán encantados de ayudarle.",
      contactNow: "Contactar Ahora",
    },
  },

  about: {
    heroTitle: "Sobre Nosotros",
    heroDescription:
      "Con más de 15 años de experiencia, SCE Accounting LLC es su socio de confianza en servicios contables y fiscales.",
    ourStoryTitle: "Nuestra Historia",
    storyParagraph1:
      "SCE Accounting LLC fue fundada con la visión de brindar servicios contables excepcionales a empresas y personas. Desde nuestros inicios, hemos estado comprometidos con la excelencia, integridad y el servicio personalizado.",
    storyParagraph2:
      "A lo largo de los años, hemos crecido desde una pequeña práctica hasta convertirnos en un equipo de profesionales experimentados, siempre manteniendo nuestro enfoque en las relaciones cercanas con nuestros clientes y la atención al detalle.",
    storyParagraph3:
      "Hoy, continuamos evolucionando para satisfacer las necesidades cambiantes de nuestros clientes, integrando las últimas tecnologías con métodos probados y experiencia profunda en el campo contable.",
    keyDataTitle: "Datos Clave",
    experienceYears: "15+ Años de Experiencia",
    happyClients: "500+ Clientes Satisfechos",
    projectsCompleted: "1,000+ Proyectos Completados",
    teamMembers: "10+ Miembros del Equipo",
    valuesTitle: "Nuestros Valores",
    integrity: {
      title: "Integridad",
      description:
        "Mantenemos los más altos estándares éticos en todas nuestras interacciones y servicios.",
    },
    excellence: {
      title: "Excelencia",
      description:
        "Nos esforzamos por la perfección en cada tarea que realizamos para nuestros clientes.",
    },
    innovation: {
      title: "Innovación",
      description:
        "Adoptamos las últimas tecnologías y métodos para mejorar nuestros servicios.",
    },
    commitment: {
      title: "Compromiso",
      description:
        "Estamos dedicados al éxito a largo plazo de nuestros clientes y sus negocios.",
    },
    teamTitle: "Nuestro Equipo",
    teamDescription:
      "Somos un equipo de profesionales certificados apasionados por la contabilidad y comprometidos con el éxito de nuestros clientes.",
    certifiedTeamTitle: "Equipo de Profesionales Certificados",
    certifiedTeamDescription:
      "Nuestro equipo está compuesto por contadores públicos certificados (CPA) y especialistas en impuestos con amplia experiencia en diversas industrias. Cada miembro de nuestro equipo se mantiene actualizado con las últimas regulaciones fiscales y mejores prácticas contables.",
    professionalCertifications: {
      title: "Certificaciones Profesionales",
      cpa: "Contadores Públicos Certificados (CPA)",
      taxSpecialists: "Especialistas en Impuestos",
      quickbooksProAdvisors: "QuickBooks ProAdvisors",
    },
    industryExperience: {
      title: "Experiencia en Industrias",
      smallMediumBusinesses: "Pequeñas y medianas empresas",
      independentProfessionals: "Profesionales independientes",
      servicesCommerce: "Servicios y comercio",
    },
    continuingEducation: {
      title: "Educación Continua",
      annualTaxUpdate: "Actualización fiscal anual",
      specializedSeminars: "Seminarios especializados",
      additionalCertifications: "Certificaciones adicionales",
    },
    ceoTitle: "CEO y Fundador",
    ceoDescription:
      "Con más de 15 años de experiencia en contabilidad y fiscalidad, nuestro CEO lidera el equipo con visión y dedicación para brindar el mejor servicio a nuestros clientes.",
    mission: {
      title: "Nuestra Misión",
      description:
        "Proporcionar servicios contables y fiscales excepcionales que empoderen a nuestros clientes para tomar decisiones financieras informadas, cumplir con sus obligaciones tributarias y alcanzar sus objetivos empresariales con confianza.",
    },
    vision: {
      title: "Nuestra Visión",
      description:
        "Ser la firma contable de referencia, reconocida por nuestra excelencia, integridad y compromiso con el éxito de nuestros clientes, estableciendo relaciones duraderas basadas en la confianza y resultados excepcionales.",
    },
    missionAndValuesTitle: "Nuestra Misión y Valores",
    missionAndValuesDescription:
      "Nos guiamos por principios sólidos que definen la manera en que servimos a nuestros clientes y construimos relaciones duraderas.",
  },

  contact: {
    title: "Contáctanos",
    description:
      "Póngase en contacto con nosotros para discutir cómo podemos ayudar con sus necesidades contables.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono",
    service: "Servicio de Interés",
    selectService: "Seleccione un servicio...",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos cómo podemos ayudarte...",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando mensaje...",
    successMessage: "Mensaje enviado con éxito!",
    errorMessage: "Error al enviar mensaje",
    serviceOptions: {
      taxReturns: "Declaraciones de Impuestos",
      generalAccounting: "Contabilidad General",
      taxPlanning: "Planificación Fiscal",
      payroll: "Servicios de Nómina",
      other: "Otro",
    },
    contactInfo: {
      getInTouch: "Ponte en Contacto",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo Electrónico",
      hours: "Horario de Atención",
      mondayFriday: "Lunes - Viernes: 9:00 AM - 6:00 PM",
      saturday: "Sábado: 10:00 AM - 2:00 PM",
      sunday: "Domingo: Cerrado",
    },
  },

  footer: {
    allRightsReserved: "Todos los derechos reservados.",
    contact: "Contacto:",
    followUs: "Síguenos en:",
  },

  meta: {
    title: "SCE Accounting Services",
    description: "Brindando servicios contables confiables para su negocio.",
  },
};

// Translations object
export const translations: Record<Language, Translations> = {
  en: englishTranslations,
  es: spanishTranslations,
};

// Helper function to get nested translation
export const getNestedTranslation = (obj: any, path: string): string => {
  return path.split(".").reduce((current, key) => current?.[key], obj) || "";
};

// Translation function
export const translate = (language: Language, key: string): string => {
  const translation = getNestedTranslation(translations[language], key);
  return typeof translation === "string" ? translation : key;
};
