"use client";

import { useState, useEffect } from 'react';
import { CheckCircle, FileText, Layers, ThumbsUp, DollarSign, Package, Rocket, Users } from 'lucide-react';

const ProcessInfographic = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      id: 1, 
      title: "RFQ Received", 
      desc: "Customer submits request with drawings, specs & quantity",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    { 
      id: 2, 
      title: "Feasibility & Manufacturing Study", 
      desc: "Technical analysis of requirements & manufacturing capability",
      icon: Layers,
      color: "from-purple-500 to-purple-600"
    },
    { 
      id: 3, 
      title: "DFM Creation", 
      desc: "Design for Manufacturing documentation prepared",
      icon: FileText,
      color: "from-indigo-500 to-indigo-600"
    },
    { 
      id: 4, 
      title: "DFM Approval & Drawing Freeze", 
      desc: "Customer approves DFM, specifications locked",
      icon: ThumbsUp,
      color: "from-green-500 to-green-600"
    },
    { 
      id: 5, 
      title: "Quote / Proposal Submission", 
      desc: "Detailed pricing & timeline proposal shared",
      icon: DollarSign,
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      id: 6, 
      title: "Commercial Approval", 
      desc: "Terms agreed, purchase order issued",
      icon: CheckCircle,
      color: "from-orange-500 to-orange-600"
    },
    { 
      id: 7, 
      title: "Prototype Sample Submission", 
      desc: "Initial prototype manufactured & submitted",
      icon: Package,
      color: "from-red-500 to-red-600"
    },
    { 
      id: 8, 
      title: "Prototype Approval", 
      desc: "Customer validates prototype quality & design",
      icon: ThumbsUp,
      color: "from-pink-500 to-pink-600"
    },
    { 
      id: 9, 
      title: "Production Sample Submission", 
      desc: "Production-spec samples manufactured & tested",
      icon: Package,
      color: "from-teal-500 to-teal-600"
    },
    { 
      id: 10, 
      title: "Sample Approval", 
      desc: "Final quality validation before mass production",
      icon: CheckCircle,
      color: "from-cyan-500 to-cyan-600"
    },
    { 
      id: 11, 
      title: "Mass Batch Submission", 
      desc: "First production batch manufactured & delivered",
      icon: Rocket,
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      id: 12, 
      title: "Mass Production", 
      desc: "Full-scale manufacturing & continuous delivery",
      icon: Users,
      color: "from-lime-500 to-lime-600"
    }
  ];

  // Auto-loop animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-gray-900 px-4 py-1.5 text-sm font-medium text-white mb-4">
            OUR PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Operate
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive 12-step process from RFQ to mass production
          </p>
        </div>

        {/* Process Flow with Animated Arrows */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;
            
            return (
              <div
                key={step.id}
                className="relative"
              >
                {/* Step Card */}
                <div
                  className={`
                    transform transition-all duration-500 ease-out
                    ${isActive ? 'scale-105 z-10' : 'scale-100'}
                    ${isPast ? 'opacity-70' : 'opacity-100'}
                  `}
                >
                  <div className={`
                    relative overflow-hidden
                    bg-white rounded-2xl p-6
                    border-2 transition-all duration-300
                    ${isActive 
                      ? 'border-green-500 shadow-2xl shadow-green-500/20' 
                      : 'border-gray-200 shadow-lg'
                    }
                  `}>
                    {/* Step Number Badge */}
                    <div className={`
                      absolute top-4 right-4 w-10 h-10 rounded-full
                      flex items-center justify-center
                      text-sm font-bold text-white
                      bg-gradient-to-br ${step.color}
                      ${isActive ? 'ring-4 ring-green-500/30 animate-pulse' : ''}
                    `}>
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-2xl mb-4
                      flex items-center justify-center
                      bg-gradient-to-br ${step.color}
                      transform transition-transform duration-300
                      ${isActive ? 'scale-110 rotate-3' : ''}
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500">
                        <div className="h-full bg-white/30 animate-pulse" />
                      </div>
                    )}

                    {/* Completion Check */}
                    {isPast && (
                      <div className="absolute top-4 left-4">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Animated Arrow Connectors */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal Arrow (between items in same row) */}
                    {index % 3 !== 2 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 z-20 w-8 h-8">
                        <svg 
                          className={`w-full h-full transition-all duration-500 ${
                            isPast || isActive ? 'text-green-500' : 'text-gray-300'
                          }`}
                          viewBox="0 0 24 24" 
                          fill="none"
                        >
                          {/* Animated arrow path */}
                          <path 
                            d="M5 12h14m-6-6l6 6-6 6" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className={isActive ? 'animate-pulse' : ''}
                          />
                          {/* Animated dot that travels along arrow */}
                          {isActive && (
                            <circle 
                              cx="12" 
                              cy="12" 
                              r="2" 
                              fill="currentColor"
                              className="animate-ping"
                            />
                          )}
                        </svg>
                      </div>
                    )}

                    {/* Vertical Arrow (between rows) */}
                    {index % 3 === 2 && index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rotate-90">
                        <svg 
                          className={`w-full h-full transition-all duration-500 ${
                            isPast || isActive ? 'text-green-500' : 'text-gray-300'
                          }`}
                          viewBox="0 0 24 24" 
                          fill="none"
                        >
                          <path 
                            d="M5 12h14m-6-6l6 6-6 6" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className={isActive ? 'animate-pulse' : ''}
                          />
                          {isActive && (
                            <circle 
                              cx="12" 
                              cy="12" 
                              r="2" 
                              fill="currentColor"
                              className="animate-ping"
                            />
                          )}
                        </svg>
                      </div>
                    )}

                    {/* Mobile/Tablet: Simple vertical connecting line */}
                    <div className="lg:hidden flex justify-center my-4">
                      <div className={`w-1 h-8 rounded-full transition-colors duration-500 ${
                        isPast || isActive ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {isActive && (
                          <div className="w-full h-full bg-white/30 animate-pulse rounded-full" />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessInfographic;