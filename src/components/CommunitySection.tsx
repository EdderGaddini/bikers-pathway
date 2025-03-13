
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Heart, MessageSquare, Image } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-bikerCream">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Join Our Biker Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow motorcycle enthusiasts, join group rides, and share your adventures with passionate riders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-bikerGreen/10 p-4 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-bikerGreen" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Group Rides</h3>
              <p className="text-gray-600 mb-5">
                Join scheduled group rides organized by our community members across various skill levels and routes.
              </p>
              <Button variant="outline" className="mt-auto border-bikerGreen text-bikerGreen hover:bg-bikerGreen hover:text-white">
                View Calendar
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-bikerOrange/10 p-4 rounded-full mb-6">
                <Users className="h-10 w-10 text-bikerOrange" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Forums & Discussions</h3>
              <p className="text-gray-600 mb-5">
                Share tips, ask questions, and discuss everything motorcycle-related with our friendly community.
              </p>
              <Button variant="outline" className="mt-auto border-bikerOrange text-bikerOrange hover:bg-bikerOrange hover:text-white">
                Join Discussion
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-bikerBrown/10 p-4 rounded-full mb-6">
                <Award className="h-10 w-10 text-bikerBrown" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Rallies & Events</h3>
              <p className="text-gray-600 mb-5">
                Participate in motorcycle rallies, competitions, and biker events organized throughout the year.
              </p>
              <Button variant="outline" className="mt-auto border-bikerBrown text-bikerBrown hover:bg-bikerBrown hover:text-white">
                Explore Events
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Community Photos Section */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-center mb-8">Community Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-lg aspect-square community-photo">
              <img src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&auto=format" alt="Biker on mountain road" className="w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-3 photo-overlay">
                <p className="text-white font-medium">Mountain Road Trip</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 124</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 32</div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square community-photo">
              <img src="https://images.unsplash.com/photo-1571325654970-819e202ebb38?w=600&auto=format" alt="Group of bikers" className="w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-3 photo-overlay">
                <p className="text-white font-medium">Weekend Group Ride</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 98</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 15</div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square community-photo">
              <img src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=600&auto=format" alt="Sunset motorcycle ride" className="w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-3 photo-overlay">
                <p className="text-white font-medium">Sunset Ride</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 156</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 42</div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square community-photo">
              <img src="https://images.unsplash.com/photo-1621963864548-fbcb3f09bd15?w=600&auto=format" alt="Motorcycle maintenance" className="w-full h-full object-cover transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-3 photo-overlay">
                <p className="text-white font-medium">Maintenance Day</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 87</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 23</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline" className="border-gray-400 gap-2">
              <Image size={18} />
              View More Photos
            </Button>
          </div>
        </div>
        
        <div className="mt-8 bg-bikerGreen rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Ready to join our growing biker community?
              </h3>
              <p className="text-white/90 mb-6">
                Create your account today and connect with thousands of motorcycle enthusiasts, discover new routes, and share your riding experiences.
              </p>
              <div>
                <Button className="bg-white text-bikerGreen hover:bg-white/90 font-semibold">
                  Sign Up Now
                </Button>
              </div>
            </div>
            <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?q=80&w=800&auto=format')" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
