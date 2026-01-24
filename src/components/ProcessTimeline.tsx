'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FileText, 
  Search, 
  FileEdit, 
  CheckCircle, 
  Package, 
  Settings, 
  ClipboardCheck, 
  Factory, 
  Shield, 
  Truck, 
  BarChart, 
  MessageSquare,
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Users
} from 'lucide-react';

const TimelineProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(null);
  const containerRef = useRef(null);

  // Define phase types
  const phaseColors = {
    Discovery: { gradient: "from-blue-500 to-blue-600", text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-500" },
    Engineering: { gradient: "from-purple-500 to-purple-600", text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-500" },
    Prototyping: { gradient: "from-orange-500 to-orange-600", text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-500" },
    Validation: { gradient: "from-green-500 to-green-600", text: "text-green-600", bg: "bg-green-50", border: "border-green-500" },
    Manufacturing: { gradient: "from-red-500 to-red-600", text: "text-red-600", bg: "bg-red-50", border: "border-red-500" },
    Fulfillment: { gradient: "from-teal-500 to-teal-600", text: "text-teal-600", bg: "bg-teal-50", border: "border-teal-500" }
  };

  const processes = [
    { 
      id: 1, 
      title: "RFQ Receipt", 
      description: "We receive and analyze your technical requirements",
      details: "Our team reviews your RFQ documentation, technical drawings, and specifications. We confirm material requirements, quantity, and timeline expectations.",
      icon: FileText, 
      phase: "Discovery", 
      duration: "1 day",
      deliverables: ["RFQ Acknowledgment", "Initial Assessment"],
      teamInvolved: "Sales & Engineering"
    },
    { 
      id: 2, 
      title: "Feasibility Study", 
      description: "Comprehensive technical and manufacturing analysis",
      details: "Our engineering team evaluates machine capabilities, material availability, and manufacturing complexity. We identify potential challenges and provide preliminary cost estimates.",
      icon: Search, 
      phase: "Discovery", 
      duration: "2-3 days",
      deliverables: ["Feasibility Report", "Cost Estimate"],
      teamInvolved: "Engineering Team"
    },
    { 
      id: 3, 
      title: "DFM Creation", 
      description: "Design for Manufacturing optimization",
      details: "We create detailed DFM recommendations to optimize your design for CNC machining. This includes tolerance optimization, material selection refinement, and cost reduction suggestions.",
      icon: FileEdit, 
      phase: "Engineering", 
      duration: "3-4 days",
      deliverables: ["DFM Document", "CAD Markups", "Optimization Report"],
      teamInvolved: "Design Engineers"
    },
    { 
      id: 4, 
      title: "DFM Approval", 
      description: "Client review and design validation",
      details: "You review our DFM recommendations and provide feedback. We incorporate any changes and finalize the manufacturing specifications together.",
      icon: CheckCircle, 
      phase: "Engineering", 
      duration: "1-2 days",
      deliverables: ["Approved DFM", "Final Specifications"],
      teamInvolved: "Client & Engineering"
    },
    { 
      id: 5, 
      title: "Prototype Development", 
      description: "First article sample manufacturing",
      details: "Our vetted machining partners produce the first article using the approved specifications. CNC programs are developed and optimized for your part geometry.",
      icon: Package, 
      phase: "Prototyping", 
      duration: "5-7 days",
      deliverables: ["Prototype Parts", "Process Documentation"],
      teamInvolved: "Manufacturing Partners"
    },
    { 
      id: 6, 
      title: "Sample Testing", 
      description: "Rigorous quality verification and testing",
      details: "Complete dimensional inspection using CMM, surface finish verification, and functional testing. We validate against your specifications and industry standards.",
      icon: Settings, 
      phase: "Prototyping", 
      duration: "2-3 days",
      deliverables: ["Inspection Report", "Test Results", "Photos"],
      teamInvolved: "Quality Control"
    },
    { 
      id: 7, 
      title: "Sample Approval", 
      description: "Client validates prototype quality",
      details: "You receive the prototype samples with complete inspection documentation. We address any concerns and make necessary adjustments before mass production.",
      icon: ClipboardCheck, 
      phase: "Validation", 
      duration: "1-3 days",
      deliverables: ["Approved Samples", "Sign-off Documentation"],
      teamInvolved: "Client & Quality Team"
    },
    { 
      id: 8, 
      title: "Mass Production", 
      description: "Full-scale precision manufacturing",
      details: "Production begins with optimized CNC programs and validated processes. We maintain strict process controls and real-time monitoring throughout the production run.",
      icon: Factory, 
      phase: "Manufacturing", 
      duration: "10-20 days",
      deliverables: ["Production Parts", "Process Records"],
      teamInvolved: "Production Team"
    },
    { 
      id: 9, 
      title: "Quality Inspection", 
      description: "100% parts verification and validation",
      details: "Every single part undergoes thorough inspection. We perform dimensional checks, surface finish verification, and functional testing to ensure zero-defect delivery.",
      icon: Shield, 
      phase: "Manufacturing", 
      duration: "Concurrent",
      deliverables: ["QC Reports", "Certificates", "Inspection Data"],
      teamInvolved: "Quality Assurance"
    },
    { 
      id: 10, 
      title: "Logistics & Packaging", 
      description: "Professional packaging and shipping coordination",
      details: "Parts are carefully packaged with protective materials. We coordinate with reliable freight partners and provide tracking information for complete visibility.",
      icon: Truck, 
      phase: "Fulfillment", 
      duration: "2-5 days",
      deliverables: ["Packaged Goods", "Shipping Documents", "Tracking Info"],
      teamInvolved: "Logistics Team"
    },
    { 
      id: 11, 
      title: "Reporting & Documentation", 
      description: "Comprehensive project documentation",
      details: "You receive complete documentation including quality reports, inspection certificates, material certifications, and performance metrics.",
      icon: BarChart, 
      phase: "Fulfillment", 
      duration: "1 day",
      deliverables: ["Final Reports", "Certificates", "Performance Metrics"],
      teamInvolved: "Documentation Team"
    },
    { 
      id: 12, 
      title: "Feedback & Improvement", 
      description: "Continuous enhancement and support",
      details: "We gather your feedback, analyze project performance, and identify opportunities for improvement. This ensures even better results on your next order.",
      icon: MessageSquare, 
      phase: "Fulfillment", 
      duration: "Ongoing",
      deliverables: ["Feedback Survey", "Improvement Plan", "Future Recommendations"],
      teamInvolved: "Customer Success"
    }
  ];

  const phases = ["Discovery", "Engineering", "Prototyping", "Validation", "Manufacturing", "Fulfillment"];

  return (
    <div ref={containerRef} className="w-full py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
          >
            Our Systematic Process
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            From RFQ to Delivery
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every precision part follows our proven 12-step workflow, ensuring quality, transparency, and timely delivery
          </p>
        </motion.div>

        {/* Phase Pills Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {phases.map((phase, index) => {
            const phaseColor = phaseColors[phase];
            return (
              <motion.div
                key={phase}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${phaseColor.gradient} text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  {phase}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-green-600"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Animated Progress Indicator */}
          <motion.div 
            className="absolute left-8 md:left-1/2 w-1 bg-gradient-to-b from-green-400 to-emerald-400 shadow-lg shadow-green-500/50"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Process Steps */}
          <div className="space-y-16">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isLeft = index % 2 === 0;
              const colors = phaseColors[process.phase];
              const isActive = activeStep === process.id;

              return (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline Dot with Pulse Animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute left-8 md:left-1/2 -ml-4 md:-ml-5 z-20"
                  >
                    <div className="relative">
                      {/* Pulse Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.gradient} opacity-30`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Main Dot */}
                      <div className={`relative w-10 h-10 rounded-full bg-gradient-to-r ${colors.gradient} border-4 border-white shadow-xl flex items-center justify-center`}>
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onHoverStart={() => setActiveStep(process.id)}
                      onHoverEnd={() => setActiveStep(null)}
                      className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 border-l-4 ${colors.border} relative overflow-hidden group cursor-pointer`}
                    >
                      {/* Background Gradient Overlay */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`} />
                      
                      {/* Step Number Badge */}
                      <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r ${colors.gradient} text-white flex items-center justify-center font-bold text-lg shadow-lg`}>
                        {process.id}
                      </div>

                      {/* Header */}
                      <div className="flex items-start gap-5 mb-5">
                        <motion.div
                          className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>
                              Step {process.id}
                            </span>
                            <span className="text-gray-400">•</span>
                            <div className="flex items-center gap-1 text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span className="text-xs font-medium">{process.duration}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all">
                            {process.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4 font-medium text-lg leading-relaxed">
                        {process.description}
                      </p>

                      {/* Expanded Details (on hover) */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-4 border-t-2 ${colors.border} border-opacity-20 space-y-4`}>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {process.details}
                          </p>
                          
                          {/* Deliverables */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Deliverables</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {process.deliverables.map((deliverable, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Team Involved */}
                          <div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-500" />
                              <span className="text-xs font-medium text-gray-600">
                                Team: <span className="font-semibold text-gray-800">{process.teamInvolved}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Phase Badge */}
                      <div className="mt-5 flex items-center justify-between">
                        <span className={`text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r ${colors.gradient} text-white shadow-md`}>
                          {process.phase} Phase
                        </span>

                        {/* Next Step Arrow */}
                        {index < processes.length - 1 && (
                          <motion.div
                            className="flex items-center gap-2 text-green-600 text-sm font-semibold"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                          >
                            <span className="hidden md:inline">Next</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </motion.div>
                        )}
                      </div>

                      {/* Hover Indicator Text */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 0 : 1 }}
                        className="mt-3 text-xs text-gray-400 italic"
                      >
                        Hover for more details
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineProcessFlow;