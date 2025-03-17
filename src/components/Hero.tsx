import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Users } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";
import Transition from "./ui/Transition";
import { Badge } from "./ui/badge";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-mesh">
      <div className="noise-bg"></div>
      
      <div className="page-container relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <Transition animation="fade" show={isLoaded} delay={200}>
              <Badge variant="primary" className="mb-2">
                Web3 Democratized
              </Badge>
            </Transition>
            
            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                <AnimatedText 
                  text="Bitcoin &" 
                  animation="word-by-word" 
                  delay={400}
                  className="block"
                />
                <AnimatedText 
                  text="AI Gaming" 
                  animation="word-by-word" 
                  delay={600}
                  className="block text-gradient"
                />
                <AnimatedText 
                  text="for All" 
                  animation="word-by-word" 
                  delay={800}
                  className="block"
                />
              </h1>

              <Transition animation="fade" show={isLoaded} delay={1000}>
                <p className="text-lg md:text-xl text-emergence-gray-600 max-w-xl mt-6">
                  Democratizing access to Web3 wealth creation through AI-driven foresight
                  and culturally rooted tools for underserved communities.
                </p>
              </Transition>
            </div>
            
            {/* CTA Buttons */}
            <Transition animation="slide-up" show={isLoaded} delay={1200}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/register" 
                  className="bg-emergence-blue text-white px-8 py-4 rounded-full font-medium hover:shadow-md hover:translate-y-[-2px] transition-all flex items-center justify-center"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/predictions" 
                  className="bg-white text-emergence-black px-8 py-4 rounded-full font-medium border border-emergence-gray-200 hover:border-emergence-blue/50 hover:shadow-sm transition-all flex items-center justify-center"
                >
                  <span>See Predictions</span>
                </Link>
              </div>
            </Transition>
            
            {/* Stats */}
            <Transition animation="fade" show={isLoaded} delay={1400}>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-emergence-gray-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emergence-blue">23%</div>
                  <div className="text-sm text-emergence-gray-600">Black crypto ownership</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emergence-blue">$541B</div>
                  <div className="text-sm text-emergence-gray-600">AI gaming future</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emergence-blue">50+</div>
                  <div className="text-sm text-emergence-gray-600">Minority-majority cities</div>
                </div>
              </div>
            </Transition>
          </div>
          
          {/* Right Column - Abstract Graphic/Visual */}
          <div className="relative">
            <Transition animation="blur" show={isLoaded} delay={400} className="relative z-10">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-full bg-emergence-blue opacity-10 animate-pulse-slow"></div>
                <div className="absolute inset-[10%] rounded-full bg-white shadow-lg glass border border-white/30 overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Floating elements - Bitcoin and AI visuals */}
                    <div className="absolute top-[20%] left-[25%] bg-emergence-blue/10 p-4 rounded-2xl animate-float shadow-sm">
                      <TrendingUp className="text-emergence-blue w-10 h-10" />
                    </div>
                    <div className="absolute bottom-[25%] right-[20%] bg-emergence-blue/10 p-4 rounded-2xl animate-float shadow-sm" style={{animationDelay: "1s"}}>
                      <BarChart3 className="text-emergence-blue w-10 h-10" />
                    </div>
                    <div className="absolute top-[50%] right-[30%] bg-emergence-blue/10 p-4 rounded-2xl animate-float shadow-sm" style={{animationDelay: "2s"}}>
                      <Users className="text-emergence-blue w-10 h-10" />
                    </div>
                    
                    {/* Bitcoin Logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-24 h-24 bg-emergence-blue/90 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-pulse-slow shadow-lg">
                        ₿
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emergence-blue/5 to-emergence-light-blue/5 rounded-full animate-pulse-slow" style={{animationDuration: "8s"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
