
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Route as RouteIcon, Clock, Mountain, Settings, Shield, Compass, Search, SlidersHorizontal, X } from "lucide-react";
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
            <RouteIcon className="h-4 w-4 text-darkAccent" />
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
            {/* View Details */}
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

const AllRoutes = () => {
  const { t } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - in a real app, this would come from an API
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
    },
    {
      id: "4",
      title: "Alpine Mountain Road",
      location: "Swiss Alps, Europe",
      difficulty: "Difficult",
      distance: "150 km",
      duration: "3-4 hours",
      elevation: "2100m",
      terrain: "Technical",
      imageUrl: "https://images.unsplash.com/photo-1516545595035-b494d28092e6?q=80&w=600&auto=format"
    },
    {
      id: "5",
      title: "Forest Backroad",
      location: "Pacific Northwest, WA",
      difficulty: "Moderate",
      distance: "95 km",
      duration: "2-3 hours",
      elevation: "750m",
      terrain: "Mixed",
      imageUrl: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=600&auto=format"
    },
    {
      id: "6",
      title: "Lakeside Trail",
      location: "Great Lakes, MI",
      difficulty: "Easy",
      distance: "70 km",
      duration: "1-2 hours",
      elevation: "210m",
      terrain: "Smooth",
      imageUrl: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?q=80&w=600&auto=format"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow mechanical-bg bg-darkBg">
        {/* Header */}
        <div className="bg-darkBg py-12 px-6 md:px-10 border-b border-darkMetal/30">
          <div className="container max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <RouteIcon className="h-6 w-6 text-darkAccent" />
                  <Settings className="h-6 w-6 text-darkLeaf gear-spin" />
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-darkText">All <span className="text-darkAccent">Motorcycle</span> Routes</h1>
              </div>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20 hidden md:flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                <Button 
                  variant="ghost" 
                  className="md:hidden text-darkText"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Search and filter bar */}
            <div className="relative">
              <div className="flex items-center bg-darkCard border border-darkMetal/30 rounded-lg px-4 py-3">
                <Search className="h-5 w-5 text-darkText/50 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search routes by name, location, or terrain type..." 
                  className="bg-transparent border-none outline-none text-darkText w-full"
                />
              </div>
              
              {/* Expanded filters */}
              {showFilters && (
                <div className="bg-darkCard mt-3 border border-darkMetal/30 rounded-lg p-4 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-darkText">Filters</h3>
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowFilters(false)}
                      className="h-8 w-8 p-0 text-darkText/70 hover:text-darkText"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-darkText/70 mb-1">Difficulty</label>
                      <select className="w-full bg-darkBg border border-darkMetal/30 rounded-md p-2 text-darkText">
                        <option value="">Any difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="moderate">Moderate</option>
                        <option value="difficult">Difficult</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-darkText/70 mb-1">Distance</label>
                      <select className="w-full bg-darkBg border border-darkMetal/30 rounded-md p-2 text-darkText">
                        <option value="">Any distance</option>
                        <option value="short">Short (0-50 km)</option>
                        <option value="medium">Medium (50-150 km)</option>
                        <option value="long">Long (150+ km)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-darkText/70 mb-1">Region</label>
                      <select className="w-full bg-darkBg border border-darkMetal/30 rounded-md p-2 text-darkText">
                        <option value="">Any region</option>
                        <option value="west">West Coast</option>
                        <option value="mountain">Mountain Region</option>
                        <option value="midwest">Midwest</option>
                        <option value="east">East Coast</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Routes grid */}
        <section className="py-12 px-6 md:px-10">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routes.map((route) => (
                <RouteCard key={route.id} {...route} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20">
                  Previous
                </Button>
                <Button className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg">1</Button>
                <Button variant="outline" className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20">2</Button>
                <Button variant="outline" className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20">3</Button>
                <Button variant="outline" className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllRoutes;
