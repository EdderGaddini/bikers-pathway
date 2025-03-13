
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-bikerCream">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow cyclists, join group rides, and share your biking adventures with passionate enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-bikerGreen/10 p-4 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-bikerGreen" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Group Rides</h3>
              <p className="text-gray-600 mb-5">
                Join scheduled group rides organized by our community members across various skill levels and locations.
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
                Share tips, ask questions, and discuss everything cycling-related with our friendly community.
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
              <h3 className="font-display font-semibold text-xl mb-3">Challenges & Events</h3>
              <p className="text-gray-600 mb-5">
                Participate in seasonal challenges, competitions, and cycling events organized throughout the year.
              </p>
              <Button variant="outline" className="mt-auto border-bikerBrown text-bikerBrown hover:bg-bikerBrown hover:text-white">
                Explore Events
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="mt-16 bg-bikerGreen rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Ready to join our growing community?
              </h3>
              <p className="text-white/90 mb-6">
                Create your account today and connect with thousands of cycling enthusiasts, discover new trails, and share your biking experiences.
              </p>
              <div>
                <Button className="bg-white text-bikerGreen hover:bg-white/90 font-semibold">
                  Sign Up Now
                </Button>
              </div>
            </div>
            <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=800&auto=format')" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
