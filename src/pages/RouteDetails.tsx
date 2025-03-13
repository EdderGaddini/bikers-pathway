
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MapPin, Route as RouteIcon, Clock, Mountain, Settings, ArrowLeft, Calendar, Shield, Compass, Download, Share2, Star, User } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from "@/contexts/LanguageContext";

const RouteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Mock data - in a real app, this would come from an API based on the route ID
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
      description: "A breathtaking journey through the Sierra Mountains featuring steep climbs, technical descents and incredible panoramic views. This route is ideal for experienced riders looking for a challenge with rewarding scenery.",
      rating: 4.8,
      reviews: 124,
      imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format",
      bestSeason: "Summer to Early Fall",
      roadCondition: "Mostly good, some sections with gravel",
      popularity: "High",
      createdBy: "MountainRider42",
      trafficLevel: "Moderate on weekends, light on weekdays"
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
      description: "A scenic coastal route that follows the Pacific shoreline, offering spectacular ocean views and gentle curves. Perfect for beginners or those looking for a relaxing ride with plenty of stops for photos and refreshments.",
      rating: 4.9,
      reviews: 210,
      imageUrl: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=1200&auto=format",
      bestSeason: "Spring to Fall",
      roadCondition: "Excellent, well-maintained tarmac",
      popularity: "Very High",
      createdBy: "CoastalCruiser",
      trafficLevel: "Heavy during tourist season, moderate otherwise"
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
      description: "An adventurous ride through dramatic desert landscapes and challenging canyon roads. This technical route features tight switchbacks, elevation changes and exposed sections that require full attention and advanced riding skills.",
      rating: 4.6,
      reviews: 86,
      imageUrl: "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?q=80&w=1200&auto=format",
      bestSeason: "Spring and Fall",
      roadCondition: "Variable, some rough patches",
      popularity: "Medium",
      createdBy: "DesertRider",
      trafficLevel: "Low, occasional tour groups"
    }
  ];
  
  const route = routes.find(r => r.id === id) || routes[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-darkBg mechanical-bg">
        {/* Hero section with large image */}
        <div className="relative h-[40vh] md:h-[60vh]">
          <img 
            src={route.imageUrl} 
            alt={route.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent"></div>
          
          {/* Back button */}
          <Button 
            variant="outline" 
            className="absolute top-4 left-4 bg-darkBg/50 backdrop-blur-sm border-darkMetal/30 text-darkText hover:bg-darkBg/70"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> {t('back')}
          </Button>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 md:px-10 py-8">
          {/* Route header with title and metadata */}
          <div className="bg-darkCard border border-darkMetal/30 rounded-lg p-6 -mt-16 relative z-10 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="font-display font-bold text-2xl md:text-4xl text-darkText mb-2">{route.title}</h1>
                <div className="flex items-center gap-2 text-darkText/70">
                  <MapPin className="h-4 w-4 text-darkAccent" />
                  <span>{route.location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-darkText font-semibold">{route.rating}</span>
                  <span className="text-darkText/50 text-sm">({route.reviews})</span>
                </div>
                
                <div className={`py-1 px-3 rounded-full text-sm font-medium flex items-center gap-1
                  ${route.difficulty === 'Easy' ? 'bg-darkLeaf text-darkBg' : 
                    route.difficulty === 'Moderate' ? 'bg-darkAccent text-darkBg' : 
                    'bg-red-500 text-darkText'}`}>
                  <Shield className="h-3 w-3" />
                  {route.difficulty}
                </div>
              </div>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-darkBg/50 border border-darkMetal/20 rounded-lg p-4 flex flex-col items-center text-center">
                <RouteIcon className="h-6 w-6 text-darkAccent mb-2" />
                <span className="text-darkText/60 text-sm">{t('distance')}</span>
                <span className="text-darkText font-semibold">{route.distance}</span>
              </div>
              <div className="bg-darkBg/50 border border-darkMetal/20 rounded-lg p-4 flex flex-col items-center text-center">
                <Clock className="h-6 w-6 text-darkAccent mb-2" />
                <span className="text-darkText/60 text-sm">{t('duration')}</span>
                <span className="text-darkText font-semibold">{route.duration}</span>
              </div>
              <div className="bg-darkBg/50 border border-darkMetal/20 rounded-lg p-4 flex flex-col items-center text-center">
                <Mountain className="h-6 w-6 text-darkAccent mb-2" />
                <span className="text-darkText/60 text-sm">{t('elevation')}</span>
                <span className="text-darkText font-semibold">{route.elevation}</span>
              </div>
              <div className="bg-darkBg/50 border border-darkMetal/20 rounded-lg p-4 flex flex-col items-center text-center">
                <Settings className="h-6 w-6 text-darkAccent mb-2 gear-spin" />
                <span className="text-darkText/60 text-sm">{t('terrain')}</span>
                <span className="text-darkText font-semibold">{route.terrain}</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="font-display font-semibold text-xl text-darkText mb-3">{t('routeDescription')}</h2>
              <p className="text-darkText/80 leading-relaxed">{route.description}</p>
            </div>
            
            {/* Additional details table */}
            <div className="mb-8">
              <h2 className="font-display font-semibold text-xl text-darkText mb-3">{t('additionalDetails')}</h2>
              <Table>
                <TableHeader>
                  <TableRow className="border-darkMetal/20">
                    <TableHead className="text-darkText/70">{t('attribute')}</TableHead>
                    <TableHead className="text-darkText/70">{t('value')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-darkMetal/20">
                    <TableCell className="text-darkText/90 font-medium">{t('bestSeason')}</TableCell>
                    <TableCell className="text-darkText">{route.bestSeason}</TableCell>
                  </TableRow>
                  <TableRow className="border-darkMetal/20">
                    <TableCell className="text-darkText/90 font-medium">{t('roadCondition')}</TableCell>
                    <TableCell className="text-darkText">{route.roadCondition}</TableCell>
                  </TableRow>
                  <TableRow className="border-darkMetal/20">
                    <TableCell className="text-darkText/90 font-medium">{t('popularity')}</TableCell>
                    <TableCell className="text-darkText">{route.popularity}</TableCell>
                  </TableRow>
                  <TableRow className="border-darkMetal/20">
                    <TableCell className="text-darkText/90 font-medium">{t('trafficLevel')}</TableCell>
                    <TableCell className="text-darkText">{route.trafficLevel}</TableCell>
                  </TableRow>
                  <TableRow className="border-darkMetal/20">
                    <TableCell className="text-darkText/90 font-medium">{t('createdBy')}</TableCell>
                    <TableCell className="text-darkText flex items-center gap-2">
                      <User className="h-4 w-4 text-darkAccent" /> {route.createdBy}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-darkAccent hover:bg-darkAccent/90 text-darkBg flex items-center gap-2">
                <Download className="h-5 w-5" />
                {t('downloadGpx')}
              </Button>
              <Button variant="outline" className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20 flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                {t('shareRoute')}
              </Button>
              <Button variant="outline" className="border-darkMetal/30 text-darkText hover:bg-darkMetal/20 flex items-center gap-2">
                <Compass className="h-5 w-5" />
                {t('navigate')}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RouteDetails;
