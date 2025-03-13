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
