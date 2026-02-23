"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  number: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { number: 200, suffix: "+", label: "Suppliers" },
  { number: 500, suffix: "+", label: "Buyers" },
  { number: 7500, suffix: "+", label: "Parts Shipped" },
  { number: 90, suffix: "+", label: "Successful Projects" },
];

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(target * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-5xl font-bold tracking-tight md:text-6xl">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
            TRUSTED GLOBALLY
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Proven Track Record
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 transition-all hover:border-gray-300 hover:shadow-xl"
            >
              <div className="text-gray-900">
                <Counter 
                  target={stat.number} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                />
              </div>
              <div className="mt-3 text-base font-medium text-gray-600">
                {stat.label}
              </div>
              <div className="mt-4 h-1 w-12 rounded-full bg-green-500 transition-all group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}