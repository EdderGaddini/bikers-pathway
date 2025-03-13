import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt-BR';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
  changeLanguage: (lang: string) => void;  // Added this method
};

// Default translations
const translations = {
  en: {
    home: 'Home',
    routes: 'Routes',
    community: 'Community',
    about: 'About',
    joinNow: 'Join Now',
    exploreMore: 'Explore More',
    exploreRoutes: 'Explore Routes',
    joinCommunity: 'Join Biker Community',
    regionsTitle: 'Regions Covered',
    regionsCount: '25+ Territories',
    roadCollectionTitle: 'Road Collection',
    roadCollectionCount: '300+ Routes',
    mechanicalTipsTitle: 'Mechanical Tips',
    mechanicalTipsCount: '150+ Guides',
    // Community Section Translations
    joinCommunityHeader: 'Join Our Biker Community',
    communityDescription: 'Connect with fellow motorcycle enthusiasts, join group rides, and share your adventures with passionate riders.',
    groupRides: 'Group Rides',
    groupRidesDescription: 'Join scheduled group rides organized by our community members across various skill levels and routes.',
    viewCalendar: 'View Calendar',
    forumsDiscussions: 'Forums & Discussions',
    forumsDescription: 'Share tips, ask questions, and discuss everything motorcycle-related with our friendly community.',
    joinDiscussion: 'Join Discussion',
    ralliesEvents: 'Rallies & Events',
    ralliesDescription: 'Participate in motorcycle rallies, competitions, and biker events organized throughout the year.',
    exploreEvents: 'Explore Events',
    communityPhotos: 'Community Photos',
    mountainRoadTrip: 'Mountain Road Trip',
    weekendGroupRide: 'Weekend Group Ride',
    sunsetRide: 'Sunset Ride',
    maintenanceDay: 'Maintenance Day',
    viewMorePhotos: 'View More Photos',
    readyToJoin: 'Ready to join our growing biker community?',
    createAccountToday: 'Create your account today and connect with thousands of motorcycle enthusiasts, discover new routes, and share your riding experiences.',
    signUpNow: 'Sign Up Now',
    featuredRoutes: 'Featured Routes',
    discoverNewRoutes: 'Discover new exciting motorcycle routes',
    allRoutes: 'All Routes',
    exploreAllRoutes: 'Explore all available routes',
    popularRoutes: 'Popular Routes',
    findMostLoved: 'Find the most loved routes',
    newlyAdded: 'Newly Added',
    checkLatestRoutes: 'Check the latest routes',
    loginRegister: 'Login / Register',
    profile: 'Profile',
    heroHeading: 'Discover the Perfect Road for Your Journey',
    // New translations
    heroParagraph: 'Join our community of passionate motorcyclists exploring breathtaking roads, sharing mechanical insights, and connecting with fellow riders who appreciate the perfect balance of engineering and freedom.',
    featuredRoutesHeading: 'Featured Motorcycle Routes',
    featuredRoutesDescription: 'Discover our handpicked selection of the most breathtaking motorcycle routes, engineered for the perfect riding experience for every skill level.',
    ourStory: 'OUR STORY',
    aboutBikersWays: 'About Biker\'s Ways',
    aboutParagraph1: 'Founded by a group of passionate motorcyclists and mechanical engineers, Biker\'s Ways was created to help fellow riders discover the perfect balance between mechanical precision and the freedom of the open road.',
    aboutParagraph2: 'Our mission is to promote motorcycle culture as a technically rewarding lifestyle while building a supportive community that shares mechanical knowledge, route experiences, and the engineering joy of riding.',
    engineeringPassion: 'Engineering Passion',
    engineeringPassionDesc: 'Built by engineers for bikers',
    technicalRoutes: 'Technical Routes',
    technicalRoutesDesc: 'Precision routes for all levels',
    mechanicalSupport: 'Mechanical Support',
    mechanicalSupportDesc: 'Expert motorcycle maintenance tips',
    riderGuidance: 'Rider Guidance',
    riderGuidanceDesc: 'Engineered for your journey',
    stayUpdated: 'Stay Updated with Biker\'s Way',
    newsletterDesc: 'Subscribe to our newsletter and be the first to know about new trails, community events, and exclusive cycling tips from our experts.',
    subscribe: 'Subscribe Now',
    privacyNotice: 'We respect your privacy. Unsubscribe at any time.',
  },
  'pt-BR': {
    home: 'Início',
    routes: 'Rotas',
    community: 'Comunidade',
    about: 'Sobre',
    joinNow: 'Junte-se',
    exploreMore: 'Explore Mais',
    exploreRoutes: 'Explorar Rotas',
    joinCommunity: 'Juntar-se à Comunidade',
    regionsTitle: 'Regiões Cobertas',
    regionsCount: '25+ Territórios',
    roadCollectionTitle: 'Coleção de Estradas',
    roadCollectionCount: '300+ Rotas',
    mechanicalTipsTitle: 'Dicas Mecânicas',
    mechanicalTipsCount: '150+ Guias',
    // Community Section Translations
    joinCommunityHeader: 'Junte-se à Nossa Comunidade de Motociclistas',
    communityDescription: 'Conecte-se com outros entusiastas de motocicletas, participe de passeios em grupo e compartilhe suas aventuras com pilotos apaixonados.',
    groupRides: 'Passeios em Grupo',
    groupRidesDescription: 'Participe de passeios em grupo organizados pelos membros da nossa comunidade em vários níveis de habilidade e rotas.',
    viewCalendar: 'Ver Calendário',
    forumsDiscussions: 'Fóruns e Discussões',
    forumsDescription: 'Compartilhe dicas, faça perguntas e discuta tudo relacionado a motocicletas com nossa comunidade amigável.',
    joinDiscussion: 'Participar da Discussão',
    ralliesEvents: 'Encontros e Eventos',
    ralliesDescription: 'Participe de encontros de motocicletas, competições e eventos para motociclistas organizados ao longo do ano.',
    exploreEvents: 'Explorar Eventos',
    communityPhotos: 'Fotos da Comunidade',
    mountainRoadTrip: 'Viagem na Estrada da Montanha',
    weekendGroupRide: 'Passeio em Grupo no Final de Semana',
    sunsetRide: 'Passeio ao Pôr do Sol',
    maintenanceDay: 'Dia de Manutenção',
    viewMorePhotos: 'Ver Mais Fotos',
    readyToJoin: 'Pronto para se juntar à nossa crescente comunidade de motociclistas?',
    createAccountToday: 'Crie sua conta hoje e conecte-se com milhares de entusiastas de motocicletas, descubra novas rotas e compartilhe suas experiências de pilotagem.',
    signUpNow: 'Cadastre-se Agora',
    featuredRoutes: 'Rotas em Destaque',
    discoverNewRoutes: 'Descubra novas rotas emocionantes para motociclistas',
    allRoutes: 'Todas as Rotas',
    exploreAllRoutes: 'Explore todas as rotas disponíveis',
    popularRoutes: 'Rotas Populares',
    findMostLoved: 'Encontre as rotas mais amadas',
    newlyAdded: 'Recém Adicionadas',
    checkLatestRoutes: 'Confira as rotas mais recentes',
    loginRegister: 'Login / Registrar',
    profile: 'Perfil',
    heroHeading: 'Descubra a Estrada Perfeita para Sua Jornada',
    // New translations
    heroParagraph: 'Junte-se à nossa comunidade de motociclistas apaixonados explorando estradas deslumbrantes, compartilhando conhecimentos mecânicos e conectando-se com outros pilotos que apreciam o equilíbrio perfeito entre engenharia e liberdade.',
    featuredRoutesHeading: 'Rotas de Motocicleta em Destaque',
    featuredRoutesDescription: 'Descubra nossa seleção especial das rotas de motocicleta mais impressionantes, projetadas para a experiência de pilotagem perfeita para todos os níveis de habilidade.',
    ourStory: 'NOSSA HISTÓRIA',
    aboutBikersWays: 'Sobre Biker\'s Ways',
    aboutParagraph1: 'Fundada por um grupo de motociclistas apaixonados e engenheiros mecânicos, a Biker\'s Ways foi criada para ajudar outros pilotos a descobrir o equilíbrio perfeito entre a precisão mecânica e a liberdade da estrada aberta.',
    aboutParagraph2: 'Nossa missão é promover a cultura da motocicleta como um estilo de vida tecnicamente gratificante, construindo uma comunidade de apoio que compartilha conhecimento mecânico, experiências de rotas e a alegria de engenharia ao pilotar.',
    engineeringPassion: 'Paixão pela Engenharia',
    engineeringPassionDesc: 'Construído por engenheiros para motociclistas',
    technicalRoutes: 'Rotas Técnicas',
    technicalRoutesDesc: 'Rotas de precisão para todos os níveis',
    mechanicalSupport: 'Suporte Mecânico',
    mechanicalSupportDesc: 'Dicas de manutenção especializadas',
    riderGuidance: 'Orientação ao Piloto',
    riderGuidanceDesc: 'Projetado para sua jornada',
    stayUpdated: 'Mantenha-se Atualizado com a Biker\'s Way',
    newsletterDesc: 'Assine nossa newsletter e seja o primeiro a saber sobre novas trilhas, eventos comunitários e dicas exclusivas de ciclismo de nossos especialistas.',
    subscribe: 'Inscreva-se Agora',
    privacyNotice: 'Respeitamos sua privacidade. Cancele sua inscrição a qualquer momento.',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations,
  t: (key) => key,
  changeLanguage: () => {}, // Added default implementation
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Check user's preferred language or stored language on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'pt-BR' || storedLanguage === 'en') {
      setLanguage(storedLanguage);
    } else {
      // Check browser language
      const browserLang = navigator.language;
      if (browserLang.startsWith('pt')) {
        setLanguage('pt-BR');
        localStorage.setItem('language', 'pt-BR');
      } else {
        localStorage.setItem('language', 'en');
      }
    }
  }, []);
  
  // Function to change language
  const changeLanguage = (lang: string) => {
    if (lang === 'pt' || lang === 'pt-BR') {
      setLanguage('pt-BR');
      localStorage.setItem('language', 'pt-BR');
    } else {
      setLanguage('en');
      localStorage.setItem('language', 'en');
    }
  };
  
  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
