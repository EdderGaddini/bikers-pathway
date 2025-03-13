
import React from "react";
import { Bike, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bikerCharcoal text-white pt-12 pb-6">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Bike className="h-6 w-6" />
              <span className="font-display font-bold text-xl">Biker's Way</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the best cycling routes and connect with fellow biking enthusiasts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-bikerOrange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-bikerOrange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-bikerOrange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-bikerOrange transition-colors">Home</Link></li>
              <li><Link to="/trails" className="text-gray-300 hover:text-bikerOrange transition-colors">Trails</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-bikerOrange transition-colors">Community</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-bikerOrange transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-bikerOrange transition-colors">Bike Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-bikerOrange transition-colors">Safety Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-bikerOrange transition-colors">Gear Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-bikerOrange transition-colors">Trail Maps</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-bikerOrange" />
              <a href="mailto:info@bikersway.com" className="text-gray-300 hover:text-bikerOrange transition-colors">
                info@bikersway.com
              </a>
            </div>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new trails and community events.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Biker's Way. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
