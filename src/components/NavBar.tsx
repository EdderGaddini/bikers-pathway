
import React from "react";
import { Compass, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToAppDownload = () => {
    const appSection = document.getElementById("app-download");
    if (appSection) {
      appSection.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Better motorcycle icon - more modern and cleaner
  const BikerIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-darkAccent"
    >
      <path d="M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" />
      <path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" />
      <path d="M5 17h12" stroke="currentColor" />
      <path d="M7 13h7" stroke="currentColor" />
      <path d="M15 8v5l-4-5H8.5" stroke="currentColor" />
      <path d="M5 8v1" stroke="currentColor" />
      <path d="M7.5 5.5A.5.5 0 0 1 8 5h3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H11l-2 2" stroke="currentColor" />
    </svg>
  );

  return (
    <nav className="sticky top-0 z-50 bg-darkBg/90 backdrop-blur-sm py-4 px-6 md:px-10 shadow-md border-b border-darkMetal/30">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <BikerIcon />
            <Settings className="absolute -top-1 -right-1 h-4 w-4 text-darkAccent gear-spin opacity-70" />
          </div>
          <span className="font-display font-bold text-2xl text-darkAccent">Biker's Ways</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <Compass className="h-4 w-4" />
            <span>{t('home')}</span>
          </Link>
          <Link to="/trails" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route"><path d="M3 8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3Z"/><path d="M21 12a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h8Z"/></svg>
            <span>{t('routes')}</span>
          </Link>
          <Link to="/community" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>{t('community')}</span>
          </Link>
          <Link to="/about" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span>{t('about')}</span>
          </Link>
          
          {/* Join Now button moved to be with the menu items */}
          <Button 
            className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg ml-2"
            onClick={scrollToAppDownload}
          >
            <Settings className="h-4 w-4 mr-1 gear-spin" /> {t('joinNow')}
          </Button>
        </div>
        
        {/* Language selector moved to the right side */}
        <div className="hidden md:flex items-center">
          <LanguageSelector />
        </div>
        
        {/* Mobile - Both menu toggle and language selector */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSelector />
          <Button 
            variant="ghost" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-darkText hover:text-darkAccent hover:bg-transparent"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-darkBg/95 backdrop-blur-sm border-b border-darkMetal/30 px-6 py-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Compass className="h-4 w-4" />
              <span>{t('home')}</span>
            </Link>
            <Link 
              to="/trails" 
              className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route"><path d="M3 8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3Z"/><path d="M21 12a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h8Z"/></svg>
              <span>{t('routes')}</span>
            </Link>
            <Link 
              to="/community" 
              className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>{t('community')}</span>
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <span>{t('about')}</span>
            </Link>
            <Button 
              className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg w-full justify-center"
              onClick={scrollToAppDownload}
            >
              <Settings className="h-4 w-4 mr-1 gear-spin" /> {t('joinNow')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
