
import React from "react";
import { CircleUser, Lightbulb, Code, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Card from "./ui/Card";
import Transition from "./ui/Transition";
import Badge from "./ui/Badge";
import { Link } from "react-router-dom";

const WebToolkits: React.FC = () => {
  const toolkits = [
    {
      title: "Bitcoin Literacy Modules",
      description: "Interactive courses using AI avatars of minority crypto pioneers like Isaiah Jackson and Cleve Mesidor.",
      icon: <CircleUser size={24} className="text-emergence-blue" />,
      features: ["Interactive lessons", "AI avatars", "Real-world scenarios"],
      delay: 100
    },
    {
      title: "Decentralized Launchpad",
      description: "Curated IDO platform for minority-led Web3 projects with priority access for Black/Latino founders.",
      icon: <Lightbulb size={24} className="text-emergence-blue" />,
      features: ["Priority access", "Polygon integration", "Exclusive drops"],
      delay: 200
    },
    {
      title: "Hype Score API",
      description: "Algorithm scoring projects by cultural relevance and financial viability for smart investment decisions.",
      icon: <Code size={24} className="text-emergence-blue" />,
      features: ["Cultural relevance scores", "Financial analysis", "Community metrics"],
      delay: 300
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="bg-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Transition animation="slide-up">
              <Badge variant="primary" className="mb-4">Web3 Tools</Badge>
              <h2 className="text-4xl font-bold mb-6">"By Us, For Us" Toolkits</h2>
              <p className="text-emergence-gray-600 text-lg">
                Culturally authentic Web3 tools designed specifically for minority 
                communities to create and capture value in the decentralized economy.
              </p>
            </Transition>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {toolkits.map((toolkit, index) => (
              <ToolkitCard key={index} toolkit={toolkit} />
            ))}
          </div>

          {/* Testimonial/Social Proof */}
          <Transition animation="fade" delay={400} className="mt-20">
            <div className="bg-gradient-to-br from-emergence-blue/5 to-emergence-blue/10 rounded-2xl p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <Badge variant="primary" size="md">Social Proof</Badge>
                <ShieldCheck className="text-emergence-blue" size={24} />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <h3 className="text-2xl font-bold text-emergence-blue mb-2">15+</h3>
                  <p className="text-emergence-gray-700">Black-led DAOs using our platform</p>
                </div>
                
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <h3 className="text-2xl font-bold text-emergence-blue mb-2">$2M+</h3>
                  <p className="text-emergence-gray-700">To Latino creators in Q1 2025</p>
                </div>
                
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <h3 className="text-2xl font-bold text-emergence-blue mb-2">3</h3>
                  <p className="text-emergence-gray-700">Top BET Awards metaverse events</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-emergence-gray-700 italic">
                  "EMERGENCE has completely transformed how our community connects with Web3 technology.
                  The culturally relevant approach makes all the difference."
                </p>
                <p className="mt-4 font-medium">— Community Leader, Black Bitcoin Billionaires</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

interface ToolkitCardProps {
  toolkit: {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    delay: number;
  };
}

const ToolkitCard: React.FC<ToolkitCardProps> = ({ toolkit }) => {
  return (
    <Card 
      variant="outline" 
      padding="lg" 
      animation="slide-up" 
      delay={toolkit.delay}
      hover="border"
      className="group"
    >
      <div className="h-12 w-12 rounded-full bg-emergence-blue/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-emergence-blue/20">
        {toolkit.icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-emergence-blue transition-colors">
        {toolkit.title}
      </h3>
      
      <p className="text-emergence-gray-600 mb-6">
        {toolkit.description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {toolkit.features.map((feature, index) => (
          <li key={index} className="flex items-center text-emergence-gray-700">
            <div className="w-1.5 h-1.5 rounded-full bg-emergence-blue mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        to="#" 
        className="inline-flex items-center text-emergence-blue font-medium mt-auto group-hover:underline"
      >
        <span>Learn more</span>
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
};

export default WebToolkits;
