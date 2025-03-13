
import React from "react";
import { Apple, RotateCw, Smartphone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppPromotion = () => {
  const handleAppleStoreClick = () => {
    window.open('https://apps.apple.com/app/your-app-id', '_blank');
  };

  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank');
  };

  return (
    <section id="app-download" className="py-16 relative overflow-hidden mechanical-bg">
      {/* Motorcycle background image - updated to show riders enjoying the journey */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1636500384161-574376b8ceb0?q=80&w=1800&auto=format" 
          alt="Motorcycle rider enjoying the journey" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkBg via-darkBg/70 to-transparent"></div>
      </div>
      
      <div className="absolute -right-16 top-1/3 opacity-10 z-10">
        <Settings className="h-64 w-64 text-darkAccent gear-spin" />
      </div>
      <div className="absolute -left-16 top-1/4 opacity-10 z-10">
        <Settings className="h-48 w-48 text-darkLeaf gear-spin-reverse" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-darkText mb-4">
              Leve o <span className="text-darkAccent">Biker's Way</span> com você
            </h2>
            <p className="text-darkText/80 mb-6 text-lg">
              Tenha acesso a todas as rotas, dicas mecânicas e conecte-se com outros motociclistas mesmo quando estiver offline. Nossa aplicação está disponível para Android e iOS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-darkBg hover:bg-darkBg/90 text-darkText px-6 py-6 flex items-center gap-2 rounded-xl app-store-btn"
                onClick={handleAppleStoreClick}
              >
                <Apple className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Baixar na</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button 
                className="bg-darkBg hover:bg-darkBg/90 text-darkText px-6 py-6 flex items-center gap-2 rounded-xl app-store-btn"
                onClick={handleGooglePlayClick}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.27 2C3.27 1.44772 2.82228 1 2.27 1C1.71772 1 1.27 1.44772 1.27 2H3.27ZM1.27 22C1.27 22.5523 1.71772 23 2.27 23C2.82228 23 3.27 22.5523 3.27 22H1.27ZM19.01 12.18L19.3029 11.1863L19.01 12.18ZM8.02 20.25L7.7058 19.2627L8.02 20.25ZM8.00003 3.72L8.32094 4.70401L8.00003 3.72ZM19.02 11.81L19.3285 10.818L19.02 11.81ZM1.27 2V22H3.27V2H1.27ZM18.7171 13.1737L7.7058 19.2627L8.3342 21.2373L19.3029 11.1863L18.7171 13.1737ZM7.7058 4.73599L18.7115 10.802L19.3285 10.818L8.32094 4.70401L7.7058 4.73599ZM7.7058 19.2627C4.59792 17.8 4.59792 17.8 4.59792 17.8C2.83563 16.98 2.27 16.06 2.27 15.31V15.31L2.27 15.31L2.27 15.31L2.27 15.31V15.31C2.27 14.57 2.83083 13.66 4.58 12.86C4.58 12.86 4.58 12.86 4.58 12.86C4.58 12.86 4.58 12.86 4.58 12.86C4.58 12.86 4.58 12.86 4.58 12.86L7.67819 11.7539L7.7058 10.0722L4.58 8.99C2.83563 8.17 2.27 7.25 2.27 6.5V6.5L2.27 6.5L2.27 6.5L2.27 6.5V6.5C2.27 5.76 2.83083 4.85 4.58 4.05L7.7058 4.73599L8.3342 4.70401L4.32481 3.73029C1.66546 4.82557 0.27 6.41068 0.27 8.54V8.54L0.27 8.54L0.27 8.54L0.27 8.54V8.54C0.27 10.39 1.36286 11.74 3.22 12.72L3.42 12.83L3.42 12.83C1.38286 13.79 0.27 15.1 0.27 17V17L0.27 17L0.27 17L0.27 17V17C0.27 19.13 1.66546 20.7344 4.32481 21.8097L4.32481 21.8097L4.32481 21.8097L7.7058 19.2627ZM7.7058 19.2627L7.7058 10.0722L7.7058 19.2627ZM8.3342 4.70401V21.2373V4.70401ZM18.7171 13.1737C21.3945 12.0904 22.79 10.49 22.79 8.54V8.54L22.79 8.54L22.79 8.54L22.79 8.54V8.54C22.79 6.59 21.3945 4.98955 18.7171 3.90629L18.7171 3.90629L18.7115 10.802L18.7171 13.1737Z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Baixar no</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
            
            <div className="flex items-center gap-3 text-darkText/70">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-darkAccent/20 flex items-center justify-center">
                  <span className="text-xs text-darkAccent">5.0</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-darkBg bg-darkMetal/30"></div>
                <div className="w-8 h-8 rounded-full border-2 border-darkBg bg-darkMetal/30"></div>
              </div>
              <div>
                <span className="font-semibold text-darkText">4.9/5</span> de avaliação por mais de 10 mil motociclistas
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Phone display with hand clicking */}
              <div className="w-[300px] h-[580px] rounded-[40px] bg-darkBg border-4 border-darkMetal/50 relative overflow-hidden shadow-lg transform perspective-1200 rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-darkBg/20 to-transparent"></div>
                <div className="w-full h-[40px] flex justify-center items-center relative z-10">
                  <div className="w-[120px] h-[24px] rounded-b-[12px] bg-darkBg"></div>
                </div>
                <div className="h-full w-full p-4 pt-0 relative z-10">
                  <div className="h-full rounded-[20px] bg-darkBg/50 p-3 overflow-hidden backdrop-blur-sm">
                    {/* App Store mockup */}
                    <div className="w-full h-[60px] bg-darkAccent/10 rounded-lg mb-4 flex items-center justify-between px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-darkAccent/30 flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-darkAccent" />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-semibold text-darkText">Biker's Way</div>
                          <div className="text-xs text-darkText/60">Rotas & Comunidade</div>
                        </div>
                      </div>
                      <div className="bg-darkAccent text-darkBg text-xs px-3 py-1.5 rounded-full font-medium">
                        INSTALAR
                      </div>
                    </div>
                    
                    {/* App screenshots mockup */}
                    <div className="w-full h-[160px] bg-darkAccent/5 rounded mb-4 p-2">
                      <div className="grid grid-cols-3 gap-2 h-full">
                        <div className="bg-darkAccent/10 rounded-lg"></div>
                        <div className="bg-darkLeaf/10 rounded-lg"></div>
                        <div className="bg-darkAccent/10 rounded-lg"></div>
                      </div>
                    </div>
                    
                    {/* App description mockup */}
                    <div className="w-full mb-4">
                      <div className="w-full h-[12px] bg-darkMetal/20 rounded mb-2"></div>
                      <div className="w-3/4 h-[12px] bg-darkMetal/20 rounded mb-2"></div>
                      <div className="w-5/6 h-[12px] bg-darkMetal/20 rounded"></div>
                    </div>
                    
                    {/* App reviews mockup */}
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[1,2,3,4,5].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-darkAccent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-darkText/60">4.9 (10k+)</span>
                    </div>
                    
                    {/* Hand clicking icon */}
                    <div className="absolute bottom-6 right-0 w-20 h-20 transform translate-x-12 translate-y-4 rotate-[-20deg]">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-darkText opacity-90">
                        <path d="M6.5 11.5C6.5 11.5 8.5 9 10 9C11.5 9 13 10.5 13 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 9L13 10.5L19 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M13 19L13 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M18 17L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M21 16L21 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M15.5 14V20C15.5 20.5523 15.0523 21 14.5 21H8.5C7.94772 21 7.5 20.5523 7.5 20L7.5 15.5C7.5 14.9477 7.94772 14.5 8.5 14.5L11 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gear overlays for mechanical effect */}
              <div className="absolute -bottom-6 -right-6 z-20">
                <Settings className="h-20 w-20 text-darkAccent opacity-20 gear-spin" />
              </div>
              <div className="absolute -top-4 -left-4 z-20">
                <Settings className="h-16 w-16 text-darkLeaf opacity-20 gear-spin-reverse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
