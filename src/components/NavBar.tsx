
import React from "react";
import { Compass, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-darkBg/90 backdrop-blur-sm py-4 px-6 md:px-10 shadow-md border-b border-darkMetal/30">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-motorcycle text-darkAccent">
              <circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="M19 18.5V12a2 2 0 0 0-2-2h-2l-3.5-4a2 2 0 0 0-1.5-.7H6.2a2 2 0 0 0-1.8 1.2L3 11"/><path d="M5 18.5V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5"/>
            </svg>
            <Settings className="absolute -top-1 -right-1 h-4 w-4 text-darkAccent gear-spin opacity-70" />
          </div>
          <span className="font-display font-bold text-2xl text-darkAccent">Biker's Way</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <Compass className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/trails" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route"><path d="M3 8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3Z"/><path d="M21 12a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h8Z"/></svg>
            <span>Routes</span>
          </Link>
          <Link to="/community" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Community</span>
          </Link>
          <Link to="/about" className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span>About</span>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-darkText hover:text-darkAccent hover:bg-transparent"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Join Button */}
        <Button className="hidden md:flex bg-darkAccent hover:bg-darkAccent/90 text-darkBg">
          <Settings className="h-4 w-4 mr-1 gear-spin" /> Join Now
        </Button>
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
              <span>Home</span>
            </Link>
            <Link 
              to="/trails" 
              className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route"><path d="M3 8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3Z"/><path d="M21 12a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h8Z"/></svg>
              <span>Routes</span>
            </Link>
            <Link 
              to="/community" 
              className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span>Community</span>
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-darkText hover:text-darkAccent transition-colors flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <span>About</span>
            </Link>
            <Button className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg w-full justify-center">
              <Settings className="h-4 w-4 mr-1 gear-spin" /> Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
