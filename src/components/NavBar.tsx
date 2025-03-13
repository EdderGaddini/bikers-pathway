
import React from "react";
import { Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-bikerCream/90 backdrop-blur-sm py-4 px-6 md:px-10 shadow-sm">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Bike className="h-8 w-8 text-bikerGreen" />
          <span className="font-display font-bold text-2xl text-bikerGreen">Biker's Way</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-bikerGreen transition-colors">Home</Link>
          <Link to="/trails" className="font-medium hover:text-bikerGreen transition-colors">Trails</Link>
          <Link to="/community" className="font-medium hover:text-bikerGreen transition-colors">Community</Link>
          <Link to="/about" className="font-medium hover:text-bikerGreen transition-colors">About</Link>
        </div>
        
        <Button className="bg-bikerGreen hover:bg-bikerGreen/90 text-white">Join Now</Button>
      </div>
    </nav>
  );
};

export default NavBar;
