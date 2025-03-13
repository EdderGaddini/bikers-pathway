import React from "react";
import { Route, Settings, Compass, Wrench, Mountain, Users, Award } from "lucide-react";

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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-darkText">About <span className="text-darkAccent">Biker's Ways</span></h2>
            <p className="text-lg text-darkText/70 mb-6">
              Founded by a group of passionate motorcyclists and mechanical engineers, Biker's Ways was created to help fellow riders discover 
              the perfect balance between mechanical precision and the freedom of the open road.
            </p>
            <p className="text-lg text-darkText/70 mb-6">
              Our mission is to promote motorcycle culture as a technically rewarding lifestyle while building a 
              supportive community that shares mechanical knowledge, route experiences, and the engineering joy of riding.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-darkAccent/10 p-2 rounded-full mt-1">
                  <Settings className="h-5 w-5 text-darkAccent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Engineering Passion</h4>
                  <p className="text-darkText/70 text-sm">Built by engineers for bikers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-darkLeaf/10 p-2 rounded-full mt-1">
                  <Route className="h-5 w-5 text-darkLeaf" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Technical Routes</h4>
                  <p className="text-darkText/70 text-sm">Precision routes for all levels</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-darkAccent/10 p-2 rounded-full mt-1">
                  <Wrench className="h-5 w-5 text-darkAccent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Mechanical Support</h4>
                  <p className="text-darkText/70 text-sm">Expert motorcycle maintenance tips</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-darkLeaf/10 p-2 rounded-full mt-1">
                  <Compass className="h-5 w-5 text-darkLeaf" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1 text-darkText">Rider Guidance</h4>
                  <p className="text-darkText/70 text-sm">Engineered for your journey</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl border border-darkMetal/30">
              <img 
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format" 
                alt="Motorcyclists on a mountain road" 
                className="w-full h-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-darkBg/50 to-transparent"></div>
            </div>
            
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
              <p className="text-darkText/70">Mapped motorcycle routes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
