
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt-BR';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
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
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations,
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Check user's region on component mount
  useEffect(() => {
    const checkUserRegion = async () => {
      try {
        // Use a simple geo-IP API to check if user is from Brazil
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'BR') {
          setLanguage('pt-BR');
        }
      } catch (error) {
        console.error('Error detecting user region:', error);
      }
    };
    
    checkUserRegion();
  }, []);
  
  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
