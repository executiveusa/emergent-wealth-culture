
import React, { useState } from "react";
import { Play, ChevronRight, Lightbulb, BookOpen, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Transition from "./ui/Transition";
import { Badge } from "./ui/badge-redirects";
import Card from "./ui/Card";

const BitcoinLiteracy: React.FC = () => {
  const [activeModule, setActiveModule] = useState(0);
  
  const modules = [
    {
      title: "Bitcoin Basics",
      description: "Learn the fundamental concepts of Bitcoin and blockchain technology.",
      progress: 100,
      completed: true,
      lessons: 5,
      duration: "45 min"
    },
    {
      title: "Wealth Building Strategies",
      description: "Discover strategies for long-term wealth creation with Bitcoin.",
      progress: 60,
      completed: false,
      lessons: 7,
      duration: "1h 20min"
    },
    {
      title: "Security & Custody",
      description: "Master the techniques to secure your digital assets.",
      progress: 30,
      completed: false,
      lessons: 4,
      duration: "55 min"
    },
    {
      title: "Community Economics",
      description: "Learn how Bitcoin can transform community wealth structures.",
      progress: 0,
      completed: false,
      lessons: 6,
      duration: "1h 10min"
    }
  ];

  const mentors = [
    { name: "Isaiah Jackson", role: "Author, Bitcoin & Black America", image: "https://picsum.photos/id/65/200" },
    { name: "Cleve Mesidor", role: "Executive Director, Blockchain Foundation", image: "https://picsum.photos/id/64/200" }
  ];

  return (
    <section className="section-padding bg-emergence-gray-100">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Transition animation="slide-up">
            <Badge variant="default" className="mb-4 bg-emergence-blue/10 text-emergence-blue">Interactive Learning</Badge>
            <h2 className="text-4xl font-bold mb-6">Bitcoin Literacy Modules</h2>
            <p className="text-emergence-gray-600 text-lg">
              Interactive courses featuring AI avatars of minority crypto pioneers,
              teaching practical Bitcoin skills through real-world scenarios.
            </p>
          </Transition>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left side - Module selection */}
          <div className="md:col-span-1">
            <Transition animation="slide-up" delay={100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <BookOpen size={18} className="mr-2 text-emergence-blue" />
                  Learning Modules
                </h3>
                
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-full text-left p-3 rounded-xl transition-all flex items-center justify-between",
                        activeModule === index 
                          ? "bg-emergence-blue/10 text-emergence-blue" 
                          : "hover:bg-emergence-gray-100"
                      )}
                      onClick={() => setActiveModule(index)}
                    >
                      <div className="flex items-center">
                        {module.completed ? (
                          <CheckCircle2 size={16} className="text-green-500 mr-2" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-emergence-gray-300 mr-2 flex-shrink-0" />
                        )}
                        <span>{module.title}</span>
                      </div>
                      <ChevronRight size={16} className="text-emergence-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </Transition>
            
            {/* Mentors */}
            <Transition animation="fade" delay={300}>
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Lightbulb size={18} className="mr-2 text-emergence-blue" />
                  Featured Mentors
                </h3>
                
                <div className="space-y-4">
                  {mentors.map((mentor, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{mentor.name}</p>
                        <p className="text-xs text-emergence-gray-500">{mentor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Transition>
          </div>

          {/* Right side - Module content */}
          <div className="md:col-span-2">
            <Transition animation="slide-up" delay={200}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* Module video preview */}
                <div className="relative aspect-video bg-emergence-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
                      <Play size={24} className="text-white ml-1" />
                    </button>
                  </div>
                  <img 
                    src="https://picsum.photos/id/60/800/400" 
                    alt="Module preview"
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                </div>
                
                {/* Module details */}
                <div className="p-6">
                  <Badge 
                    variant={modules[activeModule].completed ? "outline" : "default"}
                    className={modules[activeModule].completed ? "bg-green-100 text-green-800" : "bg-emergence-blue/10 text-emergence-blue"}
                  >
                    {modules[activeModule].completed ? "Completed" : "In Progress"}
                  </Badge>
                  
                  <h3 className="text-2xl font-semibold mb-2">
                    {modules[activeModule].title}
                  </h3>
                  
                  <p className="text-emergence-gray-600 mb-6">
                    {modules[activeModule].description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-emergence-gray-200 rounded-full mb-4">
                    <div 
                      className="h-full bg-emergence-blue rounded-full"
                      style={{ width: `${modules[activeModule].progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-emergence-gray-500">
                    <span>{modules[activeModule].progress}% complete</span>
                    <span>{modules[activeModule].lessons} lessons • {modules[activeModule].duration}</span>
                  </div>
                  
                  {/* Continue button */}
                  <button className="mt-6 w-full bg-emergence-blue text-white py-3 rounded-xl font-medium hover:bg-emergence-blue/90 transition-all flex items-center justify-center">
                    {modules[activeModule].completed ? "Review Module" : "Continue Learning"}
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </Transition>
            
            {/* Real-world scenario preview */}
            <Transition animation="fade" delay={400}>
              <Card 
                variant="glass" 
                padding="md" 
                className="mt-6"
              >
                <Badge variant="secondary">Real-world Scenario</Badge>
                <h4 className="font-medium mt-2 mb-1">Simulate: Converting 15% of paycheck to BTC</h4>
                <p className="text-sm text-emergence-gray-600">
                  Practice dollar-cost averaging with a virtual simulation of recurring Bitcoin purchases.
                </p>
              </Card>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitcoinLiteracy;
