
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Route, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrailCardProps {
  title: string;
  location: string;
  difficulty: string;
  distance: string;
  duration: string;
  imageUrl: string;
}

const TrailCard = ({ title, location, difficulty, distance, duration, imageUrl }: TrailCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md trail-card">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover trail-card-image" 
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full py-3 px-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-bikerOrange" />
            <span className="text-white text-sm">{location}</span>
          </div>
        </div>
        <div className={`absolute top-3 right-3 py-1 px-3 rounded-full text-xs font-medium
          ${difficulty === 'Easy' ? 'bg-green-500 text-white' : 
            difficulty === 'Moderate' ? 'bg-yellow-500 text-bikerCharcoal' : 
            'bg-red-500 text-white'}`}>
          {difficulty}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Route className="h-4 w-4 text-bikerGreen" />
            <span>{distance}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-bikerGreen" />
            <span>{duration}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full border-bikerGreen text-bikerGreen hover:bg-bikerGreen hover:text-white">
          View Details
        </Button>
      </div>
    </Card>
  );
};

const FeaturedTrails = () => {
  const trails = [
    {
      title: "Mountain Ridge Circuit",
      location: "Blue Mountains, CA",
      difficulty: "Moderate",
      distance: "12 km",
      duration: "2-3 hours",
      imageUrl: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?q=80&w=600&auto=format"
    },
    {
      title: "Coastal Paradise Trail",
      location: "Coastal Bay, OR",
      difficulty: "Easy",
      distance: "8 km",
      duration: "1-2 hours",
      imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?q=80&w=600&auto=format"
    },
    {
      title: "Wilderness Adventure",
      location: "National Forest, WA",
      difficulty: "Difficult",
      distance: "25 km",
      duration: "5-6 hours",
      imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=600&auto=format"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Featured Trails</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the most breathtaking cycling trails for every skill level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trails.map((trail, index) => (
            <TrailCard key={index} {...trail} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-bikerGreen hover:bg-bikerGreen/90 text-white font-medium px-8">
            View All Trails
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrails;
