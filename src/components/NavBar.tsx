
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-darkBg border-b border-darkMetal/30 sticky top-0 z-50">
      <div className="container max-w-7xl py-3 px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl text-darkText">
          Riders<span className="text-darkAccent">Ways</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-darkText hover:text-darkAccent">
            {t('home')}
          </Link>
          <Link to="/routes" className="text-darkText hover:text-darkAccent">
            {t('routes')}
          </Link>
          <Link to="/community" className="text-darkText hover:text-darkAccent">
            {t('community')}
          </Link>
          <Link to="/about" className="text-darkText hover:text-darkAccent">
            {t('about')}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Link to="/auth">
            <Button className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg">
              {t('joinNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
