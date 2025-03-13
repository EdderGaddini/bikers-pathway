
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface ScrollIndicatorProps {
  showBelow?: number;
}

const ScrollIndicator = ({ showBelow = 100 }: ScrollIndicatorProps) => {
  const [show, setShow] = useState(true);
  const { t } = useLanguage();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.pageYOffset < showBelow) {
          if (!show) setShow(true);
        } else {
          if (show) setShow(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [show, showBelow]);

  const handleClick = () => {
    window.scrollTo({ 
      top: window.innerHeight, 
      behavior: 'smooth' 
    });
  };

  return (
    <div 
      className={cn(
        "fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300",
        show ? "opacity-100" : "opacity-0"
      )}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center cursor-pointer animate-bounce">
        <span className="text-darkAccent text-sm font-medium mb-1">{t('exploreMore')}</span>
        <div className="bg-darkBg/50 backdrop-blur-md p-3 rounded-full shadow-lg border border-darkAccent/20 hover:bg-darkBg/70 transition-colors">
          <ChevronDown className="h-6 w-6 text-darkAccent" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
