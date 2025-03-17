
import React from "react";
import { ShieldCheck, TrendingUp, Sparkles, BarChart, Calendar, Zap, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import Transition from "./ui/Transition";
import { Badge } from "./ui/badge";

const AIPredictions: React.FC = () => {
  const predictions = [
    {
      title: "Memphis to become Black Bitcoin capital by 2026",
      growth: "400%",
      description: "Based on current adoption rates and community initiatives",
      icon: <TrendingUp className="text-emergence-blue" size={20} />,
      category: "Geography",
      delay: 100
    },
    {
      title: "Play-to-earn games with low entry barriers emerging",
      growth: "250%",
      description: "Axie Infinity-style models for unbanked users gaining traction",
      icon: <Sparkles className="text-emergence-blue" size={20} />,
      category: "Gaming",
      delay: 200
    },
    {
      title: "Urban crypto volatility patterns identified",
      growth: "170%",
      description: "Meme coins and community tokens showing unique patterns",
      icon: <BarChart className="text-emergence-blue" size={20} />,
      category: "Markets",
      delay: 300
    },
    {
      title: "Atlanta's Black NFT collective exclusive drop",
      growth: "83%",
      description: "Projected ROI based on pre-launch community engagement",
      icon: <PieChart className="text-emergence-blue" size={20} />,
      category: "NFTs",
      delay: 400
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-mesh">
      <div className="noise-bg"></div>
      <div className="page-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Transition animation="slide-up">
            <Badge variant="primary" className="mb-4">AI-Powered Insights</Badge>
            <h2 className="text-4xl font-bold mb-6">Minority-Centric Predictions</h2>
            <p className="text-emergence-gray-600 text-lg">
              Our AI analyzes 10,000+ data points daily to predict micro-trends, providing
              insights specifically tailored for underserved communities.
            </p>
          </Transition>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {predictions.map((prediction, index) => (
            <PredictionCard key={index} prediction={prediction} />
          ))}
        </div>

        {/* AI Engine Visual */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Transition animation="fade" delay={500}>
            <div className="relative rounded-2xl border border-emergence-gray-200 bg-white/60 backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-5 h-5 text-emergence-blue mr-2" />
                <h3 className="text-xl font-medium">AI Prediction Engine</h3>
              </div>
              
              <div className="bg-emergence-gray-100 rounded-xl p-4 font-mono text-sm text-emergence-gray-800 overflow-x-auto">
                <div className="flex items-center text-emergence-gray-500 mb-2">
                  <Zap size={16} className="mr-2 text-emergence-blue" />
                  <span>Sample AI prediction model</span>
                </div>
                <pre className="whitespace-pre-wrap">
{`# Analyzing minority adoption patterns
def minority_trend_forecast():
    data = scrape_urban_social_media() + analyze_chainlink_oracles()
    model = train_llm(on=[2,4,6]) # Minority crypto adoption studies
    return predict_web3_hot_zones(model, threshold=0.89)

# Results verified: 25% of Black gamers use crypto vs. 8% white gamers`}
                </pre>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <Calendar size={18} className="text-emergence-gray-500 mr-2" />
                  <span className="text-sm text-emergence-gray-500">Updated daily</span>
                </div>
                <Badge variant="primary" size="sm">99.4% accuracy</Badge>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

interface PredictionCardProps {
  prediction: {
    title: string;
    growth: string;
    description: string;
    icon: React.ReactNode;
    category: string;
    delay: number;
  };
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  return (
    <Card 
      className="group"
    >
      <div className="flex justify-between items-start mb-4">
        <Badge variant="primary" size="sm">{prediction.category}</Badge>
        <div className="h-10 w-10 rounded-full bg-emergence-blue/10 flex items-center justify-center transition-all duration-300 group-hover:bg-emergence-blue/20">
          {prediction.icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-emergence-blue transition-colors">
        {prediction.title}
      </h3>
      
      <p className="text-emergence-gray-600 mb-4">
        {prediction.description}
      </p>
      
      <div className="flex items-center mt-auto">
        <span className="text-emergence-blue font-semibold mr-2">
          {prediction.growth} growth
        </span>
        <TrendingUp size={16} className="text-emergence-blue" />
      </div>
    </Card>
  );
};

export default AIPredictions;
