
import React from "react";
import { Button } from "@/components/ui/button";
import { Bike } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated bike icon */}
      <div className="absolute bottom-10 z-10 animate-bike-ride">
        <Bike className="h-12 w-12 text-bikerOrange" />
      </div>
      
      {/* Background with overlay */}
      <div 
        className="relative min-h-[80vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=1600&auto=format')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-bikerGreen/80 to-bikerCharcoal/50"></div>
        
        <div className="container max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 leading-tight">
              Discover the Perfect Path for Your Journey
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Join our community of passionate cyclists exploring breathtaking trails and sharing unforgettable adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-bikerOrange hover:bg-bikerOrange/90 text-bikerCharcoal font-semibold text-lg px-8 py-6">
                Explore Trails
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
