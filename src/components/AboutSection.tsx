
import React from "react";
import { Bike, Route, Settings, Compass, Wrench, Mountain, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-darkCard">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Settings className="h-6 w-6 text-darkAccent gear-spin" />
              <span className="text-darkAccent font-medium">OUR STORY</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-darkText">About <span className="text-darkAccent">Biker's Way</span></h2>
            <p className="text-lg text-darkText/70 mb-6">
              Founded by a group of passionate cyclists and mechanical engineers, Biker's Way was created to help fellow biking enthusiasts discover 
              the perfect balance between nature's beauty and mechanical precision on the world's most breathtaking trails.
            </p>
            <p className="text-lg text-darkText/70 mb-6">
              Our mission is to promote cycling as a sustainable, technically rewarding, and enjoyable activity while building a 
              supportive community that shares mechanical knowledge, route experiences, and the engineering joy of cycling.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-darkAccent/10 p-2 rounded-full mt-1">
                  <Bike className="h-5 w-5 text-darkAccent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Engineering Passion</h4>
                  <p className="text-darkText/70 text-sm">Built by engineers for cyclists</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-darkLeaf/10 p-2 rounded-full mt-1">
                  <Route className="h-5 w-5 text-darkLeaf" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Technical Trails</h4>
                  <p className="text-darkText/70 text-sm">Precision routes for all levels</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-darkAccent/10 p-2 rounded-full mt-1">
                  <Wrench className="h-5 w-5 text-darkAccent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Mechanical Support</h4>
                  <p className="text-darkText/70 text-sm">Expert bike maintenance advice</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-darkLeaf/10 p-2 rounded-full mt-1">
                  <Compass className="h-5 w-5 text-darkLeaf" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Precision Guides</h4>
                  <p className="text-darkText/70 text-sm">Engineered for your journey</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl border border-darkMetal/30">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format" 
                alt="Cyclists on a mountain trail" 
                className="w-full h-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-darkBg/50 to-transparent"></div>
            </div>
            
            {/* Decorative gears */}
            <Settings className="absolute -top-6 -right-6 h-16 w-16 text-darkAccent/20 gear-spin" />
            <Settings className="absolute -bottom-6 -left-6 h-12 w-12 text-darkAccent/20 gear-spin-reverse" />
            
            <div className="absolute -bottom-6 left-6 bg-darkCard p-4 rounded-lg shadow-lg max-w-[180px] border border-darkMetal/30 blur-card">
              <div className="text-darkAccent font-display font-bold text-4xl mb-1 flex items-center">
                5K+ <Users className="h-5 w-5 ml-2" />
              </div>
              <p className="text-darkText/70">Active community members</p>
            </div>
            <div className="absolute -top-6 right-6 bg-darkCard p-4 rounded-lg shadow-lg max-w-[180px] border border-darkMetal/30 blur-card">
              <div className="text-darkLeaf font-display font-bold text-4xl mb-1 flex items-center">
                300+ <Route className="h-5 w-5 ml-2" />
              </div>
              <p className="text-darkText/70">Mapped cycling trails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
