'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function ProcessFlowchart() {
  const words = "How Partiq Delivers — On Demand".split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: 0.04 
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Word-by-word animated heading with curved box */}
        <div className="flex justify-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg px-8 py-6 border border-gray-200 inline-block"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                key={index}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        
        {/* Your flowchart with subtle animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <Image
            src="/flowchart.png"
            alt="Partiq Manufacturing Process Flowchart"
            width={3840}
            height={2160}
            className="w-full h-auto"
            priority
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
}