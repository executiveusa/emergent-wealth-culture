
import React, { useState } from "react";
import { MapPin, Users, TrendingUp, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import Transition from "./ui/Transition";
import Badge from "./ui/Badge";

const CommunityImpact: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(0);
  
  const cities = [
    {
      name: "Detroit, MI",
      bitcoinAdoption: 34,
      yearOverYearGrowth: 156,
      communityEvents: 12,
      ranking: 1
    },
    {
      name: "Atlanta, GA",
      bitcoinAdoption: 29,
      yearOverYearGrowth: 143,
      communityEvents: 18,
      ranking: 2
    },
    {
      name: "Houston, TX",
      bitcoinAdoption: 26,
      yearOverYearGrowth: 112,
      communityEvents: 9,
      ranking: 3
    },
    {
      name: "Bronx, NY",
      bitcoinAdoption: 25,
      yearOverYearGrowth: 98,
      communityEvents: 14,
      ranking: 4
    },
    {
      name: "Memphis, TN",
      bitcoinAdoption: 23,
      yearOverYearGrowth: 187,
      communityEvents: 7,
      ranking: 5
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-mesh">
      <div className="noise-bg"></div>
      <div className="page-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Transition animation="slide-up">
            <Badge variant="primary" className="mb-4">Community Impact</Badge>
            <h2 className="text-4xl font-bold mb-6">Building Local Wealth</h2>
            <p className="text-emergence-gray-600 text-lg">
              Tracking real-world impact and Web3 adoption across minority-majority cities,
              highlighting the communities leading the Bitcoin revolution.
            </p>
          </Transition>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* City Rankings */}
          <Transition animation="slide-up" delay={100}>
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <div className="flex items-center mb-6">
                <MapPin className="text-emergence-blue mr-2" size={20} />
                <h3 className="text-xl font-semibold">City Rankings</h3>
              </div>
              
              <div className="space-y-4">
                {cities.map((city, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-full p-4 rounded-xl border transition-all flex items-center",
                      selectedCity === index
                        ? "border-emergence-blue bg-emergence-blue/5"
                        : "border-emergence-gray-200 hover:border-emergence-blue/30"
                    )}
                    onClick={() => setSelectedCity(index)}
                  >
                    <div className="w-8 h-8 rounded-full bg-emergence-gray-100 flex items-center justify-center font-medium mr-4">
                      {city.ranking}
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium">{city.name}</h4>
                      <p className="text-sm text-emergence-gray-500">
                        {city.bitcoinAdoption}% adoption rate
                      </p>
                    </div>
                    <div className="ml-auto flex items-center text-green-600 text-sm">
                      <TrendingUp size={14} className="mr-1" />
                      <span>{city.yearOverYearGrowth}% growth</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Transition>
          
          {/* City Details */}
          <Transition animation="slide-up" delay={200}>
            <div className="bg-gradient-to-br from-emergence-blue/5 to-emergence-blue/10 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Badge variant="primary" size="sm" className="mb-2">Hyperlocal Insights</Badge>
                  <h3 className="text-2xl font-semibold">
                    {cities[selectedCity].name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Award className="text-emergence-blue" size={24} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5">
                  <p className="text-sm text-emergence-gray-500 mb-1">Bitcoin Adoption</p>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-emergence-blue">
                      {cities[selectedCity].bitcoinAdoption}%
                    </span>
                  </div>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5">
                  <p className="text-sm text-emergence-gray-500 mb-1">YoY Growth</p>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-emergence-blue">
                      {cities[selectedCity].yearOverYearGrowth}%
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Community Events */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-emergence-blue mr-2" size={18} />
                  <h4 className="font-medium">Community Engagement</h4>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="text-3xl font-bold text-emergence-blue mr-3">
                    {cities[selectedCity].communityEvents}
                  </div>
                  <div className="text-emergence-gray-600">
                    Web3 community events<br /> in the last month
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="secondary" size="sm">
                    {Math.round(cities[selectedCity].bitcoinAdoption * 0.8)}% Black ownership
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    {Math.round(cities[selectedCity].bitcoinAdoption * 0.6)}% Latino ownership
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    P2E Earnings Rank: #{cities[selectedCity].ranking}
                  </Badge>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
