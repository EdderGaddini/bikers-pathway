
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  showBelow?: number;
}

const ScrollIndicator = ({ showBelow = 100 }: ScrollIndicatorProps) => {
  const [show, setShow] = useState(true);
  
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

  // Custom motorcycle icon SVG
  const MotorcycleIcon = () => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-darkAccent"
    >
      <path d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
      <path d="M17 11l-2-6H9L7 11h10z" />
      <path d="M5 16c0-2.4 1.6-4 4-4h6c2.4 0 4 1.6 4 4" />
      <circle cx="7" cy="16" r="2" />
      <circle cx="17" cy="16" r="2" />
    </svg>
  );

  return (
    <div 
      className={cn(
        "fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300",
        show ? "opacity-100" : "opacity-0"
      )}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center cursor-pointer animate-bounce">
        <span className="text-darkAccent text-sm font-medium mb-1">Explore More</span>
        <div className="bg-darkBg/50 backdrop-blur-md p-3 rounded-full shadow-lg border border-darkAccent/20 hover:bg-darkBg/70 transition-colors">
          <MotorcycleIcon />
          <ChevronDown className="h-5 w-5 text-darkAccent mt-1" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
