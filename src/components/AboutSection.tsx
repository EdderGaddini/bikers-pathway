
import React from "react";
import { Bike, Map, Heart, Compass } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">About Biker's Way</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded by a group of passionate cyclists, Biker's Way was created to help fellow biking enthusiasts discover 
              the most breathtaking trails and connect with like-minded individuals across the country.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to promote cycling as a sustainable, healthy, and enjoyable activity while building a 
              supportive community that shares knowledge, experiences, and the joy of cycling.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-bikerGreen/10 p-2 rounded-full mt-1">
                  <Bike className="h-5 w-5 text-bikerGreen" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">Cycling Passion</h4>
                  <p className="text-gray-600 text-sm">Built by cyclists for cyclists</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-bikerOrange/10 p-2 rounded-full mt-1">
                  <Map className="h-5 w-5 text-bikerOrange" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">Curated Trails</h4>
                  <p className="text-gray-600 text-sm">Handpicked routes for all levels</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-bikerBrown/10 p-2 rounded-full mt-1">
                  <Heart className="h-5 w-5 text-bikerBrown" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">Community First</h4>
                  <p className="text-gray-600 text-sm">Support, share and grow together</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-bikerGreen/10 p-2 rounded-full mt-1">
                  <Compass className="h-5 w-5 text-bikerGreen" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">Adventure Guides</h4>
                  <p className="text-gray-600 text-sm">Expert advice for your journey</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format" 
                alt="Cyclists on a mountain trail" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[180px]">
              <div className="text-bikerGreen font-display font-bold text-4xl mb-1">5K+</div>
              <p className="text-gray-600">Active community members</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[180px]">
              <div className="text-bikerOrange font-display font-bold text-4xl mb-1">300+</div>
              <p className="text-gray-600">Mapped cycling trails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
