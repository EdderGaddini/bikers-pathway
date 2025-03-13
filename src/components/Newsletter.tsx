
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-bikerBrown">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Stay Updated with Biker's Way
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Subscribe to our newsletter and be the first to know about new trails, community events, 
            and exclusive cycling tips from our experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-bikerOrange"
            />
            <Button className="bg-bikerOrange hover:bg-bikerOrange/90 text-bikerCharcoal font-semibold py-6">
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm text-white/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
