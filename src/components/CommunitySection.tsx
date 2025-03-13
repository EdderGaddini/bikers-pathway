import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Heart, MessageSquare, Image, Map } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CommunitySection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 px-6 md:px-10 bg-bikerCream">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-bikerCharcoal">{t('joinCommunityHeader')}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('communityDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-bikerGreen/10 p-4 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-bikerGreen" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-bikerCharcoal">{t('groupRides')}</h3>
              <p className="text-gray-700 mb-5">
                {t('groupRidesDescription')}
              </p>
              <Button variant="outline" className="mt-auto border-bikerGreen text-bikerGreen hover:bg-bikerGreen hover:text-white">
                {t('viewCalendar')}
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-bikerOrange/10 p-4 rounded-full mb-6">
                <Users className="h-10 w-10 text-bikerOrange" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-bikerCharcoal">{t('forumsDiscussions')}</h3>
              <p className="text-gray-700 mb-5">
                {t('forumsDescription')}
              </p>
              <Button variant="outline" className="mt-auto border-bikerOrange text-bikerOrange hover:bg-bikerOrange hover:text-white">
                {t('joinDiscussion')}
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-bikerBrown/10 p-4 rounded-full mb-6">
                <Award className="h-10 w-10 text-bikerBrown" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-bikerCharcoal">{t('ralliesEvents')}</h3>
              <p className="text-gray-700 mb-5">
                {t('ralliesDescription')}
              </p>
              <Button variant="outline" className="mt-auto border-bikerBrown text-bikerBrown hover:bg-bikerBrown hover:text-white">
                {t('exploreEvents')}
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Community Photos Section */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl text-center mb-8 text-bikerCharcoal">{t('communityPhotos')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1558981403-c5f9b913ffc0?w=600&h=600&auto=format&fit=crop&q=80" 
                alt={t('mountainRoadTrip')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=600&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-white font-medium">{t('mountainRoadTrip')}</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 124</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 32</div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1596429402670-3b5d3d2c6156?w=600&h=600&auto=format&fit=crop&q=80" 
                alt={t('weekendGroupRide')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1588636142475-a62d56692870?w=600&h=600&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-white font-medium">{t('weekendGroupRide')}</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 98</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 15</div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1545974452-caa213f76132?w=600&h=600&auto=format&fit=crop&q=80" 
                alt={t('sunsetRide')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600&h=600&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-white font-medium">{t('sunsetRide')}</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 156</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 42</div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1566860338389-78097bbef5fe?w=600&h=600&auto=format&fit=crop&q=80" 
                alt={t('maintenanceDay')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=600&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-white font-medium">{t('maintenanceDay')}</p>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="flex items-center gap-1"><Heart size={14} /> 87</div>
                  <div className="flex items-center gap-1"><MessageSquare size={14} /> 23</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="default" className="bg-bikerCharcoal hover:bg-bikerCharcoal/90 text-white gap-2">
              <Image size={18} />
              {t('viewMorePhotos')}
            </Button>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-bikerBrown to-bikerOrange rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                {t('readyToJoin')}
              </h3>
              <p className="text-white/90 mb-6">
                {t('createAccountToday')}
              </p>
              <div>
                <Button className="bg-white text-bikerBrown hover:bg-white/90 font-semibold">
                  {t('signUpNow')}
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619771914272-e3c1f8c4afdb?w=800&auto=format')" }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                  <Map className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
