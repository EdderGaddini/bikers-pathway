
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ScrollIndicatorProps {
  showBelow?: number;
}

const ScrollIndicator = ({ showBelow = 100 }: ScrollIndicatorProps) => {
  const [show, setShow] = useState(false);
  
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
        <span className="text-darkAccent text-sm font-medium mb-1">Explore More</span>
        <div className="bg-darkAccent/20 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-darkAccent/30 transition-colors">
          <ChevronDown className="h-8 w-8 text-darkAccent" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
