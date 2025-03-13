
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Route, Clock, Compass, Settings, Mountain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface RouteCardProps {
  id: string;
  title: string;
  location: string;
  difficulty: string;
  distance: string;
  duration: string;
  imageUrl: string;
  elevation?: string;
  terrain?: string;
}

const RouteCard = ({ id, title, location, difficulty, distance, duration, imageUrl, elevation, terrain }: RouteCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg trail-card bg-darkCard hover:shadow-darkAccent/20 transition-shadow">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover trail-card-image" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full py-3 px-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-darkAccent" />
            <span className="text-darkText text-sm">{location}</span>
          </div>
        </div>
        <div className={`absolute top-3 right-3 py-1 px-3 rounded-full text-xs font-medium flex items-center gap-1
          ${difficulty === 'Easy' ? 'bg-darkLeaf text-darkBg' : 
            difficulty === 'Moderate' ? 'bg-darkAccent text-darkBg' : 
            'bg-red-500 text-darkText'}`}>
          <Shield className="h-3 w-3" />
          {difficulty}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-xl mb-3 text-darkText">{title}</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-darkText/70">
            <Route className="h-4 w-4 text-darkAccent" />
            <span>{distance}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-darkText/70">
            <Clock className="h-4 w-4 text-darkAccent" />
            <span>{duration}</span>
          </div>
          {elevation && (
            <div className="flex items-center gap-1 text-sm text-darkText/70">
              <Mountain className="h-4 w-4 text-darkAccent" />
              <span>{elevation}</span>
            </div>
          )}
          {terrain && (
            <div className="flex items-center gap-1 text-sm text-darkText/70">
              <Settings className="h-4 w-4 text-darkAccent gear-spin" />
              <span>{terrain}</span>
            </div>
          )}
        </div>
        <Link to={`/route/${id}`}>
          <Button variant="outline" className="w-full border-darkAccent text-darkAccent hover:bg-darkAccent hover:text-darkBg flex items-center justify-center gap-2">
            <Compass className="h-4 w-4" />
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

const FeaturedTrails = () => {
  const { t } = useLanguage();
  
  const routes = [
    {
      id: "1",
      title: "Mountain Pass Highway",
      location: "Sierra Mountains, CA",
      difficulty: "Moderate",
      distance: "120 km",
      duration: "2-3 hours",
      elevation: "1450m",
      terrain: "Winding",
      imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format"
    },
    {
      id: "2",
      title: "Coastal Highway One",
      location: "Pacific Coast, OR",
      difficulty: "Easy",
      distance: "85 km",
      duration: "1-2 hours",
      elevation: "320m",
      terrain: "Smooth",
      imageUrl: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=600&auto=format"
    },
    {
      id: "3",
      title: "Desert Canyon Route",
      location: "Red Rock Canyon, NV",
      difficulty: "Difficult",
      distance: "190 km",
      duration: "4-5 hours",
      elevation: "980m",
      terrain: "Technical",
      imageUrl: "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?q=80&w=600&auto=format"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-10 bg-darkBg mechanical-bg">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-3">
            <Settings className="h-6 w-6 text-darkAccent gear-spin" />
            <Route className="h-6 w-6 text-darkLeaf" />
            <Settings className="h-6 w-6 text-darkAccent gear-spin-reverse" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-darkText">{t('featuredRoutesHeading')}</h2>
          <p className="text-lg text-darkText/70 max-w-2xl mx-auto">
            {t('featuredRoutesDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <RouteCard key={route.id} {...route} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/routes">
            <Button className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg font-medium px-8 flex items-center gap-2 mx-auto">
              <Route className="h-5 w-5" />
              View All Routes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrails;
