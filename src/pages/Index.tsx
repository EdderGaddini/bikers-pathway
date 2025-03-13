
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturedTrails from "@/components/FeaturedTrails";
import CommunitySection from "@/components/CommunitySection";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedTrails />
        <CommunitySection />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
