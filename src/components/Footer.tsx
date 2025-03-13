
import React from "react";
import { Mail, Instagram, Facebook, Twitter, Settings, Compass, Route, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkBg text-darkText pt-12 pb-6 border-t border-darkMetal/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-motorcycle text-darkAccent">
                  <circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="M19 18.5V12a2 2 0 0 0-2-2h-2l-3.5-4a2 2 0 0 0-1.5-.7H6.2a2 2 0 0 0-1.8 1.2L3 11"/><path d="M5 18.5V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5"/>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-motorcycle">
                  <circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="M19 18.5V12a2 2 0 0 0-2-2h-2l-3.5-4a2 2 0 0 0-1.5-.7H6.2a2 2 0 0 0-1.8 1.2L3 11"/><path d="M5 18.5V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5"/>
                </svg> Technical Guides
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
