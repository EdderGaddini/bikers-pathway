
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Settings, Compass, Route, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden mechanical-bg bg-darkBg">
      {/* Decorative mechanical elements */}
      <div className="absolute top-20 right-20 opacity-20 hidden lg:block">
        <Settings className="h-32 w-32 text-darkText gear-spin" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-20 hidden lg:block">
        <Settings className="h-24 w-24 text-darkText gear-spin-reverse" />
      </div>
      <div className="absolute top-40 left-1/3 opacity-15 hidden lg:block">
        <Settings className="h-16 w-16 text-darkAccent gear-spin" />
      </div>
      
      {/* Background with overlay */}
      <div 
        className="relative min-h-[85vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=1600&auto=format&blur=2')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-darkBg/95 to-darkBg/70"></div>
        
        <div className="container max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-6 w-6 text-darkAccent gear-spin" />
              <Compass className="h-6 w-6 text-darkLeaf" />
              <Route className="h-6 w-6 text-darkAccent" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-darkText mb-4 leading-tight">
              <span className="text-darkAccent">{t('heroHeading')}</span>
            </h1>
            <p className="text-lg md:text-xl text-darkText/80 mb-8">
              Join our community of passionate motorcyclists exploring breathtaking roads, sharing mechanical insights, and connecting with fellow riders who appreciate the perfect balance of engineering and freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/routes">
                <Button className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg font-semibold text-lg px-8 py-6 flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  {t('exploreRoutes')}
                </Button>
              </Link>
              <Link to="/auth">
                <Button 
                  variant="outline" 
                  className="border-darkText/30 text-darkText hover:bg-darkText/10 text-lg px-8 py-6 flex items-center gap-2"
                >
                  <Settings className="h-5 w-5 gear-spin" />
                  {t('joinCommunity')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Add the scroll indicator */}
        <ScrollIndicator showBelow={100} />
      </div>
      
      {/* Trail stats banner */}
      <div className="bg-darkBg border-t border-darkMetal/30">
        <div className="container max-w-7xl mx-auto py-6 px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-3 rounded-full bg-darkMetal/20">
                <MapPin className="h-6 w-6 text-darkAccent" />
              </div>
              <div>
                <p className="text-darkText/60 text-sm">{t('regionsTitle')}</p>
                <p className="text-darkText font-semibold text-lg">{t('regionsCount')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="p-3 rounded-full bg-darkMetal/20">
                <Route className="h-6 w-6 text-darkLeaf" />
              </div>
              <div>
                <p className="text-darkText/60 text-sm">{t('roadCollectionTitle')}</p>
                <p className="text-darkText font-semibold text-lg">{t('roadCollectionCount')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <div className="p-3 rounded-full bg-darkMetal/20">
                <Settings className="h-6 w-6 text-darkAccent gear-spin" />
              </div>
              <div>
                <p className="text-darkText/60 text-sm">{t('mechanicalTipsTitle')}</p>
                <p className="text-darkText font-semibold text-lg">{t('mechanicalTipsCount')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
