
import React from "react";
import { Mail, Instagram, Facebook, Twitter, Settings, Compass, Route, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Custom chopper motorcycle SVG icon
  const ChopperIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-darkAccent"
    >
      <path d="M20 16L15 16L3 16" stroke="currentColor" />
      <circle cx="5" cy="19" r="3" stroke="currentColor" />
      <circle cx="19" cy="19" r="3" stroke="currentColor" />
      <path d="M7 19L17 19" stroke="currentColor" />
      <path d="M15 15V12C15 10.6667 15 6 15 6C15 5.5 15 4 16 4H17C17.5 4 18 4.5 18 5C18 5.5 17.4022 6.56904 17 7C16.4826 7.56904 16 8 14 8" stroke="currentColor" />
      <path d="M4.5 9.5L3.5 12L3.5 16" stroke="currentColor" />
      <path d="M9.5 7.5L8.5 8.75V11.5L9.5 13L13 13" stroke="currentColor" />
      <path d="M14 8L8 8" stroke="currentColor" />
    </svg>
  );

  const scrollToAppDownload = () => {
    const appSection = document.getElementById("app-download");
    if (appSection) {
      appSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-darkBg text-darkText pt-12 pb-6 border-t border-darkMetal/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <ChopperIcon />
                <Settings className="absolute -top-1 -right-1 h-3 w-3 text-darkAccent gear-spin opacity-70" />
              </div>
              <span className="font-display font-bold text-xl text-darkAccent">Biker's Way</span>
            </div>
            <p className="text-darkText/70 mb-4">
              Discover the perfect balance between mechanical precision and freedom on the world's best motorcycle routes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-darkText/70 hover:text-darkAccent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-darkText/70 hover:text-darkAccent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-darkText/70 hover:text-darkAccent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4 text-darkText">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1"><Compass className="h-4 w-4" /> Home</Link></li>
              <li><Link to="/trails" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1"><Route className="h-4 w-4" /> Routes</Link></li>
              <li><Link to="/community" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1"><Heart className="h-4 w-4" /> Community</Link></li>
              <li><Link to="/about" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1"><Settings className="h-4 w-4 gear-spin" /> About Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4 text-darkText">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1"><Settings className="h-4 w-4" /> Bike Maintenance</a></li>
              <li><a href="#" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1"><Route className="h-4 w-4" /> Route Maps</a></li>
              <li><a href="#" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1"><Compass className="h-4 w-4" /> Gear Reviews</a></li>
              <li><a href="#" className="text-darkText/70 hover:text-darkAccent transition-colors flex items-center gap-1">
                <ChopperIcon className="h-4 w-4" /> Technical Guides
              </a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4 text-darkText">Contact</h4>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-darkAccent" />
              <a href="mailto:info@bikersway.com" className="text-darkText/70 hover:text-darkAccent transition-colors">
                info@bikersway.com
              </a>
            </div>
            <p className="text-darkText/70 mb-4">
              Subscribe to our newsletter for updates on new routes, mechanical tips, and motorcycle events.
            </p>
            <Button 
              className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg text-sm"
              onClick={scrollToAppDownload}
            >
              <Settings className="h-4 w-4 mr-1 gear-spin" /> Download Our App
            </Button>
          </div>
        </div>

        <div className="border-t border-darkMetal/30 mt-8 pt-6 text-center text-darkText/50 text-sm">
          <p>© {new Date().getFullYear()} Biker's Way. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
